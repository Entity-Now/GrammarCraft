import type { TopicContent } from '../../types';

export const ordinalsTopic: TopicContent = {
  meta: {
    id: 'ordinals',
    title: '序数词',
    enTitle: 'Ordinal Numbers',
    desc: '从 1st 到 100th 的变形规律（st/nd/rd/th）、分数表达法与日期次序实战',
    icon: '🥇',
    pillarId: 'basics',
    badge: '顺序序列',
  },
  formulas: [
    {
      id: 'f-ordinal-rule',
      title: '序数词变形口诀公式',
      badge: '变形法则',
      formula: '一二三特殊记 (1st/2nd/3rd)；八去t (eighth)，九去e (ninth)；ve替以f (fifth/twelfth)；整十变y为ie加th (twentieth)；几十几只变个位。',
      desc: '基数词转换为序数词的核心通用法则。其余大部分规则直接在词尾加 -th。',
      example: {
        en: 'The 1st version, the 21st century, the 5th iteration.',
        zh: '第一个版本，21世纪，第5次迭代。',
      },
    },
    {
      id: 'f-fractions',
      title: '英文分数表达公式 (Fractions Formula)',
      badge: '分数规则',
      formula: '[分子: 基数词] + [分母: 序数词] (+ s 当分子大于1时)',
      desc: '分子用基数词（1, 2, 3...），分母用序数词（third, fourth...）。若分子大于 1，分母序数词必须加复数 -s！',
      example: {
        en: 'Two thirds (2/3) of the memory is allocated.',
        zh: '三分之二的内存已被分配。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-fraction-agreement',
      badge: '分数量词主谓一致',
      type: 'Fraction Subject + Verb',
      title: '分数作主语时的谓语动词单复数',
      desc: '分数的单复数取决于 of 后面的名词是可数还是不可数。',
      formula: '[分数/百分比 + of + 不可数名词/单数] + 单数谓语动词 (is/has)',
      sentence: 'Two thirds of the codebase is covered by unit tests.',
      translation: '三分之二的代码库被单元测试所覆盖。',
      parts: [
        { text: 'Two thirds', role: '分数量词 (2/3)', type: 'subject', detail: '基数词 two + 序数词复数 thirds' },
        { text: 'of the codebase', role: '限定后置介词短语', type: 'object', detail: '代码库 · 整体不可数/集合单数' },
        { text: 'is covered', role: '谓语被动语态', type: 'verb', detail: '被覆盖 · 谓语与 codebase 保持单数一致' },
        { text: '[by unit tests]', role: '方式状语', type: 'adverbial', detail: '通过单元测试' },
      ],
      explanation: 'Two thirds of the codebase 中，核心决定动词单复数的是 of 后的 codebase（单数），故谓语必须用 is 而非 are。',
      itAnalogy: '类比类型守卫：(codebase.isCollection ? plural : singular)。',
    },
  ],
  words: [
    {
      id: 'w-ninth',
      word: 'ninth',
      phonetic: '/naɪnθ/',
      pos: 'num./adj.',
      meaning: '第九（注意去掉 nine 的 e）',
      roots: {
        root: 'nine',
        rootMeaning: '九 (变形去掉末尾不发音的e加th)',
      },
      examples: [
        { en: 'This is our ninth consecutive release.', zh: '这是我们第九次连续发版。' },
      ],
      mnemonic: '九变第九特别怪，悄悄把 e 扔门外。',
    },
    {
      id: 'w-twelfth',
      word: 'twelfth',
      phonetic: '/twelfθ/',
      pos: 'num./adj.',
      meaning: '第十二（注意 ve 变 f 加 th）',
      roots: {
        root: 'twelve',
        rootMeaning: '十二 (ve 变 f 之后加 th)',
      },
      examples: [
        { en: 'The twelfth chapter covers system architecture.', zh: '第十二章讲解系统架构。' },
      ],
      mnemonic: 'twelve 里的 ve 变为 f 再加 th。',
    },
  ],
  quizzes: [
    {
      id: 'q-ordinal-spelling',
      title: '序数词拼写挑战',
      question: '数字 20 (twenty) 的序数词「第二十」的正确拼写是：',
      options: [
        { text: 'twentyth', isCorrect: false, explanation: '错误：不能直接加 th。' },
        { text: 'twentieth', isCorrect: true, explanation: '正确！整十数以 y 结尾的，变 y 为 ie 再加 th (twenty -> twentieth)。' },
        { text: 'twentith', isCorrect: false, explanation: '错误：漏掉了字母 e。' },
      ],
    },
  ],
  tables: [
    {
      title: '高频序数词对照与缩写表 (1st - 31st 日期必备)',
      headers: ['数字', '基数词', '序数词全拼', '常用缩写'],
      rows: [
        ['1', 'one', 'first', '1st'],
        ['2', 'two', 'second', '2nd'],
        ['3', 'three', 'third', '3rd'],
        ['4', 'four', 'fourth', '4th'],
        ['5', 'five', 'fifth (ve变f)', '5th'],
        ['8', 'eight', 'eighth (少个t)', '8th'],
        ['9', 'nine', 'ninth (去掉e)', '9th'],
        ['12', 'twelve', 'twelfth (ve变f)', '12th'],
        ['20', 'twenty', 'twentieth (y变ie)', '20th'],
        ['21', 'twenty-one', 'twenty-first', '21st'],
        ['22', 'twenty-two', 'twenty-second', '22nd'],
        ['23', 'twenty-three', 'twenty-third', '23rd'],
        ['30', 'thirty', 'thirtieth', '30th'],
        ['31', 'thirty-one', 'thirty-first', '31st'],
      ],
    },
  ],
};
