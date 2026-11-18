import * as React from "react";

type IllustrationProps = { className?: string; title?: string };

const C = {
  ink: "#26332B",
  forest: "#244C3A",
  sage: "#A6B59A",
  sand: "#F0EBDD",
  apricot: "#D99452",
  cream: "#FAF9F5",
  line: "#D9D4C5",
};

function Frame({
  title,
  className,
  children,
}: IllustrationProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 640 360"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <rect width="640" height="360" rx="18" fill={C.cream} />
      {children}
    </svg>
  );
}

function Tag({ x, y, text, fill = C.forest }: { x: number; y: number; text: string; fill?: string }) {
  const width = Math.max(62, text.length * 13 + 24);
  return (
    <g>
      <rect x={x} y={y - 16} width={width} height="30" rx="15" fill={fill} opacity="0.92" />
      <text x={x + width / 2} y={y + 4} textAnchor="middle" fontSize="13" fill="#fff">
        {text}
      </text>
    </g>
  );
}

export function HeroArt({ className }: IllustrationProps) {
  return (
    <svg viewBox="0 0 720 620" className={className} role="img" aria-label="健康餐盘与新鲜食材插画">
      <title>健康餐盘与新鲜食材插画</title>
      <rect width="720" height="620" rx="28" fill="#EDE7D7" />
      <circle cx="370" cy="305" r="235" fill="#F7F4EA" />
      <circle cx="370" cy="305" r="205" fill="#FFFFFF" stroke="#D9D4C5" strokeWidth="2" />
      <circle cx="370" cy="305" r="185" fill="#F3EFE4" />
      <path d="M370 120 A185 185 0 0 1 555 305 L370 305 Z" fill="#BFD0B3" />
      <path d="M370 120 A185 185 0 0 0 185 305 L370 305 Z" fill="#E8B77E" opacity="0.75" />
      <path d="M370 305 L555 305 A185 185 0 0 1 370 490 Z" fill="#9BAF8E" />
      <path d="M370 305 L185 305 A185 185 0 0 0 370 490 Z" fill="#F5F1E6" />
      <g stroke={C.forest} strokeWidth="3" fill="none" strokeLinecap="round">
        <path d="M280 235c18-24 44-30 60-18 14 11 8 36-14 48-24 13-50 4-56-12-3-8 2-14 10-18Z" fill="#6F9465" />
        <path d="M430 215c20-16 48-14 62 2 12 14 2 38-20 44-26 7-50-5-52-22-1-10 4-18 10-24Z" fill="#8BAE78" />
        <path d="M452 375c26-12 52-2 58 18 6 19-12 36-36 34-24-2-40-20-34-36 2-8 6-13 12-16Z" fill="#C97D4C" />
        <path d="M255 380c22-18 52-16 66 2 12 16 2 40-22 46-26 6-52-8-54-26-1-9 4-17 10-22Z" fill="#D99452" />
      </g>
      <g fill={C.forest} fontSize="19" fontFamily="sans-serif">
        <text x="515" y="150">蔬菜与水果</text>
        <text x="92" y="150">全谷物</text>
        <text x="512" y="525">优质蛋白</text>
        <text x="120" y="525" fill="#6B7A70">饮水与清淡烹调</text>
      </g>
      <g fill="#6B7A70" fontSize="14" fontFamily="sans-serif">
        <text x="515" y="174">约 1/2 餐盘</text>
        <text x="92" y="174">约 1/4 餐盘</text>
        <text x="512" y="549">约 1/4 餐盘</text>
      </g>
      <circle cx="632" cy="80" r="30" fill="#D99452" opacity="0.9" />
      <circle cx="72" cy="520" r="18" fill="#A6B59A" />
    </svg>
  );
}

export function SixNutrients({ className }: IllustrationProps) {
  const items = [
    { x: 320, y: 58, t: "碳水化合物", d: "主要供能" },
    { x: 92, y: 130, t: "蛋白质", d: "结构与修复" },
    { x: 548, y: 130, t: "脂肪", d: "储能与信号" },
    { x: 92, y: 270, t: "维生素", d: "代谢调节" },
    { x: 548, y: 270, t: "矿物质", d: "结构与电解质" },
    { x: 320, y: 320, t: "水", d: "生命反应介质" },
  ];
  return (
    <Frame title="六大营养素结构图" className={className}>
      <circle cx="320" cy="190" r="62" fill={C.forest} />
      <text x="320" y="184" textAnchor="middle" fontSize="18" fill={C.cream}>营养素</text>
      <text x="320" y="208" textAnchor="middle" fontSize="12" fill={C.sage}>6 大类</text>
      {items.map((i) => (
        <g key={i.t}>
          <line x1="320" y1="190" x2={i.x} y2={i.y} stroke={C.line} strokeWidth="2" />
          <rect x={i.x - 82} y={i.y - 30} width="164" height="60" rx="14" fill="#fff" stroke={C.line} />
          <text x={i.x} y={i.y - 4} textAnchor="middle" fontSize="14" fill={C.ink}>{i.t}</text>
          <text x={i.x} y={i.y + 17} textAnchor="middle" fontSize="11" fill={C.sage}>{i.d}</text>
        </g>
      ))}
    </Frame>
  );
}

