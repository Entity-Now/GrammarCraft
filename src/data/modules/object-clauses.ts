import type { TopicContent } from '../../types';

export const objectClausesTopic: TopicContent = {
  meta: {
    id: 'object-clauses',
    title: '宾语从句与命令建议从句',
    enTitle: 'Object Clauses & Mandative Subjunctive',
    desc: 'that/whether/wh- 引导词分类、嵌入式疑问句还原陈述语序，以及命令建议从句（一坚持二命令三建议四要求）虚拟原形终极解构',
    icon: '📦',
    pillarId: 'syntax',
    badge: '从句核心',
  },
  diagrams: [
    {
      id: 'd-object-clause-pipeline',
      title: '宾语从句三大连接胶水与嵌套模型 (Object Clause Anatomy)',
      desc: '及物动词消费整个从句作为宾语，三大引导词阵营分别承载陈述、是否与疑问信息',
      code: `graph TD
    Verb["⚡ <b>及物动词引擎 (Transitive Verb)</b><br/>know / realize / ensure / suggest"]

    subgraph Connectors["三大宾语连接胶水"]
        C1["<b>that</b>: 既定事实 (可省略)<br/><i>knows (that) API returned 200</i>"]
        C2["<b>whether / if</b>: 二值判定 (不可省)<br/><i>check whether the port is open</i>"]
        C3["<b>wh- 疑问词</b>: 还原陈述 (不可省)<br/><i>explain how the bug occurred</i>"]
    end

    Verb --> Connectors
    Connectors --> ObjBlock["📦 <b>宾语从句数据包 (Object Payload)</b><br/>从句内部严格遵循 S + V + O 正常陈述语序"]`,
      details: [
        {
          label: 'that 引导既定事实',
          enPhrase: 'The log confirms (that) the batch job completed.',
          zhMeaning: '纯粹的语法连词，在非正式场合或日常口语中经常省略。',
          tag: '连接胶水',
        },
        {
          label: 'whether / if 引导是否判断',
          enPhrase: 'Check whether the cluster has enough capacity.',
          zhMeaning: '表达不确定的二选一判定，绝对不可省略。',
          tag: '连接胶水',
        },
        {
          label: 'wh- 疑问词引导间接从句',
          enPhrase: 'Show me where the telemetry files are stored.',
          zhMeaning: '保留疑问词语义，但从句内部必须彻底取消倒装！',
          tag: '连接胶水',
        },
      ],
    },
    {
      id: 'd-mandative-subjunctive-flow',
      title: '命令建议从句虚拟语气（裸 be / 裸原形）演变流 (Mandative Subjunctive)',
      desc: '一坚持二命令三建议四要求后方 that 从句，因省略 should 而呈现出裸动词原形的语法奇观',
      code: `graph LR
    Trigger["🚨 <b>命令建议动词</b><br/>suggest / recommend / demand / insist"]
    --> That["<b>that 从句</b><br/>引导指令意愿"]
    --> Underlying["<b>底层深层结构</b><br/>S + <b>should</b> + V-base"]
    -->|省略 should| Surface["✨ <b>现代地道表层呈现</b><br/>S + <b>裸原形 (V-base / be)</b><br/><i>recommend that he <b>take</b>...<br/>demand that the server <b>be</b> restarted</i>"]`,
      details: [
        {
          label: '触发词库 (一坚持二命令三建议四要求)',
          enPhrase: 'insist, order, command, suggest, recommend, advise, demand, require, request',
          zhMeaning: '当主句动词表达强烈的主观建议、指令、要求时，激活该虚拟语法规则。',
          tag: '虚拟引擎',
        },
        {
          label: '裸原形机制 (Bare Base Form)',
          enPhrase: 'recommend that the engineer take (严禁 takes) time off',
          zhMeaning: '因为暗含 (should)，所以即使主语是第三人称单数，动词也绝不加 -s！',
          tag: '虚拟机制',
        },
        {
          label: '裸 be 机制 (Bare "be")',
          enPhrase: 'demanded that the patch be deployed (严禁 was/is deployed)',
          zhMeaning: '被动语态中的 (should) be done 省去 should 后，只留下最纯正的原形 be！',
          tag: '虚拟机制',
        },
      ],
    },
  ],
  formulas: [
    {
      id: 'f-object-clause-anatomy',
      title: '宾语从句通用嵌套公式 (Embedded Object Clause)',
      badge: '从句公式',
      formula: '主句主语 + 动词 + [that / whether / 疑问词] + [从句主语 + 从句谓语 + 从句宾语 (严格陈述语序)]',
      desc: '当宾语本身不是一个单词，而是一个完整的事件动作流时，通过引导词胶水将整个分句嵌入动词后方充当宾语。',
      beginnerTip: '【白话理解】动词后面本来只能跟一个词（比如 I know English），现在你想说一整件事（我知道他去了北京），就用连词 that/whether/how 像胶水一样，把后面的小句子原封不动粘在动词后面！',
      tokens: [
        { label: 'Main S+V', role: '主句主干', color: 'blue', desc: 'The log shows / I know' },
        { label: 'Connector', role: '连接词胶水', color: 'purple', desc: 'that / whether / how / what' },
        { label: 'Sub S+V+O', role: '从句陈述语序', color: 'emerald', desc: '从句内部必须主语在前，动词在后！' },
      ],
      example: {
        en: 'The log shows that the API returned a 500 error.',
        zh: '日志表明该 API 返回了 500 错误。',
      },
    },
    {
      id: 'f-embedded-question-restoration',
      title: '嵌入式疑问句还原陈述语序铁律 (No Inversion Rule)',
      badge: '避坑最高频',
      formula: 'I know / Tell me + Wh- (疑问词) + [从句主语] + [从句谓语动词 (去除 do/does/did 还原时态)]',
      desc: '独立问句有倒装（Where is the file? / How did it happen?）；一旦嵌入到其他句子中作宾语，疑问词变成连词，从句内部立刻取消倒装，彻底恢复正常陈述语序！',
      beginnerTip: '【白话理解】单独提问时要倒装（Where is he? / What did you say?）；一旦跟在别人后面当小弟（I want to know where he is），就必须规规矩矩恢复成“先说人，再说动作”（取消倒装，扔掉 did）！',
      example: {
        en: 'I know how the bug happened (去除 did，动词变过去式 happened)。',
        zh: '我知道这个 bug 是怎么发生的。',
      },
    },
    {
      id: 'f-mandative-subjunctive',
      title: '命令建议从句与虚拟语气原形 (Mandative Subjunctive)',
      badge: '重难点深入 · 虚拟原形',
      formula: '主句动词 (建议/命令/要求) + that + [从句主语 + (should) + 动词原形 / be]',
      desc: '当主句出现表示“建议、命令、要求、坚持”的动词时，that 从句表达强烈的愿望或指令。从句谓语动词必须使用“(should) + 动词原形”！在现代美式和国际商务英语中，should 几乎全部被省略，只留下动词裸原形（甚至是 he be、she go），绝不能加 -s 或变过去式！',
      beginnerTip: '【记忆口诀：一坚持、二命令、三建议、四要求】看到这 10 个词（insist, order, command, suggest, advise, recommend, demand, require, request, desire），后面的 that 从句动词统统“打回原形”！哪怕主语是他/她/它，哪怕主句是昨天发生的事情，从句动词依然写原形！如果是 be 动词，直接写裸 be！为什么？因为心里默念一句其实暗藏了 should，比如 (should) be, (should) go！',
      tokens: [
        { label: '命令建议动词', role: '虚拟驱动引擎', color: 'rose', desc: 'suggest / recommend / demand / insist / order / require' },
        { label: 'that', role: '从句连词', color: 'purple', desc: '连接主客观意愿，正式英语中建议保留' },
        { label: '(should) + 原形', role: '动词被打回原形', color: 'emerald', desc: '现代英语通常省略 should，保留裸原形；若是系词直接用 be' },
      ],
      example: {
        en: 'The manager recommended that everyone (should) be present on time.',
        zh: '经理建议每个人都按时出席。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-object-embedded-wh',
      badge: '语序还原解构',
      type: 'Embedded Question (恢复陈述语序)',
      title: '嵌入式疑问句：取消倒装并去除 did',
      desc: '当疑问句嵌入作为宾语时，疑问词充当连词，内部取消倒装并还原为陈述时态。',
      formula: 'S + V + Wh- (连接词) + [从句 S + 从句 V (过去式)]',
      formulaDesc: '去掉了独立提问时的助动词 did，谓语动词直接变为过去式 happened。',
      sentence: 'The developer knows how the deadlock happened in production.',
      translation: '开发人员清楚生产环境中死锁是如何发生的。',
      parts: [
        { text: 'The developer', role: '主句主语', type: 'subject', detail: '开发者 · 认知主体' },
        { text: 'knows', role: '主句谓语', type: 'verb', detail: '知道 · 核心动作' },
        { text: 'how', role: '从句连词', type: 'linker', detail: '如何 · 疑问词转连词' },
        { text: 'the deadlock', role: '从句主语', type: 'subject', detail: '死锁 · 处于谓语前' },
        { text: 'happened', role: '从句谓语 (过去式)', type: 'verb', detail: '发生 · 陈述位' },
        { text: '[in production]', role: '地点状语', type: 'adverbial', detail: '在生产环境' },
      ],
      explanation: '绝不能写成 *knows how did the deadlock happen*！嵌入从句就像一个被引用的封闭闭包，内部必须恢复“主语在前，动词在后”的陈述语序。',
      beginnerAnalogy: '疑问句单独提问时是“大声质问”（语序反过来），但一旦被塞进别的句子里做小宾语，它就降级成了普通陈述，必须规规矩矩地说“谁 + 怎么样了”，把跑出来的 did 扔掉！',
      itAnalogy: '类比闭包函数引用：log.info(() => deadlock.getReason()); 内部表达式按标准求值。',
    },
    {
      id: 'sk-object-that-clause',
      badge: 'That 引导事件解构',
      type: 'That-Clause Object',
      title: 'that 引导的完整事件流宾语从句',
      desc: '及物动词后嵌套完整事件流，that 作为语法胶水引入。',
      formula: 'S (The log) + V (shows) + that + [S (the API) + V (returned) + O (error)]',
      sentence: 'The log shows that the API returned a 500 error.',
      translation: '日志表明该 API 返回了 500 错误。',
      parts: [
        { text: 'The log', role: '主句主语', type: 'subject', detail: '日志主体' },
        { text: 'shows', role: '主句谓语', type: 'verb', detail: '表明 · 及物动词' },
        { text: 'that', role: '引导连接词', type: 'linker', detail: '语法胶水' },
        { text: 'the API', role: '从句主语', type: 'subject', detail: '接口' },
        { text: 'returned', role: '从句谓语', type: 'verb', detail: '返回 · 过去式' },
        { text: 'a 500 error', role: '从句宾语', type: 'object', detail: '500 错误' },
      ],
      explanation: '从句内部具备完整的 SVO 结构，that 承担胶水功能。口语中 that 可省略，但技术文档中建议保留以提高严谨度。',
      beginnerAnalogy: 'that 就像双面胶，把后面的完整小句子贴在动词 shows 后面当一整块“宾语”使用。',
      itAnalogy: '类比把完整的 JSON 对象作为返回值：log.shows({ code: 500, from: "API" });',
    },
    {
      id: 'sk-object-mandative-verb',
      badge: '实义动词虚拟原形',
      type: 'Mandative Subjunctive (实义动词)',
      title: '命令建议从句：动词强制打回原形',
      desc: '主句动词表建议时，从句主语即便为第三人称单数，谓语也必须使用裸动词原形。',
      formula: 'S + suggested + that + he + [take (动词原形，严禁 takes/took)]',
      formulaDesc: '本质上是省略了情态动词 should，完整形式为 that he (should) take。',
      sentence: 'The doctor suggested that he take the medicine on time every day.',
      translation: '医生建议他每天按时服药。',
      parts: [
        { text: 'The doctor', role: '主句主语', type: 'subject', detail: '医生 · 提建议者' },
        { text: 'suggested', role: '主句谓语动词 (过去时)', type: 'verb', detail: '提出了建议' },
        { text: 'that', role: '从句引导词', type: 'linker', detail: '引导建议内容' },
        { text: 'he', role: '从句主语 (单三)', type: 'subject', detail: '他' },
        { text: 'take', role: '虚拟式动词原形', type: 'verb', detail: '省略 should，强制使用原形 take（严禁 takes/took）' },
        { text: 'the medicine', role: '从句宾语', type: 'object', detail: '药物' },
        { text: '[on time every day]', role: '方式与时间状语', type: 'adverbial', detail: '每天按时' },
      ],
      explanation: '为什么不能写成 took 或者 takes？因为医生提出建议时，吃药这个动作并没有真实发生，不是在陈述客观事实，而是在表达“应当去做”。美式英语把 should 省略后，必须保留动词裸原形 take！',
      beginnerAnalogy: '就像皇上下达了圣旨（建议/命令），命令还没真正落实，所以动词不能加 -s 也不能变过去式，必须原汁原味地保留动词原形！脑中脑补一个看不见的 should 就会一目了然：(should) take！',
      itAnalogy: '类比严格声明契约：policy.enforce(action => action.type === "TAKE_MEDICINE");',
    },
    {
      id: 'sk-object-mandative-be',
      badge: 'Be 动词裸 be 解密',
      type: 'Mandative Subjunctive (裸 be)',
      title: 'Be 动词命令建议从句：为什么会出现裸 be？',
      desc: '彻底解密为什么会出现 recommend that the server be restarted 这种看似“不合语法”的现象。',
      formula: 'S + demanded that + S + [be + 过去分词 (被动语态中的裸 be)]',
      formulaDesc: '省略 should 后的被动语态，由 (should) be done 缩写为 be done。',
      sentence: 'The project manager demanded that the bug be fixed before Friday.',
      translation: '项目经理要求在周五前把该缺陷修复完毕。',
      parts: [
        { text: 'The project manager', role: '主句主语', type: 'subject', detail: '项目经理 · 发号施令者' },
        { text: 'demanded', role: '要求动词 (过去时)', type: 'verb', detail: '提出严肃要求' },
        { text: 'that', role: '从句引导词', type: 'linker', detail: '引导具体指令' },
        { text: 'the bug', role: '从句主语', type: 'subject', detail: '缺陷（单数名词）' },
        { text: 'be fixed', role: '虚拟被动裸原形', type: 'verb', detail: '省略 should，原形 be + 过去分词 fixed（严禁 was fixed 或 is fixed）' },
        { text: '[before Friday]', role: '时间状语', type: 'adverbial', detail: '在周五之前' },
      ],
      explanation: '千万不能写成 was fixed 或 is fixed！在 demand（要求）后面的 that 从句中，完整的结构是 (should) be fixed。现代英语把 should 拿掉后，剩下的不是 is 也不是 was，而是最纯粹的原形 be！这就是英语语法中著名的“裸 be”现象。',
      beginnerAnalogy: '看到从句里冒出一个孤零零的 be 别慌张！心里默念一句它前面藏着一个隐形的 should：(should) be fixed。把 should 藏起来后，剩下的自然就是原形 be 啦！',
      itAnalogy: '类比 CI/CD 期望状态声明：spec.desiredState = { fixed: true, deadline: "Friday" }。',
    },
  ],
  compares: [
    {
      id: 'cmp-where-is-config',
      chinese: '请告诉我配置文件在哪里。',
      wrong: 'Please tell me where is the config file.',
      correct: 'Please tell me where the config file is.',
      formula: 'tell me + where + 主语 + is',
      reason: '嵌入宾语从句时，语序不再倒装，系动词 is 必须移到从句主语 the config file 的后面！',
      beginnerAnalogy: '独立问是“Where is it?”（倒过来），但跟在 tell me 后面就要恢复平铺直叙：“先说东西，再说在哪里”！',
      itAnalogy: '类比：getConfigPath() 是访问属性，而不是发起中断调用。',
    },
    {
      id: 'cmp-what-is-problem',
      chinese: '我知道问题是什么。',
      wrong: 'I know what is the problem.',
      correct: 'I know what the problem is.',
      formula: 'I know + what + 主语 + is',
      reason: '从句内部恢复陈述语序：主语 the problem 在前，系词 is 在后。',
      beginnerAnalogy: '陈述句正常语序就是主谓结构，不能像问句那样把 is 提前。',
    },
    {
      id: 'cmp-mandative-was-trap',
      chinese: '组长建议立刻重启服务器。',
      wrong: 'The team lead recommended that the server was restarted immediately.',
      correct: 'The team lead recommended that the server be restarted immediately.',
      formula: 'recommend that + S + (should) be done',
      reason: '在 recommend 后的 that 从句中，表达的是尚未发生的强烈建议，动词强制使用原形 be（省略了 should），绝不可根据主句时态写成 was restarted！',
      beginnerAnalogy: '建议的事情还没发生呢，怎么能用表示过去的 was 呢？记准口诀：建议命令接从句，动词直接打回原形 be！',
    },
    {
      id: 'cmp-suggest-indicative-vs-subjunctive',
      chinese: '【高频避坑】区分：建议（用原形） vs 表明/暗示（用真实时态）',
      wrong: 'The survey results suggest that customer satisfaction increase.',
      correct: 'The survey results suggest that customer satisfaction increased.',
      formula: 'suggest 表“暗示/表明客观事实”时，不用虚拟原形！',
      reason: 'suggest 当“建议”讲时，从句用 (should) + 动词原形；但当它作为“暗示、表明、显示”讲时，从句陈述的是客观事实，必须使用客观真实时态（如过去时 increased）！',
      beginnerAnalogy: '看是谁在说话：如果是“人”（医生/领导/朋友）建议你做什么，是提建议，动词用原形；如果是“物”（数据/调查报告/实验结果）表明了什么事实，这是摆事实，该用什么真实时态就用什么时态！',
    },
  ],
  builders: [
    {
      id: 'b-object-clause-order',
      title: '拼装宾语从句',
      instruction: '组装句子：「你能向我演示一下你是怎么修复内存泄漏的吗？」',
      words: ['Can you show me', 'how', 'you fixed', 'the memory leak?'],
      targetSentence: 'Can you show me how you fixed the memory leak?',
      explanation: 'Can you show me 之后的从句由 how 引导，内部恢复正常陈述语序 you fixed the memory leak。',
    },
    {
      id: 'b-mandative-order',
      title: '拼装命令建议从句',
      instruction: '组装句子：「主管要求立即对数据进行备份」',
      words: ['The supervisor', 'demanded that', 'the data', 'be backed up', 'immediately.'],
      targetSentence: 'The supervisor demanded that the data be backed up immediately.',
      explanation: 'demanded that 后面使用虚拟语气，省略 should，使用裸动词原形 be backed up！',
    },
  ],
  quizzes: [
    {
      id: 'q-object-clause-order',
      title: '从句语序还原自测挑战',
      question: '如果要表达「没人知道服务器是什么时候关机的」，正确且合规的英文句子是：',
      options: [
        { text: 'Nobody knows when did the server shut down.', isCorrect: false, explanation: '错误：宾语从句中多余地保留了助动词 did，错误地使用了疑问句倒装。' },
        { text: 'Nobody knows when the server shut down.', isCorrect: true, explanation: '正确！去掉了助动词 did，从句内部恢复“主语在前，动词在后”的标准陈述语序。' },
        { text: 'Nobody knows when was the server shut down.', isCorrect: false, explanation: '错误：was 提前属于倒装。' },
      ],
    },
    {
      id: 'q-mandative-subjunctive',
      title: '命令建议从句动词形态辨析',
      question: '在句子「The client insisted that the design draft ________ to him by tonight.」中，横线上应填入：',
      options: [
        { text: 'be sent', isCorrect: true, explanation: '正确！insist 表“坚决要求”时，that 从句使用虚拟语气，结构为 (should) + 动词原形，此处省略 should，被动语态保留裸原形 be sent！' },
        { text: 'was sent', isCorrect: false, explanation: '错误：不可顺应主句时态写成 was sent，命令建议从句动词必须用原形！' },
        { text: 'is sent', isCorrect: false, explanation: '错误：不可因为 design draft 是单数就写成 is sent，必须用原形 be sent。' },
        { text: 'will be sent', isCorrect: false, explanation: '错误：虚拟语气从句中不使用 will。' },
      ],
    },
  ],
  tables: [
    {
      title: '宾语从句三大类连接词对照表 (Connectors in Object Clauses)',
      headers: ['连接词类别', '常用连词', '从句属性', '典型例句'],
      rows: [
        ['that 引导陈述句', 'that (可省略)', '从句本身是完整的陈述事实', 'I think that this framework is great.'],
        ['whether / if 引导一般疑问', 'whether, if (是否)', '从句表示“是否”，不可倒装', 'Check whether the port is listening.'],
        ['特殊疑问词引导疑问', 'what, who, where, when, why, how', '疑问词作连词，从句必须恢复陈述语序', 'Tell me how you solved the crash.'],
      ],
    },
    {
      title: '命令建议从句“一坚持二命令三建议四要求”全家桶速查表',
      headers: ['口诀分类', '高频核心动词', '从句动词公式', '经典例句', '避坑提醒'],
      rows: [
        ['一坚持 (Insist)', 'insist (坚持要求)', 'that + (should) do / be', 'He insisted that we be on time.', '表“坚持认为事实”时用真实时态：He insisted that he was innocent.'],
        ['二命令 (Command)', 'order, command (命令)', 'that + (should) do / be', 'The lead ordered that the tests be run.', '命令尚未执行，不可使用过去式'],
        ['三建议 (Suggest)', 'suggest, advise, recommend (建议)', 'that + (should) do / be', 'I recommend that she take a break.', 'suggest 表“表明/暗示”时用真实时态：The data suggests it was a bug.'],
        ['四要求 (Demand)', 'demand, require, request, desire (要求)', 'that + (should) do / be', 'They demanded that the fix be deployed.', '否定形式直接加 not：demanded that he not leave'],
        ['形容词扩展 (Adjectives)', 'essential, important, necessary, urgent', 'It is adj that + (should) do / be', 'It is important that everyone be informed.', '形式主语 It is ... that 从句同样遵循此虚拟原形规则'],
      ],
    },
  ],
};
