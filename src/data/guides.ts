import type { Guide } from "@/types";

type GuideInput = Omit<Guide, "kind" | "sections" | "categoryName" | "keyPoints" | "related"> &
  Partial<Pick<Guide, "keyPoints" | "related">> & {
    paragraphs: string[];
    bullets?: string[];
    steps?: string[];
    caution?: string;
  };

function buildGuide(input: GuideInput): Guide {
  const { paragraphs, bullets, steps, caution, ...rest } = input;
  return {
    ...rest,
    kind: "guide",
    keyPoints: input.keyPoints ?? [input.summary],
    related: input.related ?? [],
    sections: [
      { id: "overview", heading: "要点说明", paragraphs, ...(bullets ? { bullets } : {}), ...(caution ? { callout: { type: "caution" as const, text: caution } } : {}) },
      ...(steps ? [{ id: "practice", heading: "怎么做", steps }] : []),
      {
        id: "refs",
        heading: "参考资料",
        bullets: input.references.map((r) => `${r.title}：${r.url}`),
      },
    ],
  };
}

const cnsoc = { title: "中国居民膳食指南（2022）", publisher: "中国营养学会", url: "https://www.cnsoc.org/" };
const harvard = { title: "Harvard Nutrition Source", publisher: "Harvard University", url: "https://www.hsph.harvard.edu/nutritionsource/" };

