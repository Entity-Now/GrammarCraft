import type { Pillar, TopicContent } from '../types';
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
import { adverbialClausesTopic } from './modules/adverbial-clauses';
import { objectClausesTopic } from './modules/object-clauses';
import { corePatterns20Topic } from './modules/core-patterns-20';

export const TOPIC_REGISTRY: Record<string, TopicContent> = {
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
  'adverbial-clauses': adverbialClausesTopic,
  'object-clauses': objectClausesTopic,
  'core-patterns-20': corePatterns20Topic,
};

export const PILLARS: Pillar[] = [
  {
    id: 'basics',
    title: '支柱一：基础认知与时间数字',
    enTitle: 'Basics, Time & Numbers',
    description: '掌握日常生活与技术场景中时间、日期、数字单位与序数词的英文表达标准',
    icon: '🌱',
    topics: [
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
    description: '中英思维差异与全栈 3 步 Debug 法，三大核心骨架，疑问形态演变与主从复合句',
    icon: '🏗️',
    topics: [
      tensesTopic.meta,
      thinkingDebugTopic.meta,
      sentenceSkeletonTopic.meta,
      adverbialClausesTopic.meta,
      objectClausesTopic.meta,
    ],
  },
  {
    id: 'advanced',
    title: '支柱四：高阶句型与实战思维',
    enTitle: 'Advanced Patterns & Mastery',
    description: '五大基本句型全景、状语修饰扩展、核心名词性从句与工作英语 20 种核心句型',
    icon: '🏛️',
    topics: [
      corePatterns20Topic.meta,
    ],
  },
];
