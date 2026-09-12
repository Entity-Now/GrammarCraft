import type { TopicContent } from '../../types';

export const nounClausesTopic: TopicContent = {
  meta: {
    id: 'noun-clauses',
    title: '名词性从句与间接疑问从句',
    enTitle: 'Noun Clauses & Indirect Questions',
    desc: '系统掌握表语从句、主语从句、同位语从句与间接疑问从句：从句充当名词数据实体、系表原因阐述、形式主语 It 平衡架构与职场技术礼貌提问',
    icon: '💎',
    pillarId: 'syntax',
    badge: '名词从句全家桶',
  },
  diagrams: [
    {
      id: 'd-noun-clause-slots',
      title: '名词性从句四大核心语法插槽模型 (The 4 Noun Clause Slots)',
      desc: '名词性从句就像一个类型为 String / Object 的数据实体，可以插入句子中任意允许放置名词的插槽',
      code: `graph TD
    NounRole["💎 <b>名词性从句本质 (Sentence as a Noun Entity)</b><br/>一个完整事件流 · 封装为独立名词数据包"]

    subgraph CoreSlots["四大核心语法插槽"]
        S1["1️⃣ <b>主语从句 (Subject)</b><br/>位于动词前方，发起全句命题<br/><i>What we need is stability.</i>"]
        S2["2️⃣ <b>表语从句 (Predicative)</b><br/>位于系动词后方，界定属性本质<br/><i>The issue is that port 80 timed out.</i>"]
        S3["3️⃣ <b>同位语从句 (Appositive)</b><br/>紧跟抽象名词后，解释具体内涵<br/><i>The fact that tests failed is true.</i>"]
        S4["4️⃣ <b>间接疑问从句 (Indirect Q)</b><br/>嵌入提问或陈述，彻底恢复陈述语序<br/><i>Tell me where the server is.</i>"]
    end

    NounRole --> CoreSlots`,
      details: [
        {
          label: '1. 主语从句 (Subject Clause)',
          enPhrase: 'What we need now is immediate disaster recovery.',
          zhMeaning: '从句整体充当句子的主语，回答“什么事情是核心所在”。',
          tag: '语法插槽',
        },
        {
          label: '2. 表语从句 (Predicative Clause)',
          enPhrase: 'The root cause is that the cache expired unexpectedly.',
          zhMeaning: '紧跟在 be 动词（is/was）或系动词后，充当解释说明主语本质的表语。',
          tag: '语法插槽',
        },
        {
          label: '3. 同位语从句 (Appositive Clause)',
          enPhrase: 'We cannot ignore the fact that latency is spiking.',
          zhMeaning: '依附在 fact, idea, news, evidence 等抽象名词后，详细阐述事实的具体内容。',
          tag: '语法插槽',
        },
        {
          label: '4. 间接疑问从句 (Indirect Questions)',
          enPhrase: 'Could you please explain how the load balancer works?',
          zhMeaning: '将独立疑问句优雅内嵌进礼貌主句中，必须强制取消倒装并恢复陈述语序。',
          tag: '语法插槽',
        },
      ],
    },
    {
      id: 'd-indirect-question-restoration',
      title: '间接疑问从句语序还原流水线 (Word Order Normalization)',
      desc: '从硬邦邦的直接问句倒装，到职场专业礼貌间接问句的平铺直叙演变',
      code: `graph LR
    Direct["❓ <b>直接疑问句 (倒装)</b><br/>Where <b>is</b> the file?<br/>Why <b>did</b> it crash?"]
    -->|内嵌礼貌外壳 (Could you tell me...)| Indirect["🤝 <b>间接疑问从句 (陈述)</b><br/>...where the file <b>is</b>.<br/>...why it <b>crashed</b> (去除 did)."]
    -->|交付终态| Finish["✅ <b>专业地道英文表达</b><br/>语义温和 · 契合国际团队规范"]`,
      details: [
        {
          label: '直接疑问句 (倒装)',
          enPhrase: 'Where is the config? / How did this bug happen?',
          zhMeaning: '独立提问必须倒装（系动词提前，或借助助动词 did/does 提前）。',
          tag: '语序演进',
        },
        {
          label: '间接疑问从句 (陈述)',
          enPhrase: 'I wonder where the config is / Show me how the bug happened.',
          zhMeaning: '一旦成为从句，疑问词变成连词，内部立刻取消倒装，还原“主语在前，动词在后”！',
          tag: '语序演进',
        },
      ],
    },
  ],
  formulas: [
    {
      id: 'f-predicative-that-formula',
      title: '表语从句核心公式 (The Predicative Clause Formula)',
      badge: '汇报与排障必备',
      formula: '主语 (The problem / reason / bottleneck) + is / was + that + [完整陈述分句 (SVO)]',
      desc: '在技术汇报、故障复盘（Post-mortem）中阐明故障根因、系统瓶颈或核心结论的顶级万能句式！that 起到纯连接作用，引导完整事实。',
      beginnerTip: '【小白秒懂口诀】向领导汇报故障记住这个开头：“The problem is that...”（问题在于……）。后面直接把你平时写的正常句子贴上去就行，比如 The problem is that the database was locked. 千万不要自己瞎编什么 *The problem is database lock*！',
      tokens: [
        { label: 'Subject', role: '核心定性主语', color: 'blue', desc: 'The issue / The reality / The conclusion' },
        { label: 'is / was', role: '系动词连接', color: 'purple', desc: '根据时间切片选择 is 还是 was' },
        { label: 'that', role: '表语从句胶水', color: 'emerald', desc: '无实际含义，严密引导后续完整事件' },
        { label: 'Clause (SVO)', role: '具体事实描述', color: 'amber', desc: 'the token had expired before verification' },
      ],
      example: {
        en: 'The primary bottleneck is that disk I/O cannot keep up with write requests.',
        zh: '最主要的瓶颈在于磁盘 I/O 无法跟上写入请求的速度。',
      },
    },
    {
      id: 'f-reason-why-is-that',
      title: '原因阐述黄金契约 (The Reason Why ... Is That ...)',
      badge: '必考避坑最高频',
      formula: 'The reason why [事件] is that [根因] (绝对禁止写成 is because ...！)',
      desc: '中文常说“之所以……是因为……”，导致大量工程师直译为 *The reason why ... is because ...*。在标准英语语法中，The reason 已经表示原因，后面必须接 that 表语从句，接 because 会造成严重的语义重复冗余（Tautology）！',
      beginnerTip: '【牢记死律】说出 The reason 之后，后面 100% 只能接 that，绝对不能秃噜嘴说出 because！口诀：“有 reason 必有 that，严禁搭配 because！”',
      tokens: [
        { label: 'The reason why...', role: '定语从句先行限定', color: 'blue', desc: 'The reason why the service failed' },
        { label: 'is', role: '系词', color: 'purple', desc: '连接核心原因' },
        { label: 'that [Fact]', role: '表语从句', color: 'emerald', desc: 'that memory was completely exhausted' },
      ],
      example: {
        en: 'The reason why the build failed is that a critical dependency was missing.',
        zh: '构建之所以失败，是因为缺少了一个关键依赖项。',
      },
    },
    {
      id: 'f-indirect-question-order',
      title: '间接疑问从句陈述语序还原铁律 (Embedded Question Normalization)',
      badge: '职场提问黄金法则',
      formula: 'Could you tell me / I would like to know + Wh- (疑问词) + [从句主语] + [从句谓语动词 (消除 did/does)]',
      desc: '向同事或上级提问时，直接问句（如 Where is the doc?）显得生硬甚至无礼；通过将其包装为间接疑问句，语气极度专业礼貌。但切记：从句内部必须彻底取消倒装！',
      beginnerTip: '【小白还原语序 2 步法】1. 碰到系动词（is/are/was/were），把它从主语前面踢到主语后面：Where is the file ➔ where the file is；2. 碰到助动词（did/does），把 did/does 删掉，把动词变成对应时态：How did it fail ➔ how it failed！',
      tokens: [
        { label: 'Courtesy Prefix', role: '礼貌提问前缀', color: 'blue', desc: 'Could you explain / Please let me know' },
        { label: 'Wh- Connector', role: '疑问词转连词', color: 'purple', desc: 'where / how / why / what / when' },
        { label: 'Subject + Verb', role: '标准陈述语序', color: 'emerald', desc: 'the routing table handles dynamic IP (严禁倒装)' },
      ],
      example: {
        en: 'Could you please explain how the distributed consensus algorithm works?',
        zh: '请问您能否解释一下该分布式共识算法是如何运作的？',
      },
    },
    {
      id: 'f-dummy-it-subject-clause',
      title: '主语从句形式主语 It 平衡公式 (Dummy "It" in Subject Clauses)',
      badge: '架构平衡美学',
      formula: 'That [长难从句] + is clear ➔ 改造为 ➔ It is + [形容词/被动] + that + [真实主语从句]',
      desc: '如果把一个又臭又长的 that 从句放在句首做主语，整句话就会产生严重的“头重脚轻（Top-heavy）”视觉失衡。英语通过派出虚词代词 It 抢占句首主语位，将真正的长从句后置。',
      beginnerTip: '【大头娃娃变身记】想象一个大头娃娃站不稳：That the database cluster might lose data during migration is a huge risk.（前面太长，听众听了半天才听到 is）。改造后：It is a huge risk that the database cluster might lose data during migration.（先说结论“风险极大”，后面再说具体什么事）。结构立刻稳如泰山！',
      tokens: [
        { label: 'It (形式主语)', role: '空指针占位符', color: 'blue', desc: '无实体意义，专职占据主语语法槽位' },
        { label: 'is + [Adjective]', role: '评价/定性', color: 'purple', desc: 'is obvious / is critical / is well known' },
        { label: 'that [Clause]', role: '真正主语后置', color: 'emerald', desc: 'that all microservices must implement health checks' },
      ],
      example: {
        en: 'It is obvious that this legacy code requires thorough refactoring.',
        zh: '显而易见，这段遗留代码需要进行彻底的重构。',
      },
    },
    {
      id: 'f-appositive-clause-anatomy',
      title: '同位语从句等价解释公式 (Appositive Clause)',
      badge: '高阶书面语法',
      formula: '抽象名词 (fact / belief / evidence / news) + that + [完整不缺成分的陈述句]',
      desc: '同位语从句紧跟在抽象名词后面，用一个完整的陈述句对该名词的“具体内容”进行 1:1 等价展开说明。that 在从句中既不作主语也不作宾语，纯粹作为等号（=）胶水使用。',
      beginnerTip: '【同位语从句 vs 定语从句 3 秒秒杀法】看 that 后面缺不缺零件！如果 that 后面的句子主谓宾齐全、不缺任何成分，就是【同位语从句】（that 只是解释说明内容）；如果 that 后面的句子缺主语或者缺宾语，那它就是【定语从句】（that 亲自充当缺少的那个零件）！',
      tokens: [
        { label: 'Abstract Noun', role: '抽象名词先行', color: 'blue', desc: 'the fact / the evidence / the conclusion' },
        { label: 'that', role: '内容展开等号胶水', color: 'purple', desc: '纯引导，在从句内不充当主谓宾' },
        { label: 'Complete Sentence', role: '1:1 等价内容展开', color: 'emerald', desc: 'SVO 完整齐全，阐明到底是什么事实' },
      ],
      example: {
        en: 'We must accept the reality that system outages will happen eventually.',
        zh: '我们必须接受这样一个现实：系统故障终究会发生。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-predicative-clause-demo',
      badge: '表语从句解构',
      type: 'Predicative Clause (表语从句)',
      title: '故障根因阐明：That 引导的表语从句',
      desc: '主语为抽象概念 the root cause，系动词 was 之后通过 that 引入完整的故障事件。',
      formula: 'The root cause + was + that + [从句完整 SVO]',
      sentence: 'The root cause was that the background worker consumed all available file descriptors.',
      translation: '根本原因在于后台工作进程耗尽了所有可用的文件描述符。',
      parts: [
        { text: 'The root cause', role: '主句主语', type: 'subject', detail: '根本原因 · 抽象主语' },
        { text: 'was', role: '主句系动词', type: 'linker', detail: '过去时态系词' },
        { text: 'that', role: '表语从句引导词', type: 'linker', detail: '纯语法胶水，不占内部成分' },
        { text: 'the background worker', role: '从句主语', type: 'subject', detail: '后台工作进程' },
        { text: 'consumed', role: '从句谓语', type: 'verb', detail: '耗尽 · 过去式' },
        { text: 'all available file descriptors', role: '从句宾语', type: 'object', detail: '所有可用文件描述符' },
      ],
      explanation: 'was that 后面的完整句子充当 was 的表语，整体回答了“根本原因究竟是什么”。在技术复盘报告中，这是最高频规范的行文句型。',
      beginnerAnalogy: '相当于在说“根本原因 = 后台进程耗尽了文件描述符”。that 就是那个等号后面的包装盒！',
      itAnalogy: 'const postMortem = { rootCause: () => worker.exhaust(descriptors) };',
    },
    {
      id: 'sk-indirect-question-demo',
      badge: '间接疑问从句解构',
      type: 'Indirect Question (间接疑问从句)',
      title: '职场礼貌提问：消除倒装还原时态',
      desc: '向同事请教系统行为时，使用间接疑问从句，从句内部谓语动词置于主语后方。',
      formula: 'Could you tell me + why + [从句主语 + 谓语动词 (无倒装)]',
      sentence: 'Could you please tell me why the gateway rejected our authentication token?',
      translation: '能否请您告诉我，网关为什么拒绝了我们的身份认证令牌？',
      parts: [
        { text: 'Could you please tell me', role: '礼貌主句', type: 'subject', detail: '委婉客气的职场提问前缀' },
        { text: 'why', role: '疑问从句连接词', type: 'linker', detail: '引导原因间接从句' },
        { text: 'the gateway', role: '从句主语', type: 'subject', detail: '网关系统 · 位于谓语前！' },
        { text: 'rejected', role: '从句谓语 (过去式)', type: 'verb', detail: '拒绝 · 消除 did 直接变过去式' },
        { text: 'our authentication token?', role: '从句宾语', type: 'object', detail: '认证令牌' },
      ],
      explanation: '绝对不能说成 *Could you tell me why did the gateway reject...*！嵌入从句必须恢复陈述语序，将助动词 did 剔除，让动词 reject 吸收过去时变为 rejected。',
      beginnerAnalogy: '直接问“Why did the gateway reject...”就像在大声质问；套上“Could you tell me why the gateway rejected...”不仅极有涵养，语法也完全合规！',
      itAnalogy: '类比安全的 Getter 查询：await authGateway.queryRejectionReason(token);',
    },
    {
      id: 'sk-subject-clause-what',
      badge: '主语从句解构',
      type: 'What Subject Clause (What 主语从句)',
      title: 'What 引导的主语从句：我们所需要的是……',
      desc: 'what 兼具连接词与宾语双重身份，引导的从句整体充当句子的主语。',
      formula: 'What + [从句主语 + 从句及物动词] + is + 表语',
      sentence: 'What we need right now is an automated rollback mechanism.',
      translation: '我们当下最需要的是一套自动化的回滚机制。',
      parts: [
        { text: 'What we need right now', role: '复合主语从句', type: 'subject', detail: '整体充当全句主语（单数）' },
        { text: 'is', role: '主句系动词', type: 'linker', detail: '现在时单数' },
        { text: 'an automated rollback mechanism', role: '主句表语', type: 'predicative', detail: '核心诉求事物' },
      ],
      explanation: 'what 等于 the thing that。在 what we need 中，what 充当 need 的宾语；而整个 what we need right now 又充当了 is 的主语！',
      beginnerAnalogy: 'What we need = “我们所需要的东西”。把一整句话当成一件物品放在最前面做主语！',
      itAnalogy: 'const target = getRequirements().find(r => r.urgent);',
    },
    {
      id: 'sk-appositive-clause-demo',
      badge: '同位语从句解构',
      type: 'Appositive Clause (同位语从句)',
      title: '抽象名词内容展开：That 同位语从句',
      desc: '紧跟抽象名词 the hypothesis，that 后的从句结构完整，详细陈述假说的具体内容。',
      formula: 'Noun (the hypothesis) + that + [完整无缺从句 SVO]',
      sentence: 'The telemetry data confirms the hypothesis that the leak occurs only under high load.',
      translation: '遥测数据证实了这样一个假说：内存泄漏仅在高负载情况下才会发生。',
      parts: [
        { text: 'The telemetry data', role: '主句主语', type: 'subject', detail: '遥测数据' },
        { text: 'confirms', role: '主句谓语', type: 'verb', detail: '证实 · 单三' },
        { text: 'the hypothesis', role: '主句宾语 (抽象名词)', type: 'object', detail: '假说' },
        { text: 'that', role: '同位语连接词', type: 'linker', detail: '连接词，不充当成分' },
        { text: 'the leak occurs only under high load', role: '完整同位语分句', type: 'adverbial', detail: '主谓状俱全，解释假说内容' },
      ],
      explanation: '从句 the leak occurs only under high load 是一句结构完全自洽的陈述句。that 在这里不代替 the hypothesis，纯粹引申其具体内涵，因此是同位语从句而非定语从句。',
      beginnerAnalogy: '就像给文件解压：the hypothesis 是压缩包名字，that 后面是解压出来的具体内容。两者完全对等！',
      itAnalogy: 'assert.equal(hypothesis.description, "Leak occurs only under high load");',
    },
  ],
  compares: [
    {
      id: 'cmp-the-reason-is-because-trap',
      chinese: '服务器宕机的原因是因为内存耗尽了。',
      wrong: 'The reason why the server crashed is because memory was exhausted.',
      correct: 'The reason why the server crashed is that memory was exhausted.',
      formula: 'The reason why ... is that ...',
      reason: 'The reason 本身已经包含了“原因”之意，系动词后必须用 that 引导表语从句以陈述事实。如果使用 because（因为），就会造成“……的原因是因为……”的语义严重重复冲突！',
      beginnerAnalogy: '不要说“原因是因为……”！在英文中，说了 The reason，后面必须规规矩矩接 that！',
      itAnalogy: '编译警告：Redundant semantic declaration. Use "is that" instead of "is because".',
    },
    {
      id: 'cmp-indirect-question-inversion-trap',
      chinese: '请问你能告诉我数据库端口是多少吗？',
      wrong: 'Can you tell me what is the database port?',
      correct: 'Can you tell me what the database port is?',
      formula: 'Can you tell me + what + [主语] + is',
      reason: '直接提问才是 What is the port?；但一旦内嵌进 Can you tell me 之后，疑问词变成从句引导词，从句内部必须恢复陈述语序（主语在前，动词在后）！',
      beginnerAnalogy: '从句内部千万不要倒装！记住把 is 踢到主语后面去：what the database port is！',
    },
    {
      id: 'cmp-subject-clause-whether-vs-if',
      chinese: '系统能否抗住下周的双十一大促仍然是个未知数。',
      wrong: 'If the system can handle the traffic surge remains unknown.',
      correct: 'Whether the system can handle the traffic surge remains unknown.',
      formula: '放在句首引导主语从句时，必须用 Whether，严禁用 If！',
      reason: '在英语语法中，if 只有在及物动词后引导宾语从句时才能表示“是否”；若置于句首引导主语从句，或者放在介词后方，必须 100% 使用 Whether！',
      beginnerAnalogy: '“句首站岗选 Whether，千万不能让 If 守大门！” If 放在句首会被直接当作“如果（条件状语）”来理解！',
    },
  ],
  builders: [
    {
      id: 'b-predicative-clause-builder',
      title: '拼装表语从句',
      instruction: '组装技术排障汇报句：「最关键的问题在于客户端未校验 SSL 证书」',
      words: ['The critical issue', 'is that', 'the client', 'does not validate', 'SSL certificates.'],
      targetSentence: 'The critical issue is that the client does not validate SSL certificates.',
      explanation: 'The critical issue 为主语，is 之后通过 that 引入完整的表语从句陈述安全隐患事实。',
    },
    {
      id: 'b-indirect-q-builder',
      title: '拼装间接疑问句',
      instruction: '组装职场专业提问：「你能向我说明一下这台虚拟机是什么时候被重启的吗？」',
      words: ['Could you clarify', 'when', 'the virtual machine', 'was restarted?'],
      targetSentence: 'Could you clarify when the virtual machine was restarted?',
      explanation: 'Could you clarify 后面跟疑问词 when，从句内部恢复正常陈述语序 the virtual machine was restarted。',
    },
  ],
  quizzes: [
    {
      id: 'q-predicative-connector',
      title: '表语从句连词决策自测',
      question: '在技术故障分析会中，架构师想表达「我们的首要关切是灾备集群能否在 10 秒内接管流量」，横线上最地道的连词是：\\n"Our primary concern is ________ the DR cluster can take over traffic within 10 seconds."',
      options: [
        { text: 'whether', isCorrect: true, explanation: '正确！表示“是否能够接管流量”，表语从句中表达二选一的疑问悬念，必须使用 whether（此处不可用 if，系动词后首选 whether）。' },
        { text: 'if', isCorrect: false, explanation: '错误：if 通常只在动词后引导宾语从句，表语从句和介词后表示“是否”时严格推荐使用 whether。' },
        { text: 'because', isCorrect: false, explanation: '错误：concern 不是解释原因，而是表达对“能否接管”的判定关切。' },
        { text: 'that', isCorrect: false, explanation: '错误：that 表示陈述既定事实，而原意是讨论“能否实现（是否存在可能性）”。' },
      ],
    },
    {
      id: 'q-appositive-vs-relative-quiz',
      title: '同位语从句 vs 定语从句终极辨析',
      question: '请判断下列句子中划线从句的属性：\\n"The report that the security engineer submitted yesterday contains critical vulnerabilities."',
      options: [
        { text: '定语从句 (Relative Clause)', isCorrect: true, explanation: '正确！从句 submitted 缺少宾语，that 在从句中代替 the report 充当 submitted 的宾语（submitted that report yesterday），因此是限定先行词的定语从句！' },
        { text: '同位语从句 (Appositive Clause)', isCorrect: false, explanation: '错误：如果是同位语从句，that 后面必须是一个主谓宾完全自洽不缺成分的句子，而此处的 submitted 缺少宾语。' },
        { text: '主语从句 (Subject Clause)', isCorrect: false, explanation: '错误：全句主语是 The report。' },
      ],
    },
  ],
  tables: [
    {
      title: '名词性从句四大角色全景对照矩阵 (Noun Clauses Grid)',
      headers: ['从句类型', '在主句中的插槽位置', '核心语法使命', '高频连接词', '经典工程实战例句'],
      rows: [
        ['主语从句 (Subject)', '句首（或 It 占位后置）', '充当全句命题的主体主角', 'What, That, Whether', 'What caused the outage is still under investigation.'],
        ['表语从句 (Predicative)', '系动词 (is/was/seems) 之后', '解释说明主语概念的本质内涵', 'that, whether, why, what', 'The issue is that disk space ran out.'],
        ['同位语从句 (Appositive)', '抽象名词 (fact/news/idea) 之后', '对抽象名词进行 1:1 等价展开说明', 'that (完整自洽不缺成分)', 'We accepted the fact that latency increased.'],
        ['间接疑问从句 (Indirect Q)', '礼貌主句后（宾语/表语位）', '消除生硬语气，彻底恢复陈述语序', 'how, where, why, when, whether', 'Please tell me how this pipeline works.'],
      ],
    },
    {
      title: '职场与开源社区间接疑问句礼貌开场白对照表',
      headers: ['常见生硬直接问句', '职场高阶间接提问表达', '语序还原避坑要点'],
      rows: [
        ['Where is the documentation?', 'Could you please show me where the documentation is?', 'is 移至 documentation 后方'],
        ['How did you solve this bug?', 'Would you mind sharing how you solved this bug?', '去 did，solve 变为过去式 solved'],
        ['When will the API be released?', 'I would like to inquire when the API will be released.', 'will 移至 API 之后'],
        ['Why is the build failing?', 'Could you explain why the build is failing?', 'is 移至 the build 之后'],
      ],
    },
  ],
};
