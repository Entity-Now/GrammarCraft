import type { TopicContent } from '../../types';

export const nounPhrasesTopic: TopicContent = {
  meta: {
    id: 'noun-phrases',
    title: '名词短语深度全景',
    enTitle: 'Noun Phrases & The Right-Branching Tree',
    desc: '参天大树：右倾展开架构、中心词先行原则、五大后置修饰挂载与中英思维左倾右倾底层重构',
    icon: '🌳',
    pillarId: 'verbs',
    badge: '右倾展开',
  },
  diagrams: [
    {
      id: 'd-noun-phrase-tree',
      title: '名词短语右倾展开参天大树模型 (The Right-Branching Tree)',
      desc: '中文所有修饰全堆在中心词左侧（左倾严重）；英文中心词率先出场，修饰语向右逐层展开（右倾架构）',
      code: `graph LR
    Pre["前置修饰区 (简短轻量)\n限定词 (The / Our)\n+ 形容词 (scalable)\n+ 复合名词 (cloud)"] --> Head["【核心中心词 Head Noun】\nDatabase / Service / Cluster\n(核心实体率先确立)"]
    Head --> Post["后置修饰展开区 (右倾重型资产)\n1. 介词短语 (in the primary zone)\n2. 现在分词 (running in background)\n3. 过去分词 (deployed yesterday)\n4. 定语从句 (which ensures HA)\n5. 不定式 (to reduce costs)"]`,
    },
  ],
  formulas: [
    {
      id: 'f-noun-right-branching',
      title: '名词短语核心展开公式 (The Master Noun Phrase Formula)',
      badge: '架构公式',
      formula: '[限定词] + [前置修饰词] + 【核心中心词 (Head)】 + 【后置修饰组件 1 (介词/分词/从句)】 + 【后置修饰组件 2】',
      desc: '英语造长难名词短语的秘密：抓住中心词（Head），把长难修饰成分作为插件依次往后方挂载！',
      tokens: [
        { label: 'Determiner', role: '限定词', color: 'blue', desc: 'the / our / each / this' },
        { label: 'Pre-modifier', role: '前置修饰', color: 'emerald', desc: 'high-performance (简短形容词)' },
        { label: 'Head Noun', role: '核心中心词', color: 'purple', desc: 'cluster (主干核心)' },
        { label: 'Post-modifier', role: '右倾后置展开', color: 'amber', desc: 'running in the cloud (分词/从句/介词短语)' },
      ],
      example: {
        en: 'The high-performance database cluster running in the cloud that was deployed yesterday.',
        zh: '昨天部署的、在云端运行的高性能数据库集群。',
      },
    },
    {
      id: 'f-left-vs-right-contrast',
      title: '中英思维左倾 vs 右倾对比定律',
      badge: '思维重构',
      formula: '中文: [所有修饰堆在前面……] 的 + 中心词 VS 英文: 中心词 + [后置修饰 1] + [后置修饰 2]',
      desc: '说中文时，哪怕修饰语有一百个字，也必须全部放在“的”的前面；说英文时，第一秒钟必须先把核心名词说出来，随后像流式数据（Streaming）一样向右逐步补充修饰参数！',
      example: {
        en: 'A tool (中心词) used by thousands of developers (分词后置) to write cleaner code (目的后置).',
        zh: '成千上万名开发人员用来写出更整洁代码的工具。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-noun-heavy-post',
      badge: '右倾重型展开解构',
      type: 'Head + Post-modifiers',
      title: '多重后置修饰挂载实战',
      desc: 'The database cluster 之后连环挂载介词短语与现在分词短语。',
      formula: '[Head 中心词] + [介词短语修饰 1] + [现在分词短语修饰 2]',
      sentence: 'The database cluster in the primary region handling customer transactions is resilient.',
      translation: '位于首要区域内负责处理客户交易的数据库集群极其健壮。',
      parts: [
        { text: 'The database cluster', role: '核心中心词 (Head)', type: 'subject', detail: '数据库集群 · 主干核心' },
        { text: '[in the primary region]', role: '后置修饰 1 (介词短语)', type: 'adverbial', detail: '位置限定' },
        { text: '[handling customer transactions]', role: '后置修饰 2 (现在分词短语)', type: 'object', detail: '职责限定 · 主动处理' },
        { text: 'is resilient', role: '主句系表谓语', type: 'predicative', detail: '是健壮的' },
      ],
      explanation: '中心词 cluster 率先出场，两个后置修饰语层层展开，主干与修饰条理清晰分明。',
      itAnalogy: 'cluster.where(region: "primary").withTask("handlingTransactions").status === "resilient";',
    },
  ],
  compares: [
    {
      id: 'cmp-left-leaning-error',
      chinese: '那个在生产环境中由架构师部署的用来监控流量的微服务。',
      wrong: 'That in production by architect deployed to monitor traffic microservice.',
      correct: 'The microservice deployed by the architect in production to monitor traffic.',
      formula: 'The microservice (中心词) + deployed by architect (过去分词) + in production (介词) + to monitor (不定式)',
      reason: '把一大堆修饰词强行塞在 microservice 前面是典型的中式思维翻车现场！英文中超过单个单词的修饰成分，必须推到中心词后方展开。',
      itAnalogy: '类比解耦架构：先声明核心接口，再注入各种拦截器与中间件。',
    },
  ],
  quizzes: [
    {
      id: 'q-noun-phrase-order',
      title: '后置修饰语序自测',
      question: '如果要将「由我们团队上周编写的用于优化查询的脚本」翻译成地道英文，最符合右倾展开结构的是：',
      options: [
        { text: 'The script written by our team last week to optimize queries', isCorrect: true, explanation: '正确！中心词 The script 率先出场，随后挂载过去分词短语 written by... 和不定式短语 to optimize...' },
        { text: 'By our team last week written to optimize queries script', isCorrect: false, explanation: '错误：严重的左倾中式堆砌直译。' },
        { text: 'The to optimize queries written script', isCorrect: false, explanation: '错误：不定式不能作为前置定语修饰名词。' },
      ],
    },
  ],
  tables: [
    {
      title: '英语名词短语五大后置修饰挂载插件全景表 (The 5 Post-Modifier Plugins)',
      headers: ['后置插件类型', '句法语法形态', '逻辑修饰功能', '技术场景标准例句'],
      rows: [
        ['1. 介词短语', 'Prep + Noun (in, on, with)', '限定物理/逻辑位置与工具媒介', 'The server in the cloud is fully managed.'],
        ['2. 现在分词短语', 'V-ing + 宾语/状语 (主动)', '描述正在主动进行的行为动作', 'The process running in background peaked.'],
        ['3. 过去分词短语', 'V-ed + 介词短语 (被动)', '描述被执行、被部署的客体状态', 'The patch written by our lead was merged.'],
        ['4. 定语从句', 'that / which + 完整分句', '提供高信息密度的事件与逻辑限定', 'The API that blocked release is now fixed.'],
        ['5. 动词不定式', 'to do something (目的/计划)', '交代该名词承担的目的、功能或意图', 'The strategy to cut hosting costs worked.'],
      ],
    },
  ],
};
