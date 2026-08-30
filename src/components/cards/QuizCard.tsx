import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, XCircle, Sparkles, Lightbulb } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { QuizData } from '../../types';
import { TTSButton } from '../audio/TTSButton';

interface QuizCardProps {
  data: QuizData;
  onAnswer?: (isCorrect: boolean) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ data, onAnswer }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  const handleSelect = (index: number) => {
    if (hasRevealed) return;
    setSelectedIndex(index);
    setHasRevealed(true);

    const isCorrect = data.options[index].isCorrect;
    onAnswer?.(isCorrect);

    if (isCorrect) {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.7 },
      });
    }
  };

  const handleReset = () => {
    setSelectedIndex(null);
    setHasRevealed(false);
  };

  const correctOption = data.options.find((o) => o.isCorrect);

  return (
    <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <HelpCircle size={16} />
          </div>
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            {data.title}
          </h3>
        </div>
        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
          自测挑战
        </span>
      </div>

      <p className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-4 leading-relaxed">
        {data.question}
      </p>

      {/* Options */}
      <div className="space-y-2.5 mb-3">
        {data.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          const isCorrect = option.isCorrect;

          let optionStyle =
            'bg-white dark:bg-zinc-800/60 border-zinc-200/80 dark:border-zinc-700/80 hover:border-emerald-400 text-zinc-800 dark:text-zinc-200';

          if (hasRevealed) {
            if (isCorrect) {
              optionStyle =
                'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 text-emerald-900 dark:text-emerald-200 ring-1 ring-emerald-500/50';
            } else if (isSelected && !isCorrect) {
              optionStyle =
                'bg-rose-50 dark:bg-rose-950/40 border-rose-500 text-rose-900 dark:text-rose-200 ring-1 ring-rose-500/50';
            } else {
              optionStyle =
                'bg-zinc-50/50 dark:bg-zinc-800/30 border-zinc-200/40 dark:border-zinc-800/40 text-zinc-400 dark:text-zinc-500 opacity-60';
            }
          }

          return (
            <div key={index} className="space-y-1.5">
              <button
                onClick={() => handleSelect(index)}
                disabled={hasRevealed}
                className={`w-full p-3 rounded-xl border text-left text-xs sm:text-sm font-medium flex items-center justify-between gap-3 transition-all cursor-pointer ${optionStyle}`}
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-mono font-bold bg-zinc-100 dark:bg-zinc-700/80 text-zinc-600 dark:text-zinc-300 shrink-0">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="leading-snug">{option.text}</span>
                </div>

                {hasRevealed && (
                  <div className="shrink-0 flex items-center gap-1.5">
                    {isCorrect ? (
                      <CheckCircle2 size={16} className="text-emerald-600 dark:text-emerald-400" />
                    ) : isSelected ? (
                      <XCircle size={16} className="text-rose-500" />
                    ) : null}
                    <TTSButton text={option.text} size="xs" />
                  </div>
                )}
              </button>

              {/* Option Explanation */}
              {hasRevealed && (isSelected || isCorrect) && (
                <div
                  className={`p-2.5 rounded-lg text-xs leading-relaxed ml-7 ${
                    isCorrect
                      ? 'bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300'
                      : 'bg-rose-50/80 dark:bg-rose-950/30 text-rose-800 dark:text-rose-300'
                  }`}
                >
                  <span className="font-semibold mr-1">
                    {isCorrect ? '✅ 解析：' : '❌ 误区：'}
                  </span>
                  {option.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tip & Reset */}
      <div className="flex items-center justify-between pt-2 text-xs">
        {data.tip ? (
          <div className="flex items-center gap-1 text-zinc-500 dark:text-zinc-400">
            <Lightbulb size={13} className="text-amber-500 shrink-0" />
            <span className="text-[11px]">{data.tip}</span>
          </div>
        ) : (
          <div />
        )}

        {hasRevealed && (
          <button
            onClick={handleReset}
            className="text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
          >
            再次挑战
          </button>
        )}
      </div>
    </div>
  );
};
