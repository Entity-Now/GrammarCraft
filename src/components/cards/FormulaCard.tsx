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
  Lightbulb,
  ArrowRight,
  Plus,
  LayoutGrid,
  Code2,
  HelpCircle,
} from 'lucide-react';
import type { FormulaCardData, FormulaToken } from '../../types';
import { TTSButton } from '../audio/TTSButton';
import { useLearningMode } from '../../context/LearningModeContext';

interface FormulaCardProps {
  data: FormulaCardData;
}

interface ParsedSlot {
  id: string;
  isOperator: boolean;
  operatorSymbol?: string;
  title: string;
  role: string;
  color: 'blue' | 'emerald' | 'amber' | 'purple' | 'rose' | 'teal' | 'zinc';
  desc?: string;
}

export const FormulaCard: React.FC<FormulaCardProps> = ({ data }) => {
  const { isBeginner } = useLearningMode();
  const [activeTokenLabel, setActiveTokenLabel] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeSegmentIdx, setActiveSegmentIdx] = useState(0);
  const [viewMode, setViewMode] = useState<'blocks' | 'code'>('blocks');

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
  const currentFormulaText = isMultiSegment ? segments[activeSegmentIdx] : data.formula;

  // Extract a 1-sentence plain core meaning for intuitive understanding
  const getCoreTakeaway = () => {
    if (data.coreMeaning) return data.coreMeaning;
    if (data.beginnerTip) {
      return data.beginnerTip.replace(/^【.*?】\s*/, '');
    }
    const firstSentence = data.desc.split(/[。！？\.\!\?]/)[0];
    return firstSentence ? `${firstSentence}。` : data.desc;
  };

  // Helper to get styling for color badges
  const getColorClasses = (color: string, isSelected: boolean) => {
    switch (color) {
      case 'blue':
        return {
          slot: isSelected
            ? 'bg-blue-500/15 dark:bg-blue-950/60 border-blue-500 ring-2 ring-blue-500/40 shadow-md'
            : 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-200/80 dark:border-blue-900/40 hover:border-blue-400',
          badge: 'bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300',
          text: 'text-blue-900 dark:text-blue-200',
        };
      case 'emerald':
        return {
          slot: isSelected
            ? 'bg-emerald-500/15 dark:bg-emerald-950/60 border-emerald-500 ring-2 ring-emerald-500/40 shadow-md'
            : 'bg-emerald-50/70 dark:bg-emerald-950/30 border-emerald-200/80 dark:border-emerald-900/40 hover:border-emerald-400',
          badge: 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300',
          text: 'text-emerald-900 dark:text-emerald-200',
        };
      case 'amber':
        return {
          slot: isSelected
            ? 'bg-amber-500/15 dark:bg-amber-950/60 border-amber-500 ring-2 ring-amber-500/40 shadow-md'
            : 'bg-amber-50/70 dark:bg-amber-950/30 border-amber-200/80 dark:border-amber-900/40 hover:border-amber-400',
          badge: 'bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300',
          text: 'text-amber-900 dark:text-amber-200',
        };
      case 'purple':
        return {
          slot: isSelected
            ? 'bg-purple-500/15 dark:bg-purple-950/60 border-purple-500 ring-2 ring-purple-500/40 shadow-md'
            : 'bg-purple-50/70 dark:bg-purple-950/30 border-purple-200/80 dark:border-purple-900/40 hover:border-purple-400',
          badge: 'bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300',
          text: 'text-purple-900 dark:text-purple-200',
        };
      case 'rose':
        return {
          slot: isSelected
            ? 'bg-rose-500/15 dark:bg-rose-950/60 border-rose-500 ring-2 ring-rose-500/40 shadow-md'
            : 'bg-rose-50/70 dark:bg-rose-950/30 border-rose-200/80 dark:border-rose-900/40 hover:border-rose-400',
          badge: 'bg-rose-100 dark:bg-rose-950/80 text-rose-700 dark:text-rose-300',
          text: 'text-rose-900 dark:text-rose-200',
        };
      case 'teal':
        return {
          slot: isSelected
            ? 'bg-teal-500/15 dark:bg-teal-950/60 border-teal-500 ring-2 ring-teal-500/40 shadow-md'
            : 'bg-teal-50/70 dark:bg-teal-950/30 border-teal-200/80 dark:border-teal-900/40 hover:border-teal-400',
          badge: 'bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300',
          text: 'text-teal-900 dark:text-teal-200',
        };
      default:
        return {
          slot: isSelected
            ? 'bg-zinc-200/60 dark:bg-zinc-800 border-zinc-400 dark:border-zinc-500 ring-2 ring-zinc-400/40 shadow-md'
            : 'bg-zinc-50 dark:bg-zinc-800/40 border-zinc-200/80 dark:border-zinc-700/60 hover:border-zinc-400',
          badge: 'bg-zinc-200/80 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300',
          text: 'text-zinc-800 dark:text-zinc-200',
        };
    }
  };

  // Parse formula string into structural building slots
  const parseFormula = (rawFormula: string): ParsedSlot[] => {
    // Split by common delimiters and operators
    const rawTokens = rawFormula.split(/(\s*[\+\➔\=×\:\~\|\—]\s*|\s+VS\s+|\s+vs\s+)/g);
    const slots: ParsedSlot[] = [];

    rawTokens.forEach((part, idx) => {
      const trimmed = part.trim();
      if (!trimmed) return;

      const isOperator = ['+', '➔', '=', '×', ':', 'VS', 'vs', '~', '|', '—'].includes(trimmed);

      if (isOperator) {
        slots.push({
          id: `op-${idx}`,
          isOperator: true,
          operatorSymbol: trimmed,
          title: trimmed,
          role: '操作符',
          color: 'zinc',
        });
        return;
      }

      // 1. Try to match defined tokens
      const matchedToken = data.tokens?.find(
        (t) =>
          trimmed.toLowerCase().includes(t.label.toLowerCase()) ||
          t.label.toLowerCase().includes(trimmed.toLowerCase())
      );

      if (matchedToken) {
        const color = (matchedToken.color as ParsedSlot['color']) || 'emerald';
        slots.push({
          id: `slot-${idx}`,
          isOperator: false,
          title: matchedToken.label,
          role: matchedToken.role || '核心构成',
          color,
          desc: matchedToken.desc,
        });
        return;
      }

      // 2. Try to extract parenthetical syntax like S (主语) or V (动词)
      const parenMatch = trimmed.match(/^(.*?)\s*[\(（](.*?)[\)）]$/);
      if (parenMatch) {
        const mainText = parenMatch[1].trim();
        const roleText = parenMatch[2].trim();
        let color: ParsedSlot['color'] = 'emerald';

        if (/主|S|Who/i.test(mainText) || /主/i.test(roleText)) color = 'blue';
        else if (/谓|动|V|Action/i.test(mainText) || /动/i.test(roleText)) color = 'emerald';
        else if (/宾|O|表|P|What/i.test(mainText) || /宾|表/i.test(roleText)) color = 'amber';
        else if (/连|Link|that|if|when/i.test(mainText) || /连|系/i.test(roleText)) color = 'purple';
        else if (/状|Modifier|Time|Place/i.test(mainText) || /状/i.test(roleText)) color = 'teal';

        slots.push({
          id: `slot-${idx}`,
          isOperator: false,
          title: mainText,
          role: roleText,
          color,
          desc: `${mainText}：充当句中的【${roleText}】成分。`,
        });
        return;
      }

      // 3. Fallback heuristic detection
      let role = '语法插槽';
      let color: ParsedSlot['color'] = 'zinc';

      if (/主语|S\b|Who|User|Client/i.test(trimmed)) {
        role = '主角 (Subject)';
        color = 'blue';
      } else if (/谓语|动词|Verb|V\b|Clicking|sets|executes/i.test(trimmed)) {
        role = '核心动作 (Verb)';
        color = 'emerald';
      } else if (/宾语|O\b|表语|P\b|Result|Modal|Dialog/i.test(trimmed)) {
        role = '承受对象 (Object)';
        color = 'amber';
      } else if (/that|whether|Once|When|If|连词|Linker/i.test(trimmed)) {
        role = '连词引导 (Connector)';
        color = 'purple';
      } else if (/状语|Location|Time|in\b|at\b|on\b/i.test(trimmed)) {
        role = '位置/时间 (Modifier)';
        color = 'teal';
      } else if (/VS|Conflict|Error/i.test(trimmed)) {
        role = '对比规则';
        color = 'rose';
      }

      slots.push({
        id: `slot-${idx}`,
        isOperator: false,
        title: trimmed,
        role,
        color,
        desc: `【${trimmed}】在当前公式中作为【${role}】单元。`,
      });
    });

    return slots;
  };

  const parsedSlots = parseFormula(currentFormulaText);

  // Find currently active token or active slot description
  const activeDetail = (() => {
    if (activeTokenLabel) {
      const tok = data.tokens?.find((t) => t.label === activeTokenLabel);
      if (tok) return { title: tok.label, role: tok.role, desc: tok.desc || '核心语法构成单元与角色约束' };
      const slot = parsedSlots.find((s) => s.title === activeTokenLabel);
      if (slot) return { title: slot.title, role: slot.role, desc: slot.desc || '核心语法构成单元与角色约束' };
    }
    return null;
  })();

  return (
    <div className="glass-card rounded-3xl p-5 sm:p-7 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl space-y-5 w-full">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-zinc-100 dark:border-zinc-800/80 pb-4">
        <div className="flex items-start gap-3 min-w-0">
          <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 shadow-sm">
            <Variable size={20} />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h3 className="text-base sm:text-lg font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
                {data.title}
              </h3>
              {data.badge && (
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono">
                  {data.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {data.desc}
            </p>
          </div>
        </div>

        <button
          onClick={handleCopyFormula}
          className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors flex items-center gap-1.5 cursor-pointer shrink-0 shadow-sm self-start"
          title="复制公式文本"
        >
          {copied ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
          <span className="text-[11px] whitespace-nowrap">{copied ? '已复制' : '复制公式'}</span>
        </button>
      </div>

      {/* 1. Core Meaning Banner (核心含义直通车) */}
      <div className="p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/5 to-teal-500/10 border border-amber-500/20 text-xs text-amber-950 dark:text-amber-200 flex items-start gap-3">
        <div className="p-2 rounded-xl bg-amber-500/20 text-amber-700 dark:text-amber-300 shrink-0 mt-0.5">
          <Sparkles size={16} />
        </div>
        <div className="space-y-1 min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-amber-800 dark:text-amber-300 font-bold text-xs uppercase tracking-wider">
              🎯 核心含义速懂 (Core Purpose)
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-md bg-amber-500/20 text-amber-800 dark:text-amber-300 font-mono">
              一眼搞定
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed font-medium">
            {getCoreTakeaway()}
          </p>
        </div>
      </div>

      {/* Segment Tabs if multi-part formula */}
      {isMultiSegment && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 shrink-0 mr-1">
            分支规则:
          </span>
          {segments.map((seg, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveSegmentIdx(i);
                setActiveTokenLabel(null);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                activeSegmentIdx === i
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-zinc-100 dark:bg-zinc-800/80 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              规则 #{i + 1}
            </button>
          ))}
        </div>
      )}

      {/* 2. Visual Building Slots Board (积木组装工作台) */}
      <div className="rounded-3xl p-4 sm:p-6 bg-zinc-50/80 dark:bg-zinc-950/70 border border-zinc-200/80 dark:border-zinc-800/80 shadow-inner space-y-4">
        {/* Workspace Top Action Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200/60 dark:border-zinc-800/80 pb-3">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-xs shrink-0">
              🧩
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 whitespace-nowrap">
                {isBeginner ? '句型组装积木插槽' : '语法结构公式解构'}
              </span>
              <span className="text-[11px] text-zinc-400 dark:text-zinc-500 hidden md:inline whitespace-nowrap">
                · 点击积木可查看插槽职能与说明
              </span>
            </div>
          </div>

          {/* Toggle View Mode: Visual Blocks vs Compact Text */}
          <div className="flex items-center p-1 rounded-xl bg-zinc-200/60 dark:bg-zinc-800/80 text-[11px] font-semibold shrink-0">
            <button
              onClick={() => setViewMode('blocks')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                viewMode === 'blocks'
                  ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              <LayoutGrid size={13} className="shrink-0" />
              <span className="whitespace-nowrap font-bold">积木解构</span>
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                viewMode === 'code'
                  ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              <Code2 size={13} className="shrink-0" />
              <span className="whitespace-nowrap font-bold">纯文本公式</span>
            </button>
          </div>
        </div>

        {/* View Mode 1: Visual Building Blocks */}
        {viewMode === 'blocks' ? (
          <div className="py-2 overflow-x-auto pb-2">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              {parsedSlots.map((slot) => {
                if (slot.isOperator) {
                  return (
                    <div
                      key={slot.id}
                      className="flex items-center justify-center p-1 text-zinc-400 dark:text-zinc-500 shrink-0 select-none"
                    >
                      {slot.operatorSymbol === '➔' ? (
                        <div className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" title="推进步骤">
                          <ArrowRight size={16} />
                        </div>
                      ) : slot.operatorSymbol === 'VS' || slot.operatorSymbol === 'vs' ? (
                        <span className="px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-600 dark:text-rose-400 text-xs font-black font-mono tracking-wider shadow-sm">
                          VS 对比
                        </span>
                      ) : slot.operatorSymbol === '=' ? (
                        <span className="text-lg font-black text-zinc-400 font-mono px-1">=</span>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-zinc-200/80 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center justify-center font-bold text-sm">
                          +
                        </div>
                      )}
                    </div>
                  );
                }

                const isSelected = activeTokenLabel === slot.title;
                const colors = getColorClasses(slot.color, isSelected);

                return (
                  <button
                    key={slot.id}
                    onClick={() => setActiveTokenLabel(isSelected ? null : slot.title)}
                    className={`px-4 py-3 rounded-2xl border transition-all cursor-pointer text-left flex flex-col justify-between group shadow-sm shrink-0 ${colors.slot} ${
                      isSelected ? 'scale-[1.03] ring-2' : 'hover:scale-[1.01]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-1.5">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full font-mono shrink-0 whitespace-nowrap ${colors.badge}`}>
                        {slot.role}
                      </span>
                      <span className="text-[10px] text-zinc-400 opacity-60 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        插槽
                      </span>
                    </div>

                    <div className={`text-sm sm:text-base font-bold font-mono tracking-tight shrink-0 whitespace-nowrap ${colors.text}`}>
                      {slot.title}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* View Mode 2: Compact Code Formula */
          <div className="p-4 rounded-xl bg-zinc-900 text-emerald-400 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {currentFormulaText}
          </div>
        )}

        {/* Quick Token Filters / Probe Bar */}
        {data.tokens && data.tokens.length > 0 && (
          <div className="pt-3 border-t border-zinc-200/60 dark:border-zinc-800/80 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 mr-1 flex items-center gap-1">
              <HelpCircle size={13} />
              <span>快速探针:</span>
            </span>
            {data.tokens.map((token, i) => (
              <button
                key={i}
                onClick={() => setActiveTokenLabel(activeTokenLabel === token.label ? null : token.label)}
                className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-xl transition-all cursor-pointer flex items-center gap-1 shrink-0 whitespace-nowrap ${
                  activeTokenLabel === token.label
                    ? 'bg-emerald-500 text-white shadow-md'
                    : 'bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700'
                }`}
              >
                <span className="font-bold">{token.label}</span>
                <span className="text-[10px] opacity-70">({token.role})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* 3. Active Token / Slot Inspector Drawer */}
      {activeDetail && (
        <div className="p-4 rounded-2xl bg-emerald-50/90 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-800/60 text-xs text-emerald-950 dark:text-emerald-100 flex items-start gap-3 animate-fadeIn shadow-sm">
          <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5">
            <Info size={16} />
          </div>
          <div className="space-y-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm text-emerald-900 dark:text-emerald-200">
                【{activeDetail.title}】
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-200/60 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                {activeDetail.role}
              </span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium">
              {activeDetail.desc}
            </p>
          </div>
        </div>
      )}

      {/* 4. Live Plug-in Example (公式实战代入示范) */}
      {data.example && (
        <div className="p-4 sm:p-5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-800/40 border border-zinc-200/70 dark:border-zinc-700/50 space-y-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
                <span className="text-emerald-500 font-bold">✨</span>
                <span>实战套用实例 (Live Example)</span>
              </span>
              <span className="text-[10px] text-zinc-400 dark:text-zinc-500 hidden sm:inline">
                对应上方各积木插槽
              </span>
            </div>
            <TTSButton text={data.example.en} size="xs" showLabel label="朗读" />
          </div>

          <div className="p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm space-y-1">
            <p className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 font-mono tracking-tight">
              {data.example.en}
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 font-medium">
              {data.example.zh}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormulaCard;
