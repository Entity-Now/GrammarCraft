import type { TopicContent } from '../../types';

export const adverbialClausesTopic: TopicContent = {
  meta: {
    id: 'adverbial-clauses',
    title: '状语从句',
    enTitle: 'Adverbial Clauses',
    desc: '时间、条件、原因、让步、目的五大状语从句分类与“主将从现”时态黄金铁律',
    icon: '🌿',
    pillarId: 'syntax',
    badge: '逻辑从句',
  },
  formulas: [
    {
      id: 'f-future-condition-rule',
      title: '主将从现铁律公式 (The Future in Main, Present in Sub)',
      badge: '时态黄金法则',
      formula: '主句用一般将来时 (will do) + [if / unless / when / as soon as 从句用一般现在时 (V-s/原形)]',
      desc: '在时间状语从句和条件状语从句中，即使从句动作也发生在将来，从句绝不能用 will，必须用一般现在时表将来！',
      tokens: [
        { label: 'Main Clause', role: '主句将来时', color: 'purple', desc: 'The system will trigger...' },
        { label: 'Condition/Time', role: '从属连词', color: 'blue', desc: 'if / when / as soon as' },
        { label: 'Sub Clause', role: '从句一般现在时', color: 'emerald', desc: 'cpuExceeds (单三不可用 will)' },
      ],
      example: {
        en: 'The system will scale out automatically if the CPU load exceeds eighty percent.',
        zh: '如果 CPU 负载超过 80%，系统将自动进行横向扩容。',
      },
    },
    {
      id: 'f-so-that-purpose',
      title: '目的状语从句公式 (so that)',
      badge: '目的公式',
      formula: 'S + V + O + so that + [从句主语 + can / will / could + 动词原形]',
      desc: '中文习惯用“为了/好让...”，英文在主句后通过 so that（以便于/为了使...）引导完整的目的从句。',
      example: {
        en: 'Write clean code so that other teammates can maintain it easily.',
        zh: '编写整洁的代码，以便其他队友能够轻松维护。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-condition-clause',
      badge: '条件从句解构',
      type: 'Main Clause + Adverbial Clause',
      title: '条件状语从句：主将从现完整展现',
      desc: '主句使用将来时 will roll back，从句以 if 引导且动词 fails 为一般现在时单三。',
      formula: '[主句 S + will + V] + [if 从属连词] + [从句 S + V (一般现在时)]',
      sentence: 'The CI pipeline will roll back the deployment if the smoke tests fail.',
      translation: '如果冒烟测试失败，CI 流水线将自动回滚部署。',
      parts: [
        { text: 'The CI pipeline', role: '主句主语', type: 'subject', detail: '流水线主体' },
        { text: 'will roll back', role: '主句谓语', type: 'verb', detail: '将来时 will + 原形' },
        { text: 'the deployment', role: '主句宾语', type: 'object', detail: '部署动作客体' },
        { text: '[if the smoke tests fail]', role: '条件状语从句', type: 'adverbial', detail: 'if 引导 · tests fail 保持现在时' },
      ],
      explanation: '从句是条件状语，即使回滚和测试失败都发生在未来，tests 之后的动词依然用现在时 fail 而不是 will fail。',
      itAnalogy: '类比错误守卫分支：if (testFailed()) { pipeline.rollback(); }',
    },
  ],
  compares: [
    {
      id: 'cmp-if-will',
      chinese: '如果明天服务器宕机，我们会收到报警。',
      wrong: 'If the server will crash tomorrow, we will get an alert.',
      correct: 'If the server crashes tomorrow, we will get an alert.',
      formula: 'if 从句主将从现',
      reason: '条件从句中绝不能出现 will crash，必须使用一般现在时 crashes 替代将来时！',
    },
  ],
  quizzes: [
    {
      id: 'q-clause-tense',
      title: '主将从现挑战',
      question: '请选出语法完全正确的一句：',
      options: [
        { text: 'We will notify you as soon as the maintenance will finish.', isCorrect: false, explanation: '错误：as soon as 引导时间状语从句，不能用 will finish。' },
        { text: 'We will notify you as soon as the maintenance finishes.', isCorrect: true, explanation: '正确！主句用 will notify，从句用一般现在时单三 finishes。' },
        { text: 'We notify you as soon as the maintenance will finish.', isCorrect: false, explanation: '错误：主句应用将来时，从句应用现在时。' },
      ],
    },
  ],
  tables: [
    {
      title: '五大核心状语从句及高频引导词库 (Adverbial Clauses Grid)',
      headers: ['从句类别', '核心引导连词', '逻辑语义', '典型例句'],
      rows: [
        ['时间状语从句', 'when, while, as soon as, before, after', '表达动作发生的时间与顺序（主将从现）', 'Call me when you arrive.'],
        ['条件状语从句', 'if (如果), unless (除非/若不)', '设定动作成立的前提假设（主将从现）', 'Unless you log in, access is denied.'],
        ['原因状语从句', 'because, since, as', '阐明导致主句结果的原因（不与so连用）', 'Since cache is warm, queries are fast.'],
        ['让步状语从句', 'although, even though, while', '承认事实但主句出现反转（不与but连用）', 'Although load is high, memory is stable.'],
        ['目的状语从句', 'so that, in order that', '表明主句动作追求的目标意图', 'Add indexes so that searches are quick.'],
      ],
    },
  ],
};
