import React from 'react';
import { MessageSquare, AlertCircle, CheckCircle2, Layers } from 'lucide-react';
import type { ExpressionCardData } from '../../types';
import { TTSButton } from '../audio/TTSButton';

interface ExpressionCardProps {
  data: ExpressionCardData;
}

export const ExpressionCard: React.FC<ExpressionCardProps> = ({ data }) => {
  return (
    <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-start justify-between gap-3 mb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
              地道表达
            </span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400 font-mono">
              {data.scenario}
            </span>
          </div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 mt-1 font-mono">
            {data.phrase}
          </h3>
        </div>
        <TTSButton text={data.phrase} size="sm" />
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3 text-xs">
        <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/50 dark:border-rose-900/30">
          <div className="flex items-center gap-1.5 text-rose-700 dark:text-rose-400 font-semibold mb-1">
            <AlertCircle size={13} />
            <span>字面直译（误区）</span>
          </div>
          <p className="text-zinc-600 dark:text-zinc-300 line-through decoration-rose-400">
            {data.literal}
          </p>
        </div>

        <div className="p-3 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40">
          <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-300 font-semibold mb-1">
            <CheckCircle2 size={13} />
            <span>地道实际含义</span>
          </div>
          <p className="text-zinc-900 dark:text-zinc-100 font-medium">
            {data.actual}
          </p>
        </div>
      </div>

      {/* Breakdown */}
      {data.breakdown && (
        <div className="my-3 p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-700/40 text-xs text-zinc-600 dark:text-zinc-300 flex items-start gap-2">
          <Layers size={14} className="text-emerald-500 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-zinc-800 dark:text-zinc-200">底层解构：</span>
            <span>{data.breakdown}</span>
          </div>
        </div>
      )}

      {/* Examples */}
      <div className="space-y-2 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
        {data.examples.map((ex, i) => (
          <div key={i} className="flex items-start justify-between gap-2 p-2 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/30 transition-colors">
            <div className="text-xs space-y-0.5 flex-1">
              <p className="text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed">
                {ex.en}
              </p>
              <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">
                {ex.zh}
              </p>
            </div>
            <TTSButton text={ex.en} size="xs" />
          </div>
        ))}
      </div>
    </div>
  );
};
