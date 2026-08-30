import type { TopicContent } from '../../types';

export const objectClausesTopic: TopicContent = {
  meta: {
    id: 'object-clauses',
    title: '宾语从句',
    enTitle: 'Object Clauses',
    desc: 'that/whether/wh- 引导词分类、嵌入式疑问句还原陈述语序（去 did）核心秘籍',
    icon: '📦',
    pillarId: 'syntax',
    badge: '从句核心',
  },
  formulas: [
    {
      id: 'f-object-clause-anatomy',
      title: '宾语从句通用嵌套公式 (Embedded Object Clause)',
      badge: '从句公式',
      formula: '主句主语 + 动词 + [that / whether / 疑问词] + [从句主语 + 从句谓语 + 从句宾语 (严格陈述语序)]',
      desc: '当宾语本身不是一个单词，而是一个完整的事件动作流时，通过引导词胶水将整个分句嵌入动词后方充当宾语。',
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
      example: {
        en: 'I know how the bug happened (去除 did，动词变过去式 happened)。',
        zh: '我知道这个 bug 是怎么发生的。',
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
      itAnalogy: '类比把完整的 JSON 对象作为返回值：log.shows({ code: 500, from: "API" });',
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
      itAnalogy: '类比：getConfigPath() 是访问属性，而不是发起中断调用。',
    },
    {
      id: 'cmp-what-is-problem',
      chinese: '我知道问题是什么。',
      wrong: 'I know what is the problem.',
      correct: 'I know what the problem is.',
      formula: 'I know + what + 主语 + is',
      reason: '从句内部恢复陈述语序：主语 the problem 在前，系词 is 在后。',
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
  ],
};
