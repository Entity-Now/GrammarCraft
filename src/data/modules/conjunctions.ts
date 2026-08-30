import type { TopicContent } from '../../types';

export const conjunctionsTopic: TopicContent = {
  meta: {
    id: 'conjunctions',
    title: '连词逻辑深度全景',
    enTitle: 'Conjunctions, FANBOYS & Parallelism',
    desc: '语法粘合胶水：FANBOYS并列连词全景、从属降级连词、成对关联结构与平行对称/就近原则',
    icon: '🔗',
    pillarId: 'verbs',
    badge: '语法粘合剂',
  },
  diagrams: [
    {
      id: 'd-conjunction-families',
      title: '英语连词三大核心家族谱系 (The 3 Conjunction Families)',
      desc: '杜绝中式逗号一逗到底：英语中连接两个完整主谓句必须显式使用连词胶水',
      code: `graph TD
    Glue["英语连词胶水系统 (Conjunctions)"] --> FANBOYS["1. 并列连词 (FANBOYS 7 大金刚)\nFor / And / Nor / But / Or / Yet / So\n连接两个同等权重的独立主句 (SVO, and SVO)"]
    Glue --> Sub["2. 从属连词 (Subordinating)\nbecause / although / if / unless / when\n将子句降维为修饰性状语从句"]
    Glue --> Corr["3. 成对关联连词 (Correlative)\neither...or / neither...nor / not only...but also\n严格遵循【平行对称】与【就近原则】"]`,
    },
  ],
  formulas: [
    {
      id: 'f-fanboys-rule',
      title: 'FANBOYS 并列连词口诀与标点铁律',
      badge: '语法基石',
      formula: '独立分句 1 + 【逗号 ( , )】 + FANBOYS (for/and/nor/but/or/yet/so) + 独立分句 2',
      desc: '在英语中，仅用一个逗号直接拼接两个独立主谓句是严重的语法错误（Comma Splice）！必须在逗号后挂载 FANBOYS 并列连词才能完成粘合。',
      example: {
        en: 'The service crashed, but the backup replica took over immediately.',
        zh: '服务崩溃了，但备用副本立即接管了流量。',
      },
    },
    {
      id: 'f-parallelism-principle',
      title: '成对连词平行对称原则 (The Parallelism Principle)',
      badge: '结构强类型',
      formula: 'not only + [语法结构 A] + but also + [相同语法结构 A (动词对动词 / 介词对介词)]',
      desc: '英语强类型契约要求：成对连词连接的两个成分必须具有完全相同的句法词性。前面是动名词，后面必须是动名词；前面是不定式，后面必须是不定式！',
      example: {
        en: 'The update not only improved query throughput, but also reduced memory consumption.',
        zh: '这次更新不仅提升了查询吞吐量，而且还降低了内存消耗。',
      },
    },
    {
      id: 'f-proximity-agreement',
      title: '成对连词就近一致原则 (The Proximity Rule)',
      badge: '主谓一致',
      formula: 'Either A or B / Neither A nor B / Not only A but also B + 【谓语动词由紧邻的 B 决定单复数！】',
      desc: '在 either...or / neither...nor 结构中，动词的单复数完全取决于距离动词最近的那个名词主语（就近原则）！',
      example: {
        en: 'Neither the team lead nor the developers were aware of the security leak.',
        zh: '无论是技术组长还是开发人员，当时都没有意识到该安全漏洞。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-conj-parallelism',
      badge: '平行对称解构',
      type: 'Not only A but also B',
      title: '成对连词平行对称：谓语动词对称',
      desc: 'improved 与 reduced 构成完美的过去时动宾平行对称。',
      formula: 'S + not only + [improved throughput 动宾A] + but also + [reduced latency 动宾B]',
      sentence: 'The new patch not only fixed the crash bug, but also boosted query throughput.',
      translation: '新补丁不仅修复了崩溃漏洞，而且还大幅提升了查询吞吐量。',
      parts: [
        { text: 'The new patch', role: '主语 (S)', type: 'subject', detail: '新补丁' },
        { text: 'not only', role: '成对连词前驱', type: 'linker', detail: '不仅' },
        { text: 'fixed the crash bug', role: '平行成分 A (过去时及物动宾)', type: 'verb', detail: '修复了崩溃缺陷' },
        { text: 'but also', role: '成对连词后驱', type: 'linker', detail: '而且' },
        { text: 'boosted query throughput', role: '平行成分 B (过去时及物动宾)', type: 'verb', detail: '提升了吞吐量 · 结构严密对称' },
      ],
      explanation: 'not only 后面是动词过去式 fixed，but also 后面必须也是动词过去式 boosted，结构完全平行。',
      itAnalogy: 'pipeline.pipe(fixCrash).pipe(boostThroughput); 严格链式对称。',
    },
  ],
  compares: [
    {
      id: 'cmp-because-so-error',
      chinese: '因为内存超载了，所以服务器崩溃了。',
      wrong: 'Because the RAM was overloaded, so the server crashed.',
      correct: 'Because the RAM was overloaded, the server crashed. / The RAM was overloaded, so the server crashed.',
      formula: 'Because 与 So 严禁同台连用！',
      reason: '中文习惯“因为……所以……”成对出现，但在英文中，Because 属于从属连词（使前句成为从句），而 So 属于并列连词。二者同时使用会导致句子缺乏独立主干，属于严重语法冲突！',
    },
    {
      id: 'cmp-although-but-error',
      chinese: '虽然流量很大，但是服务器依然很稳定。',
      wrong: 'Although the traffic was huge, but the server remained stable.',
      correct: 'Although the traffic was huge, the server remained stable.',
      formula: 'Although 与 But 严禁同台连用！',
      reason: 'Although 与 But 只能保留一个，绝不能同时写出 Although ... but！',
    },
  ],
  quizzes: [
    {
      id: 'q-conj-proximity',
      title: '成对连词就近原则挑战',
      question: '请根据就近原则，为句子选出正确的谓语动词：\n"Either the database administrator or the developers ______ responsible for this release."',
      options: [
        { text: 'are', isCorrect: true, explanation: '正确！就近原则看距离动词最近的名词 developers（复数），所以使用 are。' },
        { text: 'is', isCorrect: false, explanation: '错误：is 看的是前面的 administrator，违背了就近原则。' },
        { text: 'be', isCorrect: false, explanation: '错误：缺少时态。' },
      ],
    },
  ],
  tables: [
    {
      title: 'FANBOYS 并列连词 7 大核心词汇与逻辑关系对照表 (The FANBOYS Coordinating Matrix)',
      headers: ['首字母', '连词单词', '核心逻辑关系', '中文意图精髓', '技术场景标准例句'],
      rows: [
        ['F', 'For', '解释原因', '因为、由于 (语气较弱，用于补充解释)', 'We scaled out, for traffic surged unexpectedly.'],
        ['A', 'And', '顺承递进', '和、而且、并且', 'I reviewed the PR, and my teammate approved it.'],
        ['N', 'Nor', '双重否定', '也不 (后句必须使用助动词倒装)', 'The node didn’t restart, nor did it log any alert.'],
        ['B', 'But', '转折对比', '但是、然而 (逻辑强反转)', 'The build passed, but integration tests failed.'],
        ['O', 'Or', '选择分流', '或者、否则', 'You must renew the token, or requests will fail.'],
        ['Y', 'Yet', '让步转折', '却、然而 (承认事实后的出乎意料)', 'The cluster load was high, yet latency was stable.'],
        ['S', 'So', '因果推论', '所以、因此 (引申出必然结果)', 'Disk was 95% full, so the cron triggered cleanup.'],
      ],
    },
  ],
};
