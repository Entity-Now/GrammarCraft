import React from 'react';
import {
  Compass,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Dumbbell,
  Volume2,
  Code2,
} from 'lucide-react';
import type { Pillar } from '../types';

interface OverviewDashboardProps {
  pillars: Pillar[];
  onSelectTopic: (topicId: string) => void;
  onOpenPractice: () => void;
}

export const OverviewDashboard: React.FC<OverviewDashboardProps> = ({
  pillars,
  onSelectTopic,
  onOpenPractice,
}) => {
  const totalTopics = pillars.reduce((sum, p) => sum + p.topics.length, 0);

  return (
    <div className="space-y-8 pb-20 max-w-6xl mx-auto">
      {/* Hero Welcome Box */}
      <div className="rounded-3xl glass-panel p-8 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm relative overflow-hidden">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
            <Sparkles size={13} />
            <span>面向现代学习者与全栈开发者的英语框架</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight leading-tight">
            以代码的严谨与积木的直观，<br />
            重构您的<span className="text-emerald-500">英语语法认知底座</span>。
          </h1>

          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            告别死记硬背！通过 10 大可视化卡片（句构拆解、状态机形态演变、公式探针、积木拼装、纠错对比）与微软自然神经语音，全方位解构中英思维差异与 19 大英语核心语法体系。
          </p>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={() => onSelectTopic('thinking-debug')}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-semibold shadow-md shadow-emerald-500/25 flex items-center gap-2 transition-all cursor-pointer"
            >
              <span>从《中英思维差异与Debug法》启程</span>
              <ArrowRight size={14} />
            </button>

            <button
              onClick={onOpenPractice}
              className="px-4 py-2.5 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer"
            >
              <Dumbbell size={14} />
              <span>进入自测演练场</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Feature Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="glass-card p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80">
          <span className="text-2xl font-black text-emerald-500 font-mono block">19</span>
          <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-1 block">核心语法专题</span>
          <span className="text-[10px] text-zinc-400 block mt-0.5">基础至高阶全覆盖</span>
        </div>

        <div className="glass-card p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80">
          <span className="text-2xl font-black text-blue-500 font-mono block">10+</span>
          <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-1 block">可视化交互卡片</span>
          <span className="text-[10px] text-zinc-400 block mt-0.5">解构/公式/拼装/纠错</span>
        </div>

        <div className="glass-card p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80">
          <span className="text-2xl font-black text-purple-500 font-mono block">MsEdge</span>
          <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-1 block">高自然度语音</span>
          <span className="text-[10px] text-zinc-400 block mt-0.5">双模引擎即点即播</span>
        </div>

        <div className="glass-card p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80">
          <span className="text-2xl font-black text-amber-500 font-mono block">100%</span>
          <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 mt-1 block">程序员友好</span>
          <span className="text-[10px] text-zinc-400 block mt-0.5">C#/Rust/JS 代码类比</span>
        </div>
      </div>

      {/* The 4 Pillars Sections */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
              知识四大支柱全景 (Four Pillars Architecture)
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              点击任意卡片即可直接进入对应专题的深度可视化解构
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            共 {totalTopics} 个专题
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-card rounded-3xl p-6 border border-zinc-200/80 dark:border-zinc-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{pillar.icon}</span>
                    <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                      {pillar.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">
                    {pillar.topics.length} 专题
                  </span>
                </div>

                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-4 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Topics in this Pillar */}
                <div className="space-y-2">
                  {pillar.topics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => onSelectTopic(topic.id)}
                      className="w-full p-3 rounded-2xl bg-white/70 dark:bg-zinc-800/60 border border-zinc-200/60 dark:border-zinc-700/60 hover:border-emerald-500/50 hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20 flex items-center justify-between gap-3 transition-all cursor-pointer group text-left"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-lg shrink-0">{topic.icon}</span>
                        <div className="min-w-0">
                          <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200 block truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {topic.title}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-mono truncate block">
                            {topic.enTitle}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        {topic.badge && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-500 font-mono">
                            {topic.badge}
                          </span>
                        )}
                        <ArrowRight size={14} className="text-zinc-300 dark:text-zinc-600 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
