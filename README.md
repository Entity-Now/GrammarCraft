# GrammarCraft · 现代化交互式英语可视化学习框架

> 基于 React 18+ / TypeScript / Vite / Tailwind CSS 打造的现代化、高质感、卡片化、交互式英语学习框架。

---

## 🌟 核心设计理念 (Design & Philosophy)

- **Apple & Google 现代设计美学**：采用纯净无衬线字体（Inter / SF Pro）、半透明毛玻璃 (`backdrop-blur-xl`)、极细微柔和边框、大圆角与舒适呼吸留白。
- **绿灰质感主色调与自定义主题**：
  - 默认采用翡翠绿（Emerald Green）+ 中性岩灰（Zinc/Slate Gray）。
  - 支持 **深色模式 (Dark Mode)** 与 **浅色模式 (Light Mode)** 一键热切换。
  - 支持 5 套自定义强调主题色（翡翠绿 Emerald、森林玉 Jade、鼠尾草绿 Sage、鲜林绿 Forest、极简灰 Slate）。
- **程序员全栈思维赋能**：将中英思维差异类比为弱类型 JavaScript（意合）与强类型 Rust/C#（形合），以代码逻辑、函数参数展开与状态机演变解构英语语法。

---

## 🧩 10 大可视化交互卡片库 (Visual Card System)

1. **核心解构卡片 (`SentenceSkeletonCard`)**：
   - 语法背脊骨拆解：主语(S)、谓语(V)、宾语(O)、系词(Linker)、表语(P)、状语(Adv)交互式高亮徽章。
   - 点击任一语法单元即可展开对应的底层角色与修饰机制说明。
   - 附带程序员代码类比（IT Analogy）与地道意译。
2. **状态演变卡片 (`SentenceTransformCard`)**：
   - 可视化展示句子形态演变（肯定句 ➔ 否定句 ➔ 一般疑问句 ➔ 特殊疑问句 ➔ 反义疑问句）。
   - 明确标注新增（added）、位移（moved）、形态转换（changed）的词块。
3. **语法公式卡片 (`FormulaCard`)**：
   - 语法核心公式着色提取，支持点击公式 Token 探针查看语法构成单元角色。
4. **流程图卡片 (`MermaidCard`)**：
   - 深度封装 `mermaid`，渲染逻辑流程图（如全栈3步Debug法、时态正交坐标系等），支持图表与源码一键切换、复制代码。
5. **积木造句卡片 (`SentenceBuilderCard`)**：
   - 打乱英文单词词块，用户拖拽/点击放入语序装配槽，支持实时校验、撤销、重置与撒花动效反馈。
6. **自测挑战卡片 (`QuizCard`)**：
   - 交互式单选题自测，即时判定正误，展开逐项详细解析并自动播放发音。
7. **语法对比纠错卡片 (`GrammarCompareCard`)**：
   - 中文意图 vs 中式直译 (Syntax Error) vs 地道母语表达 (Standard English) 红绿对比与 Bug 修复法则。
8. **单词深度卡片 (`WordCard`)**：
   - 包含音标、词性、**前缀/词根/后缀三元解构**、语境例句与记忆口诀。
9. **地道表达式卡片 (`ExpressionCard`)**：
   - 职场短语习语、字面直译误区对比、底层搭配解构与典型应用场景。
10. **全景知识导图 (`LearningMapCard`)**：
    - 矩阵式章节导航与分类色块，支持点击平滑定位。

---

## 🔊 MsEdgeTTS 智能双模语音引擎

- **服务端通道**：通过 Vite 开发服务插件代理 `/api/tts`，调用微软 Edge 大模型神经语音（Ava、Andrew、Emma、Sonia、晓晓、云希等）。
- **客户端降级通道**：当离线或服务端不可用时，无缝降级使用浏览器原生 Web Speech API (`window.speechSynthesis`)，保障 100% 随时可用。
- **全局控制台与局部微播放**：
  - 页面右下角常驻悬浮语音控制台（当前朗读内容、语速 0.75x ~ 1.5x 调节、音色切换、播放/暂停/停止）。
  - 单词、例句、拼装结果均内置微型 `TTSButton`，单点即听。

