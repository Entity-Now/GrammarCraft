import type { TopicContent } from '../../types';

export const troubleshootingBugsTopic: TopicContent = {
  meta: {
    id: 'troubleshooting-bugs',
    title: '排错与用户支持：Bug诊断英语指南',
    enTitle: 'Bug Troubleshooting & Technical Support Dialogue',
    desc: '面向程序员的高频排错实战：真实排错对话流、全景疑问排查句式库、防火墙/环境配置/权限/超时典型故障案例与自测演练',
    icon: '🩺',
    pillarId: 'advanced',
    badge: '技术支持与排错必备',
  },
  diagrams: [
    {
      id: 'd-troubleshoot-lifecycle',
      title: '线上 Bug 排错 5 步闭环流水线 (The 5-Step Troubleshooting Workflow)',
      desc: '从用户报错、信息收集、假设隔离、热修复到最终验证的标准英文对话推进节奏',
      code: `graph LR
    S1["📥 <b>1. 现象复现与定级 (Triage & Clarify)</b><br/>What error code / When did it happen?"]
    --> S2["📋 <b>2. 证据与日志搜集 (Gather Artifacts)</b><br/>Could you share the stack trace?"]
    --> S3["🔬 <b>3. 变量隔离与排查 (Isolate Variables)</b><br/>Is the firewall blocking port 8080?"]
    --> S4["🩹 <b>4. 提供方案与修复 (Propose Workaround / Patch)</b><br/>Please run 'chmod +x' or update .env"]
    --> S5["✅ <b>5. 验证闭环与跟进 (Verify & Follow-up)</b><br/>Does that resolve the issue?"]`,
      details: [
        {
          label: '阶段 1: 现象澄清与复现 (Triage)',
          enPhrase: 'What specific steps did you take right before the error occurred?',
          zhMeaning: '迅速明确问题复现路径，避免信息不对称：您在报错前具体执行了哪些操作步骤？',
          tag: '问题澄清',
        },
        {
          label: '阶段 2: 日志与堆栈搜集 (Gather)',
          enPhrase: 'Could you please provide the full stack trace from the terminal?',
          zhMeaning: '礼貌索取证据日志：能否请您提供终端打印的完整堆栈报错日志？',
          tag: '信息搜集',
        },
        {
          label: '阶段 3: 变量隔离与假设 (Isolate)',
          enPhrase: 'Could you verify whether the firewall allows inbound traffic on port 443?',
          zhMeaning: '单点隔离测试：能否核实一下防火墙是否放行了 443 端口的入站流量？',
          tag: '假设隔离',
        },
        {
          label: '阶段 4: 提供缓解与修复方案 (Patch)',
          enPhrase: 'As a temporary workaround, please export the environment variable manually.',
          zhMeaning: '给出解决方案：作为临时缓解措施，请手动导出一个环境变量。',
          tag: '方案交付',
        },
        {
          label: '阶段 5: 验证修复与闭环确认 (Verify)',
          enPhrase: 'Once you restart the daemon, please let me know if the connection succeeds.',
          zhMeaning: '闭环确认：一旦您重启了后台守护进程，请告知我连接是否恢复成功。',
          tag: '闭环跟进',
        },
      ],
    },
    {
      id: 'd-troubleshoot-decision-tree',
      title: '四大高频排错场景快速定位决策树 (Diagnostic Decision Tree)',
      desc: '网络/防火墙、环境/依赖、权限/只读、超时/死锁典型分类及关键排查动作',
      code: `graph TD
    Root["🚨 <b>用户反馈异常 (Bug Report Received)</b>"]

    Root -->|Connection Refused / Timeout| Net["🌐 <b>1. 网络与防火墙 (Network & Firewall)</b>"]
    Root -->|Cannot read property / KeyError| Env["⚙️ <b>2. 环境与配置 (Env & Config)</b>"]
    Root -->|EACCES / Permission Denied| Perm["🔒 <b>3. 权限与所有权 (Permissions & Access)</b>"]
    Root -->|504 Gateway / Infinite Pending| Time["⏱️ <b>4. 超时与死锁 (Timeouts & Stalls)</b>"]

    Net --> N1["• Is port open in ufw/iptables?<br/>• Is service binding to 0.0.0.0?"]
    Env --> E1["• Is .env file missing or stale?<br/>• Does runtime match version requirement?"]
    Perm --> P1["• Does user have write access to folder?<br/>• Is the script missing 'chmod +x'?"]
    Time --> T1["• Is upstream database locking tables?<br/>• Did reverse proxy reach timeout limit?"]`,
      details: [
        {
          label: '网络与防火墙 (Network & Firewall)',
          enPhrase: 'The connection timed out because the cloud security group blocks port 3306.',
          zhMeaning: '连接超时通常是由于云安全组或本地防火墙未开放对应端口。',
          tag: '网络故障',
        },
        {
          label: '环境与配置 (Env & Config)',
          enPhrase: 'The process threw a NullPointer exception due to missing API_KEY in .env.',
          zhMeaning: '空指针或 undefined 错误多半是由于缺少环境变量或运行时版本不兼容。',
          tag: '配置故障',
        },
        {
          label: '权限与访问控制 (Permissions & Access)',
          enPhrase: 'The daemon failed to write logs because /var/log/app is owned by root.',
          zhMeaning: '守护进程写入失败是因为该日志目录归 root 所有，普通用户无写入权限。',
          tag: '权限故障',
        },
        {
          label: '超时与阻塞 (Timeouts & Stalls)',
          enPhrase: 'The HTTP request hung because the connection pool ran out of available sockets.',
          zhMeaning: '请求挂起是因为连接池中的可用 Socket 资源耗尽，导致无响应。',
          tag: '性能瓶颈',
        },
      ],
    },
    {
      id: 'd-support-tone-ladder',
      title: '技术支持沟通阶梯：冷硬质问 VS 权威体贴 (Tone & Courtesy Ladder)',
      desc: '如何用委婉的间接疑问句与中立事实陈述，既维护用户尊严，又高效获取关键信息',
      code: `graph LR
    subgraph Bad["❌ 粗暴质问 (Aggressive / Blaming)"]
        B1["Why didn't you read the docs?"]
        B2["Your config file is wrong."]
        B3["You broke the database."]
    end

    subgraph Good["✅ 专业权威 (Courteous & Objective)"]
        G1["Could you let me know which documentation guide you followed?"]
        G2["It appears that the database URL in .env has a formatting mismatch."]
        G3["Let's check if the database migration was interrupted during execution."]
    end

    Bad -.->|语法重构升级| Good`,
      details: [
        {
          label: '文档查阅询问',
          enPhrase: 'Could you share which installation guide you referenced?',
          zhMeaning: '替代粗暴的“你没看文档吗？”，委婉询问用户参考的是哪一篇文档。',
          tag: '礼貌提问',
        },
        {
          label: '配置错误陈述',
          enPhrase: 'It looks like the JWT_SECRET is currently empty in your configuration.',
          zhMeaning: '使用 It looks like / It appears that 缓冲语气，将“你写错了”转为客观现象。',
          tag: '客观事实',
        },
      ],
    },
  ],
  formulas: [
    {
      id: 'f-indirect-troubleshoot-q',
      title: '礼貌间接排查疑问句式 (Indirect Diagnostic Formula)',
      formula: 'Could you please confirm whether/if + [主语 S] + [谓语动词 V]...?',
      desc: '在技术支持中，直接提问（如 Is port 8080 open?）有时略显生硬；使用间接疑问句引导，语序回归陈述句语序，既极度礼貌，又显得专业。',
      coreMeaning: '礼貌引导词 + whether/if + 完整陈述主谓语序，避免直接倒装带来的压迫感',
      beginnerTip: '小白技巧：只要在你想问的陈述句前面加上 "Could you please confirm if..."，瞬间变身高阶专业架构师！注意后面的语序不要倒装。',
      tokens: [
        { label: 'Could you please confirm', role: '礼貌引导主句', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' },
        { label: 'whether', role: '连接词 (是否)', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300' },
        { label: 'the firewall allows', role: '主语 + 谓语 (陈述语序)', color: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300' },
        { label: 'inbound traffic on port 8080', role: '宾语与介词修饰', color: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200' },
      ],
      example: {
        en: 'Could you please confirm whether the firewall allows inbound traffic on port 8080?',
        zh: '能否请您确认一下，防火墙是否允许 8080 端口的入站流量？',
      },
    },
    {
      id: 'f-action-inquiry-formula',
      title: '操作时序核验疑问句式 (Action-Timing Inquiry Formula)',
      formula: 'Did you + [动词原形 Base Verb] + after + [动名词 V-ing / 名词短语]...?',
      desc: '排查线上问题时，80% 的 Bug 来源于用户“修改了配置却忘了重启服务”或“拉取了代码却忘了构建”。使用此句型精准询问用户操作时序。',
      coreMeaning: '借助助动词 Did 提问历史操作，以 after doing 锚定时间节点',
      beginnerTip: '小白口诀：Did you restart after modifying...？（修改完之后你重启了吗？）这是程序员排查 Bug 的高频黄金句式！',
      tokens: [
        { label: 'Did you', role: '助动词 + 主语 (过去提问)', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' },
        { label: 'restart the service', role: '动词原形 + 宾语 (时态被Did吸收)', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' },
        { label: 'after', role: '介词 (在...之后)', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300' },
        { label: 'updating the config file', role: '动名词短语 (介词宾语)', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300' },
      ],
      example: {
        en: 'Did you restart the service after updating the config file?',
        zh: '在更新配置文件之后，您重启了该服务吗？',
      },
    },
    {
      id: 'f-conditional-isolation-formula',
      title: '假设隔离与排除测试公式 (Hypothesis Isolation Formula)',
      formula: 'To isolate the issue, could you try + [V-ing] + to see if + [S + V]...?',
      desc: '用于指导用户进行“控制变量法”测试，例如切换网络、改用无痕模式或临时关闭防火墙以排查根本原因。',
      coreMeaning: '目的状语 (To isolate) + 建议动作 (try doing) + 结果观察从句 (to see if...)',
      beginnerTip: '小白口诀：为了排查问题，您能不能试着做一下 X，看看 Y 是不是还会发生？',
      tokens: [
        { label: 'To isolate the issue', role: '目的状语 (不定式短语)', color: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300' },
        { label: ', could you try', role: '礼貌建议', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' },
        { label: 'running the command as root', role: '测试动作 (动名词)', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' },
        { label: 'to see if the error persists', role: '观察结果从句', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300' },
      ],
      example: {
        en: 'To isolate the issue, could you try running the command as root to see if the error persists?',
        zh: '为了隔离排查该问题，您能否尝试以 root 身份运行该命令，看看报错是否依然存在？',
      },
    },
    {
      id: 'f-root-cause-verdict-formula',
      title: '定位定论与修复建议公式 (Root Cause Verdict Formula)',
      formula: 'The issue is caused by + [Noun/Gerund], which leads to + [Noun/Gerund]. To fix it, please + [Imperative V].',
      desc: '排查出根本原因后向用户解释机理并给出标准操作建议的经典技术支持模版。',
      coreMeaning: '被动因果定论 + 非限定定语从句展开影响 + 祈使句给出修复指令',
      tokens: [
        { label: 'The issue is caused by', role: '被动表语定论', color: 'bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300' },
        { label: 'a closed firewall port', role: '核心原因 (名词短语)', color: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' },
        { label: ', which leads to', role: '定语从句引导推论', color: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300' },
        { label: 'connection timeouts', role: '次生后果', color: 'bg-zinc-100 text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200' },
      ],
      example: {
        en: 'The issue is caused by a closed firewall port, which leads to connection timeouts. To fix it, please run "sudo ufw allow 8080/tcp".',
        zh: '该问题是由未放行的防火墙端口导致的，进而引发了连接超时。要修复此问题，请运行 "sudo ufw allow 8080/tcp"。',
      },
    },
  ],
  skeletons: [
    {
      id: 's-troubleshoot-firewall',
      title: '排错实战骨架 1：排查防火墙与端口绑定',
      type: '条件判断与祈使建议 (Conditional & Imperative)',
      badge: '网络与防火墙案例',
      desc: '指导用户检查服务监听状态与防火墙规则的复合工程句型',
      formula: 'If [S + V (is listening)], please verify that [S + V (is not blocked by firewall)].',
      sentence: 'If the backend daemon is listening on 0.0.0.0, please verify that port 8080 is not blocked by your cloud security group.',
      translation: '如果后端守护进程正监听在 0.0.0.0，请核实 8080 端口没有被您的云安全组拦截。',
      parts: [
        { text: 'If the backend daemon is listening on 0.0.0.0', role: '条件状语从句 (If从句)', type: 'adverbial' },
        { text: 'please verify', role: '主句谓语 (祈使礼貌动词)', type: 'verb' },
        { text: 'that port 8080 is not blocked by your cloud security group', role: '宾语从句 (That从句被动态)', type: 'object' },
      ],
      explanation: 'If 引导网络监听前提条件；verify 后面接 that 引导的宾语从句，表达具体的核实事项。',
      beginnerAnalogy: '“如果大门开着，请确认小区的保安亭没有把访客拦在外面”。',
      itAnalogy: 'if (socket.IsListening) Assert(!firewall.IsBlocked(8080));',
    },
    {
      id: 's-troubleshoot-env-config',
      title: '排错实战骨架 2：排查环境变量缺失与配置反模式',
      type: '主系表 + 原因状语 (S + Linker + Predicative + Reason)',
      badge: '配置案例',
      desc: '向用户解释报错根本原因在于缺少环境变量',
      formula: 'The runtime error occurs because the mandatory variable is undefined in the environment.',
      sentence: 'The runtime crash occurs because the mandatory variable DATABASE_URL is undefined in your local environment.',
      translation: '发生运行时崩溃，是因为必填环境变量 DATABASE_URL 在您的本地环境中处于未定义状态。',
      parts: [
        { text: 'The runtime crash', role: '主句主语 (名词短语)', type: 'subject' },
        { text: 'occurs', role: '主句谓语动词 (不及物)', type: 'verb' },
        { text: 'because the mandatory variable DATABASE_URL is undefined in your local environment', role: '原因状语从句 (Because从句)', type: 'adverbial' },
      ],
      explanation: 'occurs 是不及物谓语动词；because 引导从句阐释根本原因（环境变量未定义）。',
      beginnerAnalogy: '“汽车熄火了，因为油箱里的汽油被用空了”。',
      itAnalogy: 'if (process.env.DATABASE_URL == null) throw new MissingConfigException();',
    },
    {
      id: 's-troubleshoot-permissions',
      title: '排错实战骨架 3：排查文件执行与目录写入权限',
      type: '条件让步与补足语 (Modal & Passive)',
      badge: '权限与 Access 案例',
      desc: '指示用户脚本由于缺乏执行位而报错的机理',
      formula: 'The entrypoint script cannot be executed because it lacks the executable bit.',
      sentence: 'The entrypoint script cannot be executed because it lacks the executable permission bit.',
      translation: '入口脚本无法被执行，因为其缺少可执行权限位。',
      parts: [
        { text: 'The entrypoint script', role: '主语 (名词短语)', type: 'subject' },
        { text: 'cannot be executed', role: '情态被动谓语动词 (Modal + Passive)', type: 'verb' },
        { text: 'because it lacks the executable permission bit', role: '原因状语从句', type: 'adverbial' },
      ],
      explanation: 'cannot be executed 采用情态被动结构；从句解释缺乏权限位，下一步通常建议用户使用 chmod +x。',
      beginnerAnalogy: '“房门打不开，因为你手里的钥匙还没配好齿痕”。',
      itAnalogy: 'if (!file.CanExecute) chmod(file, 0755);',
    },
    {
      id: 's-troubleshoot-stale-cache',
      title: '排错实战骨架 4：排查客户端缓存导致的代码不同步',
      type: '建议与让步短语 (Adverbial of Condition)',
      badge: '缓存与构建案例',
      desc: '让用户强制刷新或重新构建以淘汰过期的静态文件',
      formula: 'To ensure [S + V], please clear [O] or launch [O] in an incognito tab.',
      sentence: 'To ensure you are fetching the latest bundle, please clear your browser cache or open the application in an incognito window.',
      translation: '为确保您拉取到的是最新代码包，请清除浏览器缓存或在无痕窗口中打开应用。',
      parts: [
        { text: 'To ensure you are fetching the latest bundle', role: '目的状语从句 (不定式 + 宾语从句)', type: 'adverbial' },
        { text: 'please clear', role: '祈使谓语 1', type: 'verb' },
        { text: 'your browser cache', role: '宾语 1', type: 'object' },
        { text: 'or open', role: '并列祈使谓语 2', type: 'verb' },
        { text: 'the application', role: '宾语 2', type: 'object' },
        { text: 'in an incognito window', role: '地点状语 (介词短语)', type: 'adverbial' },
      ],
      explanation: 'To ensure... 表目的；clear 与 open 是两个并列的祈使动词，提供两种可落地的验证手段。',
      beginnerAnalogy: '“为了看到货架上的新商品，请把旧眼镜擦干净或者直接看新展柜”。',
      itAnalogy: 'Cache.Invalidate() || Window.OpenPrivateSession();',
    },
  ],
  compares: [
    {
      id: 'c-troubleshoot-polite-inquiry',
      chinese: '生硬质问 VS 专业体贴的日志索要方式',
      wrong: 'Send me your error log immediately. / Where is the stack trace?',
      correct: 'Could you please share the full stack trace or terminal output so we can diagnose this together?',
      formula: 'Could you please share [Resource] so that we can [Goal]?',
      reason: '直接使用命令式 Send me... 或生硬的 Where is... 容易让用户产生防备或焦虑；加上 please share 和合作语气 so we can diagnose this together 显得专业且富有同理心。',
      beginnerAnalogy: '医生问诊：“请出示您的病历，我们一起来看一下” 比 “赶紧把病历给我” 要舒适一百倍。',
      itAnalogy: '将阻塞式异常转为协作式回调：RequestUserArtifacts(options, onReceived: Diagnose)。',
    },
    {
      id: 'c-troubleshoot-firewall-blame',
      chinese: '推卸责任断言 VS 客观假设与验证指引',
      wrong: 'It is your firewall problem, not our bug.',
      correct: 'It looks like the connection is being dropped at the network layer. Could you verify if port 8080 is open in your firewall?',
      formula: 'It looks like [Objective Symptom]. Could you verify if [Network / Config Check]?',
      reason: '直接判定 It is your problem 容易引发客户反弹甚至升级投诉；从客观现象（连接在网络层被中断）出发，引导用户核验防火墙，有理有据。',
      beginnerAnalogy: '外卖小哥说：“门铃可能坏了，请问您能确认一下门锁吗” 而不是 “是你家门铃坏了，别赖我”。',
      itAnalogy: '日志客观描述：NetworkDropDetected at TCP handshake. RecommendedAction: VerifyFirewallRules().',
    },
    {
      id: 'c-troubleshoot-actionable-steps',
      chinese: '模糊建议 VS 附带可执行代码的具体操作指令',
      wrong: 'You need to fix your file permissions and try again.',
      correct: 'Please grant execution rights by running "chmod +x start.sh", then restart the container.',
      formula: 'Please [Action Verb] by running [Exact CLI Command], then [Next Step].',
      reason: '只说 fix your permissions 用户根本不知道具体敲什么命令；直接给出具体的精确命令 chmod +x start.sh 极大降低用户的认知负担。',
      beginnerAnalogy: '“你该吃药了” 让人抓狂；“请温水送服这颗白色的止痛片” 让人踏实。',
      itAnalogy: '提供具备自愈参数的 CLI Snippet：ProvideFixCommand("chmod +x start.sh && docker-compose restart")。',
    },
    {
      id: 'c-troubleshoot-negative-questions',
      chinese: '反向确认疑问句的使用分寸（避免指责，侧重排查遗漏）',
      wrong: "Why haven't you installed Node.js? (带有讽刺指责)",
      correct: 'Just to confirm, has Node.js 18 or later been installed on the target machine?',
      formula: 'Just to confirm, has [Dependency] been installed on [Target Machine]?',
      reason: '虽然 Didn\'t you... 语法上成立，但容易让用户感到被质疑能力；使用 Just to confirm, has ... been installed 采用中立被动语态，既专业又尊重客户。',
      beginnerAnalogy: '“你到底打没打疫苗？” 容易引发争吵；“为了确认记录，请问您此前接种过疫苗吗？” 更符合规范。',
      itAnalogy: '系统健康度自检：System.AssertDependencyInstalled("node", minVersion: "18.0.0")。',
    },
  ],
  words: [
    {
      id: 'w-troubleshoot',
      word: 'troubleshoot',
      phonetic: '/ˈtrʌblʃuːt/',
      pos: 'v. 排查故障 / 排除问题',
      meaning: '系统性查找并消除软硬件或网络系统中的故障',
      mnemonic: 'trouble (麻烦) + shoot (射击/消灭) ➔ 击溃麻烦 ➔ 排查故障',
      examples: [
        { en: 'Let me help you troubleshoot this issue step by step.', zh: '让我来协助您一步步排查这个问题。' },
        { en: 'We spent two hours troubleshooting the intermittent database timeout.', zh: '我们花了两个小时排查数据库偶发超时问题。' },
      ],
      tags: ['核心动词', '排错必备'],
    },
    {
      id: 'w-reproduce',
      word: 'reproduce',
      phonetic: '/ˌriːprəˈduːs/',
      pos: 'v. 复现 (Bug / 故障)',
      meaning: '在相同或模拟的环境中重新触发、展示出相同的错误现象',
      mnemonic: 're (再次) + produce (产生) ➔ 再次产生 ➔ 复现',
      examples: [
        { en: 'Were you able to reproduce the error in your local environment?', zh: '您能在本地环境中复现该错误吗？' },
        { en: 'I could not reproduce the bug using the default configuration.', zh: '使用默认配置时，我无法复现该 Bug。' },
      ],
      tags: ['复现确认', '核心动词'],
    },
    {
      id: 'w-isolate',
      word: 'isolate',
      phonetic: '/ˈaɪsəleɪt/',
      pos: 'v. 隔离 / 孤立变量',
      meaning: '通过排除外围干扰因素，将故障根源锁定在特定模块或配置项上',
      mnemonic: 'isolate the problem ➔ 缩小排查包围圈',
      examples: [
        { en: 'To isolate the root cause, please disable all third-party plugins temporarily.', zh: '为了隔离出根本原因，请先临时禁用所有第三方插件。' },
        { en: 'We managed to isolate the leak to the WebSocket connection handler.', zh: '我们成功将内存泄漏隔离锁定到了 WebSocket 连接处理器上。' },
      ],
      tags: ['控制变量', '核心动词'],
    },
    {
      id: 'w-stack-trace',
      word: 'stack trace',
      phonetic: '/stæk treɪs/',
      pos: 'n. 调用堆栈轨迹 / 报错堆栈',
      meaning: '程序崩溃或抛出异常时打印出的自底向上的函数调用链',
      mnemonic: 'stack (堆栈) + trace (轨迹) ➔ 函数调用的案发现场记录',
      examples: [
        { en: 'Could you copy and paste the entire stack trace here?', zh: '您能否把完整的报错堆栈复制并粘贴到这里？' },
        { en: 'The stack trace indicates a NullPointerException at line 42.', zh: '堆栈轨迹表明第 42 行出现了空指针异常。' },
      ],
      tags: ['诊断证据', '日志分析'],
    },
    {
      id: 'w-firewall',
      word: 'firewall',
      phonetic: '/ˈfaɪərwɔːl/',
      pos: 'n. 防火墙',
      meaning: '控制进出网络流量的安全防护网（如 ufw, iptables, AWS 安全组）',
      mnemonic: 'fire (火) + wall (墙) ➔ 隔离外部网络危险的安全墙',
      examples: [
        { en: 'The firewall might be dropping inbound packets on port 22.', zh: '防火墙可能正在丢弃 22 端口上的入站数据包。' },
        { en: 'Did you add an inbound rule in your cloud firewall?', zh: '您在云防火墙中添加了入站规则吗？' },
      ],
      tags: ['网络安全', '高频故障点'],
    },
    {
      id: 'w-workaround',
      word: 'workaround',
      phonetic: '/ˈwɜːrkəraʊnd/',
      pos: 'n. 临时变通方案 / 临时缓解措施',
      meaning: '在根本性补丁发布前，暂时绕开 Bug 维持系统运转的方法',
      mnemonic: 'work (工作) + around (绕过) ➔ 绕着问题走 ➔ 变通方案',
      examples: [
        { en: 'As a temporary workaround, you can restart the pod every morning.', zh: '作为临时变通方案，您可以每天早晨重启一次 Pod。' },
        { en: 'We will release an official hotfix, but here is a workaround for now.', zh: '我们将发布正式热修复补丁，但目前您可以先采用这个变通方案。' },
      ],
      tags: ['方案交付', '客服支持'],
    },
    {
      id: 'w-intermittent',
      word: 'intermittent',
      phonetic: '/ˌɪntərˈmɪtənt/',
      pos: 'adj. 间歇性的 / 偶发的',
      meaning: '不是每次都发生、忽隐忽现难以捉摸的故障（如网络抖动）',
      mnemonic: 'inter (在...之间) + mit (送出) ➔ 断断续续 ➔ 偶发的',
      examples: [
        { en: 'Is this error reproducible every time, or is it intermittent?', zh: '这个错误是每次都能必现，还是偶发间歇性的？' },
        { en: 'We observed intermittent network packet loss during peak hours.', zh: '我们在高峰时段观察到了间歇性的网络丢包。' },
      ],
      tags: ['故障特征', '高阶形容词'],
    },
    {
      id: 'w-permission-denied',
      word: 'permission denied',
      phonetic: '/pərˈmɪʃn dɪˈnaɪd/',
      pos: 'phr. 权限拒绝 / 访问受限',
      meaning: '操作系统或数据库因用户权限不足而拒绝执行某项操作 (EACCES)',
      mnemonic: 'permission (许可) + denied (被拒绝)',
      examples: [
        { en: 'Getting "permission denied" usually means the file needs chmod +x.', zh: '收到 "permission denied" 通常意味着文件需要添加可执行权限 chmod +x。' },
        { en: 'The script threw a permission denied error when accessing /etc/hosts.', zh: '脚本在访问 /etc/hosts 时抛出了权限拒绝错误。' },
      ],
      tags: ['常见报错', 'Linux权限'],
    },
  ],
  builders: [
    {
      id: 'b-troubleshoot-builder-1',
      title: '积木组装 1：礼貌询问用户是否已检查防火墙端口',
      instruction: '请将以下词块按“礼貌引导 + 连接词 + 主语 + 谓语动词 + 宾语”的正确语序拼装：',
      words: ['Could you please confirm', 'whether', 'the firewall', 'is actively blocking', 'port 8080'],
      targetSentence: 'Could you please confirm whether the firewall is actively blocking port 8080?',
      explanation: 'Could you please confirm (引导句) + whether (连接词) + the firewall (从句主语) + is actively blocking (谓语进行时) + port 8080 (宾语)。注意间接疑问句从句保持正常陈述语序！',
      beginnerAnalogy: '先礼貌问“能否确认”，再用 whether 顺着说“防火墙是不是正在拦截 8080 端口”。',
    },
    {
      id: 'b-troubleshoot-builder-2',
      title: '积木组装 2：排查操作时序（修改配置后是否重启了服务）',
      instruction: '请按“助动词提问 + 动作原形 + after 介词短语”组装排错问句：',
      words: ['Did you', 'restart the service', 'after updating', 'the environment variables'],
      targetSentence: 'Did you restart the service after updating the environment variables?',
      explanation: 'Did you (助动词借用) + restart the service (动作原形) + after updating (after + 动名词) + the environment variables (名词短语宾语)。',
      beginnerAnalogy: '“你有没有在更新环境变量之后，把服务重新启动一下？”',
    },
    {
      id: 'b-troubleshoot-builder-3',
      title: '积木组装 3：给出明确的 Linux 权限修复命令指引',
      instruction: '请组装面向用户的修复建议句子：',
      words: ['Please run', '"chmod +x entrypoint.sh"', 'to grant', 'executable permissions'] ,
      targetSentence: 'Please run "chmod +x entrypoint.sh" to grant executable permissions.',
      explanation: 'Please run (祈使动词) + "chmod +x entrypoint.sh" (具体命令宾语) + to grant executable permissions (动词不定式短语作目的状语)。',
      beginnerAnalogy: '“请运行这个命令，目的是赋予可执行权限”。',
    },
  ],
  quizzes: [
    {
      id: 'q-troubleshoot-indirect-polite',
      title: '客诉沟通选择：哪种索要堆栈日志的方式最得体专业？',
      question: '当用户报告前端报了 500 内部错误，但没有提供任何细节时，作为工程师您该如何提问？',
      options: [
        {
          text: 'Could you please share the browser console error and network response tab so we can inspect what failed?',
          isCorrect: true,
          explanation: '正确！极其专业且具体，清楚指引用户去哪里找信息（Console 与 Network Tab），并带有协作目的 (so we can inspect)。',
        },
        {
          text: 'Where is the log? You gave me zero information.',
          isCorrect: false,
          explanation: '过于粗暴甚至带有攻击性，严重违反专业技术支持与职场沟通准则。',
        },
        {
          text: 'Why does your code return 500? Did you break it?',
          isCorrect: false,
          explanation: '典型的甩锅式质问，将责任直接推给用户，极易引发客户不满与争议。',
        },
        {
          text: 'The server is fine, maybe try again tomorrow.',
          isCorrect: false,
          explanation: '消极敷衍，未对 500 内部错误进行任何技术归因或协助。',
        },
      ],
      tip: '选择具体、可操作且带有协作意愿（so we can...）的间接句型。',
    },
    {
      id: 'q-troubleshoot-firewall-diagnose',
      title: '网络故障诊断：用户反馈 Connection Timed Out 的首要排查点',
      question: '用户反馈 "I can access localhost:3000 on the server, but from my laptop it times out." 最地道贴切的英文问句是？',
      options: [
        {
          text: 'Is the server listening on 0.0.0.0, and does your cloud security group allow inbound traffic on port 3000?',
          isCorrect: true,
          explanation: '正确！直击要害：本地能访问但远程超时，核心原因就是要么服务只绑了 127.0.0.1，要么防火墙/安全组未开放入站规则！',
        },
        {
          text: 'Why do you use laptop instead of the server terminal?',
          isCorrect: false,
          explanation: '逻辑荒谬，客户在本地电脑调用服务是完全正常的业务诉求。',
        },
        {
          text: 'Did you delete node_modules yesterday?',
          isCorrect: false,
          explanation: '风马牛不相及，连接超时是典型的传输层网络阻断，与 node_modules 无关。',
        },
        {
          text: 'Your laptop is broken, please buy a new one.',
          isCorrect: false,
          explanation: '非技术性胡乱推诿。',
        },
      ],
      tip: '分析现象：本地可通（服务本身跑着）+ 远程超时（网络/端口受阻）。',
    },
    {
      id: 'q-troubleshoot-env-missing',
      title: '环境排错：当控制台报 undefined 时如何引导核实？',
      question: '用户启动项目报错 "process.env.STRIPE_SECRET_KEY is missing"，正确的专业排查指示是：',
      options: [
        {
          text: 'Could you verify whether you have created a .env file and populated STRIPE_SECRET_KEY as outlined in .env.example?',
          isCorrect: true,
          explanation: '正确！以 whether 引导间接核实，明确给出对照参考模板（.env.example），非常严密。',
        },
        {
          text: 'Why you forget the key? Put it now.',
          isCorrect: false,
          explanation: '语法破碎且语气严厉不礼貌。',
        },
        {
          text: 'The key is undefined because JavaScript is bad.',
          isCorrect: false,
          explanation: '吐槽语言无法解决客户当前的项目阻塞。',
        },
        {
          text: 'Just remove all stripe keys from source code.',
          isCorrect: false,
          explanation: '危险的破坏性操作，会直接导致支付功能彻底失效。',
        },
      ],
      tip: '以 .env.example 为基准核实环境变量是否已正确配置。',
    },
    {
      id: 'q-troubleshoot-permission-fix',
      title: '权限报错排查：出现 EACCES 时如何给出清晰指令？',
      question: '在 Docker 容器构建时报错 "EACCES: permission denied, mkdir \'/app/dist\'"，下列哪个建议最标准？',
      options: [
        {
          text: 'It looks like the container user lacks write permissions to /app. You can resolve this by adding "USER root" or chowning the folder in your Dockerfile.',
          isCorrect: true,
          explanation: '正确！首先分析机理（缺乏写入权限），然后给出 Dockerfile 的具体修复手段（USER root 或 chown）。',
        },
        {
          text: 'Permission denied means you are not allowed to use Linux.',
          isCorrect: false,
          explanation: '错误的调侃，毫无技术指导价值。',
        },
        {
          text: 'You should disable all security in your operating system.',
          isCorrect: false,
          explanation: '极度不安全且不切实际的反模式建议。',
        },
        {
          text: 'Run rm -rf / and see what happens.',
          isCorrect: false,
          explanation: '严重恶意的毁灭性命令。',
        },
      ],
      tip: '解释权限受限原因并提供 Dockerfile 修复代码。',
    },
  ],
  tables: [
    {
      title: '程序员排错与客户支持高频问句大全 (Diagnostic Questions Catalog)',
      headers: ['排查维度', '典型应用场景', '专业地道英文表达 (问句 / 引导句)', '中文释义与使用提示'],
      rows: [
        ['1. 澄清复现', '明确故障发生的时间点', 'When did this issue first start occurring?', '这个问题是什么时候初次出现的？（定位是否伴随特定部署）'],
        ['1. 澄清复现', '了解用户具体操作', 'What exact steps did you take prior to this error?', '在报错前您具体执行了哪些操作步骤？'],
        ['1. 澄清复现', '确认复现频率', 'Does this happen consistently, or is it intermittent?', '这是每次都会持续必现，还是偶发的？'],
        ['2. 索要证据', '索取报错截图或终端', 'Would you mind sharing a screenshot or the terminal output?', '您介意分享一张截图或终端输出吗？'],
        ['2. 索要证据', '索取完整日志文件', 'Could you attach the latest log file from /var/log/app/?', '能否附上来自该目录下的最新日志文件？'],
        ['3. 网络端口', '核验防火墙与安全组', 'Is port 8080 allowed through your cloud firewall / security group?', '您的云防火墙/安全组是否放行了 8080 端口？'],
        ['3. 网络端口', '检查服务绑定地址', 'Is the daemon listening on 0.0.0.0 or restricted to localhost (127.0.0.1)?', '守护进程是监听在 0.0.0.0 还是仅限本地 localhost？'],
        ['3. 网络端口', '连通性基础测试', 'Can you successfully ping or curl the server from your client machine?', '您能从客户端机器上成功 ping 或 curl 通服务器吗？'],
        ['4. 环境配置', '核实 .env 环境变量', 'Have all mandatory environment variables in .env been populated?', '在 .env 中的所有必填环境变量都已填写了吗？'],
        ['4. 环境配置', '运行时版本匹配度', 'Which version of Node.js / Java are you currently running?', '您当前正在运行的是哪个版本的 Node.js / Java？'],
        ['4. 环境配置', '操作时序确认', 'Did you rebuild the project after pulling the latest Git commit?', '拉取最新的 Git 提交后，您重新构建项目了吗？'],
        ['5. 权限与文件', '文件可执行位检查', 'Does the startup script have the executable permission bit (chmod +x)?', '启动脚本是否已被赋予可执行权限位？'],
        ['5. 权限与文件', '目录写入权限检查', 'Does the current system user have write permissions to the destination folder?', '当前系统用户对目标文件夹拥有写入权限吗？'],
        ['6. 验证跟进', '确认修复生效', 'Once you apply the change and reboot, does that resolve the issue?', '一旦您应用了该修改并重启，问题解决了吗？'],
      ],
      note: '专业要诀：在技术支持对话中，尽量将直接疑问句包装为带有 Could you please... / Would you mind... 的间接疑问句，能大幅提升专业好感度。',
    },
    {
      title: '常见技术排错案例深度对照表 (Common Technical Bug Cases)',
      headers: ['故障分类', '典型报错日志 (Error Clue)', '根本原因剖析 (Root Cause)', '排查诊断英文套话', '推荐修复操作 / CLI 命令'],
      rows: [
        [
          '防火墙未开放端口',
          'Connection refused / Operation timed out',
          '服务端口未在 ufw/iptables 或云安全组 (Security Group) 中放行',
          'It looks like traffic to port 443 is being blocked by a firewall.',
          'sudo ufw allow 443/tcp 或在控制台添加入站规则',
        ],
        [
          '绑定地址错误 (127.0.0.1)',
          'Localhost works, remote clients timeout',
          '应用只绑定了回环地址 127.0.0.1，无法接收局域网或外部 IP 请求',
          'The server is only bound to localhost instead of 0.0.0.0.',
          '将配置中的 host: "127.0.0.1" 改为 host: "0.0.0.0"',
        ],
        [
          '缺失环境变量',
          'KeyError / Cannot read property of undefined',
          '生产或本地未配置 .env 文件，或容器启动未传入 -e 参数',
          'The application crashed because API_SECRET is missing from the environment.',
          'cp .env.example .env 并补充必填密钥配置',
        ],
        [
          '运行环境版本过低',
          'SyntaxError: Unexpected token \'?.\' (Optional Chaining)',
          '宿主机安装的 Node/Python 版本过旧，不支持现代语法特性',
          'Your current Node version (v12) does not support optional chaining syntax.',
          'nvm use 20 或更新基础运行时镜像版本',
        ],
        [
          '文件权限不足',
          'EACCES: permission denied, open \'/var/run/docker.sock\'',
          '当前执行用户不在 docker 用户组内，或脚本未赋予 +x 权限',
          'The non-root user does not have permission to access the Docker daemon socket.',
          'sudo usermod -aG docker $USER && chmod +x script.sh',
        ],
        [
          '依赖版本或缓存冲突',
          'Module not found / React version mismatch',
          '本地 node_modules 或 lockfile 损坏，存在幽灵依赖或过时缓存',
          'This may stem from stale cached artifacts in node_modules.',
          'rm -rf node_modules package-lock.json && npm install',
        ],
        [
          'SSL 证书过期',
          'CERT_HAS_EXPIRED / SSL: CERTIFICATE_VERIFY_FAILED',
          '域名 HTTPS 证书已过有效期，TLS 握手在第 2 步被客户端强制终止',
          'The TLS handshake failed because the domain certificate expired yesterday.',
          'sudo certbot renew --force-renewal',
        ],
        [
          '反向代理上游超时',
          '504 Gateway Timeout (Nginx / Cloudflare)',
          '后端长任务执行超过 proxy_read_timeout（如 60s），代理提前切断连接',
          'The upstream backend service took longer than the 60s Nginx proxy timeout limit.',
          '增加 proxy_read_timeout 300s; 或改用异步任务队列 (Celery/BullMQ)',
        ],
      ],
      note: '快速记忆：网络看 0.0.0.0 与端口，配置看 .env 与版本，脚本看 chmod 与权限，挂起看超时与日志。',
    },
    {
      title: '技术客服高阶礼貌缓冲词库 (Buffer Phrases for Support)',
      headers: ['沟通阶段', '缓冲过渡短语 (Buffer Phrase)', '中文地道含义', '使用场景与心态价值'],
      rows: [
        ['收到报错时', 'Thanks for bringing this to our attention.', '感谢您及时向我们反馈此问题。', '平息用户情绪，展现负责任态度'],
        ['理解困境时', 'I completely understand how frustrating this timeout must be.', '我非常理解出现这种超时给您带来的困扰。', '同理心共情，建立信任感'],
        ['索要日志前', 'To help us pinpoint the issue as quickly as possible...', '为了协助我们尽可能快地定位问题根源...', '说明索要日志的合理性，促使用户配合'],
        ['等待用户测试时', 'Please take your time to run the verification steps.', '请按照您的节奏从容执行验证，不着急。', '缓解用户紧迫感，营造从容专业的支持氛围'],
        ['问题解决后', 'We appreciate your patience while we worked through this.', '非常感谢您在排查过程中给予的耐心与配合。', '优雅闭环，提升客户满意度与专业形象'],
      ],
      note: '沟通金律：技术决定你能否解决问题，沟通决定客户是否认可你的价值。',
    },
  ],
};
