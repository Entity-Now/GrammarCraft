import React from 'react';
import { GitCompare, Bug, CheckCheck, Terminal, Lightbulb } from 'lucide-react';
import type { GrammarCompareData } from '../../types';
import { TTSButton } from '../audio/TTSButton';

interface GrammarCompareCardProps {
  data: GrammarCompareData;
}

export const GrammarCompareCard: React.FC<GrammarCompareCardProps> = ({ data }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
            <Bug size={16} />
          </div>
          <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
            语法 Debug 纠错与对比
          </span>
        </div>
        {data.formula && (
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
            {data.formula}
          </span>
        )}
      </div>

      {/* Chinese Prompt */}
      <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 text-xs text-zinc-700 dark:text-zinc-300 mb-3">
        <span className="font-semibold text-zinc-400 mr-2">想要表达：</span>
        <span className="font-medium text-zinc-900 dark:text-zinc-100">{data.chinese}</span>
      </div>

      {/* Wrong vs Correct Box */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        {/* Wrong */}
        <div className="p-3 rounded-xl bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/70 dark:border-rose-900/40 space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-rose-600 dark:text-rose-400">
            <Bug size={13} />
            <span>中式直译 (Syntax Error)</span>
          </div>
          <p className="font-mono text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 line-through decoration-rose-500 decoration-2">
            {data.wrong}
          </p>
        </div>

        {/* Correct */}
        <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50 space-y-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-300">
              <CheckCheck size={14} />
              <span>地道正解 (Standard English)</span>
            </div>
            <TTSButton text={data.correct} size="xs" />
          </div>
          <p className="font-mono text-xs sm:text-sm font-semibold text-emerald-950 dark:text-emerald-100">
            {data.correct}
          </p>
        </div>
      </div>

      {/* Reason */}
      <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-700/50 text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2.5 flex items-start gap-2">
        <Lightbulb size={14} className="text-amber-500 shrink-0 mt-0.5" />
        <div>
          <span className="font-semibold text-zinc-800 dark:text-zinc-200">避坑要点：</span>
          <span>{data.reason}</span>
        </div>
      </div>

      {/* IT Analogy */}
      {data.itAnalogy && (
        <div className="p-2.5 rounded-xl bg-zinc-900 text-zinc-200 dark:bg-black/60 border border-zinc-800 text-xs flex items-start gap-2">
          <Terminal size={14} className="text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="text-emerald-400 font-mono text-[10px] uppercase tracking-wider block font-bold">
              Debug 修复思路 (Code Fix)
            </span>
            <p className="font-mono text-[11px] text-zinc-300 leading-relaxed">
              {data.itAnalogy}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
