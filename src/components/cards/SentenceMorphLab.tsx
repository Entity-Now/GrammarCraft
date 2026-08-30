import React, { useState, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  HelpCircle,
  Layers,
  Wand2,
  Gamepad2,
} from 'lucide-react';
import { TTSButton } from '../audio/TTSButton';

export interface MorphStep {
  type: string;
  typeBadge: string;
  badgeColor: 'blue' | 'purple' | 'emerald' | 'amber' | 'rose';
  sentence: string;
  translation: string;
  actionSummary: string;
  ruleExplanation: string;
  tokens: {
    text: string;
    role: string;
    status: 'normal' | 'moved' | 'added' | 'changed';
    note?: string;
  }[];
}

export interface MorphScenario {
  id: string;
  title: string;
  description: string;
  category: string;
  steps: MorphStep[];
}

const DEFAULT_SCENARIOS: MorphScenario[] = [
  {
    id: 'lexical-verb',
    title: '实义动词句型演变（借助 does / did）',
    category: '实义动词系列',
    description: '观察实义动词在陈述、否定、一般疑问、特殊疑问与反义疑问中，助动词如何介入并吸收时态三单',
    steps: [
      {
        type: '陈述肯定句 (Affirmative)',
        typeBadge: '1. 肯定陈述',
        badgeColor: 'blue',
        sentence: 'The production server runs stably.',
        translation: '生产服务器运行很稳定。',
        actionSummary: '基础状态：单三实义动词 runs 携带单三 -s 后缀。',
        ruleExplanation: '主语 The production server 是第三人称单数，因此实义动词带 -s (runs)。',
        tokens: [
          { text: 'The production server', role: '主语 (S)', status: 'normal' },
          { text: 'runs', role: '实义动词单三 (V-s)', status: 'normal', note: '带单三-s' },
          { text: 'stably.', role: '副词状语 (Adv)', status: 'normal' },
        ],
      },
      {
        type: '陈述否定句 (Negative)',
        typeBadge: '2. 否定陈述',
        badgeColor: 'rose',
        sentence: 'The production server does not run stably.',
        translation: '生产服务器运行得并不稳定。',
        actionSummary: '变异操作：插入单三否定助动词 does not，runs 吸收单三后降维还原为原形 run！',
        ruleExplanation: '实义动词不能直接加 not，必须借入 does not，动词去 -s 恢复裸原形 run。',
        tokens: [
          { text: 'The production server', role: '主语 (S)', status: 'normal' },
          { text: 'does not', role: '单三否定助动词', status: 'added', note: '插入 does not' },
          { text: 'run', role: '动词裸原形 (V-base)', status: 'changed', note: '去 -s 还原为原形' },
          { text: 'stably.', role: '副词状语 (Adv)', status: 'normal' },
        ],
      },
      {
        type: '一般疑问句 (Yes/No Question)',
        typeBadge: '3. 一般疑问',
        badgeColor: 'purple',
        sentence: 'Does the production server run stably?',
        translation: '生产服务器运行稳定吗？',
        actionSummary: '变异操作：助动词 Does 倒装飞跃至全句最前端，句尾变为问号。',
        ruleExplanation: '助动词 Does 提前到主语之前，动词保持原形 run。',
        tokens: [
          { text: 'Does', role: '助动词提首', status: 'moved', note: '从句中跳跃至句首' },
          { text: 'the production server', role: '主语 (S)', status: 'normal' },
          { text: 'run', role: '动词裸原形 (V-base)', status: 'normal' },
          { text: 'stably?', role: '副词 + 问号', status: 'changed', note: '句尾变为问号' },
        ],
      },
      {
        type: '特殊疑问句 (Wh- Question)',
        typeBadge: '4. 特殊疑问',
        badgeColor: 'emerald',
        sentence: 'How does the production server run stably?',
        translation: '生产服务器是如何保持稳定运行的？',
        actionSummary: '变异操作：在一般疑问句的最顶端，注入特殊疑问词 How。',
        ruleExplanation: '特殊疑问词 How 霸占全句首位，后面严格保持一般疑问句语序 does the server run。',
        tokens: [
          { text: 'How', role: '特殊疑问词置顶', status: 'added', note: '疑问词置于全句最高优先级' },
          { text: 'does', role: '倒装助动词', status: 'normal' },
          { text: 'the production server', role: '主语 (S)', status: 'normal' },
          { text: 'run', role: '动词原形', status: 'normal' },
          { text: 'stably?', role: '副词 + 问号', status: 'normal' },
        ],
      },
      {
        type: '反义疑问句 (Tag Question)',
        typeBadge: '5. 反义疑问',
        badgeColor: 'amber',
        sentence: 'The production server runs stably, doesn’t it?',
        translation: '生产服务器运行很稳定，对吧？',
        actionSummary: '变异操作：前半句陈述肯定事实，句末镜像挂载单三否定反问尾巴 doesn’t it。',
        ruleExplanation: '前肯后否原则：主句是 runs，尾巴使用否定助动词 doesn’t，并用代词 it 代替 server。',
        tokens: [
          { text: 'The production server runs stably', role: '主句事实陈述 (肯定)', status: 'normal' },
          { text: ', doesn’t it?', role: '镜像反问小尾巴 (否定)', status: 'added', note: '前肯后否镜像规则' },
        ],
      },
    ],
  },
  {
    id: 'be-verb-scenario',
    title: 'Be 动词句型演变（自身一等公民提首）',
    category: 'Be 动词系列',
    description: 'Be 动词拥有独立一等公民权限，无需借用 do，自身直接加 not 或跳跃至句首倒装',
    steps: [
      {
        type: '陈述肯定句 (Affirmative)',
        typeBadge: '1. 肯定陈述',
        badgeColor: 'blue',
        sentence: 'The database cluster is online.',
        translation: '数据库集群当前是在线的。',
        actionSummary: '基础状态：is 充当系动词连接主语与在线状态。',
        ruleExplanation: '主语 The database cluster 是单数，使用单三系动词 is。',
        tokens: [
          { text: 'The database cluster', role: '主语 (S)', status: 'normal' },
          { text: 'is', role: '系动词 (Linker)', status: 'normal' },
          { text: 'online.', role: '表语 (Predicative)', status: 'normal' },
        ],
      },
      {
        type: '陈述否定句 (Negative)',
        typeBadge: '2. 否定陈述',
        badgeColor: 'rose',
        sentence: 'The database cluster is not online.',
        translation: '数据库集群当前并不在线。',
        actionSummary: '变异操作：is 自身直接挂载 not，无需借助 does 助动词。',
        ruleExplanation: 'Be 动词具有一等公民语法权，否定时直接在后面添加 not。',
        tokens: [
          { text: 'The database cluster', role: '主语 (S)', status: 'normal' },
          { text: 'is not', role: '系动词否定形态', status: 'changed', note: 'is 直接加 not' },
          { text: 'online.', role: '表语 (Predicative)', status: 'normal' },
        ],
      },
      {
        type: '一般疑问句 (Yes/No Question)',
        typeBadge: '3. 一般疑问',
        badgeColor: 'purple',
        sentence: 'Is the database cluster online?',
        translation: '数据库集群当前在线吗？',
        actionSummary: '变异操作：is 自身跳跃至句首完成主谓倒装。',
        ruleExplanation: 'Be 动词一般疑问句直接将 is 移到主语前，不可借用 does。',
        tokens: [
          { text: 'Is', role: 'Be动词提首', status: 'moved', note: 'is 自身直接提至句首' },
          { text: 'the database cluster', role: '主语 (S)', status: 'normal' },
          { text: 'online?', role: '表语 + 问号', status: 'changed', note: '句尾变为问号' },
        ],
      },
      {
        type: '特殊疑问句 (Wh- Question)',
        typeBadge: '4. 特殊疑问',
        badgeColor: 'emerald',
        sentence: 'Why is the database cluster online?',
        translation: '为什么数据库集群当前在线？',
        actionSummary: '变异操作：在倒装句首置入特殊疑问词 Why。',
        ruleExplanation: '特殊疑问词 Why 置于最前，后接倒装语序 is the cluster。',
        tokens: [
          { text: 'Why', role: '特殊疑问词置顶', status: 'added', note: '置于全句最前' },
          { text: 'is', role: 'Be动词倒装', status: 'normal' },
          { text: 'the database cluster', role: '主语 (S)', status: 'normal' },
          { text: 'online?', role: '表语 + 问号', status: 'normal' },
        ],
      },
      {
        type: '反义疑问句 (Tag Question)',
        typeBadge: '5. 反义疑问',
        badgeColor: 'amber',
        sentence: 'The database cluster is online, isn’t it?',
        translation: '数据库集群当前在线，对吧？',
        actionSummary: '变异操作：句末挂载否定系词尾巴 isn’t it。',
        ruleExplanation: '前肯后否：前半句用 is，后半句反问尾巴用 isn’t it。',
        tokens: [
          { text: 'The database cluster is online', role: '主句事实陈述 (肯定)', status: 'normal' },
          { text: ', isn’t it?', role: 'Be动词否定反问小尾巴', status: 'added', note: '前肯后否 isn’t it' },
        ],
      },
    ],
  },
];

