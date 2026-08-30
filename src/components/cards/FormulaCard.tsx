import React, { useState } from 'react';
import {
  Variable,
  Info,
  Copy,
  Check,
  Sparkles,
  Layers,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import type { FormulaCardData } from '../../types';
import { TTSButton } from '../audio/TTSButton';

interface FormulaCardProps {
  data: FormulaCardData;
}

export const FormulaCard: React.FC<FormulaCardProps> = ({ data }) => {
  const [activeToken, setActiveToken] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeSegmentIdx, setActiveSegmentIdx] = useState(0);

  const handleCopyFormula = () => {
    navigator.clipboard.writeText(data.formula);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Check if formula is multi-part (separated by | or contains numbered rules)
  const segments = data.formula
    .split(/\s*\|\s*/)
    .map((s) => s.trim())
    .filter(Boolean);

  const isMultiSegment = segments.length > 1;

  // Helper to render formula string with highlighted syntax chips
  const renderFormulaHighlighted = (text: string) => {
    // Split by common operators like +, ➔, VS, =, ×, while preserving them
    const tokens = text.split(/(\s*[\+\➔\=×\:]\s*|\s+VS\s+)/g);

    return (
      <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs sm:text-sm">
        {tokens.map((part, idx) => {
          const trimmed = part.trim();
          if (!trimmed) return null;

          const isOperator = ['+', '➔', '=', '×', ':', 'VS'].includes(trimmed);

          if (isOperator) {
            return (
              <span
                key={idx}
                className="px-1.5 py-0.5 rounded text-[11px] font-bold text-emerald-400/80 bg-emerald-950/40 border border-emerald-800/40"
              >
                {trimmed}
              </span>
            );
          }

          // Check if this part matches any of the interactive tokens
          const matchedToken = data.tokens?.find(
            (t) =>
              trimmed.toLowerCase().includes(t.label.toLowerCase()) ||
              t.label.toLowerCase().includes(trimmed.toLowerCase())
          );

          return (
            <span
              key={idx}
              onClick={() => matchedToken && setActiveToken(matchedToken.label)}
              className={`px-2.5 py-1 rounded-xl transition-all ${
                matchedToken
                  ? 'bg-zinc-800 text-emerald-300 font-semibold border border-zinc-700 hover:border-emerald-500 cursor-pointer shadow-sm'
                  : 'bg-zinc-900/90 text-zinc-100'
              }`}
            >
              {trimmed}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-6 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl space-y-4">
      {/* Top Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
            <Variable size={17} />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-50 truncate">
              {data.title}
            </h3>
            {data.badge && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono inline-block mt-0.5">
                {data.badge}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={handleCopyFormula}
          className="px-2.5 py-1 rounded-xl text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0"
          title="复制公式"
        >
          {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
          <span className="text-[11px]">{copied ? '已复制' : '复制'}</span>
        </button>
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
        {data.desc}
      </p>

      {/* Segment Tabs if multi-part formula */}
      {isMultiSegment && (
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          {segments.map((seg, i) => (
            <button
              key={i}
              onClick={() => setActiveSegmentIdx(i)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all cursor-pointer whitespace-nowrap ${
                activeSegmentIdx === i
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              规则 #{i + 1}
            </button>
          ))}
        </div>
      )}

      {/* Visual Formula Board */}
      <div className="p-4 rounded-2xl bg-zinc-950 text-zinc-100 border border-zinc-800/80 shadow-inner space-y-3">
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-400 border-b border-zinc-800/80 pb-2">
          <div className="flex items-center gap-1.5">
            <Sparkles size={11} className="text-emerald-400" />
            <span>Grammar Formula Syntax</span>
          </div>
          {isMultiSegment && (
            <span>规则 {activeSegmentIdx + 1} / {segments.length}</span>
          )}
        </div>

        {/* The highlighted formula line */}
        <div className="py-1">
          {isMultiSegment ? (
            renderFormulaHighlighted(segments[activeSegmentIdx])
          ) : (
            renderFormulaHighlighted(data.formula)
          )}
        </div>

        {/* Interactive Token Badges if available */}
        {data.tokens && data.tokens.length > 0 && (
          <div className="pt-2.5 border-t border-zinc-800/80 flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-mono text-zinc-500 mr-1">成分探针:</span>
            {data.tokens.map((token, i) => (
              <button
                key={i}
                onClick={() => setActiveToken(activeToken === token.label ? null : token.label)}
                className={`text-[11px] font-mono px-2 py-0.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  activeToken === token.label
                    ? 'bg-emerald-500 text-white ring-2 ring-emerald-400/50 shadow-md'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                <span className="font-bold">{token.label}</span>
                <span className="text-[10px] opacity-70">({token.role})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Active Token Inspector Drawer */}
      {activeToken && data.tokens && (
        <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-900/50 text-xs text-emerald-950 dark:text-emerald-200 flex items-start gap-2.5 animate-fadeIn">
          <Info size={15} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <span className="font-bold font-mono text-emerald-700 dark:text-emerald-300">
              【{data.tokens.find((t) => t.label === activeToken)?.label} · {data.tokens.find((t) => t.label === activeToken)?.role}】
            </span>
            <p className="text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
              {data.tokens.find((t) => t.label === activeToken)?.desc || '核心语法构成单元与角色约束'}
            </p>
          </div>
        </div>
      )}

      {/* Example with Audio */}
      {data.example && (
        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-3 p-3 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-700/40">
          <div className="text-xs min-w-0 space-y-0.5">
            <p className="font-medium text-zinc-900 dark:text-zinc-100 font-mono truncate">
              {data.example.en}
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-[11px]">
              {data.example.zh}
            </p>
          </div>
          <TTSButton text={data.example.en} size="xs" />
        </div>
      )}
    </div>
  );
};
