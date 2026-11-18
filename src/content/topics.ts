import type { HealthTopic } from "@/types";

type TopicInput = Omit<HealthTopic, "kind" | "categoryName">;

function buildTopic(input: TopicInput): HealthTopic {
  return {
    ...input,
    kind: "topic",
    sections: [
      {
        id: "conclusion",
        heading: "先说结论",
        paragraphs: input.keyPoints.map((p) => `**${p}**`),
        callout: { type: "caution", text: input.evidenceNote },
      },
      ...input.sections,
      {
        id: "action",
        heading: "可执行清单",
        steps: [
          "把一条建议落实到本周的某一天，观察执行难度。",
          "用饮食记录工具复盘实际摄入，而不是凭印象判断。",
          "已确诊疾病或正在用药者，先与医生确认饮食调整方向。",
        ],
      },
      {
        id: "refs",
        heading: "参考资料",
        bullets: input.references.map((r) => `${r.title}（${r.publisher ?? "权威资料"}）：${r.url}`),
      },
    ],
  };
}

const aha = { title: "American Heart Association – Healthy Eating", publisher: "AHA", url: "https://www.heart.org/en/healthy-living/healthy-eating" };
const harvard = { title: "Harvard Nutrition Source", publisher: "Harvard University", url: "https://www.hsph.harvard.edu/nutritionsource/" };
const cnsoc = { title: "中国营养学会", publisher: "中国营养学会", url: "https://www.cnsoc.org/" };

