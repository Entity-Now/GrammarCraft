import type { TopicContent } from '../../types';

export const relativeClausesTopic: TopicContent = {
  meta: {
    id: 'relative-clauses',
    title: '定语从句与右倾修饰哲学',
    enTitle: 'Attributive & Relative Clauses',
    desc: '先行词锚定、关系代词（that/which/who/whose）与关系副词（where/when/why）选词图谱、限制性与非限制性逗号语义分水岭，以及介词前置高级工程表达',
    icon: '🎯',
    pillarId: 'syntax',
    badge: '修饰之王',
  },
  diagrams: [
    {
      id: 'd-relative-pronoun-matrix',
      title: '定语从句关系词选词二维拓扑决策树 (Relative Pronoun Matrix)',
      desc: '根据先行词属性（人/物/时空）与关系词在从句中承担的语法成分（主/宾/定/状）快速定词',
      code: `graph TD
    Antecedent["🎯 <b>先行词中心词 (Antecedent)</b><br/>The Noun to be Modified"]

    subgraph PersonGroup["👤 指人 (Person)"]
        P1["<b>who</b>: 充当从句主语 (The engineer <b>who</b> fixed it)"]
        P2["<b>whom / who</b>: 充当从句宾语 (The user <b>whom</b> we contacted)"]
        P3["<b>whose</b>: 充当所属关系定语 (The author <b>whose</b> PR merged)"]
    end

    subgraph ThingGroup["📦 指物 / 指系统 (Thing / Concept)"]
        T1["<b>which / that</b>: 充当从句主语或宾语 (The bug <b>which</b> broke auth)"]
        T2["<b>whose / of which</b>: 充当所属关系 (The cluster <b>whose</b> nodes failed)"]
    end

    subgraph AdverbGroup["📍 关系副词 (Adverbial Slots)"]
        ADV1["<b>where</b>: 空间地点状语 (in/at which)"]
        ADV2["<b>when</b>: 时间条件状语 (on/at which)"]
        ADV3["<b>why</b>: 原因状语 (for which)"]
    end

    Antecedent --> PersonGroup
    Antecedent --> ThingGroup
    Antecedent --> AdverbGroup`,
      details: [
        {
          label: '指人关系词 (Person)',
          enPhrase: 'The engineer who architected the service / The lead whom we report to',
          zhMeaning: 'who 做主语，whom 做宾语（口语常可用 who），whose 表示“谁的所属物”。',
          tag: '关系代词',
        },
        {
          label: '指物关系词 (Thing)',
          enPhrase: 'The microservice which handles billing / The database that stores logs',
          zhMeaning: 'which 与 that 通用于指物，在从句中充当主语或宾语。',
          tag: '关系代词',
        },
        {
          label: '关系副词 (where / when / why)',
          enPhrase: 'The directory where logs are kept / The day when the release occurred',
          zhMeaning: '在从句中充当状语，等于【介词 + which】（如 where = in which）。从句内部主谓宾齐全！',
          tag: '关系副词',
        },
      ],
    },
    {
      id: 'd-restrictive-vs-nonrestrictive',
      title: '限制性 vs 非限制性定语从句分水岭 (The Comma Watershed)',
      desc: '有没有逗号在逻辑上具有生死攸关的语义区别：必不可少的范围缩小 vs 可拆卸的背景补充',
      code: `graph TD
    subgraph Restrictive["🚫 限制性定语从句 (无逗号 No Comma)"]
        R1["<b>紧密结合 · 缩小范畴</b><br/>缺了它，读者根本不知道是哪个"]
        R2["<b>关系词允许使用 that</b>"]
        R3["例: The servers <b>which had bugs</b> were rebooted.<br/>(只有带Bug的那些服务器被重启了，其余没动)"]
    end

    subgraph NonRestrictive["💡 非限制性定语从句 (有逗号 With Comma)"]
        NR1["<b>松散注释 · 补充说明</b><br/>删掉从句，主干对象依然明确唯一"]
        NR2["<b>绝对禁止使用 that！</b>(只用 which/who)"]
        NR3["例: The servers, <b>which had bugs</b>, were rebooted.<br/>(所有服务器全都带Bug，而且全部被重启了！)"]
    end`,
      details: [
        {
          label: '无逗号（限制性 Restrictive）',
          enPhrase: 'The queries that take more than 2 seconds should be logged.',
          zhMeaning: '严格筛选：不是所有查询都要打日志，只有“耗时超2秒的”特定查询才打日志。',
          tag: '语义分水岭',
        },
        {
          label: '有逗号（非限制性 Non-restrictive）',
          enPhrase: 'Our primary database, which is hosted on AWS, remained stable.',
          zhMeaning: '补充注释：主数据库已经明确唯一，which 从句只是顺带交代一下背景，删掉不影响主旨。',
          tag: '语义分水岭',
        },
        {
          label: '黄金死律：逗号后绝不用 that',
          enPhrase: 'Our auth service, WHICH handles JWT, is down. (严禁用 that)',
          zhMeaning: '在逗号隔开的非限制性定语从句中，指物 100% 只能用 which，指人只能用 who！',
          tag: '语法铁律',
        },
      ],
    },
  ],
  formulas: [
    {
      id: 'f-relative-right-branching',
      title: '定语从句核心右倾展开公式 (Right-Branching Architecture)',
      badge: '中英思维质变',
      formula: '【核心先行词 Head Noun】 + [关系代词 (which / that / who) + 从句 (缺主语或宾语)]',
      desc: '打破中文“大长修饰前置”的左倾思维陷阱！英文无论修饰有多长，必须把核心名词率先摆出来，随后利用关系词像挂载插槽一样向右无限展开。',
      beginnerTip: '【小白秒懂右倾哲学】中文习惯把修饰全部堆在前面：“昨天在生产环境导致支付失败的那个极其致命的缺陷”。听的人听到最后才知道你在说“缺陷”。英文必须彻底翻转过来：先大声说出主角“The critical bug...”，再优雅地往右边挂挂件：“...which caused payment failures in production yesterday”！先主后次，层次清晰！',
      tokens: [
        { label: 'Head Noun', role: '先行词主角率先登场', color: 'blue', desc: 'The bug / The database / The engineer' },
        { label: 'Relative Pronoun', role: '关系代词桥梁', color: 'purple', desc: 'which / that / who / whose' },
        { label: 'Sub Clause', role: '向右展开修饰细节', color: 'emerald', desc: 'consumed all resources / was deployed yesterday' },
      ],
      example: {
        en: 'The microservice that handles user authentication experienced high latency.',
        zh: '负责处理用户身份认证的那个微服务出现了高延迟。',
      },
    },
    {
      id: 'f-omission-relative-object',
      title: '关系代词做宾语省略黄金法则 (Omission of Object Relative Pronoun)',
      badge: '地道表达秘笈',
      formula: '先行词 (名词) + [ (that / which / whom) 作宾语时可直接省略！] + 从句主语 + 从句谓语',
      desc: '当关系代词在从句中充当及物动词或介词的【宾语】时，英语习惯完全省略该关系词，形成极其利落的名词紧接主谓（Noun + S + V）的紧凑结构！',
      beginnerTip: '【小白秒懂口诀】看从句关系词后面有没有紧跟着别的人或物：如果从句后面已经有主语了（比如 the code [that] YOU wrote），that 在里面是当客体宾语的，直接把它删掉！说成 "The code you wrote" 瞬间地道十倍！但如果后面直接就是动词（the code that RUNS well），that 当主语，绝对不能删！',
      tokens: [
        { label: 'Antecedent', role: '中心词', color: 'blue', desc: 'The script / The solution / The patch' },
        { label: '[that/which] (省略)', role: '宾语关系代词', color: 'purple', desc: '口语和工程书面语中常规省略' },
        { label: 'Subject + Verb', role: '从句施动者与动作', color: 'emerald', desc: 'you proposed / we reviewed / they built' },
      ],
      example: {
        en: 'The optimization solution you proposed improved throughput by 40%.',
        zh: '你提出的优化方案使吞吐量提升了 40%。（省略了 that/which）',
      },
    },
    {
      id: 'f-prep-which-formal',
      title: '介词提前高级工程契约公式 (Preposition + Which/Whom)',
      badge: '技术文档高级表达',
      formula: '先行词 (名词) + 【介词 + which (指物) / whom (指人)】 + 完整从句 (从句介词消失)',
      desc: '口语常把介词甩在句尾（the server which the app runs on）；而在规范技术白皮书、架构文档中，必须将介词提至关系词前（the server ON WHICH the app runs），呈现出极高的结构对称度与学术美感。',
      beginnerTip: '【小白秒懂套路】看到 on which, in which, with which 别犯怵！把前面的先行词代入进去读：the server [on which the app runs] = the app runs on the server！就是把挂在屁股后面的 on 搬到了 which 前面！',
      tokens: [
        { label: 'Noun', role: '先行宿主', color: 'blue', desc: 'the machine / the protocol / the framework' },
        { label: 'Prep + which', role: '介词关系词复合体', color: 'purple', desc: 'on which / by which / with which / through which' },
        { label: 'Rest of Clause', role: '平稳陈述分句', color: 'emerald', desc: 'data is encrypted / nodes communicate' },
      ],
      example: {
        en: 'This is the secure channel through which telemetry packets are transmitted.',
        zh: '这就是用于传输遥测数据包的安全信道。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-rel-which-subject-demo',
      badge: 'Which 作主语解构',
      type: 'Which as Subject',
      title: '关系代词 which 充当从句主语修饰物',
      desc: '先行词为物 the query，which 充当从句中 consumes 的主语，修饰该查询的负荷特征。',
      formula: 'Antecedent (the query) + which + [Verb (consumes) + Object]',
      sentence: 'The SQL query which consumes excessive CPU cycles must be refactored.',
      translation: '消耗过多 CPU 周期的那个 SQL 查询必须进行重构。',
      parts: [
        { text: 'The SQL query', role: '主句主语 (先行词)', type: 'subject', detail: '核心中心词' },
        { text: 'which', role: '关系代词 (指代 query)', type: 'linker', detail: '在从句中充当主语！不可省略！' },
        { text: 'consumes', role: '从句谓语动词 (单三)', type: 'verb', detail: '消耗 · 与先行词单复数一致' },
        { text: 'excessive CPU cycles', role: '从句宾语', type: 'object', detail: '过量 CPU 资源' },
        { text: 'must be refactored', role: '主句谓语动词', type: 'verb', detail: '必须被重构' },
      ],
      explanation: 'which 兼具两个身份：一是连词连接主从句，二是替代 the SQL query 在从句中充当 consumes 的主语。因为 which 是主语，所以此处的 which 严禁省略！',
      beginnerAnalogy: '先行词 query 是主角，which 是它派去从句当“分身主语”的替身，所以千万不能把 which 删掉！',
      itAnalogy: 'const query = queries.filter(q => q.cpuUsage > THRESHOLD);',
    },
    {
      id: 'sk-rel-omitted-object-demo',
      badge: '关系代词作宾语省略',
      type: 'Omission of Relative Pronoun',
      title: '关系词作宾语省略：极简流畅的工程口语',
      desc: '先行词 the container image 之后，原本的 that/which 因作 deployed 的宾语被省略。',
      formula: 'Antecedent + [that/which (省略)] + [从句主语 (we) + 从句动词 (deployed)]',
      sentence: 'The container image we deployed yesterday passed all integration tests.',
      translation: '我们昨天部署的那个容器镜像通过了全部集成测试。',
      parts: [
        { text: 'The container image', role: '主句主语 (先行词)', type: 'subject', detail: '容器镜像中心词' },
        { text: '[ (that/which) ]', role: '省略的关系代词', type: 'linker', detail: '充当 deployed 的宾语，被省略' },
        { text: 'we', role: '从句主语', type: 'subject', detail: '我们 · 动作发起者' },
        { text: 'deployed', role: '从句及物动词', type: 'verb', detail: '部署 · 过去式' },
        { text: '[yesterday]', role: '从句时间状语', type: 'adverbial', detail: '昨天' },
        { text: 'passed all integration tests', role: '主句谓语与宾语', type: 'verb', detail: '通过了全部测试' },
      ],
      explanation: '原本完整结构为 The container image that we deployed yesterday...。在英文日常技术沟通中，几乎 90% 以上的情况都会省略做宾语的 that/which，表达极度清爽干练。',
      beginnerAnalogy: '中心词后面直接紧跟“人+动作”（the image we deployed），听起来非常顺口地道，不需要多念一个 that！',
      itAnalogy: 'const deployedImage = getDeployment("yesterday").image;',
    },
    {
      id: 'sk-rel-non-restrictive-demo',
      badge: '逗号非限制性定语从句',
      type: 'Non-restrictive Relative Clause',
      title: '逗号补充说明：绝对禁止使用 that',
      desc: '主句对象 Our production cluster 已经特定唯一，逗号后的从句仅作背景补充。',
      formula: '特定对象 + , + which / who (严禁 that) + 从句 + , + 主句其余部分',
      sentence: 'Our primary database, which runs on a high-memory bare-metal instance, handled the peak traffic effortlessly.',
      translation: '我们的主数据库（运行在高内存裸金属实例上）毫不费力地抗住了峰值流量。',
      parts: [
        { text: 'Our primary database,', role: '主句主语 (唯一已知实体)', type: 'subject', detail: '主数据库，含义明确' },
        { text: 'which', role: '关系代词 (严禁用 that！)', type: 'linker', detail: '逗号非限制性从句专属连词' },
        { text: 'runs on a bare-metal instance,', role: '非限制性补充从句', type: 'verb', detail: '补充说明硬件规格，删去不影响主旨' },
        { text: 'handled the peak traffic effortlessly', role: '主句谓语与宾语', type: 'verb', detail: '主句核心陈述动作' },
      ],
      explanation: '因为 Our primary database 已经明确指代唯一的主库，不需要靠从句去缩小范围（读者不会问“哪一个主库”）。从句就像代码里的行内注释 // runs on bare-metal，删掉后主句依然成立！逗号后 100% 严禁使用 that！',
      beginnerAnalogy: '就像人在说话时停顿了一下（打了逗号），顺便补充了一句背景：“顺便说一下，它可是跑在裸金属上的”。',
      itAnalogy: '类比可选的元数据注释：@Metadata(instance="bare-metal") class Database {}',
    },
    {
      id: 'sk-rel-prep-which-demo',
      badge: '介词提前高阶表达',
      type: 'Preposition + Which',
      title: '介词前置：规范典雅的架构表达',
      desc: '介词 in 与关系代词 which 绑定，共同引导定语从句，修饰抽象环境 the architecture。',
      formula: 'Antecedent + [in which / under which] + [从句完整 SVO]',
      sentence: 'We designed a modular architecture in which every service scales independently.',
      translation: '我们设计了一套模块化架构，在这一架构中，每个服务均可独立进行扩缩容。',
      parts: [
        { text: 'We designed a modular architecture', role: '完整主句', type: 'subject', detail: '设计了模块化架构' },
        { text: 'in which', role: '介词 + 关系代词', type: 'linker', detail: '等价于 where 或 in that architecture' },
        { text: 'every service', role: '从句主语', type: 'subject', detail: '每个微服务' },
        { text: 'scales', role: '从句动词 (单三)', type: 'verb', detail: '扩缩容' },
        { text: 'independently', role: '从句方式副词', type: 'adverbial', detail: '独立自主地' },
      ],
      explanation: '如果把 in 放在句尾（which every service scales independently in），读起来不仅拗口而且非正式。在技术方案设计文档中，in which, on which, with which 是展现专业架构师英语素养的利器。',
      beginnerAnalogy: 'in which 就像是“在其中（在这个架构里）”。把介词提到 which 前面，句子四平八稳。',
      itAnalogy: 'architecture.services.forEach(s => s.enableAutoscale());',
    },
  ],
  compares: [
    {
      id: 'cmp-comma-that-error',
      chinese: '我们的网关服务（负责处理所有传入流量）刚才发生重启了。',
      wrong: 'The API gateway, that handles all incoming traffic, just rebooted.',
      correct: 'The API gateway, which handles all incoming traffic, just rebooted.',
      formula: '有逗号 ( , ) 的定语从句中，指物只能用 which，严禁用 that！',
      reason: 'that 不能引导非限制性定语从句（即逗号隔开的从句）！在现代英语语法中，逗号后面指物必须使用 which，指人必须使用 who。',
      beginnerAnalogy: '记住口诀：“见逗号，扔掉 that，换 which 或 who！” 逗号后面见 that 是语法死刑！',
      itAnalogy: 'Linter 报错：ESLint / TS Error: "that" cannot be used in a non-restrictive relative clause.',
    },
    {
      id: 'cmp-subject-relative-omission-error',
      chinese: '每五分钟执行一次的脚本挂了。',
      wrong: 'The script executes every five minutes is broken.',
      correct: 'The script that/which executes every five minutes is broken.',
      formula: '关系代词做从句【主语】时，绝对不可省略！',
      reason: '如果你把 which/that 删掉，全句就变成了 The script (名词) + executes (动词) + is broken (动词)，一句话出现了两个核心谓语动词，直接违反了英语简单句契约！只有当关系代词做宾语时才可以省略。',
      beginnerAnalogy: 'which 当从句的主角（主语），主角怎么能无故缺席呢？如果删掉，句子就有了两个动词打架了！',
    },
    {
      id: 'cmp-where-vs-which-trap',
      chinese: '我们上周参观的数据中心非常先进。',
      wrong: 'The datacenter where we visited last week is very advanced.',
      correct: 'The datacenter which/that we visited last week is very advanced.',
      formula: '先行词虽是地点，但若从句动词是及物动词（缺宾语），必须用 which/that，不可用 where！',
      reason: 'where 是关系副词，在从句中只能充当地点状语（表示“在某地”）。而 visit 是及物动词（visit somewhere），从句缺少 visited 的宾语！因此必须用充当宾语的关系代词 which/that！只有当从句不缺主宾时（如 the datacenter where we host our servers）才用 where。',
      beginnerAnalogy: '别一看到地点名词（datacenter/room/city）就闭着眼睛选 where！看后面的动词：visit the datacenter（缺宾语），选 which！live in the datacenter（不缺宾语，缺在里面的介词），才选 where！',
    },
  ],
  builders: [
    {
      id: 'b-relative-clause-builder',
      title: '拼装定语从句',
      instruction: '组装工程规范句：「导致内存溢出的那个补丁已被撤回」',
      words: ['The patch', 'which caused', 'the memory leak', 'has been', 'reverted.'],
      targetSentence: 'The patch which caused the memory leak has been reverted.',
      explanation: 'The patch 为先行词，which 引导定语从句修饰 patch，在从句中作 caused 的主语。',
    },
    {
      id: 'b-prep-which-builder',
      title: '拼装介词提前定语从句',
      instruction: '组装高级技术架构描述句：「这就是微服务所运行在其上的 Kubernetes 集群」',
      words: ['This is the cluster', 'on which', 'our microservices', 'run seamlessly.'],
      targetSentence: 'This is the cluster on which our microservices run seamlessly.',
      explanation: 'cluster 为先行词，on which 提前引导定语从句，从句内部恢复平稳陈述。',
    },
  ],
  quizzes: [
    {
      id: 'q-relative-pronoun-choice',
      title: '关系代词精准决策挑战',
      question: '在技术规范句子「All developers ________ pull requests have been approved can merge to main.」中，横线上应填入：',
      options: [
        { text: 'whose', isCorrect: true, explanation: '正确！pull requests 属于 developers 的所有物（developers\' pull requests），表示“其 PR 已经被批准的开发者”，必须使用所属格关系代词 whose！' },
        { text: 'who', isCorrect: false, explanation: '错误：who 只能作主语或宾语，无法修饰后方的名词 pull requests 表达所属关系。' },
        { text: 'which', isCorrect: false, explanation: '错误：先行词是开发者（developers，人），不可用 which。' },
        { text: 'that', isCorrect: false, explanation: '错误：that 无法表达所属关系（不能替代 whose）。' },
      ],
    },
    {
      id: 'q-where-vs-which-quiz',
      title: '关系副词 where vs which 实战诊断',
      question: '请在横线上填入正确连词：\\n"This is the cloud storage bucket ________ we store our nightly database snapshots."',
      options: [
        { text: 'where (或 in which)', isCorrect: true, explanation: '正确！从句 we store snapshots 主谓宾完全自洽（we是主语，store是动词，snapshots是宾语），从句缺少的是地点状语（in the bucket），因此必须使用关系副词 where 或 in which！' },
        { text: 'which (单独使用)', isCorrect: false, explanation: '错误：从句不缺主语也不缺宾语，单独使用 which 会导致 which 在从句中无成分可充当。' },
        { text: 'that (单独使用)', isCorrect: false, explanation: '错误：that 作为关系代词必须在从句中充当主语或宾语，此处从句主谓宾齐全。' },
      ],
    },
  ],
  tables: [
    {
      title: '定语从句关系代词与关系副词全景选词矩阵表 (Relative Words Matrix)',
      headers: ['先行词性质', '从句成分：作主语', '从句成分：作宾语', '从句成分：作定语(所有格)', '从句成分：作状语'],
      rows: [
        ['指人 (Person)', 'who / that (不可省)', 'whom / who / that (可省)', 'whose (谁的)', '—'],
        ['指物 (Thing)', 'which / that (不可省)', 'which / that (可省)', 'whose / of which', '—'],
        ['时间概念 (Time)', 'which / that (缺主语时)', 'which / that (缺宾语时)', '—', 'when (= prep + which)'],
        ['空间地点 (Place)', 'which / that (缺主语时)', 'which / that (缺宾语时)', '—', 'where (= in/at which)'],
        ['原因概念 (Reason)', 'which / that (缺主语时)', 'which / that (缺宾语时)', '—', 'why (= for which)'],
      ],
    },
    {
      title: '限制性 vs 非限制性定语从句 5 维全面对比速查表',
      headers: ['对比维度', '限制性定语从句 (Restrictive)', '非限制性定语从句 (Non-restrictive)'],
      rows: [
        ['标点符号', '无逗号，紧贴先行词', '有逗号隔开 ( , ... , )'],
        ['语义功能', '核心限定，缩小先行词特定范围', '补充说明，提供背景附加信息'],
        ['能否省略', '不可删去，删去后主句意义残缺不全', '可以删去，删去后主句依然独立自洽完整'],
        ['that 能否使用', '可以使用 that（且经常优先使用）', '绝对禁止使用 that！必须用 which 或 who'],
        ['工程语义差异', 'The pods which crashed were restarted (仅重启宕机的)', 'The pods, which crashed, were restarted (全部都宕机且全重启)'],
      ],
    },
  ],
};
