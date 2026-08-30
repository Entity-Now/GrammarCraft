import React, { createContext, useContext, useEffect, useState } from 'react';
import { ttsService, DEFAULT_VOICES, type VoiceOption } from '../services/ttsService';

interface TTSContextType {
  isPlaying: boolean;
  isPaused: boolean;
  currentText: string;
  voice: string;
  rate: number;
  voices: VoiceOption[];
  speak: (text: string, options?: { voice?: string; rate?: number }) => Promise<void>;
  stop: () => void;
  pause: () => void;
  resume: () => void;
  setVoice: (voiceId: string) => void;
  setRate: (rateVal: number) => void;
}

const TTSContext = createContext<TTSContextType | null>(null);

export const TTSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ttsState, setTtsState] = useState(ttsService.getState());

  useEffect(() => {
    const unsubscribe = ttsService.subscribe((newState) => {
      setTtsState(newState);
    });
    return unsubscribe;
  }, []);

  const speak = (text: string, options?: { voice?: string; rate?: number }) => {
    return ttsService.speak(text, options);
  };

  const stop = () => ttsService.stop();
  const pause = () => ttsService.pause();
  const resume = () => ttsService.resume();
  const setVoice = (voiceId: string) => ttsService.setVoice(voiceId);
  const setRate = (rateVal: number) => ttsService.setRate(rateVal);

  return (
    <TTSContext.Provider
      value={{
        isPlaying: ttsState.isPlaying,
        isPaused: ttsState.isPaused,
        currentText: ttsState.currentText,
        voice: ttsState.voice,
        rate: ttsState.rate,
        voices: DEFAULT_VOICES,
        speak,
        stop,
        pause,
        resume,
        setVoice,
        setRate,
      }}
    >
      {children}
    </TTSContext.Provider>
  );
};

export const useTTS = () => {
  const context = useContext(TTSContext);
  if (!context) {
    throw new Error('useTTS must be used within a TTSProvider');
  }
  return context;
};
