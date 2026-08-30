import type { TopicContent } from '../../types';

export const modalVerbsTopic: TopicContent = {
  meta: {
    id: 'modal-verbs',
    title: '情态动词深度全景',
    enTitle: 'The Modal Verbs Spectrum & Deduction',
    desc: '态度调节器：从确定度概率阶梯（100%~20%）、三大语法铁律到「情态动词 + have done」高阶推测与反思',
    icon: '🎯',
    pillarId: 'verbs',
    badge: '态度阶梯',
  },
  diagrams: [
    {
      id: 'd-modal-spectrum',
      title: '情态动词推测确定度概率梯形图 (The Certainty & Probability Spectrum)',
      desc: '从 100% 确定事实到 20% 极其微弱可能，情态动词赋予句子精确的情感与逻辑概率标尺',
      code: `graph TD
    P100["100% 绝对确定 / 逻辑必然\nmust (一定是) / will (必定会)"] --> P80["80% 很有可能 / 常理推测\nshould / ought to (理应如此)"]
    P80 --> P50["50% 客观可能 / 许可\ncan / could / may (或许可能/允许)"]
    P50 --> P20["20% 微弱可能 / 极其渺茫\nmight (也许/微弱偶发)"]`,
    },
  ],
  formulas: [
    {
      id: 'f-modal-three-laws',
      title: '情态动词三大黄金语法铁律',
      badge: '语法基石',
      formula: '1. 后接裸动词原形 (V-base) | 2. 三单绝不加 -s (He can, 禁 cans) | 3. 否定直接加 not (cannot / must not)',
      desc: '情态动词具备不可侵犯的强类型语法特征：无论主语是谁，情态动词本身永不添加任何词尾变形；后面的实义动词也绝不能带 to（ought to / have to 除外）！',
      example: {
        en: 'The developer can build this feature (build 恢复原形，can 绝无 -s).',
        zh: '该开发人员能够构建这个特性功能。',
      },
    },
    {
      id: 'f-modal-have-done',
      title: '情态动词 + have done：对过去的逻辑推测与虚拟反思',
      badge: '高阶核心',
      formula: '情态动词 + have + 过去分词 (Done) (将推测或遗憾的时间锚定在【过去】)',
      desc: '在事故复盘与架构评审中极具价值：用于推论过去发生过的隐蔽事实，或者对过去未采取行动表示遗憾与责备！',
      tokens: [
        { label: 'must have done', role: '过去肯定推测', color: 'emerald', desc: 'The server must have crashed (过去必定崩溃了)' },
        { label: 'can’t have done', role: '过去否定推测', color: 'rose', desc: 'He can’t have deleted it (他过去绝不可能删除了它)' },
        { label: 'should have done', role: '本应做而没做', color: 'amber', desc: 'We should have backed up (我们当时本应该备份的 - 遗憾/复盘)' },
      ],
      example: {
        en: 'We should have verified the migration script before running it in production.',
        zh: '我们当时本应该在生产环境运行迁移脚本之前对其进行严格验证的（但当时没做）。',
      },
    },
    {
      id: 'f-must-vs-have-to',
      title: 'must vs have to：主观意愿 vs 客观强制',
      badge: '深度辨析',
      formula: 'must (说话人主观认为“必须做”) VS have to (外部规则/不可抗力导致“不得不做”)',
      desc: 'must 来源于个人内心信念或强烈命令；have to 来源于外部安全合规、公司规章或技术客观环境逼迫。',
      example: {
        en: 'I must master English (主观渴望) vs We have to comply with GDPR (客观合规强制).',
        zh: '我必须精通英语（内心信念）vs 我们必须遵守 GDPR 数据条例（外部法规逼迫）。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-modal-should-have',
      badge: '复盘神器',
      type: 'Should have Done (虚拟反思)',
      title: '事故复盘：本应做而未做',
      desc: '表达对过去决策未执行的复盘与遗憾反思。',
      formula: 'S + should have configured (本应配置) + O (redundancy) + [beforehand]',
      sentence: 'The operations team should have configured geographic redundancy beforehand.',
      translation: '运维团队事前本应该配置地缘灾备冗余的（但遗憾没有配置）。',
      parts: [
        { text: 'The operations team', role: '主语 (S)', type: 'subject', detail: '运维团队' },
        { text: 'should have configured', role: '情态推测谓语', type: 'verb', detail: '本应该配置 · 含有遗憾责备' },
        { text: 'geographic redundancy', role: '宾语 (O)', type: 'object', detail: '地缘冗余' },
        { text: '[beforehand]', role: '时间副词', type: 'adverbial', detail: '事先、提前' },
      ],
      explanation: 'should have configured 绝非表达“现在应该配置”，而是表达在过去的停电事故发生前，团队本应当配置却没有配置。',
      itAnalogy: 'postMortem.recommendation = "Must enforce redundancy on all tiers";',
    },
    {
      id: 'sk-modal-must-be',
      badge: '逻辑推测',
      type: 'Must be (当前高概率推测)',
      title: '逻辑必然推测：肯定是……',
      desc: '基于确凿证据得出的 100% 确定度结论。',
      formula: 'S + must be (一定是) + [形容词/介词短语表语]',
      sentence: 'The root partition must be completely full based on the error log.',
      translation: '根据错误日志推断，根分区目前肯定是彻底爆满了。',
      parts: [
        { text: 'The root partition', role: '主语 (S)', type: 'subject', detail: '磁盘根分区' },
        { text: 'must be', role: '情态推测系动词', type: 'linker', detail: '一定是、必定处于' },
        { text: 'completely full', role: '形容词表语', type: 'predicative', detail: '彻底爆满' },
        { text: '[based on the error log]', role: '依据介词短语状语', type: 'adverbial', detail: '根据错误日志' },
      ],
      explanation: '这里的 must 不表示“必须”，而表示“高度逻辑推断：绝对处于某种状态”。',
      itAnalogy: 'assert(disk.availableSpace === 0);',
    },
  ],
  compares: [
    {
      id: 'cmp-modal-to-error',
      chinese: '你必须马上停止这个进程。',
      wrong: 'You must to stop this process.',
      correct: 'You must stop this process.',
      formula: 'must + 动词原形 (严禁加 to)',
      reason: '情态动词后面必须直接紧跟裸动词原形，中间绝对不能插入介词 to！',
    },
    {
      id: 'cmp-cant-vs-mustnt',
      chinese: '他不可能删除了生产数据（推测）vs 你绝不能删除生产数据（禁止）。',
      wrong: 'He mustn’t have deleted the data. (错误：mustn’t 只表禁止，不表推测)',
      correct: 'He can’t have deleted the data. (不可能做过) / You must not delete the data. (严禁做)',
      formula: '否定推测用 can’t have done；严禁禁止用 must not',
      reason: '在否定推测中，must not 无法表示“不可能”，表达“过去不可能发生了某事”必须使用 can’t have done！',
    },
  ],
  quizzes: [
    {
      id: 'q-modal-should-have-quiz',
      title: '事故复盘情态动词自测',
      question: '在技术复盘总结会上，如果要表达「我们当时本应该在周五发版前做一次完整备份的」，正确的英文句子是：',
      options: [
        { text: 'We should back up before Friday release.', isCorrect: false, explanation: '错误：should back up 是对现在的建议，而非对过去的复盘。' },
        { text: 'We should have backed up before Friday release.', isCorrect: true, explanation: '正确！should have backed up 表达“过去本应该做某事却未做”的复盘语气。' },
        { text: 'We must back up before Friday release.', isCorrect: false, explanation: '错误：must back up 属于一般现在时强制指令。' },
      ],
    },
    {
      id: 'q-modal-cant-be-quiz',
      title: '不可能逻辑否定推测',
      question: '如果要表达「这绝不可能是网络延迟导致的，因为时延仪表盘显示只有 2 毫秒」，空格处应填入：\n"It ______ caused by network latency because the dashboard shows two milliseconds."',
      options: [
        { text: 'can’t be', isCorrect: true, explanation: '正确！can’t be 用于表达强烈的否定推测“绝不可能是……”。' },
        { text: 'must not be', isCorrect: false, explanation: '错误：must not be 表示“严禁是”，不符合逻辑推测语境。' },
        { text: 'may not to be', isCorrect: false, explanation: '错误：情态动词后不可加 to。' },
      ],
    },
  ],
  tables: [
    {
      title: '常见 9 大情态动词确定度梯形谱与核心功能对照表 (The Modal Verbs Master Matrix)',
      headers: ['情态动词', '确定度/语气强度', '核心语义职能', '否定形式及含义', '技术场景标准例句'],
      rows: [
        ['must', '100% 极强', '必须 (义务) / 一定是 (必然推测)', 'must not (严禁、绝对不可)', 'You must not commit API keys to Git.'],
        ['will / would', '100% / 假设', '意愿 / 将要 / 过去意愿 / 虚拟假设', 'won’t (不愿、不会)', 'The script will execute automatically.'],
        ['should / ought to', '80% 较强', '应该、理应如此 (建议与常理推测)', 'should not (不应该)', 'You should update dependencies regularly.'],
        ['can / could', '50% 中等', '能够 (能力) / 可以 (许可) / 可能', 'cannot / can’t (不可能/不能)', 'The API can handle 10,000 QPS.'],
        ['may / might', '50% / 20% 偏弱', '也许、可能 (推测) / 可以 (正式许可)', 'may not (可能不) / might not', 'The server might experience minor latency.'],
        ['shall', '正式强硬', '应当 (法规合规指令) / 将要', 'shall not (不得、禁止)', 'User passwords shall be hashed with salt.'],
      ],
    },
  ],
};
