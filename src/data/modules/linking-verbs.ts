import type { TopicContent } from '../../types';

export const linkingVerbsTopic: TopicContent = {
  meta: {
    id: 'linking-verbs',
    title: '系动词深度全景',
    enTitle: 'The Complete Linking Verbs Mastery',
    desc: '逻辑等号（=）：7大系动词家族（感官/变化/保持/表象/证实）、be替换诊断法与表语禁副词铁律',
    icon: '🔗',
    pillarId: 'verbs',
    badge: '状态连接器',
  },
  diagrams: [
    {
      id: 'd-linking-families',
      title: '系动词 7 大语义家族全景图谱 (The 7 Copular Families)',
      desc: '系动词不表示肢体动作，而是将主语连接到属性状态上。7大家族覆盖静态、感知、演进与证实',
      code: `graph TD
    LV["系动词总谱系 (Linking Verbs)"] --> F1["1. 纯粹存在类\nbe (am/is/are/was/were)"]
    LV --> F2["2. 五大感官类 (Sensory)\nlook (看起来) / sound (听起来)\nsmell (闻起来) / taste (尝起来) / feel (感觉)"]
    LV --> F3["3. 变化演进类 (Change)\nbecome (变成) / get (逐渐变得)\nturn (变色/突变) / grow (渐变)\ngo (恶化: go bad/wrong/offline)\ncome (成真: come true) / fall (fall ill)"]
    LV --> F4["4. 持续保持类 (Keep/Stay)\nkeep (保持) / stay (维持稳定)\nremain (依然保持) / continue (持续)"]
    LV --> F5["5. 表象推断类 (Appearance)\nseem (似乎) / appear (显得)"]
    LV --> F6["6. 证实证明类 (Proof)\nprove (证明是) / turn out (结果是)"]`,
    },
  ],
  formulas: [
    {
      id: 'f-be-substitution-test',
      title: 'Be 动词一秒替换诊断法 (The Be-Substitution Rule)',
      badge: '判定神器',
      formula: '将动词替换为 be (is/are) ➔ 若句子语义通顺自洽，则为【系动词】；若语义断裂荒谬，则为【动作动词】！',
      desc: '许多动词身兼“系动词”和“实义动作动词”双重身份（如 look, feel, taste, turn）。利用 be 替换法可以瞬间完成类型判定！',
      tokens: [
        { label: '系动词形态', role: '替换为 be 成立', color: 'emerald', desc: 'The code looks clean ➔ The code IS clean (通顺 ➔ looks 是系词)' },
        { label: '动作动词形态', role: '替换为 be 不通', color: 'purple', desc: 'She looked at the screen ➔ She WAS at the screen (语义变异 ➔ looked 是动作)' },
      ],
      example: {
        en: 'The soup smells delicious (smells 是系动词) vs She smelled the soup (smelled 是及物动作).',
        zh: '汤闻起来很香（系动词）vs 她闻了闻那碗汤（动作动词）。',
      },
    },
    {
      id: 'f-predicative-adj-only',
      title: '表语严禁使用副词黄金铁律',
      badge: '语法避坑铁律',
      formula: 'S + 系动词 (look/sound/taste/feel/seem/remain) + 【形容词 (Adjective)】 (绝对禁止使用副词 -ly！)',
      desc: '中文里常说“看起来很整洁地”、“听起来很棒地”，学习者极易望文生义加上 -ly。但在英语强类型契约中，系动词后面修饰的是主语的属性特征，表语必须是形容词，副词会导致严重类型报错！',
      example: {
        en: 'The architecture looks robust (不可写 robustly) / The solution sounds great (不可写 greatly).',
        zh: '这个架构看起来很健壮 / 这个方案听起来很棒。',
      },
    },
    {
      id: 'f-linking-no-passive',
      title: '系动词绝无被动语态铁律',
      badge: '被动禁忌',
      formula: '系动词自身就是状态连接等号，绝不可写出【be + 系动词-ed】的被动结构！',
      desc: '中文说“该方案被证明是可行的”，直译常写成 *The plan was proved viable 或 *was seemed，但系动词本身不传递作用力给外部客体，只能用主动形态表达状态！',
      example: {
        en: 'The plan proved viable (不可写 was proved viable in linking sense).',
        zh: '该方案证明是极其可行的。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-linking-sensory',
      badge: '家族 2：感官系词',
      type: 'Sensory Linking Verb',
      title: '感官系动词：look + 形容词',
      desc: 'looks 充当状态连接器，clean and robust 为形容词表语。',
      formula: 'S (The codebase) + looks (感官系词) + clean and robust (形容词短语表语)',
      sentence: 'The new refactored codebase looks clean and robust.',
      translation: '新重构的代码库看起来非常整洁且健壮。',
      parts: [
        { text: 'The new refactored codebase', role: '主语 (S)', type: 'subject', detail: '代码库' },
        { text: 'looks', role: '感官系动词 (Linker)', type: 'linker', detail: '看起来 · 状态连接' },
        { text: 'clean and robust', role: '形容词并列表语 (P)', type: 'predicative', detail: '整洁且健壮 · 绝对禁止写 cleanly and robustly' },
      ],
      explanation: '验证：The codebase IS clean and robust 通顺自洽！因此 looks 是标准感官系动词，后跟形容词作表语。',
      itAnalogy: 'codebase.attributes = ["clean", "robust"];',
    },
    {
      id: 'sk-linking-change-go',
      badge: '家族 3：恶化变化',
      type: 'Change Linking Verb (go bad)',
      title: '变化系动词 go：走向恶化状态',
      desc: 'went bad / went offline 中的 go 表示向负面恶化转变。',
      formula: 'S + went (恶化系词过去式) + offline (形容词表语)',
      sentence: 'The primary storage cluster went offline during the power outage.',
      translation: '主存储集群在停电期间发生了故障离线。',
      parts: [
        { text: 'The primary storage cluster', role: '主语 (S)', type: 'subject', detail: '存储集群' },
        { text: 'went', role: '变化恶化系动词 (V)', type: 'linker', detail: '变成、陷入（负面）' },
        { text: 'offline', role: '形容词表语 (P)', type: 'predicative', detail: '离线状态' },
        { text: '[during the power outage]', role: '时间状语', type: 'adverbial', detail: '在停电期间' },
      ],
      explanation: 'go 后面接 bad, wrong, sour, offline, crazy 时均作系动词，表达向负面方向发生突变。',
      itAnalogy: 'cluster.state.transitionTo("OFFLINE");',
    },
    {
      id: 'sk-linking-remain',
      badge: '家族 4：保持系词',
      type: 'Remain Linking Verb',
      title: '保持系动词 remain：依然保持稳定',
      desc: 'remained 连接 latency 与形容词 low。',
      formula: 'S + remained (保持系词过去式) + low and predictable (形容词表语)',
      sentence: 'Query latency remained low and predictable throughout the flash sale.',
      translation: '在整场秒杀大促期间，查询延迟始终保持在极低且可预测的水平。',
      parts: [
        { text: 'Query latency', role: '主语 (S)', type: 'subject', detail: '查询时延' },
        { text: 'remained', role: '保持系动词 (Linker)', type: 'linker', detail: '保持、依然处于' },
        { text: 'low and predictable', role: '形容词表语 (P)', type: 'predicative', detail: '极低且可预测' },
        { text: '[throughout the flash sale]', role: '时间状语', type: 'adverbial', detail: '在整个秒杀期间' },
      ],
      explanation: 'remained 说明时延指标自始至终未发生劣化，保持原有优异状态。',
      itAnalogy: 'assert(latency.stayedWithinTarget(10ms));',
    },
  ],
  compares: [
    {
      id: 'cmp-looks-cleanly',
      chinese: '这个界面的设计看起来很漂亮、很整洁。',
      wrong: 'The interface design looks beautifully and cleanly.',
      correct: 'The interface design looks beautiful and clean.',
      formula: 'look + 形容词 (不可加 -ly 副词)',
      reason: '系动词后必须用形容词修饰主语特征，副词只能修饰动作。界面本身并没有在“漂亮地看”，而是“呈现出漂亮的视觉状态”！',
      itAnalogy: 'TypeMismatchError: Expected Adjective for Predicative property, received Adverb.',
    },
    {
      id: 'cmp-taste-passive',
      chinese: '这杯咖啡尝起来味道不错。',
      wrong: 'The coffee is tasted good.',
      correct: 'The coffee tastes good.',
      formula: 'taste 作为系动词时用主动表被动属性，不可加 is tasted',
      reason: '感官系动词（taste, smell, look）本身就内含“尝起来如何”的被动感知属性，不需要且绝不能写成被动语态！',
    },
  ],
  quizzes: [
    {
      id: 'q-linking-adverb-quiz',
      title: '表语词性鉴别挑战',
      question: '如果要表达「我们的微服务在新版本发布后依然保持敏捷响应」，正确的填空是：\n"Our microservices remained ______ after the release."',
      options: [
        { text: 'responsively', isCorrect: false, explanation: '错误：remained 是系动词，后面只能接形容词作表语，不能接副词 responsively。' },
        { text: 'responsive', isCorrect: true, explanation: '正确！responsive 是形容词，作系动词 remained 的表语，修饰 microservices 的状态。' },
        { text: 'to responsive', isCorrect: false, explanation: '错误：系动词后不可多余添加介词 to。' },
      ],
    },
    {
      id: 'q-linking-go-bad',
      title: '恶化系动词短语辨析',
      question: '在技术故障讨论中，「服务发生异常出现偏差」通常使用哪个系动词短语？',
      options: [
        { text: 'go wrong', isCorrect: true, explanation: '正确！go wrong 是经典系表搭配，go 作为变化系动词表示走向恶化。' },
        { text: 'get wrongly', isCorrect: false, explanation: '错误：wrongly 是副词，不可作表语。' },
        { text: 'turn to wrong', isCorrect: false, explanation: '错误：turn 作系词直接跟形容词，无需加 to。' },
      ],
    },
  ],
  tables: [
    {
      title: '英语 7 大系动词家族核心词库与高频技术例句速查表 (The 7 Copular Families Master Table)',
      headers: ['家族分类', '核心系动词', '中文语义精髓', '核心特征与搭配', '技术场景地道例句'],
      rows: [
        ['1. 状态存在类', 'be (is/are/was/were)', '是、处于某种状态', '最纯粹的等号赋值', 'The system is ready for testing.'],
        ['2. 感官感知类', 'look, sound, feel, smell, taste', '看起来/听起来/感觉', '自身含被动感知，表语禁副词', 'The architecture looks modular and scalable.'],
        ['3. 变化演进类', 'become, get, turn, grow', '变得、成为、变色', '强调主语进入了全新状态', 'The latency became unacceptably high.'],
        ['4. 恶化负向类', 'go (bad/wrong/offline/crazy)', '变坏、发生故障', '专用于向不好的方向恶化', 'The database went offline suddenly.'],
        ['5. 持续保持类', 'keep, stay, remain, continue', '保持、依然处于', '强调状态自始至终未变', 'All worker threads remained active.'],
        ['6. 表象推断类', 'seem, appear', '似乎、显得', '主观推断与视觉表象', 'This cloud proposal seems cost-effective.'],
        ['7. 证明证实类', 'prove, turn out', '证明是、结果是', '经过检验得出客观事实', 'The caching strategy proved successful.'],
      ],
    },
  ],
};