export function CarbsClassification({ className }: IllustrationProps) {
  return (
    <Frame title="碳水化合物分类图" className={className}>
      <Tag x={40} y={46} text="碳水化合物" />
      <g stroke={C.line} strokeWidth="2" fill="none">
        <path d="M110 62v40H70v28M110 62v40h240v28" />
      </g>
      {[
        { x: 40, t: "单糖", d: "葡萄糖、果糖\n半乳糖" },
        { x: 230, t: "双糖", d: "蔗糖、乳糖\n麦芽糖" },
        { x: 420, t: "多糖", d: "淀粉、糖原\n膳食纤维" },
      ].map((i) => (
        <g key={i.t}>
          <rect x={i.x} y={132} width="180" height="110" rx="16" fill="#fff" stroke={C.line} />
          <text x={i.x + 90} y={162} textAnchor="middle" fontSize="16" fill={C.forest}>{i.t}</text>
          {i.d.split("\n").map((line, idx) => (
            <text key={line} x={i.x + 90} y={192 + idx * 22} textAnchor="middle" fontSize="13" fill={C.ink}>
              {line}
            </text>
          ))}
        </g>
      ))}
      <rect x="40" y="270" width="560" height="58" rx="14" fill={C.sand} />
      <text x="320" y="294" textAnchor="middle" fontSize="14" fill={C.forest}>
        “添加糖”描述的是加工中加入的糖，不等于食物天然含有的全部糖
      </text>
      <text x="320" y="316" textAnchor="middle" fontSize="12" fill="#6B7A70">
        判断优先级：整体食物结构 &gt; 单一糖分子名称
      </text>
    </Frame>
  );
}

export function ProteinAminoAcid({ className }: IllustrationProps) {
  const dots = ["A", "E", "L", "K", "R", "V", "I", "T"];
  return (
    <Frame title="蛋白质与氨基酸结构示意" className={className}>
      <text x="40" y="48" fontSize="16" fill={C.forest}>食物蛋白质</text>
      <path d="M40 76h130" stroke={C.line} strokeWidth="2" strokeDasharray="5 5" />
      <text x="210" y="48" fontSize="16" fill={C.forest}>消化分解为氨基酸</text>
      <path d="M260 76h110" stroke={C.line} strokeWidth="2" strokeDasharray="5 5" />
      <text x="400" y="48" fontSize="16" fill={C.forest}>按基因指令重新组装</text>
      {dots.map((d, idx) => (
        <g key={d}>
          <circle cx={70 + idx * 66} cy={150} r="22" fill={idx % 3 === 0 ? C.sage : C.sand} />
          <text x={70 + idx * 66} y={156} textAnchor="middle" fontSize="14" fill={C.ink}>{d}</text>
          {idx < dots.length - 1 ? (
            <line x1={94 + idx * 66} y1="150" x2={136 + idx * 66} y2="150" stroke={C.apricot} strokeWidth="3" />
          ) : null}
        </g>
      ))}
      <rect x="40" y="212" width="270" height="106" rx="16" fill="#fff" stroke={C.line} />
      <text x="60" y="240" fontSize="14" fill={C.forest}>必需氨基酸（9 种）</text>
      <text x="60" y="266" fontSize="12" fill={C.ink}>人体不能合成，必须从食物获得</text>
      <text x="60" y="292" fontSize="12" fill={C.ink}>亮氨酸、赖氨酸、色氨酸等</text>
      <rect x="330" y="212" width="270" height="106" rx="16" fill="#fff" stroke={C.line} />
      <text x="350" y="240" fontSize="14" fill={C.forest}>“完全蛋白”不是必需说法</text>
      <text x="350" y="266" fontSize="12" fill={C.ink}>多种植物蛋白互补即可覆盖需要</text>
      <text x="350" y="292" fontSize="12" fill={C.ink}>关键是全天总量与饮食模式</text>
    </Frame>
  );
}

