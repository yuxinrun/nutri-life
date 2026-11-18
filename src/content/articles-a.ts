import { buildArticle } from "./article-helpers";

const who = { title: "WHO：健康饮食 Fact Sheet", publisher: "WHO", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" };
const cnsoc = { title: "中国居民膳食指南（2022）解读", publisher: "中国营养学会", url: "https://www.cnsoc.org/" };
const harvard = { title: "The Nutrition Source", publisher: "Harvard University", url: "https://www.hsph.harvard.edu/nutritionsource/" };

export const articlesA = [
  buildArticle({
    slug: "balanced-diet", title: "什么是均衡饮食：一张餐盘讲清楚食物结构", subtitle: "不追求完美食物，而是建立长期稳定的饮食结构",
    summary: "均衡饮食不是某种神奇食谱，而是在一段较长时间内，让各类食物以合适比例出现，并满足能量与营养素需要。",
    category: "健康饮食", tags: ["均衡饮食", "餐盘", "膳食指南"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-02", readingMinutes: 11, featured: true, illustration: "plate",
    keyPoints: [
      "健康饮食不是寻找一种完美食物，而是建立长期稳定的饮食结构。",
      "餐盘法把抽象推荐变成可视比例：一半蔬菜水果，四分之一主食，四分之一蛋白质食物。",
      "看一周的整体，比纠结某一餐是否“完美”更有意义。",
    ],
    sections: [
      {
        id: "why", heading: "为什么这个问题重要",
        paragraphs: [
          "营养建议很容易被简化成“多吃某种食物”或“不吃某种食物”。但人体需要的是数十种营养素协同作用，没有一种食物能单独覆盖全部需要。把注意力放在单一食物上，容易忽略真正决定健康结局的长期饮食模式。",
          "观察性研究反复显示，整体饮食质量较高的人群，慢性病风险通常较低。但这并不意味着某一种食物带来保护作用；更合理的解释是，这些人在多年里持续选择了更有利的食物组合与生活方式。",
        ],
      },
      {
        id: "science", heading: "背后的营养科学原理",
        paragraphs: [
          "人体需要能量（来自碳水、脂肪和蛋白质）以及必需氨基酸、必需脂肪酸、维生素、矿物质、水和膳食纤维。这些成分分布在不同食物中：谷物提供淀粉与 B 族维生素，蔬果提供维生素 C、钾和纤维，动物性食物与豆类提供蛋白质和铁锌，奶类提供钙。",
          "平衡膳食的本质是“互补”：谷物相对缺乏赖氨酸，豆类相对缺乏蛋氨酸；红肉中的血红素铁吸收率高，而维生素 C 能提高植物性铁的吸收。多样化饮食让这些互补自然发生。",
        ],
        table: {
          head: ["食物组", "主要贡献", "常见误区"],
          rows: [
            ["谷薯类", "能量、B 族维生素、膳食纤维", "认为主食越少越好"],
            ["蔬菜水果", "维生素 C、钾、纤维、植物化学物", "用果汁替代完整水果"],
            ["鱼禽蛋瘦肉与豆类", "蛋白质、铁锌、B12", "只吃一种蛋白来源"],
            ["奶类与豆制品", "钙、蛋白质", "认为骨头汤能替代奶"],
            ["油盐调味", "风味、必需脂肪酸", "忽视隐形钠与油量"],
          ],
        },
      },
      {
        id: "practice", heading: "生活中的实际应用",
        paragraphs: [
          "一个可操作的午餐示例：杂粮饭一小碗（约 100–150 g 熟重）、清蒸鱼或豆腐一掌大小、两种颜色蔬菜各半拳、加一小份原味酸奶。这份餐没有精确计算每一毫克营养素，但覆盖了主要食物组。",
          "晚餐如果已经吃了较多蔬菜和蛋白质，主食可以适量减少，而不是完全取消。判断一顿饭是否合适，可以用“下一餐前是否过度饥饿”“餐后是否困倦沉重”作为日常观察线索。",
        ],
        callout: { type: "case", text: "案例：一位上班族长期只吃外卖盖饭，蔬菜少且油盐多。调整时不必换掉所有餐，只需先做到“加一份蔬菜、主食减半、酱料另放”。四周后整体摄入结构就会明显改变。" },
      },
      {
        id: "steps", heading: "具体操作步骤",
        steps: [
          "用一个普通餐盘分配：1/2 放蔬菜和水果，1/4 放谷物或薯类，1/4 放蛋白质食物。",
          "每天至少摄入 12 种食物，每周尽量达到 25 种以上（中国居民膳食指南建议）。",
          "把全谷物和杂豆逐步提高到主食的一半左右，肠胃不适应时从 1/3 开始。",
          "烹调油控制在每天 25–30 g，食盐少于 5 g。",
        ],
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“均衡饮食必须每顿都精确计算”：不需要。用周为单位评估更容易坚持。",
          "“某种超级食物能弥补其他不良习惯”：蓝莓、牛油果、藜麦都不能抵消长期高油高盐饮食。",
          "“主食越少越健康”：主食提供大脑需要的葡萄糖和 B 族维生素，极端限制常带来纤维不足。",
          "“素食一定不均衡”：规划良好的素食同样可以达到均衡，关键是豆类、坚果、全谷物与 B12 来源。",
        ],
      },
      {
        id: "alternatives", heading: "不同场景下的替代方案",
        paragraphs: [
          "外卖场景：优先选择有明确蔬菜和蛋白质来源的餐品，酱料分装；把米饭吃一半，另加一份凉拌蔬菜。",
          "预算有限时：冷冻蔬菜、鸡蛋、豆腐、燕麦和应季水果都是营养密度高且价格稳定的选择。冷冻蔬菜的营养保留通常优于长时间存放的“新鲜”蔬菜。",
          "胃口较小或老年人：把三餐拆成四到五顿小餐，保持食物种类不减少。",
        ],
      },
    ],
    references: [who, cnsoc, harvard],
    related: [
      { label: "一日三餐搭配", href: "/healthy-eating#meals" },
      { label: "健康餐盘插画", href: "/illustrations" },
      { label: "均衡膳食搭配工具", href: "/tools/meal-planner" },
      { label: "中国居民膳食指南（2022）", href: "/books/chinese-dietary-guidelines-2022" },
    ],
  }),
  buildArticle({
    slug: "digestion-absorption", title: "食物如何变成营养：消化吸收全流程", subtitle: "从第一口咀嚼到细胞利用，理解身体真正做了什么",
    summary: "消化不是简单的“把食物变小”，而是一系列机械与化学步骤，将大分子拆解为可吸收的小分子，再经血液和淋巴运送到全身。",
    category: "营养科学", tags: ["消化", "吸收", "肠道"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-04", readingMinutes: 10, featured: true, illustration: "digestion",
    keyPoints: [
      "口腔开始淀粉消化，胃负责蛋白质变性与酸性环境，小肠是营养吸收的主要场所。",
      "不同营养素走不同路径：水溶性营养素进入血液，长链脂肪酸多经淋巴系统。",
      "“吃哪补哪”并不成立，食物成分被拆解后按身体需要重新分配。",
    ],
    sections: [
      {
        id: "why", heading: "为什么这个问题重要",
        paragraphs: [
          "理解消化吸收，能解释很多日常现象：为什么乳糖不耐受会腹泻，为什么极低脂饮食影响脂溶性维生素吸收，为什么老年人吃同样食物却更容易体重下降。",
          "营养不是食物直接“变成身体的一部分”。食物先被拆解为氨基酸、脂肪酸、单糖、维生素和矿物质，再被运送到细胞，按基因指令重新合成身体需要的分子。",
        ],
      },
      {
        id: "science", heading: "背后的科学原理",
        steps: [
          "口腔：牙齿咀嚼增加表面积，唾液淀粉酶开始分解淀粉。充分咀嚼能减轻后续消化负担。",
          "食道与胃：蠕动将食团送入胃；胃酸使蛋白质变性并激活胃蛋白酶，形成食糜。胃并非吸收营养的主要场所。",
          "小肠：胰液提供淀粉酶、脂肪酶与蛋白酶；胆汁乳化脂肪；肠壁绒毛与微绒毛大幅增加吸收面积。",
          "大肠：吸收水分与电解质，菌群发酵未消化的膳食纤维，生成短链脂肪酸。",
        ],
        table: {
          head: ["营养素", "主要吸收形式", "主要路径"],
          rows: [
            ["碳水化合物", "葡萄糖、半乳糖、果糖等单糖", "门静脉 → 肝脏"],
            ["蛋白质", "氨基酸、二肽、三肽", "门静脉 → 肝脏"],
            ["脂肪", "脂肪酸、单酰甘油 → 乳糜微粒", "淋巴 → 血液循环"],
            ["脂溶性维生素", "随脂肪微团吸收", "与膳食脂肪共同吸收"],
            ["水溶性维生素", "特异转运体或被动扩散", "门静脉 → 血液循环"],
          ],
        },
      },
      {
        id: "practice", heading: "实际应用：怎样吃更利于消化",
        paragraphs: [
          "吃饭速度过快、暴饮暴食会加重胃排空负担，也更容易摄入过量能量。细嚼慢咽不仅是礼仪，更是让机械消化先行。",
          "膳食纤维有益，但突然从低纤维跳到高纤维，容易出现腹胀。正确做法是逐步增加，并同步增加饮水。",
          "脂肪吸收需要胆汁与胰酶参与。脂肪吸收障碍、胆汁淤积或胰腺疾病患者需要专业饮食指导。",
        ],
        callout: { type: "case", text: "案例：乳糖不耐受者在喝牛奶后腹胀腹泻，是因为乳糖酶不足，未消化乳糖被结肠菌群发酵。改为发酵乳、低乳糖奶，或随餐少量摄入，通常耐受更好。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“食物在胃里被吸收”：胃主要做机械与化学预处理，主要吸收发生在小肠。",
          "“吃胶原蛋白直接补皮肤”：口服后先被消化，不会定向沉积到皮肤。",
          "“酵素产品能帮助消化”：多数口服酶在胃酸环境中失活，健康人通常不需要额外补充。",
          "“饭后立即运动影响吸收”：一般活动影响很小，但剧烈运动可能引起胃肠不适。",
        ],
      },
      {
        id: "alternatives", heading: "不同人群的注意点",
        paragraphs: [
          "老年人：胃酸分泌与咀嚼能力可能下降，可选择软烂、蛋白质分布均匀的食物，并保持口腔健康。",
          "胃肠敏感者：记录诱发不适的食物与份量，比笼统忌口更有用；症状持续应就医。",
          "术后或疾病状态：遵循临床营养方案，不自行套用普通人的饮食建议。",
        ],
      },
    ],
    references: [harvard, { title: "NIH – Your Digestive System & How It Works", publisher: "NIDDK", url: "https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works" }],
    related: [{ label: "碳水化合物", href: "/nutrients/carbohydrates" }, { label: "蛋白质", href: "/nutrients/protein" }, { label: "肠道健康", href: "/nutrition-health/gut" }, { label: "膳食纤维", href: "/articles/fiber-guide" }],
  }),
  buildArticle({
    slug: "energy-balance", title: "能量平衡：为什么“少吃多动”说起来容易做起来难", subtitle: "体重变化背后的生理调节与行为现实",
    summary: "体重长期变化取决于能量摄入与消耗的差额，但这个差额受到食欲、代谢适应、睡眠、环境和行为反馈的共同影响。",
    category: "健康饮食", tags: ["体重管理", "能量", "代谢"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-06", readingMinutes: 12, illustration: "meals",
    keyPoints: [
      "体重长期变化的核心是能量平衡，但两端都不是可以完全靠意志力控制的数字。",
      "基础代谢、食物热效应、活动消耗与适应性产热共同构成总消耗。",
      "可持续的饮食结构，比短期极端热量限制更容易长期维持。",
    ],
    sections: [
      {
        id: "why", heading: "为什么这个问题重要",
        paragraphs: [
          "减重信息市场充满简化公式：每天少 500 kcal 一周减 0.5 kg。这类算术在理论上成立，但现实中体重变化会触发食欲上升、静息代谢下降和活动减少，使差额逐渐缩小。",
          "理解这一点，有助于把失败从“意志力不足”重新定义为“策略与环境不匹配”，从而选择更可持续的方案。",
        ],
      },
      {
        id: "science", heading: "背后的原理",
        paragraphs: [
          "总能量消耗包括基础代谢（约占总消耗 60%–70%）、食物热效应、体力活动与适应性产热。肌肉量、年龄、性别、激素状态和体重本身都会影响基础代谢。",
          "体重下降后，身体会通过降低瘦素水平、提高饥饿素信号、减少非运动性活动等方式抵抗进一步下降。这是生理保护机制，不是品格缺陷。",
        ],
        bullets: [
          "1 kg 脂肪组织约储存 7000–7700 kcal，但减重初期还包括水分与糖原变化。",
          "蛋白质摄入与抗阻训练有助于在减重期保留瘦体重。",
          "睡眠不足会影响饥饿感和食物选择，间接影响能量摄入。",
        ],
      },
      {
        id: "practice", heading: "实际应用与操作步骤",
        steps: [
          "先稳定当前饮食一周，用记录了解真实摄入，而不是凭印象估算。",
          "把改变限定在 1–2 个高收益行为：减少含糖饮料、增加每餐蛋白质和蔬菜。",
          "每周称重 2–3 次并看趋势，避免被单日水分波动干扰。",
          "若连续两周无变化，再考虑小幅调整总能量或活动量。",
        ],
        callout: { type: "caution", text: "有进食障碍史、孕期、青少年和慢性病患者，不应自行进行热量限制；请寻求专业帮助。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“只要运动就能抵消任何饮食”：高能量密度食物很容易在几分钟内吃掉一小时运动消耗。",
          "“晚上吃东西特别容易胖”：在总能量相同前提下，进餐时间的影响远小于总量与食物选择。",
          "“基础代谢一旦下降就无法恢复”：减重后代谢适应常见，但通过维持期、增加活动和力量训练可以缓解。",
          "“越快减重越好”：过快减重更可能丢失瘦体重并反弹。",
        ],
      },
      {
        id: "alternatives", heading: "不同场景下的替代方案",
        paragraphs: [
          "没时间运动：把活动拆成多次 10 分钟步行，比只在周末集中运动更容易坚持。",
          "社交用餐频繁：采用“先蔬菜蛋白、后主食”的顺序，控制酱料和饮料，而不是完全回避聚餐。",
          "食欲波动大：提高每餐蛋白质与纤维，规律进餐，避免长时间空腹后暴食。",
        ],
      },
    ],
    references: [cnsoc, { title: "NIDDK – Weight Management", publisher: "NIH", url: "https://www.niddk.nih.gov/health-information/weight-management" }],
    related: [{ label: "营养摄入估算器", href: "/tools/nutrition-calculator" }, { label: "饮食习惯复盘", href: "/tools/habit-review" }, { label: "健康早餐", href: "/healthy-eating#breakfast" }],
  }),
  buildArticle({
    slug: "fiber-guide", title: "膳食纤维：被低估的“第八大营养素”", subtitle: "从便秘到代谢，纤维的作用究竟有多大",
    summary: "膳食纤维不被人体消化吸收，却通过增加饱腹感、改善肠道通过和菌群发酵，成为现代饮食中最常被摄入不足的成分之一。",
    category: "营养素", tags: ["膳食纤维", "肠道", "全谷物"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-08", readingMinutes: 12, featured: true, illustration: "fiber",
    keyPoints: [
      "膳食纤维分可溶性与不可溶性，两者作用不同但都需要。",
      "中国成年人膳食纤维适宜摄入量约 25–30 g/日，多数人明显不足。",
      "增加纤维要“逐步 + 足量饮水”，否则容易腹胀。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "精制谷物和加工食品普及后，人们摄入的纤维显著下降。纤维不足不仅与排便问题相关，也与整体饮食质量下降相伴：高纤维食物通常同时提供钾、镁、叶酸和多种植物化学物。",
          "需要区分的是：纤维的健康效应来自长期饮食模式，而不是某一种纤维补充剂。把纤维粉倒进饮料里，无法替代蔬果、豆类和全谷物的整体作用。",
        ],
      },
      {
        id: "science", heading: "科学与机制",
        table: {
          head: ["类型", "代表成分", "主要作用", "常见来源"],
          rows: [
            ["可溶性纤维", "果胶、β-葡聚糖、菊粉", "形成凝胶、延缓胃排空、被菌群发酵", "燕麦、苹果、豆类、奇亚籽"],
            ["不可溶性纤维", "纤维素、半纤维素、木质素", "增加粪便体积、促进肠道通过", "全麦、绿叶菜、芹菜"],
            ["抗性淀粉", "未消化淀粉与回生淀粉", "进入结肠发酵产生短链脂肪酸", "未熟香蕉、冷却米饭、豆类"],
          ],
        },
        paragraphs: [
          "短链脂肪酸（如丁酸）是结肠细胞的重要能量来源，也参与免疫与炎症调节。但需要强调：人体研究结果多为关联性或机制推测，不能把某一种纤维包装成疾病治疗手段。",
        ],
      },
      {
        id: "practice", heading: "怎样吃够 25–30 g",
        steps: [
          "早餐用 40 g 燕麦替代精白面包（约增加 3–4 g 纤维）。",
          "午餐加入半碗豆类或杂粮饭，蔬菜至少两拳。",
          "每天一个完整水果，优先带皮食用的苹果、梨、浆果。",
          "把零食换成坚果与种子（每天 10–15 g）。",
        ],
        callout: { type: "tip", text: "记录技巧：先看自己常吃食物的纤维值，找出“贡献最大的三个来源”，优化它们比盲目加补充剂更有效。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“纤维越多越好”：突然大量摄入会引起腹胀；肠狭窄或术后人群需遵医嘱。",
          "“喝果蔬汁能补纤维”：榨汁去除大部分不溶性纤维，完整水果更优。",
          "“纤维能治愈便秘”：便秘成因复杂，饮水、活动、药物与疾病都需评估。",
          "“抗性淀粉可以随便吃生的”：生淀粉消化差，且某些来源可能引起不适。",
        ],
      },
      {
        id: "alternatives", heading: "不同场景的替代方案",
        paragraphs: [
          "肠胃敏感：从煮熟的胡萝卜、南瓜、燕麦开始，避免一次性大量豆类与生冷蔬菜。",
          "时间紧张：冷冻蔬菜、即食燕麦、罐装低钠豆类都能提供纤维。",
          "牙口不好：把蔬菜切碎煮软、选择软烂豆类与熟水果，纤维仍可保留。",
        ],
      },
    ],
    references: [cnsoc, harvard, { title: "WCRF – Diet, Nutrition, Physical Activity and Cancer", publisher: "WCRF", url: "https://www.wcrf.org/dietandcancer/" }],
    related: [{ label: "燕麦", href: "/foods/oats" }, { label: "鹰嘴豆", href: "/foods/chickpeas" }, { label: "肠道健康专题", href: "/nutrition-health/gut" }, { label: "WCRF 纤维报告解读", href: "/nutrition-research/wcrf-fibre" }],
  }),
  buildArticle({
    slug: "glycemic-index", title: "血糖生成指数（GI）：有用，但别把它当唯一标准", subtitle: "为什么西瓜 GI 高却不一定“不健康”",
    summary: "GI 描述食物升高血糖的速度与幅度，但真实餐后反应还取决于摄入量、搭配、加工方式和个体代谢差异。",
    category: "营养科学", tags: ["血糖", "GI", "主食"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-10", readingMinutes: 10, illustration: "carbs",
    keyPoints: [
      "GI 是相对值，反映含 50 g 可利用碳水食物的餐后血糖反应，不等于“健康分数”。",
      "血糖负荷（GL）把摄入量纳入计算，更贴近实际一餐。",
      "搭配蛋白质、脂肪、蔬菜和降低加工度，能改变整体血糖反应。",
    ],
    sections: [
      {
        id: "why", heading: "为什么容易混淆",
        paragraphs: [
          "西瓜的 GI 较高，但每 100 g 西瓜只含约 7–8 g 碳水；吃一正常份量带来的血糖负荷并不高。相反，某些“低 GI”加工食品如果大量食用，仍可能带来较高能量摄入。",
          "GI 数据通常在单独进食、含 50 g 可利用碳水的条件下测定，与真实一餐中多种食物混合的情况不同。",
        ],
      },
      {
        id: "science", heading: "关键概念",
        bullets: [
          "GI：以葡萄糖（GI=100）为参照，测定食物在餐后 2 小时内的血糖曲线下面积。",
          "GL = GI × 每份可利用碳水克数 ÷ 100，反映“质”与“量”的共同作用。",
          "抗性淀粉、纤维、蛋白质和脂肪会延缓胃排空与葡萄糖吸收。",
          "加工越精细、颗粒越小、糊化程度越高，通常消化越快。",
        ],
        table: {
          head: ["策略", "对餐后血糖的可能影响", "例子"],
          rows: [
            ["换成全谷物", "通常更平缓", "白米饭 → 杂粮饭"],
            ["先吃蔬菜蛋白", "延缓胃排空", "先菜后饭"],
            ["冷却再加热主食", "增加抗性淀粉", "冷米饭、土豆沙拉"],
            ["切大块、少打浆", "减少表面积与糊化", "燕麦片优于燕麦粉"],
          ],
        },
      },
      {
        id: "practice", heading: "实际应用",
        paragraphs: [
          "对健康成年人，不必逐餐计算 GI。把白米白面的一部分换成全谷物、杂豆和薯类，就能获得更平稳的餐后反应和更高的营养密度。",
          "血糖管理人群更需要关注总碳水摄入、进餐时序和药物配合。监测个体餐后血糖比查表更有价值，因为不同人对同一食物的反应可能差异很大。",
        ],
        callout: { type: "caution", text: "糖尿病患者不要用 GI 表自行调整药物剂量；任何治疗方案变化需与医生讨论。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“低 GI 食物可以无限吃”：份量与总能量依然重要。",
          "“高 GI 水果不能吃”：完整水果提供纤维与微量营养素，通常优于果汁。",
          "“ GI 值是固定的”：品种、成熟度、烹饪与个体都会改变实际反应。",
          "“血糖波动对每个人都同样有害”：需结合健康状况与整体饮食评估。",
        ],
      },
    ],
    references: [harvard, cnsoc, { title: "PubMed：Glycemic index 方法学", publisher: "NLM", url: "https://pubmed.ncbi.nlm.nih.gov/?term=glycemic+index+methodology" }],
    related: [{ label: "碳水化合物", href: "/nutrients/carbohydrates" }, { label: "糙米", href: "/foods/rice-brown" }, { label: "血糖代谢专题", href: "/nutrition-health/blood-sugar" }],
  }),
  buildArticle({
    slug: "whole-fruit-vs-juice", title: "完整水果与果汁：差的不只是纤维", subtitle: "为什么营养师更推荐“吃”水果而不是“喝”水果",
    summary: "榨汁会改变食物的物理结构、纤维含量和摄入速度，使同样的水果来源产生不同的饱腹感与能量摄入场景。",
    category: "健康饮食", tags: ["水果", "果汁", "添加糖"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-12", readingMinutes: 8, illustration: "carbs",
    keyPoints: [
      "完整水果保留纤维和细胞结构，需要咀嚼，饱腹感更强。",
      "果汁去掉了大部分不溶性纤维，容易在短时间内摄入大量糖和能量。",
      "偶尔喝果汁不必恐慌，但日常应优先选择完整水果。",
    ],
    sections: [
      {
        id: "why", heading: "为什么这件事值得说清",
        paragraphs: [
          "果汁常被视为“健康饮品”，尤其在儿童饮食中。但一杯橙汁可能需要 3–4 个橙子，喝下去只需几十秒，而吃 3–4 个橙子需要更长时间并带来明显饱腹感。",
          "这里的差异不是“果糖有毒”，而是食物结构与摄入速度。脱离剂量与场景讨论糖，往往得出误导性结论。",
        ],
      },
      {
        id: "science", heading: "科学解释",
        bullets: [
          "榨汁破坏细胞壁，使糖更快被释放和吸收。",
          "过滤式果汁去除果肉，损失大部分不溶性纤维。",
          "液态能量不容易触发相应的饱腹信号，容易形成额外摄入。",
          "完整水果中的多酚、维生素 C 与钾仍然存在，但果汁加热与储存会造成部分损失。",
        ],
      },
      {
        id: "practice", heading: "实际建议",
        steps: [
          "每天 200–350 g 水果，尽量选择完整水果（中国居民膳食指南成年人的建议范围）。",
          "想喝果汁时选择 100% 果汁并控制在一小杯（约 150 ml）以内，且不再额外吃大量甜食。",
          "给儿童提供水果块而不是果汁；不要把果汁放进奶瓶。",
          "用整果 + 酸奶 + 坚果构成加餐，降低饥饿感。",
        ],
        callout: { type: "case", text: "场景：早餐喝一杯 300 ml 橙汁再吃面包，可能摄入超过 100 kcal 且几乎不饱。换成两个橙子或一份浆果，咀嚼时间更长，总能量更低。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“鲜榨果汁比含糖饮料健康得多，所以可以随便喝”：二者在能量密度与摄入速度上仍有相似问题。",
          "“水果糖和添加糖完全一样”：完整水果的基质不同，但不能因此认为果糖摄入无上限。",
          "“晚上吃水果更容易胖”：时间不是主要因素，总量和整体饮食结构才是。",
        ],
      },
    ],
    references: [who, cnsoc],
    related: [{ label: "苹果", href: "/foods/apple" }, { label: "蓝莓", href: "/foods/blueberry" }, { label: "添加糖", href: "/articles/added-sugar" }],
  }),
  buildArticle({
    slug: "essential-amino-acids", title: "必需氨基酸与植物蛋白互补：不必顿顿“配对”", subtitle: "蛋白质质量到底该怎么理解",
    summary: "人体需要 9 种必需氨基酸。植物性饮食只要总量充足、种类多样，完全可以满足需要；谷物与豆类互补不必发生在同一餐。",
    category: "营养科学", tags: ["蛋白质", "氨基酸", "素食"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-14", readingMinutes: 10, illustration: "protein",
    keyPoints: [
      "9 种必需氨基酸必须从食物获得，其余可由体内合成。",
      "谷物相对缺赖氨酸、豆类相对缺蛋氨酸，二者全天搭配即可互补。",
      "“完全蛋白”不是规范营养学术语，不必被营销概念牵着走。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "植物性饮食日益普及，关于“植物蛋白不完整”的说法也随之流传。这个说法有生化基础，但常被过度简化：它忽略全天饮食的蛋白质总量和多样化组合。",
          "人体并没有“每餐都必须凑齐九种氨基酸”的硬性要求。肝脏与肌肉在一定程度上可以暂存和调配氨基酸池。",
        ],
      },
      {
        id: "science", heading: "关键知识",
        bullets: [
          "必需氨基酸：组氨酸、异亮氨酸、亮氨酸、赖氨酸、蛋氨酸、苯丙氨酸、苏氨酸、色氨酸、缬氨酸。",
          "限制氨基酸：某种食物中相对不足、限制整体蛋白质利用的氨基酸。",
          "谷物限制氨基酸多为赖氨酸；豆类多为蛋氨酸。",
          "大豆蛋白的氨基酸组成较接近动物蛋白，是优质植物蛋白代表。",
        ],
        paragraphs: [
          "蛋白质质量评价常用 PDCAAS 或 DIAAS 等指标，考虑氨基酸组成与消化率。这些指标用于人群研究，不适合直接指导每一餐的食物选择。",
        ],
      },
      {
        id: "practice", heading: "实操建议",
        steps: [
          "保证全天蛋白质总量：豆腐、豆浆、杂豆、坚果、谷物都要有。",
          "一餐中同时有谷物和豆类最方便：杂粮饭、豆饭、鹰嘴豆沙拉配全麦饼。",
          "严格素食者关注维生素 B12、铁、锌与维生素 D 的来源。",
          "不必每餐精确计算氨基酸，观察一段时间后的体力、恢复与饱腹感更实际。",
        ],
        callout: { type: "caution", text: "婴幼儿、孕妇、老年人与疾病恢复期的植物性饮食需要专业规划，避免蛋白质与微量营养素不足。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“植物蛋白必须同餐互补”：全天多样即可。",
          "“只有动物蛋白才能增肌”：抗阻训练、总能量与总蛋白更关键。",
          "“蛋白粉比食物更容易吸收”：健康人从食物获取蛋白质通常足够。",
        ],
      },
    ],
    references: [
      { title: "WHO：Protein and amino acid requirements in human nutrition", publisher: "WHO", url: "https://iris.who.int/handle/10665/43411" },
      { title: "Harvard Nutrition Source – Vegetarian and vegan diets", publisher: "Harvard University", url: "https://www.hsph.harvard.edu/nutritionsource/vegetarian-vegan-diets/" },
    ],
    related: [{ label: "蛋白质", href: "/nutrients/protein" }, { label: "黄豆", href: "/foods/soybeans" }, { label: "豆腐", href: "/foods/tofu" }, { label: "扁豆番茄炖菜", href: "/recipes/lentil-stew" }],
  }),
  buildArticle({
    slug: "protein-sources", title: "不同蛋白质食物来源对比：鸡蛋、鱼、肉、豆怎么选", subtitle: "比较蛋白质要统一口径：每 100 g、每 100 kcal 还是每份",
    summary: "没有一种蛋白质食物适合所有人。理解蛋白质密度、脂肪组成、铁锌与 B12 的差异，才能做出符合自己需要的组合。",
    category: "营养科学", tags: ["蛋白质", "食物比较", "铁"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-16", readingMinutes: 10, illustration: "proteinSources",
    keyPoints: [
      "不同食物的蛋白质含量差异很大，生熟与含水量会改变每 100 g 数值。",
      "动物性食物通常提供更好的铁锌与 B12；豆类提供纤维且饱和脂肪低。",
      "搭配比排名更重要：全天多样化优于寻找“最优蛋白”。",
    ],
    sections: [
      {
        id: "why", heading: "为什么需要比较",
        paragraphs: [
          "“高蛋白”标签出现在越来越多食品上，但一份高蛋白零食可能同时含有大量糖和脂肪。比较不同来源时，必须统一计量口径，并考虑它带来的其他营养素。",
          "蛋白质只是选择食物的一部分。红肉提供血红素铁但饱和脂肪较高；鱼类提供 Omega-3；豆类提供纤维但铁吸收率较低；奶类提供钙但不含铁。",
        ],
      },
      {
        id: "science", heading: "结构化比较",
        table: {
          head: ["食物（状态）", "蛋白质约 g/100 g", "其他特点", "注意点"],
          rows: [
            ["鸡蛋（生全蛋）", "12.6", "胆碱、B12、脂溶性维生素", "蛋黄不应随意丢弃"],
            ["鸡胸肉（生）", "20–23", "低脂", "铁锌低于红肉"],
            ["瘦牛肉（生）", "26", "血红素铁、锌、B12", "控制加工肉与总量"],
            ["三文鱼（熟）", "22", "EPA/DHA、维生素 D", "注意来源与汞风险"],
            ["北豆腐（湿）", "8–12", "钙（取决于凝固剂）", "含水量影响数值"],
            ["干黄豆", "36–40", "蛋白质与纤维密集", "干重口径，泡发后稀释"],
          ],
        },
        paragraphs: [
          "表中数值为常见近似值，来自公开食物成分数据库。不同品种、产地和烹饪方式会造成明显差异；请勿把不同状态的数值直接比较。",
        ],
      },
      {
        id: "practice", heading: "如何搭配",
        steps: [
          "每餐一个手掌大小的蛋白质食物，早餐优先安排。",
          "每周至少 2 次鱼类，其中 1–2 次富脂鱼。",
          "每周安排豆制品与杂豆多次，替代部分红肉。",
          "素食者重点关注 B12、铁和锌的来源。",
        ],
        callout: { type: "tip", text: "老人或胃口小的人：把蛋白质分散到三餐，每次 15–25 g，比集中在一餐更容易达到全天目标。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“鸡胸肉是唯一的减脂蛋白”：过于单一，难以长期坚持。",
          "“红肉一律致癌”：重点在摄入量与加工肉；具体风险需看整体证据。",
          "“鱼油补充剂等于吃鱼”：全鱼还提供蛋白质与多种微量营养素。",
          "“豆腐蛋白质不如鸡蛋”：按每 100 kcal 比较时差异会缩小。",
        ],
      },
    ],
    references: [harvard, { title: "USDA FoodData Central", publisher: "USDA", url: "https://fdc.nal.usda.gov/" }],
    related: [{ label: "鸡蛋", href: "/foods/egg" }, { label: "三文鱼", href: "/foods/salmon" }, { label: "北豆腐", href: "/foods/tofu" }, { label: "烤三文鱼", href: "/recipes/baked-salmon" }],
  }),
  buildArticle({
    slug: "omega3-omega6", title: "Omega-3 与 Omega-6：不是简单的“好与坏”", subtitle: "必需脂肪酸、转化效率与食物选择",
    summary: "Omega-3 与 Omega-6 都是人体必需的脂肪酸家族。现代饮食的问题通常不是 Omega-6 本身，而是 Omega-3 来源不足与整体脂肪质量不佳。",
    category: "营养科学", tags: ["Omega-3", "脂肪酸", "鱼类"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-18", readingMinutes: 10, illustration: "fattyAcids",
    keyPoints: [
      "亚油酸（Omega-6）和α-亚麻酸（Omega-3）是必需脂肪酸。",
      "ALA 转化为 EPA/DHA 的效率有限，富脂鱼或藻油是更直接的长链来源。",
      "减少饱和脂肪和反式脂肪，比纠结单一比例更有实践价值。",
    ],
    sections: [
      {
        id: "why", heading: "为什么常被误解",
        paragraphs: [
          "网络文章常把 Omega-6 描述为“促炎”、Omega-3 描述为“抗炎”。这种二分法过度简化。两者都是细胞膜和信号分子的前体，人体需要它们发挥作用；关键在于摄入来源、总量和整体饮食背景。",
          "现代饮食中大豆油、玉米油等 Omega-6 来源普遍充足，而鱼类与亚麻籽等 Omega-3 来源往往不足。因此实际建议常是“增加 Omega-3”，而不是“消灭 Omega-6”。",
        ],
      },
      {
        id: "science", heading: "关键知识",
        bullets: [
          "ALA（18:3 n-3）：亚麻籽、核桃、奇亚籽、菜籽油中的植物来源 Omega-3。",
          "EPA 与 DHA（20:5 / 22:6 n-3）：富脂鱼、藻油中的长链 Omega-3。",
          "LA（18:2 n-6）：大豆油、葵花籽油、坚果中常见。",
          "ALA 转化为 EPA 的比例有限，转化为 DHA 更低，受性别、年龄与背景饮食影响。",
        ],
        table: {
          head: ["来源", "主要提供", "实践定位"],
          rows: [
            ["三文鱼、沙丁鱼、鲭鱼", "EPA + DHA", "每周 2 次"],
            ["亚麻籽、奇亚籽、核桃", "ALA", "作为日常补充"],
            ["菜籽油、橄榄油", "ALA / 油酸", "日常烹调用油"],
            ["藻油补充剂", "DHA（部分含 EPA）", "素食者可与专业人士讨论"],
          ],
        },
      },
      {
        id: "practice", heading: "实际建议",
        steps: [
          "每周吃 2 次富脂鱼，每次约 100 g。",
          "每天一小把核桃或一勺亚麻籽粉（注意总能量）。",
          "用菜籽油或橄榄油替代部分高饱和脂肪。",
          "不盲目追求高剂量鱼油补充剂，尤其是正在服用抗凝药者。",
        ],
        callout: { type: "caution", text: "孕期女性和儿童选择鱼类时注意低汞品种；鱼类补充剂不等于越多越好。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“Omega-6 都有害”：它是必需脂肪酸，关键在于来源和平衡。",
          "“吃核桃等于吃鱼油”：ALA 转化有限。",
          "“鱼油能替代降压药或他汀”：不能。",
          "“脂肪酸比例有唯一完美数值”：不同机构建议范围不同，实操侧重食物来源。",
        ],
      },
    ],
    references: [
      { title: "NIH ODS – Omega-3 Fatty Acids", publisher: "NIH", url: "https://ods.od.nih.gov/factsheets/Omega3FattyAcids-HealthProfessional/" },
      { title: "Lyon Diet Heart Study 解读", publisher: "Nutri Life", url: "/nutrition-research/lyon-diet-heart" },
    ],
    related: [{ label: "脂肪", href: "/nutrients/fats" }, { label: "三文鱼", href: "/foods/salmon" }, { label: "核桃", href: "/foods/walnuts" }, { label: "PREDIMED 研究解读", href: "/nutrition-research/predimed" }],
  }),
  buildArticle({
    slug: "cooking-oils", title: "如何看懂食用油：烟点、脂肪酸与烹饪方式", subtitle: "选油不迷路：从脂肪酸组成和用途出发",
    summary: "食用油的选择应看脂肪酸组成、烹饪温度与保存方式。没有一种油适合所有用途，用量控制比品种争论更重要。",
    category: "食品标签", tags: ["食用油", "脂肪", "烹饪"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-20", readingMinutes: 9, illustration: "fattyAcids",
    keyPoints: [
      "所有食用油每克约 9 kcal，用量比“哪种油更健康”更影响总能量。",
      "橄榄油、菜籽油以不饱和脂肪为主；棕榈油、椰子油饱和脂肪比例较高。",
      "按烹饪温度选油，并避光密封保存。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "厨房里的油瓶越来越多：橄榄油、牛油果油、椰子油、亚麻籽油。商家强调各自的优势，却很少提醒“每克都是 9 kcal”。中国居民膳食指南建议成年人每天烹调油 25–30 g。",
          "油的选择还影响脂肪酸摄入结构。用菜籽油或橄榄油替代部分动物油，有助于降低饱和脂肪供能比。",
        ],
      },
      {
        id: "science", heading: "怎么看一瓶油",
        bullets: [
          "看营养成分表：脂肪含量接近 100 g/100 g，能量约 3700 kJ/100 g。",
          "脂肪酸组成通常不在强制标示范围，可参考厂商资料：油酸（单不饱和）、亚油酸（Omega-6）、ALA（Omega-3）。",
          "烟点是油开始明显冒烟的温度；家庭煎炸应避免油温过高与反复使用。",
          "精炼程度影响烟点与风味，也改变部分微量成分。",
        ],
        table: {
          head: ["油种", "脂肪酸特点", "适合用途"],
          rows: [
            ["特级初榨橄榄油", "油酸为主，多酚较多", "凉拌、中低温烹调"],
            ["菜籽油", "油酸较高，含 ALA", "日常炒菜"],
            ["花生油", "油酸与亚油酸兼有", "一般烹调"],
            ["亚麻籽油", "ALA 高，不耐高温", "凉拌，避光冷藏"],
            ["棕榈油 / 椰子油", "饱和脂肪比例较高", "控制用量，少用于日常"],
          ],
        },
      },
      {
        id: "practice", heading: "实操建议",
        steps: [
          "用带刻度的油壶控制全家每日用量。",
          "凉拌用初榨橄榄油或亚麻籽油；高温快炒用菜籽油、花生油等。",
          "避免把油烧到冒烟；煎炸油不反复使用。",
          "开封后 2–3 个月内用完，远离灶台与阳光。",
        ],
        callout: { type: "tip", text: "减少用油的烹调技巧：不粘锅、先焯后炒、用葱姜蒜和醋提味、烤制代替油炸。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“植物油不含胆固醇，所以可以多吃”：能量仍然很高。",
          "“椰子油是超级健康油”：饱和脂肪比例高，应限量。",
          "“烟点高的油最健康”：还要看脂肪酸组成与使用场景。",
          "“橄榄油不能加热”：精炼橄榄油适合一般烹调，特级初榨更适合中低温。",
        ],
      },
    ],
    references: [harvard, { title: "USDA FoodData Central", publisher: "USDA", url: "https://fdc.nal.usda.gov/" }],
    related: [{ label: "脂肪", href: "/nutrients/fats" }, { label: "橄榄油", href: "/foods/olive-oil" }, { label: "Omega-3 与 Omega-6", href: "/articles/omega3-omega6" }, { label: "心血管健康", href: "/nutrition-health/cardiovascular" }],
  }),
  buildArticle({
    slug: "iron-absorption", title: "铁吸收：为什么菠菜不是补铁第一名", subtitle: "血红素铁、非血红素铁与提升吸收的搭配方法",
    summary: "食物中的铁分为血红素铁与非血红素铁，吸收率差异很大。维生素 C、肉类和发酵处理能提高植物性铁的利用，草酸与植酸则会降低利用。",
    category: "营养科学", tags: ["铁", "贫血", "素食"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-22", readingMinutes: 10, illustration: "minerals",
    keyPoints: [
      "血红素铁（动物性食物）吸收率通常高于非血红素铁。",
      "维生素 C 和“肉类因子”能提高非血红素铁吸收；草酸、植酸会降低吸收。",
      "缺铁性贫血需要医学诊断，补铁剂应遵医嘱。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "铁参与血红蛋白合成与氧运输。育龄女性、儿童、孕妇和素食者更容易出现铁摄入不足。很多人听说“菠菜补铁”，但菠菜中的铁是非血红素铁，同时含有草酸，实际利用率并不理想。",
          "改善铁营养不能只看食物中铁的毫克数，还要看吸收促进与抑制因素。",
        ],
      },
      {
        id: "science", heading: "关键机制",
     
        table: {
          head: ["因素", "对铁吸收的影响", "例子"],
          rows: [
            ["血红素铁", "吸收率较高，受膳食因素影响较小", "红肉、动物血、肝脏"],
            ["非血红素铁", "吸收率较低，受搭配影响大", "豆类、绿叶菜、强化谷物"],
            ["维生素 C", "将三价铁还原为更易吸收形式", "彩椒、柑橘、番茄"],
            ["植酸 / 草酸", "与铁结合降低吸收", "未发酵全谷、菠菜"],
            ["钙", "大剂量钙补充可能短期干扰铁吸收", "高钙补充剂与高铁餐同服"],
          ],
        },
        paragraphs: [
          "发酵、浸泡和发芽能部分降解植酸。把豆类提前浸泡、选择发酵豆制品，是传统饮食中蕴藏的实用智慧。",
        ],
      },
      {
        id: "practice", heading: "实际搭配方案",
        steps: [
          "每周 1–2 次瘦红肉或动物血，育龄女性尤其可关注。",
          "植物性高铁餐搭配富含维生素 C 的蔬菜或水果。",
          "菠菜焯水 30 秒后再烹调，减少草酸。",
          "茶和咖啡避免紧邻高铁餐饮用；间隔 1–2 小时更合适。",
        ],
        callout: { type: "caution", text: "贫血有多种原因，并非都由缺铁引起。出现乏力、头晕、心悸等症状应就医检查，不自行长期服用铁剂。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“菠菜是补铁最佳食物”：吸收率不高，且需考虑草酸。",
          "“铁剂越多越好”：过量铁有毒性，尤其儿童需远离成人铁剂。",
          "“素食一定缺铁”：规划得当可满足，但需要关注吸收促进因素。",
          "“铁锅炒菜能治疗贫血”：迁出的铁有限且不稳定。",
        ],
      },
    ],
    references: [
      { title: "NIH ODS – Iron Fact Sheet", publisher: "NIH", url: "https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/" },
      { title: "Harvard Nutrition Source – Iron", publisher: "Harvard University", url: "https://www.hsph.harvard.edu/nutritionsource/iron/" },
    ],
    related: [{ label: "菠菜", href: "/foods/spinach" }, { label: "瘦牛肉", href: "/foods/beef-lean" }, { label: "矿物质", href: "/nutrients/minerals" }, { label: "扁豆番茄炖菜", href: "/recipes/lentil-stew" }],
  }),
  buildArticle({
    slug: "sodium-salt", title: "钠与盐：看懂标签里的隐形盐", subtitle: "1 g 钠 ≈ 2.5 g 盐，这个换算怎么用",
    summary: "食盐是钠的主要来源，但酱油、加工肉、零食和面包也贡献大量钠。理解钠盐换算与标签口径，是控盐的第一步。",
    category: "食品标签", tags: ["钠", "盐", "血压"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-24", readingMinutes: 9, illustration: "label",
    keyPoints: [
      "食盐（氯化钠）中钠约占 40%，换算公式：盐(g) ≈ 钠(g) × 2.5。",
      "中国居民膳食指南建议成年人每天食盐 <5 g。",
      "看标签时先确认是“每 100 g”还是“每份”，再计算实际摄入。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "很多人做菜已经少放盐，但血压仍居高不下，原因可能在酱油、蚝油、咸菜、火腿、薯片和面包。钠摄入过高与血压升高相关，减少钠摄入是有充分证据的公共健康策略。",
          "低钠盐并非人人适用：肾功能不全、高钾血症或服用保钾类药物的人群需医生评估。",
        ],
      },
      {
        id: "science", heading: "换算与标签",
     
        bullets: [
          "1 g 钠 ≈ 2.5 g 食盐；400 mg 钠 ≈ 1 g 盐。",
          "营养成分表通常标示“钠”，单位 mg/100 g 或 mg/100 ml。",
          "NRV% 以成人每日 2000 mg 钠为参考，不代表个体目标。",
          "“低钠”产品可能用钾盐替代，需关注钾摄入禁忌。",
        ],
        table: {
          head: ["食品", "钠（示例）", "换算食盐", "提示"],
          rows: [
            ["生抽酱油", "约 5500 mg/100 g", "约 13.7 g", "1 汤匙约 15 ml ≈ 2–3 g 盐"],
            ["切片面包", "约 400 mg/100 g", "约 1 g", "吃 2 片即需计入"],
            ["原味坚果", "低（无盐款）", "接近 0", "选无盐"],
            ["火腿肠", "约 1000 mg/100 g", "约 2.5 g", "加工肉需限量"],
          ],
        },
      },
      {
        id: "practice", heading: "如何减盐",
        steps: [
          "用限盐勺；把家庭每日用盐量控制在 5 g/人以内。",
          "酱油、蚝油入菜后减少额外加盐。",
          "用葱姜蒜、醋、柠檬、香料替代部分盐。",
          "购买包装食品时比较同类产品的钠含量，选择较低者。",
        ],
        callout: { type: "tip", text: "尝试工具：食品标签解读器可自动换算钠与食盐，并区分每份与每 100 g。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“低钠盐更健康，人人都能换”：肾病与高钾风险人群不适用。",
          "“海盐比食盐钠少”：按重量计钠含量相近。",
          "“不咸就不含钠”：有些钠盐味道并不明显。",
          "“出汗多必须喝盐水”：普通日常出汗通过正常饮食即可补充。",
        ],
      },
    ],
    references: [
      { title: "WHO – Salt reduction", publisher: "WHO", url: "https://www.who.int/news-room/fact-sheets/detail/salt-reduction" },
      { title: "SSaSS 低钠盐研究解读", publisher: "Nutri Life", url: "/nutrition-research/salt-substitution" },
    ],
    related: [{ label: "酱油", href: "/foods/soy-sauce" }, { label: "食品标签解读", href: "/food-labels" }, { label: "标签解读器", href: "/tools/food-label-reader" }, { label: "心血管健康", href: "/nutrition-health/cardiovascular" }],
  }),
  buildArticle({
    slug: "added-sugar", title: "添加糖与游离糖：名字不同，重点在总量和来源", subtitle: "从配料表找出糖的多种别名",
    summary: "添加糖是加工或烹调中额外加入的糖；WHO 使用“游离糖”概念。无论叫什么，控制总量、减少液体糖摄入都是核心建议。",
    category: "食品标签", tags: ["添加糖", "游离糖", "标签"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-26", readingMinutes: 9, illustration: "label",
    keyPoints: [
      "WHO 建议成人游离糖摄入低于总能量的 10%，最好低于 5%。",
      "中国居民膳食指南建议添加糖最好控制在 25 g 以下。",
      "配料表中的糖有多种名称，位置越靠前用量越大。",
    ],
    sections: [
      {
        id: "why", heading: "为什么重要",
        paragraphs: [
          "糖并非毒物，问题在于现代食品体系让糖变得便宜、隐蔽且容易过量。一瓶 500 ml 含糖饮料可能含 50 g 糖，已经接近或超过每日建议上限。",
          "完整水果中的糖与添加糖在食物基质、摄入速度和伴随营养素上不同，但并不意味着可以无限吃水果。",
        ],
      },
      {
        id: "science", heading: "概念辨析",
     
        bullets: [
          "游离糖：单糖和双糖，以及蜂蜜、糖浆、果汁中天然存在的糖；不包括完整水果和蔬菜细胞内的糖，也不包括牛奶中的乳糖。",
          "添加糖：加工或烹调中额外加入的糖和糖浆。",
          "总糖：食品中全部单糖与双糖，包括天然存在和添加的部分。",
          "配料表常见名称：白砂糖、果葡糖浆、麦芽糖浆、葡萄糖、蜂蜜、浓缩果汁、红糖。",
        ],
        table: {
          head: ["产品", "含糖特点", "建议"],
          rows: [
            ["含糖碳酸饮料", "约 10 g/100 ml", "尽量用水替代"],
            ["100% 果汁", "天然游离糖浓缩", "每日一小杯为限"],
            ["风味酸奶", "常含添加糖", "选原味"],
            ["完整水果", "糖 + 纤维 + 微量营养素", "每日 200–350 g"],
          ],
        },
      },
      {
        id: "practice", heading: "如何减少添加糖",
        steps: [
          "把含糖饮料替换成白水、气泡水或淡茶。",
          "买酸奶、麦片、咖啡饮品时看每 100 g 糖含量与配料表。",
          "烹饪减糖采用渐进法，每两周减少一点，让味觉适应。",
          "用水果、肉桂、香草替代部分甜味。",
        ],
        callout: { type: "caution", text: "儿童、糖尿病患者与体重管理人群更需控制含糖饮料；但不应采取“完全禁止某类食物”的极端做法。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“无糖食品完全不含碳水”：可能仍含淀粉或甜味剂。",
          "“红糖比白糖营养”：微量矿物质差异很小。",
          "“蜂蜜是健康糖，可以多吃”：仍是游离糖。",
          "“代糖可以随便吃”：合规使用下安全，但不等于鼓励无限摄入甜食。",
        ],
      },
    ],
    references: [
      { title: "WHO – Sugar intake for adults and children", publisher: "WHO", url: "https://www.who.int/publications/i/item/9789241549028" },
      { title: "含糖饮料与体重 Meta 分析", publisher: "Nutri Life", url: "/nutrition-research/ssb-meta" },
    ],
    related: [{ label: "含糖碳酸饮料", href: "/foods/soda" }, { label: "完整水果与果汁", href: "/articles/whole-fruit-vs-juice" }, { label: "食品标签", href: "/food-labels" }, { label: "标签解读器", href: "/tools/food-label-reader" }],
  }),
  buildArticle({
    slug: "food-labels-basics", title: "看懂营养成分表：五分钟学会关键读数", subtitle: "从能量、蛋白质到 NRV%，标签到底在说什么",
    summary: "营养成分表有固定格式。先确认计量单位，再看能量与关键营养素，最后结合配料表和食用份量判断。",
    category: "食品标签", tags: ["标签", "NRV", "能量"], author: "Nutri Life 编辑部",
    updatedAt: "2026-10-28", readingMinutes: 10, featured: true, illustration: "label",
    keyPoints: [
      "先看单位：每 100 g、每 100 ml 还是每份。",
      "能量单位 kJ ÷ 4.184 ≈ kcal；蛋白质/脂肪/碳水有固定换算系数。",
      "NRV% 是成人参考值百分比，不等于你的个人目标。",
    ],
    sections: [
      {
        id: "why", heading: "为什么值得学",
        paragraphs: [
          "看懂食品标签，比记住一百条饮食禁忌更实用。它让你能在超市里直接比较同类产品，识别营销话术，并把“少糖少盐”变成可核对的数字。",
          "标签不是完美信息：它允许一定误差，也不直接说明食物加工程度。因此配料表与营养成分表要一起看。",
        ],
      },
      {
        id: "science", heading: "关键读数",
        bullets: [
          "能量：kJ 与 kcal 换算，1 kcal ≈ 4.184 kJ。",
          "蛋白质、脂肪、碳水化合物：通常标记为 g/100 g。",
          "钠：mg；钠 × 2.5 ≈ 食盐 mg。",
          "NRV%：营养素参考值百分比，基于成人每日参考摄入量。",
          "配料表：按投料量递减排列，前三位最有参考价值。",
        ],
        table: {
          head: ["标签写法", "实际含义", "常见陷阱"],
          rows: [
            ["每份 15 g", "整包可能含多份", "整包吃完按倍数计算"],
            ["0 糖", "糖低于标准限值", "可能仍有淀粉"],
            ["高蛋白", "需看每 100 g 和能量", "可能同时高糖高脂"],
            ["无反式脂肪", "每份可能低于标示阈值", "查看配料表氢化油"],
          ],
        },
      },
      {
        id: "practice", heading: "五步读标签",
     
        steps: [
          "确认计量口径：每 100 g 还是每份。",
          "看能量与预计食用量的乘积。",
          "看蛋白质、脂肪（含饱和脂肪）、碳水（含糖）、钠。",
          "读配料表前三名与添加剂、过敏原提示。",
          "与同类产品横向比较，选择更适合目标的款式。",
        ],
        callout: { type: "case", text: "案例：饼干标“每份 30 g，能量 600 kJ”，整包 300 g。若一次吃完 10 份，能量约 6000 kJ（约 1434 kcal），相当于成人一天能量需求的大部分。" },
      },
      {
        id: "myths", heading: "常见误区",
        bullets: [
          "“NRV% 越高越好”：对钠和糖而言，高 NRV% 是需要警惕的信号。",
          "“配料表长一定不健康”：添加剂不等于有害，关键看种类与用量。",
          "“进口食品标签更可靠”：不同国家法规不同，仍需按本地标签理解。",
          "“营养成分表数字绝对精确”：法规允许合理误差。",
        ],
      },
    ],
    references: [cnsoc, { title: "GB 28050 预包装食品营养标签通则", publisher: "国家卫生健康委员会", url: "http://www.nhc.gov.cn/" }],
    related: [{ label: "食品标签栏目", href: "/food-labels" }, { label: "标签解读器", href: "/tools/food-label-reader" }, { label: "钠与盐", href: "/articles/sodium-salt" }, { label: "添加糖", href: "/articles/added-sugar" }],
  }),
];

export default articlesA;
