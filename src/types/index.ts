export type PillarId = 'basics' | 'verbs' | 'syntax' | 'advanced';

export interface Pillar {
  id: PillarId;
  title: string;
  enTitle: string;
  description: string;
  icon: string;
  topics: TopicMeta[];
}

export interface TopicMeta {
  id: string;
  title: string;
  enTitle: string;
  desc: string;
  icon: string;
  pillarId: PillarId;
  badge?: string;
}

export interface WordCardData {
  id: string;
  word: string;
  phonetic: string;
  pos: string; // Part of Speech, e.g. "n.", "v.", "adj."
  meaning: string;
  roots?: {
    prefix?: string;
    prefixMeaning?: string;
    root: string;
    rootMeaning: string;
    suffix?: string;
    suffixMeaning?: string;
  };
  examples: {
    en: string;
    zh: string;
  }[];
  mnemonic?: string;
  tags?: string[];
}

export interface ExpressionCardData {
  id: string;
  phrase: string;
  literal: string;
  actual: string;
  scenario: string;
  breakdown: string;
  examples: {
    en: string;
    zh: string;
  }[];
  tips?: string;
}

export interface FormulaToken {
  label: string;
  role: string;
  color: string;
  desc?: string;
}

export interface FormulaCardData {
  id: string;
  title: string;
  badge?: string;
  formula: string;
  desc: string;
  tokens?: FormulaToken[];
  example?: {
    en: string;
    zh: string;
  };
}

export interface SentencePart {
  text: string;
  role: string;
  type: 'subject' | 'verb' | 'object' | 'linker' | 'predicative' | 'adverbial' | 'complement';
  detail?: string;
}

export interface SentenceSkeletonData {
  id: string;
  title: string;
  badge?: string;
  type: string;
  desc: string;
  formula: string;
  formulaDesc?: string;
  sentence: string;
  translation: string;
  parts: SentencePart[];
  explanation: string;
  itAnalogy?: string;
}

export interface TransformSentencePart {
  text: string;
  role: string;
  status: 'normal' | 'added' | 'changed' | 'moved';
  note?: string;
}

export interface TransformStage {
  type: string;
  badgeColor: string;
  sentence: string;
  translation: string;
  parts: TransformSentencePart[];
}

export interface SentenceTransformData {
  id: string;
  title: string;
  badge?: string;
  desc: string;
  from: TransformStage;
  to: TransformStage;
  additional?: TransformStage;
  transitionRules: string[];
  itAnalogy?: string;
}

export interface SentenceBuilderData {
  id: string;
  title: string;
  instruction: string;
  words: string[];
  targetSentence: string;
  explanation: string;
  itAnalogy?: string;
}

export interface QuizOption {
  text: string;
  isCorrect: boolean;
  explanation: string;
}

export interface QuizData {
  id: string;
  title: string;
  question: string;
  topicId?: string;
  options: QuizOption[];
  tip?: string;
}

export interface GrammarCompareData {
  id: string;
  chinese: string;
  wrong: string;
  correct: string;
  formula?: string;
  reason: string;
  itAnalogy?: string;
}

export interface MermaidCardData {
  id: string;
  title: string;
  desc?: string;
  code: string;
}

export interface LearningMapItem {
  num: number;
  title: string;
  subtitle: string;
  tag?: string;
  link?: string;
}

export interface LearningMapCategory {
  badge: string;
  title: string;
  enTitle: string;
  icon: string;
  color: string;
  items: LearningMapItem[];
}

export interface LearningMapData {
  id: string;
  title: string;
  desc: string;
  categories: LearningMapCategory[];
}

export interface CustomTableSection {
  title: string;
  headers: string[];
  rows: string[][];
  note?: string;
}

export interface PatternTemplate {
  scenario: string;
  template: string;
  translation: string;
}

export interface CorePatternDetail {
  num: number;
  categoryBadge: string;
  categoryTitle: string;
  title: string;
  enTitle: string;
  formula: string;
  formulaDesc?: string;
  logic: string;
  itAnalogy: string;
  templates: PatternTemplate[];
  examples: {
    en: string;
    zh: string;
  }[];
  skeleton?: SentenceSkeletonData;
  quiz?: QuizData;
  tip?: string;
}

export interface TopicContent {
  meta: TopicMeta;
  words?: WordCardData[];
  expressions?: ExpressionCardData[];
  formulas?: FormulaCardData[];
  skeletons?: SentenceSkeletonData[];
  transforms?: SentenceTransformData[];
  builders?: SentenceBuilderData[];
  quizzes?: QuizData[];
  compares?: GrammarCompareData[];
  diagrams?: MermaidCardData[];
  maps?: LearningMapData[];
  tables?: CustomTableSection[];
  patterns?: CorePatternDetail[];
}
