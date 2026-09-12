import type { Pillar, TopicContent } from '../types';
import { grammarConceptsTopic } from './modules/grammar-concepts';
import { timeDateTopic } from './modules/time-date';
import { numbersTopic } from './modules/numbers';
import { ordinalsTopic } from './modules/ordinals';
import { beVerbsTopic } from './modules/be-verbs';
import { modalVerbsTopic } from './modules/modal-verbs';
import { auxiliaryVerbsTopic } from './modules/auxiliary-verbs';
import { linkingVerbsTopic } from './modules/linking-verbs';
import { prepositionsTopic } from './modules/prepositions';
import { pronounsTopic } from './modules/pronouns';
import { indefinitePronounsTopic } from './modules/indefinite-pronouns';
import { adverbsTopic } from './modules/adverbs';
import { conjunctionsTopic } from './modules/conjunctions';
import { nounPhrasesTopic } from './modules/noun-phrases';
import { participlesTopic } from './modules/participles';
import { tensesTopic } from './modules/tenses';
import { thinkingDebugTopic } from './modules/thinking-debug';
import { sentenceSkeletonTopic } from './modules/sentence-skeleton';
import { questionsAndStatementsTopic } from './modules/questions-and-statements';
import { adverbialClausesTopic } from './modules/adverbial-clauses';
import { objectClausesTopic } from './modules/object-clauses';
import { clauseConceptsTopic } from './modules/clause-concepts';
import { nounClausesTopic } from './modules/noun-clauses';
import { relativeClausesTopic } from './modules/relative-clauses';
import { corePatterns20Topic } from './modules/core-patterns-20';
import { systemDemoFlowTopic } from './modules/system-demo-flow';
import { troubleshootingBugsTopic } from './modules/troubleshooting-bugs';

export const TOPIC_REGISTRY: Record<string, TopicContent> = {
  'grammar-concepts': grammarConceptsTopic,
  'troubleshooting-bugs': troubleshootingBugsTopic,
  'time-date': timeDateTopic,
  'numbers': numbersTopic,
  'ordinals': ordinalsTopic,
  'be-verbs': beVerbsTopic,
  'modal-verbs': modalVerbsTopic,
  'auxiliary-verbs': auxiliaryVerbsTopic,
  'linking-verbs': linkingVerbsTopic,
  'prepositions': prepositionsTopic,
  'pronouns': pronounsTopic,
  'indefinite-pronouns': indefinitePronounsTopic,
  'adverbs': adverbsTopic,
  'conjunctions': conjunctionsTopic,
  'noun-phrases': nounPhrasesTopic,
  'participles': participlesTopic,
  'tenses': tensesTopic,
  'thinking-debug': thinkingDebugTopic,
  'sentence-skeleton': sentenceSkeletonTopic,
  'questions-and-statements': questionsAndStatementsTopic,
  'clause-concepts': clauseConceptsTopic,
  'noun-clauses': nounClausesTopic,
  'object-clauses': objectClausesTopic,
  'relative-clauses': relativeClausesTopic,
  'adverbial-clauses': adverbialClausesTopic,
  'system-demo-flow': systemDemoFlowTopic,
  'core-patterns-20': corePatterns20Topic,
};

export const PILLARS: Pillar[] = [
  {
    id: 'basics',
    title: '支柱一：语法术语基石与基础认知',
    enTitle: 'Grammar Foundations & Basics',
    description: '通识第一课：英语所有核心语法概念大典（Be动词/谓语动词/分词/不定式/短语/句子成分），以及时间日期数字表达',
    icon: '🌱',
    topics: [
      grammarConceptsTopic.meta,
      timeDateTopic.meta,
      numbersTopic.meta,
      ordinalsTopic.meta,
    ],
  },
  {
    id: 'verbs',
    title: '支柱二：核心词性与动词引擎',
    enTitle: 'Core Verbs & Parts of Speech',
    description: '英语句式发动机：动词家族（Be、情态、助动词、系动词）、空间介词与代词修饰系统',
    icon: '⚡',
    topics: [
      beVerbsTopic.meta,
      modalVerbsTopic.meta,
      auxiliaryVerbsTopic.meta,
      linkingVerbsTopic.meta,
      prepositionsTopic.meta,
      pronounsTopic.meta,
      indefinitePronounsTopic.meta,
      conjunctionsTopic.meta,
      adverbsTopic.meta,
      nounPhrasesTopic.meta,
      participlesTopic.meta,
    ],
  },
  {
    id: 'syntax',
    title: '支柱三：句子骨架与句式逻辑',
    enTitle: 'Sentence Skeleton & Syntax',
    description: '中英思维差异与全栈 3 步 Debug 法，三大核心骨架，陈述疑问句转换算法与主从复合句全家桶',
    icon: '🏗️',
    topics: [
      tensesTopic.meta,
      thinkingDebugTopic.meta,
      sentenceSkeletonTopic.meta,
      questionsAndStatementsTopic.meta,
      clauseConceptsTopic.meta,
      nounClausesTopic.meta,
      objectClausesTopic.meta,
      relativeClausesTopic.meta,
      adverbialClausesTopic.meta,
    ],
  },
  {
    id: 'advanced',
    title: '支柱四：高阶句型与实战思维',
    enTitle: 'Advanced Patterns & Mastery',
    description: '系统演示（UI/布局/按钮事件）、排错与用户支持（防火墙/环境配置/日志排查）、时序推进与工作英语20种核心句型',
    icon: '🏛️',
    topics: [
      troubleshootingBugsTopic.meta,
      systemDemoFlowTopic.meta,
      corePatterns20Topic.meta,
    ],
  },
];
