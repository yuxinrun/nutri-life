import { buildArticle } from "./article-helpers";

const who = { title: "WHO：健康饮食 Fact Sheet", publisher: "WHO", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" };
const cnsoc = { title: "中国营养学会", publisher: "中国营养学会", url: "https://www.cnsoc.org/" };
const pubmed = { title: "PubMed", publisher: "U.S. National Library of Medicine", url: "https://pubmed.ncbi.nlm.nih.gov/" };

export const articlesB = [
  buildArticle({
    slug: "food-additives", title: "食品添加剂基础知识：看到陌生名字不必恐慌", subtitle: "批准使用、ADI 与“零添加”营销话术",
    summary: "食品添加剂在法规允许范围内使用并经过安全评估。判断风险要看物质、用量和暴露量，而不是名字长短。",
    category: "食品标签", tags: ["添加剂", "食品安全", "标签"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-30", readingMinutes: 9, illustration: "label",
    keyPoints: [
      "添加剂获批不等于绝对零风险，而是“在规定用途和限量下风险可接受”。",
      "ADI（每日允许摄入量）是安全评估工具，不是建议摄入量。",
      "“零添加”更多是营销策略，不代表不含其他配料或更营养。",
    ],
    sections: [
      {
        id: "why", heading: "为什么值得了解",
        paragraphs: [
          "配料表上陌生的化学名称常引发焦虑。但防腐剂、乳化剂、抗氧化剂等在现代食品工业中有明确功能：延长保质期、改善质地、防止油脂氧化。没有它们，食品浪费和食源性疾病风险可能上升。",
          "真正需要关注的是：是否超范围超限量使用、是否对特定人群（如儿童、过敏体质）有特殊风险，以及这款食品整体营养质量如何。",
        ],
      },
      {
        id: "science", heading: "关键概念",
        bullets: [
          "ADI：每日允许摄入量，通常由动物实验 NOAEL 除以安全系数得出。",
          "JECFA：FAO/WHO 联合食品添加剂专家委员会，负责国际风险评估。",
          "中国使用 GB 2760《食品安全国家标准 食品添加剂使用标准》规定允许品种与限量。",
          "添加剂需按“带入原则”管理，复合配料中的添加剂也需合规。",
        ],
      },
      {
        id: "practice", heading: "实际建议",
     
        steps: [
          "看配料表时关注排在前面的成分；添加剂通常用量很小，位置靠后。",
          "对某种添加剂有疑问，可查国家食品安全风险评估中心的科普解读。",
          "儿童食品不必追求“零添加”，更应关注糖、钠和整体营养结构。",
          "特殊过敏体质者关注具体过敏原标识，而不是泛化排斥所有添加剂。",
        ],
        callout: { type: "caution", text: "“合规添加”不等于鼓励大量食用超加工食品。减少高度加工食品的核心理由通常是营养密度，而不是添加剂恐慌。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“化学品都有害”：水和食盐也是化学物质，风险取决于剂量。",
          "“不含防腐剂一定更安全”：可能意味着保质期短或需要更严格的冷链。",
          "“添加剂会致癌”：需具体物质具体评估，不能一概而论。",
        ],
      },
    ],
    references: [
      { title: "国家食品安全风险评估中心", publisher: "CFSA", url: "https://www.cfsa.net.cn/" },
      { title: "FAO/WHO Codex Alimentarius", publisher: "FAO / WHO", url: "https://www.fao.org/fao-who-codexalimentarius/en/" },
    ],
    related: [{ label: "食品标签", href: "/food-labels#additives" }, { label: "国家标准全文公开系统", href: "/resources/openstd" }, { label: "食品安全示意图", href: "/illustrations" }],
  }),
  buildArticle({
    slug: "food-safety-storage", title: "食物储存与食品安全：冰箱不是保险箱", subtitle: "生熟分开、温度控制与复热的四个关键动作",
    summary: "食源性疾病常常源于交叉污染、温度不当和存放过久。掌握几条基本原则，比记住复杂规则更有效。",
    category: "食品安全", tags: ["食品安全", "储存", "交叉污染"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-01", readingMinutes: 9, illustration: "safety",
    keyPoints: [
      "生熟分开是防止交叉污染的核心。",
      "冷藏 0–4℃只能延缓微生物生长，不能让食物无限期安全。",
      "剩菜应在 2 小时内冷藏，复热需彻底。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "很多家庭把食物放进冰箱就认为“安全了”。但李斯特菌等可以在冷藏温度下生长，熟食在冰箱中长期存放同样有风险。",
          "食品安全与营养是两个维度：一份营养搭配完美的饭菜，如果储存不当导致食源性疾病，就失去了意义。",
        ],
      },
      {
        id: "science", heading: "四个关键动作",
     
        steps: [
          "清洁：处理食物前后洗手，砧板和刀具生熟分开或彻底清洗。",
          "分开：生肉、海鲜与即食食品分开放置，避免汁液滴落。",
          "控温：冷藏 0–4℃，冷冻 -18℃以下；熟食尽快降温入冰箱。",
          "复热：剩菜彻底加热至中心滚烫；反复解冻会提升风险。",
        ],
        table: {
          head: ["食物", "冷藏建议", "提示"],
          rows: [
            ["熟饭菜", "3–4 天内", "大份分装更快降温"],
            ["生肉禽", "1–2 天", "可冷冻延长"],
            ["熟鸡蛋", "约 1 周", "带壳煮蛋避免反复温度波动"],
            ["切开的果蔬", "2–3 天", "洗净切块后密封"],
          ],
        },
      },
      {
        id: "practice", heading: "场景建议",
        paragraphs: [
          "外带餐：超过 2 小时未冷藏的熟食应谨慎；炎热天气时间更短。",
          "冰箱整理：熟食放上层，生肉放下层，marked 日期标签。",
          "解冻：优先冷藏室缓慢解冻或流动冷水，不建议室温长时间放置。",
        ],
        callout: { type: "caution", text: "出现异味、黏液、胀袋或霉斑的食物应丢弃，不要仅靠加热“挽救”；孕妇、老人和免疫低下者尤其谨慎。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“冰箱低温能杀死细菌”：多数情况下只是延缓生长。",
          "“闻起来没味就能吃”：部分致病菌不产生明显气味。",
          "“冷冻可以无限期保存”：品质会下降，且解冻后仍需尽快食用。",
        ],
      },
    ],
    references: [
      { title: "WHO – Food safety", publisher: "WHO", url: "https://www.who.int/news-room/fact-sheets/detail/food-safety" },
      { title: "USDA – Keep Food Safe", publisher: "USDA", url: "https://www.foodsafety.gov/keep/index.html" },
    ],
    related: [{ label: "食品标签与食品安全", href: "/food-labels#safety" }, { label: "食物储存流程图", href: "/illustrations" }, { label: "鸡蛋", href: "/foods/egg" }],
  }),
  buildArticle({
    slug: "gut-microbiome", title: "肠道菌群与饮食：我们知道什么，不知道什么", subtitle: "膳食纤维、发酵食品与“益生菌”的边界",
    summary: "肠道菌群研究发展很快，但公众传播常跑在证据前面。增加植物性食物多样性是稳妥方向，具体菌株功效则需逐项核查。",
    category: "营养与健康", tags: ["肠道菌群", "膳食纤维", "益生菌"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-03", readingMinutes: 11, illustration: "fiber",
    keyPoints: [
      "菌群组成受饮食、药物、年龄与环境多因素影响。",
      "膳食纤维是菌群发酵的底物，增加植物性食物多样性是可操作策略。",
      "益生菌效果具有菌株特异性，不能泛化为“所有益生菌都有效”。",
    ],
    sections: [
      {
        id: "why", heading: "为什么常被夸大",
        paragraphs: [
          "“肠道是第二大脑”“90% 的血清素来自肠道”等说法广为流传，但常被用来推销产品。菌群与健康的关联真实存在，但因果方向、菌株差异与个体反应远未完全厘清。",
          "对普通人而言，最有价值的行动不是购买昂贵的益生菌，而是增加蔬菜、水果、豆类、全谷和坚果的多样性。",
        ],
      },
      {
        id: "science", heading: "关键机制",
     
        bullets: [
          "膳食纤维被菌群发酵产生短链脂肪酸（乙酸、丙酸、丁酸）。",
          "丁酸是结肠上皮细胞的重要能量来源。",
          "发酵食品（酸奶、泡菜等）含活微生物或代谢产物，作用因产品而异。",
          "抗生素、压力、睡眠和疾病都会改变菌群，饮食只是其中一个变量。",
        ],
      },
      {
        id: "practice", heading: "实际建议",
        steps: [
          "每周尽量摄入 30 种不同植物性食物（包括谷物、豆类、坚果、香料）。",
          "逐步增加纤维，配合足量饮水，观察腹胀情况。",
          "选择原味酸奶等发酵食品时看糖含量。",
          "益生菌用于特定适应证时应有明确菌株与剂量依据；免疫低下者需咨询医生。",
        ],
        callout: { type: "caution", text: "粪便菌群检测目前难以直接指导普通人的饮食或治疗，不建议据此自行大幅调整饮食或用药。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“菌群越多越好”：多样性通常被视为积极指标，但没有单一最优数值。",
          "“所有发酵食品都含活菌”：部分产品经过杀菌。",
          "“益生菌能替代膳食纤维”：不能。",
          "“肠漏是万能病因”：该概念在科普中常被滥用，需由医生结合临床评估。",
        ],
      },
    ],
    references: [harvardRef(), { title: "NIH Human Microbiome Project", publisher: "NIH", url: "https://www.hmpdacc.org/" }],
    related: [{ label: "膳食纤维与肠道", href: "/articles/fiber-guide" }, { label: "肠道健康专题", href: "/nutrition-health/gut" }, { label: "The Good Gut 书评", href: "/books/good-gut" }],
  }),
  buildArticle({
    slug: "how-to-read-research", title: "如何阅读一篇营养研究", subtitle: "从摘要到局限性，十分钟建立基本判断力",
    summary: "读营养研究不必先看结论。先问研究问题、设计、对象、暴露与结局，再看结果大小和局限，才能避免被标题带节奏。",
    category: "营养研究", tags: ["研究解读", "循证", "方法"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-05", readingMinutes: 12, illustration: "evidence",
    keyPoints: [
      "先识别研究设计，再判断它能回答什么问题。",
      "关注绝对风险与效应量，而不只是相对风险百分比。",
      "单篇研究不等于科学共识，系统综述和指南更值得参考。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "营养新闻常把“某食物降低 XX% 风险”写成标题。读者如果不了解研究设计，很容易把相关性当成因果，把动物实验当成人体结论，把单篇研究当成共识。",
          "研究方法知识不是学者的专利。掌握五个基本问题，就能过滤掉大部分夸大宣传。",
        ],
      },
      {
        id: "science", heading: "阅读清单",
     
        steps: [
          "研究问题：作者想回答什么？是病因、预测还是干预效果？",
          "设计：随机对照试验、队列研究、病例对照还是横断面调查？",
          "对象：谁被纳入？样本量多大？随访多久？",
          "暴露与结局：如何测量饮食？结局如何定义？",
          "结果：效应量多大？置信区间如何？绝对风险变化多少？",
          "局限：作者承认了哪些问题？是否有利益冲突声明？",
        ],
        table: {
          head: ["设计", "擅长回答", "不擅长回答"],
          rows: [
            ["RCT", "干预是否导致结局变化", "长期罕见结局、真实世界依从性"],
            ["队列研究", "暴露与后续风险的关联", "排除残余混杂"],
            ["横断面", "某一时点的分布与关联", "时间先后与因果"],
            ["系统综述", "汇总现有证据", "原始研究质量以外的新问题"],
          ],
        },
      },
      {
        id: "practice", heading: "实战例子",
        paragraphs: [
          "看到“每天一杯果汁降低心脏病风险 20%”的新闻：先查原始论文。若是横断面调查，只能说明喝果汁的人在某些指标上不同；不能证明果汁带来保护。若是队列研究，仍需考虑健康使用者偏倚。若是随机试验，还要看干预内容是否只是果汁，还是整体饮食同步改善。",
          "再问绝对风险：如果事件率从 2% 降到 1.6%，相对下降 20%，绝对下降只有 0.4 个百分点。两种表述给人的印象完全不同。",
        ],
        callout: { type: "tip", text: "快速筛选法：先看研究设计与样本量，再看结论是否与既有系统综述一致。不一致时，优先怀疑单篇研究的偶然性与偏倚。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“发表在知名期刊就一定可靠”：期刊不能替代方法学评价。",
          "“统计显著就是效果很大”：p 值不反映效应大小。",
          "“动物实验证明人类有效”：跨物种外推需谨慎。",
        ],
      },
    ],
    references: [pubmed, { title: "Cochrane Library", publisher: "Cochrane", url: "https://www.cochrane.org/" }],
    related: [{ label: "随机对照试验", href: "/articles/rct-basics" }, { label: "队列研究", href: "/articles/cohort-studies" }, { label: "系统综述", href: "/articles/systematic-review" }, { label: "研究解读栏目", href: "/nutrition-research" }],
  }),
  buildArticle({
    slug: "rct-basics", title: "随机对照试验（RCT）：为什么它是干预证据的黄金标准", subtitle: "随机化、对照、盲法与真实局限",
    summary: "RCT 通过随机分配减少混杂，是检验干预效果的重要设计。但饮食 RCT 难以盲法、依从性会衰减，也不能回答所有问题。",
    category: "营养研究", tags: ["RCT", "研究设计", "因果"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-06", readingMinutes: 9, illustration: "evidence",
    keyPoints: [
      "随机化的目的不是让两组完全一样，而是让已知和未知混杂因素平均分布。",
      "对照、盲法和预注册能降低偏倚。",
      "饮食干预很难做到双盲，依从性是解释结果的关键。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "在营养领域，观察性研究经常给出相互矛盾的结论。RCT 通过主动分配干预，能更有力地检验“改变饮食是否导致结局变化”。",
          "但 RCT 不等于绝对真理。它回答的是特定人群、特定干预和特定随访期的问题。",
        ],
      },
      {
        id: "science", heading: "核心要素",
     
        bullets: [
          "随机分配：减少选择偏倚与混杂。",
          "对照组：提供反事实基线，区分干预效应与时间趋势。",
          "盲法：减少参与者与研究者期望效应；饮食研究常只能对结局评估者盲法。",
          "预注册：防止事后挑选有利结局。",
          "ITT 分析：按随机分组分析，保留真实世界依从性信息。",
        ],
      },
      {
        id: "practice", heading: "例子与边界",
        paragraphs: [
          "PREDIMED 与 DASH 是饮食 RCT 的代表，但前者随机化程序曾受到重新分析，后者是短期喂养试验。可见“RCT”标签本身不是质量印章，需要看执行细节。",
          "对于“吃某食物是否致癌”这类需要几十年暴露的问题，RCT 往往不可行，此时高质量队列研究与机制证据更现实。",
        ],
        callout: { type: "caution", text: "RCT 显示平均效应，不能保证每个人都会得到相同结果；也不应被解读为个体化治疗方案。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“RCT 一定能证明因果”：内部有效性高，但外部有效性有限。",
          "“没有 RCT 的建议都不值得听”：公共卫生与长期暴露问题常依赖多源证据。",
        ],
      },
    ],
    references: [pubmed, { title: "CONSORT 声明", publisher: "CONSORT Group", url: "https://www.consort-statement.org/" }],
    related: [{ label: "PREDIMED 解读", href: "/nutrition-research/predimed" }, { label: "DASH 试验解读", href: "/nutrition-research/dash-trial" }, { label: "证据等级", href: "/articles/evidence-hierarchy" }],
  }),
  buildArticle({
    slug: "cohort-studies", title: "队列研究：追踪数年才能看到的饮食关联", subtitle: "为什么“吃红肉的人风险更高”不能直接推出因果",
    summary: "前瞻性队列研究通过长期随访观察暴露与结局的关联，是营养流行病学的主力设计，但残余混杂和测量误差始终存在。",
    category: "营养研究", tags: ["队列研究", "观察研究", "混杂"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-07", readingMinutes: 9, illustration: "evidence",
    keyPoints: [
      "队列研究从暴露开始、向未来追踪结局，时间顺序比横断面更清楚。",
      "饮食评估误差和残余混杂是最常见的两大限制。",
      "一致性、剂量反应与机制证据能增强关联的可信度。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "许多营养与慢性病问题无法随机分配几十年饮食。队列研究因此成为理解长期饮食模式与疾病风险的关键工具。",
          "但它只能观察“同时发生了什么”，不能像 RCT 那样控制所有影响因素。",
        ],
      },
      {
        id: "science", heading: "关键概念",
     
        bullets: [
          "基线饮食评估：食物频率问卷、24 小时回顾或记录。",
          "随访：通过问卷、医疗记录或登记系统确认结局。",
          "混杂控制：统计模型调整年龄、性别、吸烟、运动、总能量等。",
          "残余混杂：未被测量或测量不准确的变量仍可能解释部分关联。",
        ],
      },
      {
        id: "practice", heading: "如何判断一篇队列研究",
     
        steps: [
          "看随访时间与失访比例。",
          "看饮食评估方法是否在随访中重复测量。",
          "看效应量大小与剂量反应关系。",
          "看作者是否讨论残余混杂与反向因果。",
        ],
        callout: { type: "tip", text: "反向因果例子：原本健康的人更可能开始运动或改善饮食。若研究未充分排除基线患病者，关联方向可能被扭曲。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“调整了混杂因素就等于排除因果倒置”：不能。",
          "“样本量越大越可信”：大样本也会放大系统误差。",
        ],
      },
    ],
    references: [pubmed, { title: "蓝色地带书评：观察性研究的边界", publisher: "Nutri Life", url: "/books/blue-zones" }],
    related: [{ label: "相关性不等于因果", href: "/articles/correlation-causation" }, { label: "混杂因素", href: "/articles/confounding" }, { label: "研究解读", href: "/nutrition-research" }],
  }),
  buildArticle({
    slug: "systematic-review", title: "系统综述与 Meta 分析：汇总证据不等于简单平均", subtitle: "为什么两篇 Meta 分析可能得出不同结论",
    summary: "系统综述按预设方法检索和筛选研究，Meta 分析进一步用统计方法合并效应量。质量取决于纳入研究、方法透明度与异质性处理。",
    category: "营养研究", tags: ["系统综述", "Meta", "证据"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-08", readingMinutes: 10, illustration: "evidence",
    keyPoints: [
      "系统综述的核心是预先设定的检索与纳入标准。",
      "Meta 分析结果的可靠性取决于原始研究质量，“进去的是垃圾，出来的也是垃圾”。",
      "异质性高时，合并单一平均值可能没有意义。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "单篇研究容易受偶然性和设计差异影响。系统综述通过全面检索和严格筛选，提供更高层级的证据汇总；它是指南制定的重要基础。",
          "但“综述”二字不是质量保证。非系统性的叙述性综述可能只引用支持作者观点的研究。",
        ],
      },
      {
        id: "science", heading: "关键步骤",
     
        steps: [
          "注册方案（如 PROSPERO）并明确研究问题。",
          "多数据库检索，包含灰色文献与不同语言。",
          "双人独立筛选与数据提取，评估偏倚风险。",
          "判断是否适合定量合并，处理异质性与发表偏倚。",
          "用 GRADE 等工具评价证据确定性。",
        ],
      },
      {
        id: "practice", heading: "如何快速评价",
        paragraphs: [
          "看检索时间是否足够新、是否包含 PubMed/Embase/Cochrane、是否说明纳入排除标准。再看纳入研究的设计与样本量、异质性指标 I²，以及是否讨论发表偏倚。",
          "两篇 Meta 分析结论不同，常源于纳入研究不同、暴露定义不同或统计模型不同，而不是“一篇对一篇错”。",
        ],
        callout: { type: "caution", text: "合并观察性研究时，混杂与测量误差不会被统计合并消除。证据等级仍需谨慎评价。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“Meta 分析一定是最高证据”：取决于原始研究与合并方法。",
          "“统计显著就有实际意义”：要看绝对效应和临床相关性。",
        ],
      },
    ],
    references: [pubmed, { title: "Cochrane Handbook", publisher: "Cochrane", url: "https://training.cochrane.org/handbook" }],
    related: [{ label: "证据等级", href: "/articles/evidence-hierarchy" }, { label: "含糖饮料 Meta 分析", href: "/nutrition-research/ssb-meta" }, { label: "如何阅读研究", href: "/articles/how-to-read-research" }],
  }),
  buildArticle({
    slug: "confounding", title: "混杂因素：营养研究中最难缠的“第三者”", subtitle: "为什么运动、收入与吸烟会影响食物研究结论",
    summary: "混杂因素同时与暴露和结局相关，会造成虚假关联或掩盖真实关联。理解它，是读懂观察性研究的关键。",
    category: "营养研究", tags: ["混杂", "研究方法", "观察研究"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-09", readingMinutes: 8, illustration: "evidence",
    keyPoints: [
      "混杂不是随机误差，而是变量之间的真实关联造成的偏倚。",
      "统计调整只能控制被测量且测量准确的混杂。",
      "随机化是减少混杂最有效的设计手段。",
    ],
    sections: [
      {
        id: "why", heading: "一个例子",
        paragraphs: [
          "假设研究发现“每天吃沙拉的人心血管疾病更少”。这不一定说明沙拉本身带来保护，因为吃沙拉的人可能同时更爱运动、吸烟率更低、收入更高、医疗可及性更好。这些因素就是潜在混杂。",
          "研究者会尝试统计调整，但若没有准确测量“运动量”或“健康意识”，残余混杂仍可能存在。",
        ],
      },
      {
        id: "science", heading: "如何识别",
     
        bullets: [
          "问：哪些因素既影响饮食选择，又影响研究结局？",
          "常见混杂：年龄、性别、总能量、体重、吸烟、饮酒、运动、社会经济状态、合并疾病。",
          "分层分析与多变量模型是常用控制方法。",
          "倾向评分与工具变量是更复杂的方法，各有假设。",
        ],
      },
      {
        id: "practice", heading: "读者如何判断",
     
        steps: [
          "看研究调整了哪些变量，是否包括总能量摄入。",
          "看关联强度：很弱的关联更容易被残余混杂解释。",
          "看是否存在剂量反应关系。",
          "与 RCT 和系统综述结论交叉核对。",
        ],
      },
    ],
    references: [pubmed, { title: "中国研究书评：观察与推断", publisher: "Nutri Life", url: "/books/china-study" }],
    related: [{ label: "相关性不等于因果", href: "/articles/correlation-causation" }, { label: "队列研究", href: "/articles/cohort-studies" }, { label: "如何识别夸大营养新闻", href: "/articles/nutrition-news" }],
  }),
  buildArticle({
    slug: "correlation-causation", title: "相关性不等于因果：营养科普里最常见的逻辑陷阱", subtitle: "三个判断步骤，拆穿“吃 X 防 Y”式标题",
    summary: "两件事一起出现，不代表一个导致另一个。因果判断需要时间顺序、排除替代解释与机制支持。",
    category: "营养研究", tags: ["因果", "研究解读", "逻辑"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-10", readingMinutes: 7, illustration: "evidence",
    keyPoints: [
      "相关只说明共同变化，因果还需要时间顺序与排除混杂。",
      "反向因果在营养研究中很常见：生病后改变饮食。",
      "“营养成分表相关”不等于“吃该食物能预防疾病”。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "“喝红酒的人更长寿”“吃早餐的孩子成绩更好”这类标题，都建立在相关之上。读者很容易把它翻译成因果，从而做出不必要甚至有害的改变。",
          "营养建议需要区分：这是人群统计关联，还是干预试验证实的因果效应？",
        ],
      },
      {
        id: "science", heading: "三个判断步骤",
     
      steps: [
          "时间顺序：暴露是否发生在结局之前？横断面研究通常无法判断。",
          "替代解释：是否存在混杂因素或反向因果？",
          "机制与一致性：是否有生物学合理性？其他研究是否重复观察到？",
        ],
      },
      {
        id: "practice", heading: "实例拆解",
        paragraphs: [
          "“冰淇淋销量与溺水人数正相关”：两者都受夏季高温影响。这是典型的共同原因造成的虚假相关。",
          "“体检发现低维生素 D 的人更虚弱”：可能是虚弱导致户外活动减少、日照不足，而非低维生素 D 单独导致虚弱。",
        ],
        callout: { type: "tip", text: "看到“降低 XX% 风险”，先问：这是相对风险还是绝对风险？研究对象是谁？研究设计能否支持因果？" },
      },
    ],
    references: [pubmed, { title: "Cochrane – Evidence-based medicine", publisher: "Cochrane", url: "https://www.cochrane.org/" }],
    related: [{ label: "混杂因素", href: "/articles/confounding" }, { label: "队列研究", href: "/articles/cohort-studies" }, { label: "营养新闻辨别", href: "/articles/nutrition-news" }],
  }),
  buildArticle({
    slug: "evidence-hierarchy", title: "营养证据等级：金字塔怎么用才不误导", subtitle: "从个案报告到系统综述，证据强弱取决于问题",
    summary: "证据金字塔提供通用参考，但不能机械套用。研究设计是否适合回答具体问题，比它在金字塔上的位置更重要。",
    category: "营养研究", tags: ["证据等级", "GRADE", "循证"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-11", readingMinutes: 8, illustration: "evidence",
    keyPoints: [
      "系统综述和 RCT 通常位于较高层级，但质量差异很大。",
      "罕见副作用、长期暴露和真实世界可行性，有时需要观察性研究补充。",
      "GRADE 同时考虑偏倚、不一致性、间接性、不精确性与发表偏倚。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "“证据等级”是公众理解科学建议的实用工具，但常被滥用为“某类研究永远高于另一类”。事实上，一个设计糟糕的 RCT 可能不如一个大型一致的队列研究有用。",
          "正确问法是：对于这个具体问题，哪种设计最能减少偏倚？",
        ],
      },
      {
        id: "science", heading: "常见层级",
     
        bullets: [
          "系统综述 / Meta 分析：汇总多项研究，但受原始质量制约。",
          "随机对照试验：适合检验干预的因果效应。",
          "队列 / 病例对照：适合长期暴露与罕见结局。",
          "横断面研究：适合描述患病率与关联。",
          "个案报告 / 专家意见：适合提出假设，不能证明效果。",
        ],
      },
      {
        id: "practice", heading: "怎么用",
     
        steps: [
          "先确定问题类型：干预效果、风险关联还是描述现状。",
          "选择适合的设计，再看执行质量。",
          "用 GRADE 思维评估证据确定性与推荐强度。",
          "把证据与个体价值、可行性和资源一并考虑。",
        ],
        callout: { type: "caution", text: "高等级证据给出的是人群平均结论，不能直接替代个体医学判断。" },
      },
    ],
    references: [{ title: "GRADE 工作组", publisher: "GRADE", url: "https://www.gradeworkinggroup.org/" }, pubmed],
    related: [{ label: "系统综述", href: "/articles/systematic-review" }, { label: "RCT", href: "/articles/rct-basics" }, { label: "证据等级插画", href: "/illustrations" }],
  }),
  buildArticle({
    slug: "nutrition-news", title: "如何识别夸大的营养新闻", subtitle: "七个红旗信号，帮你过滤“震惊体”健康标题",
    summary: "“超级食物”“排毒”“治愈”等词频繁出现在营养营销里。学会识别语言与设计上的红旗信号，可以节省大量时间。",
    category: "营养研究", tags: ["媒体素养", "营销", "研究解读"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-12", readingMinutes: 8, illustration: "evidence",
    keyPoints: [
      "“彻底改变一生”“医生不想让你知道”是典型营销话术。",
      "单篇动物实验、小样本研究常被包装成人体结论。",
      "查原始研究与权威指南，比转发标题更可靠。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "营养信息传播速度快、纠正速度慢。一个“某食物致癌”的标题可能引发长期恐慌，而后续更严谨的综述往往无人关注。",
          "你不需要成为研究员，只需掌握几个稳定的检查点。",
        ],
      },
      {
        id: "science", heading: "七个红旗信号",
     
        bullets: [
          "使用“治愈、根治、逆转疾病”等医疗承诺。",
          "把动物实验或细胞实验直接写成人体结论。",
          "只给相对风险，不给绝对风险。",
          "强调“科学家不敢说的秘密”等阴谋论框架。",
          "建议极端限制或大量单一食物。",
          "引用无作者、无日期、无出处的“研究显示”。",
          "同时推销补充剂、课程或检测产品。",
        ],
      },
      {
        id: "practice", heading: "行动步骤",
     
        steps: [
          "复制研究标题到 PubMed 或期刊官网核查。",
          "看研究设计与样本量，而不是新闻稿措辞。",
          "查权威机构是否有相同建议。",
          "若无原始来源，默认把它当作营销内容。",
        ],
      },
    ],
    references: [pubmed, { title: "WCRF – 饮食与癌症证据", publisher: "WCRF", url: "https://www.wcrf.org/dietandcancer/" }],
    related: [{ label: "如何阅读研究", href: "/articles/how-to-read-research" }, { label: "相关性不等于因果", href: "/articles/correlation-causation" }, { label: "内容编辑原则", href: "/editorial-policy" }],
  }),
  buildArticle({
    slug: "dri-explained", title: "EAR、RNI、AI、UL：膳食参考摄入量到底怎么读", subtitle: "推荐量不是“越多越好”的目标值",
    summary: "膳食营养素参考摄入量是一组指标，用于评估与计划人群摄入。理解每个缩写的含义，能避免把 UL 当成目标、把 RNI 当成处方。",
    category: "营养科学", tags: ["DRIs", "推荐摄入量", "指南"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-13", readingMinutes: 9, illustration: "minerals",
    keyPoints: [
      "EAR 是满足约 50% 健康个体的需要量；RNI/RDA 覆盖约 97%–98%。",
      "AI 用于证据不足时估计摄入水平；UL 是安全上限，不是建议值。",
      "不同国家机构数值可能不同，先确认适用人群与版本。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "“每天应该吃多少维生素 C？”看似简单，答案取决于年龄、性别、生理状态与所采用的标准。网络常常只给一个数字，却不说明出处。",
          "DRIs 是群体工具。用它评估自己饮食时，应看作大致范围而非精确靶点。",
        ],
      },
      {
        id: "science", heading: "四个核心指标",
     
        table: {
          head: ["指标", "含义", "常见误用"],
          rows: [
            ["EAR", "平均需要量，满足约一半个体", "当作个人目标"],
            ["RNI / RDA", "满足绝大多数健康个体的推荐摄入量", "当成越高越好的下限"],
            ["AI", "证据不足时的适宜摄入量", "当成精确需要量"],
            ["UL", "可耐受最高摄入量", "当成建议摄入量"],
          ],
        },
      },
      {
        id: "practice", heading: "如何使用",
     
        steps: [
          "先确认标准来源：中国 2023 版 DRIs、美国 IOM、EFSA 等。",
          "找到对应年龄、性别与生理状态的表格。",
          "评估日常饮食是否长期低于 RNI 或超过 UL。",
          "特殊人群与疾病状态请交给专业人士判断。",
        ],
        callout: { type: "caution", text: "以上指标针对健康人群。慢性疾病、吸收障碍与药物相互作用会改变实际需要。" },
      },
    ],
    references: [cnsoc, { title: "NIH ODS – Dietary Reference Intakes", publisher: "NIH", url: "https://ods.od.nih.gov/HealthInformation/Dietary_Reference_Intakes.aspx" }],
    related: [{ label: "IOM 维生素 D 报告解读", href: "/nutrition-research/iom-vitamin-d" }, { label: "维生素", href: "/nutrients/vitamins" }, { label: "矿物质", href: "/nutrients/minerals" }],
  }),
  buildArticle({
    slug: "fat-vs-water-soluble-vitamins", title: "脂溶性与水溶性维生素：为什么过量风险不一样", subtitle: "储存、排泄与补充剂使用的基本逻辑",
    summary: "维生素按溶解性分为两组。脂溶性可在体内储存，长期过量风险更值得警惕；水溶性相对不易蓄积，但大剂量同样可能有害。",
    category: "营养素", tags: ["维生素", "补充剂", "安全"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-14", readingMinutes: 8, illustration: "vitamins",
    keyPoints: [
      "脂溶性：A、D、E、K，需膳食脂肪帮助吸收。",
      "水溶性：B 族与 C，体内储存有限，需要较规律摄入。",
      "“水溶性所以多吃没事”是错误的安全感。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "补充剂广告常强调“水溶性更安全”。但安全性取决于剂量与个体情况，而不是溶解性一个维度。",
          "理解储存与排泄差异，有助于判断哪些营养素更需要关注长期过量。",
        ],
      },
      {
        id: "science", heading: "对比",
     
        table: {
          head: ["特征", "脂溶性", "水溶性"],
          rows: [
            ["成员", "A、D、E、K", "B 族、C"],
            ["吸收", "随脂肪与胆汁", "多为特异转运"],
            ["储存", "脂肪组织与肝脏", "有限（B12 例外可储存数年）"],
            ["缺乏速度", "相对较慢", "较快（B12 除外）"],
            ["过量风险", "更值得关注", "大剂量仍可能有害"],
          ],
        },
      },
      {
        id: "practice", heading: "实践建议",
     
        steps: [
          "优先从食物获取，饮食多样化是基础。",
          "补充剂只在明确需要时使用，查看剂量与 UL。",
          "孕妇不要自行大量补充维生素 A。",
          "服用抗凝药者关注维生素 K 摄入稳定性。",
        ],
      },
    ],
    references: [{ title: "NIH ODS – Vitamin A", publisher: "NIH", url: "https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/" }, cnsoc],
    related: [{ label: "维生素", href: "/nutrients/vitamins" }, { label: "维生素分类插画", href: "/illustrations" }, { label: "骨骼健康", href: "/nutrition-health/bone" }],
  }),
  buildArticle({
    slug: "electrolytes", title: "电解质到底是什么：钠、钾、氯、镁怎么工作", subtitle: "从出汗补水到运动饮料的理性判断",
    summary: "电解质是带电荷的矿物质，参与体液平衡、神经传导与肌肉功能。多数人通过正常饮食即可维持平衡。",
    category: "营养科学", tags: ["电解质", "水", "运动"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-15", readingMinutes: 8, illustration: "fiber",
    keyPoints: [
      "主要电解质包括钠、钾、氯、钙、镁、磷酸盐。",
      "普通日常出汗通常不需要额外补盐。",
      "长时间高强度运动才可能需要含电解质饮品，且需个体化。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "运动饮料和电解质粉广告让人以为每次出汗都需要补充。实际上，人体有完善的肾脏与激素调节系统，普通饮食足以覆盖日常损失。",
          "真正需要关注电解质的场景包括长时间耐力运动、高温大量出汗、腹泻呕吐、某些药物使用与肾脏疾病。",
        ],
      },
      {
        id: "science", heading: "各司其职",
     
      bullets: [
          "钠：主要细胞外阳离子，参与体液容量与神经冲动。",
          "钾：主要细胞内阳离子，与钠泵共同维持膜电位。",
          "氯：与钠伴随，参与胃酸形成。",
          "镁：多种酶的辅因子，参与肌肉放松与能量代谢。",
        ],
      },
      {
        id: "practice", heading: "实际建议",
     
        steps: [
          "日常以白水为主要饮品，蔬果和正常饮食提供钾。",
          "运动少于 1 小时且出汗不多时，通常无需电解质饮料。",
          "长时间高温运动可考虑含钠饮品，按口渴和汗量调整。",
          "肾病、心衰或服用利尿剂者遵循医嘱。",
        ],
        callout: { type: "caution", text: "短时间大量饮用纯水可能导致低钠血症，极端耐力运动场景尤其需要注意。" },
      },
    ],
    references: [cnsoc, { title: "NIH ODS – Potassium", publisher: "NIH", url: "https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/" }],
    related: [{ label: "水", href: "/nutrients/water" }, { label: "饮水记录", href: "/tools/water-tracker" }, { label: "运动恢复", href: "/nutrition-health/exercise" }],
  }),
  buildArticle({
    slug: "energy-density", title: "能量密度：同样的饱腹感，为什么热量差这么多", subtitle: "理解食物体积、水分、纤维与脂肪的关系",
    summary: "能量密度是每单位重量或体积食物提供的能量。低能量密度食物有助于在不增加能量的前提下获得更大食物体积。",
    category: "健康饮食", tags: ["能量密度", "饱腹感", "体重管理"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-16", readingMinutes: 8, illustration: "plate",
    keyPoints: [
      "水分和纤维高、脂肪低的食物通常能量密度较低。",
      "坚果和油脂能量密度高，但营养密度也高，不等于“不好”。",
      "减脂饮食可以用低能量密度食物增加餐盘体积。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "同样 200 kcal，可以是一大碗蔬菜汤配鸡蛋，也可以是两三块饼干。前者体积大、需要咀嚼、水分多，饱腹感通常更强。",
          "能量密度不是道德标签。橄榄油和坚果能量密度高，却富含不饱和脂肪与微量营养素；关键是用量与场景。",
        ],
      },
      {
        id: "science", heading: "影响因素",
     
        bullets: [
          "脂肪：9 kcal/g，是最能量密集的宏量营养素。",
          "水分：增加重量与体积，不提供能量。",
          "膳食纤维：提供体积与饱腹感，部分被发酵。",
          "加工方式：油炸、浓缩、脱水通常提高能量密度。",
        ],
        table: {
          head: ["食物（约 100 g）", "能量", "特征"],
          rows: [
            ["黄瓜", "约 15 kcal", "水分极高"],
            ["熟米饭", "约 116 kcal", "主食基准"],
            ["杏仁", "约 579 kcal", "脂肪高、营养密集"],
            ["橄榄油", "约 884 kcal", "纯脂肪"],
          ],
        },
      },
      {
        id: "practice", heading: "怎么用",
     
        steps: [
          "每餐先安排大体积蔬菜或清汤。",
          "用水果替代甜点，用坚果替代饼干但控制小把。",
          "煲汤时少油，保留蔬菜和蛋白质本身。",
          "高能量密度食材用于增加风味，不用于填满餐盘。",
        ],
      },
    ],
    references: [harvardRef(), cnsoc],
    related: [{ label: "体重管理", href: "/healthy-eating#weight" }, { label: "杏仁", href: "/foods/almonds" }, { label: "能量平衡", href: "/articles/energy-balance" }],
  }),
  buildArticle({
    slug: "nutrition-history", title: "营养学发展简史：从缺乏病到慢性病预防", subtitle: "为什么营养建议会变化，而不是“专家总在打架”",
    summary: "营养学从研究缺乏病起步，逐步转向慢性病预防与食物模式研究。研究问题和证据标准的改变，自然会更新建议。",
    category: "营养科学", tags: ["科学史", "指南", "证据"], author: "Nutri Life 编辑部",
    updatedAt: "2026-11-17", readingMinutes: 9, illustration: "map",
    keyPoints: [
      "早期营养学关注坏血病、佝偻病等缺乏病。",
      "20 世纪后期转向脂肪、胆固醇与慢性病风险。",
      "21 世纪更强调食物模式、加工度与系统证据。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "看到“过去的指南说鸡蛋不好，现在又说可以每天吃”，有人会认为营养学不可信。实际上，这往往反映了研究问题、方法和证据基础的进步。",
          "了解历史，有助于用发展的眼光看待今天的分歧。",
        ],
      },
      {
        id: "science", heading: "三个阶段",
     
      steps: [
          "缺乏病阶段：识别维生素与矿物质，解释坏血病、脚气病、佝偻病。",
          "慢病风险阶段：研究脂肪、盐、糖与心血管病、癌症、糖尿病的关联。",
          "食物模式阶段：关注饮食整体、超加工食品、菌群与可持续性，强调系统综述。",
        ],
      },
      {
        id: "practice", heading: "给读者的启示",
     
      bullets: [
        "指南更新通常意味着证据积累，不等于过去完全错误。",
        "警惕把历史著作直接当作现行建议（参见 Weston A. Price 书评）。",
        "优先看当前权威机构与系统综述，而不是孤立的经典文本。",
      ],
      },
    ],
    references: [who, cnsoc, { title: "Nutrition and Physical Degeneration 书评", publisher: "Nutri Life", url: "/books/nutrition-physical-degeneration" }],
    related: [{ label: "营养科学", href: "/nutrition-science" }, { label: "证据等级", href: "/articles/evidence-hierarchy" }, { label: "营养研究", href: "/nutrition-research" }],
  }),
];

function harvardRef() {
  return { title: "Harvard Nutrition Source", publisher: "Harvard University", url: "https://www.hsph.harvard.edu/nutritionsource/" };
}

export default articlesB;
