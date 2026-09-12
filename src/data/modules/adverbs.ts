import type { TopicContent } from '../../types';

export const adverbsTopic: TopicContent = {
  meta: {
    id: 'adverbs',
    title: '副词规律深度全景',
    enTitle: 'Adverb Mechanics, Placement & Inversion',
    desc: '行为修饰符：频度副词（Be后实前助动中）、方式副词句尾排布、hard/hardly形近陷阱与否定倒装高阶句式',
    icon: '⚡',
    pillarId: 'verbs',
    badge: '修饰法则',
  },
  diagrams: [
    {
      id: 'd-adverb-placement-order',
      title: '频度副词摆放黄金位置流水线 (Be后实前助动中)',
      desc: '频度副词（always, usually, often, rarely, never）在句子中的精准插槽位置法则',
      code: `graph TD
    Slot["🧭 <b>频度副词三大插槽 (Placement Rules)</b><br/>口诀：Be后 · 实前 · 助动中"]
    Slot --> S1["1️⃣ <b>Be 动词之后</b><br/>be + ADVERB"]
    Slot --> S2["2️⃣ <b>实义动词之前</b><br/>ADVERB + verb"]
    Slot --> S3["3️⃣ <b>助动词与实义动词之间</b><br/>aux + ADVERB + verb"]`,
      details: [
        {
          label: '插槽 1: Be 动词之后 (be + adverb)',
          enPhrase: 'The node is ALWAYS active / We are OFTEN on call.',
          zhMeaning: '紧贴 be 动词后方，如 The primary cluster is usually online.',
          tag: '位置法则',
        },
        {
          label: '插槽 2: 实义动词之前 (adverb + verb)',
          enPhrase: 'Our team REGULARLY reviews pull requests.',
          zhMeaning: '紧贴实义动作前方，如 He rarely commits code on weekends.',
          tag: '位置法则',
        },
        {
          label: '插槽 3: 助动词之间 (aux + adverb + verb)',
          enPhrase: 'We have NEVER encountered this deadlock before.',
          zhMeaning: '夹在助动词 (have/will/can) 与主体动作之间，如 I can hardly hear you.',
          tag: '位置法则',
        },
      ],
    },
    {
      id: 'd-hard-vs-hardly',
      title: '极度危险形近副词语义反转谱 (hard vs hardly / late vs lately)',
      desc: '加了 -ly 导致语义发生 180 度大反转的典型语法陷阱',
      code: `graph TD
    subgraph Pair1["努力 (hard) vs 几乎不 (hardly)"]
        H1["💪 <b>hard</b><br/>努力/高强度 (肯定)"]
        H2["🚫 <b>hardly</b><br/>几乎完全不 (绝对否定)"]
    end
    subgraph Pair2["迟到 (late) vs 最近 (lately)"]
        L1["⏰ <b>late</b><br/>时间延误/迟到"]
        L2["📅 <b>lately</b><br/>近来/最近 (recently)"]
    end
    subgraph Pair3["空间高 (high) vs 抽象高 (highly)"]
        HI1["☁️ <b>high</b><br/>物理空间高度"]
        HI2["⭐ <b>highly</b><br/>高度推崇/极度抽象"]
    end`,
      details: [
        {
          label: 'hard vs hardly',
          enPhrase: 'We worked hard (我们努力工作) VS We hardly worked (我们几乎没工作！)',
          zhMeaning: 'hardly 本身就是否定词，句中无需再加 not，主谓倒装时提句首。',
          tag: '反转陷阱',
        },
        {
          label: 'late vs lately',
          enPhrase: 'The build finished late (构建晚了) VS Have you deployed lately? (最近有发布吗？)',
          zhMeaning: 'late 指时间迟到；lately 指“最近时间段”，常配合现在完成时。',
          tag: '反转陷阱',
        },
        {
          label: 'high vs highly',
          enPhrase: 'The drone flew high (飞得高) VS The architecture is highly scalable (高可扩展)',
          zhMeaning: 'high 指物理高度；highly 指抽象程度极高、备受赞誉。',
          tag: '反转陷阱',
        },
      ],
    },
  ],
  formulas: [
    {
      id: 'f-be-post-verb-pre',
      title: '频度副词摆放口诀公式 (Be后实前助动中)',
      badge: '位置公式',
      formula: 'Be 动词之后 (is always) | 实义动词之前 (often writes) | 助动词与主动词之间 (has never failed)',
      desc: '频度副词不能随意乱放。牢记“Be后实前助动中”口诀，保证每一个副词精准落位！',
      example: {
        en: 'The cluster is always healthy (Be后) / The script often fails (实前) / We have never seen this (助动中).',
        zh: '集群总是在线 / 脚本经常失败 / 我们从未见过这种情况。',
      },
    },
    {
      id: 'f-negative-adverb-inversion',
      title: '否定副词置首强力倒装公式 (Negative Inversion)',
      badge: '高阶句式',
      formula: 'Never / Rarely / Seldom / Hardly + 【助动词 (have / did / does)】 + 主语 + 动词原形 + 宾语',
      desc: '在技术报告或高规格技术演讲中，将否定副词（Never, Rarely, Seldom）提到句首用于极其强烈的强调语气，此时主句必须借助助动词发生部分倒装！',
      example: {
        en: 'Never have I seen such an elegant software architecture.',
        zh: '我此生从未见过如此优雅的软件架构！',
      },
    },
    {
      id: 'f-manner-no-split',
      title: '方式副词绝不切断动宾结构铁律',
      badge: '语序保护',
      formula: 'S + V + O + 【方式副词 (smoothly / safely / carefully)】 (绝对禁止插入在 V 与 O 中间！)',
      desc: '动词与直接宾语构成不可分割的核心单元。中文可以说“小心地部署代码”，英文必须是 deploy the code carefully，严禁写成 *deploy carefully the code！',
      example: {
        en: 'The engineer deployed the hotfix carefully (carefully 置于句尾，不可切断 deployed 和 hotfix).',
        zh: '工程师小心翼翼地部署了热修复补丁。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-adverb-negative-inversion',
      badge: '高阶倒装解构',
      type: 'Negative Inversion (Never have I...)',
      title: '否定副词置首：强制部分倒装',
      desc: 'Never 提首，助动词 have 倒装到主语 we 前面。',
      formula: 'Never (否定副词提首) + have (助动词提前) + we (主语) + encountered (动词完成态) + [such a crash]',
      sentence: 'Never have we encountered such a catastrophic database corruption.',
      translation: '我们以往从未遇到过如此灾难性的数据库损坏事故。',
      parts: [
        { text: 'Never', role: '否定副词置首', type: 'adverbial', detail: '绝不、从未 · 触发倒装' },
        { text: 'have', role: '助动词提至主语前', type: 'verb', detail: '部分倒装标志' },
        { text: 'we', role: '主语 (S)', type: 'subject', detail: '团队主体' },
        { text: 'encountered', role: '过去分词实义动词', type: 'verb', detail: '遭遇' },
        { text: 'such a catastrophic corruption', role: '直接宾语 (O)', type: 'object', detail: '严重损坏灾难' },
      ],
      explanation: '原本语序是 We have never encountered...，把 Never 放到最前面后，助动词 have 必须跳到主语 we 前面形成倒装。',
      itAnalogy: 'logger.critical("Unprecedented incident level: 0"); 极具震撼力的技术警报。',
    },
  ],
  compares: [
    {
      id: 'cmp-hard-vs-hardly-bug',
      chinese: '我们团队上周工作非常努力。（致命 -ly 词义反转）',
      wrong: 'Our team worked hardly last week.',
      correct: 'Our team worked hard last week.',
      formula: 'work hard (努力工作) vs hardly work (几乎完全不工作)',
      reason: 'hard 本身既是形容词也是副词，work hard 表达努力工作；hardly 则是彻底的否定词，意思为“几乎不”！写成 worked hardly 相当于向老板汇报“我们上周几乎没干活”！',
      itAnalogy: 'hardly = 0.001 (接近 0 的否定浮点数)；hard = HighPriority (高负载)。',
    },
    {
      id: 'cmp-manner-placement',
      chinese: '运维团队平稳地迁移了数据库。',
      wrong: 'The team migrated smoothly the database.',
      correct: 'The team migrated the database smoothly.',
      formula: 'S + V + O + smoothly (副词放在宾语后，不可切断动宾)',
      reason: '及物动词 migrated 和宾语 the database 属于强类型紧密绑定结构，副词不能横插在中间！',
    },
  ],
  quizzes: [
    {
      id: 'q-adverb-hardly-quiz',
      title: 'hardly 否定陷阱自测',
      question: '如果要表达「由于网络拥塞严重，客户端几乎无法连接到服务器」，正确的副词是：\n"Due to congestion, the client could ______ connect to the backend."',
      options: [
        { text: 'hardly', isCorrect: true, explanation: '正确！hardly 表示“几乎不”，could hardly connect 表达“几乎无法连接”。' },
        { text: 'hard', isCorrect: false, explanation: '错误：could hard connect 语义不通，hard 表努力或猛烈。' },
        { text: 'not hardly', isCorrect: false, explanation: '错误：not hardly 构成双重否定语法错误。' },
      ],
    },
    {
      id: 'q-adverb-frequency-placement',
      title: '频度副词位置判定',
      question: '请根据「Be后实前助动中」口诀，选出语序完全正确的一句话：',
      options: [
        { text: 'We have never experienced a cluster split-brain issue.', isCorrect: true, explanation: '正确！never 位于助动词 have 和实义动词 experienced 之间（助动中）。' },
        { text: 'We never have experienced a cluster split-brain issue.', isCorrect: false, explanation: '错误：never 应当放在 have 后面。' },
        { text: 'We have experienced never a cluster split-brain issue.', isCorrect: false, explanation: '错误：never 不能横插在动宾之间。' },
      ],
    },
  ],
  tables: [
    {
      title: '英语高频副词四大功能分类与摆放规则全景对照表 (The Adverb Placement Master Table)',
      headers: ['副词分类', '典型常用词', '功能与修饰对象', '标准摆放位置规则', '技术场景标准例句'],
      rows: [
        ['频度副词 (Frequency)', 'always, usually, often, rarely, never', '修饰动作发生的频度与常态规律', 'Be动词后 / 实义动词前 / 助动词中', 'The cron is always listening on port 80.'],
        ['方式副词 (Manner)', 'smoothly, carefully, quickly, safely', '描述动作具体是如何被执行的', '必须置于宾语后（SVO + Adv）', 'We deployed the microservice smoothly.'],
        ['程度副词 (Degree)', 'extremely, highly, completely, slightly', '修饰形容词或副词的强度分贝', '紧贴在被修饰的形容词/副词正前方', 'Our backend is highly available.'],
        ['评注副词 (Sentence)', 'obviously, fortunately, surprisingly', '对整句话的事实做出评注态度', '句首用逗号隔开，统摄全句', 'Obviously, the firewall rejected the packet.'],
        ['否定副词 (Negative)', 'never, rarely, seldom, hardly', '否定整个事件；置首触发强力倒装', '句首 + 助动词 + 主语 + 动词原形', 'Seldom does the system fail under pressure.'],
      ],
    },
  ],
};
