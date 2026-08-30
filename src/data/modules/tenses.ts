import type { TopicContent } from '../../types';

export const tensesTopic: TopicContent = {
  meta: {
    id: 'tenses',
    title: '核心时态深度全景',
    enTitle: 'Mastering English Tense-Aspect Matrix',
    desc: '正交坐标系（时间轴 × 动作状态）、16大时态全景矩阵、瞬间动词延续性陷阱与 have been to/gone to/in 终极辨析',
    icon: '⏳',
    pillarId: 'syntax',
    badge: '时态坐标系',
  },
  diagrams: [
    {
      id: 'd-tense-matrix',
      title: '时态正交坐标系：时间轴 (Time) × 动作状态 (Aspect)',
      desc: '时态不是死记硬背的规则，而是由 4 种时间点与 4 种动作状态严密笛卡尔积正交而成的坐标系',
      code: `graph LR
    Time["时间轴 (Time)\n过去 (Past) ➔ 现在 (Present) ➔ 将来 (Future)"] --- Matrix["16 种时态正交网格\nTime × Aspect"]
    Aspect["动作状态 (Aspect)\n一般态 (Simple) · 常态/事实\n进行态 (Continuous) · 正在流沙\n完成态 (Perfect) · 影响延续\n完成进行态 (Perfect Continuous) · 持续至今未停"] --- Matrix`,
    },
    {
      id: 'd-tense-timeline-flow',
      title: '三大核心时态在时间轴上的物理投影',
      desc: '对比一般过去时（过去孤立切片）、现在完成时（跨越延伸）与过去完成时（过去的过去）',
      code: `graph LR
    PastPast["过去的过去 (Past Perfect)\nhad done\n(备份在断电前已完成)"] --> Past["过去某点 (Simple Past)\ndid / was\n(昨晚8点停电事件)"]
    Past --> Now["当前时刻 (Present)\nnow / is\n(此刻系统已恢复)"]
    Past -.->|持续跨越至今| Now`,
    },
  ],
  formulas: [
    {
      id: 'f-tense-cartesian',
      title: '时态笛卡尔乘积公式 (Tense = Time × Aspect)',
      badge: '时态底层公式',
      formula: 'Tense (时态) = Time (现在 / 过去 / 将来 / 过去将来) × Aspect (一般 / 进行 / 完成 / 完成进行)',
      desc: '英语严格区分“何时发生（时间）”与“以何种状态呈现（体态）”。只要确定时间点和动作的进行/完成状态，便能推导出精准的动词形态！',
      tokens: [
        { label: 'Time (时间)', role: '横轴', color: 'blue', desc: 'Present (现在) / Past (过去) / Future (将来)' },
        { label: 'Aspect (体态)', role: '纵轴', color: 'emerald', desc: 'Simple (一般) / Continuous (进行) / Perfect (完成)' },
      ],
      example: {
        en: 'I write code (现在常态) / I wrote code (过去已终结) / I have written code (已完成并可用).',
        zh: '我写代码（日常技能）/ 我昨天写了代码（过去事）/ 我已经把代码写完了（成果交付）。',
      },
    },
    {
      id: 'f-non-continuous-trap',
      title: '瞬间动词（非延续动词）与时间段排斥法则',
      badge: '避坑最高频',
      formula: '瞬间动词 (die / buy / join / leave / borrow) 绝不可与【for + 时间段】或【since】在完成时中连用！',
      desc: '瞬间动词在动作发生的一刹那即告终结，不可能持续数天。要表达持续状态，必须将其转换为对应的延续性状态系表结构！',
      tokens: [
        { label: '错误直译', role: '类型冲突', color: 'rose', desc: '*He has died for 3 years (他死了三年了？死不能持续三年)' },
        { label: '正确转换', role: '状态延续', color: 'emerald', desc: 'He has been dead for 3 years (用系表 dead 表达持续状态)' },
      ],
      example: {
        en: 'The server has been offline for three days (不可写 has crashed for 3 days).',
        zh: '服务器已经离线了三天了（用 been offline 表达持续，不用 crash）。',
      },
    },
    {
      id: 'f-been-to-gone-to',
      title: 'have been to vs have gone to vs have been in 终极辨析',
      badge: '场景辨析',
      formula: 'have been to (去过某地，人已返回) VS have gone to (去了某地，人未回来) VS have been in (一直待在某地，持续居住/办公)',
      desc: '技术团队汇报中常用于说明架构师的出差巡检或物理常驻状态。',
      example: {
        en: 'He has gone to the datacenter (他去机房了，人现在不在办公室) vs He has been in Singapore for two years (他已经在新加坡常驻两年了).',
        zh: '他去数据中心了（在路上或机房）vs 他已常驻新加坡两年了。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-past-perfect',
      badge: '时态 1：过去完成时',
      type: 'Past Perfect (had + done)',
      title: '过去完成时：过去的过去时间守卫',
      desc: '主节点断电前，灾备同步已经提前完成，时间序列一目了然。',
      formula: 'S + had completed (过去的过去) + before + [S + occurred (过去发生的事件)]',
      sentence: 'The replica had completed data synchronization before the blackout occurred.',
      translation: '在停电事故发生之前，副本节点就已经完成了数据同步。',
      parts: [
        { text: 'The replica', role: '主句主语', type: 'subject', detail: '副本节点' },
        { text: 'had completed', role: '过去完成时谓语 (had + V-ed)', type: 'verb', detail: '先于停电发生 · 过去的过去' },
        { text: 'data synchronization', role: '主句宾语', type: 'object', detail: '数据同步' },
        { text: '[before the blackout occurred]', role: '时间状语从句', type: 'adverbial', detail: '停电事故发生前 (一般过去时)' },
      ],
      explanation: 'blackout occurred 是一般过去时，而 had completed 发生在停电之前，必须使用过去完成时 had done 建立时间前置保护。',
      itAnalogy: 'assert(syncTimestamp < blackoutTimestamp); 严格时间戳先后校验。',
    },
    {
      id: 'sk-present-perfect-continuous',
      badge: '时态 2：现在完成进行时',
      type: 'Present Perfect Continuous (have been doing)',
      title: '现在完成进行时：从过去开始，一刻未停，仍在继续',
      desc: '强调高负载压力测试一直在持续运行，且此刻依然在发压。',
      formula: 'S + have / has been + running (-ing 持续中) + [for + 时间段]',
      sentence: 'Our automated test suite has been running continuously for forty-eight hours.',
      translation: '我们的自动化测试套件已经连续不间断地运行了整整 48 小时。',
      parts: [
        { text: 'Our automated test suite', role: '主语 (S)', type: 'subject', detail: '测试套件' },
        { text: 'has been running', role: '现在完成进行时谓语', type: 'verb', detail: '从 48 小时前开始，一刻未停，此刻仍在运行' },
        { text: '[continuously]', role: '方式副词状语', type: 'adverbial', detail: '连续不间断地' },
        { text: '[for forty-eight hours]', role: '持续时间状语', type: 'adverbial', detail: '长达 48 小时' },
      ],
      explanation: '如果用 has run，仅表示“跑过了”；用 has been running 则强烈凸显“一直在跑，此刻还没停，还在继续发压”的流沙动态感。',
      itAnalogy: 'while (testActive) { execute(); } 至今仍在执行中的长轮询进程。',
    },
  ],
  compares: [
    {
      id: 'cmp-past-vs-perfect',
      chinese: '我昨天把 Bug 修好了（一般过去时）vs 我已经把 Bug 修好了，现在可以发布了（现在完成时）。',
      wrong: 'I have fixed the bug yesterday. (错误：现在完成时绝不能与过去明确时间点 yesterday 连用)',
      correct: 'I fixed the bug yesterday. / I have fixed the bug (so we can release now).',
      formula: 'yesterday / last week ➔ 只能用一般过去时 (did)；对现在有影响 ➔ 用现在完成时 (have done)',
      reason: '现在完成时的脚踏在“现在”，因此绝对不能与 yesterday, 3 days ago, in 2020 这种纯过去的孤立时间标签放在同一个句子里！',
      itAnalogy: 'Git 提交模型：yesterday 是孤立 commit 历史；have fixed 是当前 HEAD 分支的最新就绪状态。',
    },
    {
      id: 'cmp-join-duration',
      chinese: '我加入这个技术团队已经三年了。',
      wrong: 'I have joined this team for three years.',
      correct: 'I have been in this team for three years. / It has been three years since I joined this team.',
      formula: '瞬间动词 join 不能加 for 3 years，改用 have been in 状态',
      reason: 'join（入职）是一个瞬间动作，办完入职手续的一秒钟内就完成了，不可能“持续加入三年”！表示“在团队里待了三年”必须转为延续状态 have been in/with。',
    },
  ],
  quizzes: [
    {
      id: 'q-tense-past-perfect',
      title: '过去的过去时态判定',
      question: '如果要表达「当架构师介入审查时，开发团队已经将生产补丁部署上去了」，正确的谓语动词是：\n"When the architect stepped in, the team ______ the hotfix to production."',
      options: [
        { text: 'has deployed', isCorrect: false, explanation: '错误：stepped in 是一般过去时，部署动作发生在介入之前，不能用现在完成时 has deployed。' },
        { text: 'had deployed', isCorrect: true, explanation: '正确！部署动作发生在过去的过去（先于 stepped in），必须使用过去完成时 had deployed。' },
        { text: 'deploys', isCorrect: false, explanation: '错误：一般现在时与过去的语境发生时态冲突。' },
      ],
    },
    {
      id: 'q-tense-signal-yesterday',
      title: '时间标签冲突自测',
      question: '请挑出语法完全正确的一句话：',
      options: [
        { text: 'We have updated the Redis configuration yesterday.', isCorrect: false, explanation: '错误：yesterday 是明确的过去时间点，绝不能搭配现在完成时 have updated！' },
        { text: 'We updated the Redis configuration yesterday.', isCorrect: true, explanation: '正确！明确的过去时间 yesterday 只能搭配一般过去时 updated。' },
        { text: 'We update the Redis configuration yesterday.', isCorrect: false, explanation: '错误：yesterday 不能搭配动词原形。' },
      ],
    },
  ],
  tables: [
    {
      title: '英语高频核心时态结构与技术沟通例句全景表 (The Master Tense-Aspect Matrix)',
      headers: ['时态名称', '核心时间与状态含义', '标准谓语动词公式', '时间信号标志词', '技术场景地道例句'],
      rows: [
        ['一般现在时', '描述常态、客观真理、定时执行', '主语 + V-base / V-s', 'always, usually, every day', 'The backup script runs every midnight.'],
        ['一般过去时', '过去某一时刻发生且已彻底终结', '主语 + V-ed / 不规则过去式', 'yesterday, ago, last week, in 2024', 'The primary node crashed yesterday afternoon.'],
        ['一般将来时', '将来未发生动作或客观演变计划', 'will + V-base / be going to', 'tomorrow, next week, soon', 'We will deploy the microservice next Monday.'],
        ['现在进行时', '此刻正在发生，或近期临时阶段状态', 'am / is / are + V-ing', 'now, currently, right now', 'The database is synchronizing tables right now.'],
        ['过去进行时', '过去某一特定瞬间正在进行的动作', 'was / were + V-ing', 'at this time yesterday, when SVO', 'I was debugging the memory leak when you called.'],
        ['现在完成时', '过去发生对现在有影响 / 持续到现在', 'have / has + V-ed (Done)', 'already, yet, since, for, so far', 'We have already patched the critical security flaw.'],
        ['过去完成时', '过去的过去，先于过去某事件发生', 'had + V-ed (Done)', 'before, by the time SVO', 'The script had finished before the network broke.'],
        ['将来完成时', '截止到将来某一时刻前将已圆满完成', 'will have + V-ed (Done)', 'by next month, by 2027', 'We will have completed the cloud migration by Q4.'],
        ['现在完成进行时', '从过去开始，一刻未停，仍在继续中', 'have / has been + V-ing', 'for hours, all morning', 'The stress test has been running for 48 hours.'],
      ],
    },
  ],
};