export const nutritionScienceGuides: Guide[] = [
  buildGuide({ slug: "what-is-nutrition", title: "什么是营养学", category: "营养科学", tags: ["基础"], summary: "研究食物成分与机体代谢、健康关系的科学。", updatedAt: "2026-09-02", readingMinutes: 5, paragraphs: ["营养学关注人体如何从食物获得能量与营养素，以及这些成分如何影响生长、代谢、免疫和疾病风险。它既包含生物化学与生理学，也包含流行病学与行为科学。"], bullets: ["基础营养：消化吸收、能量代谢、宏量与微量营养素。", "临床营养：疾病状态下的营养评估与干预。", "公共营养：人群膳食指南与政策。"], references: [cnsoc, harvard] }),
  buildGuide({ slug: "digestion-guide", title: "人体如何消化和吸收食物", category: "营养科学", tags: ["消化"], summary: "从口腔到小肠的分步拆解。", updatedAt: "2026-09-04", readingMinutes: 6, paragraphs: ["口腔咀嚼与唾液淀粉酶启动消化；胃酸与胃蛋白酶处理蛋白质；小肠在胰酶与胆汁协助下完成大部分消化与吸收；大肠回收水分并发酵纤维。"], steps: ["充分咀嚼，给后续消化减负。", "避免暴饮暴食，减少胃排空压力。", "逐步增加纤维，配合足量饮水。"], references: [cnsoc] }),
  buildGuide({ slug: "energy-guide", title: "能量与热量", category: "营养科学", tags: ["能量"], summary: " kcal、kJ 与三大产能营养素。", updatedAt: "2026-09-06", readingMinutes: 5, paragraphs: ["营养学常用 kcal（千卡）或 kJ（千焦），1 kcal ≈ 4.184 kJ。蛋白质与碳水每克约 4 kcal，脂肪约 9 kcal，酒精约 7 kcal。"], bullets: ["能量平衡决定长期体重趋势。", "食物标签通常同时标示 kJ 与 kcal。", "能量需求随年龄、体重、活动与生理状态变化。"], references: [cnsoc] }),
  buildGuide({ slug: "bmr-guide", title: "基础代谢与能量消耗", category: "营养科学", tags: ["代谢"], summary: "总消耗由四部分构成。", updatedAt: "2026-09-08", readingMinutes: 6, paragraphs: ["基础代谢占成年人总能量消耗的大部分，其余来自食物热效应、体力活动与适应性产热。肌肉量、年龄与激素状态影响基础代谢。"], bullets: ["Mifflin-St Jeor 等公式可粗略估算静息代谢。", "估算值不能替代个体化评估。", "减重后代谢适应是常见现象。"], references: [harvard] }),
  buildGuide({ slug: "macros-guide", title: "宏量营养素", category: "营养科学", tags: ["碳水", "蛋白质", "脂肪"], summary: "需要量以克计的三大营养素。", updatedAt: "2026-09-10", readingMinutes: 6, paragraphs: ["碳水化合物、蛋白质与脂肪每日需要量以克计，既提供能量，也承担结构与调节功能。三者比例存在可接受范围，没有唯一完美比例。"], references: [cnsoc, harvard] }),
  buildGuide({ slug: "micros-guide", title: "微量营养素", category: "营养科学", tags: ["维生素", "矿物质"], summary: "维生素与矿物质的作用特点。", updatedAt: "2026-09-12", readingMinutes: 6, paragraphs: ["维生素与矿物质需要量以毫克或微克计，不提供能量，但作为辅酶、结构成分和电解质参与关键过程。多样化饮食是覆盖需要的基础。"], references: [cnsoc] }),
  buildGuide({ slug: "interactions-guide", title: "营养素之间的相互作用", category: "营养科学", tags: ["吸收"], summary: "协同与拮抗的真实案例。", updatedAt: "2026-09-14", readingMinutes: 6, paragraphs: ["维生素 C 提高非血红素铁吸收；膳食纤维与植酸影响矿物质利用；维生素 D 促进钙吸收；高钙补充可能短期干扰铁吸收。"], steps: ["植物性高铁餐搭配富含维生素 C 的蔬果。", "茶咖啡与正餐错开 1–2 小时。", "不自行叠加高剂量补充剂。"], references: [harvard] }),
  buildGuide({ slug: "fiber-science", title: "膳食纤维", category: "营养科学", tags: ["纤维"], summary: "不可消化但重要的碳水化合物。", updatedAt: "2026-09-16", readingMinutes: 6, paragraphs: ["纤维分为可溶性与不可溶性，分别参与菌群发酵与肠道通过。成年人建议摄入约 25–30 g/日。"], references: [cnsoc] }),
  buildGuide({ slug: "water-guide", title: "水与电解质", category: "营养科学", tags: ["水"], summary: "体液平衡的基础。", updatedAt: "2026-09-18", readingMinutes: 5, paragraphs: ["水约占体重一半以上，参与所有代谢反应。温和气候轻体力活动的成年女性建议每日饮水 1500 ml，男性 1700 ml。"], references: [cnsoc] }),
  buildGuide({ slug: "microbiome-science", title: "肠道微生态", category: "营养科学", tags: ["菌群"], summary: "饮食与菌群的双向关系。", updatedAt: "2026-09-20", readingMinutes: 6, paragraphs: ["膳食纤维是菌群发酵的重要底物，短链脂肪酸与肠道健康相关。菌群研究发展迅速，具体菌株结论需逐项核查。"], references: [harvard] }),
  buildGuide({ slug: "metabolism-guide", title: "营养与代谢", category: "营养科学", tags: ["代谢"], summary: "营养素进入细胞后的去向。", updatedAt: "2026-09-22", readingMinutes: 6, paragraphs: ["葡萄糖可氧化供能或储存为糖原；脂肪酸可氧化或储存为甘油三酯；氨基酸主要用于合成蛋白质，过量时也可被氧化。"], references: [harvard] }),
  buildGuide({ slug: "individual-needs", title: "营养需求与个体差异", category: "营养科学", tags: ["生命周期"], summary: "为什么推荐量不是单一数字。", updatedAt: "2026-09-24", readingMinutes: 6, paragraphs: ["年龄、性别、体重、活动、疾病、药物和遗传背景都会改变营养需要。参考摄入量按人群分组制定，不能替代个体评估。"], caution: "孕妇、儿童、老年人和慢性病患者请查对应人群标准或咨询专业人士。", references: [cnsoc] }),
];