export function FattyAcids({ className }: IllustrationProps) {
  return (
    <Frame title="脂肪酸分类图" className={className}>
      <Tag x={40} y={48} text="脂肪" />
      <g stroke={C.line} strokeWidth="2" fill="none">
        <path d="M105 64v34H65v28M105 64v34h250v28" />
      </g>
      <g>
        <rect x="40" y="128" width="250" height="94" rx="16" fill="#fff" stroke={C.line} />
        <text x="60" y="156" fontSize="15" fill={C.forest}>饱和脂肪酸</text>
        <text x="60" y="182" fontSize="12" fill={C.ink}>碳链无双键，常温下多为固态</text>
        <text x="60" y="206" fontSize="12" fill={C.ink}>建议限制，而非完全禁止</text>
      </g>
      <g>
        <rect x="315" y="128" width="285" height="94" rx="16" fill="#fff" stroke={C.line} />
        <text x="335" y="156" fontSize="15" fill={C.forest}>不饱和脂肪酸</text>
        <text x="335" y="182" fontSize="12" fill={C.ink}>单不饱和：橄榄油、牛油果</text>
        <text x="335" y="206" fontSize="12" fill={C.ink}>多不饱和：Omega-3 / Omega-6</text>
      </g>
      <rect x="40" y="250" width="560" height="72" rx="16" fill={C.sand} />
      <text x="60" y="278" fontSize="14" fill={C.forest}>反式脂肪：尽少量摄入</text>
      <text x="60" y="304" fontSize="12" fill={C.ink}>
        主要来自部分氢化油脂与反复高温加工；配料表出现“氢化/起酥油”需留意
      </text>
    </Frame>
  );
}

export function Vitamins({ className }: IllustrationProps) {
  return (
    <Frame title="维生素分类图" className={className}>
      <rect x="40" y="42" width="270" height="220" rx="18" fill="#fff" stroke={C.line} />
      <rect x="330" y="42" width="270" height="220" rx="18" fill="#fff" stroke={C.line} />
      <text x="175" y="78" textAnchor="middle" fontSize="17" fill={C.forest}>脂溶性</text>
      <text x="465" y="78" textAnchor="middle" fontSize="17" fill={C.forest}>水溶性</text>
      {["A 视觉与上皮", "D 钙代谢与骨骼", "E 抗氧化", "K 凝血相关"].map((t, i) => (
        <text key={t} x="64" y={116 + i * 34} fontSize="13" fill={C.ink}>• {t}</text>
      ))}
      {["B 族 能量代谢", "C 胶原合成与铁吸收", "泛酸、生物素等"].map((t, i) => (
        <text key={t} x="354" y={116 + i * 38} fontSize="13" fill={C.ink}>• {t}</text>
      ))}
      <rect x="40" y="288" width="560" height="46" rx="12" fill={C.sand} />
      <text x="320" y="317" textAnchor="middle" fontSize="13" fill={C.ink}>
        脂溶性可在体内储存，过量风险更值得关注；水溶性也并非“越多越好”
      </text>
    </Frame>
  );
}

export function Minerals({ className }: IllustrationProps) {
  const items = [
    ["钙", "骨骼牙齿、神经传导", "奶类、豆制品、绿叶菜"],
    ["铁", "血红蛋白与氧运输", "红肉、动物血、贝类、豆类"],
    ["镁", "酶反应与肌肉功能", "坚果、全谷、绿叶菜"],
    ["锌", "免疫与伤口愈合", "贝类、瘦肉、种子"],
    ["钾", "体液平衡与血压", "蔬果、薯类、豆类"],
    ["碘", "甲状腺激素合成", "碘盐、海产品"],
  ];
  return (
    <Frame title="常见矿物质及其作用" className={className}>
      {items.map(([name, role, source], i) => {
        const x = 40 + (i % 3) * 195;
        const y = 40 + Math.floor(i / 3) * 145;
        return (
          <g key={name}>
            <rect x={x} y={y} width="178" height="126" rx="16" fill="#fff" stroke={C.line} />
            <circle cx={x + 32} cy={y + 30} r="16" fill={i % 2 ? C.apricot : C.sage} />
            <text x={x + 32} y={y + 35} textAnchor="middle" fontSize="14" fill="#fff">{name}</text>
            <text x={x + 16} y={y + 72} fontSize="12" fill={C.ink}>{role}</text>
            <text x={x + 16} y={y + 100} fontSize="11" fill="#6B7A70">{source}</text>
          </g>
        );
      })}
    </Frame>
  );
}

