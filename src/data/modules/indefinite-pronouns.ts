import type { TopicContent } from '../../types';

export const indefinitePronounsTopic: TopicContent = {
  meta: {
    id: 'indefinite-pronouns',
    title: '不定代词深度全景',
    enTitle: 'Indefinite Pronouns & Post-Modifiers',
    desc: '模糊指代：4×4复合不定代词矩阵、单数谓语一致性铁律、形容词后置修饰与两者/多者数量辨析',
    icon: '🔮',
    pillarId: 'verbs',
    badge: '模糊指代',
  },
  diagrams: [
    {
      id: 'd-indefinite-4x4-grid',
      title: '4×4 复合不定代词矩阵图谱 (The 4×4 Indefinite Matrix)',
      desc: '由 4 大前缀修饰符 (some / any / no / every) 与 4 大实体后缀 (-thing / -body / -one / -where) 严密交织构成的 16 个核心代词',
      code: `graph LR
    Prefix["前缀特征\nsome- (肯定/期待肯定)\nany- (否定/疑问/任意)\nno- (彻底否定/空值 null)\nevery- (全体每一)"] --- Suffix["实体后缀\n-thing (客体事物)\n-body / -one (人物主体)\n-where (空间位置)"]
    Suffix --> P16["16 个复合代词全家桶\n- 语法特征：全员强制单数谓语！\n- 形容词强制后置修饰！"]`,
    },
    {
      id: 'd-quantity-spectrum',
      title: '两者 (Two) vs 三者及以上 (Three+) 数量不定代词对应图谱',
      desc: '英语语法对“两者”与“多者”拥有极其严苛的专用代词分流体系',
      code: `graph TD
    Scope["数量范畴判定"] --> Two["两者范畴 (Two)\nboth (两者都: 肯定复数)\neither (两者中任意一个: 单数)\nneither (两者都不: 否定单数)"]
    Scope --> Multi["三者及以上范畴 (3+)\nall (全员: 肯定)\nany (任何一个: 单数)\nnone (全都不: 否定)"]`,
    },
  ],
  formulas: [
    {
      id: 'f-indefinite-singular-rule',
      title: '复合不定代词单数谓语一致性铁律 (Strict Singular Agreement)',
      badge: '语法基石',
      formula: 'Everyone / Somebody / Nothing / Anyone + 【单三谓语动词 (is / has / V-s)】 (绝对禁止使用复数 are / have！)',
      desc: '即使 everyone / everybody 在中文里翻译为“所有人”，在英语强类型语法中，它依然被视作一个集合单体，谓语动词必须使用单数三单形态！',
      example: {
        en: 'Everyone is ready for the deployment (is 必须用单数，严禁写 are ready).',
        zh: '每个人都为这次部署做好了准备。',
      },
    },
    {
      id: 'f-adjective-postposition',
      title: '形容词后置修饰黄金铁律 (Post-positive Adjectives)',
      badge: '语序反转',
      formula: 'something / anything / nothing / someone + 【形容词 (Adjective)】 (绝对禁止将形容词放在前面！)',
      desc: '普通名词形容词在前（important bug）；复合不定代词形容词必须**后置**（something important）！这是因为不定代词的构词法本身已经固化，外部形容词只能作为右倾挂载修饰。',
      example: {
        en: 'We found something abnormal in the server logs (abnormal 后置于 something).',
        zh: '我们在服务器日志中发现了异常情况。',
      },
    },
    {
      id: 'f-others-vs-the-others',
      title: 'other / others / the others / another 终极辨别式',
      badge: '高阶辨析',
      formula: 'another (泛指另一个，单数) | the other (特指两者中的另一个) | others (泛指其他人/物，复数) | the others (特指剩余的所有全员)',
      desc: '带 the 代表范围有界限定；不带 the 代表范围开放泛指；-s 代表复数。',
      example: {
        en: 'One node failed, but the other is working (共两个节点，特指剩下的那一个 the other).',
        zh: '其中一个节点故障了，但另一个节点工作正常。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-indefinite-post-adj',
      badge: '后置修饰解构',
      type: 'Indefinite + Post-Adjective',
      title: '形容词后置：something abnormal',
      desc: 'abnormal 紧跟在 something 之后充当后置定语。',
      formula: 'S + noticed + [something abnormal 宾语核心 (代词+后置形容词)] + [in the logs]',
      sentence: 'The security monitoring system noticed something abnormal in the traffic.',
      translation: '安全监控系统在流量中检测到了某些异常情况。',
      parts: [
        { text: 'The security monitoring system', role: '主语 (S)', type: 'subject', detail: '监控系统' },
        { text: 'noticed', role: '谓语及物动词 (V)', type: 'verb', detail: '察觉到' },
        { text: 'something abnormal', role: '直接宾语 (O)', type: 'object', detail: '某些异常情况 · abnormal 强制后置' },
        { text: '[in the traffic]', role: '地点状语', type: 'adverbial', detail: '在流量中' },
      ],
      explanation: '绝不能说 *abnormal something*！所有以 -thing, -body, -one 结尾的代词，修饰它们的形容词必须推到后方。',
      itAnalogy: 'traffic.filter(packet => packet.isAbnormal());',
    },
    {
      id: 'sk-indefinite-everyone-singular',
      badge: '单数一致性',
      type: 'Everyone + Singular Verb',
      title: 'Everyone 作为主语：单三谓语一致',
      desc: 'understands 必须添加三单 -s。',
      formula: 'Everyone (主语·单三) + understands (谓语·三单加s) + the roll-out plan (宾语)',
      sentence: 'Everyone on the development team understands the emergency roll-out plan.',
      translation: '研发团队中的每一个人都完全理解这次紧急上线方案。',
      parts: [
        { text: 'Everyone', role: '复合不定代词主语', type: 'subject', detail: '每一个人 · 语法视作单三' },
        { text: '[on the development team]', role: '介词短语后置定语', type: 'adverbial', detail: '研发团队中的' },
        { text: 'understands', role: '单三谓语动词 (V-s)', type: 'verb', detail: '理解 · 加 -s' },
        { text: 'the roll-out plan', role: '宾语 (O)', type: 'object', detail: '上线方案' },
      ],
      explanation: '虽然研发团队有很多人，但 Everyone 本身是单数概念，谓语动词绝不能写成 understand。',
      itAnalogy: 'assert(team.members.every(m => m.understandsPlan === true));',
    },
  ],
  compares: [
    {
      id: 'cmp-important-something',
      chinese: '我们在日志中发现了重要的情况。',
      wrong: 'We found important something in the logs.',
      correct: 'We found something important in the logs.',
      formula: 'something + 形容词 (形容词必须后置)',
      reason: '复合不定代词的修饰语必须后置，写成 important something 属于语序错位严重违背语法规则！',
    },
    {
      id: 'cmp-everyone-know-error',
      chinese: '大家都知道这个接口已经废弃了。',
      wrong: 'Everyone know that this API is deprecated.',
      correct: 'Everyone knows that this API is deprecated.',
      formula: 'Everyone + 单三动词 knows (必须加 s)',
      reason: 'Everyone 作为主语时必须当做第三人称单数对待，动词必须加 -s，不可使用原形 know。',
    },
  ],
  quizzes: [
    {
      id: 'q-indefinite-verb-agreement',
      title: '单三谓语一致性自测',
      question: '如果要表达「会议室里的所有人都同意这个数据库架构设计方案」，正确的谓语动词是：\n"Everybody in the meeting ______ with this database architecture."',
      options: [
        { text: 'agrees', isCorrect: true, explanation: '正确！Everybody 是单三复合不定代词，谓语动词必须加 -s（agrees）。' },
        { text: 'agree', isCorrect: false, explanation: '错误：使用原形 agree 违反了主谓一致原则。' },
        { text: 'are agreeing', isCorrect: false, explanation: '错误：不可搭配复数系动词 are。' },
      ],
    },
    {
      id: 'q-indefinite-post-order',
      title: '后置形容词语序挑战',
      question: '在日常故障排查中，如果要表达「服务器没有出现任何严重问题」，地道无误的搭配是：',
      options: [
        { text: 'The server has nothing serious.', isCorrect: true, explanation: '正确！serious 作为形容词后置修饰 nothing。' },
        { text: 'The server has serious nothing.', isCorrect: false, explanation: '错误：serious 前置导致严重语序语法错误。' },
        { text: 'The server has no anything serious.', isCorrect: false, explanation: '错误：no anything 双重否定修饰冲突。' },
      ],
    },
  ],
  tables: [
    {
      title: '4×4 复合不定代词完整形态分类对照矩阵 (The Complete 4×4 Indefinite Matrix)',
      headers: ['后缀类别', 'some- (肯定/肯定期待)', 'any- (否定/疑问/任意)', 'no- (彻底无/否定)', 'every- (全员每一)'],
      rows: [
        ['-thing (事物客体)', 'something (某些事物)', 'anything (任何事物)', 'nothing (无事、虚无)', 'everything (万物、所有事)'],
        ['-body (人物主体)', 'somebody (某人)', 'anybody (任何人)', 'nobody (无人)', 'everybody (所有人)'],
        ['-one (个体主体)', 'someone (某个人)', 'anyone (任何一个人)', 'no one (没有一个人)', 'everyone (每个人)'],
        ['-where (空间位置)', 'somewhere (某处)', 'anywhere (任何地方)', 'nowhere (无处、哪里都不)', 'everywhere (到处、随处)'],
      ],
    },
  ],
};
