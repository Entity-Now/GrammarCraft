import type { TopicContent } from '../../types';

export const thinkingDebugTopic: TopicContent = {
  meta: {
    id: 'thinking-debug',
    title: '中英思维差异与造句Debug',
    enTitle: 'Thinking Contrast & Syntax Debug',
    desc: '意合(JS)与形合(Rust/C#)底层类型系统对比、6大思维反差公理（左倾vs右倾、动词优势vs名词介词、物称客观视角）与全栈3步Debug法则',
    icon: '🧠',
    pillarId: 'syntax',
    badge: '思维跃迁核心',
  },
  diagrams: [
    {
      id: 'd-thinking-six-dimensions',
      title: '中英语言底层认知系统 6 维正交对照矩阵 (The 6-Dimensional Contrast)',
      desc: '打破中式逐字硬翻的根本所在：从意合流沙到强类型语法树的认知范式转移',
      code: `graph TD
    subgraph Chinese["🇨🇳 中文思维底层模式 (意合弱类型 · JS)"]
        C1["<b>1. 意合主导</b>: 靠语境意会，连词能省则省"]
        C2["<b>2. 严重左倾</b>: 所有修饰语全堆在中心词前面"]
        C3["<b>3. 主题优先</b>: 主语经常隐形省略 (如 吃了吗)"]
        C4["<b>4. 动词优势</b>: 动词成串连珠炮 (去开会讨论决定)"]
        C5["<b>5. 人称主观</b>: 习惯以 我/我们 开头 (我们发现...)"]
        C6["<b>6. 顺从提问</b>: 否定问句按 对方态度 回答 对/错"]
    end

    subgraph English["🇬🇧 英文思维底层模式 (形合强类型 · Rust/C#)"]
        E1["<b>1. 形合主导</b>: 严格依赖连词与语法树契约"]
        E2["<b>2. 坚决右倾</b>: 中心词率先确立，修饰向右无限展开"]
        E3["<b>3. 主语优先</b>: 语法主语必须显式在场 (It/They)"]
        E4["<b>4. 名词/介词优势</b>: 善用抽象名词与静态介词短语"]
        E5["<b>5. 物称客观</b>: 数据/日志直接当主语 (The logs show)"]
        E6["<b>6. 事实锚定</b>: 否定问句只看 客观事实 本身真假"]
    end

    Chinese <==>|思维范式翻转| English`,
      details: [
        {
          label: '1. 意合 (Parataxis) vs 形合 (Hypotaxis)',
          enPhrase: 'Because the server was overloaded, requests timed out.',
          zhMeaning: '中文靠意念并列拼凑；英文强类型要求句子必须有且仅有一个核心动词，其余分句必须显式使用连词粘合。',
          tag: '思维反差',
        },
        {
          label: '2. 左倾修饰 vs 右倾展开',
          enPhrase: 'The bug [which crashed the database yesterday]...',
          zhMeaning: '中文习惯长定语压在名词头上；英文必须中心词率先出场，通过分词、定语从句向右侧展开。',
          tag: '思维反差',
        },
        {
          label: '3. 动词串联 vs 名词化/介词化 (Nominalization)',
          enPhrase: 'Careful evaluation led to a consensus.',
          zhMeaning: '中文动词连珠炮（我们仔细评估了然后达成了共识）；英文倾向使用抽象名词（evaluation）与介词。',
          tag: '思维反差',
        },
        {
          label: '4. 人称主观 vs 物称客观 (Impersonal Perspective)',
          enPhrase: 'The telemetry metrics confirm that the memory leak is resolved.',
          zhMeaning: '中文爱说“我们测了之后发现……”；英文技术规范更推崇让客观指标（metrics/logs）直接做主语！',
          tag: '思维反差',
        },
      ],
    },
    {
      id: 'd-debug-flow',
      title: '全栈工程师 3 步造句 Debug 流水线 (The 3-Step Pipeline)',
      desc: '杜绝中文直译思维：从唯一主角、核心谓语到修饰参数后置解耦',
      code: `graph LR
    Step1["👤 <b>第 1 步: 锁定唯一主角</b><br/>Subject (主语)"]
    -->|驱动动作| Step2["⚡ <b>第 2 步: 提取单一核心谓语</b><br/>Finite Verb (谓语动词)"]
    -->|次要动作降维| Step3["🧩 <b>第 3 步: 非谓语降级</b><br/>to do / doing / done"]
    -->|修饰参数后置| Step4["📦 <b>第 4 步: 参数沉底</b><br/>Place / Manner / Time"]`,
      details: [
        {
          label: '第 1 步: 锁定唯一主角 (Subject)',
          enPhrase: 'Find the primary actor: I / The server / Clicking the button',
          zhMeaning: '明确谁在发起行为，杜绝中文思维中“没有主语直接出动作”的毛病。',
          tag: '造句第一步',
        },
        {
          label: '第 2 步: 提取核心动词 (Finite Verb)',
          enPhrase: 'Isolate one single tense-bearing verb: executes / validates',
          zhMeaning: '整句话只能有一个承担时态的正牌谓语动词，杜绝动词成串堆砌。',
          tag: '造句第二步',
        },
        {
          label: '第 3 步: 非谓语降级 (Demotion)',
          enPhrase: 'Demote secondary actions: to inspect / using C# / deployed yesterday',
          zhMeaning: '其余动作全部剥夺时态，通过不定式、分词或介词短语降维为小跟班。',
          tag: '造句第三步',
        },
        {
          label: '第 4 步: 参数后置沉底 (Modifiers)',
          enPhrase: 'Append location, manner, and time: in the cloud with TLS every day',
          zhMeaning: '地点、方式、时间状语统统挂在句尾，保持句子核心骨干轻盈明朗。',
          tag: '造句第四步',
        },
      ],
    },
  ],
  formulas: [
    {
      id: 'f-thinking-contrast',
      title: '中英语言底层类型系统对比公理',
      badge: '认知类比',
      formula: '中文思维 ≈ JavaScript (弱类型 / 意合 / 隐式省略主语) VS 英文思维 ≈ Rust/C# (强类型 / 形合 / 主谓宾严格契约)',
      desc: '中文依靠意念并列拼凑，主语常省略，动词成串堆砌；英文强类型契约要求句子骨架完整，一句话有且仅有一个核心谓语动词，其余动作必须通过 to do、doing、done 或介词降级！',
      beginnerTip: '【小白秒懂对照】中文说话讲意境，主语能省就省（比如“吃了吗？”“吃了”）；而英文说话像拼乐高积木，卡扣必须严丝合缝——必须先把主角（主语）摆出来，再把正牌动作（动词）卡上去。一句话里正牌主角动词只能有一个，多出来的动作只能加 to 或 ing 当小跟班！',
      tokens: [
        { label: '中文 (Parataxis)', role: '意合弱类型', color: 'amber', desc: '如：“今天很冷，不想出门”（无主语，双动词并列）' },
        { label: '英文 (Hypotaxis)', role: '形合强类型', color: 'emerald', desc: '如：“It is cold today, so I do not want to go out.”（补齐 It/I，连词粘合）' },
      ],
      example: {
        en: 'I write code in the office with C# every day.',
        zh: '我每天在办公室用 C# 写代码。',
      },
    },
    {
      id: 'f-impersonal-objective-formula',
      title: '物称客观视角技术报告万能公式 (Impersonal Reporting)',
      badge: '专业技术文风',
      formula: '【客观数据实体 (The log / metrics / result)】 + 【宣告动词 (indicates / demonstrates / shows)】 + 【that 从句】',
      desc: '中文工程师技术答辩和汇报时常习惯说“我们发现……”（We found...），听起来偏主观个人化；国际主流技术白皮书推崇“物称主语”，让客观事实（日志、指标、监控曲线）直接站出来替你说话！',
      beginnerTip: '【瞬间提升专业范儿】把开口闭口的 "We found that..." 换成 "The metrics indicate that..."（指标表明……）或 "The logs show that..."（日志证实……）。瞬间从“实习生日常自述”跃迁为“资深架构师权威报告”！',
      tokens: [
        { label: 'Objective Noun', role: '客观数据主体', color: 'blue', desc: 'The benchmark / The telemetry data / The trace' },
        { label: 'Indicating Verb', role: '权威宣告动词', color: 'purple', desc: 'indicates / confirms / demonstrates / reveals' },
        { label: 'that [Fact]', role: '事实陈述从句', color: 'emerald', desc: 'that CPU utilization dropped by 35%' },
      ],
      example: {
        en: 'The benchmark results demonstrate that the new caching layer halves response time.',
        zh: '基准测试结果表明，新的缓存层使响应时间缩短了一半。',
      },
    },
    {
      id: 'f-nominalization-formula',
      title: '动词链名词化降维公式 (Nominalization & Prepositioning)',
      badge: '高阶书面语法',
      formula: '动词 1 + 动词 2 + 动词 3 ➔ 提炼核心事件为【抽象名词 (Noun)】 + 挂载【介词短语 (Prep)】',
      desc: '中文喜欢动词连珠炮：“我们评估了这个方案，然后重构了代码，最后优化了性能”；英文将 evaluation, refactoring, optimization 提取为名词，使整句话从松散的动词流升级为凝练紧凑的学术架构。',
      beginnerTip: '【动词变名词大法】看到一串动词别慌着一个一个写！把动作变成名词：evaluate 变成 evaluation（评估），optimize 变成 optimization（优化）。一句话瞬间高级凝练！',
      tokens: [
        { label: 'Noun of Action', role: '动作名词化', color: 'blue', desc: 'The optimization / The adoption / The refactoring' },
        { label: 'of + Target', role: '介词宾格修饰', color: 'purple', desc: 'of the indexing strategy' },
        { label: 'Core Predicate', role: '单一核心驱动', color: 'emerald', desc: 'improved throughput significantly' },
      ],
      example: {
        en: 'Careful optimization of database indexes led to significant throughput improvements.',
        zh: '对数据库索引的细致优化带来了吞吐量的显著提升。',
      },
    },
    {
      id: 'f-debug-3steps',
      title: '3 步全栈 Debug 实战法则',
      badge: 'Debug 公式',
      formula: '1. 找唯一主角 (Who/What) ➔ 2. 找核心动作 (Verb) ➔ 3. 补充参数往句尾扔 (Modifiers)',
      desc: '写英文时，先锁定主干 S + V + O，把地点（in the office）、方式（with C#）、时间（every day）作为后置修饰参数挂载。',
      beginnerTip: '【造句三步小白法】写英文切忌按中文一个字一个字硬翻！只需三步：1. 先找主角是谁（Who/What）；2. 核心干了啥动作（Verb）；3. 至于在哪儿、怎么干的、几点干的，通通当作小尾巴甩在句子最后面！',
      example: {
        en: 'writeCode({ location: "office", tool: "C#", frequency: "daily" })',
        zh: '类似于函数参数解耦。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-debug-impersonal-demo',
      badge: '物称客观视角',
      type: 'Impersonal Perspective (物称视角)',
      title: '技术排障汇报：客观数据作为全句主语',
      desc: '避免个人主观“我们发现”，直接由 The telemetry data 担当主语发起客观判断。',
      formula: 'The data + confirms + that + [从句事件]',
      sentence: 'The telemetry metrics confirm that the memory leak was caused by unclosed sockets.',
      translation: '遥测指标证实了内存泄漏是由未关闭的套接字引起的。',
      parts: [
        { text: 'The telemetry metrics', role: '主语 (客观数据主体)', type: 'subject', detail: '遥测指标，非人称主语' },
        { text: 'confirm', role: '谓语动词 (复数)', type: 'verb', detail: '证实 · 权威宣告' },
        { text: 'that', role: '从句连词', type: 'linker', detail: '语法胶水' },
        { text: 'the memory leak was caused by unclosed sockets', role: '宾语从句事实', type: 'object', detail: '客观故障归因' },
      ],
      explanation: '在英文技术沟通中，使用物称主语（The logs / The data / The metrics）不仅消除主观色彩，而且直接开门见山展示论据，极具专业说服力。',
      beginnerAnalogy: '让数据和日志自己上法庭作证！不要老是说“我觉得/我们看到”，直接说“监控数据显示……”！',
      itAnalogy: 'telemetryService.verifyAssertion(isLeakResolved);',
    },
    {
      id: 'sk-debug-nominalization-demo',
      badge: '名词化静态表达',
      type: 'Nominalization (名词化凝练)',
      title: '静态架构表达：名词化替代松散动词流',
      desc: '将“执行迁移”和“提升速度”凝聚为 The migration 和 improvement，骨架高度精炼。',
      formula: 'The [名词化动作] + resulted in + [名词化结果]',
      sentence: 'The automated migration of legacy schemas resulted in a 50% reduction in query latency.',
      translation: '遗留数据库模式的自动化迁移带来了查询延迟降低 50% 的成果。',
      parts: [
        { text: 'The automated migration', role: '名词化动作主语', type: 'subject', detail: '由 migrate 变成 migration' },
        { text: '[of legacy schemas]', role: '介词短语修饰', type: 'adverbial', detail: '针对遗留模式' },
        { text: 'resulted in', role: '核心谓语动词短语', type: 'verb', detail: '导致了 / 带来了' },
        { text: 'a 50% reduction [in query latency]', role: '名词化结果宾语', type: 'object', detail: '由 reduce 变成 reduction' },
      ],
      explanation: '中文通常说“我们把模式自动迁移了，然后查询延迟降低了50%”（动词成串）；地道英文将其名词化为 The migration resulted in a reduction，结构稳固典雅。',
      beginnerAnalogy: '把两个小碎步动作打包成两座大楼（迁移 ➔ 降低），中间用“带来了（resulted in）”架一座桥！',
      itAnalogy: 'const outcome = MigrationPipeline.execute().toMetricsReport();',
    },
  ],
  compares: [
    {
      id: 'cmp-verb-stacking-trap',
      chinese: '我去办公室写代码用 C#。',
      wrong: 'I go office write code use C#.',
      correct: 'I go to the office to write code in C#.',
      formula: '一句话只能有一个主谓语，其余动作必须降级！',
      reason: '中文“去、写、用”连用三个动词；英文一山不容二虎，主谓语是 go，后面的 write 必须加 to 降级为不定式目的状语 (to write code)，用C#降级为介词短语 (in/with C#)。',
      beginnerAnalogy: '一辆火车只能有一个火车头！go 是火车头，后面的 write 必须挂上 to 当车厢，不能把三个车头硬拼在一块！',
      itAnalogy: '类比流水线管道：go().pipe(toWrite(code)).pipe(withLang("C#"));',
    },
    {
      id: 'cmp-negative-agreement-trap',
      chinese: '【中美逻辑死穴】问：“难道你没提交 PR 吗？” 答：“对啊，我没提交。”',
      wrong: 'Q: Didn’t you submit the PR? — A: Yes, I didn’t. (❌ 致命矛盾！)',
      correct: 'Q: Didn’t you submit the PR? — A: No, I didn’t. (✅ 英文严格事实一致)',
      formula: '只要事实是否定的，回答 100% 必须用 No！无论提问带不带 not！',
      reason: '中文回答顺应对方语气（“对啊，你说得对，我没提交”）；而英文的 Yes/No 严格锚定客观事实本身！如果你客观上没提交，必须说 "No, I didn\'t!"；如果你提交了，必须说 "Yes, I did!"！写成 *Yes, I didn\'t* 在老外听来等于“我提交了，我没提交”，逻辑直接宕机！',
      beginnerAnalogy: '英文的 Yes 永远代表“肯定做了”，No 永远代表“真的没做”。把对方提问里的 not 当作空气，摸着良心按客观事实回答！没做就说 No！',
    },
    {
      id: 'cmp-subject-omission-trap',
      chinese: '发现了内存泄漏，需要明天修复。',
      wrong: 'Found memory leak, need fix tomorrow.',
      correct: 'We detected a memory leak, which needs to be fixed tomorrow.',
      formula: '英文强制要求显式语法主语 (Subject-prominent)',
      reason: '中文是主题优先语言，经常省略主语；英文是主语优先强类型语言，句子开头必须确立谁发现了泄漏（We detected...），或者使用被动语态（A memory leak was detected...）。',
      beginnerAnalogy: '英文说话必须有主角，不能让动作在空中飘着！谁干的，必须报上名来！',
    },
  ],
  builders: [
    {
      id: 'b-debug-order-builder',
      title: '右倾解耦语序拼装实战',
      instruction: '将「我每天在办公室用 C# 编写核心微服务」组装为形合右倾结构：',
      words: ['I write core microservices', 'in the office', 'using C#', 'every single day.'],
      targetSentence: 'I write core microservices in the office using C# every single day.',
      explanation: '核心事件 I write microservices 率先确立，随后向右挂载地点、工具方式与时间参数。',
    },
  ],
  quizzes: [
    {
      id: 'q-negative-question-response',
      title: '中美否定逻辑判断自测',
      question: '在晨会上，敏捷教练问你：「Haven\'t you completed the code review yet?」。如果你实际上【已经完成了审查】，最地道且符合逻辑的回答是：',
      options: [
        { text: 'Yes, I have.', isCorrect: true, explanation: '正确！英文严格锚定客观事实：只要你已经完成了审查，回答必须是 Yes, I have！即使对方使用否定提问 Haven’t you，也绝不能说 No！' },
        { text: 'No, I haven’t.', isCorrect: false, explanation: '错误：回答 No 代表你“没有完成”。' },
        { text: 'Yes, I haven’t.', isCorrect: false, explanation: '错误：逻辑完全自相矛盾（又是 Yes 又是否定 haven’t），属于典型的中式英语严重错误。' },
      ],
    },
  ],
  tables: [
    {
      title: '中英语言底层 6 大思维范式反差速查表 (Thinking Paradigm Shift)',
      headers: ['思维维度', '🇨🇳 中文思维模式 (意合弱类型)', '🇬🇧 英文思维模式 (形合强契约)', '典型场景代码/文风类比'],
      rows: [
        ['1. 句法粘合机制', '意合 (Parataxis)：流水账靠意念串联，少连词', '形合 (Hypotaxis)：主从树结构，连词强约束', 'JS 弱类型宽松 VS Rust 强类型契约'],
        ['2. 空间展开方向', '严重左倾：大长定语状语全前置压垮中心词', '坚决右倾：核心名词率先确立，修饰向右延伸', '前置繁琐参数 VS 链式调用向右流式展开'],
        ['3. 语法骨架完整度', '主题优先：主语常常省略 (如 吃了吗/看过了)', '主语优先：语法主语强制在场 (I/It/They)', '缺少主角直接编译报错 (Missing Subject)'],
        ['4. 动词 vs 名词优势', '动词优势：动词成串连珠炮 (来做测试并上线)', '名词/介词优势：抽象名词化与静态介词凝练', '松散过程式代码 VS 面向对象封装与数据结构'],
        ['5. 视角客观性', '人称主观：习惯“我们发现/我认为……”', '物称客观：数据与日志直接当主语发言', '团队主观日记 VS 权威监控指标报警'],
        ['6. 否定问答逻辑', '顺应对方态度：“难道没宕机吗？—对，没宕机”', '锚定客观事实：“只要没宕机，回答必是 No！”', '语义混淆 Bug VS 严格布尔值求值 (True/False)'],
      ],
    },
  ],
};
