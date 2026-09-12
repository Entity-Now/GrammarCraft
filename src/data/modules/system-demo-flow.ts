import type { TopicContent } from '../../types';

export const systemDemoFlowTopic: TopicContent = {
  meta: {
    id: 'system-demo-flow',
    title: '系统演示与时序逻辑表达',
    enTitle: 'System Demo & Execution Flow',
    desc: '网站UI布局（左右/上下/组件位置）、按钮点击交互事件、时序逻辑推进（先/再/然后）与工控PLC/后端状态触发全场景地道英文表达指南',
    icon: '🖥️',
    pillarId: 'advanced',
    badge: '工程师必修',
  },
  diagrams: [
    {
      id: 'd-ui-layout-coordinates',
      title: 'Web 系统与软件 UI 空间方位解剖图 (UI Spatial & Layout Model)',
      desc: '清晰指出顶部栏、侧边栏、主体视口、浮层与四角方位的标准英文表达',
      code: `graph TD
    subgraph Header["顶部区域 · Top Header"]
        TL["📍 <b>左上角 (Top-Left)</b><br/>Logo & Brand"]
        TR["👤 <b>右上角 (Top-Right)</b><br/>Profile & Login"]
    end

    subgraph Viewport["页面主体 · Main Viewport"]
        Left["⬅️ <b>左侧导航 (Left Sidebar)</b><br/>Collapsible Menu"]
        Right["💻 <b>主工作区 (Main Content)</b><br/>Dashboard & Telemetry Grid"]
    end

    subgraph Footer["底部控制 · Footer Bar"]
        BL["⚡ <b>底部监控 (Status Bar)</b><br/>Console & Live Logs"]
        BR["🔘 <b>操作按键 (Action Buttons)</b><br/>Save / Submit / Cancel"]
    end

    Header --> Viewport
    Viewport --> Footer`,
      details: [
        {
          label: '左上角品牌区 (Top-Left)',
          enPhrase: 'In the top-left corner: Logo & Brand Identity',
          zhMeaning: '介绍品牌与网站入口定位，如：In the top-left corner, you can see our product logo.',
          tag: '方位坐标',
        },
        {
          label: '右上角用户区 (Top-Right)',
          enPhrase: 'In the upper-right corner: User Profile & Auth Controls',
          zhMeaning: '介绍登录状态或用户中心，如：The login button is situated in the upper-right corner.',
          tag: '方位坐标',
        },
        {
          label: '左侧导航栏 (Left Sidebar)',
          enPhrase: 'On the left-hand sidebar: Collapsible Navigation Menu',
          zhMeaning: '介绍菜单栏与树状结构，如：On the left sidebar, users can navigate between modules.',
          tag: 'UI组件',
        },
        {
          label: '主体工作区 (Main Content)',
          enPhrase: 'In the main content area: Dynamic Workspace & Grid',
          zhMeaning: '介绍页面核心视口，如：The main content area displays the real-time data table.',
          tag: 'UI组件',
        },
        {
          label: '底部控制台 (Bottom Footer)',
          enPhrase: 'Along the bottom footer: Status Bar & Action Controls',
          zhMeaning: '介绍状态栏与操作按钮，如：The action buttons are anchored at the bottom right.',
          tag: 'UI组件',
        },
      ],
    },
    {
      id: 'd-plc-flowchart',
      title: '工控 PLC / 后端事件驱动时序流水线 (Event-Driven State Pipeline)',
      desc: '从硬件信号置位、事件监听检测、业务操作执行到状态回执的四步时序链',
      code: `graph LR
    S1["⚡ <b>Step 1: 信号置位</b><br/>PLC sets DB1 to 1"]
    -->|Once 一旦触发| S2["📡 <b>Step 2: 状态捕获</b><br/>Listener catches change"]
    -->|Immediately 立即执行| S3["⚙️ <b>Step 3: 业务调度</b><br/>Program runs routine"]
    -->|Finally 最终回执| S4["✅ <b>Step 4: 状态收敛</b><br/>Log telemetry & reset"]`,
      details: [
        {
          label: '阶段 1: 硬件信号跳变',
          enPhrase: 'Once the PLC sets the status bit in DB1 to 1...',
          zhMeaning: '信号前置条件表达：使用 Once 或 As soon as 强调状态瞬时跳变。',
          tag: '条件触发',
        },
        {
          label: '阶段 2: 监听服务捕获',
          enPhrase: 'As soon as the listener detects the value change...',
          zhMeaning: '事件监听机制表达：表示后台服务或中间件毫秒级捕获到变量跳变。',
          tag: '事件监听',
        },
        {
          label: '阶段 3: 业务流程执行',
          enPhrase: 'The software immediately executes the target routine...',
          zhMeaning: '业务动作响应表达：使用 immediately executes 突出工业流水线的响应速度。',
          tag: '动作响应',
        },
        {
          label: '阶段 4: 状态复位与确认',
          enPhrase: 'Finally, the system logs telemetry and resets the DB flag.',
          zhMeaning: '时序闭环收尾表达：使用 Finally 总结落库、打日志及将标志位回写为 0。',
          tag: '时序终结',
        },
      ],
    },
  ],
  formulas: [
    {
      id: 'f-ui-position-action',
      title: 'UI 空间方位与组件交互万能公式',
      badge: '界面演示公式',
      formula: 'Clicking [Button / Target] in [Location] + [triggers / brings up / toggles] + [Result / Component]',
      desc: '演示网站或软件界面时，将“在什么位置点击了什么”作为动名词主语，谓语使用精准的触发动词，宾语接弹窗或界面变化，表达极度专业利落。',
      beginnerTip: '【小白秒懂套路】介绍界面记住这套公式：“在什么位置（比如右上角 in the top-right corner）的什么按钮，点击后会干什么（triggers ...）”。不要中式直译“in up right click button”，把“点击按钮”当作一件事（Clicking the button...）来当主语！',
      tokens: [
        { label: 'Clicking [Target]', role: '动作主语', color: 'blue', desc: 'Clicking the Login button / Clicking the dropdown' },
        { label: 'in [Location]', role: '空间方位修饰', color: 'purple', desc: 'in the top-right corner / on the left sidebar' },
        { label: 'triggers / opens', role: '事件驱动动词', color: 'emerald', desc: 'triggers an event / opens a modal / redirects to...' },
        { label: '[Result]', role: '响应结果客体', color: 'amber', desc: 'the authentication dialog / a confirmation prompt' },
      ],
      example: {
        en: 'Clicking the "Sign In" button in the upper-right corner brings up the authentication modal.',
        zh: '点击右上角的“登录”按钮即可弹出身份认证对话框。',
      },
    },
    {
      id: 'f-sequential-logic-chain',
      title: '时序逻辑多级推进公式 (告别单一的 then... then...)',
      badge: '时序链公式',
      formula: 'Initially / First ➔ Next / Then ➔ Subsequently / After that ➔ Once [Condition] ➔ Finally / In the end',
      desc: '介绍代码流水线或操作步骤时，交替使用不同层级的时序副词与从属连词，呈现出清晰严谨的逻辑梯度。',
      beginnerTip: '【小白秒懂口诀】讲逻辑千万别一通乱用“then... then... then...”！按照这 4 步走：第一步用 First / Initially（首先），第二步用 Next（接着），第三步用 Subsequently / After that（随后），最后一步用 Finally（最终）。瞬间高级感拉满！',
      tokens: [
        { label: 'Step 1: 起步', role: 'Initially / First', color: 'blue', desc: '用于系统初始化或第一步输入' },
        { label: 'Step 2: 承接', role: 'Next / Then', color: 'purple', desc: '用于紧随其后的校验或预处理' },
        { label: 'Step 3: 推进', role: 'Subsequently / After that', color: 'emerald', desc: '用于调用远程接口或复杂业务处理' },
        { label: 'Step 4: 终结', role: 'Finally / In the end', color: 'amber', desc: '用于落库完成、返回响应或渲染' },
      ],
      example: {
        en: 'First, the client submits credentials; next, the gateway validates the token; subsequently, the service queries the database; finally, the user profile is returned.',
        zh: '首先，客户端提交凭据；接着，网关验证令牌；随后，服务查询数据库；最后，返回用户个人信息。',
      },
    },
    {
      id: 'f-plc-trigger-logic',
      title: '工控 PLC / 后端事件状态触发与条件响应公式',
      badge: '工控与后端公式',
      formula: 'Once / As soon as + [Device/PLC] + [sets / triggers] + [DB tag / Register] + to [Value], + [Program/System] + [executes / invokes] + [Operation]',
      desc: '专用于工业控制（PLC/SCADA/MES）与后端事件监听场景：用 Once 或 As soon as 引导前置信号跳变，主句紧接着陈述系统触发的对应动作。',
      beginnerTip: '【小白秒懂口诀】工控或后端写条件触发，用“Once（一旦）”开头最地道！“Once the PLC sets DB value to 1, the program executes...”——“一旦 PLC 把 DB 值设为 1，程序就执行……”。不要直译成“PLC trigger DB is 1, program will do”，结构清晰又标准！',
      tokens: [
        { label: 'Once / As soon as', role: '条件引导词 (一旦...就...)', color: 'emerald', desc: '表示条件一满足立刻触发，比普通的 If 更加强调时序即时性' },
        { label: 'sets DB tag to 1', role: '信号状态赋值', color: 'purple', desc: 'triggers / updates / changes the register to 1' },
        { label: 'the program invokes...', role: '主句动作响应', color: 'blue', desc: 'executes the routine / dispatches the task / starts the motor' },
      ],
      example: {
        en: 'Once the PLC sets the status bit in DB10 to 1, the program automatically executes the calibration routine.',
        zh: '一旦 PLC 将 DB10 中的状态位设置为 1，程序便会自动执行校准例程。',
      },
    },
  ],
  skeletons: [
    {
      id: 'sk-ui-layout-demo',
      badge: '页面布局介绍',
      type: 'Layout & Spatial Structure',
      title: '全景布局解构：左右分栏与顶部导航',
      desc: '如何向客户或团队流利介绍网站的整体版面设计、菜单分布与工作区定位。',
      formula: 'The page is split into [A] on the left and [B] on the right, topped with [Header]',
      formulaDesc: '被动分栏表达 is split into ...，方位介词 on the left / on the right 精准定位。',
      sentence: 'The website is split into two panels: a collapsible menu on the left and the main dashboard on the right.',
      translation: '该网站分为两个区域：左侧是可折叠的菜单栏，右侧是主仪表盘工作区。',
      parts: [
        { text: 'The website', role: '主语', type: 'subject', detail: '整个系统页面' },
        { text: 'is split into', role: '系表被动', type: 'linker', detail: '被切分为 / 分割为' },
        { text: 'two panels:', role: '表语核心', type: 'predicative', detail: '两大板块/面板' },
        { text: 'a collapsible menu [on the left]', role: '左侧组成部分', type: 'object', detail: '左侧的可折叠导航菜单' },
        { text: 'and the main dashboard [on the right]', role: '右侧组成部分', type: 'object', detail: '右侧的主仪表盘展示区' },
      ],
      explanation: '千万不要直译为 *Left is menu, right is dashboard*！地道的英文表达使用 be split into（被分割为）或 features a sidebar on the left and a workspace on the right。',
      beginnerAnalogy: '就像给人介绍房子：“屋子分成两间：左边是厨房，右边是客厅”。先总体说分成两半（is split into two panels），再分别交代左边（on the left）和右边（on the right）是什么！',
      itAnalogy: '类比栅格布局系统：display: grid; grid-template-columns: 240px 1fr; 左侧为 Fixed Navigation，右侧为 Fluid Viewport。',
    },
    {
      id: 'sk-ui-click-event',
      badge: '交互与事件触发',
      type: 'Interaction & Event Dispatch',
      title: '按钮点击与弹窗交互：动名词主语结构',
      desc: '清晰交代在特定方位点击按钮所引发的动态界面响应与状态变更。',
      formula: 'Clicking [Button] in [Corner] + [Verb] + [Dialog / Event]',
      sentence: 'Clicking the "Settings" icon in the upper-right corner opens a dropdown menu with user preferences.',
      translation: '点击右上角的“设置”图标会弹出一个包含用户偏好的下拉菜单。',
      parts: [
        { text: 'Clicking the "Settings" icon', role: '动名词主语', type: 'subject', detail: '点击设置图标这个操作' },
        { text: '[in the upper-right corner]', role: '介词方位状语', type: 'adverbial', detail: '在右上角 · 精准方位' },
        { text: 'opens', role: '核心谓语动词', type: 'verb', detail: '打开 / 展开' },
        { text: 'a dropdown menu', role: '宾语', type: 'object', detail: '下拉菜单组件' },
        { text: '[with user preferences]', role: '介词后置定语', type: 'adverbial', detail: '附带有用户偏好设置' },
      ],
      explanation: '在英语中，把操作过程（Clicking the icon）直接作为句子的主语，是技术文档和系统演示中最规范地道的句法，避免频繁使用“You can click...”。',
      beginnerAnalogy: '把“点击”这套动作打包成一个整体“Clicking the button”，作为句子的主角，然后再说它“opens（打开）”了什么，表达非常流畅自然。',
      itAnalogy: '类比事件监听器模式：buttonElement.addEventListener("click", () => dropdown.open());',
    },
    {
      id: 'sk-plc-trigger-routine',
      badge: '工控与后端触发',
      type: 'Conditional Trigger & Industrial Flow',
      title: 'PLC DB 变量跳变触发程序运行',
      desc: '工业自动化与状态机开发核心表达：当硬件或DB块数据满足条件时触发程序动作。',
      formula: 'Once + PLC + sets [DB register] to 1, the program executes [Action]',
      sentence: 'Once the PLC sets the status flag in DB1 to 1, the software immediately executes the emergency stop sequence.',
      translation: '一旦 PLC 将 DB1 中的状态标志位置为 1，软件便会立即执行急停流程。',
      parts: [
        { text: 'Once', role: '从属连词', type: 'linker', detail: '一旦……就…… · 瞬态条件' },
        { text: 'the PLC', role: '从句主语', type: 'subject', detail: '可编程逻辑控制器' },
        { text: 'sets', role: '从句谓语', type: 'verb', detail: '将……设置为' },
        { text: 'the status flag in DB1', role: '从句宾语', type: 'object', detail: 'DB1 内部的状态标志' },
        { text: 'to 1', role: '宾语补足语', type: 'complement', detail: '设定为数值 1' },
        { text: 'the software', role: '主句主语', type: 'subject', detail: '上位机/后台软件' },
        { text: 'immediately executes', role: '主句谓语', type: 'verb', detail: '立即执行' },
        { text: 'the emergency stop sequence', role: '主句宾语', type: 'object', detail: '急停逻辑序列' },
      ],
      explanation: '工业控制中表达“DB的值为1”，最严谨的动词搭配是 set the DB value to 1 或 write 1 to the DB block。主从句之间用 Once 或 As soon as 连接，比 if 更加强调工业流水线中事件驱动的确定性与敏捷性。',
      beginnerAnalogy: '“Once（一旦）PLC 把开关拨到 1，软件立马执行急停！”逻辑非常直观，先说触发条件（Once PLC sets ... to 1），再说软件跟着干了什么（software executes ...）！',
      itAnalogy: '类比响应式状态驱动架构：plcClient.watch("DB1.flag", value => { if (value === 1) runEmergencyStop(); });',
    },
    {
      id: 'sk-sequential-fullstack-chain',
      badge: '完整时序链演示',
      type: 'Execution Order & Sequence Chain',
      title: '多步骤流程：登录认证到页面重定向',
      desc: '向同事或客户按部就班演示“先怎样，再怎样，然后怎样，最后怎样”。',
      formula: 'First [Step 1]; next, [Step 2]; subsequently, [Step 3]; finally, [Step 4]',
      sentence: 'First, the user enters credentials on the login page; next, the backend verifies the password; subsequently, the system generates a JWT token; finally, the browser redirects to the overview dashboard.',
      translation: '首先，用户在登录页输入账号密码；接着，后端校验密码；随后，系统生成 JWT 令牌；最后，浏览器重定向跳转至概览仪表板。',
      parts: [
        { text: 'First, the user enters credentials', role: '阶段 1 (起步)', type: 'subject', detail: '首先：用户提交登录凭据' },
        { text: 'next, the backend verifies the password', role: '阶段 2 (承接)', type: 'verb', detail: '接着：后端校验安全性' },
        { text: 'subsequently, the system generates a token', role: '阶段 3 (推进)', type: 'object', detail: '随后：系统发放身份令牌' },
        { text: 'finally, the browser redirects to dashboard', role: '阶段 4 (终结)', type: 'adverbial', detail: '最后：浏览器执行页面跳转' },
      ],
      explanation: '避免通篇使用 then，四步推进法（First ➔ Next ➔ Subsequently ➔ Finally）是技术演讲和英文技术答辩的黄金骨架，层次分明，听众极容易抓住你的执行节拍。',
      beginnerAnalogy: '就像排队做核酸：“第一步亮码，第二步采样，第三步封管，第四步放行”。用四个不同的词把节奏带出来，节奏感分明！',
      itAnalogy: '类比 Promise 链式调用：login().then(verify).then(generateToken).finally(redirectToDashboard);',
    },
  ],
  compares: [
    {
      id: 'cmp-corner-location',
      chinese: '在右上角点击登录按钮。',
      wrong: 'In the up-right click login button.',
      correct: 'Click the "Sign In" button in the top-right corner.',
      formula: 'Click [Button] in the top-right corner',
      reason: '中文习惯把方位放在最前面（在右上角……），而英文必须遵循“先动作+客体，后置方位”的习惯；且“右上角”的标准英语是 in the top-right corner 或 in the upper-right corner，绝不能写成 *up-right*！',
      beginnerAnalogy: '开门见山先说动作：“点登录（Click Sign In）”，再说在哪儿点：“在右上角（in the top-right corner）”！',
      itAnalogy: 'document.querySelector(".top-right .btn-signin").click(); 先选元素后触发。',
    },
    {
      id: 'cmp-page-layout-split',
      chinese: '这个页面上面是导航栏，左边是菜单，右边是内容展示。',
      wrong: 'This page up is nav, left is menu, right is content show.',
      correct: 'The page features a top navbar, flanked by a collapsible sidebar on the left and the main content area on the right.',
      formula: 'The page features [A], with [B] on the left and [C] on the right.',
      reason: '中式硬翻容易出现名词并列无动词的语病。地道英语使用 features（以……为特色/具备……）或 is composed of（由……构成），辅以 on the left 与 on the right 明确界定布局。',
      beginnerAnalogy: '不要“左边是...右边是...”，用“页面拥有顶部栏，并由左侧菜单和右侧内容左右包揽（flanked by）”，高级且自然！',
    },
    {
      id: 'cmp-then-overuse',
      chinese: '首先我们创建项目，然后配置数据库，然后启动服务，然后测试接口。',
      wrong: 'First we create project, then config database, then start service, then test API.',
      correct: 'Initially, we initialize the project; next, we configure the database; subsequently, we spin up the service; finally, we verify the endpoints.',
      formula: 'Initially ➔ Next ➔ Subsequently ➔ Finally',
      reason: '连续重复 3 次以上 then 是典型的中式直译口癖。通过 Initially ➔ Next ➔ Subsequently ➔ Finally 可以让技术陈述极富节奏感与严谨度。',
      beginnerAnalogy: '把千篇一律的 then 换成阶梯词汇，听起来就像专业架构师在做技术汇报！',
    },
    {
      id: 'cmp-plc-trigger-syntax',
      chinese: 'PLC 触发一个 DB 的值为 1，程序就会执行某个操作。',
      wrong: 'PLC trigger a DB value is 1, program will do some action.',
      correct: 'Once the PLC sets the DB register value to 1, the program executes the corresponding routine.',
      formula: 'Once the PLC sets [Register] to [Value], the program executes [Routine]',
      reason: 'PLC 不是动作本身，“把……设置为 1”应使用动词短语 set the value to 1；条件与时序响应使用 Once（一旦……就……）引导，避免出现中式无谓语或多动词堆砌错误。',
      beginnerAnalogy: '“一旦（Once）PLC 把值设为 1，程序就执行对应流程”。动词用 sets ... to 1，不用中式硬拼。',
    },
    {
      id: 'cmp-popup-modal-action',
      chinese: '点击保存按钮，会弹出一个确认框。',
      wrong: 'Click save button, will have a confirm box jump out.',
      correct: 'Clicking the "Save" button brings up a confirmation dialog.',
      formula: 'Clicking [Button] brings up [Dialog]',
      reason: '千万不要把“弹出”说成 *jump out*！英文中弹窗的标准动词是 brings up、pops up、prompts 或 triggers a modal。',
      beginnerAnalogy: '弹窗是用 brings up（唤起）或 pops up（弹出），绝不能说弹簧一样的 jump out！',
    },
  ],
  words: [
    {
      id: 'w-sidebar',
      word: 'sidebar',
      phonetic: '/ˈsaɪd.bɑːr/',
      pos: 'n.',
      meaning: '（网页或界面的）侧边栏，侧面菜单区',
      examples: [
        { en: 'The left-hand sidebar can be collapsed to save screen space.', zh: '左侧侧边栏可以收起以节省屏幕空间。' },
        { en: 'All navigation links are organized inside the sidebar.', zh: '所有导航链接都归类在侧边栏内部。' },
      ],
      mnemonic: 'side（旁边）+ bar（条/栏）= 侧边栏',
      tags: ['UI组件', '布局方位'],
    },
    {
      id: 'w-trigger',
      word: 'trigger',
      phonetic: '/ˈtrɪɡ.ər/',
      pos: 'v. / n.',
      meaning: '触发，引起（事件、动作）；扳机，触发器',
      examples: [
        { en: 'Hovering over the card triggers a subtle zoom animation.', zh: '鼠标悬停在卡片上会触发细微的缩放动效。' },
        { en: 'A change in sensor voltage triggers the PLC interrupt.', zh: '传感器电压的变化会触发 PLC 中断。' },
      ],
      mnemonic: 'trig（扳机）+ er = 扣动扳机 ➔ 触发事件',
      tags: ['工控与事件', '高频动词'],
    },
    {
      id: 'w-subsequently',
      word: 'subsequently',
      phonetic: '/ˈsʌb.sɪ.kwənt.li/',
      pos: 'adv.',
      meaning: '随后，接着，其后（高级递进词，替代连续的 then）',
      examples: [
        { en: 'The request is authenticated, and subsequently routed to the microservice.', zh: '请求通过身份验证，随后被路由至对应的微服务。' },
      ],
      mnemonic: 'sub（在...之后）+ sequ（跟随 sequence）= 随后紧接着',
      tags: ['时序逻辑', '汇报演讲'],
    },
    {
      id: 'w-collapsible',
      word: 'collapsible',
      phonetic: '/kəˈlæp.sə.bəl/',
      pos: 'adj.',
      meaning: '可折叠的，可收缩的',
      examples: [
        { en: 'The layout provides a collapsible side drawer for mobile users.', zh: '该布局为移动端用户提供了一个可折叠的侧边抽屉栏。' },
      ],
      mnemonic: 'collapse（折叠倒下）+ ible（可...的）= 可折叠的',
      tags: ['UI属性', '组件设计'],
    },
    {
      id: 'w-register',
      word: 'register',
      phonetic: '/ˈredʒ.ɪ.stər/',
      pos: 'n. / v.',
      meaning: '（工控PLC/CPU中的）寄存器，数据存储区；登记，注册',
      examples: [
        { en: 'The PLC writes the temperature value into register DB100.', zh: 'PLC 将温度数值写入寄存器 DB100。' },
      ],
      tags: ['工控硬件', '底层数据'],
    },
    {
      id: 'w-modal',
      word: 'modal',
      phonetic: '/ˈmoʊ.dəl/',
      pos: 'n. / adj.',
      meaning: '模态对话框（遮罩浮层弹窗）；情态的',
      examples: [
        { en: 'A confirmation modal pops up when you click the Delete button.', zh: '点击删除按钮时，会弹出一个确认模态框。' },
      ],
      tags: ['前端组件', '交互弹窗'],
    },
  ],
  expressions: [
    {
      id: 'exp-top-right',
      phrase: 'in the top-right corner',
      literal: '在最高右边的角落',
      actual: '在右上角（软件界面最核心功能区）',
      scenario: '指向头像、登录按钮、设置图标、全局搜索或消息通知',
      breakdown: 'in（在...里面）+ the top-right（右上）+ corner（角落/边缘位置）',
      examples: [
        { en: 'You will find the user profile icon in the top-right corner of the screen.', zh: '你可以在屏幕右上角找到用户头像图标。' },
      ],
      tips: '也常说 in the upper-right corner，两者完全等价。左下角则是 in the bottom-left corner。',
    },
    {
      id: 'exp-bring-up',
      phrase: 'bring up a modal / dialog',
      literal: '带上来一个弹窗',
      actual: '唤起/弹出一个模态框或对话框',
      scenario: '点击按钮、快捷键触发二次确认或表单填写浮层',
      breakdown: 'bring up（使浮现/唤起）+ modal/dialog（弹窗组件）',
      examples: [
        { en: 'Hitting Ctrl+K brings up the command palette.', zh: '按下 Ctrl+K 即可唤起全局快捷指令面板。' },
      ],
      tips: '绝不要说 jump out，地道表达是 bring up 或 pop up。',
    },
    {
      id: 'exp-split-into',
      phrase: 'is split into ... panels',
      literal: '被切成若干面板',
      actual: '划分为……个区域/板块（布局解构黄金搭配）',
      scenario: '向客户介绍左右分栏、上下视口、IDE多窗口',
      breakdown: 'split（切分）+ into（进入...状态）+ panels（面板/区域）',
      examples: [
        { en: 'The main workspace is split into two equal panels for code comparison.', zh: '主工作区被划分为两个等宽面板以进行代码对比。' },
      ],
    },
    {
      id: 'exp-once-sets-to',
      phrase: 'Once ... sets [tag] to 1',
      literal: '一旦...把标签设为1',
      actual: '一旦……置位/写入数值1（工控与状态触发标准句式）',
      scenario: 'PLC触发、寄存器跳变、布尔值变更事件',
      breakdown: 'Once（从属连词）+ 主语 + sets + 变量/寄存器 + to [数值]',
      examples: [
        { en: 'Once the gateway sets the heartbeat flag to 0, an alert is dispatched.', zh: '一旦网关将心跳标志位置为 0，警报便会发出。' },
      ],
      tips: '在 PLC 编程中常叫“置位（set）”与“复位（reset）”，英文对应 set to 1 和 reset to 0。',
    },
  ],
  builders: [
    {
      id: 'b-ui-click-builder',
      title: '拼装 UI 交互表达',
      instruction: '组装句子：「点击右上角的图标会展开一个用户菜单」',
      words: ['Clicking the icon', 'in the top-right corner', 'expands', 'a user profile menu.'],
      targetSentence: 'Clicking the icon in the top-right corner expands a user profile menu.',
      explanation: 'Clicking the icon 作为动名词主语，in the top-right corner 后置修饰方位，expands 作为及物动词连接宾语。',
      beginnerAnalogy: '把“点击图标”作为主干动作，挂上方位置于后，再加展开的菜单，语序非常优美！',
    },
    {
      id: 'b-plc-flow-builder',
      title: '拼装 PLC 工业触发时序句',
      instruction: '组装句子：「一旦 PLC 将 DB1 的数值设置为 1，输送带就会启动」',
      words: ['Once the PLC', 'sets the DB1 value', 'to 1,', 'the conveyor belt', 'starts running.'],
      targetSentence: 'Once the PLC sets the DB1 value to 1, the conveyor belt starts running.',
      explanation: 'Once 引导工业状态改变，从句中 sets ... to 1 标准表达赋值，主句连接动作响应。',
      beginnerAnalogy: '“Once 条件一成立，主句动作马上启动！”工控程序员必备句型。',
    },
  ],
  quizzes: [
    {
      id: 'q-ui-direction-quiz',
      title: '界面方位与交互动词自测',
      question: '如果要向客户演示：“点击左侧侧边栏底部的‘登出’按钮可以退出系统”，最地道合规的表达是：',
      options: [
        { text: 'In the left sidebar bottom click logout button to exit system.', isCorrect: false, explanation: '错误：中式直译，介词堆砌且缺乏主干结构。' },
        { text: 'Clicking the "Log Out" button at the bottom of the left sidebar signs the user out of the system.', isCorrect: true, explanation: '正确！动名词短语作主语，方位状语 at the bottom of the left sidebar 严谨准确，signs out 作为正规动作动词。' },
        { text: 'Click logout on down-left will jump out exit.', isCorrect: false, explanation: '错误：down-left 与 jump out 属于严重中式英语语法错误。' },
      ],
    },
    {
      id: 'q-plc-logic-quiz',
      title: '工控 PLC 与时序触发选择题',
      question: '在描述「当 PLC 触发 DB 块数值变为 1 时，程序启动泵机例程」，下列哪一项最符合工业软件规范：',
      options: [
        { text: 'Once the PLC sets the DB register to 1, the program initiates the pump routine.', isCorrect: true, explanation: '正确！Once 引导状态突变，sets ... to 1 为工业赋值标准动词搭配，initiates the pump routine 为专业程序例程触发。' },
        { text: 'PLC triggers DB is 1, so program starts pump.', isCorrect: false, explanation: '错误：语法结构松散，缺乏正式的连词与宾补结构。' },
        { text: 'If PLC make DB value 1, program will do pumping.', isCorrect: false, explanation: '错误：make DB value 1 属于非正式的口语硬翻。' },
      ],
    },
  ],
  tables: [
    {
      title: '网站与系统 UI 空间方位、组件与高频交互动词速查大表',
      headers: ['界面区域 / 空间方位', '标准英文表达', '该区域常见组件', '高频触发动作动词', '演示实战例句模板'],
      rows: [
        ['顶部导航栏 (水平居顶)', 'Top Header / Navigation Bar', 'Logo, Breadcrumbs, Global Search (全局搜索)', 'navigates to, searches for, displays', 'The top header displays the project breadcrumbs.'],
        ['右上角核心操作区', 'In the top-right / upper-right corner', 'User Avatar (头像), Notifications, Sign In/Out', 'brings up, opens dropdown, logs out', 'Clicking the avatar in the top-right corner opens settings.'],
        ['左侧主导航栏 (垂直居左)', 'Left-hand Sidebar / Side Drawer', 'Collapsible Navigation Menu, Module Tree', 'collapses, expands, toggles', 'The left-hand sidebar can be collapsed to expand canvas.'],
        ['主工作区 / 视口中心', 'Main Viewport / Canvas / Dashboard', 'Data Grid (表格), Real-time Charts, Editor', 'renders, visualizes, streams telemetry', 'The central canvas renders live database metrics.'],
        ['右侧抽屉 / 辅助侧栏', 'Right-hand Drawer / Inspector Panel', 'Properties Form (属性表单), Details View', 'slides in, reveals metadata, inspects', 'Clicking an item slides in the right-hand inspector panel.'],
        ['底部状态与控制台', 'Bottom Footer / Status Bar / Console', 'Terminal Log Output, Save/Cancel, Pagination', 'logs output, paginates, saves changes', 'The bottom console displays execution logs in real time.'],
        ['模态弹窗 / 浮层对话框', 'Modal Dialog / Popup Overlay', 'Confirmation Box, Alert Prompt, Form Wizard', 'pops up, prompts the user, dismisses', 'Clicking "Delete" prompts the user with a confirmation modal.'],
      ],
    },
    {
      title: '时序逻辑链推进与工控 PLC / 状态机事件驱动句型库',
      headers: ['逻辑阶段 / 场景', '推荐引导词与连词', '工控 / 后端核心搭配', '地道英文实战例句模板', '中文业务含义'],
      rows: [
        ['时序起步 (第 1 步)', 'First / Initially / First off', 'receives payload, initializes state', 'Initially, the controller reads the digital input.', '首先，控制器读取数字量输入。'],
        ['时序承接 (第 2 步)', 'Next / Then', 'validates inputs, checks bounds', 'Next, the logic verifies whether the value is in range.', '接着，逻辑模块验证该数值是否在正常范围内。'],
        ['时序推进 (第 3 步)', 'Subsequently / After that', 'invokes routine, queries DB', 'Subsequently, the service invokes the calculation routine.', '随后，后台服务调用核心计算例程。'],
        ['条件瞬变 (状态触发)', 'Once / As soon as', 'sets DB register to 1, flag trips', 'Once the PLC sets DB10.DBX0.0 to 1, the motor starts.', '一旦 PLC 将 DB10 的该位设为 1，电机便会启动。'],
        ['并行动作 (同时发生)', 'Simultaneously / At the same time', 'broadcasts event, flashes LED', 'Simultaneously, the driver sounds an alarm buzzer.', '与此同时，驱动器鸣响报警蜂鸣器。'],
        ['时序终结 (最后一步)', 'Finally / In the end', 'resets flag, persists state, returns ACK', 'Finally, the worker resets the register flag to 0.', '最后，工作线程将寄存器标志位复位为 0。'],
      ],
    },
  ],
};
