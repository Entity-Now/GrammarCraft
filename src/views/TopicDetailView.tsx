import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Filter,
  Sparkles,
  Layers,
  Network,
  Variable,
  Blocks,
  HelpCircle,
  Bug,
  GitBranch,
  Table,
} from 'lucide-react';
import type { TopicContent, TopicMeta } from '../types';
import { WordCard } from '../components/cards/WordCard';
import { ExpressionCard } from '../components/cards/ExpressionCard';
import { FormulaCard } from '../components/cards/FormulaCard';
import { SentenceSkeletonCard } from '../components/cards/SentenceSkeletonCard';
import { SentenceTransformCard } from '../components/cards/SentenceTransformCard';
import { SentenceBuilderCard } from '../components/cards/SentenceBuilderCard';
import { QuizCard } from '../components/cards/QuizCard';
import { GrammarCompareCard } from '../components/cards/GrammarCompareCard';
import { MermaidCard } from '../components/cards/MermaidCard';
import { LearningMapCard } from '../components/cards/LearningMapCard';
import { CustomTableCard } from '../components/cards/CustomTableCard';
import { CorePatternsExplorer } from '../components/cards/CorePatternsExplorer';
import { SentenceMorphLab } from '../components/cards/SentenceMorphLab';

interface TopicDetailViewProps {
  content: TopicContent;
  allTopics: TopicMeta[];
  onSelectTopic: (topicId: string) => void;
  onOpenPractice: () => void;
}