---

## 📚 19 大核心语法专题四大支柱架构

### 支柱一：基础认知与时间数字 (Basics, Time & Numbers)
1. **时间和日期 (Time & Date)**：12个月份、7天星期、时间缩写、at/on/in 空间时间金字塔法则。
2. **数字单位学习 (Numbers & Units)**：千分位逗号三位一进法、百/千/百万/十亿单位换算、单复数规则。
3. **序数词 (Ordinal Numbers)**：1st-100th 变形口诀、分数表达法、日期与排行应用。

### 支柱二：核心词性与动词引擎 (Core Verbs & Parts of Speech)
4. **be动词体系 (Be Verbs)**：am/is/are/was/were/been/being 全家桶、时态人称映射、主系表赋值模型。
5. **情态动词 (Modal Verbs)**：can, could, may, might, must, should, will, would 语气确定度梯形谱与推测/义务模型。
6. **助动词 (Auxiliary Verbs)**：do/does/did, have/has/had, be 调度器、时态提升与否定疑问启动机制。
7. **系动词 (Linking Verbs)**：感官系词、变化系词、保持系词分类全景与形容词作表语铁律。
8. **介词全景 (Prepositions)**：0D点(at)、2D面(on)、3D体(in)几何模型与职场高频介词搭配。
9. **代词系统 (Pronouns)**：主格、宾格、形物代、名物代、反身代词矩阵与形式主语 it 占位机制。
10. **不定代词 (Indefinite Pronouns)**：4x4 复合不定代词矩阵、单数谓语一致性陷阱与形容词后置修饰。
11. **连词逻辑 (Conjunctions)**：FANBOYS 并列连词、从属连词、成对关联平行对称原则。
12. **副词规律 (Adverbs)**：频率副词（Be后实前）、方式副词、程度副词在句子中的摆放优先级。
13. **名词短语 (Noun Phrases)**：限定词 + 前置修饰词 + 核心中心词 + 后置修饰展开（右倾结构）。

### 支柱三：句子骨架与句式逻辑 (Sentence Skeleton & Syntax)
14. **核心时态体系 (Tenses)**：时间轴 × 动作状态二维坐标系；6大核心时态与 `been` vs `being` 终极剖析。
15. **思维差异与 Debug 法 (Thinking Differences)**：意合(JS)与形合(Rust/C#)思维根源；全栈 3 步造句 Debug 法。
16. **句子骨架与基本句式 (Sentence Skeleton & Types)**：三大核心骨架 (SV, SVO, SLP)；陈述、一般疑问、特殊疑问、反问句、反义疑问句（前肯后否镜像规则）。
17. **状语从句 (Adverbial Clauses)**：时间、条件、原因、让步、目的五大从句与“主将从现”时态黄金铁律。
18. **宾语从句 (Object Clauses)**：that 引导事件流、whether/if、嵌入式疑问句还原陈述语序（去 did）。

### 支柱四：高阶句型与实战思维 (Advanced Patterns & Mastery)
19. **20 种工作英语核心句型 (20 Core Patterns)**：五大基本句型、状语扩展、核心名词性与定语从句、状语从句与特殊句式。

---

## 🚀 启动与运行指南

### 安装依赖
```bash
pnpm install
```

### 启动本地开发服务
```bash
pnpm dev
```
启动后访问控制台输出的本地地址（如 `http://localhost:5173/`）。

### 构建生产包
```bash
pnpm build
```

---

## 🛠️ 技术栈清单

- **核心框架**：React 19, TypeScript
- **构建工具**：Vite 8, @tailwindcss/vite
- **样式引擎**：Tailwind CSS v4
- **图标系统**：Lucide React
- **图表绘制**：Mermaid 11
- **粒子动效**：Canvas Confetti
- **语音合成**：MsEdgeTTS (Node WebSocket) + Web Speech API 备用双模引擎
