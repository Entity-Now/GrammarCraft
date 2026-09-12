import type { TopicContent } from '../../types';

export const adverbialClausesTopic: TopicContent = {
  meta: {
    id: 'adverbial-clauses',
    title: '状语从句全家桶与主将从现',
    enTitle: 'Adverbial Clauses & Logic Modifiers',
    desc: '系统精通条件状语（if/unless/as long as）、原因状语（because/since/due to）、让步状语（although/despite/while）与主将从现时态铁律',
    icon: '🌿',
    pillarId: 'syntax',
    badge: '逻辑从句全家桶',
  },
  diagrams: [
    {
      id: 'd-adverbial-families',
      title: '状语从句五大核心逻辑网络与连接词图谱 (Adverbial Families)',
      desc: '状语从句如同代码中的 Middleware 拦截器或环境变量，界定主干动作的触发条件、时空背景与因果让步',
      code: `graph TD
    MainAction["⚡ <b>主句核心动作 (Main SVO)</b><br/>The system will execute the routine..."]

    subgraph LogicDomains["五大核心状语逻辑维度"]
        L1["🚦 <b>1. 条件状语 (Condition)</b><br/>if (如果) / unless (除非) / as long as (只要)<br/><i>主将从现铁律</i>"]
        L2["🔍 <b>2. 原因状语 (Reason / Cause)</b><br/>because (强因果) / since (既然) / as (由于)<br/><i>严禁与 so 连用</i>"]
        L3["🛡️ <b>3. 让步状语 (Concession)</b><br/>although / though (尽管) / even if (即使)<br/><i>严禁与 but 连用</i>"]
        L4["⏱️ <b>4. 时间状语 (Time)</b><br/>when / while / as soon as (一...就...)<br/><i>主将从现铁律</i>"]
        L5["🎯 <b>5. 目的与结果 (Purpose & Result)</b><br/>so that (以便于) / so...that (如此以至于)"]
    end

    LogicDomains -->|约束 / 触发 / 修饰| MainAction`,
      details: [
        {
          label: '1. 条件状语 (Condition)',
          enPhrase: 'The server will scale out IF the load exceeds 80% / UNLESS it is disabled.',
          zhMeaning: '设定动作成立的前提假设。从句严禁使用 will，强制使用一般现在时！',
          tag: '状语逻辑',
        },
        {
          label: '2. 原因状语 (Reason)',
          enPhrase: 'We rolled back BECAUSE tests failed / SINCE memory was low.',
          zhMeaning: '阐述因果动力。because 回答 why；since 引导已知共识事实。',
          tag: '状语逻辑',
        },
        {
          label: '3. 让步状语 (Concession)',
          enPhrase: 'ALTHOUGH the bug was complex, the team resolved it within an hour.',
          zhMeaning: '承认客观困难但主句实现强力反转。在学术和工程报告中极度高频。',
          tag: '状语逻辑',
        },
      ],
    },
    {
      id: 'd-future-condition-timeline',
      title: '主将从现时间物理投影模型 (Future in Main, Present in Sub)',
      desc: '条件从句设定的是纯粹的“假设开关”，只要假设成立即视为条件已达，动词强制还原为一般现在时',
      code: `graph LR
    Condition["🚦 <b>条件从句 (假设已满足)</b><br/>if tests <b>pass</b> (一般现在时)<br/><i>(严禁用 will pass)</i>"]
    -->|触发随后真实结果| MainFuture["🚀 <b>主句动作 (真正未来发生)</b><br/>we <b>will deploy</b> to prod<br/><i>(一般将来时 will do)</i>"]`,
      details: [
        {
          label: '从句为什么不用 will？',
          enPhrase: 'if tests pass / unless the network crashes',
          zhMeaning: 'if 和 when 本身已经包含了“未来一旦发生”的假设预期，从句动词直接用一般现在时（单三记得加 -s）。',
          tag: '时态铁律',
        },
        {
          label: '主句保留 will',
          enPhrase: 'we will release the update',
          zhMeaning: '主句才是真正面向未来的实际执行承诺，必须使用 will do。',
          tag: '时态铁律',
        },
      ],
    },
  ],
  formulas: [
    {
      id: 'f-future-condition-rule',
      title: '条件与时间状语“主将从现”黄金铁律',
      badge: '时态黄金法则',
      formula: '主句用一般将来时 (will do) + [if / unless / when / as soon as 从句用一般现在时 (V-s/原形)]',
      desc: '在 if, unless, when, as soon as, before, after 引导的条件和时间状语从句中，即使从句动作客观上发生在未来，从句谓语动词绝对禁止使用 will，必须使用一般现在时（现在时表将来）！',
      beginnerTip: '【小白秒懂口诀】记住八个字：“主句将来，从句现在（主将从现）”！比如“如果明天下雨，我们就呆在家里”：主句要用将来时 We will stay at home；后面的 if 从句虽然也是明天的事，但绝不能写 will rain，必须用一般现在时单三 if it rains tomorrow！',
      tokens: [
        { label: 'Main Clause (将来时)', role: '主句将来时承接', color: 'purple', desc: 'The system will scale out automatically' },
        { label: 'Condition/Time Connector', role: '条件/时间连词', color: 'blue', desc: 'if / unless / as soon as' },
        { label: 'Sub Clause (一般现在时)', role: '从句现在时！', color: 'emerald', desc: 'the CPU load exceeds 80% (单三禁 will)' },
      ],
      example: {
        en: 'The system will trigger a rollback if the smoke test fails.',
        zh: '如果冒烟测试失败，系统将触发回滚。（主句 will trigger，从句 fails）',
      },
    },
    {
      id: 'f-unless-conditional-formula',
      title: 'unless 条件状语公式 (unless = if not)',
      badge: '避坑最高频',
      formula: 'Unless + [肯定形式从句 S + V] , [主句 S + will not / cannot ...]',
      desc: 'unless 本身自带否定含义，相当于 if ... not（除非……否则不……）。在 unless 从句内部，必须使用肯定形式动词，严禁在从句中重复出现 not！',
      beginnerTip: '【小白秒懂换算】看到 unless 就把它脑补成 "if ... not"！Unless you provide a valid token = If you DO NOT provide a valid token。记住：unless 自己就是个“否定词包”，从句里面千万不要再加 not 啦！',
      tokens: [
        { label: 'Unless (除非/若不)', role: '否定条件引导', color: 'rose', desc: '内置否定逻辑，从句内部用肯定动词' },
        { label: 'Affirmative Sub Clause', role: '肯定形式从句', color: 'emerald', desc: 'you configure the secret key (禁 not)' },
        { label: 'Main Result', role: '主句结果', color: 'blue', desc: 'the connection will be refused' },
      ],
      example: {
        en: 'The API request will fail unless you include a valid Bearer token.',
        zh: '除非你附带有效的 Bearer 令牌，否则该 API 请求将会失败。',
      },
    },
    {
      id: 'f-reason-connector-hierarchy',
      title: '原因状语三大梯队与介词短语区分公式 (Causal Hierarchy)',
      badge: '原因因果法则',
      formula: '【连词 + 完整从句 SVO】 (because / since / as) VS 【介词短语 + 名词/代词】 (because of / due to / owing to)',
      desc: '表达原因时严格区分连词和介词短语：because 后面必须跟一个拥有主谓宾的完整句子；而 because of / due to 后面只能跟名词、代词或动名词（名词短语），绝对不能直接跟句子！且 because 绝不与 so 连用！',
      beginnerTip: '【三秒辨析法】后面有动词有完整句子？选 because！后面只有干巴巴的名词或短语？选 because of 或 due to！例如：because [the server crashed] (有完整动作) VS because of [the crash] (只有名词)！',
      tokens: [
        { label: 'because + SVO', role: '直接强因果从句', color: 'blue', desc: '回答 Why 的唯一标准连词' },
        { label: 'since / as + SVO', role: '显而易见已知原因', color: 'purple', desc: '既然/由于（既然缓存已就绪，查询极快）' },
        { label: 'because of + Noun', role: '介词短语修饰', color: 'emerald', desc: 'due to network congestion (后接名词)' },
      ],
      example: {
        en: 'The build was aborted because the disk ran out of space (从句) / due to insufficient disk space (名词短语).',
        zh: '由于磁盘空间耗尽，构建已被中止。',
      },
    },
    {
      id: 'f-concession-although-vs-despite',
      title: '让步状语连词 vs 介词短语区分公式 (Concession Hierarchy)',
      badge: '让步反转法则',
      formula: '【让步连词 + 完整从句】 (although / even though) VS 【让步介词 + 名词/代词】 (despite / in spite of)',
      desc: '让步结构表示“虽然/尽管存在客观阻碍，主句依然实现了反转”。连词 although 后面接完整分句；介词 despite / in spite of 后面接名词短语。两者绝不可与 but 同时出现在同一个句子中！',
      beginnerTip: '【小白秒懂口诀】一山不容二虎：用了 Although，严禁加 but！另外，看后面是不是句子：although + 完整句子；despite + 名词！例如：although [he was tired] (完整句) VS despite [his tiredness] (名词)！千万别写 *despite of*（英文里只有 in spite of，despite 后面不加 of）！',
      tokens: [
        { label: 'Although / Even though', role: '让步连词 + SVO', color: 'blue', desc: '虽然/尽管（接完整主谓分句）' },
        { label: 'Despite / In spite of', role: '让步介词 + 名词', color: 'purple', desc: '尽管（接名词/代词/动名词，禁加of）' },
        { label: 'Main Clause (禁 but)', role: '主句独立结果', color: 'emerald', desc: '系统依然平稳运行' },
      ],
      example: {
        en: 'Although the traffic doubled, latency remained stable. / Despite the doubled traffic, latency remained stable.',
        zh: '尽管流量翻倍，延迟依然保持稳定。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-condition-clause-demo',
      badge: '条件从句解构',
      type: 'First Conditional (真实条件句 · 主将从现)',
      title: '条件状语从句：自动化流水线容灾条件',
      desc: '主句使用将来时 will automatically fail over，从句以 if 引导，谓语动词 detects 为一般现在时单三。',
      formula: '[主句 S + will + V] + [if + 从句 S + V (一般现在时单三)]',
      sentence: 'The architecture will automatically fail over if the heartbeat monitor detects node failure.',
      translation: '如果心跳监控器检测到节点故障，该架构将自动执行故障转移。',
      parts: [
        { text: 'The architecture', role: '主句主语', type: 'subject', detail: '系统架构主体' },
        { text: 'will automatically fail over', role: '主句谓语 (将来时)', type: 'verb', detail: '将自动发生转移' },
        { text: 'if', role: '条件从属连词', type: 'linker', detail: '如果 · 引导条件从句' },
        { text: 'the heartbeat monitor', role: '从句主语 (单三)', type: 'subject', detail: '心跳监控组件' },
        { text: 'detects', role: '从句动词 (现在时单三)', type: 'verb', detail: '检测到 · 严禁写 will detect！' },
        { text: 'node failure', role: '从句宾语', type: 'object', detail: '节点故障' },
      ],
      explanation: '即使故障转移和故障检测都可能在未来发生，if 从句中动词必须使用一般现在时单三 detects，绝不可使用 will detect！',
      beginnerAnalogy: '“主将从现”：主句挑大梁用 will，从句当小兵只用现在时！',
      itAnalogy: 'monitor.on("failure", () => cluster.failover());',
    },
    {
      id: 'sk-reason-because-demo',
      badge: '原因从句解构',
      type: 'Causal Clause (原因状语从句)',
      title: '原因状语从句：系统回滚故障归因',
      desc: '主句交代系统行为，because 引导完整分句深入阐明导致回滚的核心机理。',
      formula: 'S + V + O + because + [从句完整 SVO]',
      sentence: 'The team rolled back the deployment because the migration script caused deadlocks.',
      translation: '团队回滚了这次部署，因为数据迁移脚本引发了死锁。',
      parts: [
        { text: 'The team', role: '主句主语', type: 'subject', detail: '运维团队' },
        { text: 'rolled back', role: '主句谓语', type: 'verb', detail: '执行回滚 · 过去式' },
        { text: 'the deployment', role: '主句宾语', type: 'object', detail: '本次部署' },
        { text: 'because', role: '原因从属连词', type: 'linker', detail: '因为 · 强因果连接' },
        { text: 'the migration script', role: '从句主语', type: 'subject', detail: '迁移脚本' },
        { text: 'caused', role: '从句谓语', type: 'verb', detail: '引发了' },
        { text: 'deadlocks', role: '从句宾语', type: 'object', detail: '数据库死锁' },
      ],
      explanation: 'because 引导的是结构完整的句子（script caused deadlocks）。主从句之间绝不可再加 so！',
      beginnerAnalogy: 'because 就像是强力胶水，把“因为什么原因”完整的一句话粘在主干动作后面。',
      itAnalogy: 'try { runMigration(); } catch (err) { rollback({ reason: err.message }); }',
    },
    {
      id: 'sk-concession-although-demo',
      badge: '让步从句解构',
      type: 'Concessive Clause (让步状语从句)',
      title: '让步状语从句：高压环境下的性能坚挺',
      desc: 'although 引导让步从句置于句首，主句交代反转结论，全句不出现 but。',
      formula: 'Although + [从句 S + V + P] , [主句 S + V + P (禁加 but)]',
      sentence: 'Although the system was under severe DDoS attack, the services remained responsive.',
      translation: '尽管系统遭受了严重的 DDoS 攻击，各项服务依然保持了可用响应。',
      parts: [
        { text: 'Although', role: '让步从属连词', type: 'linker', detail: '尽管/虽然 · 句首让步' },
        { text: 'the system was under severe DDoS attack,', role: '让步状语分句', type: 'subject', detail: '系统处于攻击之下' },
        { text: 'the services', role: '主句主语', type: 'subject', detail: '核心业务服务' },
        { text: 'remained', role: '主句系动词', type: 'linker', detail: '依然保持' },
        { text: 'responsive', role: '主句表语', type: 'predicative', detail: '快速响应状态' },
      ],
      explanation: '句首已有 Although，主句前面绝不能加 but！在英文中，Although 与 but 互斥，二者只能保留一个！',
      beginnerAnalogy: 'Although 就像太极拳的“以柔克刚”：虽然攻击很猛，但是我们依然稳健！但记住：打太极时不要把 but 拽进来！',
      itAnalogy: 'DDoSProtection.absorbAttack(); assert(service.isAvailable() === true);',
    },
  ],
  compares: [
    {
      id: 'cmp-if-will-redundancy',
      chinese: '如果明天网络出现卡顿，我们会手动重启交换机。',
      wrong: 'If the network will lag tomorrow, we will reboot the switch manually.',
      correct: 'If the network lags tomorrow, we will reboot the switch manually.',
      formula: 'if 从句强制使用一般现在时 lags，严禁使用 will lag！',
      reason: '主将从现铁律：在条件状语从句中，if 已经内嵌了未来假设，从句动词必须用一般现在时（单三记得加 -s），绝对禁止使用 will！',
      beginnerAnalogy: 'if 从句里永远不许出现 will！只要看到 if，将来时统统降级为现在时！',
      itAnalogy: 'TypeScript 约束：Condition expression must evaluate to Present State.',
    },
    {
      id: 'cmp-because-vs-because-of',
      chinese: '由于网络丢包率过高，数据库事务超时了。',
      wrong: 'The transaction timed out because of the network dropped packets. / because the packet loss.',
      correct: 'The transaction timed out because the network dropped packets. / ...due to high packet loss.',
      formula: 'because + [完整句子 SVO] VS because of / due to + [名词短语]',
      reason: 'because 是连词，必须带完整主谓宾句子；because of 是介词短语，只能接名词短语，绝不可反向混淆！',
      beginnerAnalogy: '带动作带句子的用 because；纯粹一个名词短语的用 because of 或 due to！',
    },
    {
      id: 'cmp-although-but-error',
      chinese: '虽然时间很紧迫，但是我们依然按时完成了重构。',
      wrong: 'Although time was tight, but we still finished the refactoring on time.',
      correct: 'Although time was tight, we still finished the refactoring on time.',
      formula: 'Although (让步从句) ... [逗号] 主句 (严禁出现 but！)',
      reason: '中文习惯“虽然……但是……”，但在英文中 Although 是从属连词，一旦前句变为从句，主句就必须是独立的！加了 but 会导致整句话没有一个独立主干！',
      beginnerAnalogy: '有 Although 就没有 but，有 but 就没有 Although！绝对不能两个都要！',
    },
  ],
  builders: [
    {
      id: 'b-adverbial-condition-builder',
      title: '主将从现条件状语拼装',
      instruction: '组装容灾条件句：「如果主数据库发生崩溃，只读副本将接管流量」',
      words: ['The read replica', 'will take over traffic', 'if', 'the primary database', 'crashes.'],
      targetSentence: 'The read replica will take over traffic if the primary database crashes.',
      explanation: '主句将来时 will take over，if 条件从句现在时单三 crashes。',
    },
    {
      id: 'b-adverbial-concession-builder',
      title: '让步状语从句拼装',
      instruction: '组装抗压反转句：「尽管存在网络延迟，分布式事务依然成功提交了」',
      words: ['Although', 'network latency was high,', 'the distributed transaction', 'committed successfully.'],
      targetSentence: 'Although network latency was high, the distributed transaction committed successfully.',
      explanation: 'Although 置于句首，中间用逗号隔开，主句直接陈述结果，严禁加 but。',
    },
  ],
  quizzes: [
    {
      id: 'q-clause-tense-mastery',
      title: '条件状语主将从现时态挑战',
      question: '如果要表达「除非客户批准变更，否则运维团队不会部署新代码」，正确的英文是：',
      options: [
        { text: 'The DevOps team will not deploy the code unless the client approves the change.', isCorrect: true, explanation: '正确！主句用 will not deploy，unless 引导条件从句且用肯定现在时单三 approves（unless = if not）。' },
        { text: 'The DevOps team will not deploy the code unless the client will approve the change.', isCorrect: false, explanation: '错误：unless 从句中绝对不能出现 will approve，必须用现在时 approves。' },
        { text: 'The DevOps team will not deploy the code unless the client does not approve.', isCorrect: false, explanation: '错误：unless 自带否定，从句不可再用 does not approve 重复否定。' },
      ],
    },
    {
      id: 'q-because-vs-despite-quiz',
      title: '连词 vs 介词选用诊断',
      question: '请在横线上填入最恰当的表达：\\n"The microservice remained operational ________ severe memory throttling."',
      options: [
        { text: 'despite (或 in spite of)', isCorrect: true, explanation: '正确！severe memory throttling 是名词短语，表达让步“尽管”，必须使用让步介词 despite！' },
        { text: 'although', isCorrect: false, explanation: '错误：although 是从属连词，后方必须接拥有主谓动词的完整句子，不可直接接名词短语。' },
        { text: 'because', isCorrect: false, explanation: '错误：语义是让步反转（节流了依然可用），且后方是名词短语。' },
      ],
    },
  ],
  tables: [
    {
      title: '五大核心状语从句及高频引导词全景速查表 (Adverbial Clauses Grid)',
      headers: ['从句类别', '核心引导连词', '逻辑使命与规则契约', '典型工程实战例句'],
      rows: [
        ['条件状语 (Condition)', 'if, unless, as long as, provided that', '设定动作成立的前提假设（严格主将从现）', 'We will scale out if traffic exceeds threshold.'],
        ['原因状语 (Reason)', 'because, since, as, for', '阐述动作发生的因果根由（严禁与 so 连用）', 'The job failed because the token was invalid.'],
        ['让步状语 (Concession)', 'although, though, even though, while', '承认客观困难但主句实现反转（严禁与 but 连用）', 'Although load was high, memory remained stable.'],
        ['时间状语 (Time)', 'when, while, as soon as, before, after', '标定动作发生的时间刻度（严格主将从现）', 'The sync triggers as soon as data arrives.'],
        ['目的与结果 (Purpose)', 'so that, in order that, so...that', '表明主句动作追求的目标意图或引发的客观结果', 'Write unit tests so that bugs can be caught early.'],
      ],
    },
    {
      title: '易混从属连词 vs 介词短语对照避坑表',
      headers: ['语义逻辑', '连词 (后接完整主谓分句 SVO)', '介词短语 (后接名词/代词短语)', '典型高频避坑对比'],
      rows: [
        ['原因因果', 'because / since / as', 'because of / due to / owing to', 'because the server crashed VS due to the crash'],
        ['让步转折', 'although / though / even though', 'despite / in spite of', 'although it was late VS despite the delay'],
        ['时间期间', 'while / when', 'during', 'while we were deploying VS during the deployment'],
      ],
    },
  ],
};
