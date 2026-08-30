import type { TopicContent } from '../../types';

export const participlesTopic: TopicContent = {
  meta: {
    id: 'participles',
    title: '现在分词与过去分词',
    enTitle: 'Present & Past Participles',
    desc: '非谓语双子星：主动进行(doing) vs 被动完成(done)、四大充当成分（定/表/状/补）、-ing/-ed心理动词与悬垂分词大陷阱',
    icon: '🌱',
    pillarId: 'verbs',
    badge: '非谓语核心',
  },
  diagrams: [
    {
      id: 'd-participle-dual-nature',
      title: '分词双子星主动与被动状态对比图谱 (Doing vs Done)',
      desc: '分词是由动词派生出的“形容词与副词”，核心区别在于主动进行与被动完成的语义对立',
      code: `graph LR
    Verb["动词原形 (Verb Base)"] --> Doing["现在分词 (Present Participle: -ing)\n1. 语义特征：主动发出 (Active) + 正在进行 (Ongoing)\n2. 物理隐喻：正在飘落 the falling leaves / 发展中 developing"]
    Verb --> Done["过去分词 (Past Participle: -ed / Done)\n1. 语义特征：被动承受 (Passive) + 已经完成 (Completed)\n2. 物理隐喻：已落地的 the fallen leaves / 发达的 developed"]`,
    },
    {
      id: 'd-participle-four-roles',
      title: '分词在句子中的四大语法职能图谱',
      desc: '分词虽然不能单独作主谓谓语，但在句式中拥有四项极为强悍的语法修饰功能',
      code: `graph TD
    Roles["分词四大语法职能 (Four Roles)"] --> R1["1. 作定语 (修饰名词)\n前置: a running thread\n后置: the patch deployed yesterday"]
    Roles --> R2["2. 作表语 (说明状态 / 心理动词)\n物令人: interesting / confusing\n人感受: interested / confused"]
    Roles --> R3["3. 作状语 (伴随/时间/原因)\nThe server crashed, causing downtime.\nSeeing the error, I checked the logs."]
    Roles --> R4["4. 作宾补 (说明宾语状态)\nI saw him coding.\nI found the port blocked."]`,
    },
  ],
  formulas: [
    {
      id: 'f-psychological-ing-vs-ed',
      title: '心理情绪动词 -ing vs -ed 判定黄金铁律',
      badge: '必考避坑',
      formula: '事物令人产生某种感觉 ➔ 【-ing 形容词】 (confusing / interesting) VS 人或实体被动感受到某种情绪 ➔ 【-ed 形容词】 (confused / interested)',
      desc: '中文常混淆“令人困惑的”与“感到困惑的”。修饰代码、架构或文档时用 -ing；修饰工程师自身心理体验时用 -ed！',
      tokens: [
        { label: '-ing 形态', role: '令事物具有该属性', color: 'emerald', desc: 'The error message is confusing (令人困惑的报错)' },
        { label: '-ed 形态', role: '人被动产生该感受', color: 'purple', desc: 'I am confused by the error (我感到困惑)' },
      ],
      example: {
        en: 'The legacy codebase is exhausting (代码令人精疲力竭) vs I am exhausted (我感到筋疲力尽).',
        zh: '遗留代码令人极其疲惫 vs 我感到精疲力尽。',
      },
    },
    {
      id: 'f-dangling-participle-bug',
      title: '悬垂分词致命语法 Bug 防护原则 (Dangling Participle)',
      badge: '语法 Bug 拦截',
      formula: '句首分词状语 [Doing / Done ...] 的【逻辑主语】，必须与【主句的主语】在语义上完全一致！',
      desc: '若分词动作由人发出，主句主语却写成了电脑或服务器，就会发生逻辑错位的“悬垂分词”编译错误！',
      example: {
        en: 'Walking down the hall, the server crashed ❌ (服务器在走廊散步？) ➔ Walking down the hall, I heard the server crash ✅',
        zh: '走在走廊上时，我听到了服务器崩溃的警报。',
      },
    },
    {
      id: 'f-absolute-construction',
      title: '独立主格结构公式 (Absolute Construction)',
      badge: '高阶句式',
      formula: '独立逻辑名词 + 分词 (doing / done) , [主句主谓宾]',
      desc: '当分词动作的发起者与主句主语不一致时，在分词前保留独立的名词主体，构成独立主格结构，用于高信息密度的前置条件假设。',
      example: {
        en: 'Time permitting, we will refactor the frontend architecture next sprint.',
        zh: '如果时间允许的话，我们将在下个迭代重构前端架构。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-participle-accompanying',
      badge: '语法职能：伴随状语',
      type: 'Accompanying Participle',
      title: '现在分词作结果伴随状语：导致了故障',
      desc: 'causing severe downtime 伴随主句动作发生。',
      formula: 'S + V + O , [causing... 现在分词伴随结果状语]',
      sentence: 'The primary gateway crashed unexpectedly, causing forty minutes of network downtime.',
      translation: '主网关意外崩溃，导致了长达 40 分钟的网络瘫痪。',
      parts: [
        { text: 'The primary gateway', role: '主语 (S)', type: 'subject', detail: '主网关' },
        { text: 'crashed', role: '不及物动词谓语', type: 'verb', detail: '崩溃' },
        { text: '[unexpectedly]', role: '方式副词', type: 'adverbial', detail: '出乎意料地' },
        { text: '[, causing forty minutes of downtime]', role: '现在分词结果伴随状语', type: 'adverbial', detail: '主动带来级联严重后果' },
      ],
      explanation: 'causing 的逻辑主语是主句这整起事故或主网关，现在分词表主动自然伴随结果。',
      itAnalogy: 'gateway.onCrash().then(triggerDowntime);',
    },
    {
      id: 'sk-participle-passive-post',
      badge: '语法职能：后置定语',
      type: 'Past Participle Attributive',
      title: '过去分词作后置定语：被部署的镜像',
      desc: 'deployed to production 紧贴在 container image 之后充当被动后置定语。',
      formula: 'S (The image + [deployed to production 过去分词定语]) + contains (谓语) + a vulnerability',
      sentence: 'The container image deployed to production yesterday contains a critical vulnerability.',
      translation: '昨天被部署到生产环境的容器镜像包含一个严重安全漏洞。',
      parts: [
        { text: 'The container image', role: '核心中心词 (Head)', type: 'subject', detail: '容器镜像' },
        { text: '[deployed to production yesterday]', role: '过去分词短语后置定语', type: 'adverbial', detail: '被动被部署 · deployed' },
        { text: 'contains', role: '主句及物谓语动词 (V-s)', type: 'verb', detail: '包含' },
        { text: 'a critical vulnerability', role: '主句宾语 (O)', type: 'object', detail: '严重漏洞' },
      ],
      explanation: 'deployed 是过去分词，等同于 which was deployed，省略了 which was，直接紧凑地充当后置修饰。',
      itAnalogy: 'images.filter(img => img.isDeployed).find(img => img.hasBug);',
    },
  ],
  compares: [
    {
      id: 'cmp-confusing-vs-confused',
      chinese: '这个日志报错信息让我感到很困惑。',
      wrong: 'This log error message is very confused.',
      correct: 'This log error message is very confusing. / I am very confused by this log error.',
      formula: '事物令人困惑用 confusing；人感到困惑用 confused',
      reason: 'log error message 是没有生命的客观事物，它本身不可能“产生困惑的心情”，只能“给人类带来困惑”，因此必须使用 -ing 形式 confusing！',
      itAnalogy: 'TypeMismatch: LogMessage cannot implement HumanEmotionListener.',
    },
    {
      id: 'cmp-dangling-participle',
      chinese: '经过仔细审查后，代码被批准合并了。（警惕悬垂分词）',
      wrong: 'Reviewing carefully, the pull request was merged. (错误：PR在审查代码？)',
      correct: 'Reviewing carefully, the lead approved the pull request. / After careful review, the pull request was merged.',
      formula: '句首分词主语必须等于主句主语',
      reason: 'Reviewing carefully 的动作发出者必定是人（如 the lead），如果主句写成 the pull request was merged，语法上就变成了“PR 自己在仔细审查”，逻辑严重崩塌！',
    },
  ],
  quizzes: [
    {
      id: 'q-participle-emotion-quiz',
      title: '心理动词 -ing vs -ed 快速诊断',
      question: '如果要表达「架构师对这次压力测试取得的性能结果感到非常满意」，正确的词是：\n"The architect was completely ______ with the stress test results."',
      options: [
        { text: 'satisfied', isCorrect: true, explanation: '正确！人（The architect）被动感受到满意情绪，必须使用 -ed 结尾的 satisfied。' },
        { text: 'satisfying', isCorrect: false, explanation: '错误：satisfying 表示“令人满意的”，通常用于修饰事物（如 a satisfying result）。' },
        { text: 'satisfy', isCorrect: false, explanation: '错误：was 后不可直接跟动词原形 satisfy。' },
      ],
    },
    {
      id: 'q-participle-role-quiz',
      title: '分词主被动定语辨析',
      question: '请挑出表达「正在后台运行的进程」最地道的英文搭配：',
      options: [
        { text: 'the process running in the background', isCorrect: true, explanation: '正确！process 主动在后台执行，使用现在分词 running 充当后置定语。' },
        { text: 'the process runned in the background', isCorrect: false, explanation: '错误：run 的过去分词是 run，且此处应为主动进行 running。' },
        { text: 'the running in background process', isCorrect: false, explanation: '错误：带介词短语的长定语必须后置，不能硬塞在前面。' },
      ],
    },
  ],
  tables: [
    {
      title: '高频心理情绪动词 -ing (令人……) vs -ed (感到……) 终极对照速查表',
      headers: ['动词原形', '-ing 形容词 (事物令人……)', '-ed 形容词 (人被动感到……)', '典型技术场景例句'],
      rows: [
        ['interest', 'interesting (有趣的/引人关注的)', 'interested (感兴趣的)', 'I am interested in this new Rust framework.'],
        ['confuse', 'confusing (令人困惑费解的)', 'confused (感到迷惑不解的)', 'This legacy SQL query is extremely confusing.'],
        ['excite', 'exciting (令人激动的/振奋的)', 'excited (感到激动的)', 'The upcoming AI features are truly exciting.'],
        ['tire / exhaust', 'tiring / exhausting (令人疲惫的)', 'tired / exhausted (精疲力竭的)', 'Debugging memory leaks all night is exhausting.'],
        ['surprise', 'surprising (出人意料的/令人惊奇的)', 'surprised (感到惊讶的)', 'We were surprised by the high throughput.'],
        ['disappoint', 'disappointing (令人失望的)', 'disappointed (感到失望的)', 'The benchmark results were quite disappointing.'],
        ['satisfy', 'satisfying (令人满意的)', 'satisfied (感到满意的)', 'The customer was fully satisfied with our SLA.'],
        ['frustrate', 'frustrating (令人抓狂沮丧的)', 'frustrated (抓狂沮丧的)', 'Intermittent network timeout is very frustrating.'],
      ],
    },
    {
      title: '分词四大语法充当成分标准技术例句速查表',
      headers: ['语法成分角色', '分词类型', '结构位置', '地道技术例句与功能解析'],
      rows: [
        ['前置定语', '现在分词 (主动)', '名词前', 'a developing technology (一项正在演进中的技术)'],
        ['前置定语', '过去分词 (被动完成)', '名词前', 'a developed system (一个已经成熟完备的系统)'],
        ['后置定语', '过去分词短语', '名词后', 'The code written by Alice is clean and modular.'],
        ['表语 (主系表)', '现在分词', '系动词后', 'The database migration issue is pressing (刻不容缓的).'],
        ['结果伴随状语', '现在分词', '句末逗号后', 'The server crashed, causing critical downtime.'],
        ['时间/原因状语', '现在分词', '句首逗号前', 'Knowing the latency risk, we deployed Redis cache.'],
        ['宾语补足语', '过去分词', '宾语后 (O=C)', 'The security team wants all sensitive data encrypted.'],
        ['独立主格', '名词 + 分词', '句首逗号前', 'All tests passing, the pipeline deployed the build.'],
      ],
    },
  ],
};
