export interface VoiceOption {
  id: string;
  name: string;
  lang: string;
  gender: string;
}

export const DEFAULT_VOICES: VoiceOption[] = [
  { id: "en-US-AvaNeural", name: "Ava (美音女声 · 自然灵动)", lang: "en-US", gender: "Female" },
  { id: "en-US-AndrewNeural", name: "Andrew (美音男声 · 沉稳纯正)", lang: "en-US", gender: "Male" },
  { id: "en-US-EmmaNeural", name: "Emma (美音女声 · 亲切温和)", lang: "en-US", gender: "Female" },
  { id: "en-US-BrianNeural", name: "Brian (美音男声 · 现代生动)", lang: "en-US", gender: "Male" },
  { id: "en-GB-SoniaNeural", name: "Sonia (英音女声 · 纯正英伦)", lang: "en-GB", gender: "Female" },
  { id: "en-GB-RyanNeural", name: "Ryan (英音男声 · 磁性标准)", lang: "en-GB", gender: "Male" },
  { id: "zh-CN-XiaoxiaoNeural", name: "晓晓 (中英双语 · 自然流畅)", lang: "zh-CN", gender: "Female" },
  { id: "zh-CN-YunxiNeural", name: "云希 (中英双语 · 阳光清脆)", lang: "zh-CN", gender: "Male" },
];

type TTSListener = (state: {
  isPlaying: boolean;
  isPaused: boolean;
  currentText: string;
  voice: string;
  rate: number;
}) => void;

class TTSService {
  private isPlaying = false;
  private isPaused = false;
  private currentText = '';
  private voice = 'en-US-AvaNeural';
  private rate = 1.0;

  private activeAudio: HTMLAudioElement | null = null;
  private activeUtterance: SpeechSynthesisUtterance | null = null;
  private stopRequested = false;
  private listeners: Set<TTSListener> = new Set();

  constructor() {
    if (typeof window !== 'undefined') {
      const savedVoice = localStorage.getItem('gc_tts_voice');
      if (savedVoice) this.voice = savedVoice;
      const savedRate = localStorage.getItem('gc_tts_rate');
      if (savedRate) this.rate = parseFloat(savedRate) || 1.0;
    }
  }

  public subscribe(listener: TTSListener) {
    this.listeners.add(listener);
    this.notify();
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    const state = {
      isPlaying: this.isPlaying,
      isPaused: this.isPaused,
      currentText: this.currentText,
      voice: this.voice,
      rate: this.rate,
    };
    this.listeners.forEach((fn) => fn(state));
  }

  public getState() {
    return {
      isPlaying: this.isPlaying,
      isPaused: this.isPaused,
      currentText: this.currentText,
      voice: this.voice,
      rate: this.rate,
    };
  }

  public setVoice(voiceId: string) {
    this.voice = voiceId;
    if (typeof window !== 'undefined') {
      localStorage.setItem('gc_tts_voice', voiceId);
    }
    this.notify();
  }

  public setRate(rateVal: number) {
    this.rate = rateVal;
    if (typeof window !== 'undefined') {
      localStorage.setItem('gc_tts_rate', String(rateVal));
    }
    if (this.activeAudio) {
      this.activeAudio.playbackRate = rateVal;
    }
    this.notify();
  }

  public stop() {
    this.stopRequested = true;
    this.isPlaying = false;
    this.isPaused = false;
    this.currentText = '';

    if (this.activeAudio) {
      this.activeAudio.pause();
      this.activeAudio.currentTime = 0;
      this.activeAudio = null;
    }

    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    this.notify();
  }

  public pause() {
    if (this.activeAudio) {
      this.activeAudio.pause();
      this.isPaused = true;
      this.isPlaying = false;
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.pause();
      this.isPaused = true;
      this.isPlaying = false;
    }
    this.notify();
  }

  public resume() {
    if (this.activeAudio) {
      this.activeAudio.play();
      this.isPaused = false;
      this.isPlaying = true;
    } else if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.resume();
      this.isPaused = false;
      this.isPlaying = true;
    }
    this.notify();
  }

  public async speak(text: string, options?: { voice?: string; rate?: number }) {
    this.stop();
    this.stopRequested = false;

    const cleanText = text.replace(/[*_~`#>\-[\]]/g, '').trim();
    if (!cleanText) return;

    const voice = options?.voice || this.voice;
    const rateVal = options?.rate || this.rate;

    this.isPlaying = true;
    this.isPaused = false;
    this.currentText = cleanText;
    this.notify();

    // Convert rate to Edge TTS SSML format (e.g. 1.25 -> "+25%")
    const percentOffset = Math.round((rateVal - 1.0) * 100);
    const rateParam = percentOffset === 0 ? 'default' : `${percentOffset >= 0 ? '+' : ''}${percentOffset}%`;

    try {
      // 1. Try server-side MsEdgeTTS via Vite dev/preview plugin
      const res = await fetch(`/api/tts?voice=${encodeURIComponent(voice)}&rate=${encodeURIComponent(rateParam)}&text=${encodeURIComponent(cleanText)}`);
      if (!res.ok) {
        throw new Error(`Edge TTS HTTP status: ${res.status}`);
      }

      const blob = await res.blob();
      if (this.stopRequested) return;

      const audioUrl = URL.createObjectURL(blob);
      const audio = new Audio(audioUrl);
      this.activeAudio = audio;
      audio.playbackRate = rateVal;

      await new Promise<void>((resolve, reject) => {
        audio.onended = () => {
          URL.revokeObjectURL(audioUrl);
          this.activeAudio = null;
          if (this.currentText === cleanText) {
            this.isPlaying = false;
            this.currentText = '';
            this.notify();
          }
          resolve();
        };
        audio.onerror = (e) => {
          URL.revokeObjectURL(audioUrl);
          this.activeAudio = null;
          reject(e);
        };
        audio.play().catch(reject);
      });
    } catch (edgeError) {
      console.warn('[TTS] Edge TTS fallback to Web Speech API:', edgeError);

      // 2. Seamless fallback to browser Web Speech API
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        if (this.stopRequested) return;

        return new Promise<void>((resolve) => {
          const utterance = new SpeechSynthesisUtterance(cleanText);
          utterance.lang = voice.startsWith('zh') ? 'zh-CN' : voice.startsWith('en-GB') ? 'en-GB' : 'en-US';
          utterance.rate = rateVal;

          utterance.onend = () => {
            if (this.currentText === cleanText) {
              this.isPlaying = false;
              this.currentText = '';
              this.notify();
            }
            resolve();
          };

          utterance.onerror = (err) => {
            console.error('[TTS] Web Speech Synthesis Error:', err);
            this.isPlaying = false;
            this.currentText = '';
            this.notify();
            resolve();
          };

          this.activeUtterance = utterance;
          window.speechSynthesis.speak(utterance);
        });
      } else {
        this.isPlaying = false;
        this.currentText = '';
        this.notify();
      }
    }
  }
}

export const ttsService = new TTSService();
