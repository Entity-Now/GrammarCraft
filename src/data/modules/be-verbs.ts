import type { TopicContent } from '../../types';

export const beVerbsTopic: TopicContent = {
  meta: {
    id: 'be-verbs',
    title: 'be动词深度全景',
    enTitle: 'The Complete Be-Verbs Mastery',
    desc: '从四维时空存在锚点、8大形态演变、5大核心用法到 been vs being 与虚拟式裸原形的彻底解构',
    icon: '⚡',
    pillarId: 'verbs',
    badge: '存在之核',
  },
  diagrams: [
    {
      id: 'd-be-4d-model',
      title: 'Be 动词四维时空存在锚点模型 (The 4D Existence Matrix)',
      desc: 'Be 动词不仅仅是“是”，它是英语语法在四维时空网格中锚定主语状态的核心连接器',
      code: `graph TD
    Be["be 动词 (时空存在锚点)"] --> Axis1["1. 身份轴 (Identity)\n我是谁？属于哪一类？\nI am an engineer."]
    Be --> Axis2["2. 状态轴 (State)\n当前呈现什么属性/特征？\nThe system is stable."]
    Be --> Axis3["3. 位置轴 (Location)\n在物理或抽象空间何处？\nThe logs are in the cloud."]
    Be --> Axis4["4. 时间切片 (Time Snapshot)\n过去 vs 现在 vs 持续完成\nwas (回溯) / is (此刻) / been (跨越)"]`,
    },
    {
      id: 'd-be-family-tree',
      title: 'Be 动词全家桶 8 大形态与语法职责演变谱系',
      desc: 'be 原形、现在式 (am/is/are)、过去式 (was/were)、过去分词 (been)、现在分词 (being)',
      code: `graph LR
    Base["be (动词原形)\n情态动词后/虚拟式\ncan be / must be / recommend be"] --> Present["现在时形态\nam (第一人称 I)\nis (单数单三 he/she/it)\nare (复数/第二人称 you/we/they)"]
    Base --> Past["过去时形态\nwas (I / he / she / it)\nwere (you / we / they)"]
    Base --> Participle["分词变形\nbeen (过去分词: 配合 have/has/had 构成完成态)\nbeing (现在分词: 配合 be 构成进行态 / 充当动名词)"]`,
    },
  ],
  formulas: [
    {
      id: 'f-be-five-roles',
      title: 'Be 动词五大核心语法角色全景公式',
      badge: '全景职责',
      formula: '1. 主系表赋值 (S + Be + 表语) | 2. 进行时助动 (Be + V-ing) | 3. 被动语态 (Be + V-ed) | 4. 存在句型 (There be) | 5. 计划意图 (Be to do)',
      desc: 'Be 动词是英语中身兼最多职责的超级动词：既能独当一面充当系动词连接主语和表语，又能作为辅助引擎调度进行时态、被动语态和正式计划安排！',
      tokens: [
        { label: 'Role 1: 系动词', role: '状态属性赋值', color: 'blue', desc: 'The server is online (连接形容词/名词/介词短语)' },
        { label: 'Role 2: 进行助动', role: '正在发生流沙', color: 'emerald', desc: 'We are deploying (be 提供时态，-ing 提供正在进行含义)' },
        { label: 'Role 3: 被动助动', role: '客观受体视角', color: 'purple', desc: 'The bug was fixed (be 提供时态，-ed 提供被动含义)' },
        { label: 'Role 4: 存在结构', role: '空间客观存在', color: 'amber', desc: 'There are errors (引导客观存在，就近原则决定单复数)' },
      ],
      example: {
        en: 'The server is online (系词) / is running (进行) / was deployed (被动) / is to be launched (计划).',
        zh: '服务器是在线的（系词）/ 正在运行（进行）/ 已经部署（被动）/ 即将发布（计划）。',
      },
    },
    {
      id: 'f-been-vs-being',
      title: 'been 与 being 终极区分方程式',
      badge: '核心痛点',
      formula: 'have / has / had + been (表“完成/持续/去过/历史跨度”) VS am / is / are / was / were + being (表“此刻正在发生/正在被/表现出”)',
      desc: 'been 是过去分词，必须由 have/has/had 启动，强调动作从过去跨越到现在；being 是现在分词，由 be 启动，强调“此时此刻临时正在进行”或“正在被处理”。',
      tokens: [
        { label: 'been', role: '过去分词', color: 'purple', desc: 'I have been busy (持续忙碌) / have been to Beijing (去过某地)' },
        { label: 'being', role: '现在分词', color: 'emerald', desc: 'The node is being restarted (正在被重启) / He is being silly (此刻正在犯傻)' },
      ],
      example: {
        en: 'The project has been approved (已审批生效) vs The project is being approved (正在审批中).',
        zh: '项目已被审批通过（已完成）vs 项目正在接受审批（进行中）。',
      },
    },
    {
      id: 'f-be-to-do',
      title: 'be to do 句型：官方安排与必然意图',
      badge: '高阶用法',
      formula: '主语 + am / is / are / was / were + to do something',
      desc: '在技术发版声明、官方政策或新闻发布中，be to do 用于表达“按既定计划日程安排要做某事”或“命令、职责要求”。',
      example: {
        en: 'The new API version is to be launched next Monday morning.',
        zh: '新的 API 版本定于下周一上午正式上线。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-be-identity',
      badge: '用法 1：身份定位',
      type: 'Subject + Linker + Noun Predicative',
      title: '身份轴定位：主语属于哪个类别',
      desc: '主语通过 is 锚定到架构师这一社会分工类别上。',
      formula: 'S (主语) + is (单三系动词) + a cloud architect (名词表语)',
      sentence: 'She is an experienced cloud solution architect.',
      translation: '她是一位经验丰富的云解决方案架构师。',
      parts: [
        { text: 'She', role: '主语 (S)', type: 'subject', detail: '第三人称单数女性' },
        { text: 'is', role: '系动词 (Linker)', type: 'linker', detail: '单数一般现在时态' },
        { text: 'an experienced cloud architect', role: '名词表语 (P)', type: 'predicative', detail: '身份类别说明' },
      ],
      explanation: 'is 充当逻辑等号：She = Cloud Architect。',
      itAnalogy: 'she.role = "CloudArchitect"; she instanceof Architect === true;',
    },
    {
      id: 'sk-be-being-passive',
      badge: '用法 2：进行时被动',
      type: 'Present Continuous Passive',
      title: '正在被处理：is + being + 过去分词',
      desc: '极为地道的运维与工单状态表达。',
      formula: 'S + is + being (正在进行中) + audited (过去分词被动)',
      sentence: 'The legacy database is currently being audited by security experts.',
      translation: '遗留数据库当前正处于安全专家的审计审核之中。',
      parts: [
        { text: 'The legacy database', role: '动作承受主语', type: 'subject', detail: '数据库' },
        { text: 'is being', role: '现在进行被动助动词组', type: 'linker', detail: 'is 提供现在时，being 提供正在进行状态' },
        { text: 'audited', role: '核心动词过去分词', type: 'verb', detail: '被审计' },
        { text: '[by security experts]', role: '动作发起者介词短语', type: 'adverbial', detail: '由专家' },
      ],
      explanation: 'is being audited 完美融合了“现在进行时”与“被动语态”，表明审计动作此刻正发生在数据库上。',
      itAnalogy: 'database.status = "AUDITING_IN_PROGRESS";',
    },
    {
      id: 'sk-be-subjunctive-base',
      badge: '用法 3：虚拟语气裸原形',
      type: 'Subjunctive Bare Base',
      title: '命令建议从句中的原形 be',
      desc: '在 recommend/require that 后的从句中强制使用裸动词原形 be。',
      formula: 'S + recommend that + S + [be + 过去分词]',
      sentence: 'The team lead recommended that the container be restarted immediately.',
      translation: '技术组长建议立即将该容器进行重启。',
      parts: [
        { text: 'The team lead', role: '主句主语', type: 'subject', detail: '组长' },
        { text: 'recommended', role: '虚拟驱动动词', type: 'verb', detail: '建议' },
        { text: 'that the container', role: '从句连词与主语', type: 'subject', detail: '容器' },
        { text: 'be restarted', role: '虚拟式动词原形', type: 'verb', detail: '省略 should，保留原形 be' },
        { text: '[immediately]', role: '时间副词状语', type: 'adverbial', detail: '立即' },
      ],
      explanation: '严禁写成 *was restarted 或 *is restarted！虚拟语气命令建议从句必须使用裸动词原形 be。',
      itAnalogy: 'spec.require(container, c => c.state === State.RESTARTING);',
    },
  ],
  transforms: [
    {
      id: 'tf-be-neg-inv',
      badge: '句式变换形态机',
      title: 'Be 动词的陈述 ➔ 否定 ➔ 疑问演变流水线',
      desc: '与实义动词必须借用 do 不同，be 动词自身拥有全套调度权，否定直接加 not，疑问直接置顶句首！',
      from: {
        type: '陈述肯定句',
        badgeColor: 'blue',
        sentence: 'The authentication server is online and healthy.',
        translation: '身份认证服务器目前在线且健康。',
        parts: [
          { text: 'The server', role: '主语', status: 'normal' },
          { text: 'is', role: '系动词单三', status: 'normal' },
          { text: 'online and healthy.', role: '形容词表语', status: 'normal' },
        ],
      },
      to: {
        type: '一般疑问句 (直接倒装提首)',
        badgeColor: 'purple',
        sentence: 'Is the authentication server online and healthy?',
        translation: '身份认证服务器目前在线且健康吗？',
        parts: [
          { text: 'Is', role: 'Be动词提首', status: 'moved', note: '直接将 is 移至句首，无需借用 does' },
          { text: 'the server', role: '主语后置', status: 'normal' },
          { text: 'online and healthy?', role: '表语保持原位', status: 'normal' },
        ],
      },
      transitionRules: [
        '1. 否定规则：在 be 动词（am/is/are/was/were）后直接加 not（is not -> isn’t），无需助动词。',
        '2. 疑问规则：直接将 be 动词移动到主语的最前面，绝不能出现 *Does the server is online 的低级错误。',
        '3. 简短回答：Yes, it is. / No, it isn’t.',
      ],
      itAnalogy: 'be动词自身实现了 InversionCapable 接口，具有一等公民的语法调度权。',
    },
  ],
  builders: [
    {
      id: 'b-be-builder-being',
      title: '拼装正在被更新句式',
      instruction: '组装句子：「生产环境的 SSL 证书当前正在被更新」',
      words: ['The production SSL certificate', 'is', 'currently being updated', 'by the DevOps team.'],
      targetSentence: 'The production SSL certificate is currently being updated by the DevOps team.',
      explanation: 'is being updated 是现在进行时被动语态，强调此刻正在被更新的动作流。',
    },
    {
      id: 'b-be-builder-been',
      title: '拼装完成持续状态句式',
      instruction: '组装句子：「该数据库集群在过去六个月中一直处于稳定状态」',
      words: ['The database cluster', 'has been', 'stable', 'for the past six months.'],
      targetSentence: 'The database cluster has been stable for the past six months.',
      explanation: 'has been stable 表达从半年前持续至今的稳定状态，必须使用 has been。',
    },
  ],
  compares: [
    {
      id: 'cmp-be-omission',
      chinese: '我是一个软件工程师。（初学者最易漏掉 be 动词）',
      wrong: 'I a software engineer.',
      correct: 'I am a software engineer.',
      formula: 'I + am + 名词表语 (不可省略系动词)',
      reason: '中文里“我是工程师”中的“是”常被省略或弱化，但在英文强类型语法中，句子必须拥有一个核心谓语动词，缺少 am 会导致类型检查失败（Null Verb Reference）。',
      itAnalogy: 'TypeError: Missing statement predicate operator (=).',
    },
    {
      id: 'cmp-been-vs-was',
      chinese: '这个服务器已经离线了三天了。（至今仍离线）',
      wrong: 'This server was offline for three days.',
      correct: 'This server has been offline for three days.',
      formula: 'has been + 形容词 + for 时间段 (不可用 was)',
      reason: 'was offline 只表示过去曾经离线，现在可能早就上线了；表达“从过去持续到现在依然离线”必须使用现在完成时 has been！',
    },
    {
      id: 'cmp-be-being-silly',
      chinese: '他现在正在故意犯傻。（强调临时此刻的表现）',
      wrong: 'He is silly.',
      correct: 'He is being silly.',
      formula: 'is being + 形容词 (临时表现 vs 本性如此)',
      reason: 'He is silly 表达他这个人天生愚蠢（本性特征）；而 He is being silly 使用了 being，特指他现在这一刻正在故意装傻或做出愚蠢的行为！',
    },
  ],
  quizzes: [
    {
      id: 'q-be-been-being',
      title: 'been vs being 实战抉择',
      question: '如果要表达「新的安全补丁正在被部署到各个节点上」，空格处应填入：\n"The new security patch is ______ deployed to all nodes right now."',
      options: [
        { text: 'been', isCorrect: false, explanation: '错误：been 是过去分词，前面必须搭配 have/has/had，不可搭配 is 表进行。' },
        { text: 'being', isCorrect: true, explanation: '正确！is being deployed 构成了现在进行时被动语态，强调此刻“正在被部署”。' },
        { text: 'be', isCorrect: false, explanation: '错误：is be 属于双动词非法堆叠。' },
      ],
    },
    {
      id: 'q-be-subjunctive',
      title: '虚拟语气中的 be 动词形态',
      question: '安全总监强烈建议「所有数据库备份在写入磁盘前必须完成加密」，正确的从句谓语是：\n"The director required that all backups ______ encrypted before writing to disk."',
      options: [
        { text: 'were', isCorrect: false, explanation: '错误：虚拟语气建议要求从句中不使用一般过去式 were。' },
        { text: 'be', isCorrect: true, explanation: '正确！在 require that 引导的虚拟从句中，谓语动词必须使用裸原形 be（省略 should）。' },
        { text: 'are', isCorrect: false, explanation: '错误：不可直接使用一般现在时 are。' },
      ],
    },
  ],
  tables: [
    {
      title: 'Be 动词全家桶 8 大形态及语法应用全景对照表 (The Complete Be Verbs Matrix)',
      headers: ['形态分类', '单词形式', '对应人称/时态', '语法功能角色', '典型技术场景例句'],
      rows: [
        ['原形 (Base)', 'be', '情态动词后 / 不定式 / 虚拟式', '跟在 can/will 后；命令从句裸原形', 'The container must be secured. / recommend it be restarted.'],
        ['现在式 (Present)', 'am', '第一人称单数 (I)', '当前身份、位置与状态锚定', 'I am responsible for this microservice.'],
        ['现在式 (Present)', 'is', '第三人称单数 (he/she/it/单数名词)', '当前单数实体状态赋值', 'The production cluster is healthy.'],
        ['现在式 (Present)', 'are', '第二人称 / 复数 (you/we/they)', '当前复数实体状态赋值', 'All worker threads are currently active.'],
        ['过去式 (Past)', 'was', '第一人称单数 / 第三人称单数', '过去某一时刻的存在切片', 'The server was offline at 2:00 AM yesterday.'],
        ['过去式 (Past)', 'were', '第二人称 / 复数 (you/we/they)', '过去某一时刻的复数存在切片', 'The logs were archived last week.'],
        ['过去分词 (Past Participle)', 'been', '完成时态 (have/has/had 之后)', '从过去持续到现在 / 已经完成去过', 'The system has been running smoothly for 100 days.'],
        ['现在分词 (Present Participle)', 'being', '进行时态 (be 之后) / 动名词', '此刻正在进行 / 正在被 / 临时行为', 'The database is being migrated right now.'],
      ],
    },
  ],
};
