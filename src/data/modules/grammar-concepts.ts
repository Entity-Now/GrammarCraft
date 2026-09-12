import type { TopicContent } from '../../types';

export const grammarConceptsTopic: TopicContent = {
  meta: {
    id: 'grammar-concepts',
    title: '英语核心语法概念与术语大典',
    enTitle: 'Core Grammar Concepts & Terminology Glossary',
    desc: '英语小白第一页必读：零基础彻底搞懂 Be动词、谓语动词、现在与过去分词、动词不定式、名词短语、非谓语动词及句子八大成分的本质与作用',
    icon: '📖',
    pillarId: 'basics',
    badge: '第一页 · 新手通识底座',
  },
  diagrams: [
    {
      id: 'd-grammar-hierarchy',
      title: '英语语言结构四层金字塔 (The 4-Tier Linguistic Architecture)',
      desc: '从微观砖块到宏观大厦：搞懂单词、短语、从句与句子的嵌套包含关系',
      code: `graph TD
    subgraph Tier4["🏛️ 4. 完整句子 (Sentence)"]
        S1["能独立表达完整意义 · 首字母大写 · 句末有标点"]
        S2["必须拥有完整的 <b>主语 + 谓语动词</b> 核心骨架"]
    end

    subgraph Tier3["🌐 3. 从句 (Clause)"]
        C1["自带主谓结构，但降维充当主句的一个零部件"]
        C2["三大从句帝国: <b>名词性从句</b> / <b>定语从句</b> / <b>状语从句</b>"]
    end

    subgraph Tier2["📦 2. 短语 (Phrase)"]
        P1["多个单词构成的语义积木团伙 · <b>无独立主谓</b>"]
        P2["两大支柱: <b>名词短语 (NP)</b> · <b>介词短语 (PP)</b> · 非谓语短语"]
    end

    subgraph Tier1["🧱 1. 词汇与词性 (Parts of Speech)"]
        W1["最小语法原子: 名词(n.) · 动词(v.) · 形容词(adj.) · 副词(adv.) · 介词(prep.) · 连词(conj.)"]
    end

    Tier1 -->|组合成| Tier2
    Tier2 -->|嵌套入| Tier3
    Tier3 -->|组装入| Tier4`,
      details: [
        {
          label: '1. 词汇 (Word & Part of Speech)',
          enPhrase: 'server (n.), crash (v.), fast (adj.), quickly (adv.)',
          zhMeaning: '最小语法元素。每个单词出厂自带词性标签，决定它能充当什么句子角色。',
          tag: '微观原子',
        },
        {
          label: '2. 短语 (Phrase)',
          enPhrase: 'the newly deployed server (名词短语), in the cloud (介词短语)',
          zhMeaning: '由几个词捆绑形成的语义大礼包，内部绝对没有独立的一套主语+谓语。',
          tag: '功能积木',
        },
        {
          label: '3. 从句 (Clause)',
          enPhrase: 'which was configured yesterday (定语从句修饰服务器)',
          zhMeaning: '自身有主有谓，但不是独立句子，而是作为形容词、名词或副词嵌入在主句中。',
          tag: '嵌入式模块',
        },
        {
          label: '4. 句子 (Sentence)',
          enPhrase: 'The server crashed because the memory was exhausted.',
          zhMeaning: '顶层独立程序。包含完整主谓，以句号/问号/叹号收尾，表达完整独立的思想。',
          tag: '完整大厦',
        },
      ],
    },
    {
      id: 'd-verbs-four-kingdoms',
      title: '动词家族四大金刚分工图 (The 4 Classes of Verbs)',
      desc: '英语句子的发动机全家谱：实义动词、系动词、助动词与情态动词',
      code: `graph TD
    Verb["⚡ <b>动词家族 (Verbs)</b><br/>英语句子的唯一核心驱动引擎"]

    subgraph Action["1. 实义动词 (Action / Lexical)"]
        A1["具备具体动作含义 · run, build, deploy"]
        A2["<b>及物 (Vt)</b>: 直击宾语 (delete file)<br/><b>不及物 (Vi)</b>: 独立发生，需借介词 (listen to)"]
    end

    subgraph Linking["2. 系动词 (Linking Verbs)"]
        L1["无剧烈动作 · 相当于数学等号 (=)"]
        L2["连接主语与后面的特征/身份 (表语)<br/>be, look, seem, become"]
    end

    subgraph Aux["3. 助动词 (Auxiliary Verbs)"]
        X1["语法工具人 · 无独立词义"]
        X2["辅助构成疑问、否定、时态与被动<br/><b>do/does/did</b> · <b>be</b> · <b>have/has</b>"]
    end

    subgraph Modal["4. 情态动词 (Modal Verbs)"]
        M1["表达说话人的情绪、能力、概率与许可"]
        M2["无人称变化 · 后方强制接动词原形<br/>can, may, must, should, will"]
    end

    Verb --> Action
    Verb --> Linking
    Verb --> Aux
    Verb --> Modal`,
      details: [
        {
          label: '1. 实义动词 (Action Verb)',
          enPhrase: 'The compiler optimizes the bytecode.',
          zhMeaning: '有具体动作含义（优化、构建、点击）。是真实世界业务逻辑的执行者。',
          tag: '动作执行',
        },
        {
          label: '2. 系动词 (Linking Verb)',
          enPhrase: 'The cluster status remains healthy.',
          zhMeaning: '连接主语和状态特征（保持健康），系动词本身并不执行剧烈物理位移。',
          tag: '状态等号',
        },
        {
          label: '3. 助动词 (Auxiliary Verb)',
          enPhrase: 'Do you want to retry? / The file was deleted.',
          zhMeaning: '语法救火队长：实义动词无法直接倒装造句时，由 do/does/did 代理时态与问号。',
          tag: '工具助手',
        },
        {
          label: '4. 情态动词 (Modal Verb)',
          enPhrase: 'You must backup the database before migration.',
          zhMeaning: '附加主观态度与约束力（必须、能够、应该）。后接动词必须还原为裸原形。',
          tag: '语气态度',
        },
      ],
    },
    {
      id: 'd-predicate-vs-nonfinite',
      title: '终极分水岭：谓语动词 vs 非谓语动词三大分身',
      desc: '一山不容二虎：一句话只能有一个心脏谓语！其余动词必须降级为三大分身',
      code: `graph TD
    VCore["🔥 <b>动词的双重宇宙</b>"]

    subgraph Predicate["1. 谓语动词 (Finite Verb) · 核心心脏"]
        P1["受主语人称 (单复数) 与时间 (时态) 严格约束"]
        P2["<b>绝对铁律</b>: 一个简单句有且仅有一个谓语动词!"]
        P3["例: The service <b>runs</b> on port 8080."]
    end

    subgraph NonFinite["2. 非谓语动词 (Non-finite Verbs) · 动词的三大分身"]
        subgraph Inf["① 不定式 (Infinitive: to do)"]
            I1["倾向于 <b>未来未发生</b> · <b>目的 (In order to)</b>"]
            I2["例: Click here <b>to restart</b>."]
        end
        subgraph Participle["② 分词 (Participles: -ing / -ed)"]
            PA1["<b>现在分词 (-ing)</b>: 主动进行 (running code)"]
            PA2["<b>过去分词 (-ed)</b>: 被动完成 (corrupted data)"]
        end
        subgraph Gerund["③ 动名词 (Gerund: -ing)"]
            G1["将动作彻底 <b>固化为事物名词</b>"]
            G2["例: <b>Refactoring</b> takes time."]
        end
    end

    VCore --> Predicate
    VCore --> NonFinite`,
      details: [
        {
          label: '1. 谓语动词 (Finite Verb)',
          enPhrase: 'The engineer deploys the latest hotfix.',
          zhMeaning: '受第三人称单数与现在时约束（deploys），充当全句核心动力引擎。',
          tag: '核心心脏',
        },
        {
          label: '2. 动词不定式 (to + do)',
          enPhrase: 'We wrote a script to automate tests.',
          zhMeaning: '表目的（为了自动化测试）。不受主语人称单三限制，充当目的状语。',
          tag: '未来与目的',
        },
        {
          label: '3. 现在分词 (-ing)',
          enPhrase: 'I saw a warning flashing on the dashboard.',
          zhMeaning: '正在闪烁的警告（flashing），主动且正在进行，作宾语补足语或定语。',
          tag: '主动与进行',
        },
        {
          label: '4. 过去分词 (-ed / V3)',
          enPhrase: 'The payload encrypted by AES was safely stored.',
          zhMeaning: '被 AES 加密的载荷（encrypted），被动且已完成，作后置定语修饰 payload。',
          tag: '被动与完成',
        },
      ],
    },
    {
      id: 'd-eight-components',
      title: '英语句子八大成分戏班分工图 (The 8 Sentence Roles)',
      desc: '各司其职的句子演员：谁当主角？谁当动作？谁当背景环境？',
      code: `graph LR
    subgraph Core["🎭 核心主角团"]
        S["<b>主语 (Subject)</b><br/>动作发起者 / 讨论主体"]
        V["<b>谓语 (Predicate)</b><br/>核心动作 / 存在状态"]
        O["<b>宾语 (Object)</b><br/>动作承受者 (及物动词后)"]
        P["<b>表语 (Predicative)</b><br/>说明主语身份 (系动词后)"]
    end

    subgraph Modifier["🎨 修饰与环境组"]
        Attr["<b>定语 (Attributive)</b><br/>修饰名词 (哪一个/什么样的)"]
        Adv["<b>状语 (Adverbial)</b><br/>修饰动词或全句 (何时/何地/为何/如何)"]
        C["<b>补语 (Complement)</b><br/>补充宾语状态 (令其完整)"]
        App["<b>同位语 (Appositive)</b><br/>紧跟名词的等价重命名解释"]
    end

    S --> V
    V --> O
    V --> P
    Attr -.->|贴标签| S
    Attr -.->|贴标签| O
    Adv -.->|提供时空环境| V
    C -.->|补充结果状态| O`,
      details: [
        {
          label: '主语 + 谓语 + 宾语',
          enPhrase: 'The worker thread (S) consumed (V) the message (O).',
          zhMeaning: '主语发起动作，谓语表达动作，宾语承担动作结果。',
          tag: '黄金三角',
        },
        {
          label: '主语 + 系动词 + 表语',
          enPhrase: 'The gateway (S) is (系) unresponsive (P).',
          zhMeaning: '网关处于无响应状态。表语说明主语的性质特征。',
          tag: '状态等号',
        },
        {
          label: '定语 (修饰名词)',
          enPhrase: 'The [critical] issue [in the payment module]...',
          zhMeaning: 'critical 是前置形容词定语，in the payment module 是后置介词短语定语。',
          tag: '名词修饰',
        },
        {
          label: '状语 (时空环境)',
          enPhrase: 'The cron job runs [automatically] [at midnight].',
          zhMeaning: 'automatically 是方式状语，at midnight 是时间状语，修饰动作 runs。',
          tag: '环境修饰',
        },
      ],
    },
  ],
  formulas: [
    {
      id: 'f-noun-phrase',
      title: '名词短语 (Noun Phrase, NP) 工业组装流水线',
      formula: '[限定词 Det] + [前置形容词 Mod] + 核心名词 (Head) + [后置定语短语/从句 Post-Mod]',
      desc: '名词短语就像一个封装好的信息大礼包：以一个核心名词为基石，前后搭配修饰语，在句中作为一个整体充当主语、宾语或表语。',
      coreMeaning: '核心名词率先锚定，前有定冠词限定，后有介词短语向右无限扩展信息',
      beginnerTip: '小白口诀：别把“名词短语”想得太难，它其实就是“被修饰语层层打扮过的一个核心名词”（比如 “我的那只戴着红帽子的猫” 整体就是一个名词短语）。',
      tokens: [
        { label: 'The', role: '限定词 (Determiner)', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' },
        { label: 'critical', role: '前置形容词 (Adjective)', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300' },
        { label: 'bug', role: '核心名词 (Head Noun)', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' },
        { label: 'in production', role: '后置介词短语 (Post-Modifier)', color: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300' },
      ],
      example: {
        en: 'The critical bug in production was fixed by Alice.',
        zh: '生产环境中的那个严重缺陷被爱丽丝修复了。（整句主语就是这个名词短语）',
      },
    },
    {
      id: 'f-prep-phrase',
      title: '介词短语 (Prepositional Phrase, PP) 绑定契约',
      formula: '介词 (Preposition) + 介词宾语 (Noun / Pronoun / Gerund)',
      desc: '介词永远不能单打独斗！它必须拖拽一个名词、代词或动名词作为宾语，组合成为介词短语。充当定语（修饰名词）或状语（修饰动作）。',
      coreMeaning: '介词作为关系胶水，必须带上名词宾语才能指引时间、空间或方式',
      beginnerTip: '小白口诀：介词就像插头，必须插在名词插座上！单独写个 on 或 in 毫无意义，必须是 on the desk、in the cloud、by clicking。',
      tokens: [
        { label: 'on', role: '介词 (Prep)', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300' },
        { label: 'the Linux server', role: '介词宾语 (Noun Phrase)', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' },
      ],
      example: {
        en: 'The logs on the Linux server show high latency.',
        zh: 'Linux 服务器上的日志（on the Linux server 作后置定语修饰 logs）显示高延迟。',
      },
    },
    {
      id: 'f-infinitive',
      title: '动词不定式 (Infinitive) 目的与未来公式',
      formula: 'to + 动词原形 (Bare Base Form)',
      desc: '为什么叫“不定式”？因为它在句中充当的成分“不固定”（可做主、宾、表、定、状），且不受主语人称和时间的限定。天生自带“未来未做、意图、目的”属性。',
      coreMeaning: '动词前加 to，解除时态人称绑定，化身兼具动词特性的目的或意向载体',
      beginnerTip: '小白口诀：只要看到 to do，90% 都是在讲“打算去做某事”或者“为了达到某个目的”。',
      tokens: [
        { label: 'to', role: '不定式符号 (Marker)', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' },
        { label: 'optimize', role: '动词原形 (Base Verb)', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' },
        { label: 'the query performance', role: '不定式自带的宾语', color: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200' },
      ],
      example: {
        en: 'We added an index to optimize the query performance.',
        zh: '我们添加了索引，目的是优化查询性能。（to optimize... 作目的状语）',
      },
    },
    {
      id: 'f-participles',
      title: '分词双雄 (Participles) 主动与被动对照公式',
      formula: '现在分词 V-ing (主动/进行)  VS  过去分词 V-ed (被动/完成)',
      desc: '动词派生的分身形容词：现在分词强调内部正在发生且主动发出；过去分词强调承受动作、处于被动或已经完结的状态。',
      coreMeaning: '主动进行用 -ing，被动承受用 -ed，是英语后置修饰名词的最高频武器',
      beginnerTip: '小白口诀：主动态用 ing（代码正在运行 running code）；被动态用 ed（数据被损坏了 corrupted data）。',
      tokens: [
        { label: 'The node', role: '中心名词 (Head Noun)', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300' },
        { label: 'handling the traffic', role: '现在分词短语 (主动处理中)', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' },
        { label: 'VS', role: '对比', color: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200' },
        { label: 'The node', role: '中心名词 (Head Noun)', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300' },
        { label: 'rebooted by the system', role: '过去分词短语 (被动被重启)', color: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300' },
      ],
      example: {
        en: 'Look at the data streaming into Kafka vs the data archived in S3.',
        zh: '看看正流向 Kafka 的数据（主动进行）对比被归档在 S3 里的数据（被动完成）。',
      },
    },
    {
      id: 'f-predicate-iron-rule',
      title: '谓语动词 (Predicate Verb) 绝对主权铁律',
      formula: '1 句子 = 1 受约束的谓语动词 (One Sentence = One Finite Verb)',
      desc: '任何合法的英语简单句，有且必须只有一个带时态的谓语动词。若想加入第二个动作，必须：①使用并列连词 (and/but)；②升级为从句；③降级为非谓语动词 (to do / doing / done)！',
      coreMeaning: '一山不容二虎，严禁两个谓语动词无连词直接并排冲撞',
      beginnerTip: '小白口诀：英语一句话只有一个“正牌老公”（谓语动词），其他动词想要进门，必须穿上伪装衣（变成 to do、doing 或 done）！',
      tokens: [
        { label: 'The server (S)', role: '主语', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300' },
        { label: 'crashed (V)', role: '唯一正牌谓语动词', color: 'bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300' },
        { label: ',', role: '逗号', color: 'bg-zinc-100 text-zinc-500' },
        { label: 'causing data loss (Non-finite)', role: '非谓语分词伴随状语', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' },
      ],
      example: {
        en: 'The server crashed, causing data loss. (NOT: *The server crashed caused data loss)',
        zh: '服务器宕机了，伴随导致了数据丢失。（causing 为非谓语分词，绝不可写两个谓语）',
      },
    },
  ],
  skeletons: [
    {
      id: 's-concept-transitive-obj',
      title: '成分解构 1：主语 + 谓语(及物动词) + 宾语(名词短语)',
      type: '主谓宾 (S + Vt + O)',
      badge: '经典动作模型',
      desc: '及物动词必须有动作承受者；宾语由一个包含后置修饰的名词短语充当',
      formula: 'Subject + Verb (Transitive) + Object (Noun Phrase)',
      sentence: 'The developer deployed the new microservice to production.',
      translation: '开发者将新的微服务部署到了生产环境中。',
      parts: [
        { text: 'The developer', role: '主语 (S) · 动作发起者', type: 'subject' },
        { text: 'deployed', role: '谓语动词 (Vt) · 核心动作', type: 'verb' },
        { text: 'the new microservice', role: '宾语 (O) · 动作承受者 (名词短语)', type: 'object' },
        { text: 'to production', role: '地点状语 (Adv) · 介词短语', type: 'adverbial' },
      ],
      explanation: 'deployed 是及物动词，后面必须紧跟宾语 the new microservice；to production 是介词短语作状语指明方向。',
      beginnerAnalogy: '就像“张三 (主语) 吃了 (及物动词) 一个香甜的苹果 (名词短语宾语) 在厨房里 (状语)”。',
      itAnalogy: '类似于调用一个带有参数的方法：Developer.Deploy(microservice, destination: Production)。',
    },
    {
      id: 's-concept-linking-pred',
      title: '成分解构 2：主语 + 系动词(Be) + 表语(说明特征与状态)',
      type: '主系表 (S + Linker + Predicative)',
      badge: '等号状态模型',
      desc: 'Be 动词作为系动词，本身没有剧烈物理动作，只负责连接主语与后面的形容词表语',
      formula: 'Subject + Be Verb (Linker) + Predicative (Adjective/State)',
      sentence: 'The database connection is unstable during peak hours.',
      translation: '数据库连接在高峰时段是不稳定的。',
      parts: [
        { text: 'The database connection', role: '主语 (S) · 名词短语', type: 'subject' },
        { text: 'is', role: '系动词 (Linker) · 状态等号', type: 'linker' },
        { text: 'unstable', role: '表语 (P) · 说明主语性质的形容词', type: 'predicative' },
        { text: 'during peak hours', role: '时间状语 (Adv) · 介词短语', type: 'adverbial' },
      ],
      explanation: 'is 是 Be 动词，起连接作用；unstable 是表语，贴在主语身上的状态标签；during peak hours 是时间背景状语。',
      beginnerAnalogy: '相当于数学等号：数据库连接 = 不稳定。',
      itAnalogy: '等同于属性读取断言：databaseConnection.Status == Status.Unstable。',
    },
    {
      id: 's-concept-participle-modifier',
      title: '成分解构 3：现在分词短语作后置定语修饰名词',
      type: '后置定语修饰 (Post-Attributive)',
      badge: '非谓语分身',
      desc: '现在分词短语 handling incoming requests 紧随名词之后，充当形容词定语',
      formula: 'Subject [Noun + V-ing Phrase] + Main Verb + Object',
      sentence: 'The pod handling incoming requests restarted unexpectedly.',
      translation: '正在处理传入请求的那个 Pod 意外重启了。',
      parts: [
        { text: 'The pod', role: '主语核心名词 (Head Noun)', type: 'subject' },
        { text: 'handling incoming requests', role: '后置定语 (Attr) · 现在分词短语 (主动进行)', type: 'subject' },
        { text: 'restarted', role: '真正的主句谓语动词 (V)', type: 'verb' },
        { text: 'unexpectedly', role: '方式副词状语 (Adv)', type: 'adverbial' },
      ],
      explanation: '这句话真正的谓语动词是 restarted！handling 是非谓语现在分词，只是用来修饰 The pod 的帽子。',
      beginnerAnalogy: '“那个【戴着眼镜的】男孩跑了”——真正的动作是“跑了”，【戴着眼镜的】只是修饰帽子。',
      itAnalogy: '相当于给实体对象注入一个内联过滤器：pods.Where(p => p.IsHandling(requests)).Restart()。',
    },
    {
      id: 's-concept-infinitive-purpose',
      title: '成分解构 4：动词不定式短语作目的状语',
      type: '目的状语 (Adverbial of Purpose)',
      badge: '不定式解构',
      desc: 'to reduce network latency 解释了为什么要做前面这个动作，充当目的状语',
      formula: 'Subject + Verb + Object + [to + Base Verb (Purpose)]',
      sentence: 'We configured a CDN cache to reduce network latency.',
      translation: '我们配置了 CDN 缓存，以减少网络延迟。',
      parts: [
        { text: 'We', role: '主语 (S)', type: 'subject' },
        { text: 'configured', role: '主句谓语动词 (V)', type: 'verb' },
        { text: 'a CDN cache', role: '宾语 (O)', type: 'object' },
        { text: 'to reduce network latency', role: '目的状语 (Adv) · 动词不定式短语', type: 'adverbial' },
      ],
      explanation: 'to reduce 是不定式，充当全句的目的状语，回答“为什么配置 CDN？为了降低延迟”。',
      beginnerAnalogy: '“我打开冰箱 (动作) 【为了拿瓶可乐】 (不定式表目的)”。',
      itAnalogy: '相当于带有意图注解的函数调用：ConfigureCdn(target, purpose: ReduceLatency)。',
    },
  ],
  compares: [
    {
      id: 'c-finite-vs-nonfinite',
      chinese: '谓语动词 VS 非谓语动词（谁是心脏？谁是分身打手？）',
      wrong: 'The script ran crashed the system.',
      correct: 'The script ran, crashing the system. / The running script crashed the system.',
      formula: '1 句中仅 1 个谓语动词；其余动作必须降级为分词 (-ing/-ed) 或不定式 (to do)',
      reason: 'ran 和 crashed 都是谓语动词，在没有连词 (and) 的情况下直接挤在一起属于语法崩塌！必须把其中一个降级为分词 (crashing 伴随状语，或 running 前置定语)。',
      beginnerAnalogy: '一辆汽车只有一个方向盘（谓语动词）。如果两个人同时抢着打方向盘（两个谓语动词并列），车肯定要撞翻！第二个人只能当乘客（非谓语动词）。',
      itAnalogy: '一个线程只能有一个主入口 Main() 函数，其余操作必须作为子协程或回调参数传入。',
    },
    {
      id: 'c-present-vs-past-participle',
      chinese: '现在分词 (-ing) VS 过去分词 (-ed)（主动进行 VS 被动完成）',
      wrong: 'We need to repair the breaking hard drive.',
      correct: 'We need to repair the broken hard drive.',
      formula: '-ing = 主动或正在进行 (breaking 正在破碎中) | -ed = 被动或已完成 (broken 已经被打碎了)',
      reason: '硬盘并不是正在自我碎裂中，而是已经处于“被损坏”的完成态，因此必须使用表示被动和完成的过去分词 broken。',
      beginnerAnalogy: 'falling leaves 是正在空中飘落的落叶（进行态）；fallen leaves 是已经掉在地上的落叶（完成态）。',
      itAnalogy: 'Promise 的状态机：running (Pending/执行中 -ing) vs resolved/rejected (Fulfilled/已完成 -ed)。',
    },
    {
      id: 'c-infinitive-vs-gerund',
      chinese: '动词不定式 (to do) VS 动名词 (doing)（未来目的 VS 既成事实）',
      wrong: 'I remember to deploy the code yesterday.',
      correct: 'I remember deploying the code yesterday. (但: Remember to deploy the code tonight!)',
      formula: 'remember to do = 记得要去办某事 (事未办) | remember doing = 记得曾经做过某事 (事已办)',
      reason: 'yesterday 说明是昨天已经做过的事，必须使用动名词 deploying 表示既成经历；如果提醒今晚别忘了部署，才用 remember to deploy。',
      beginnerAnalogy: 'to do 是备忘录上还没划掉的待办事项 (TODO)；doing 是相册里已经拍好的回忆录。',
      itAnalogy: 'to do 是延迟执行的调度任务 Task.Schedule()；doing 是已落盘的历史审计日志 LogEntry。',
    },
    {
      id: 'c-be-vs-auxiliary-do',
      chinese: 'Be 动词 (系动词) VS 助动词 do（已有 Be 动词绝不能借 do！）',
      wrong: 'Do you are an engineer? / Does the server is ready?',
      correct: 'Are you an engineer? / Is the server ready?',
      formula: '原句有 Be 动词 ➔ 直接把 Be 动词提前！严禁借用 do/does/did',
      reason: 'Be 动词自身拥有最高特权，提问时自己直接移到句首；只有原句是 ordinary action verb（普通实义动词如 work, have, run）时，才需要向系统借用 do/does/did。',
      beginnerAnalogy: '自带超级通行证的贵宾（Be 动词）可以直接过安检；只有普通平民（普通动词）才需要请保镖代理（do/does/did）出面交涉。',
      itAnalogy: '如果是原生基类自带的方法直接调用；如果是外部扩展包才需要引入 helper 辅助类。',
    },
    {
      id: 'c-transitive-vs-intransitive',
      chinese: '及物动词 (Vt) VS 不及物动词 (Vi)（直击宾语 VS 需架设介词桥梁）',
      wrong: 'Please listen the audio. / The system crashed the server.',
      correct: 'Please listen to the audio. / The system crashed. (或: The error crashed the server.)',
      formula: 'Vt + 宾语 (直接跟受体) | Vi + 介词 + 宾语 (必须搭介词桥梁)',
      reason: 'listen 是典型的不及物动词，它的动作无法直接发射到宾语身上，必须加上介词 to 构成 listen to；hear 才是及物动词 (hear the sound)。',
      beginnerAnalogy: '及物动词是“磁铁”，能直接吸住铁块（宾语）；不及物动词是“木头”，要想连在铁块上，中间必须涂一层胶水（介词）。',
      itAnalogy: '强类型函数签名：Listen(void) 不接受入参，必须通过 ListenTo(IStream target) 重载。',
    },
    {
      id: 'c-phrase-vs-clause',
      chinese: '短语 (Phrase) VS 从句 (Clause) VS 句子 (Sentence)',
      wrong: 'Because of the server crashed, we paused traffic. / Because the crash, we paused.',
      correct: 'Because the server crashed, we paused traffic. / Because of the server crash, we paused.',
      formula: 'Because + 完整从句 (有主有谓) | Because of + 名词短语 (无主谓)',
      reason: 'Because 是从属连词，后面必须接带有完整主语和谓语的从句；Because of 是介词短语，后面只能跟单纯的名词短语，绝不能接带有谓语动词的句子！',
      beginnerAnalogy: '短语是零件（齿轮）；从句是带发动机的子模块（引擎盒）；句子是整台可以开上路的汽车。',
      itAnalogy: 'Because(PredicateExpression) 接收 Lambda 表达式；BecauseOf(ObjectPayload) 接收强类型实体。',
    },
  ],
  words: [
    {
      id: 'w-be-verb',
      word: 'Be Verb',
      phonetic: '/biː vɜːrb/',
      pos: 'n. 语法术语',
      meaning: 'Be 动词（系动词/助动词）',
      mnemonic: '形态家族：am, is, are, was, were, be, being, been',
      examples: [
        { en: 'The server is active. (is 作为系动词连接主语和状态)', zh: '服务器处于活跃状态。' },
        { en: 'The request is being processed. (is/being 作为助动词构成进行被动态)', zh: '请求正在被处理。' },
      ],
      tags: ['动词基石', '等号状态'],
    },
    {
      id: 'w-predicate-verb',
      word: 'Predicate Verb',
      phonetic: '/ˈpredɪkət vɜːrb/',
      pos: 'n. 语法术语',
      meaning: '谓语动词（全句动力心脏）',
      mnemonic: '受主语人称和时间约束的唯一核心动词，一句话绝不可没有，也绝不可并存两个！',
      examples: [
        { en: 'The script executes every night. (executes 带有单三和一般现在时，是谓语)', zh: '脚本每晚执行。' },
        { en: 'She identified the memory leak.', zh: '她定位到了内存泄漏。（identified 是过去时谓语）' },
      ],
      tags: ['句子心脏', '主引擎'],
    },
    {
      id: 'w-non-finite-verb',
      word: 'Non-finite Verb',
      phonetic: '/nɒn ˈfaɪnaɪt vɜːrb/',
      pos: 'n. 语法术语',
      meaning: '非谓语动词（动词三大分身）',
      mnemonic: '降级不再做主句谓语，包括：不定式(to do)、动名词(doing)、分词(doing/done)',
      examples: [
        { en: 'I came here to help you. (to help 是非谓语不定式)', zh: '我来这里是为了帮助你。' },
        { en: 'The code written by Alice works well. (written 是非谓语过去分词修饰 code)', zh: '爱丽丝写的代码运行良好。' },
      ],
      tags: ['动词分身', '降维使用'],
    },
    {
      id: 'w-infinitive',
      word: 'Infinitive',
      phonetic: '/ɪnˈfɪnətɪv/',
      pos: 'n. 语法术语',
      meaning: '动词不定式（to + 动词原形）',
      mnemonic: '成分不固定（主/宾/表/定/状均可），语义倾向于未做的事情或目的',
      examples: [
        { en: 'We plan to launch next week.', zh: '我们计划下周发布。（to launch 作宾语）' },
        { en: 'Click this icon to download the file.', zh: '点击此图标以下载文件。（to download 作目的状语）' },
      ],
      tags: ['未来意向', '目的状语'],
    },
    {
      id: 'w-present-participle',
      word: 'Present Participle',
      phonetic: '/ˈpreznt ˈpɑːrtɪsɪpl/',
      pos: 'n. 语法术语',
      meaning: '现在分词（V-ing 形式）',
      mnemonic: '表示“主动”和“正在进行”，像形容词一样修饰名词，或作伴随状语',
      examples: [
        { en: 'A running task consumes memory.', zh: '正在运行的任务消耗内存。（running 作定语）' },
        { en: 'The process terminated, releasing resources.', zh: '进程终止了，伴随着释放了资源。（releasing 作状语）' },
      ],
      tags: ['主动进行', '修饰伴随'],
    },
    {
      id: 'w-past-participle',
      word: 'Past Participle',
      phonetic: '/pæst ˈpɑːrtɪsɪpl/',
      pos: 'n. 语法术语',
      meaning: '过去分词（V-ed / 不规则 V3）',
      mnemonic: '表示“被动”和“已经完成”，常用于被动语态、完成时态及后置定语',
      examples: [
        { en: 'The corrupted disk was replaced.', zh: '损坏的磁盘被更换了。（corrupted 是过去分词定语）' },
        { en: 'All changes saved to disk are permanent.', zh: '所有保存到磁盘的更改都是永久的。' },
      ],
      tags: ['被动完成', '状态定语'],
    },
    {
      id: 'w-gerund',
      word: 'Gerund',
      phonetic: '/ˈdʒerənd/',
      pos: 'n. 语法术语',
      meaning: '动名词（V-ing 充当名词）',
      mnemonic: '长相是 -ing，但功能彻底变成名词，可做主语、动词宾语、介词宾语',
      examples: [
        { en: 'Testing is essential for reliability.', zh: '测试对于可靠性至关重要。（Testing 动名词作主语）' },
        { en: 'Thank you for explaining the logic.', zh: '感谢你解释这个逻辑。（explaining 在介词 for 后作宾语）' },
      ],
      tags: ['名词化', '介词后接'],
    },
    {
      id: 'w-noun-phrase',
      word: 'Noun Phrase (NP)',
      phonetic: '/naʊn freɪz/',
      pos: 'n. 语法术语',
      meaning: '名词短语（限定词+形容词+核心名词+后置修饰）',
      mnemonic: '以核心名词为轴心打包的语义大实体，句中当整体主语/宾语',
      examples: [
        { en: 'The high-performance computing cluster has started.', zh: '高性能计算集群已启动。（整串就是个名词短语主语）' },
        { en: 'We resolved an extremely difficult concurrency issue.', zh: '我们解决了一个极其困难的并发问题。' },
      ],
      tags: ['实体打包', '主宾基础'],
    },
    {
      id: 'w-prepositional-phrase',
      word: 'Prepositional Phrase (PP)',
      phonetic: '/ˌprepəˈzɪʃənl freɪz/',
      pos: 'n. 语法术语',
      meaning: '介词短语（介词 + 名词/代词宾语）',
      mnemonic: '介词绝不独行，必带名词宾语！充当后置定语（修饰名词）或状语（修饰动作环境）',
      examples: [
        { en: 'The button in the top-right corner triggers the modal.', zh: '右上角的按钮触发弹窗。（in the corner 作定语）' },
        { en: 'The backup runs at 02:00 AM.', zh: '备份在凌晨两点运行。（at 02:00 AM 作时间状语）' },
      ],
      tags: ['时空胶水', '环境修饰'],
    },
    {
      id: 'w-subject',
      word: 'Subject (S)',
      phonetic: '/ˈsʌbdʒɪkt/',
      pos: 'n. 语法术语',
      meaning: '主语（句子讨论的主体 / 动作发起者）',
      mnemonic: '回答“谁”或“什么东西”，通常由名词、代词、名词短语、动名词或主语从句充当',
      examples: [
        { en: 'The API returns a JSON response.', zh: 'API 返回 JSON 响应。（The API 是主语）' },
        { en: 'To learn grammar requires patience.', zh: '学习语法需要耐心。（不定式短语作主语）' },
      ],
      tags: ['核心成分', '舞台主角'],
    },
    {
      id: 'w-object',
      word: 'Object (O)',
      phonetic: '/ˈɒbdʒɪkt/',
      pos: 'n. 语法术语',
      meaning: '宾语（动作的承受者 / 介词的客体）',
      mnemonic: '及物动词或介词后面接的对象，回答“做什么事情 / 影响谁”',
      examples: [
        { en: 'The user clicked the submit button.', zh: '用户点击了提交按钮。（the submit button 是及物动词 clicked 的宾语）' },
        { en: 'He relies on Redis. (Redis 是介词 on 的宾语)', zh: '他依赖 Redis。' },
      ],
      tags: ['核心成分', '动作承受'],
    },
    {
      id: 'w-predicative',
      word: 'Predicative (P)',
      phonetic: '/prɪˈdɪkətɪv/',
      pos: 'n. 语法术语',
      meaning: '表语（系动词后说明主语身份/状态的成分）',
      mnemonic: '跟在 Be 动词或系动词后面，回答“主语是什么 / 处于什么特征状态”',
      examples: [
        { en: 'The cluster is healthy.', zh: '集群是健康的。（healthy 是形容词表语）' },
        { en: 'The truth is that the pipeline failed.', zh: '事实是流水线挂了。（that 从句是表语从句）' },
      ],
      tags: ['核心成分', '状态说明'],
    },
    {
      id: 'w-attributive',
      word: 'Attributive (Attr)',
      phonetic: '/əˈtrɪbjətɪv/',
      pos: 'n. 语法术语',
      meaning: '定语（修饰名词/代词的专属帽子）',
      mnemonic: '回答“哪一个 / 什么样的”。单个单词放名词前，短语从句放名词后',
      examples: [
        { en: 'A fast algorithm (fast 是前置定语)', zh: '一个快速的算法。' },
        { en: 'The server located in Tokyo (located in Tokyo 是后置分词短语定语)', zh: '位于东京的服务器。' },
      ],
      tags: ['修饰成分', '名词修饰'],
    },
    {
      id: 'w-adverbial',
      word: 'Adverbial (Adv)',
      phonetic: '/ædˈvɜːrbiəl/',
      pos: 'n. 语法术语',
      meaning: '状语（修饰动词、形容词或全句的时空背景）',
      mnemonic: '回答“何时、何地、为何、如何、到何种程度、在何种条件下”',
      examples: [
        { en: 'The pod restarted automatically (方式状语) yesterday (时间状语).', zh: '该 Pod 昨天自动重启了。' },
        { en: 'If traffic surges, scale up. (If从句充当条件状语)', zh: '如果流量激增，进行扩容。' },
      ],
      tags: ['修饰成分', '背景环境'],
    },
    {
      id: 'w-complement',
      word: 'Complement (C)',
      phonetic: '/ˈkɒmplɪmənt/',
      pos: 'n. 语法术语',
      meaning: '补语（补足宾语或主语，使句意完整的必要零件）',
      mnemonic: '如果把补语拿掉，句子意思就残缺不全！常见于 make, keep, consider 句型',
      examples: [
        { en: 'The optimization made the query faster.', zh: '该优化使查询变得更快。（faster 是宾语补足语）' },
        { en: 'Please keep the logs safe.', zh: '请确保日志的安全。（safe 补足 logs）' },
      ],
      tags: ['句式补全', '宾语补足'],
    },
    {
      id: 'w-appositive',
      word: 'Appositive (App)',
      phonetic: '/əˈpɒzətɪv/',
      pos: 'n. 语法术语',
      meaning: '同位语（紧跟名词之后的等价重命名解释）',
      mnemonic: '地位与前置名词完全平等 (A = B)，可以互相替换而不破坏语法',
      examples: [
        { en: 'Kubernetes, an orchestration tool, manages pods.', zh: 'Kubernetes，一款容器编排工具，管理着 Pod。（中间短语为同位语）' },
        { en: 'The fact that the build failed surprised no one.', zh: '构建失败了这个事实并未让任何人感到惊讶。（同位语从句）' },
      ],
      tags: ['等价替换', '解释重命名'],
    },
  ],
  builders: [
    {
      id: 'b-concept-builder-1',
      title: '积木组装 1：组装包含及物动词与名词短语的完整句子',
      instruction: '请将以下词块按“主语 + 谓语(及物动词) + 宾语名词短语 + 地点介词短语”的正确语序拼装：',
      words: ['deployed', 'The senior architect', 'the backend microservice', 'to the AWS cloud'],
      targetSentence: 'The senior architect deployed the backend microservice to the AWS cloud.',
      explanation: 'The senior architect (主语名词短语) + deployed (谓语及物动词) + the backend microservice (宾语名词短语) + to the AWS cloud (地点状语介词短语)。',
      beginnerAnalogy: '主干是“架构师部署了微服务”，末尾加上“去往 AWS 云端”作为方向地点说明。',
    },
    {
      id: 'b-concept-builder-2',
      title: '积木组装 2：组装包含非谓语过去分词后置定语的句子',
      instruction: '请将带有过去分词修饰短语的词块拼装为完整句子（注意：分词短语紧跟在被修饰名词后面）：',
      words: ['The security vulnerability', 'reported by the team', 'was patched', 'immediately'],
      targetSentence: 'The security vulnerability reported by the team was patched immediately.',
      explanation: 'The security vulnerability (核心主语) + reported by the team (过去分词后置定语修饰漏洞) + was patched (被动语态核心谓语) + immediately (时间状语)。',
      beginnerAnalogy: '“被团队报告的安全漏洞”作为整体主语，“立即被修复了”是谓语和状语。',
    },
    {
      id: 'b-concept-builder-3',
      title: '积木组装 3：组装包含不定式目的状语的句子',
      instruction: '请按“主语 + 谓语 + 宾语 + 目的状语(to do)”组装句子：',
      words: ['We', 'optimized', 'the database query', 'to reduce latency'],
      targetSentence: 'We optimized the database query to reduce latency.',
      explanation: 'We (主语) + optimized (及物谓语动词) + the database query (宾语) + to reduce latency (动词不定式短语充当目的状语)。',
      beginnerAnalogy: '主谓宾交代动作“我们优化了数据库查询”，不定式交代意图“为了降低延迟”。',
    },
  ],
  quizzes: [
    {
      id: 'q-concept-finite-verb',
      title: '判断核心概念：哪个是整句真正的“谓语动词”？',
      question: '在句子 "The engineer fixing the server noticed an anomaly." 中，真正的谓语动词是哪一个？',
      options: [
        {
          text: 'noticed',
          isCorrect: true,
          explanation: '正确！noticed 带有过去时态，是全句真正的心脏谓语动词；fixing 是现在分词非谓语，只是用来修饰 engineer 的后置定语！',
        },
        {
          text: 'fixing',
          isCorrect: false,
          explanation: '错误！fixing 没有 Be 动词搭配（不是 is fixing），它只是现在分词非谓语修饰语，不是句子核心谓语。',
        },
        {
          text: 'server',
          isCorrect: false,
          explanation: '错误！server 是名词，不是动词。',
        },
        {
          text: 'fixing noticed 两个都是',
          isCorrect: false,
          explanation: '错误！一山不容二虎，没有连词连接时，简单句只能有一个真正的谓语动词！',
        },
      ],
      tip: '问问自己：哪个动词体现了全句的主干时间线（谁注意到了什么）？',
    },
    {
      id: 'q-concept-participle-choice',
      title: '分词选择：主动进行还是被动完成？',
      question: '请补全句子："The data _____ into Elasticsearch is queried in real time." (流向 Elasticsearch 的数据)',
      options: [
        {
          text: 'streaming (现在分词)',
          isCorrect: true,
          explanation: '正确！数据主动“正在流向”系统，表示主动且持续的动作，因此使用现在分词 streaming 作后置定语。',
        },
        {
          text: 'streamed (过去分词)',
          isCorrect: false,
          explanation: '不贴切。数据本身是主动流动的载体，不是“被流动”，且后文 is queried in real time 强调正在发生的实时流式处理。',
        },
        {
          text: 'is streamed (谓语形式)',
          isCorrect: false,
          explanation: '严重语法错误！后面已有主谓语 is queried，如果这里填 is streamed 就出现了两个谓语动词冲突撞车！',
        },
        {
          text: 'stream (动词原形)',
          isCorrect: false,
          explanation: '错误！动词原形不能直接放在名词后面充当定语修饰。',
        },
      ],
      tip: '观察后半句已有谓语 is queried，横线处只能填非谓语动词！',
    },
    {
      id: 'q-concept-be-question',
      title: '造疑问句原则：何时倒装 Be 动词 vs 何时借用 do？',
      question: '把陈述句 "The cluster is ready." 改写为一般疑问句，正确的是：',
      options: [
        {
          text: 'Is the cluster ready?',
          isCorrect: true,
          explanation: '正确！原句自带 Be 动词 is，直接将 is 移到主语前面即可，不需要借任何助动词！',
        },
        {
          text: 'Does the cluster is ready?',
          isCorrect: false,
          explanation: '画蛇添足！已有 Be 动词时绝对禁止向系统借调 does！',
        },
        {
          text: 'Does the cluster be ready?',
          isCorrect: false,
          explanation: '错误！Be 动词直接具备提前倒装特权，不需要 does 代理。',
        },
        {
          text: 'The cluster is ready?',
          isCorrect: false,
          explanation: '口语中偶有升调，但在书面语法规范中必须倒装为 Is the cluster ready?。',
        },
      ],
      tip: '原句自带 Be 动词或情态动词时，直接提前！',
    },
    {
      id: 'q-concept-infinitive-purpose',
      title: '动词不定式的作用辨别',
      question: '在句子 "Press Ctrl+C to stop the process." 中，"to stop the process" 在句子中充当什么成分？',
      options: [
        {
          text: '目的状语 (Adverbial of Purpose)',
          isCorrect: true,
          explanation: '正确！它回答了“按 Ctrl+C 的目的是什么？是为了停止进程”，属于动词不定式充当目的状语。',
        },
        {
          text: '谓语动词 (Predicate Verb)',
          isCorrect: false,
          explanation: '错误！to stop 是非谓语不定式，本句是祈使句，真正的谓语动词是前面的 Press。',
        },
        {
          text: '宾语 (Object)',
          isCorrect: false,
          explanation: '错误！Press 的宾语是 Ctrl+C。',
        },
        {
          text: '表语 (Predicative)',
          isCorrect: false,
          explanation: '错误！前面没有系动词，不是表语。',
        },
      ],
      tip: 'to do 在句末表达“为了实现某目的”，是不定式最核心的状语功能。',
    },
  ],
  tables: [
    {
      title: '英语句子八大核心成分速查宝典 (The 8 Sentence Components)',
      headers: ['成分名称', '常见英文缩写', '核心功能与角色', '典型充当词类/结构', '工程技术与日常例句'],
      rows: [
        ['主语', 'S (Subject)', '句子的主体、动作的发起者或被讨论的核心', '名词、代词、名词短语、动名词、从句', '<b>The database</b> crashed at midnight.'],
        ['谓语动词', 'V (Predicate)', '句子的心脏主引擎，体现时态、语态与人称', '限定动词 (Finite Verb)', 'The worker thread <b>processes</b> requests.'],
        ['宾语', 'O (Object)', '动作的直接承受者，或介词所管辖的客体', '名词、名词短语、代词、动名词、宾语从句', 'The developer updated <b>the configuration</b>.'],
        ['表语', 'P / SC', '接在系动词之后，说明主语的性质、特征或身份', '形容词、名词、介词短语、表语从句', 'The system is <b>highly resilient</b>.'],
        ['定语', 'Attr', '修饰名词或代词的专属“帽子”，回答“哪一个/什么样的”', '形容词(前置)、分词短语(后置)、介词短语、定语从句', 'A <b>critical</b> bug <b>reported by QA</b> was fixed.'],
        ['状语', 'Adv', '修饰动词、形容词或全句，交代时间/地点/原因/条件/方式', '副词、介词短语、不定式短语、状语从句', 'The service scales <b>automatically</b> <b>on AWS</b>.'],
        ['补语', 'C / OC', '补充说明宾语的状态或动作结局，使句意完整', '形容词、名词、不定式、分词', 'The patch made the cluster <b>more stable</b>.'],
        ['同位语', 'App', '紧跟在名词之后，对其进行等价的重命名或解释', '名词短语、同位语从句', 'Redis, <b>an in-memory store</b>, is fast.'],
      ],
      note: '口诀记忆：主谓宾，起承转；系表等，状态现；定语名戴帽，状语随时变；补足宾未尽，同位换名见。',
    },
    {
      title: '动词四大分类与非谓语三大分身一览 (Verbs & Non-finites)',
      headers: ['分类维度', '具体类型', '核心特征与语法法则', '关键例词/形式', '典型工程示例'],
      rows: [
        ['四大动词分类', '实义动词 (Action)', '有具体动作含义；及物动词(Vt)直带宾语，不及物动词(Vi)需加介词', 'send, deploy, crash, listen', 'Please <b>listen to</b> the event bus.'],
        ['四大动词分类', '系动词 (Linking)', '无剧烈动作，充当等号连接主语与表语特征', 'be, remain, look, seem', 'The latency <b>remains</b> low under stress.'],
        ['四大动词分类', '助动词 (Auxiliary)', '无独立词义，协助构成时态、否定与疑问', 'do/does/did, be, have/has', '<b>Did</b> you commit the migration script?'],
        ['四大动词分类', '情态动词 (Modal)', '无人称单三变化，表意向概率，后接动词原形', 'can, must, should, will', 'You <b>must run</b> lint before pushing.'],
        ['非谓语三大分身', '动词不定式', 'to + 动词原形；表达目的、未来意向、待办事项', 'to deploy, to inspect', 'Click here <b>to reboot</b> the node.'],
        ['非谓语三大分身', '现在分词', 'V-ing 形式；表达主动发出或正在进行中的状态', 'running, streaming', 'The process <b>handling</b> the query hung.'],
        ['非谓语三大分身', '过去分词', 'V-ed / V3 形式；表达被动承受或已经完成的状态', 'cached, corrupted', 'Data <b>stored</b> in Redis is ephemeral.'],
        ['非谓语三大分身', '动名词', 'V-ing 形式；彻底名词化，作主语、动词宾语或介词宾语', 'debugging, testing', 'He is exceptionally skilled at <b>debugging</b>.'],
      ],
      note: '核心铁律：简单句中只能有 1 个谓语动词；非谓语动词不能单独充当谓语。',
    },
    {
      title: '十大词性 (Parts of Speech) 符号与语法功能速查表',
      headers: ['词性中文', '英文全称', '常用缩写', '句子中的主要功能', '代码世界典型词例'],
      rows: [
        ['名词', 'Noun', 'n.', '充当主语、宾语、表语、同位语', 'server, database, thread, cluster'],
        ['动词', 'Verb', 'v. (vt./vi.)', '充当谓语动词，驱动整句动作', 'deploy, compile, crash, execute'],
        ['形容词', 'Adjective', 'adj. (a.)', '充当定语修饰名词，或作系动词后的表语', 'scalable, synchronous, fast, idle'],
        ['副词', 'Adverb', 'adv. (d.)', '充当状语修饰动词、形容词或其他副词', 'concurrently, smoothly, silently'],
        ['代词', 'Pronoun', 'pron.', '代替名词以避免重复，作主语或宾语', 'it, this, which, someone, they'],
        ['介词', 'Preposition', 'prep.', '与名词/代词连用构成介词短语，表时空关系', 'in, on, at, via, between, without'],
        ['连词', 'Conjunction', 'conj.', '连接词与词、短语与短语、或分句与主句', 'and, but, because, although, while'],
        ['冠词', 'Article', 'art.', '放在名词前限定指代（定冠词 the / 不定冠词 a, an）', 'the, a, an'],
        ['数词', 'Numeral', 'num.', '表示数量或顺序（基数词与序数词）', 'one, first, 1024, third'],
        ['感叹词', 'Interjection', 'interj.', '表达情绪感叹（技术日志中较少）', 'oops, wow, hey'],
      ],
      note: '词性是词本身的静态属性，句子成分是词在特定句子语境中承担的动态角色。',
    },
  ],
};