export const topics: HealthTopic[] = [
  buildTopic({
    slug: "cardiovascular", title: "营养与心血管健康", subtitle: "模式比单一食物更接近证据的核心",
    summary: "心血管健康与整体饮食模式、血压、血脂、体重和吸烟运动等多因素相关。减少饱和脂肪与反式脂肪、增加蔬果全谷与优质脂肪，是证据较稳定的方向。",
    category: "营养与健康", tags: ["心血管", "血压", "脂肪"], updatedAt: "2026-10-02", readingMinutes: 10, illustration: "plate",
    keyPoints: [
      "用不饱和脂肪替代饱和脂肪，比单纯降低总脂肪更有依据。",
      "减少钠摄入对血压管理有明确意义。",
      "饮食不能替代降压药、他汀或医生制定的治疗方案。",
    ],
    evidenceNote: "相关性研究只能提示方向；本专题不提供疾病治疗承诺。",
    sections: [
      { id: "evidence", heading: "证据在说什么", paragraphs: ["PREDIMED 等研究支持以橄榄油、坚果、蔬果、全谷和鱼类为核心的地中海式饮食模式；DASH 与 DASH-Sodium 显示增加蔬果低脂奶并减少钠可降低血压。", "这些研究的共同点是改变整体饮食，而不是单独补充某一种“护心食物”。"] },
      { id: "practice", heading: "日常怎么做", steps: ["烹调油换成菜籽油或橄榄油，并控制在 25–30 g/日。", "每周吃 2 次鱼，减少加工肉和肥肉。", "用限盐勺与标签比较，把钠摄入降下来。", "每天 300–500 g 蔬菜和适量水果。"] },
      { id: "boundaries", heading: "边界与提醒", paragraphs: ["已有冠心病、高血压或高脂血症的人需遵医嘱用药，饮食是配合而不是替代。", "鱼油补充剂不能自行替代处方治疗；服用抗凝药者尤其需要医生评估。"] },
    ],
    references: [aha, { title: "PREDIMED 研究解读", publisher: "Nutri Life", url: "/nutrition-research/predimed" }, { title: "DASH 试验解读", publisher: "Nutri Life", url: "/nutrition-research/dash-trial" }],
    related: [{ label: "脂肪", href: "/nutrients/fats" }, { label: "钠与盐", href: "/articles/sodium-salt" }, { label: "三文鱼", href: "/foods/salmon" }],
  }),
  buildTopic({
    slug: "blood-sugar", title: "营养与血糖代谢", subtitle: "关注食物结构与进餐方式，而非单一“降糖食物”",
    summary: "血糖管理涉及碳水总量与质量、膳食纤维、进餐顺序、运动和药物配合。任何食物都不能被描述为“降糖药”。",
    category: "营养与健康", tags: ["血糖", "糖尿病", "碳水"], updatedAt: "2026-10-04", readingMinutes: 10, illustration: "carbs",
    keyPoints: [
      "碳水总量、来源和搭配共同决定餐后血糖反应。",
      "膳食纤维与全谷物有助于改善整体代谢指标。",
      "糖尿病患者不得自行调整药物剂量。",
    ],
    evidenceNote: "本专题面向一般科普；具体血糖目标与用药由医生制定。",
    sections: [
      { id: "mechanism", heading: "为什么血糖会波动", paragraphs: ["进食后碳水被分解为葡萄糖进入血液，胰岛素帮助细胞摄取。胰岛素敏感性下降或分泌不足会导致血糖升高。", "食物的加工程度、纤维含量、脂肪与蛋白质搭配都会改变葡萄糖进入血液的速度。"] },
      { id: "practice", heading: "可操作策略", steps: ["主食一半换成全谷物杂豆，控制单餐份量。", "先吃蔬菜和蛋白质，再吃主食。", "用完整水果替代果汁和甜饮。", "餐后散步 10–15 分钟（结合身体情况）。"] },
      { id: "caution", heading: "常见误区", paragraphs: ["“无糖食品可以随便吃”：仍可能含淀粉与能量。", "“某种茶能替代降糖药”：不能。"] },
    ],
    references: [cnsoc, harvard, { title: "GI 专题文章", publisher: "Nutri Life", url: "/articles/glycemic-index" }],
    related: [{ label: "碳水化合物", href: "/nutrients/carbohydrates" }, { label: "血糖生成指数", href: "/articles/glycemic-index" }, { label: "杂粮饭", href: "/recipes/mixed-grain-rice" }],
  }),
  buildTopic({
    slug: "gut", title: "营养与肠道健康", subtitle: "纤维、多样性与生活方式的共同作用",
    summary: "肠道健康涉及膳食纤维、发酵食品、睡眠、运动和药物暴露。益生菌产品效果具有菌株特异性，不能替代整体饮食改善。",
    category: "营养与健康", tags: ["肠道", "菌群", "纤维"], updatedAt: "2026-10-06", readingMinutes: 9, illustration: "fiber",
    keyPoints: ["逐步增加植物性食物多样性是稳妥策略。", "纤维增加需配合饮水。", "不要根据商业菌群检测自行大幅改变饮食。"],
    evidenceNote: "菌群领域证据更新快，本专题只讨论相对稳健的方向。",
    sections: [
      { id: "mechanism", heading: "为什么纤维关键", paragraphs: ["可溶性纤维被菌群发酵产生短链脂肪酸，为结肠细胞提供能量；不可溶性纤维增加粪便体积。", "两者都需要，来源应覆盖全谷物、豆类、蔬菜、水果与坚果。"] },
      { id: "practice", heading: "实操建议", steps: ["每周记录吃到的植物性食物种类，目标逐步增加到 25–30 种。", "早餐加入燕麦或豆类，午餐增加两份蔬菜。", "发酵食品选低糖原味款。"] },
    ],
    references: [{ title: "NIH Human Microbiome Project", publisher: "NIH", url: "https://www.hmpdacc.org/" }, harvard],
    related: [{ label: "膳食纤维", href: "/articles/fiber-guide" }, { label: "肠道菌群文章", href: "/articles/gut-microbiome" }, { label: "酸奶", href: "/foods/yogurt" }],
  }),
  buildTopic({
    slug: "bone", title: "营养与骨骼健康", subtitle: "钙、维生素 D、蛋白质与运动的组合",
    summary: "骨骼健康取决于骨量峰值与随年龄的流失速度。钙和维生素 D 重要，但不是唯一因素；抗阻和负重运动同样关键。",
    category: "营养与健康", tags: ["骨骼", "钙", "维生素D"], updatedAt: "2026-10-08", readingMinutes: 9, illustration: "minerals",
    keyPoints: ["优先从奶类、豆制品和绿叶菜获得钙。", "维生素 D 需要结合日照、食物与个体情况评估。", "钙补充剂不是越多越好。"],
    evidenceNote: "骨密度与骨折风险需医学评估，营养建议不能替代骨质疏松治疗。",
    sections: [
      { id: "mechanism", heading: "关键营养素", paragraphs: ["钙是骨矿物质主要成分；维生素 D 促进钙吸收；蛋白质提供骨基质；镁与维生素 K 也参与骨代谢。", "IOM 报告以骨骼健康终点设定维生素 D 与钙的参考摄入量，UL 不是目标值。"] },
      { id: "practice", heading: "日常建议", steps: ["每天 300 ml 奶或等量奶制品。", "每周吃 2 次富脂鱼或关注维生素 D 状态。", "每周 2–3 次抗阻训练。", "避免吸烟与过量饮酒。"] },
    ],
    references: [{ title: "IOM – Dietary Reference Intakes for Calcium and Vitamin D", publisher: "National Academies Press", url: "https://www.nap.edu/catalog/13150/dietary-reference-intakes-for-vitamin-d-and-calcium" }, cnsoc],
    related: [{ label: "钙与矿物质", href: "/nutrients/minerals" }, { label: "豆腐", href: "/foods/tofu" }, { label: "IOM 报告解读", href: "/nutrition-research/iom-vitamin-d" }],
  }),
  buildTopic({
    slug: "brain", title: "营养与大脑健康", subtitle: "长期饮食模式与认知 aging 的关联",
    summary: "大脑健康受心血管状态、血糖、睡眠、运动和饮食整体质量影响。没有单一食物能预防认知下降。",
    category: "营养与健康", tags: ["大脑", "认知", "饮食模式"], updatedAt: "2026-10-10", readingMinutes: 9, illustration: "map",
    keyPoints: ["保护血管与代谢健康的饮食，通常也有利于大脑。", "Omega-3、B 族维生素与多酚是研究较多的方向。", "认知问题需要专业评估，不能靠补充剂解决。"],
    evidenceNote: "多数证据为观察性关联，不能把“相关”写成“预防痴呆”。",
    sections: [
      { id: "mechanism", heading: "为什么整体模式重要", paragraphs: ["大脑高度依赖稳定的能量与血流供应。高血压、糖尿病和肥胖与认知下降风险相关，因此有益心血管的饮食模式常被同时讨论。", "鱼类、坚果、绿叶菜、浆果与全谷提供多种与氧化应激和炎症相关的营养成分。"] },
      { id: "practice", heading: "实操建议", steps: ["每周吃鱼 2 次，其中富脂鱼 1–2 次。", "每天一把深色蔬菜和一份浆果。", "控制添加糖与精制碳水。", "保持规律运动与社交活动。"] },
    ],
    references: [harvard, { title: "Harvard Health – Brain health", publisher: "Harvard Medical School", url: "https://www.health.harvard.edu/brain-health" }],
    related: [{ label: "Omega-3 与 Omega-6", href: "/articles/omega3-omega6" }, { label: "心血管健康", href: "/nutrition-health/cardiovascular" }, { label: "蓝莓", href: "/foods/blueberry" }],
  }),
  buildTopic({
    slug: "immune", title: "营养与免疫系统", subtitle: "支持正常免疫功能，而不是“增强”到越强越好",
    summary: "免疫需要能量、蛋白质、锌、铁、维生素 A/D/C 等。均衡饮食支持正常功能；大剂量补充不会让免疫力无限提高。",
    category: "营养与健康", tags: ["免疫", "蛋白质", "维生素"], updatedAt: "2026-10-12", readingMinutes: 8, illustration: "sixNutrients",
    keyPoints: ["蛋白质不足会影响抗体与细胞免疫。", "微量营养素缺乏与过量都可能损害免疫。", "不能靠单一食物或补充剂“提高免疫力”。"],
    evidenceNote: "免疫相关疾病请遵循正规诊疗，营养是基础支持而非替代治疗。",
    sections: [
      { id: "mechanism", heading: "营养如何参与", paragraphs: ["抗体是蛋白质；维生素 A 维持上皮屏障；锌参与多种免疫细胞功能；维生素 D 具有免疫调节作用。", "这些成分需要协同作用，临床缺乏时才可能需要针对性补充。"] },
      { id: "practice", heading: "日常建议", steps: ["每餐安排优质蛋白来源。", "每天吃够蔬菜水果，优先深色蔬果。", "保证睡眠与运动，避免长期能量不足。"] },
    ],
    references: [{ title: "NIH ODS – Zinc", publisher: "NIH", url: "https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/" }, harvard],
    related: [{ label: "蛋白质", href: "/nutrients/protein" }, { label: "维生素", href: "/nutrients/vitamins" }, { label: "矿物质", href: "/nutrients/minerals" }],
  }),
  buildTopic({
    slug: "exercise", title: "营养与运动恢复", subtitle: "碳水、蛋白质、水和时机的实用框架",
    summary: "运动表现与恢复依赖充足能量、碳水储备、蛋白质分布与水合。普通健身者不必追求精确到克的补剂方案。",
    category: "营养与健康", tags: ["运动", "蛋白质", "水合"], updatedAt: "2026-10-14", readingMinutes: 9, illustration: "proteinSources",
    keyPoints: ["长时间或高强度运动需要关注碳水摄入。", "蛋白质分散到三餐比集中一餐更有利于肌肉合成。", "运动饮料只在特定场景下有必要。"],
    evidenceNote: "运动员与减重人群的需求差异大，个体化方案建议咨询运动营养师。",
    sections: [
      { id: "mechanism", heading: "三个支柱", paragraphs: ["碳水补充肌糖原；蛋白质提供肌肉修复原料并刺激合成；水与电解质维持体温和神经肌肉功能。", "没有“必须在运动后 30 分钟内补充”的绝对窗口，全天总量更重要。"] },
      { id: "practice", heading: "实操建议", steps: ["运动前 1–2 小时吃一份含碳水的轻食。", "运动后 2 小时内安排一餐含蛋白质与碳水的正常饮食。", "运动超过 1 小时或大量出汗时考虑含电解质饮品。"] },
    ],
    references: [{ title: "Academy of Nutrition and Dietetics – Sports Nutrition", publisher: "AND", url: "https://www.eatright.org/" }, harvard],
    related: [{ label: "水", href: "/nutrients/water" }, { label: "香蕉", href: "/foods/banana" }, { label: "电解质", href: "/articles/electrolytes" }],
  }),
  buildTopic({
    slug: "sleep", title: "营养与睡眠", subtitle: "晚餐、咖啡因与饮酒如何影响休息",
    summary: "睡眠受昼夜节律、压力和饮食共同影响。晚餐时间与构成、咖啡因摄入和酒精都会改变睡眠质量。",
    category: "营养与健康", tags: ["睡眠", "咖啡因", "晚餐"], updatedAt: "2026-10-16", readingMinutes: 7, illustration: "meals",
    keyPoints: ["睡前大量进食或饮酒可能降低睡眠质量。", "咖啡因半衰期长，下午摄入也可能影响夜间睡眠。", "褪黑素补充剂不是长期解决方案。"],
    evidenceNote: "长期失眠需要专业评估，不应只靠饮食或补充剂处理。",
    sections: [
      { id: "mechanism", heading: "为什么饮食会影响睡眠", paragraphs: ["晚餐过油过饱会延长胃排空；酒精可能帮助入睡但破坏后半夜睡眠结构；咖啡因阻断腺苷受体，半衰期通常数小时。", "能量摄入不足或饮食不规律也可能通过饥饿感影响入睡。"] },
      { id: "practice", heading: "可执行调整", steps: ["睡前 2–3 小时结束正餐，夜宵选择少量易消化食物。", "下午 2 点后减少咖啡和浓茶。", "用温水、阅读与固定作息代替睡前刷屏。"] },
    ],
    references: [harvard, { title: "CDC – Sleep", publisher: "CDC", url: "https://www.cdc.gov/sleep/index.html" }],
    related: [{ label: "黑咖啡", href: "/foods/coffee" }, { label: "晚餐安排", href: "/healthy-eating#dinner" }, { label: "水", href: "/nutrients/water" }],
  }),
  buildTopic({
    slug: "aging", title: "营养与健康老龄化", subtitle: "保肌肉、保骨骼、保食物多样性",
    summary: " aging 过程中食欲、咀嚼能力、肌肉合成效率与药物交互都会变化。营养策略应更重视蛋白质分布、钙维生素 D 与食物可及性。",
    category: "营养与健康", tags: ["老年人", "肌肉", "骨骼"], updatedAt: "2026-10-18", readingMinutes: 9, illustration: "meals",
    keyPoints: ["老年人更需要关注蛋白质质量与每餐分布。", "食欲下降时可采用少量多餐与营养密度高的食物。", "慢性病与多种用药需要专业营养评估。"],
    evidenceNote: "本专题不提供疾病治疗建议；体重明显下降应就医。",
    sections: [
      { id: "mechanism", heading: "关键变化", paragraphs: ["年龄增长伴随肌肉合成抵抗、骨量流失、口渴感下降与消化吸收变化。", "因此同样的饮食可能对年轻人足够，而对老年人不足。"] },
      { id: "practice", heading: "实操建议", steps: ["三餐各有蛋白质来源，每餐约 15–25 g。", "选择软烂易嚼的高营养密度食物。", "定期监测体重，非意图减重需就医。", "关注维生素 B12、D、钙与膳食纤维。"] },
    ],
    references: [cnsoc, harvard],
    related: [{ label: "骨骼健康", href: "/nutrition-health/bone" }, { label: "蛋白质", href: "/nutrients/protein" }, { label: "豆腐蔬菜汤", href: "/recipes/tofu-vegetable-soup" }],
  }),
];

export function getTopic(slug: string) {
  return topics.find((t) => t.slug === slug);
}
