import React, { useState } from 'react';
import {
  Code2,
  Terminal,
  Layers,
  Sparkles,
  BookOpen,
  HelpCircle,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import type { CorePatternDetail } from '../../types';
import { TTSButton } from '../audio/TTSButton';
import { SentenceSkeletonCard } from './SentenceSkeletonCard';
import { QuizCard } from './QuizCard';

interface CorePatternDetailCardProps {
  pattern: CorePatternDetail;
}

export const CorePatternDetailCard: React.FC<CorePatternDetailCardProps> = ({ pattern }) => {
  const [activeTemplateIdx, setActiveTemplateIdx] = useState(0);
  const [showSkeleton, setShowSkeleton] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyFormula = () => {
    navigator.clipboard.writeText(pattern.formula);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id={`pattern-${pattern.num}`}
      className="glass-card rounded-3xl p-6 sm:p-7 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl space-y-5 scroll-mt-24"
    >
      {/* Top Meta & Number Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-2xl bg-emerald-500 text-white font-mono font-black text-base flex items-center justify-center shadow-md shadow-emerald-500/25 shrink-0">
            {pattern.num < 10 ? `0${pattern.num}` : pattern.num}
          </span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300">
                {pattern.categoryBadge} · {pattern.categoryTitle}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-1">
              {pattern.title}
            </h3>
            <p className="text-xs font-mono text-zinc-400 dark:text-zinc-500">
              {pattern.enTitle}
            </p>
          </div>
        </div>

        <button
          onClick={handleCopyFormula}
          className="self-start sm:self-center px-2.5 py-1.5 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer"
          title="复制公式"
        >
          {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
          <span>{copied ? '已复制' : '复制公式'}</span>
        </button>
      </div>

      {/* Formula Board */}
      <div className="p-4 rounded-2xl bg-zinc-900 dark:bg-black/70 border border-zinc-800 text-zinc-100 shadow-inner">
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block mb-1">
          Grammar Pattern Formula
        </span>
        <div className="font-mono text-sm sm:text-base font-bold text-emerald-400 tracking-wide break-words">
          {pattern.formula}
        </div>
        {pattern.formulaDesc && (
          <p className="text-xs text-zinc-400 mt-2 font-mono border-t border-zinc-800/80 pt-2">
            💡 {pattern.formulaDesc}
          </p>
        )}
      </div>

      {/* Logic & IT Analogy Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Logic */}
        <div className="p-4 rounded-2xl bg-zinc-50/90 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-700/50 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-800 dark:text-zinc-200">
            <BookOpen size={14} className="text-emerald-500" />
            <span>原理解析与底层逻辑</span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {pattern.logic}
          </p>
        </div>

        {/* IT Analogy */}
        <div className="p-4 rounded-2xl bg-zinc-900 text-zinc-200 dark:bg-black/60 border border-zinc-800 space-y-1.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400 font-mono">
            <Terminal size={14} />
            <span>IT / 程序员全栈思维类比</span>
          </div>
          <p className="text-xs text-zinc-300 font-mono leading-relaxed">
            {pattern.itAnalogy}
          </p>
        </div>
      </div>

      {/* Multiple Workplace Templates */}
      {pattern.templates && pattern.templates.length > 0 && (
        <div className="p-4 rounded-2xl bg-zinc-50/90 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-700/50 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-800 dark:text-zinc-200">
              <Sparkles size={14} className="text-emerald-500" />
              <span>多重实战使用模板 (Workplace Templates)</span>
            </div>
            <span className="text-[11px] text-zinc-400 font-mono">
              共 {pattern.templates.length} 个场景模板
            </span>
          </div>

          {/* Template Selector Tabs */}
          <div className="flex gap-1.5 overflow-x-auto pb-1">
            {pattern.templates.map((tpl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTemplateIdx(idx)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  activeTemplateIdx === idx
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200/60 dark:border-zinc-700/60'
                }`}
              >
                {tpl.scenario}
              </button>
            ))}
          </div>

          {/* Active Template Display Box */}
          {pattern.templates[activeTemplateIdx] && (
            <div className="p-3 rounded-xl bg-white dark:bg-zinc-800/80 border border-emerald-500/20 dark:border-emerald-500/20 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                  【模板 {activeTemplateIdx + 1}】{pattern.templates[activeTemplateIdx].scenario}
                </span>
                <TTSButton text={pattern.templates[activeTemplateIdx].template.replace(/[[\]]/g, '')} size="xs" />
              </div>
              <p className="font-mono text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 leading-relaxed">
                {pattern.templates[activeTemplateIdx].template}
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">
                {pattern.templates[activeTemplateIdx].translation}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Authentic Workplace Examples */}
      <div className="space-y-2 pt-1">
        <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 block">
          精选职场技术高频例句
        </span>
        <div className="space-y-2">
          {pattern.examples.map((ex, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-white/70 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-700/60 flex items-start justify-between gap-3 hover:border-emerald-500/40 transition-colors"
            >
              <div className="space-y-0.5 min-w-0 flex-1">
                <p className="text-xs sm:text-sm font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed">
                  {ex.en}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {ex.zh}
                </p>
              </div>
              <TTSButton text={ex.en} size="xs" />
            </div>
          ))}
        </div>
      </div>

      {/* Skeleton Breakdown Accordion Toggle */}
      {pattern.skeleton && (
        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
          <button
            onClick={() => setShowSkeleton(!showSkeleton)}
            className="w-full py-2 px-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold flex items-center justify-between hover:bg-emerald-100/70 dark:hover:bg-emerald-950/40 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <Layers size={14} />
              <span>查看句式语法成分交互式解构 (Sentence Skeleton Inspector)</span>
            </div>
            {showSkeleton ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>

          {showSkeleton && (
            <div className="mt-3 animate-fadeIn">
              <SentenceSkeletonCard data={pattern.skeleton} />
            </div>
          )}
        </div>
      )}

      {/* Optional Quiz for this pattern */}
      {pattern.quiz && (
        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
          <QuizCard data={pattern.quiz} />
        </div>
      )}
    </div>
  );
};