export const SentenceMorphLab: React.FC = () => {
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState(0);
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scenario = DEFAULT_SCENARIOS[selectedScenarioIdx];
  const step = scenario.steps[currentStepIdx];

  // Auto play animation effect
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStepIdx((prev) => {
          if (prev >= scenario.steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, scenario.steps.length]);

  const handleNext = () => {
    if (currentStepIdx < scenario.steps.length - 1) {
      setCurrentStepIdx(currentStepIdx + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(currentStepIdx - 1);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIdx(0);
  };

  return (
    <div className="glass-card rounded-3xl p-6 sm:p-7 border border-zinc-200/80 dark:border-zinc-800/80 shadow-md space-y-6">
      {/* Header & Scenario Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200/70 dark:border-zinc-800/70 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <Gamepad2 size={18} />
            </span>
            <h3 className="text-lg font-extrabold text-zinc-900 dark:text-zinc-50">
              句型变形实验室 (Sentence Morphing Lab)
            </h3>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono">
              动态交互动画
            </span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            体验通过词块添加（Added）、位移提首（Moved）与时态还原（Changed），句子如何如状态机般流转演变！
          </p>
        </div>

        {/* Scenario Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold">
          {DEFAULT_SCENARIOS.map((sc, idx) => (
            <button
              key={sc.id}
              onClick={() => {
                setSelectedScenarioIdx(idx);
                setCurrentStepIdx(0);
                setIsPlaying(false);
              }}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedScenarioIdx === idx
                  ? 'bg-white dark:bg-zinc-900 text-emerald-600 dark:text-emerald-400 shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              {sc.title.split('（')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Step Pills Navigation Bar */}
      <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1">
        <div className="flex items-center gap-2">
          {scenario.steps.map((st, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentStepIdx(idx);
                setIsPlaying(false);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                currentStepIdx === idx
                  ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25 scale-105'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              <span>{st.typeBadge}</span>
              {currentStepIdx === idx && <Sparkles size={12} className="animate-spin" />}
            </button>
          ))}
        </div>

        {/* Animation Playback Controller */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isPlaying
                ? 'bg-amber-500 text-white shadow-sm'
                : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-emerald-500 hover:text-white'
            }`}
          >
            {isPlaying ? <Pause size={13} /> : <Play size={13} />}
            <span>{isPlaying ? '暂停动画' : '自动播放演变'}</span>
          </button>

          <button
            onClick={handleReset}
            className="p-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 transition-colors"
            title="重置到第一步"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Main Dynamic Stage Arena */}
      <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900 dark:bg-black border border-zinc-800 text-zinc-100 shadow-inner relative overflow-hidden space-y-6">
        {/* Top Status & Audio Bar */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              {step.type}
            </span>
            <span className="text-xs font-mono text-zinc-400">
              阶段 {currentStepIdx + 1} / {scenario.steps.length}
            </span>
          </div>

          <TTSButton text={step.sentence} size="sm" />
        </div>

        {/* Animated Word Tile Stage */}
        <div className="py-6 flex flex-wrap items-center justify-center gap-3 min-h-[90px]">
          {step.tokens.map((token, i) => {
            const isAdded = token.status === 'added';
            const isMoved = token.status === 'moved';
            const isChanged = token.status === 'changed';

            let badgeBg = 'bg-zinc-800 text-zinc-200 border-zinc-700';
            if (isAdded) badgeBg = 'bg-emerald-600 text-white border-emerald-400 ring-2 ring-emerald-400/40 animate-bounce';
            if (isMoved) badgeBg = 'bg-purple-600 text-white border-purple-400 ring-2 ring-purple-400/40 shadow-lg';
            if (isChanged) badgeBg = 'bg-amber-600 text-white border-amber-400 ring-2 ring-amber-400/40';

            return (
              <div
                key={i}
                className="flex flex-col items-center space-y-1.5 transition-all duration-500 ease-out transform"
              >
                <div
                  className={`px-4 py-2.5 rounded-2xl border font-mono text-sm sm:text-base font-bold shadow-md transition-all ${badgeBg}`}
                >
                  {token.text}
                </div>
                <div className="text-[10px] text-zinc-400 font-mono text-center">
                  <span>{token.role}</span>
                  {token.note && (
                    <span className="block text-emerald-400 font-semibold font-sans">
                      {token.note}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Sentence Translation & Audio */}
        <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-0.5">
            <span className="text-sm sm:text-base font-bold text-white font-mono">
              {step.sentence}
            </span>
            <p className="text-xs text-zinc-400">
              {step.translation}
            </p>
          </div>

          <span className="text-[11px] font-mono text-emerald-400/90 self-start sm:self-center">
            {step.actionSummary}
          </span>
        </div>
      </div>

      {/* Syntax Rule & Mechanism Insight Box */}
      <div className="p-4 rounded-2xl bg-emerald-50/80 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-900/40 space-y-2">
        <div className="flex items-center gap-2">
          <Wand2 size={16} className="text-emerald-600 dark:text-emerald-400" />
          <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
            形态演变底层机制解析
          </h4>
        </div>
        <p className="text-xs text-emerald-800 dark:text-emerald-300 leading-relaxed font-medium">
          {step.ruleExplanation}
        </p>
      </div>

      {/* Bottom Step Controller Buttons */}
      <div className="flex items-center justify-between pt-1">
        <button
          onClick={handlePrev}
          disabled={currentStepIdx === 0}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
            currentStepIdx === 0
              ? 'opacity-40 cursor-not-allowed bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
              : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200'
          }`}
        >
          <ArrowLeft size={14} />
          <span>上一种句型</span>
        </button>

        <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
          按按钮或开启自动播放观察词块跃迁
        </span>

        <button
          onClick={handleNext}
          disabled={currentStepIdx === scenario.steps.length - 1}
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
            currentStepIdx === scenario.steps.length - 1
              ? 'opacity-40 cursor-not-allowed bg-zinc-100 dark:bg-zinc-800 text-zinc-400'
              : 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-md shadow-emerald-500/25'
          }`}
        >
          <span>下一种形态变异</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
};
