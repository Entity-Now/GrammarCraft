import type { TopicContent } from '../../types';

export const numbersTopic: TopicContent = {
  meta: {
    id: 'numbers',
    title: '数字单位学习',
    enTitle: 'Numbers and Units',
    desc: '从基础数字、十进制千分位命名法则到百/千/百万/十亿单位换算与技术计量单位',
    icon: '🔢',
    pillarId: 'basics',
    badge: '计算计量',
  },
  formulas: [
    {
      id: 'f-large-numbers',
      title: '英文千分位三位一进法公式 (The 3-Digit Rule)',
      badge: '大数读法公式',
      formula: '[百位] hundred and [十位]-[个位] , [逗号进位单位: thousand / million / billion]',
      desc: '中文是万进进制（4个0一进），英文严格基于千分位逗号（3个0一进）：第一个逗号为 thousand，第二个逗号为 million，第三个逗号为 billion。',
      tokens: [
        { label: 'Thousand', role: '10^3 (千)', color: 'emerald', desc: '1,000 (3个零)' },
        { label: 'Million', role: '10^6 (百万)', color: 'blue', desc: '1,000,000 (6个零)' },
        { label: 'Billion', role: '10^9 (十亿)', color: 'purple', desc: '1,000,000,000 (9个零)' },
      ],
      example: {
        en: '1,234,567: one million, two hundred thirty-four thousand, five hundred sixty-seven.',
        zh: '一百二十三万四千五百六十七。',
      },
    },
    {
      id: 'f-plural-units',
      title: '单位词复数单数法则 (Hundreds of vs Two Hundred)',
      badge: '单位规则',
      formula: '[具体数字] + hundred/thousand/million (不加s) VS [hundreds/thousands of] (必须加s与of)',
      desc: '前面有确定具体数字时，单位绝不加复数-s；只有在表达模糊海量（成百上千、数以百万计）时才加-s并跟of。',
      example: {
        en: 'Two million users vs Millions of users.',
        zh: '两百万用户（精确数字） vs 数以百万计的用户（概数）。',
      },
    },
  ],
  compares: [
    {
      id: 'cmp-number-s',
      chinese: '这个系统每天处理五百万次请求。',
      wrong: 'The system processes five millions requests per day.',
      correct: 'The system processes five million requests per day.',
      formula: '具体数字 + million (无 s)',
      reason: '当前面有具体基数词（five）修饰时，million 作为量词绝不能加 -s！',
      itAnalogy: '类比固定类型单位：5 * Units.Million，类型本身不具备集合复数属性。',
    },
  ],
  skeletons: [
    {
      id: 'sk-metric-capacity',
      badge: '数字与度量解构',
      type: 'SVO + Quantity',
      title: '数据吞吐与指标表达',
      desc: '主干动作承载数额量词修饰。',
      formula: 'S (主语) + V (谓语) + O (数字 + 量词 + 核心名词)',
      sentence: 'The database handles over ten billion queries daily.',
      translation: '该数据库每天处理超过一百亿次查询。',
      parts: [
        { text: 'The database', role: '主语 (S)', type: 'subject', detail: '数据库主体' },
        { text: 'handles', role: '谓语动词 (V)', type: 'verb', detail: '处理 · 及物动词' },
        { text: 'over ten billion', role: '数额修饰', type: 'object', detail: '超过一百亿 (10,000,000,000)' },
        { text: 'queries', role: '核心宾语名词', type: 'object', detail: '查询次数 · 可数名词复数' },
        { text: '[daily]', role: '频率状语', type: 'adverbial', detail: '每天 · 挂载句尾' },
      ],
      explanation: 'ten billion 对应中文的一百亿（10 × 10亿 = 100亿）。',
      itAnalogy: 'BigInt 运算：const queriesPerDay = 10_000_000_000n;',
    },
  ],
  words: [
    {
      id: 'w-billion',
      word: 'billion',
      phonetic: '/ˈbɪljən/',
      pos: 'n./num.',
      meaning: '十亿（1,000,000,000）',
      roots: {
        prefix: 'bi-',
        prefixMeaning: '二 (在双进位千分制中代表第二个万万级别)',
        root: 'million',
        rootMeaning: '大百万',
      },
      examples: [
        { en: 'The startup raised one billion dollars.', zh: '这家初创企业筹集了十亿美元。' },
      ],
    },
    {
      id: 'w-dozen',
      word: 'dozen',
      phonetic: '/ˈdʌzn/',
      pos: 'n.',
      meaning: '一打（十二个）；十来个',
      roots: {
        root: 'duodecim',
        rootMeaning: '拉丁语 duo(二) + decem(十) = 十二',
      },
      examples: [
        { en: 'We fixed a dozen bugs this morning.', zh: '我们今天上午修复了十几个 bug。' },
      ],
    },
  ],
  quizzes: [
    {
      id: 'q-number-plural',
      title: '数字单位单复数挑战',
      question: '如果要表达「服务器有成千上万个并发连接」，正确的是：',
      options: [
        { text: 'The server has thousand of connections.', isCorrect: false, explanation: '错误：表达概数时 thousand 必须加 s (thousands of)。' },
        { text: 'The server has thousands of connections.', isCorrect: true, explanation: '正确！thousands of 搭配复数名词表达“成千上万”。' },
        { text: 'The server has thousand connections.', isCorrect: false, explanation: '错误：thousand 属于单数量词，前面缺少 a 或数字，后面缺少 of。' },
      ],
    },
  ],
  tables: [
    {
      title: '英汉大数字单位换算矩阵 (Big Numbers Conversion)',
      headers: ['英文表达', '科学记数', '零的个数', '对应中文换算', '千分位表示'],
      rows: [
        ['One Thousand', '10^3', '3 个零', '一千', '1,000'],
        ['Ten Thousand', '10^4', '4 个零', '一万', '10,000'],
        ['One Hundred Thousand', '10^5', '5 个零', '十万', '100,000'],
        ['One Million', '10^6', '6 个零', '一百万', '1,000,000'],
        ['Ten Million', '10^7', '7 个零', '一千万', '10,000,000'],
        ['One Hundred Million', '10^8', '8 个零', '一亿', '100,000,000'],
        ['One Billion', '10^9', '9 个零', '十亿', '1,000,000,000'],
        ['One Trillion', '10^12', '12 个零', '一万亿 (兆)', '1,000,000,000,000'],
      ],
    },
  ],
};
