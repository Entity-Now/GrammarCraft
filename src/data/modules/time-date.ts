import type { TopicContent } from '../../types';

export const timeDateTopic: TopicContent = {
  meta: {
    id: 'time-date',
    title: '时间和日期',
    enTitle: 'Time and Date',
    desc: '从月份、星期、时间单位到精确时间表达与 at/on/in 时间介词核心法则',
    icon: '⏰',
    pillarId: 'basics',
    badge: '基础必修',
  },
  formulas: [
    {
      id: 'f-time-preposition',
      title: '时间介词三级金字塔法则 (at / on / in)',
      badge: '介词搭配公式',
      formula: 'at [具体时刻/点] + on [某一天/具体日期] + in [较长时段/月份/年份/季节]',
      desc: '时间范围由小到大递增：at 锁定时间精准点，on 锁定某一天平面，in 锁定宽广时间容器。',
      tokens: [
        { label: 'at', role: '时间点 (Point)', color: 'emerald', desc: '如 at 5:00 PM, at noon, at midnight' },
        { label: 'on', role: '特定某一天 (Day)', color: 'blue', desc: '如 on Monday, on July 4th, on my birthday' },
        { label: 'in', role: '大时段容器 (Period)', color: 'purple', desc: '如 in 2026, in July, in the morning, in winter' },
      ],
      example: {
        en: 'The release starts at 9:00 AM on Monday in October.',
        zh: '发布仪式将在十月的某个周一上午九点整开始。',
      },
    },
    {
      id: 'f-tell-time',
      title: '时间逆读公式 (past 与 to)',
      badge: '钟表表达法',
      formula: '[分钟] + past/to + [小时]',
      desc: '半小时以内用 past（过了几分），半小时后用 to（差几分到几点）。15分用 a quarter，30分用 half。',
      example: {
        en: "It is a quarter to ten (9:45).",
        zh: "现在是差一刻钟到十点（9点45分）。",
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-time-schedule',
      badge: '时间日程解构',
      type: 'SVO + Time Modifiers',
      title: '系统维护时间表达：主干 + 嵌套时间状语',
      desc: '先表达核心事件动作（The system updates），再挂载精确时间点与日期。',
      formula: 'S (主语) + V (谓语) + [at 具体时刻] + [on 星期/日期]',
      sentence: 'The system updates at midnight on Sunday.',
      translation: '系统在周日午夜进行更新。',
      parts: [
        { text: 'The system', role: '主语 (S)', type: 'subject', detail: '系统主体' },
        { text: 'updates', role: '谓语动词 (V)', type: 'verb', detail: '执行更新动作 · 单三一般现在时' },
        { text: '[at midnight]', role: '精确时刻状语', type: 'adverbial', detail: '在午夜零点 · at 精准点' },
        { text: '[on Sunday]', role: '日期星期状语', type: 'adverbial', detail: '在周日这天 · on 单个星期日' },
      ],
      explanation: '英文时间状语严格遵守“从小到大”的顺序：先说具体时刻 at midnight，再说具体周日 on Sunday。',
      itAnalogy: '类比定时任务配置：cron.schedule({ time: "00:00", dayOfWeek: "Sunday" })。',
    },
  ],
  words: [
    {
      id: 'w-january',
      word: 'January',
      phonetic: '/ˈdʒænjuəri/',
      pos: 'n.',
      meaning: '一月 (缩写 Jan.)',
      roots: {
        root: 'Janus',
        rootMeaning: '古罗马门神（双面神，象征告别过去与迎向未来）',
        suffix: '-ary',
        suffixMeaning: '名词后缀，表示……的场所或归属',
      },
      examples: [
        { en: 'The new fiscal year starts in January.', zh: '新财年始于一月。' },
      ],
      mnemonic: '双面门神 Janus 回望旧年并推开新年大门。',
    },
    {
      id: 'w-fortnight',
      word: 'fortnight',
      phonetic: '/ˈfɔːtnaɪt/',
      pos: 'n.',
      meaning: '两周，十四天',
      roots: {
        prefix: 'fourteen',
        prefixMeaning: '十四',
        root: 'nights',
        rootMeaning: '夜 (古英语 fourteen nights 演变)',
      },
      examples: [
        { en: 'We run sprint planning once every fortnight.', zh: '我们每两周组织一次敏捷迭代规划。' },
      ],
      mnemonic: 'fourteen nights (十四夜) 缩写合体为 fortnight。',
    },
    {
      id: 'w-quarter',
      word: 'quarter',
      phonetic: '/ˈkwɔːtə(r)/',
      pos: 'n.',
      meaning: '四分之一；一刻钟（15分钟）；季度 (Q1/Q2/Q3/Q4)',
      roots: {
        root: 'quart',
        rootMeaning: '四 (如 quartet 四重奏, quart 夸脱)',
      },
      examples: [
        { en: 'Q3 revenue exceeded our forecast.', zh: '第三季度的营收超出了我们的预期。' },
      ],
    },
  ],
  expressions: [
    {
      id: 'exp-round-the-clock',
      phrase: 'round the clock',
      literal: '围着时钟转圈',
      actual: '昼夜不停地；24小时全天候地',
      scenario: '线上事故紧急抢修、不间断服务支撑',
      breakdown: 'round (绕着) + the clock (时钟的一圈24小时)',
      examples: [
        { en: 'The DevOps team worked round the clock to restore the database.', zh: '运维团队夜以继日地工作以恢复数据库。' },
      ],
    },
  ],
  builders: [
    {
      id: 'b-time-order',
      title: '时间状语语序拼装',
      instruction: '组装句子：「会议将在周一上午十点举行」',
      words: ['The meeting', 'will start', 'at 10:00 AM', 'on Monday.'],
      targetSentence: 'The meeting will start at 10:00 AM on Monday.',
      explanation: '英文时间语序由小到大：时刻 at 10:00 AM 在前，日期星期 on Monday 在后。',
    },
  ],
  quizzes: [
    {
      id: 'q-time-prep',
      title: '时间介词辨析挑战',
      question: '表达「项目将在七月份上线」，正确的介词是：',
      options: [
        { text: 'The project will launch at July.', isCorrect: false, explanation: '错误：July 是月份（大时间跨度），不能用点状介词 at。' },
        { text: 'The project will launch on July.', isCorrect: false, explanation: '错误：on 仅用于具体的某一天（如 on July 15th）。' },
        { text: 'The project will launch in July.', isCorrect: true, explanation: '正确！月份属于宽广的时间容器，必须搭配介词 in。' },
      ],
    },
  ],
  tables: [
    {
      title: '12 个月份速查表 (Months of the Year)',
      headers: ['月份英文', '缩写', '中文', '助记与渊源'],
      rows: [
        ['January', 'Jan.', '一月', '罗马门神 Janus'],
        ['February', 'Feb.', '二月', '净罪节 Februa'],
        ['March', 'Mar.', '三月', '战神 Mars'],
        ['April', 'Apr.', '四月', '大地开花 Aperire'],
        ['May', 'May', '五月', '女神 Maia'],
        ['June', 'Jun.', '六月', '天后 Juno'],
        ['July', 'Jul.', '七月', '凯撒大帝 Julius Caesar'],
        ['August', 'Aug.', '八月', '屋大维皇帝 Augustus'],
        ['September', 'Sep.', '九月', '古罗马七月 Septem'],
        ['October', 'Oct.', '十月', '古罗马八月 Octo (如 octopus 八爪鱼)'],
        ['November', 'Nov.', '十一月', '古罗马九月 Novem'],
        ['December', 'Dec.', '十二月', '古罗马十月 Decem (如 decimal 十进制)'],
      ],
    },
    {
      title: '星期速查表 (Days of the Week)',
      headers: ['星期英文', '缩写', '中文', '来源文化'],
      rows: [
        ['Monday', 'Mon.', '周一', 'Moon’s day (月亮之日)'],
        ['Tuesday', 'Tue.', '周二', 'Tiw’s day (战神之日)'],
        ['Wednesday', 'Wed.', '周三', 'Woden’s day (主神奥丁之日)'],
        ['Thursday', 'Thu.', '周四', 'Thor’s day (雷神托尔之日)'],
        ['Friday', 'Fri.', '周五', 'Frigg’s day (爱神芙蕾雅之日)'],
        ['Saturday', 'Sat.', '周六', 'Saturn’s day (土星农神之日)'],
        ['Sunday', 'Sun.', '周日', 'Sun’s day (太阳之日)'],
      ],
    },
  ],
};