export function DigestionFlow({ className }: IllustrationProps) {
  const steps = ["口腔\n咀嚼与淀粉酶", "胃\n酸性环境与蛋白酶", "小肠\n主要吸收场所", "大肠\n水分与菌群发酵"];
  return (
    <Frame title="人体消化与吸收流程图" className={className}>
      {steps.map((s, i) => (
        <g key={s}>
          <rect x={32 + i * 150} y="120" width="130" height="96" rx="18" fill={i === 2 ? C.forest : "#fff"} stroke={C.line} />
          {s.split("\n").map((line, idx) => (
            <text
              key={line}
              x={97 + i * 150}
              y={152 + idx * 26}
              textAnchor="middle"
              fontSize={idx === 0 ? 15 : 12}
              fill={i === 2 ? C.cream : C.ink}
            >
              {line}
            </text>
          ))}
          {i < 3 ? <path d={`M${164 + i * 150} 168h18`} stroke={C.apricot} strokeWidth="3" /> : null}
        </g>
      ))}
      <rect x="32" y="262" width="576" height="64" rx="14" fill={C.sand} />
      <text x="320" y="288" textAnchor="middle" fontSize="14" fill={C.forest}>吸收进入血液 / 淋巴 → 肝脏代谢 → 全身利用</text>
      <text x="320" y="312" textAnchor="middle" fontSize="12" fill={C.ink}>不同营养素的吸收部位与转运方式不同，不存在“吃哪补哪”的简单映射</text>
    </Frame>
  );
}

export function FiberGut({ className }: IllustrationProps) {
  return (
    <Frame title="膳食纤维与肠道示意图" className={className}>
      <path d="M120 90c90 0 90 60 180 60s90-60 180-60" fill="none" stroke={C.sage} strokeWidth="34" strokeLinecap="round" opacity="0.8" />
      <path d="M120 230c90 0 90 60 180 60s90-60 180-60" fill="none" stroke={C.sand} strokeWidth="34" strokeLinecap="round" />
      <g fill={C.forest} opacity="0.75">
        {Array.from({ length: 18 }).map((_, i) => (
          <circle key={i} cx={145 + (i % 9) * 42} cy={i < 9 ? 90 + Math.sin(i) * 18 : 234 + Math.cos(i) * 16} r={5 + (i % 3)} />
        ))}
      </g>
      <Tag x={40} y={34} text="可溶性纤维" fill="#6F9465" />
      <Tag x={430} y={180} text="不可溶性纤维" fill="#B57A3F" />
      <text x="320" y="338" textAnchor="middle" fontSize="13" fill={C.ink}>
        可溶性纤维被菌群发酵产生短链脂肪酸；不可溶性纤维增加粪便体积、促进通过
      </text>
    </Frame>
  );
}

export function HealthyPlate({ className }: IllustrationProps) {
  return <HeroArt className={className} />;
}

export function ThreeMeals({ className }: IllustrationProps) {
  const meals = [
    ["早餐", "谷物 + 蛋白质 + 果蔬", "燕麦牛奶蛋 / 全麦三明治"],
    ["午餐", "主食 + 蛋白 + 双份蔬菜", "杂粮饭 + 鱼 + 炒时蔬"],
    ["晚餐", "清淡适量、避免过油过晚", "豆腐蔬菜汤 + 少量主食"],
  ];
  return (
    <Frame title="一日三餐搭配图" className={className}>
      {meals.map(([m, s, e], i) => (
        <g key={m}>
          <rect x={36 + i * 200} y="58" width="180" height="230" rx="18" fill="#fff" stroke={C.line} />
          <circle cx={126 + i * 200} cy="106" r="28" fill={i === 1 ? C.forest : C.sage} />
          <text x={126 + i * 200} y="112" textAnchor="middle" fontSize="15" fill="#fff">{m}</text>
          <text x={126 + i * 200} y="164" textAnchor="middle" fontSize="13" fill={C.forest}>{s}</text>
          <text x={126 + i * 200} y="206" textAnchor="middle" fontSize="11" fill={C.ink}>{e.slice(0, 9)}</text>
          <text x={126 + i * 200} y="228" textAnchor="middle" fontSize="11" fill={C.ink}>{e.slice(9) || " "}</text>
        </g>
      ))}
      <text x="320" y="330" textAnchor="middle" fontSize="13" fill={C.ink}>
        一日看整体，不必每餐都“完美”；规律与可持续比单次搭配更重要
      </text>
    </Frame>
  );
}

