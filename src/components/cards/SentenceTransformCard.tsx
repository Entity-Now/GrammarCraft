import React, { useState } from 'react';
import { ArrowRight, RefreshCw, Sparkles, Terminal, Check } from 'lucide-react';
import type { SentenceTransformData, TransformStage } from '../../types';
import { TTSButton } from '../audio/TTSButton';

interface SentenceTransformCardProps {
  data: SentenceTransformData;
}

export const SentenceTransformCard: React.FC<SentenceTransformCardProps> = ({ data }) => {
  const [activeStage, setActiveStage] = useState<'both' | 'from' | 'to' | 'additional'>('both');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'added':
        return 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30';
      case 'changed':
        return 'bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30';
      case 'moved':
        return 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border-purple-500/30';
      default:
        return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700';
    }
  };

  const renderStage = (stage: TransformStage, label: string) => (
    <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-700/50 flex-1">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-200">
            {stage.type}
          </span>
          <span className="text-xs text-zinc-400 font-mono">{label}</span>
        </div>
        <TTSButton text={stage.sentence} size="xs" />
      </div>

      <div className="flex flex-wrap gap-1.5 mb-2">
        {stage.parts.map((p, idx) => (
          <div
            key={idx}
            className={`px-2 py-1 rounded-lg border text-xs ${getStatusBadge(p.status)}`}
            title={p.note || p.role}
          >
            <span className="font-mono font-bold block">{p.text}</span>
            <span className="text-[10px] opacity-75 block">{p.role}</span>
          </div>
        ))}
      </div>

      <p className="text-xs text-zinc-600 dark:text-zinc-400">
        <span className="text-zinc-400 mr-1">意译:</span>
        {stage.translation}
      </p>
    </div>
  );

  return (
    <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
            {data.badge || '状态机演变'}
          </span>
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
            {data.title}
          </h3>
        </div>
        <RefreshCw size={15} className="text-emerald-500" />
      </div>

      <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
        {data.desc}
      </p>

      {/* Morph Stage Comparison Board */}
      <div className="flex flex-col lg:flex-row items-stretch gap-3 mb-4">
        {renderStage(data.from, '源态 (Original)')}
        <div className="flex items-center justify-center text-zinc-400 py-1 lg:py-0">
          <div className="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <ArrowRight size={16} />
          </div>
        </div>
        {renderStage(data.to, '目标态 (Mutated)')}
      </div>

      {data.additional && (
        <div className="mb-4">
          <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-2">
            衍生扩展形态：
          </span>
          {renderStage(data.additional, '衍生变体 (Variant)')}
        </div>
      )}

      {/* Transition Rules List */}
      <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-700/50 mb-3">
        <div className="flex items-center gap-1.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
          <Sparkles size={13} className="text-emerald-500" />
          <span>形态转换规则与底层状态迁移 (Mutation Rules)</span>
        </div>
        <ul className="space-y-1 pl-4 list-disc text-xs text-zinc-600 dark:text-zinc-400">
          {data.transitionRules.map((rule, i) => (
            <li key={i} className="leading-relaxed">
              {rule}
            </li>
          ))}
        </ul>
      </div>

      {/* IT Analogy */}
      {data.itAnalogy && (
        <div className="p-3 rounded-xl bg-zinc-900 text-zinc-200 dark:bg-black/60 border border-zinc-800 text-xs flex items-start gap-2.5">
          <Terminal size={14} className="text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <span className="text-emerald-400 font-mono font-semibold text-[11px] block mb-0.5">
              状态机类比 (State Transition)
            </span>
            <p className="font-mono text-zinc-300 text-[11px] leading-relaxed">
              {data.itAnalogy}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
