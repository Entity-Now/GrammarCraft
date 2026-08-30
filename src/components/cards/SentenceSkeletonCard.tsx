import React, { useState } from 'react';
import { Network, Terminal, Code2, HelpCircle } from 'lucide-react';
import type { SentenceSkeletonData } from '../../types';
import { TTSButton } from '../audio/TTSButton';

interface SentenceSkeletonCardProps {
  data: SentenceSkeletonData;
}

export const SentenceSkeletonCard: React.FC<SentenceSkeletonCardProps> = ({ data }) => {
  const [selectedPartIndex, setSelectedPartIndex] = useState<number | null>(null);

  const getRoleBadgeStyle = (type: string) => {
    switch (type) {
      case 'subject':
        return 'bg-blue-100 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60';
      case 'verb':
        return 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60';
      case 'object':
        return 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60';
      case 'linker':
        return 'bg-purple-100 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60';
      case 'predicative':
        return 'bg-teal-100 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800/60';
      case 'adverbial':
        return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700';
      case 'complement':
        return 'bg-rose-100 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60';
      default:
        return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700';
    }
  };

  return (
    <div className="glass-card rounded-2xl p-5 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg">
      {/* Top Header */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
              {data.badge || '核心解构'}
            </span>
            <span className="text-xs font-mono font-semibold text-zinc-500 dark:text-zinc-400">
              {data.type}
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 mt-1">
            {data.title}
          </h3>
        </div>
        <TTSButton text={data.sentence} size="sm" showLabel label="播放" />
      </div>

      <p className="text-xs text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
        {data.desc}
      </p>

      {/* Formula & Rule Strip */}
      <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-700/50 mb-4">
        <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono mb-1">
          <Network size={13} className="text-emerald-500" />
          <span className="font-bold text-zinc-800 dark:text-zinc-200">解构公式：</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{data.formula}</span>
        </div>
        {data.formulaDesc && (
          <p className="text-[11px] text-zinc-500 dark:text-zinc-400 pl-5">
            {data.formulaDesc}
          </p>
        )}
      </div>

      {/* Interactive Sentence Deconstruction Blocks */}
      <div className="space-y-2 mb-4">
        <span className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block">
          点击语法成分查看角色说明 (Component Inspector)
        </span>

        <div className="flex flex-wrap items-stretch gap-2">
          {data.parts.map((part, index) => (
            <button
              key={index}
              onClick={() => setSelectedPartIndex(selectedPartIndex === index ? null : index)}
              className={`p-2.5 rounded-xl border transition-all text-left cursor-pointer ${getRoleBadgeStyle(
                part.type
              )} ${
                selectedPartIndex === index
                  ? 'ring-2 ring-emerald-500 scale-[1.03] shadow-md'
                  : 'hover:scale-[1.01]'
              }`}
            >
              <span className="text-sm sm:text-base font-bold font-mono block">
                {part.text}
              </span>
              <span className="text-[11px] font-medium opacity-80 block mt-0.5">
                {part.role}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Part Detail Drawer */}
        {selectedPartIndex !== null && data.parts[selectedPartIndex] && (
          <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-2 animate-fadeIn">
            <HelpCircle size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">
                【{data.parts[selectedPartIndex].text}】({data.parts[selectedPartIndex].role})：
              </span>
              <span>{data.parts[selectedPartIndex].detail || '此语法单元在句中承担核心修饰或骨干作用。'}</span>
            </div>
          </div>
        )}
      </div>

      {/* Translation */}
      <div className="p-3 rounded-xl bg-zinc-100/70 dark:bg-zinc-800/60 text-xs text-zinc-700 dark:text-zinc-300 mb-3 flex items-center justify-between">
        <div>
          <span className="text-zinc-400 font-semibold mr-2">中文意译</span>
          <span className="font-medium text-zinc-900 dark:text-zinc-100">{data.translation}</span>
        </div>
      </div>

      {/* Explanation */}
      <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-3">
        <span className="font-bold text-zinc-800 dark:text-zinc-200 mr-1">深入理解：</span>
        {data.explanation}
      </div>

      {/* IT / Engineering Analogy */}
      {data.itAnalogy && (
        <div className="p-3 rounded-xl bg-zinc-900 text-zinc-200 dark:bg-black/60 border border-zinc-800 text-xs flex items-start gap-2.5">
          <Terminal size={15} className="text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="text-emerald-400 font-mono font-semibold text-[11px] block">
              💻 程序员思维 / 代码类比 (Code Analogy)
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