export function FoodLabel({ className }: IllustrationProps) {
  return (
    <Frame title="食品标签解读图" className={className}>
      <rect x="44" y="36" width="300" height="288" rx="12" fill="#fff" stroke={C.ink} strokeWidth="2" />
      <text x="64" y="70" fontSize="17" fill={C.ink}>营养成分表</text>
      <line x1="64" y1="84" x2="324" y2="84" stroke={C.line} />
      {["项目", "每100克", "NRV%"].map((t, i) => (
        <text key={t} x={70 + i * 90} y="110" fontSize="13" fill={C.forest}>{t}</text>
      ))}
      {[["能量", "1800 kJ", "21%"], ["蛋白质", "8.0 g", "13%"], ["脂肪", "12 g", "20%"], ["碳水化合物", "70 g", "23%"], ["钠", "400 mg", "20%"]].map((row, i) => (
        <g key={row[0]}>
          <text x="70" y={142 + i * 30} fontSize="12" fill={C.ink}>{row[0]}</text>
          <text x="160" y={142 + i * 30} fontSize="12" fill={C.ink}>{row[1]}</text>
          <text x="270" y={142 + i * 30} fontSize="12" fill={C.ink}>{row[2]}</text>
          <line x1="64" y1={152 + i * 30} x2="324" y2={152 + i * 30} stroke={C.line} />
        </g>
      ))}
      <g fontSize="13" fill={C.ink}>
        <text x="390" y="80">① 先看“每份”还是“每100克”</text>
        <text x="390" y="126">② 能量 kJ ÷ 4.184 = kcal</text>
        <text x="390" y="172">③ 钠 × 2.5 ≈ 食盐 mg</text>
        <text x="390" y="218">④ 配料按用量递减排序</text>
        <text x="390" y="264">⑤ NRV 是成人参考值</text>
        <text x="390" y="310" fill={C.apricot}>看标签比记禁忌更实用</text>
      </g>
    </Frame>
  );
}

export function FoodStorage({ className }: IllustrationProps) {
  const steps = [["采购", "先看日期与包装"], ["分类", "生熟分开"], ["冷藏", "0–4℃短期"], ["冷冻", "-18℃长期"], ["复热", "彻底加热"]];
  return (
    <Frame title="食物储存流程图" className={className}>
      {steps.map(([t, d], i) => (
        <g key={t}>
          <rect x={26 + i * 122} y="120" width="106" height="120" rx="16" fill={i % 2 ? "#fff" : C.sand} stroke={C.line} />
          <text x={79 + i * 122} y="164" textAnchor="middle" fontSize="15" fill={C.forest}>{t}</text>
          <text x={79 + i * 122} y="194" textAnchor="middle" fontSize="11" fill={C.ink}>{d.slice(0, 4)}</text>
          <text x={79 + i * 122} y="214" textAnchor="middle" fontSize="11" fill={C.ink}>{d.slice(4)}</text>
          {i < 4 ? <path d={`M${134 + i * 122} 180h14`} stroke={C.apricot} strokeWidth="3" /> : null}
        </g>
      ))}
      <text x="320" y="300" textAnchor="middle" fontSize="13" fill={C.ink}>冷藏不是“保险箱”；熟食建议 3–4 天内食用并充分复热</text>
    </Frame>
  );
}

export function FoodSafety({ className }: IllustrationProps) {
  return (
    <Frame title="食物安全示意图" className={className}>
      <circle cx="320" cy="180" r="118" fill="#fff" stroke={C.line} strokeWidth="2" />
      <circle cx="320" cy="180" r="82" fill={C.sage} opacity="0.3" />
      {[
        ["生熟分开", 72], ["彻底加热", 144], ["及时冷藏", 216], ["清洁操作", 288],
      ].map(([t, deg]) => {
        const rad = ((deg as number) - 90) * Math.PI / 180;
        return (
          <g key={t as string}>
            <circle cx={320 + Math.cos(rad) * 100} cy={180 + Math.sin(rad) * 100} r="6" fill={C.apricot} />
            <text
              x={320 + Math.cos(rad) * 140}
              y={184 + Math.sin(rad) * 140}
              textAnchor="middle"
              fontSize="12"
              fill={C.ink}
            >
              {t as string}
            </text>
          </g>
        );
      })}
      <text x="320" y="176" textAnchor="middle" fontSize="18" fill={C.forest}>食品安全</text>
      <text x="320" y="200" textAnchor="middle" fontSize="12" fill={C.ink}>四道基本防线</text>
    </Frame>
  );
}

