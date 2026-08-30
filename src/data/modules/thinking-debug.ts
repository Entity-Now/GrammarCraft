import type { TopicContent } from '../../types';

export const thinkingDebugTopic: TopicContent = {
  meta: {
    id: 'thinking-debug',
    title: '思维差异与Debug法',
    enTitle: 'Thinking & Fullstack Debug',
    desc: '意合(JS)与形合(C#/Rust)思维根源、全栈3步Debug法与告别中式直译底层重构',
    icon: '🧠',
    pillarId: 'syntax',
    badge: '思维跃迁',
  },
  diagrams: [
    {
      id: 'd-debug-flow',
      title: '全栈工程师 3 步造句 Debug 流水线 (The 3-Step Pipeline)',
      desc: '杜绝中文直译思维：从唯一主角、核心谓语到修饰参数后置解耦',
      code: `graph LR
    Step1["第 1 步: 锁定唯一主角\n(确定主语 Subject)"] --> Step2["第 2 步: 提取单一核心动词\n(确定谓语 Finite Verb)"]
    Step2 --> Step3["第 3 步: 其余动作降级为 to do/ing\n(非谓语降级)"]
    Step3 --> Step4["第 4 步: 修饰参数通通往后扔\n(地点/方式/时间状语后置)"]`,
    },
  ],
  formulas: [
    {
      id: 'f-thinking-contrast',
      title: '中英语言底层类型系统对比公式',
      badge: '编程语言类比',
      formula: '中文思维 ≈ JavaScript (弱类型 / 意合 / 隐式省略主语) VS 英文思维 ≈ Rust/C# (强类型 / 形合 / 主谓宾严格契约)',
      desc: '中文依靠意念并列拼凑，主语常省略，动词成串堆砌；英文强类型契约要求句子骨架完整，一句话有且仅有一个核心谓语动词，其余动作必须通过 to do、doing、done 或介词降级！',
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
      id: 'f-debug-3steps',
      title: '3 步全栈 Debug 实战法则',
      badge: 'Debug 公式',
      formula: '1. 找唯一主角 (Who/What) ➔ 2. 找核心动作 (Verb) ➔ 3. 补充参数往句尾扔 (Modifiers)',
      desc: '写英文时，先锁定主干 S + V + O，把地点（in the office）、方式（with C#）、时间（every day）作为后置修饰参数挂载。',
      example: {
        en: 'writeCode({ location: "office", tool: "C#", frequency: "daily" })',
        zh: '类似于函数参数解耦。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-debug-showcase',
      badge: 'Debug 流程演示',
      type: 'SVO + Modifiers',
      title: '形合语序：核心主干 + 挂载修饰参数',
      desc: '先说核心动作（主谓宾），再把地点、方式、时间等附加参数依次往后扔。',
      formula: 'S (主语) + V (谓语) + O (宾语) + 地点状语 + 方式状语 + 时间状语',
      formulaDesc: '结构强约束：核心主干独立完整，修饰参数依次排后。',
      sentence: 'I write code in the office with C# every day.',
      translation: '我每天在办公室用 C# 写代码。',
      parts: [
        { text: 'I', role: '主语 (S)', type: 'subject', detail: '我 · 唯一主角' },
        { text: 'write', role: '谓语 (V)', type: 'verb', detail: '写 · 核心动作' },
        { text: 'code', role: '宾语 (O)', type: 'object', detail: '代码 · 动作客体' },
        { text: '[in the office]', role: '地点状语', type: 'adverbial', detail: '在办公室 · 空间参数' },
        { text: '[with C#]', role: '方式状语', type: 'adverbial', detail: '用 C# · 工具参数' },
        { text: '[every day]', role: '时间状语', type: 'adverbial', detail: '每天 · 时间参数' },
      ],
      explanation: '中文习惯将状语全部堆在动词前面，而英文强类型思维要求先确立主干 (I write code)，再将修饰参数挂载在句尾。',
      itAnalogy: '类比函数调用：writeCode({ location: "office", tool: "C#", frequency: "daily" });',
    },
    {
      id: 'sk-debug-error-page',
      badge: 'Debug 纠错解构',
      type: 'Compound Sentence',
      title: '复合句：主系表 + 主谓宾',
      desc: '解决中文直译缺乏系动词与代词主语的典型问题。',
      formula: '[S + Linker + P] + [S + V + O]',
      sentence: 'This page is very slow, and it severely affects user experience.',
      translation: '这个页面加载很慢，严重影响了用户体验。',
      parts: [
        { text: 'This page', role: '前半句主语', type: 'subject', detail: '页面主体' },
        { text: 'is', role: '系动词', type: 'linker', detail: '连接形容词 slow' },
        { text: 'very slow', role: '表语', type: 'predicative', detail: '很慢的' },
        { text: 'and it', role: '并列连词 + 代词', type: 'subject', detail: '补齐主语 it' },
        { text: 'severely affects', role: '谓语动词', type: 'verb', detail: '严重影响' },
        { text: 'user experience', role: '宾语', type: 'object', detail: '用户体验' },
      ],
      explanation: '中文直译常写成 *This page load very slow, affect user experience*。Debug 分析：缺少系动词 is，多动词冲突，缺少后半句主语 it。',
      itAnalogy: '类比：page.isSlow && page.affectExperience()，对象与状态显式绑定。',
    },
  ],
  builders: [
    {
      id: 'b-debug-order',
      title: '语序组装：体验形合语序',
      instruction: '组装句子：「我每天在办公室用 C# 写代码」',
      words: ['I', 'write code', 'in the office', 'with C#', 'every day.'],
      targetSentence: 'I write code in the office with C# every day.',
      explanation: '英语中先说核心事件（I write code），随后依次挂载地点状语、方式状语和时间状语。',
    },
  ],
  compares: [
    {
      id: 'cmp-verb-stacking',
      chinese: '我去办公室写代码用 C#。',
      wrong: 'I go office write code use C#.',
      correct: 'I go to the office to write code in C#.',
      formula: '一句话只能有一个主谓语，其余动作降级',
      reason: '中文“去、写、用”连用三个动词；英文一山不容二虎，主谓语是 go，后面的 write 必须加 to 降级为不定式目的状语 (to write code)，用C#降级为介词短语 (in/with C#)。',
      itAnalogy: '类比流水线管道：go().pipe(toWrite(code)).pipe(withLang("C#"));',
    },
  ],
  quizzes: [
    {
      id: 'q-debug-thinking',
      title: '中文思维排查挑战',
      question: '中文常说「发现了一个问题，需要重新启动容器」，如果转换成地道严谨的英文，最符合强类型形合思维的是：',
      options: [
        { text: 'Found an issue, need restart container.', isCorrect: false, explanation: '错误：中式直译，无主语，且 need 和 restart 动词直接连用缺少 to。' },
        { text: 'We found an issue, and we need to restart the container.', isCorrect: true, explanation: '正确！明确唯一主角 We，补充连词 and，need 后面加 to 降级为不定式。' },
        { text: 'Finding an issue, restart the container.', isCorrect: false, explanation: '错误：逻辑主谓关系模糊。' },
      ],
    },
  ],
  tables: [
    {
      title: '中英思维底层特征终极对照表 (Mindset Contrast Matrix)',
      headers: ['对比维度', '中文思维 (意合 · 偏向 JS)', '英文思维 (形合 · 偏向 C#/Rust)'],
      rows: [
        ['语法结构', '意合：依靠意思并列，主语可自由省略', '形合：结构必须完整，主谓宾骨干不可缺失'],
        ['动词使用', '动词连用堆叠（去、看、买、回）', '一山不容二虎，仅一个主谓语，其余降级为 to do / doing / 介词'],
        ['时空语序', '从大到小（2026年 ➔ 8月 ➔ 30日）', '从小到大（时刻 ➔ 星期 ➔ 月份 ➔ 年份）'],
        ['修饰位置', '左倾：所有修饰语堆在中心词前面', '右倾：中心词先行，介词/分词/从句后置展开'],
        ['句子连接', '逗号一逗到底，缺少显式连接词', '必须通过 FANBOYS 或从属连词显式连接分句'],
      ],
    },
  ],
};