export const healthyEatingGuides: Guide[] = [
  buildGuide({ slug: "balance-meal", title: "什么是均衡饮食", category: "健康饮食", tags: ["均衡"], summary: "长期食物结构与比例。", updatedAt: "2026-09-26", readingMinutes: 6, paragraphs: ["均衡饮食强调在一段时间内覆盖各类食物，并获得适宜能量与营养素。餐盘法是简便的可视化工具。"], references: [cnsoc, harvard] }),
  buildGuide({ slug: "three-meals", title: "如何搭配一日三餐", category: "健康饮食", tags: ["三餐"], summary: "规律、多样、能量分布合理。", updatedAt: "2026-09-28", readingMinutes: 6, paragraphs: ["三餐应覆盖主食、蛋白质食物与蔬菜；早餐常被忽视，但有助于稳定上午能量与食欲。"], steps: ["早餐：谷物 + 蛋白质 + 果蔬。", "午餐：主食 + 蛋白 + 双份蔬菜。", "晚餐：清淡适量，避免过油过晚。"], references: [cnsoc] }),
  buildGuide({ slug: "breakfast-guide", title: "健康早餐怎么吃", category: "健康饮食", tags: ["早餐"], summary: "从“有”到“结构完整”。", updatedAt: "2026-09-30", readingMinutes: 5, paragraphs: ["一份结构完整的早餐包含谷物、蛋白质和蔬果。只吃面包或只喝果汁，容易饥饿且营养单一。"], steps: ["燕麦 + 牛奶 + 鸡蛋/酸奶。", "全麦三明治 + 蔬菜 + 鸡蛋。", "杂粮粥 + 豆制品 + 凉拌菜。"], references: [cnsoc] }),
  buildGuide({ slug: "lunch-guide", title: "午餐如何搭配", category: "健康饮食", tags: ["午餐"], summary: "补足下午能量与营养。", updatedAt: "2026-10-02", readingMinutes: 5, paragraphs: ["午餐占全天能量的重要比例。建议主食粗细搭配、蛋白质来源明确、蔬菜至少两拳。"], references: [cnsoc] }),
  buildGuide({ slug: "dinner-guide", title: "晚餐如何安排", category: "健康饮食", tags: ["晚餐"], summary: "清淡、适量、不过晚。", updatedAt: "2026-10-04", readingMinutes: 5, paragraphs: ["晚餐过晚或过油可能影响睡眠与消化。适量主食、优质蛋白和蔬菜是稳妥组合。"], references: [cnsoc] }),
  buildGuide({ slug: "vegetables-guide", title: "如何增加蔬菜摄入", category: "健康饮食", tags: ["蔬菜"], summary: "从可见行为入手。", updatedAt: "2026-10-06", readingMinutes: 5, paragraphs: ["成年人每天建议 300–500 g 蔬菜，深色蔬菜占一半。增加摄入的关键是把它放进已有餐次。"], steps: ["早餐加番茄或菠菜。", "外卖额外点一份凉拌菜。", "冰箱常备洗净即食的小番茄、黄瓜。"], references: [cnsoc] }),
  buildGuide({ slug: "fiber-intake", title: "如何摄入足够膳食纤维", category: "健康饮食", tags: ["纤维"], summary: "用全谷物、豆类和蔬果叠加。", updatedAt: "2026-10-08", readingMinutes: 5, paragraphs: ["把主食的一半换成全谷物与杂豆，每天一个完整水果，每周多次豆类，是提升纤维的实用路径。"], references: [cnsoc] }),
  buildGuide({ slug: "grains", title: "如何合理选择主食", category: "健康饮食", tags: ["主食", "全谷物"], summary: "粗细搭配，逐步过渡。", updatedAt: "2026-10-10", readingMinutes: 6, paragraphs: ["谷薯类每日 200–300 g，其中全谷物与杂豆 50–150 g。杂粮比例不必一步到位，1:3 起步更容易坚持。"], references: [cnsoc] }),
  buildGuide({ slug: "protein-choice", title: "如何选择蛋白质来源", category: "健康饮食", tags: ["蛋白质"], summary: "多样化优于单一来源。", updatedAt: "2026-10-12", readingMinutes: 6, paragraphs: ["鱼禽蛋瘦肉与豆制品轮换，兼顾氨基酸、铁锌与饱和脂肪。每周至少 2 次鱼，减少加工肉。"], references: [cnsoc, harvard] }),
  buildGuide({ slug: "healthy-fats", title: "如何理解健康脂肪", category: "健康饮食", tags: ["脂肪"], summary: "类型、总量与烹饪方式。", updatedAt: "2026-10-14", readingMinutes: 6, paragraphs: ["用不饱和脂肪替代部分饱和脂肪，限制反式脂肪；所有油脂每克约 9 kcal，用量仍需控制。"], references: [harvard, cnsoc] }),
  buildGuide({ slug: "dining-out", title: "外食如何选择", category: "健康饮食", tags: ["外食"], summary: "在有限选项中做更优解。", updatedAt: "2026-10-16", readingMinutes: 5, paragraphs: ["优先选择蒸、煮、炖、快炒的菜品；酱料分装；主动加一份蔬菜；含糖饮料换成白水。"], references: [cnsoc] }),
  buildGuide({ slug: "grocery-guide", title: "超市购物指南", category: "健康饮食", tags: ["购物"], summary: "按 perimeter 与标签做选择。", updatedAt: "2026-10-18", readingMinutes: 5, paragraphs: ["把购物清单建立在食材而非零食上：蔬菜水果、谷物豆类、蛋白质食物、奶类与少量坚果。包装食品看配料表前三位与钠糖含量。"], references: [cnsoc] }),
  buildGuide({ slug: "habit-formation", title: "饮食习惯养成", category: "健康饮食", tags: ["行为"], summary: "小步骤与环境设计。", updatedAt: "2026-10-20", readingMinutes: 6, paragraphs: ["行为改变依赖环境与重复，而非一次性决心。把健康选项放在更容易拿到的位置，比靠意志力更可靠。"], steps: ["一次只改一个行为。", "把新行为绑定已有场景（如早餐后喝水）。", "用记录复盘而不是用情绪评价。"], references: [harvard] }),
  buildGuide({ slug: "weight", title: "饮食与体重管理", category: "健康饮食", tags: ["体重"], summary: "可持续结构优先于极端限制。", updatedAt: "2026-10-22", readingMinutes: 7, paragraphs: ["体重长期变化取决于能量平衡，但食欲与代谢会随减重调整。提高蛋白质与纤维、减少液体糖、保持活动是更可持续的方向。"], caution: "有进食障碍史、孕期或慢性病患者不应自行热量限制。", references: [cnsoc] }),
  buildGuide({ slug: "patterns", title: "不同饮食模式的证据与局限", category: "健康饮食", tags: ["饮食模式"], summary: "地中海、DASH、植物性饮食的比较。", updatedAt: "2026-10-24", readingMinutes: 8, paragraphs: ["地中海饮食与 DASH 在心血管与血压结局上有较多研究支持；植物性饮食规划得当也可满足营养需要。任何模式的长期效果都取决于可行性与个体情况。"], bullets: ["不要只看短期减重幅度。", "关注食物加工程度与钠糖含量。", "极端排除饮食的长期证据通常有限。"], references: [harvard] }),
];