export function ProteinSources({ className }: IllustrationProps) {
  const items = [["蛋", "完全蛋白参考"], ["鱼虾", "低脂优质"], ["瘦肉", "铁与锌"], ["豆制品", "植物主力"], ["奶类", "钙与蛋白"], ["坚果", "脂肪+蛋白"]];
  return (
    <Frame title="不同蛋白质食物来源图" className={className}>
      {items.map(([t, d], i) => (
        <g key={t}>
          <rect x={40 + (i % 3) * 195} y={45 + Math.floor(i / 3) * 140} width="176" height="118" rx="18" fill="#fff" stroke={C.line} />
          <circle cx={80 + (i % 3) * 195} cy={88 + Math.floor(i / 3) * 140} r="24" fill={i % 2 ? C.sage : C.apricot} opacity="0.85" />
          <text x={80 + (i % 3) * 195} y={94 + Math.floor(i / 3) * 140} textAnchor="middle" fontSize="15" fill="#fff">{t}</text>
          <text x={112 + (i % 3) * 195} y={94 + Math.floor(i / 3) * 140} fontSize="13" fill={C.forest}>{d}</text>
          <text x={60 + (i % 3) * 195} y={138 + Math.floor(i / 3) * 140} fontSize="11" fill={C.ink}>搭配谷物更均衡</text>
        </g>
      ))}
    </Frame>
  );
}

export function EvidencePyramid({ className }: IllustrationProps) {
  const levels = [
    ["系统综述 / Meta 分析", 420, C.forest],
    ["随机对照试验", 330, "#6F9465"],
    ["队列研究 / 病例对照", 240, C.sage],
    ["横断面 / 个案报告", 150, C.sand],
  ];
  return (
    <Frame title="营养证据等级示意图" className={className}>
      {levels.map(([t, w, fill], i) => (
        <g key={t as string}>
          <rect x={(640 - (w as number)) / 2} y={50 + i * 66} width={w as number} height="52" rx="10" fill={fill as string} />
          <text x="320" y={83 + i * 66} textAnchor="middle" fontSize="14" fill={i > 1 ? C.ink : "#fff"}>{t as string}</text>
        </g>
      ))}
      <text x="320" y="344" textAnchor="middle" fontSize="12" fill={C.ink}>证据等级取决于问题与设计，并非“某研究一定更权威”</text>
    </Frame>
  );
}

export function KnowledgeMap({ className }: IllustrationProps) {
  const nodes = [
    [320, 180, "营养科学"], [140, 90, "食物百科"], [500, 90, "营养素"],
    [140, 280, "健康饮食"], [500, 280, "营养研究"], [320, 60, "食谱"], [320, 310, "健康专题"],
  ];
  return (
    <Frame title="食物营养知识关系图" className={className}>
      {nodes.slice(1).map(([x, y]) => (
        <line key={`${x}-${y}`} x1="320" y1="180" x2={x as number} y2={y as number} stroke={C.line} strokeWidth="2" />
      ))}
      {nodes.map(([x, y, t], i) => (
        <g key={t as string}>
          <circle cx={x as number} cy={y as number} r={i === 0 ? 46 : 36} fill={i === 0 ? C.forest : i % 2 ? C.sage : C.apricot} />
          <text x={x as number} y={(y as number) + 5} textAnchor="middle" fontSize={i === 0 ? 14 : 12} fill={i === 3 ? C.ink : "#fff"}>{t as string}</text>
        </g>
      ))}
    </Frame>
  );
}

export const illustrationMap = {
  hero: HeroArt,
  sixNutrients: SixNutrients,
  carbs: CarbsClassification,
  protein: ProteinAminoAcid,
  fattyAcids: FattyAcids,
  vitamins: Vitamins,
  minerals: Minerals,
  digestion: DigestionFlow,
  fiber: FiberGut,
  plate: HealthyPlate,
  meals: ThreeMeals,
  label: FoodLabel,
  storage: FoodStorage,
  safety: FoodSafety,
  proteinSources: ProteinSources,
  evidence: EvidencePyramid,
  map: KnowledgeMap,
} as const;

export type IllustrationKey = keyof typeof illustrationMap;

export function Illustration({ name, className }: { name: IllustrationKey; className?: string }) {
  const Component = illustrationMap[name] ?? SixNutrients;
  return <Component className={className} title={name} />;
}
