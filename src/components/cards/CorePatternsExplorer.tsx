import React, { useState } from 'react';
import {
  Compass,
  Filter,
  Search,
  CheckCircle2,
  Sparkles,
  LayoutGrid,
  List,
} from 'lucide-react';
import type { CorePatternDetail } from '../../types';
import { CorePatternDetailCard } from './CorePatternDetailCard';

interface CorePatternsExplorerProps {
  patterns: CorePatternDetail[];
}

export const CorePatternsExplorer: React.FC<CorePatternsExplorerProps> = ({ patterns }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePatternNum, setActivePatternNum] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: '全部 20 种句型', count: 20 },
    { id: 'cat1', name: '五大基本句型 (1-5)', count: 5 },
    { id: 'cat2', name: '状语与修饰扩展 (6-8)', count: 3 },
    { id: 'cat3', name: '核心名词性与定语从句 (9-13)', count: 5 },
    { id: 'cat4', name: '状语从句与特殊句式 (14-20)', count: 7 },
  ];

  const filterMatches = (p: CorePatternDetail) => {
    // Category match
    if (selectedCategory === 'cat1' && !(p.num >= 1 && p.num <= 5)) return false;
    if (selectedCategory === 'cat2' && !(p.num >= 6 && p.num <= 8)) return false;
    if (selectedCategory === 'cat3' && !(p.num >= 9 && p.num <= 13)) return false;
    if (selectedCategory === 'cat4' && !(p.num >= 14 && p.num <= 20)) return false;

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchEn = p.enTitle.toLowerCase().includes(q);
      const matchFormula = p.formula.toLowerCase().includes(q);
      const matchLogic = p.logic.toLowerCase().includes(q);
      return matchTitle || matchEn || matchFormula || matchLogic;
    }

    return true;
  };

  const filteredPatterns = patterns.filter(filterMatches);

  return (
    <div className="space-y-6">
      {/* Interactive Control Panel */}
      <div className="p-4 sm:p-5 rounded-3xl glass-panel border border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
        {/* Category Pills & Search */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setActivePatternNum(null);
                }}
                className={`px-3 py-1.5 rounded-xl font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-500 text-white shadow-sm shadow-emerald-500/20'
                    : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700 border border-zinc-200/60 dark:border-zinc-700/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="relative shrink-0 sm:w-64">
            <Search size={13} className="absolute left-3 top-2.5 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索 20 种句型关键词..."
              className="w-full pl-8 pr-3 py-1.5 rounded-xl text-xs bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
            />
          </div>
        </div>

        {/* 1~20 Quick Jump Chips */}
        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
          <span className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider block mb-2">
            快速跳转至句型 (Quick Jump)：
          </span>
          <div className="flex flex-wrap gap-1.5">
            {patterns.map((p) => {
              const isSelected = activePatternNum === p.num;
              return (
                <button
                  key={p.num}
                  onClick={() => {
                    setActivePatternNum(isSelected ? null : p.num);
                    const el = document.getElementById(`pattern-${p.num}`);
                    el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-emerald-500 text-white ring-2 ring-emerald-400/50 scale-105 shadow-sm'
                      : 'bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60 hover:border-emerald-500/50'
                  }`}
                  title={`${p.title} (${p.enTitle})`}
                >
                  #{p.num < 10 ? `0${p.num}` : p.num} {p.title.split(' ')[0]}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Render All Filtered Detailed Pattern Cards */}
      <div className="space-y-6">
        {filteredPatterns.length === 0 ? (
          <div className="p-12 text-center text-xs text-zinc-400 glass-card rounded-2xl">
            未找到与 "{searchQuery}" 匹配的句型，请尝试其他关键词。
          </div>
        ) : (
          filteredPatterns.map((p) => (
            <CorePatternDetailCard key={p.num} pattern={p} />
          ))
        )}
      </div>
    </div>
  );
};
