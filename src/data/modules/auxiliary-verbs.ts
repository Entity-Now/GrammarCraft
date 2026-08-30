import type { TopicContent } from '../../types';

export const auxiliaryVerbsTopic: TopicContent = {
  meta: {
    id: 'auxiliary-verbs',
    title: '助动词深度全景',
    enTitle: 'The Auxiliary Engine & Schedulers',
    desc: '语法调度器 CPU：do/be/have 三大助动词全景、时态吸收法则、双重身份辨析与陈述强调/倒装',
    icon: '⚙️',
    pillarId: 'verbs',
    badge: '时态调度器',
  },
  diagrams: [
    {
      id: 'd-aux-scheduler-tree',
      title: '三大核心助动词调度器职权全景树 (The Auxiliary Verbs Architecture)',
      desc: '助动词本身无实体动作意义，专职负责为实义动词调度时态、人称、疑问、否定与被动形态',
      code: `graph TD
    Scheduler["英语语法助动词总调度系统 (Auxiliary System)"] --> DoFam["1. do / does / did (通用调度器)\n- 一般疑问句提首倒装\n- not 否定句粘合胶水\n- 陈述句极度强调语气 (I DO agree)\n- 否定副词否定倒装 (Never did I see)"]
    Scheduler --> BeFam["2. be 动词调度器 (am/is/are/was/were/been/being)\n- 启动进行时态 (be + doing)\n- 启动被动语态 (be + done)"]
    Scheduler --> HaveFam["3. have 动词调度器 (have/has/had)\n- 启动完成时态 (have/has/had + done)"]`,
    },
  ],
  formulas: [
    {
      id: 'f-aux-absorption-rule',
      title: '助动词时态吸收黄金铁律 (The Tense Absorption Principle)',
      badge: '语法底层法则',
      formula: '助动词 (does / did) 强行吸收【时态 + 人称单三】➔ 紧随其后的实义动词必须强制降维还原为【裸动词原形 (V-base)】！',
      desc: '一山不容二虎！英语句子中的时态和三单标记只能由一个词承担。一旦借出助动词 does（吸收三单）或 did（吸收过去时），后面的主谓动词立刻失去时态外壳，必须恢复原形！',
      tokens: [
        { label: 'Does / Did', role: '吸收时态/人称', color: 'purple', desc: '吸收了单三 -es 或过去时 -ed' },
        { label: 'Lexical Verb', role: '强制还原原形', color: 'emerald', desc: '原形 run / go / work (严禁重复加 -s 或 -ed)' },
      ],
      example: {
        en: 'Did the query finish? (finish 还原原形，不可写 finished) / He does not care (care 还原原形).',
        zh: '查询执行完毕了吗？/ 他并不在乎。',
      },
    },
    {
      id: 'f-emphatic-do',
      title: '陈述句强调语气公式 (The Emphatic Do)',
      badge: '职场高阶表达',
      formula: '主语 + do / does / did (重读强调) + 动词原形 (V-base) + 宾语',
      desc: '当向客户、上级或跨团队澄清“我们确实做了这件事”时，在实义动词前加上 do/does/did，表达“确实、务必、千真万确”，极具职场沟通说服力！',
      example: {
        en: 'We DID verify the backup before deploying the patch.',
        zh: '在部署补丁之前，我们确实对备份进行了严格的校验！',
      },
    },
    {
      id: 'f-aux-dual-identity',
      title: 'do 与 have 实义动词 vs 助动词 双重身份辨析',
      badge: '高频混淆点',
      formula: '实义动词 (做具体事/拥有实体) VS 助动词 (无词义，仅负责搭建疑问/否定/完成时态框架)',
      desc: '在同一句话中，同一个单词可以既作为助动词出现，又作为实义动词出现！如 Do you do your work? / I have had lunch.',
      tokens: [
        { label: '第一位 (Aux)', role: '助动词调度器', color: 'blue', desc: 'Do you... / Have you... 负责构成问句框架' },
        { label: '第二位 (Main)', role: '核心实义动作', color: 'emerald', desc: '...do your work (做) / ...had lunch (吃)' },
      ],
      example: {
        en: 'Do you do performance benchmarking regularly? (第一个 Do 是助动词，第二个 do 是实义动词)',
        zh: '你们定期进行性能基准测试吗？',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-aux-question-inversion',
      badge: '语法机制 1：倒装提首',
      type: 'Aux Inversion',
      title: '助动词倒装调度：启动一般疑问句',
      desc: '借用 did 吸收过去时态，动词 restore 还原为裸原形。',
      formula: 'Did (助动词吸收过去时) + S (the DBA) + restore (裸动词原形) + O (the data)?',
      sentence: 'Did the database administrator restore the corrupted partition?',
      translation: '数据库管理员修复还原了损坏的分区吗？',
      parts: [
        { text: 'Did', role: '助动词提前', type: 'verb', detail: '借出 did 吸收过去时，置于句首启动疑问' },
        { text: 'the database administrator', role: '主语 (S)', type: 'subject', detail: '动作执行者' },
        { text: 'restore', role: '实义动词原形 (V-base)', type: 'verb', detail: '还原为原形，不可写 restored' },
        { text: 'the corrupted partition?', role: '宾语 (O)', type: 'object', detail: '受体分区' },
      ],
      explanation: 'Did 已经承担了过去时，restore 必须彻底恢复动词原形，绝不可出现 *Did the DBA restored 的语法病句。',
      itAnalogy: 'invoker.query({ tense: "PAST", action: "restore", target: partition });',
    },
    {
      id: 'sk-aux-emphatic-do',
      badge: '语法机制 2：强调肯定',
      type: 'Emphatic Do',
      title: '陈述句加 do 强力强调语气',
      desc: 'did 赋予坚决肯定的确凿语气。',
      formula: 'S + did (强烈强调助词) + conduct (动词原形) + O (stress tests)',
      sentence: 'Our QA team did conduct comprehensive stress tests before release.',
      translation: '我们的 QA 团队在发版前的确执行了极其全面的压力测试。',
      parts: [
        { text: 'Our QA team', role: '主语 (S)', type: 'subject', detail: '测试团队' },
        { text: 'did', role: '强调助动词 (过去时)', type: 'verb', detail: '确实、千真万确地' },
        { text: 'conduct', role: '实义动词原形', type: 'verb', detail: '执行 · 保持原形' },
        { text: 'stress tests', role: '宾语 (O)', type: 'object', detail: '压力测试' },
        { text: '[before release]', role: '时间介词短语', type: 'adverbial', detail: '发版之前' },
      ],
      explanation: '在陈述句中额外加入 did，用于打消对方怀疑，强力证实动作的真实性。',
      itAnalogy: 'assert(team.conductedTests === true, "We definitely verified this!");',
    },
  ],
  transforms: [
    {
      id: 'tf-aux-affirmative-to-neg',
      badge: '调度演变机',
      title: '肯定句 ➔ 借助助动词演变为否定句与疑问句',
      desc: '观察实义动词如何借助助动词完成否定与疑问，以及动词如何去 -s 恢复原形。',
      from: {
        type: '一般现在时肯定句 (三单 supports)',
        badgeColor: 'blue',
        sentence: 'The legacy API supports WebSocket streaming.',
        translation: '这个遗留 API 支持 WebSocket 流式传输。',
        parts: [
          { text: 'The legacy API', role: '主语', status: 'normal' },
          { text: 'supports', role: '三单实义动词', status: 'changed', note: '含有单三 -s' },
          { text: 'WebSocket streaming.', role: '宾语', status: 'normal' },
        ],
      },
      to: {
        type: '否定句 (借入 does not + 恢复原形 support)',
        badgeColor: 'purple',
        sentence: 'The legacy API does not support WebSocket streaming.',
        translation: '这个遗留 API 并不支持 WebSocket 流式传输。',
        parts: [
          { text: 'The legacy API', role: '主语', status: 'normal' },
          { text: 'does not', role: '单三否定助动词', status: 'added', note: 'does 吸收单三 -s，挂载 not' },
          { text: 'support', role: '动词原形', status: 'changed', note: '去 -s 恢复裸原形' },
          { text: 'WebSocket streaming.', role: '宾语', status: 'normal' },
        ],
      },
      transitionRules: [
        '1. 实义动词不能直接挂载 not（绝不可写 *supports not），必须派入助动词 do/does/did 充当胶水。',
        '2. 主语是单数第三人称时，派入 does 吸收单三，实义动词 supports 必须去 s 还原为 support。',
        '3. 简写口语形式：does not ➔ doesn’t；do not ➔ don’t；did not ➔ didn’t。',
      ],
      itAnalogy: '调度器模式：scheduler.dispatch({ type: "NEGATION", target: api, action: "support" });',
    },
  ],
  builders: [
    {
      id: 'b-aux-question-builder',
      title: '拼装助动词倒装疑问句',
      instruction: '组装问句：「数据库管理员排查出内存死锁问题了吗？」',
      words: ['Did', 'the database administrator', 'identify', 'the deadlock issue?'],
      targetSentence: 'Did the database administrator identify the deadlock issue?',
      explanation: 'Did 提前启动过去时一般疑问句，identify 恢复动词原形。',
    },
  ],
  compares: [
    {
      id: 'cmp-did-went-error',
      chinese: '她昨天没有回家。（初学者最容易犯的动词时态双重叠加）',
      wrong: 'She did not went home yesterday.',
      correct: 'She did not go home yesterday.',
      formula: 'did not + 动词原形 (严禁写 went)',
      reason: 'did 已经吸收了过去时，后面的动词必须降维恢复为原形 go！写成 *did not went 相当于同时传递了两次过去时，属于语法语法双重溢出错误。',
      itAnalogy: 'TenseBufferOverflow: Duplicate past tense modifiers detected.',
    },
    {
      id: 'cmp-he-dont-know',
      chinese: '他不知道配置文件在哪里。',
      wrong: 'He don’t know where the config file is.',
      correct: 'He doesn’t know where the config file is.',
      formula: '主语是 he/she/it 时，助动词必须用 doesn’t (does not)',
      reason: '第三人称单数（he）的助动词必须是 does/doesn’t，不可使用复数形态 don’t。',
    },
  ],
  quizzes: [
    {
      id: 'q-aux-verb-base',
      title: '时态吸收还原原形自测',
      question: '请选出语法完全正确的一句话：',
      options: [
        { text: 'Does this cluster supports auto-scaling?', isCorrect: false, explanation: '错误：Does 已经吸收了三单，后面的动词必须恢复原形 support，不能再带 -s！' },
        { text: 'Does this cluster support auto-scaling?', isCorrect: true, explanation: '正确！Does 吸收三单，support 恢复裸原形。' },
        { text: 'Do this cluster support auto-scaling?', isCorrect: false, explanation: '错误：this cluster 是单数，助动词应该用 Does 而不是 Do。' },
      ],
    },
    {
      id: 'q-aux-emphatic-quiz',
      title: '陈述句强调语气判定',
      question: '如果要向客户郑重声明「我们上周确实对所有系统实施了安全加密」，地道强有力的英文表达是：',
      options: [
        { text: 'We did encrypt all systems last week.', isCorrect: true, explanation: '正确！did + 动词原形 encrypt，表示强烈强调语气“确实执行了加密”。' },
        { text: 'We did encrypted all systems last week.', isCorrect: false, explanation: '错误：did 之后不能再加过去式 encrypted，必须恢复原形。' },
        { text: 'We were encrypt all systems last week.', isCorrect: false, explanation: '错误：were encrypt 结构非法。' },
      ],
    },
  ],
  tables: [
    {
      title: '英语三大核心助动词调度职能与人称时态分配表 (The Auxiliary Schedulers Matrix)',
      headers: ['助动词大类', '时态/人称分工', '语法触发场景', '核心规则与约束', '技术场景标准例句'],
      rows: [
        ['do', '现在时 (I / you / we / they)', '一般疑问句 / 否定句 / 强调句', '后续实义动词强制保持裸原形', 'Do you monitor network traffic?'],
        ['does', '现在时 (he / she / it / 单数)', '单三疑问句 / 否定句 / 强调句', '吸收单三 -s，后续动词去 s 变原形', 'The API does not return sensitive data.'],
        ['did', '过去时 (所有人称通用)', '过去时疑问句 / 否定句 / 强调句', '吸收过去时 -ed，后续动词恢复原形', 'We did review the code before merging.'],
        ['be (am/is/are)', '现在时进行 / 被动', '现在进行时 (be doing) / 一般现在被动', 'be 提供时态，实义动词变 -ing 或 -ed', 'The database is currently syncing tables.'],
        ['be (was/were)', '过去时进行 / 被动', '过去进行时 / 一般过去被动', '记录过去的进行流沙或过去被动承受', 'The server was restarted at midnight.'],
        ['have / has', '现在完成时 (have复数/has单三)', '现在完成时 (have/has + Done)', '启动完成时态，后续动词必须为过去分词', 'We have already patched the vulnerability.'],
        ['had', '过去完成时 (所有人称通用)', '过去完成时 (had + Done)', '过去的过去，提供先发时间守卫', 'The backup had finished before the crash.'],
      ],
    },
  ],
};
