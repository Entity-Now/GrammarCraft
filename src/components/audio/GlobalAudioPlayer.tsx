import React, { useState } from 'react';
import { Volume2, Pause, Play, Square, Settings2, Gauge, ChevronUp, ChevronDown } from 'lucide-react';
import { useTTS } from '../../context/TTSContext';

export const GlobalAudioPlayer: React.FC = () => {
  const { isPlaying, isPaused, currentText, voice, rate, voices, stop, pause, resume, setVoice, setRate } = useTTS();
  const [showSettings, setShowSettings] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  // If not playing and no current text, hide completely or keep a discreet mini bar
  if (!currentText && !isPlaying && !isPaused) {
    return null;
  }

  const currentVoiceObj = voices.find((v) => v.id === voice) || voices[0];
  const rateOptions = [0.75, 1.0, 1.25, 1.5];

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-lg w-full px-4 pointer-events-none transition-all duration-300">
      <div className="pointer-events-auto glass-panel rounded-2xl shadow-2xl shadow-zinc-950/15 border border-zinc-200/80 dark:border-zinc-800/80 overflow-hidden transition-all duration-300">
        {/* Main Bar */}
        <div className="p-3.5 flex items-center justify-between gap-3">
          {/* Audio Status & Text */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
              {isPlaying ? (
                <div className="flex items-center gap-0.5 h-4">
                  <span className="w-1 bg-emerald-500 rounded-full animate-wave-1"></span>
                  <span className="w-1 bg-emerald-500 rounded-full animate-wave-2"></span>
                  <span className="w-1 bg-emerald-500 rounded-full animate-wave-3"></span>
                </div>
              ) : (
                <Volume2 size={18} />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300">
                  {isPlaying ? '正在朗读' : isPaused ? '已暂停' : '准备就绪'}
                </span>
                <span className="text-xs text-zinc-400 dark:text-zinc-500 truncate">
                  {currentVoiceObj?.name.split(' ')[0]} · {rate}x
                </span>
              </div>
              <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 truncate mt-0.5">
                {currentText || '点击任意卡片音频按钮开始朗读'}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-1.5 shrink-0">
            {isPlaying ? (
              <button
                onClick={pause}
                title="暂停"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <Pause size={15} />
              </button>
            ) : (
              <button
                onClick={resume}
                title="继续"
                className="w-8 h-8 rounded-full flex items-center justify-center bg-emerald-500 text-white hover:bg-emerald-600 shadow-md shadow-emerald-500/20 transition-colors"
              >
                <Play size={15} className="ml-0.5" />
              </button>
            )}

            <button
              onClick={stop}
              title="停止"
              className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-rose-100 hover:text-rose-600 dark:hover:bg-rose-950/40 dark:hover:text-rose-400 transition-colors"
            >
              <Square size={13} />
            </button>

            <button
              onClick={() => setShowSettings(!showSettings)}
              title="语音设置"
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                showSettings
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              <Settings2 size={15} />
            </button>
          </div>
        </div>

        {/* Expandable Settings Drawer */}
        {showSettings && (
          <div className="px-4 py-3 border-t border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/70 space-y-3 text-xs">
            <div>
              <label className="block text-zinc-500 dark:text-zinc-400 font-medium mb-1.5 flex items-center gap-1.5">
                <Volume2 size={13} />
                朗读音色 (MsEdgeTTS 自然神经音色)
              </label>
              <select
                value={voice}
                onChange={(e) => setVoice(e.target.value)}
                className="w-full px-2.5 py-1.5 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
              >
                {voices.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-zinc-500 dark:text-zinc-400 font-medium mb-1.5 flex items-center gap-1.5">
                <Gauge size={13} />
                语速调节
              </label>
              <div className="flex gap-2">
                {rateOptions.map((r) => (
                  <button
                    key={r}
                    onClick={() => setRate(r)}
                    className={`flex-1 py-1 rounded-md text-center font-medium transition-all ${
                      rate === r
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                    }`}
                  >
                    {r}x
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