export const foodLabelGuides: Guide[] = [
  buildGuide({ slug: "read-nutrition-panel", title: "如何看懂营养成分表", category: "食品标签", tags: ["标签"], summary: "先单位、再数值、后配料。", updatedAt: "2026-10-26", readingMinutes: 6, paragraphs: ["营养成分表通常包含能量、蛋白质、脂肪、碳水与钠。先确认每 100 g 还是每份，再结合预计食用量计算。"], references: [cnsoc] }),
  buildGuide({ slug: "energy-units", title: "能量单位换算", category: "食品标签", tags: ["能量"], summary: "kJ 与 kcal。", updatedAt: "2026-10-28", readingMinutes: 4, paragraphs: ["1 kcal ≈ 4.184 kJ。若标签仅标示 kJ，除以 4.184 即可得到大致 kcal。"], references: [cnsoc] }),
  buildGuide({ slug: "per-serving", title: "每份与每 100 克的区别", category: "食品标签", tags: ["份量"], summary: "整包吃下要按倍数计算。", updatedAt: "2026-10-30", readingMinutes: 5, paragraphs: ["“每份”由企业定义，可能远小于整包。购买时同时查看每 100 g 数值和整包净含量。"], references: [cnsoc] }),
  buildGuide({ slug: "protein-label", title: "蛋白质含量怎么看", category: "食品标签", tags: ["蛋白质"], summary: "比较同一口径，注意能量。", updatedAt: "2026-11-01", readingMinutes: 4, paragraphs: ["比较“每 100 g 蛋白质”时也要看能量与糖脂含量，避免被高蛋白零食误导。"], references: [harvard] }),
  buildGuide({ slug: "fat-label", title: "脂肪与饱和脂肪", category: "食品标签", tags: ["脂肪"], summary: "关注类型与总量。", updatedAt: "2026-11-03", readingMinutes: 5, paragraphs: ["总脂肪高不一定不健康，坚果和鱼类是反例；但饱和脂肪高、反式脂肪存在时应谨慎。"], references: [harvard] }),
  buildGuide({ slug: "sugar-label", title: "糖与添加糖", category: "食品标签", tags: ["糖"], summary: "配料表比总糖更能识别添加来源。", updatedAt: "2026-11-05", readingMinutes: 5, paragraphs: ["总糖包含天然存在与添加的部分。看配料表中的白砂糖、糖浆、浓缩果汁可判断添加糖。"], references: [cnsoc] }),
  buildGuide({ slug: "sodium-salt-guide", title: "钠与盐的关系", category: "食品标签", tags: ["钠"], summary: "钠 × 2.5 ≈ 盐。", updatedAt: "2026-11-07", readingMinutes: 5, paragraphs: ["400 mg 钠约等于 1 g 食盐。成人每日食盐建议少于 5 g，需计入加工食品中的钠。"], references: [cnsoc] }),
  buildGuide({ slug: "ingredient-order", title: "配料表排序规则", category: "食品标签", tags: ["配料"], summary: "按投料量递减。", updatedAt: "2026-11-09", readingMinutes: 4, paragraphs: ["配料表按加入量从多到少排列。前三位决定产品基本性质，微量添加剂通常位于后面。"], references: [cnsoc] }),
  buildGuide({ slug: "additives", title: "食品添加剂基础知识", category: "食品标签", tags: ["添加剂"], summary: "合规使用与风险评估。", updatedAt: "2026-11-11", readingMinutes: 5, paragraphs: ["添加剂经风险评估后按 GB 2760 使用。ADI 是安全上限参考，不是建议摄入量。"], references: [{ title: "国家食品安全风险评估中心", publisher: "CFSA", url: "https://www.cfsa.net.cn/" }] }),
  buildGuide({ slug: "shelf-life", title: "保质期与保存条件", category: "食品标签", tags: ["保质期"], summary: "保质期依赖储存条件。", updatedAt: "2026-11-13", readingMinutes: 4, paragraphs: ["标签上的保质期以规定储存条件为前提。开封后保质期通常明显缩短，需按说明冷藏并尽快食用。"], references: [cnsoc] }),
  buildGuide({ slug: "safety", title: "食品储存安全", category: "食品标签", tags: ["食品安全"], summary: "生熟分开、控温、复热。", updatedAt: "2026-11-15", readingMinutes: 5, paragraphs: ["冷藏只能延缓微生物生长。熟食尽快降温入冰箱，复热需彻底，生熟砧板分开。"], references: [{ title: "WHO – Food safety", publisher: "WHO", url: "https://www.who.int/news-room/fact-sheets/detail/food-safety" }] }),
  buildGuide({ slug: "label-myths", title: "常见食品标签误区", category: "食品标签", tags: ["误区"], summary: "识别营销话术。", updatedAt: "2026-11-17", readingMinutes: 5, paragraphs: ["“零添加”“无糖”“高蛋白”都可能有法规定义与营销空间。判断产品要看完整标签与整体饮食场景。"], references: [harvard] }),
];

export const allGuides = [...nutritionScienceGuides, ...healthyEatingGuides, ...foodLabelGuides];

export function getGuide(slug: string) {
  return allGuides.find((g) => g.slug === slug);
}
