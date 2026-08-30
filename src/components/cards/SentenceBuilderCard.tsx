import React, { useState } from 'react';
import { Blocks, CheckCircle2, RotateCcw, HelpCircle, Terminal, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { SentenceBuilderData } from '../../types';
import { TTSButton } from '../audio/TTSButton';

interface SentenceBuilderCardProps {
  data: SentenceBuilderData;
}

export const SentenceBuilderCard: React.FC<SentenceBuilderCardProps> = ({ data }) => {
  // Shuffle words initially
  const [availableWords, setAvailableWords] = useState<string[]>(() => {
    return [...data.words].sort(() => Math.random() - 0.5);
  });
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleAddWord = (word: string, index: number) => {
    if (status === 'success') return;
    setSelectedWords([...selectedWords, word]);
    const newAvail = [...availableWords];
    newAvail.splice(index, 1);
    setAvailableWords(newAvail);
    setStatus('idle');
  };

  const handleRemoveWord = (word: string, index: number) => {
    if (status === 'success') return;
    const newSelected = [...selectedWords];
    newSelected.splice(index, 1);
    setSelectedWords(newSelected);
    setAvailableWords([...availableWords, word]);
    setStatus('idle');
  };

  const handleReset = () => {
    setAvailableWords([...data.words].sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setStatus('idle');
  };

  const handleCheck = () => {
    const currentSentence = selectedWords.join(' ').trim();
    // Normalize target sentence for punctuation / spaces
    const normalize = (s: string) => s.replace(/[.,?!]/g, '').trim().toLowerCase();

    if (normalize(currentSentence) === normalize(data.targetSentence)) {
      setStatus('success');
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
      });
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <Blocks size={16} />
          </div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            {data.title}
          </h3>
        </div>
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
          语序积木拼装
        </span>
      </div>

      <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
        {data.instruction}
      </p>

      {/* Assembly Dropzone */}
      <div
        className={`min-h-[64px] p-3 rounded-xl border-2 border-dashed transition-all flex flex-wrap items-center gap-2 mb-3 ${
          status === 'success'
            ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-500/50'
            : status === 'error'
            ? 'bg-rose-50/50 dark:bg-rose-950/20 border-rose-400/60'
            : 'bg-zinc-50/70 dark:bg-zinc-800/30 border-zinc-200 dark:border-zinc-700'
        }`}
      >
        {selectedWords.length === 0 ? (
          <span className="text-xs text-zinc-400 dark:text-zinc-500 italic">
            点击下方词块按正确语序放入拼装槽中...
          </span>
        ) : (
          selectedWords.map((word, idx) => (
            <button
              key={idx}
              onClick={() => handleRemoveWord(word, idx)}
              className="px-3 py-1.5 rounded-lg font-mono text-xs sm:text-sm font-semibold bg-emerald-500 text-white shadow-sm hover:bg-emerald-600 transition-transform active:scale-95 cursor-pointer"
            >
              {word}
            </button>
          ))
        )}
      </div>

      {/* Available Word Block Pool */}
      <div className="flex flex-wrap gap-2 mb-4">
        {availableWords.map((word, idx) => (
          <button
            key={idx}
            onClick={() => handleAddWord(word, idx)}
            className="px-3 py-1.5 rounded-lg font-mono text-xs sm:text-sm font-medium bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:border-emerald-500/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-all cursor-pointer"
          >
            {word}
          </button>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
        <button
          onClick={handleReset}
          className="flex items-center gap-1 text-xs text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200 transition-colors cursor-pointer"
        >
          <RotateCcw size={13} />
          <span>重置清空</span>
        </button>

        <button
          onClick={handleCheck}
          disabled={selectedWords.length === 0 || status === 'success'}
          className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
            status === 'success'
              ? 'bg-emerald-500 text-white cursor-default'
              : 'bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-emerald-600 dark:hover:bg-emerald-400 dark:hover:text-zinc-950 shadow-sm'
          }`}
        >
          <CheckCircle2 size={14} />
          <span>{status === 'success' ? '拼装正确！' : '校验语序'}</span>
        </button>
      </div>

      {/* Validation Result Messages */}
      {status === 'error' && (
        <div className="mt-3 p-3 rounded-xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/40 text-xs text-rose-700 dark:text-rose-300 animate-fadeIn">
          语序有误，请注意核心动作与状语修饰挂载顺序，点击词块调整后重试！
        </div>
      )}

      {status === 'success' && (
        <div className="mt-3 p-3.5 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/50 space-y-2 animate-fadeIn">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-1">
              <Sparkles size={14} />
              目标标准句：{data.targetSentence}
            </span>
            <TTSButton text={data.targetSentence} size="xs" />
          </div>
          <p className="text-xs text-emerald-900/80 dark:text-emerald-200/90 leading-relaxed">
            {data.explanation}
          </p>
          {data.itAnalogy && (
            <div className="p-2 rounded-lg bg-emerald-100/50 dark:bg-emerald-900/30 text-[11px] font-mono text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
              <Terminal size={13} className="shrink-0" />
              <span>{data.itAnalogy}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
