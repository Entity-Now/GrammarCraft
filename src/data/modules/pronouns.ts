import type { TopicContent } from '../../types';

export const pronounsTopic: TopicContent = {
  meta: {
    id: 'pronouns',
    title: '代词系统深度全景',
    enTitle: 'Pronoun Systems & The Four Roles of It',
    desc: '指针引用机制：五大格位矩阵（主/宾/形物/名物/反身）、it的四大超能力与形式主宾语架构',
    icon: '👤',
    pillarId: 'verbs',
    badge: '指针引用',
  },
  diagrams: [
    {
      id: 'd-pronoun-cases-matrix',
      title: '人称代词五大格位演变全景矩阵 (The 5 Pronoun Cases)',
      desc: '代词如同内存指针，根据其在句子调用栈中的位置（主语、动宾、介宾、所有格）自动切换格位形态',
      code: `graph LR
    Entity["实体对象 (Target Entity)"] --> Subj["1. 主格 (Subjective)\nI / He / She / They\n充当动作发起者"]
    Entity --> Obj["2. 宾格 (Objective)\nme / him / her / them\n充当动词/介词受体"]
    Entity --> Det["3. 形物代 (Determiner)\nmy / his / her / their\n依附于后续名词"]
    Entity --> Nom["4. 名物代 (Nominal)\nmine / his / hers / theirs\n独立指代 资产+属性"]
    Entity --> Ref["5. 反身代词 (Reflexive)\nmyself / himself / themselves\n主谓宾同一实体 / 强调"]`,
    },
    {
      id: 'd-it-four-roles',
      title: '超级代词 It 的四大神通角色解构',
      desc: '从具体物体引用、自然环境变量、形式主语占位到形式宾语平衡',
      code: `graph TD
    It["超级多态代词 it"] --> R1["角色 1: 具象事物指针 (Entity Pointer)\n指代上文提及的代码/服务器/Bug\nThe API failed, and it returned 500."]
    It --> R2["角色 2: 环境全局变量 (Global Environment)\n指代时间/天气/物理距离\nIt is 9:00 AM. / It is hot in the rack."]
    It --> R3["角色 3: 形式主语指针 (Dummy Subject)\n平衡主语避免头重脚轻\nIt is critical to backup data."]
    It --> R4["角色 4: 形式宾语指针 (Dummy Object)\n维持复合宾语结构自洽\nWe find it easy to scale."]`,
    },
  ],
  formulas: [
    {
      id: 'f-prep-objective-rule',
      title: '介词后强制使用代词宾格铁律 (Preposition + Objective Case)',
      badge: '语法铁律',
      formula: '介词 (between / for / with / to / about) + 【代词宾格 (me / him / her / us / them)】 (绝对禁止使用主格！)',
      desc: '许多人在口语中常说 *between you and I*，这在语法规则中是严重的编译报错！介词支配的只能是宾格（between you and me）。',
      example: {
        en: 'The secret is between you and me (me 是宾格，严禁写 I).',
        zh: '这个秘密只在你我之间。',
      },
    },
    {
      id: 'f-its-vs-it-is',
      title: 'its (所有格) vs it’s (缩写) 避坑黄金法则',
      badge: '最高频拼写雷区',
      formula: 'its = 形容词性物主代词 (它的，后接名词) VS it’s = it is / it has 的缩写',
      desc: '技术文档中极为常见的拼写灾难！its 绝对没有撇号（apostrophe）；只有当表达 it is 时才加撇号！',
      example: {
        en: 'The system restored its configuration (its 无撇号) vs It’s online now (it’s = it is).',
        zh: '系统恢复了它的配置 vs 它现在已经上线了。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-pronoun-nominal-possessive',
      badge: '格位用法：名物代',
      type: 'Possessive Pronoun (Nominal)',
      title: '名词性物主代词：独立指代避免冗余',
      desc: 'theirs 独立充当表语，等价于 their configuration。',
      formula: 'S (Our configuration) + is + identical to + theirs (名词性物主代词)',
      sentence: 'Our Kubernetes configuration is virtually identical to theirs.',
      translation: '我们的 Kubernetes 配置与他们的配置几乎完全一致。',
      parts: [
        { text: 'Our Kubernetes configuration', role: '主语 (含形物代 our)', type: 'subject', detail: '我们的配置' },
        { text: 'is identical to', role: '系表短语', type: 'linker', detail: '与……完全一致' },
        { text: 'theirs', role: '名词性物主代词 (P)', type: 'predicative', detail: '等同于 their configuration，独立充当宾格' },
      ],
      explanation: '使用 theirs 代替 their configuration，避免在同一个句子里重复 configuration 单词，体现语言的高度简练。',
      itAnalogy: 'assert(this.config.equals(their.config));',
    },
    {
      id: 'sk-pronoun-dummy-it',
      badge: 'It 超能力：形式宾语',
      type: 'Dummy Object (it)',
      title: '形式宾语 it：保持 SVOC 结构均衡',
      desc: 'it 占位，真正宾语后置。',
      formula: 'S + find + it (形式宾语) + necessary (宾补) + [to rotate API keys 真正宾语]',
      sentence: 'Security engineers find it necessary to rotate API keys periodically.',
      translation: '安全工程师认为定期轮换 API 访问密钥是极其必要的。',
      parts: [
        { text: 'Security engineers', role: '主语 (S)', type: 'subject', detail: '安全工程师' },
        { text: 'find', role: '及物动词 (V)', type: 'verb', detail: '认为/发现' },
        { text: 'it', role: '形式宾语 (Dummy O)', type: 'object', detail: '占位指针' },
        { text: 'necessary', role: '形容词宾补 (OC)', type: 'predicative', detail: '必要的' },
        { text: '[to rotate API keys periodically]', role: '真正直接宾语', type: 'complement', detail: '真实执行动作' },
      ],
      explanation: '真正宾语是不定式短语，太长太重，用 it 占住宾语位置，使句式结构规整紧凑。',
      itAnalogy: 'engineers.evaluate(() => rotateKeys(), { required: true });',
    },
  ],
  compares: [
    {
      id: 'cmp-between-you-and-i',
      chinese: '这份架构方案目前仅在你我之间传阅。',
      wrong: 'This architecture proposal is strictly between you and I.',
      correct: 'This architecture proposal is strictly between you and me.',
      formula: 'between (介词) + 宾格 me (严禁使用主格 I)',
      reason: 'between 是介词，支配后面的代词作介词宾语，必须使用宾格 me，绝不可写成主格 I！',
    },
    {
      id: 'cmp-its-apostrophe',
      chinese: '该微服务在启动时读取了它的默认配置文件。',
      wrong: 'The microservice read it’s default config at startup.',
      correct: 'The microservice read its default config at startup.',
      formula: 'its = 它的 (物主代词无撇号)；it’s = it is / it has',
      reason: 'it’s 是 it is 的缩写；表达“它的”属性归属时，物主代词必须写为 its，加撇号是致命语法拼写错误！',
    },
  ],
  quizzes: [
    {
      id: 'q-pronoun-its-quiz',
      title: 'its vs it’s 极速辨析',
      question: '请挑出拼写与语法完全正确的一句话：',
      options: [
        { text: 'The cluster increased it’s memory capacity yesterday.', isCorrect: false, explanation: '错误：it’s 是 it is 的缩写，不能用于表示“它的内存容量”。' },
        { text: 'The cluster increased its memory capacity yesterday.', isCorrect: true, explanation: '正确！its 是形容词性物主代词（它的），修饰 memory capacity，无撇号。' },
        { text: 'The cluster increased it memory capacity yesterday.', isCorrect: false, explanation: '错误：代词主格/宾格 it 不能修饰名词。' },
      ],
    },
    {
      id: 'q-pronoun-prep-case',
      title: '介词后代词格位自测',
      question: '如果要表达「架构师将重构任务交给了我和他」，正确的英文表达是：\n"The architect assigned the refactoring task to ______."',
      options: [
        { text: 'him and me', isCorrect: true, explanation: '正确！to 是介词，后面跟代词宾格 him and me。' },
        { text: 'he and I', isCorrect: false, explanation: '错误：to 是介词，不能跟主格 he and I。' },
        { text: 'him and I', isCorrect: false, explanation: '错误：I 属于主格，不能跟在介词 to 之后。' },
      ],
    },
  ],
  tables: [
    {
      title: '英语人称代词五大核心格位完整映射对照表 (The Comprehensive Pronoun Case Matrix)',
      headers: ['人称与数', '主格 (作主语)', '宾格 (作动/介宾)', '形物代 (后接名词)', '名物代 (独立作成分)', '反身代词 (主宾同一)'],
      rows: [
        ['第一人称单数 (我)', 'I', 'me', 'my (my code)', 'mine (This is mine)', 'myself (I built it myself)'],
        ['第二人称单/复 (你/你们)', 'you', 'you', 'your (your host)', 'yours (Is this yours?)', 'yourself / yourselves'],
        ['第三人称阳性 (他)', 'he', 'him', 'his (his repo)', 'his (The repo is his)', 'himself'],
        ['第三人称阴性 (她)', 'she', 'her', 'her (her branch)', 'hers (The branch is hers)', 'herself'],
        ['第三人称中性 (它)', 'it', 'it', 'its (its config)', 'its', 'itself (The server restarts itself)'],
        ['第一人称复数 (我们)', 'we', 'us', 'our (our cluster)', 'ours (The cluster is ours)', 'ourselves'],
        ['第三人称复数 (他们)', 'they', 'them', 'their (their API)', 'theirs (The API is theirs)', 'themselves'],
      ],
    },
  ],
};
