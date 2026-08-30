import React, { useState } from 'react';
import { Dumbbell, Trophy, Flame, RotateCcw, Sparkles, Blocks, HelpCircle } from 'lucide-react';
import type { QuizData, SentenceBuilderData, TopicContent } from '../types';
import { QuizCard } from '../components/cards/QuizCard';
import { SentenceBuilderCard } from '../components/cards/SentenceBuilderCard';
import { SentenceMorphLab } from '../components/cards/SentenceMorphLab';

interface PracticeArenaViewProps {
  topicContents: Record<string, TopicContent>;
  onSelectTopic: (topicId: string) => void;
}

export const PracticeArenaView: React.FC<PracticeArenaViewProps> = ({
  topicContents,
}) => {
  const [practiceMode, setPracticeMode] = useState<'quiz' | 'builder' | 'morph'>('quiz');
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  // Aggregate all quizzes and builders from all topics
  const allQuizzes: { quiz: QuizData; topicTitle: string }[] = [];
  const allBuilders: { builder: SentenceBuilderData; topicTitle: string }[] = [];

  Object.values(topicContents).forEach((tc) => {
    tc.quizzes?.forEach((q) => {
      allQuizzes.push({ quiz: q, topicTitle: tc.meta.title });
    });
    tc.builders?.forEach((b) => {
      allBuilders.push({ builder: b, topicTitle: tc.meta.title });
    });
  });

  const handleAnswer = (isCorrect: boolean) => {
    setTotalAnswered((prev) => prev + 1);
    if (isCorrect) {
      setScore((prev) => prev + 10);
      setStreak((prev) => prev + 1);
    } else {
      setStreak(0);
    }
  };

  const handleResetScore = () => {
    setScore(0);
    setStreak(0);
    setTotalAnswered(0);
  };

  return (
    <div className="space-y-6 pb-20">
      {/* Header & Stats Banner */}
      <div className="rounded-3xl glass-panel p-6 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-2 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Dumbbell size={20} />
            </span>
            <h1 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              语法实战演练场 (Practice Arena)
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
            精选 19 个语法专题的交互自测题目与积木造句挑战，通过主动输出巩固强类型英文思维。
          </p>
        </div>

        {/* Gamified Score Badges */}
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/50 flex items-center gap-2">
            <Trophy size={18} className="text-amber-500" />
            <div>
              <span className="text-[10px] uppercase font-bold text-amber-700 dark:text-amber-300 block">积分</span>
              <span className="text-base font-extrabold font-mono text-amber-900 dark:text-amber-100">{score}</span>
            </div>
          </div>

          <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/30 border border-rose-200/60 dark:border-rose-900/50 flex items-center gap-2">
            <Flame size={18} className="text-rose-500" />
            <div>
              <span className="text-[10px] uppercase font-bold text-rose-700 dark:text-rose-300 block">连胜</span>
              <span className="text-base font-extrabold font-mono text-rose-900 dark:text-rose-100">{streak}</span>
            </div>
          </div>

          <button
            onClick={handleResetScore}
            className="p-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
            title="重置统计数据"
          >
            <RotateCcw size={16} />
          </button>
        </div>
      </div>

      {/* Mode Switcher */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold">
          <button
            onClick={() => setPracticeMode('quiz')}
            className={`px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              practiceMode === 'quiz'
                ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400'
            }`}
          >
            <HelpCircle size={14} />
            <span>自测问答挑战 ({allQuizzes.length})</span>
          </button>

          <button
            onClick={() => setPracticeMode('builder')}
            className={`px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              practiceMode === 'builder'
                ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400'
            }`}
          >
            <Blocks size={14} />
            <span>积木造句拼装 ({allBuilders.length})</span>
          </button>

          <button
            onClick={() => setPracticeMode('morph')}
            className={`px-4 py-2 rounded-lg flex items-center gap-1.5 transition-all cursor-pointer ${
              practiceMode === 'morph'
                ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                : 'text-zinc-600 dark:text-zinc-400'
            }`}
          >
            <Sparkles size={14} />
            <span>句型变形实验室 (动画演变)</span>
          </button>
        </div>

        <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
          已作答 {totalAnswered} 次
        </span>
      </div>

      {/* Arena Content */}
      {practiceMode === 'quiz' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allQuizzes.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between px-1 text-[11px] text-zinc-400 font-mono">
                <span>关卡 #{idx + 1}</span>
                <span>来自专题：《{item.topicTitle}》</span>
              </div>
              <QuizCard data={item.quiz} onAnswer={handleAnswer} />
            </div>
          ))}
        </div>
      )}

      {practiceMode === 'builder' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allBuilders.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center justify-between px-1 text-[11px] text-zinc-400 font-mono">
                <span>积木关卡 #{idx + 1}</span>
                <span>来自专题：《{item.topicTitle}》</span>
              </div>
              <SentenceBuilderCard data={item.builder} />
            </div>
          ))}
        </div>
      )}

      {practiceMode === 'morph' && (
        <div className="space-y-4">
          <SentenceMorphLab />
        </div>
      )}
    </div>
  );
};