export const TopicDetailView: React.FC<TopicDetailViewProps> = ({
  content,
  allTopics,
  onSelectTopic,
  onOpenPractice,
}) => {
  const [filterType, setFilterType] = useState<string>('all');

  const { meta } = content;
  const currentIndex = allTopics.findIndex((t) => t.id === meta.id);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  // Counts for filter badges
  const counts = {
    patterns: content.patterns?.length || 0,
    diagrams: content.diagrams?.length || 0,
    maps: content.maps?.length || 0,
    formulas: content.formulas?.length || 0,
    skeletons: content.skeletons?.length || 0,
    transforms: content.transforms?.length || 0,
    builders: content.builders?.length || 0,
    quizzes: content.quizzes?.length || 0,
    compares: content.compares?.length || 0,
    words: content.words?.length || 0,
    expressions: content.expressions?.length || 0,
    tables: content.tables?.length || 0,
  };

  const totalCards = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6 pb-20">
      {/* Top Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl glass-panel p-6 sm:p-8 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap mb-2">
              <span className="text-2xl sm:text-3xl">{meta.icon}</span>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 font-mono">
                {meta.badge || '专题精讲'}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                专题 #{currentIndex + 1} / {allTopics.length}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              {meta.title}
            </h1>
            <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400 mt-1 font-semibold">
              {meta.enTitle}
            </p>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              {meta.desc}
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end gap-2 shrink-0">
            <button
              onClick={onOpenPractice}
              className="px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold shadow-md shadow-emerald-500/20 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles size={14} />
              <span>专项实战自测</span>
            </button>
            <span className="text-[11px] text-zinc-400 font-mono">
              包含 {totalCards} 个交互卡片
            </span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="mt-6 pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60 flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
          <button
            onClick={() => setFilterType('all')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 cursor-pointer ${
              filterType === 'all'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            全部 ({totalCards})
          </button>

          {counts.patterns > 0 && (
            <button
              onClick={() => setFilterType('patterns')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
                filterType === 'patterns'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Sparkles size={13} />
              <span>20种句型逐一深度剖析 ({counts.patterns})</span>
            </button>
          )}

          {counts.skeletons > 0 && (
            <button
              onClick={() => setFilterType('skeletons')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
                filterType === 'skeletons'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Layers size={13} />
              <span>核心解构 ({counts.skeletons})</span>
            </button>
          )}

          {counts.formulas > 0 && (
            <button
              onClick={() => setFilterType('formulas')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
                filterType === 'formulas'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Variable size={13} />
              <span>公式 ({counts.formulas})</span>
            </button>
          )}

          {counts.diagrams > 0 && (
            <button
              onClick={() => setFilterType('diagrams')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
                filterType === 'diagrams'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <GitBranch size={13} />
              <span>流程图 ({counts.diagrams})</span>
            </button>
          )}

          {counts.transforms > 0 && (
            <button
              onClick={() => setFilterType('transforms')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
                filterType === 'transforms'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Network size={13} />
              <span>状态演变 ({counts.transforms})</span>
            </button>
          )}

          {counts.builders > 0 && (
            <button
              onClick={() => setFilterType('builders')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
                filterType === 'builders'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Blocks size={13} />
              <span>积木拼装 ({counts.builders})</span>
            </button>
          )}

          {counts.quizzes > 0 && (
            <button
              onClick={() => setFilterType('quizzes')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
                filterType === 'quizzes'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <HelpCircle size={13} />
              <span>自测问答 ({counts.quizzes})</span>
            </button>
          )}

          {counts.compares > 0 && (
            <button
              onClick={() => setFilterType('compares')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
                filterType === 'compares'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Bug size={13} />
              <span>纠错对比 ({counts.compares})</span>
            </button>
          )}

          {counts.tables > 0 && (
            <button
              onClick={() => setFilterType('tables')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all shrink-0 flex items-center gap-1 cursor-pointer ${
                filterType === 'tables'
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              }`}
            >
              <Table size={13} />
              <span>速查表 ({counts.tables})</span>
            </button>
          )}
        </div>
      </div>

      {/* Visual Cards Stream */}
      <div className="space-y-6">
        {/* Full-width Learning Maps & Flowcharts */}
        {(filterType === 'all' || filterType === 'diagrams') &&
          content.diagrams?.map((diag, i) => <MermaidCard key={i} data={diag} />)}

        {/* Dynamic Sentence Morphing Lab for sentence-skeleton */}
        {content.meta.id === 'sentence-skeleton' && (filterType === 'all' || filterType === 'transforms') && (
          <SentenceMorphLab />
        )}

        {(filterType === 'all' || filterType === 'diagrams') &&
          content.maps?.map((mapData, i) => <LearningMapCard key={i} data={mapData} />)}

        {/* 20 Core Sentence Patterns Deep Interactive Explorer */}
        {content.patterns && content.patterns.length > 0 && (filterType === 'all' || filterType === 'patterns') && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-2">
              <span className="text-xl">🏛️</span>
              <h2 className="text-lg font-extrabold text-zinc-900 dark:text-zinc-50">
                20 种工作英语核心句型逐一深度剖析与实战模板库 (Interactive Explorer)
              </h2>
            </div>
            <CorePatternsExplorer patterns={content.patterns} />
          </div>
        )}

        {/* Formulas Grid */}
        {(filterType === 'all' || filterType === 'formulas') && content.formulas && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.formulas.map((f) => (
              <FormulaCard key={f.id} data={f} />
            ))}
          </div>
        )}

        {/* Sentence Skeletons */}
        {(filterType === 'all' || filterType === 'skeletons') &&
          content.skeletons?.map((s) => <SentenceSkeletonCard key={s.id} data={s} />)}

        {/* Morphological Transforms */}
        {(filterType === 'all' || filterType === 'transforms') &&
          content.transforms?.map((t) => <SentenceTransformCard key={t.id} data={t} />)}

        {/* Sentence Builders */}
        {(filterType === 'all' || filterType === 'builders') &&
          content.builders?.map((b) => <SentenceBuilderCard key={b.id} data={b} />)}

        {/* Grammar Comparisons */}
        {(filterType === 'all' || filterType === 'compares') && content.compares && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.compares.map((c) => (
              <GrammarCompareCard key={c.id} data={c} />
            ))}
          </div>
        )}

        {/* Quizzes */}
        {(filterType === 'all' || filterType === 'quizzes') && content.quizzes && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.quizzes.map((q) => (
              <QuizCard key={q.id} data={q} />
            ))}
          </div>
        )}

        {/* Words & Expressions */}
        {(filterType === 'all' || filterType === 'words') && content.words && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.words.map((w) => (
              <WordCard key={w.id} data={w} />
            ))}
          </div>
        )}

        {/* Expressions */}
        {(filterType === 'all' || filterType === 'expressions') && content.expressions && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.expressions.map((e) => (
              <ExpressionCard key={e.id} data={e} />
            ))}
          </div>
        )}

        {/* Tables */}
        {(filterType === 'all' || filterType === 'tables') &&
          content.tables?.map((tableData, i) => <CustomTableCard key={i} data={tableData} />)}
      </div>

      {/* Bottom Pagination Buttons */}
      <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between gap-4">
        {prevTopic ? (
          <button
            onClick={() => onSelectTopic(prevTopic.id)}
            className="flex items-center gap-2 p-3 rounded-2xl glass-card hover:border-emerald-500/40 text-left transition-all cursor-pointer group"
          >
            <ChevronLeft size={18} className="text-zinc-400 group-hover:text-emerald-500 transition-transform group-hover:-translate-x-1" />
            <div>
              <span className="text-[10px] text-zinc-400 uppercase font-semibold block">上一专题</span>
              <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                {prevTopic.title}
              </span>
            </div>
          </button>
        ) : (
          <div />
        )}

        {nextTopic && (
          <button
            onClick={() => onSelectTopic(nextTopic.id)}
            className="flex items-center gap-2 p-3 rounded-2xl glass-card hover:border-emerald-500/40 text-right transition-all cursor-pointer group ml-auto"
          >
            <div>
              <span className="text-[10px] text-zinc-400 uppercase font-semibold block">下一专题</span>
              <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                {nextTopic.title}
              </span>
            </div>
            <ChevronRight size={18} className="text-zinc-400 group-hover:text-emerald-500 transition-transform group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </div>
  );
};
