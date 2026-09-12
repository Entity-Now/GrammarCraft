import type { TopicContent } from '../../types';

export const questionsAndStatementsTopic: TopicContent = {
  meta: {
    id: 'questions-and-statements',
    title: '陈述句与疑问句转换全解',
    enTitle: 'Statements & Question Transformations',
    desc: '什么情况用 is 提首？什么情况借 do/does/did？一般疑问、特殊疑问、选择疑问、反义疑问、否定疑问五大疑问句全场景演进算法与避坑指南',
    icon: '❓',
    pillarId: 'syntax',
    badge: '句式转换核心',
  },
  diagrams: [
    {
      id: 'd-question-decision-tree',
      title: '造疑问句核心决策树：Be动词提首 vs 助动词外借算法 (Is vs Do/Does/Did)',
      desc: '彻底解密初学者最大困惑：什么时候用 is？什么时候用 do / does / did？',
      code: `graph TD
    Start["🎯 <b>审视陈述句谓语动词 (Predicate Verb Check)</b><br/>句子里到底有什么动词？"]

    subgraph BranchA["分支 A: 句子自带特殊动词 (Be / 情态 / 助动词)"]
        A1["<b>Be 动词</b>: is, are, was, were<br/><b>情态动词</b>: can, will, must, should<br/><b>完成时助动词</b>: have, has, had"]
        A2["🚀 <b>处理动作：直接提至句首！</b><br/>无需外借任何新词！<br/><i>The server <b>is</b> online ➔ <b>Is</b> the server online?</i><br/><i>You <b>can</b> fix it ➔ <b>Can</b> you fix it?</i>"]
    end

    subgraph BranchB["分支 B: 只有普通实义动词 (Run / Write / Crash / Work)"]
        B1["实义动词性格高傲，<b>绝对不能自己跑到句首！</b><br/>也不准乱加 is！"]
        B2["🤝 <b>处理动作：向外借助动词 do / does / did！</b><br/>现在时单三 ➔ 借 <b>does</b><br/>一般过去时 ➔ 借 <b>did</b><br/>其余情况 ➔ 借 <b>do</b>"]
        B3["⚠️ <b>铁律：实义动词强制打回裸原形！</b><br/><i>It work<b>s</b> ➔ <b>Does</b> it <b>work</b>? (脱掉 -s)</i><br/><i>It crash<b>ed</b> ➔ <b>Did</b> it <b>crash</b>? (脱掉 -ed)</i>"]
    end

    Start -->|含 Be/情态/完成助动| BranchA
    Start -->|仅含普通实义动词| BranchB`,
      details: [
        {
          label: '分支 A：直接提前机制 (Direct Inversion)',
          enPhrase: 'Is the cluster online? / Can we deploy now? / Have you verified it?',
          zhMeaning: '句子自身已有具有调度能力的强动词（be/情态/完成时have），直接移至主语前面，绝不可画蛇添足加 do！',
          tag: '决策分支',
        },
        {
          label: '分支 B：助动词外借机制 (Auxiliary Borrowing)',
          enPhrase: 'Does the service restart? / Did the server fail? / Do they write tests?',
          zhMeaning: '普通实义动作（run/crash/work）无法移到句首，必须借 do/does/did 站岗，原动词必须降维还原为裸原形！',
          tag: '决策分支',
        },
        {
          label: '高频致命混淆：严禁 is 与实义动词原形乱搭',
          enPhrase: 'Is the server run? (❌ 极度严重语法错误) ➔ Does the server run? (✅ 正确)',
          zhMeaning: '要么是主系表 Is the server running? (进行态)，要么是一般疑问 Does the server run?，严禁 is run 混搭！',
          tag: '避坑必看',
        },
      ],
    },
    {
      id: 'd-question-five-types',
      title: '英语五大核心疑问句家族谱系 (The 5 Question Families)',
      desc: '从判断真假、索取细节、二选一权衡到反问确认与情感反诘',
      code: `graph TD
    Root["❓ <b>英语五大疑问句体系 (Question System)</b>"]

    subgraph Q1["1️⃣ 一般疑问句 (Yes/No Question)"]
        T1["求证事实真伪，可用 Yes/No 回答<br/><i>Is the API stable? / Did you run tests?</i>"]
    end

    subgraph Q2["2️⃣ 特殊疑问句 (Wh- Information)"]
        T2["疑问词置顶 + 倒装语序，索取未知细节<br/><i><b>Why</b> did it fail? / <b>Where</b> is the log?</i>"]
    end

    subgraph Q3["3️⃣ 选择疑问句 (Alternative)"]
        T3["用 or 连接两个或多个选项供对方挑选<br/><i>Do you prefer <b>SQL or NoSQL</b>?</i>"]
    end

    subgraph Q4["4️⃣ 反义疑问句 (Tag Question)"]
        T4["陈述句后挂简短反问尾巴，前肯后否/前否后肯<br/><i>The build passed, <b>didn't it</b>?</i>"]
    end

    subgraph Q5["5️⃣ 否定疑问句 (Negative Question)"]
        T5["否定助动词提首，表达强烈惊讶、确认或建议<br/><i><b>Isn't</b> the PR merged yet?</i>"]
    end

    Root --> Q1
    Root --> Q2
    Root --> Q3
    Root --> Q4
    Root --> Q5`,
      details: [
        {
          label: '1. 一般疑问句 (Yes/No Questions)',
          enPhrase: 'Did the smoke test pass? — Yes, it did. / No, it didn’t.',
          zhMeaning: '针对整件事的真实性进行闭环提问，语调末尾通常为升调。',
          tag: '疑问体系',
        },
        {
          label: '2. 特殊疑问句 (Wh- Questions)',
          enPhrase: 'How can we reproduce the memory leak under load?',
          zhMeaning: '以 Wh- 疑问词开门见山，不能用 Yes/No 回答，必须提供具体参数或因果信息。',
          tag: '疑问体系',
        },
        {
          label: '3. 选择疑问句 (Alternative Questions)',
          enPhrase: 'Should we deploy to staging first, or push directly to production?',
          zhMeaning: '用 or 连接候选方案，回答时必须选其一，不可简单回答 Yes 或 No。',
          tag: '疑问体系',
        },
        {
          label: '4. 反义疑问句 (Tag Questions)',
          enPhrase: 'You have updated the API schema, haven’t you?',
          zhMeaning: '向对方寻求确认、赞同或二次核实，遵循“前肯后否，前否后肯”镜像法则。',
          tag: '疑问体系',
        },
        {
          label: '5. 否定疑问句 (Negative Questions)',
          enPhrase: 'Didn’t you receive the telemetry alert when the node failed?',
          zhMeaning: '以否定缩写词（Didn’t/Isn’t/Won’t）提首，常带有一种“难道你没……吗？”的诧异感。',
          tag: '疑问体系',
        },
      ],
    },
  ],
  formulas: [
    {
      id: 'f-be-modal-inversion',
      title: 'Be 动词与情态动词直接提首公式 (Direct Inversion)',
      badge: '分支 A 规则',
      formula: '陈述句: [S + is / are / was / were / can / will + 其余] ➔ 疑问句: [Is / Are / Was / Were / Can / Will + S + 其余 ?]',
      desc: '只要陈述句自身带有 Be 动词（is/am/are/was/were）、情态动词（can/will/must/should/could）或完成时助动词（have/has/had），变疑问句时直接将该词移至句首，主语退居其后，其余部分纹丝不动！绝对不要加 do！',
      beginnerTip: '【小白秒懂口诀】看句子谓语动词：如果句子里有 is、are、was、were 或者 can、will，把它们直接“吸”到句首，句子秒变疑问句！比如 The pod is healthy ➔ Is the pod healthy? 其余什么都不用改！',
      tokens: [
        { label: 'Be / Modal / Aux', role: '前置到句首', color: 'blue', desc: 'Is / Can / Will / Have' },
        { label: 'Subject', role: '退至第二位', color: 'purple', desc: 'the server / you / the pipeline' },
        { label: 'Rest of Sentence', role: '原样保持不变', color: 'emerald', desc: 'online / deploy today / finished' },
      ],
      example: {
        en: 'The database replica is synchronized. ➔ Is the database replica synchronized?',
        zh: '数据库副本已完成同步。 ➔ 数据库副本完成同步了吗？',
      },
    },
    {
      id: 'f-do-does-did-borrowing',
      title: '实义动词外借助动词与原形还原铁律 (Do/Does/Did Borrowing)',
      badge: '分支 B 规则',
      formula: '陈述句: [S + 实义动词 (V-s / V-ed)] ➔ 疑问句: [Do / Does / Did + S + 裸动词原形 (V-base) ?]',
      desc: '当陈述句中只有纯粹的实义动词（如 works, crashed, runs, failed）时，该动词不具备提首资格。必须在句首借出助动词（单三借 does，过去时借 did，其余借 do），同时实义动词身上的时态和三单标记被助动词强行剥离，必须立刻还原为裸动词原形！',
      beginnerTip: '【动词国王与小跟班法则】实义动词（比如 write/work/crash）是高傲的国王，绝不挪动步子！造问句必须在句首请来“小跟班”（do/does/did）。小跟班一旦站上句首，会把国王身上的所有装饰（-s、-ed）全部收走，国王瞬间变回光溜溜的裸原形！记住：借了 does/did，动词必须打回原形！',
      tokens: [
        { label: 'Do / Does / Did', role: '外借助动词提首', color: 'blue', desc: '根据主语人称与原句时态选择' },
        { label: 'Subject', role: '主语', color: 'purple', desc: 'the script / the worker / developers' },
        { label: 'V-base (裸原形)', role: '强制还原原形！', color: 'emerald', desc: 'run (禁 runs) / crash (禁 crashed)' },
      ],
      example: {
        en: 'The script ran smoothly yesterday. ➔ Did the script run smoothly yesterday?',
        zh: '脚本昨天运行得很流畅。 ➔ 脚本昨天运行得很流畅吗？（ran 还原为 run）',
      },
    },
    {
      id: 'f-wh-question-assembly',
      title: '特殊疑问句置顶二层组装公式 (Wh- Question Assembly)',
      badge: '特殊疑问法则',
      formula: '【特殊疑问词 Wh- (What/Where/When/Why/How)】 + 【完整一般疑问句倒装结构】',
      desc: '特殊疑问句用于探寻具体信息。其构造公式极度优美严谨：第一层确定要提问的信息维度选用 Wh- 疑问词置于全句最顶端；第二层紧随其后的部分，严格套用一般疑问句的倒装语序！',
      beginnerTip: '【小白组装公式】特殊疑问句 = 疑问词 + 一般疑问句！比如你想问“你是怎么修复Bug的”：第一步先拿疑问词 How（如何）；第二步把一般疑问句“Did you fix the bug?”拼接在后面，就得到了：How did you fix the bug? 严禁写成 *How you fixed the bug?*！',
      tokens: [
        { label: 'Wh- 疑问词', role: '第一层：询问焦点置顶', color: 'rose', desc: 'Why (因) / Where (地) / How (方式) / When (时)' },
        { label: 'Aux / Linker', role: '第二层：倒装助词提首', color: 'blue', desc: 'did / is / can / does' },
        { label: 'S + V-base', role: '主语与动作', color: 'emerald', desc: 'you fix the crash / the server fail' },
      ],
      example: {
        en: 'Why did the microservice exhaust its memory buffer?',
        zh: '为什么该微服务会耗尽其内存缓冲区？',
      },
    },
    {
      id: 'f-negative-question-nuance',
      title: '否定疑问句与回答逻辑翻转公式 (Negative Question & Response Logic)',
      badge: '中英逻辑大反转',
      formula: '否定疑问句: [Isn’t / Didn’t / Haven’t + S + ... ?] ➔ 回答铁律: 只要事实是肯定的就答 Yes，只要事实是否定的就答 No！',
      desc: '在否定疑问句中，中文习惯根据“是否赞同对方”回答（“难道没宕机吗？”——“对啊，没宕机”），而英文严格根据【客观事实本身】回答！只要客观上没宕机，无论对方怎么问，回答必须是 No, it isn’t！',
      beginnerTip: '【中美回答生死反转】老外问你："Didn\'t you backup the data?"（难道你没备份数据吗？）。如果你备份了，大声说："Yes, I did!"（不，我备份了！）；如果你真的没备份，说："No, I didn\'t!"（是的，我没备份！）。记住：英文的 Yes 永远代表“做了/是的”，No 永远代表“没做/不是”，完全不管对方问句里有没有 not！',
      example: {
        en: 'Q: Isn’t the production deployment completed? — A: No, it is still in progress.',
        zh: '问：生产部署难道还没完成吗？ — 答：是的，还在进行中。（按客观事实回答 No）',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-transform-be-skeleton',
      badge: 'Be动词转换解构',
      type: 'Be Inversion (Be 动词提首)',
      title: '主系表陈述句 ➔ 一般疑问句',
      desc: '陈述句含系动词 is，疑问句直接将 is 提至主语前方。',
      formula: 'The cluster is online ➔ Is the cluster online?',
      sentence: 'Is the telemetry dashboard responsive under high concurrent load?',
      translation: '遥测仪表盘在高并发负载下依然能够快速响应吗？',
      parts: [
        { text: 'Is', role: '系动词提首 (倒装)', type: 'linker', detail: '原句中的 is 直接移至句首' },
        { text: 'the telemetry dashboard', role: '主语', type: 'subject', detail: '遥测仪表盘主体' },
        { text: 'responsive', role: '表语 (形容词)', type: 'predicative', detail: '响应迅速的' },
        { text: '[under high load]?', role: '介词短语状语', type: 'adverbial', detail: '在高负载下' },
      ],
      explanation: '陈述句为 The telemetry dashboard is responsive...。因为句中含有 Be 动词 is，变疑问句时直接将 is 提前，严禁加 does！',
      beginnerAnalogy: '就像把排在第二位的守门员 is 调到第一位当先锋，其余队员原地不动！',
      itAnalogy: 'dashboard.isResponsive({ concurrency: "HIGH" });',
    },
    {
      id: 'sk-transform-does-skeleton',
      badge: '单三动词转换解构',
      type: 'Does + V-base (单三实义动词)',
      title: '一般现在时单三陈述句 ➔ 借出 does 并还原原形',
      desc: '原句动词为单三 optimizes，疑问句在句首借 does，optimizes 恢复原形 optimize。',
      formula: 'The compiler optimizes code ➔ Does the compiler optimize code?',
      sentence: 'Does the background daemon clean up temporary files automatically?',
      translation: '后台守护进程会自动清理临时文件吗？',
      parts: [
        { text: 'Does', role: '外借助动词提首', type: 'verb', detail: '吸收第三人称单数时态标记' },
        { text: 'the background daemon', role: '主语 (单三实体)', type: 'subject', detail: '后台守护进程' },
        { text: 'clean up', role: '实义动词裸原形', type: 'verb', detail: '脱掉 cleans 中的 -s，恢复原形 clean' },
        { text: 'temporary files', role: '宾语', type: 'object', detail: '临时文件' },
        { text: '[automatically]?', role: '副词状语', type: 'adverbial', detail: '自动地' },
      ],
      explanation: '陈述句为 The daemon cleans up...。因为 cleans 是普通实义动词且为单三，必须在句首借出 does，动词 cleans 必须脱掉 -s 变为原形 clean up！',
      beginnerAnalogy: 'does 就像一个磁铁，把 cleans 屁股后面的 -s 吸走了，剩下的就是裸原形 clean！',
      itAnalogy: 'daemon.cleanUp({ mode: "AUTO" });',
    },
    {
      id: 'sk-transform-did-skeleton',
      badge: '过去时转换解构',
      type: 'Did + V-base (过去时实义动词)',
      title: '一般过去时陈述句 ➔ 借出 did 并还原原形',
      desc: '原句动词为过去式 failed，疑问句句首借 did，failed 恢复原形 fail。',
      formula: 'The health check failed ➔ Did the health check fail?',
      sentence: 'Did the automated integration test fail during the midnight build?',
      translation: '自动化集成测试在昨晚午夜构建期间失败了吗？',
      parts: [
        { text: 'Did', role: '外借过去时助动词', type: 'verb', detail: '吸收过去时态' },
        { text: 'the automated test', role: '主语', type: 'subject', detail: '自动化测试主体' },
        { text: 'fail', role: '实义动词裸原形', type: 'verb', detail: '脱掉 -ed，强制变回原形 fail' },
        { text: '[during the midnight build]?', role: '时间状语', type: 'adverbial', detail: '在午夜构建期间' },
      ],
      explanation: '陈述句为 The test failed...。变疑问句时借出过去时助动词 did，动词 failed 必须立刻还原为裸原形 fail，严禁写成 *Did the test failed?*！',
      beginnerAnalogy: '既然 did 已经代表了“过去发生的事”，后面的动词就不要再穿上过去式 -ed 的厚棉袄啦，必须脱下来恢复原形！',
      itAnalogy: 'testRunner.getHistoricalResult("midnight").didFail();',
    },
    {
      id: 'sk-transform-wh-skeleton',
      badge: '特殊疑问句解构',
      type: 'Wh- Question (特殊疑问句)',
      title: '询问原因：Why + 一般疑问句倒装',
      desc: '疑问词 Why 置于句首第一位，紧接着挂接 did the cluster fail 一般疑问倒装结构。',
      formula: 'Why + [did (助动词) + S + V-base (原形)] ?',
      sentence: 'Why did the primary node terminate the connection so abruptly?',
      translation: '主节点为什么如此突然地终止了该连接？',
      parts: [
        { text: 'Why', role: '特殊疑问词 (置顶)', type: 'adverbial', detail: '询问故障发生的原因' },
        { text: 'did', role: '倒装助动词 (过去时)', type: 'verb', detail: '前置助动词' },
        { text: 'the primary node', role: '主语', type: 'subject', detail: '主节点主体' },
        { text: 'terminate', role: '实义动词原形', type: 'verb', detail: '终止 · 恢复裸原形' },
        { text: 'the connection', role: '宾语', type: 'object', detail: '网络连接' },
        { text: '[so abruptly]?', role: '方式状语', type: 'adverbial', detail: '如此突然地' },
      ],
      explanation: '特殊疑问句分为两半：前面的 Why 确定要问原因，后面的 did the primary node terminate... 严格保留一般疑问句的倒装语序。',
      beginnerAnalogy: '头戴一顶 Wh- 的帽子，帽子下面规规矩矩站着一个一般疑问句！',
      itAnalogy: 'logAnalyzer.queryAnomaly({ reason: "WHY", target: "termination" });',
    },
  ],
  compares: [
    {
      id: 'cmp-is-vs-does-conflict',
      chinese: '这个微服务每天运行吗？',
      wrong: 'Is the microservice runs every day? / Is the microservice run every day?',
      correct: 'Does the microservice run every day?',
      formula: '实义动词 run 必须用 Does 提问，严禁与 is 混搭！',
      reason: 'run 是普通实义动作，绝对不能借系动词 is！句子中只能在“系动词体系 (Is the service healthy?)”和“实义动词助动体系 (Does the service run?)”中二选一，绝对不能把 is 和 run 强行拼在一起！',
      beginnerAnalogy: '系动词 is 是文官（负责“是”），动词 run 是武官（负责“跑”）。不能让文官 is 替武官 run 站岗打仗！提问 run 必须请出专属保镖 does！',
      itAnalogy: 'TypeScript 编译报错：Type mismatch. Cannot assign "run" to Linker signature.',
    },
    {
      id: 'cmp-did-with-past-verb-trap',
      chinese: '你昨天重启服务器了吗？',
      wrong: 'Did you restarted the server yesterday?',
      correct: 'Did you restart the server yesterday?',
      formula: 'Did + 主语 + 【裸动词原形 (V-base)】！严禁重复使用过去式！',
      reason: 'Did 已经吸收了过去时态，后面的动词必须 100% 还原为原形 restart！写成 *Did you restarted* 属于典型的时态双重重叠严重语病。',
      beginnerAnalogy: '一山不容二虎！Did 已经把“过去”两个字刻在脑门上了，后面的动词 restart 必须规规矩矩变回原形！',
    },
    {
      id: 'cmp-does-he-has-trap',
      chinese: '他有访问生产数据库的权限吗？',
      wrong: 'Does he has access to the production database?',
      correct: 'Does he have access to the production database?',
      formula: 'Does + 主语 + have (强制原形 have，严禁用 has！)',
      reason: '单三标记已经被句首的 Does 完全吸收，原动词 has 的原型是 have，必须强制还原！',
      beginnerAnalogy: '看到 does 出场，后面的 has 立刻打回原形变 have！',
    },
    {
      id: 'cmp-wh-non-inversion-trap',
      chinese: '你当时是怎么解决那个死锁问题的？',
      wrong: 'How you solved that deadlock issue?',
      correct: 'How did you solve that deadlock issue?',
      formula: 'Wh- + 【助动词 did + 主语 + 动词原形 solve】？(独立问句必须倒装！)',
      reason: '中文习惯说“你（you）怎么（how）解决（solved）”，如果直译为 *How you solved...* 就漏掉了疑问句必须具备的助动词倒装！独立特殊问句必须倒装借出 did！',
      beginnerAnalogy: '独立提问必须倒装！疑问词 How 后面必须紧跟 did you solve，不能平铺直叙！',
    },
  ],
  builders: [
    {
      id: 'b-transform-does-builder',
      title: '实义动词单三变疑问句拼装',
      instruction: '将陈述句「The application logs telemetry data.」转换为一般疑问句：',
      words: ['Does', 'the application', 'log', 'telemetry data?'],
      targetSentence: 'Does the application log telemetry data?',
      explanation: '句首借出 Does，主语 the application，原动词 logs 脱掉 -s 还原为 log。',
    },
    {
      id: 'b-transform-wh-builder',
      title: '特殊疑问句组装实战',
      instruction: '组装排障问句：「运维团队是什么时候回滚这个集群的？」',
      words: ['When', 'did', 'the DevOps team', 'roll back', 'the cluster?'],
      targetSentence: 'When did the DevOps team roll back the cluster?',
      explanation: 'When 置顶，接一般疑问倒装 did the DevOps team roll back。',
    },
  ],
  quizzes: [
    {
      id: 'q-is-vs-does-quiz',
      title: 'Is 还是 Does？终极选择挑战',
      question: '如果要向同事询问「这个系统能支持每秒上万次并发吗？」，横线上应该填入哪个词？\\n"________ the architecture handle ten thousand requests per second?"',
      options: [
        { text: 'Does', isCorrect: true, explanation: '正确！handle 是普通实义动词（处理），主语 the architecture 是单数，必须借出助动词 Does，且 handle 保持裸原形！' },
        { text: 'Is', isCorrect: false, explanation: '错误：handle 是实义动词，绝对不可与 Is 混用！如果用 Is，句子应为主系表进行态 Is the architecture handling...。' },
        { text: 'Do', isCorrect: false, explanation: '错误：the architecture 是第三人称单数，现在时应借 Does 而不是 Do。' },
        { text: 'Has', isCorrect: false, explanation: '错误：Has handle 语法错误，完成时需要使用过去分词 handled。' },
      ],
    },
    {
      id: 'q-did-verb-form-quiz',
      title: 'Did 提首动词形态诊断',
      question: '请选出语法完全正确的一句提问：',
      options: [
        { text: 'Did the memory leak cause the container crash?', isCorrect: true, explanation: '正确！句首使用 did，主语 the memory leak，谓语动词 cause 彻底恢复裸原形！' },
        { text: 'Did the memory leak caused the container crash?', isCorrect: false, explanation: '错误：did 之后动词不能再保留过去式 caused，必须还原为原形 cause！' },
        { text: 'Was the memory leak cause the container crash?', isCorrect: false, explanation: '错误：Was 与 cause 发生严重的系表与实义动词冲突。' },
      ],
    },
  ],
  tables: [
    {
      title: '陈述句 ➔ 一般疑问句 ➔ 特殊疑问句全时态演进矩阵 (Transformation Matrix)',
      headers: ['动词类型与时态', '陈述句 (Statement)', '一般疑问句 (Yes/No Question)', '特殊疑问句 (Wh- Question)'],
      rows: [
        ['Be 动词 (现在时)', 'The pod is ready.', 'Is the pod ready?', 'Why is the pod ready?'],
        ['Be 动词 (过去时)', 'The nodes were healthy.', 'Were the nodes healthy?', 'How were the nodes healthy?'],
        ['情态动词 (can/will)', 'We can scale out.', 'Can we scale out?', 'How can we scale out?'],
        ['实义动词 (一般现在时非单三)', 'They write integration tests.', 'Do they write integration tests?', 'Where do they write integration tests?'],
        ['实义动词 (一般现在时单三)', 'The job cleans the cache.', 'Does the job clean the cache? (去-s)', 'When does the job clean the cache?'],
        ['实义动词 (一般过去时)', 'The server crashed yesterday.', 'Did the server crash yesterday? (去-ed)', 'Why did the server crash yesterday?'],
        ['现在完成时 (have/has)', 'We have fixed the defect.', 'Have we fixed the defect?', 'How have we fixed the defect?'],
      ],
    },
    {
      title: '九大常用 Wh- 疑问词提问维度与语义速查表',
      headers: ['疑问词', '询问核心维度', '技术与职场典型提问案例'],
      rows: [
        ['What', '事物客体 / 动作内容', 'What triggered the unexpected failover?'],
        ['Why', '原因根由 / 逻辑动机', 'Why did the request time out?'],
        ['How', '实现方式 / 运作机制 / 程度', 'How does the message queue ensure delivery?'],
        ['Where', '空间地点 / 部署宿主 / 路径', 'Where are the production SSL certificates located?'],
        ['When', '时间刻度 / 周期节点', 'When will the scheduled maintenance begin?'],
        ['Who / Whom', '人物主体 (who) / 客体 (whom)', 'Who approved this pull request?'],
        ['Which', '在明确有限范围内挑选其一', 'Which database instance is designated as primary?'],
        ['Whose', '所属关系（谁的资产）', 'Whose API token exceeded the rate limit?'],
      ],
    },
  ],
};
