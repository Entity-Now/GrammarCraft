import type { TopicContent } from '../../types';

export const clauseConceptsTopic: TopicContent = {
  meta: {
    id: 'clause-concepts',
    title: '从句底层原理与三大帝国全景',
    enTitle: 'The Nature & Architecture of Clauses',
    desc: '从句的底层运转哲学：为什么英语要发明从句？单句如何降维封装为数据块与修饰器？名词性从句、定语从句与状语从句三大帝国全景解密',
    icon: '🌐',
    pillarId: 'syntax',
    badge: '从句基石',
  },
  diagrams: [
    {
      id: 'd-clause-three-empires',
      title: '从句三大帝国与词性角色映射模型 (The Clause Trinity)',
      desc: '从句本质上是“一个完整的句子降维扮演某种词性”：名词、形容词或副词',
      code: `graph TD
    Clause["🧩 <b>复合句从句本质 (A Clause as a Component)</b><br/>句子降维封装 · 嵌入主句插槽"]

    subgraph NounEmpire["📦 1. 名词性从句 (Noun Clauses)"]
        N1["充当名词数据实体 (Data Object)"]
        N2["占据主语、宾语、表语、同位语插槽"]
        N3["典型: <b>That he passed the test</b> is true."]
    end

    subgraph AdjEmpire["🎯 2. 定语从句 (Relative Clauses)"]
        A1["充当形容词修饰器 (Decorator / Modifier)"]
        A2["紧跟先行词右侧，向右展开限定描述"]
        A3["典型: The server <b>which runs Linux</b> crashed."]
    end

    subgraph AdvEmpire["⚙️ 3. 状语从句 (Adverbial Clauses)"]
        V1["充当副词时空环境 (Context / Middleware)"]
        V2["修饰主句谓语或全句的时间、条件、原因、让步"]
        V3["典型: <b>If CPU exceeds 90%</b>, trigger alert."]
    end

    Clause --> NounEmpire
    Clause --> AdjEmpire
    Clause --> AdvEmpire`,
      details: [
        {
          label: '1. 名词性从句 (Noun Clauses)',
          enPhrase: 'What we need is more telemetry data.',
          zhMeaning: '本质是“数据实体对象”，可作函数参数（宾语）、返回值（表语）或调用主体（主语）。',
          tag: '三大帝国',
        },
        {
          label: '2. 定语从句 (Relative Clauses)',
          enPhrase: 'The microservice which handles auth failed.',
          zhMeaning: '本质是“形容词扩展插件”，挂在特定名词后方，为名词打上专属描述标签。',
          tag: '三大帝国',
        },
        {
          label: '3. 状语从句 (Adverbial Clauses)',
          enPhrase: 'We rolled back the release because tests failed.',
          zhMeaning: '本质是“环境变量与触发器”，负责陈述动作发生的条件、时机、因果与让步逻辑。',
          tag: '三大帝国',
        },
      ],
    },
    {
      id: 'd-clause-packaging-pipeline',
      title: '从句降维封装 3 步流水线 (The Clause Packaging Pipeline)',
      desc: '如何把一个独立的完整简单句，通过引导词封装为可以嵌入主句的语法零件',
      code: `graph LR
    S1["1️⃣ <b>独立简单句 (Raw Sentence)</b><br/>The server crashed.<br/>(自成体系 · 独立完整)"]
    -->|添加引导词胶水| S2["2️⃣ <b>引导词封装 (Encapsulation)</b><br/><b>that / why / if</b> the server crashed<br/>(剥夺独立性 · 降维为从属模块)"]
    -->|嵌入主干插槽| S3["3️⃣ <b>主句插槽嵌入 (Integration)</b><br/>The log proves <b>[that...]</b><br/>(作为主语/宾语/表语/修饰语)"]`,
      details: [
        {
          label: '步骤 1: 独立简单句',
          enPhrase: 'The server crashed (一个完整的 SVO 独立判断)',
          zhMeaning: '拥有自己的主谓宾骨架，可以单独打句号成立。',
          tag: '流水线',
        },
        {
          label: '步骤 2: 引导词封装',
          enPhrase: 'that the server crashed / why the server crashed',
          zhMeaning: '加上连接词后，这个句子立刻失去独立成句资格，被打包成一个语法模块。',
          tag: '流水线',
        },
        {
          label: '步骤 3: 嵌入主句插槽',
          enPhrase: 'The engineer explained why the server crashed.',
          zhMeaning: '将封装好的从句作为宾语塞给 explained，构成严密的高阶主从复合句。',
          tag: '流水线',
        },
      ],
    },
  ],
  formulas: [
    {
      id: 'f-clause-essence',
      title: '从句底层运转第一公理 (The First Law of Clauses)',
      badge: '底层语法法则',
      formula: 'Main Clause (唯一正牌主句主谓) + [Connector (引导词胶水) + Subordinate Clause (从句主谓)]',
      desc: '英语语法核心契约：一句话有且仅有一个核心谓语动词！如果你想表达第二件事，不能像中文那样直接并列罗列动词，必须使用【引导词】将第二个句子降级封装为【从句】！',
      beginnerTip: '【小白秒懂从句本质】为什么英语要发明从句？中文说话喜欢顺着念：“我知道昨天那台服务器宕机了”（两个动词“知道”和“宕机”直接拼在一起）。但英文有严格的强类型契约：一句话里正牌主角动词只能有一个！你想在“知道（know）”后面再说一整件事（服务器宕机了），就必须用像胶水一样的连词（that），把后面的句子打包成一个小快递盒（从句），整整齐齐地塞给动词当宾语！',
      tokens: [
        { label: 'Main Clause', role: '主句独立程序', color: 'blue', desc: '拥有句子的核心最高控制权 (I know / The fact is)' },
        { label: 'Connector', role: '类型降级连接符', color: 'purple', desc: 'that / whether / which / who / because / although' },
        { label: 'Sub Clause', role: '从句嵌入子程序', color: 'emerald', desc: '封装在引导词后，充当数据对象或修饰插件' },
      ],
      example: {
        en: 'The monitoring dashboard indicates that network latency is increasing.',
        zh: '监控仪表盘显示网络延迟正在持续上升。',
      },
    },
    {
      id: 'f-three-connector-families',
      title: '从句引导词三大派系分类公式',
      badge: '选词决策',
      formula: '纯语法连接胶水 (that) VS 判定真假二选一 (whether/if) VS 疑问信息代副词 (what/where/how/who)',
      desc: '所有从句引导词根据其在从句内部是否有实际含义、是否充当语法成分，严格划分为三大阵营。',
      beginnerTip: '【小白秒懂口诀】选从句连词看三招：1. 只是平铺直叙陈述一件事？用纯胶水 that（无实际含义，不占座位）；2. 表示“是否 / 能不能”？用 whether 或 if（表示二选一）；3. 想表达“什么/在哪/如何/谁”？用对应的疑问词 what / where / how / who（有实际含义，在从句里还占座位）！',
      tokens: [
        { label: '1. 纯语法胶水 (that)', role: '零词义 · 不占位', color: 'blue', desc: '仅表示从属关系封装，在从句内不担任任何成分' },
        { label: '2. 二值判定词 (whether/if)', role: '“是否” · 不占位', color: 'purple', desc: '表达不确定性与布尔判断，在从句内不充当主宾成分' },
        { label: '3. 疑问信息词 (wh-)', role: '有词义 · 占主宾状', color: 'emerald', desc: 'what/who 做主宾，where/when/why/how 做状语' },
      ],
      example: {
        en: 'I know that you deployed the code, but I wonder why the pipeline failed.',
        zh: '我知道你部署了代码（that纯陈述），但我纳闷为什么流水线挂了（why充当原因状语）。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-clause-noun-role',
      badge: '名词从句解构',
      type: 'Noun Clause as Object',
      title: '从句充当及物动词的数据实体宾语',
      desc: '展示从句如何像一个 JSON 数据块一样作为及物动词的宾语被消费。',
      formula: 'S + V + that + [从句完整 SVO]',
      sentence: 'The telemetry log confirms that all cluster replicas are synchronized.',
      translation: '遥测日志证实了所有集群副本均已完成同步。',
      parts: [
        { text: 'The telemetry log', role: '主句主语', type: 'subject', detail: '遥测日志主体' },
        { text: 'confirms', role: '主句谓语', type: 'verb', detail: '证实 · 及物动词' },
        { text: 'that', role: '引导胶水', type: 'linker', detail: '纯语法标记，引导名词性从句' },
        { text: 'all cluster replicas', role: '从句主语', type: 'subject', detail: '所有集群副本' },
        { text: 'are', role: '从句系动词', type: 'linker', detail: '现在时复数' },
        { text: 'synchronized', role: '从句表语', type: 'predicative', detail: '同步完成状态' },
      ],
      explanation: 'that 后面的整个分句作为一个整体事件实体，回答了 confirms 之后“证实了什么”，语法地位等同于一个普通名词。',
      beginnerAnalogy: '就像方法调用：log.confirm(payload)。that 后面的整句话就是传进去的 payload！',
      itAnalogy: '类比事件监听器传递事件负载：channel.emit("status", { synced: true });',
    },
    {
      id: 'sk-clause-adj-role',
      badge: '定语从句解构',
      type: 'Relative Clause as Adjective',
      title: '从句充当先行词的名词修饰器',
      desc: '展示从句如何像一个形容词一样，挂在先行词右后方进行精确限定。',
      formula: 'Antecedent (先行词) + which / that + [修饰性从句]',
      sentence: 'We must identify the root cause that triggered the database deadlock.',
      translation: '我们必须查明引发数据库死锁的根本原因。',
      parts: [
        { text: 'We', role: '主句主语', type: 'subject', detail: '工程团队' },
        { text: 'must identify', role: '主句谓语', type: 'verb', detail: '必须查明' },
        { text: 'the root cause', role: '先行词 (中心名词)', type: 'object', detail: '根本原因' },
        { text: 'that', role: '关系代词 (指代 cause)', type: 'linker', detail: '在从句中充当主语！' },
        { text: 'triggered', role: '从句谓语', type: 'verb', detail: '触发 · 过去式' },
        { text: 'the database deadlock', role: '从句宾语', type: 'object', detail: '数据库死锁' },
      ],
      explanation: 'that triggered the deadlock 整句话都在修饰 the root cause。that 不仅是连词，它还代替了 the root cause 在从句内部充当 triggered 的主语！',
      beginnerAnalogy: '先行词 the root cause 就像一个手机，后面的 that triggered the deadlock 就像专门为这个手机定制的手机壳，向右紧贴着修饰它！',
      itAnalogy: '类比对象装饰器模式：const decoratedCause = withDeadlockTrigger(rootCause);',
    },
  ],
  compares: [
    {
      id: 'cmp-chinese-parataxis-vs-english',
      chinese: '我知道你很忙，但是这个服务器挂了，你需要赶紧重启一下。',
      wrong: 'I know you busy, but server down, you need restart quickly.',
      correct: 'I know that you are busy, but because the server is down, you must restart it immediately.',
      formula: '主干句 1 (that 从句) + but + 状语从句 (because...) + 主干句 2',
      reason: '中文是意合语言，没有连词也能靠语境意会；英文是形合强契约语言，动词之间必须使用 that、because 等连接词明确主从从属关系，且每个分句必须有完整的系词与动词。',
      beginnerAnalogy: '中文是散装拼图，意境到了就行；英文是咬合齿轮，齿轮之间必须有 chain（连词）链条咬合，否则程序就会语法编译报错！',
      itAnalogy: '强类型编译器报错：Error: Unexpected token. Expected conjunction before statement.',
    },
    {
      id: 'cmp-connector-redundancy',
      chinese: '【高频中式语病】因为……所以……（同时写 because 和 so）',
      wrong: 'Because the network was congested, so the packets were dropped.',
      correct: 'Because the network was congested, the packets were dropped. / The network was congested, so the packets were dropped.',
      formula: 'Because (从属从句) ... [逗号] 主句 (严禁加 so！)',
      reason: 'Because 已经把前一句降维为“从句”，主句就必须保留独立完整的身躯；如果再加上 So（并列连词），整句话就变成了两个并列连词互相缠绕，导致全句找不到独立主干！',
      beginnerAnalogy: '一山不容二虎！Because（从属连词）和 So（并列连词）二者只能选其一！用了 Because 就扔掉 So，用了 So 就扔掉 Because！',
    },
  ],
  builders: [
    {
      id: 'b-clause-packaging',
      title: '主从复合句封装实战',
      instruction: '将「日志显示 API 响应耗时过长」组装为合规的主从复合句：',
      words: ['The logs show', 'that', 'the API response', 'took', 'too long.'],
      targetSentence: 'The logs show that the API response took too long.',
      explanation: 'The logs show 为主句主干，that 充当语法胶水将 the API response took too long 封装为宾语从句。',
    },
  ],
  quizzes: [
    {
      id: 'q-clause-nature',
      title: '从句三大帝国属性辨析自测',
      question: '在句子「The cluster that we migrated last week is performing exceptionally well.」中，划线部分「that we migrated last week」属于什么从句？',
      options: [
        { text: '定语从句 (Relative Clause)', isCorrect: true, explanation: '正确！它紧跟先行词 The cluster 右侧，用来修饰限定是“哪一个集群”（我们上周迁移的那个集群），充当形容词修饰功能。' },
        { text: '宾语从句 (Object Clause)', isCorrect: false, explanation: '错误：它并没有跟在及物动词后面充当宾语，而是依附于名词 The cluster 之后充当修饰。' },
        { text: '状语从句 (Adverbial Clause)', isCorrect: false, explanation: '错误：它不是表达时间、条件或原因的环境从句，而是精准限定名词属性。' },
      ],
    },
  ],
  tables: [
    {
      title: '从句三大帝国核心职能与引导词对照矩阵 (Clause Grand Trinity Grid)',
      headers: ['从句帝国', '语法本质角色', '主句核心插槽', '常用引导连接词', '典型工程场景例句'],
      rows: [
        ['名词性从句 (Noun)', '充当名词数据实体 (Object)', '主语、宾语、表语、同位语', 'that, whether, if, what, how, why', 'The issue is that the port timed out.'],
        ['定语从句 (Relative)', '充当形容词修饰器 (Decorator)', '紧贴先行词（名词）右侧', 'that, which, who, whom, whose, where', 'The pod which exceeded memory was killed.'],
        ['状语从句 (Adverbial)', '充当副词时空环境 (Middleware)', '修饰全句的时间/条件/原因/让步', 'if, when, because, although, so that', 'Once the signal is received, execute sequence.'],
      ],
    },
  ],
};
