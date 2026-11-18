import type { Metadata } from "next";
import { PageHeader, Breadcrumbs } from "@/components/layout/page-header";
import { ContentSections } from "@/components/content/sections";
import { pageMetadata } from "@/lib/seo";
import type { ContentSection } from "@/types";

export const metadata = pageMetadata({ title: "内容编辑与科学审核原则", description: "Nutri Life 的内容生产流程、证据标准、数据口径与安全边界。", path: "/editorial-policy" });

const sections: ContentSection[] = [
  { id: "mission", heading: "我们的目标", paragraphs: ["提供准确、可读、可执行且不夸大功效的中文营养科普。内容面向一般成年人，不替代个体化医疗建议。"] },
  { id: "sources", heading: "资料优先级", bullets: ["第一优先：权威机构指南与官方标准（WHO、FAO、中国营养学会、国家卫健委、NIH、EFSA 等）。", "第二优先：系统综述、Meta 分析与专业学会立场声明。", "第三优先：设计合理的随机对照试验与大型前瞻性队列研究。", "谨慎使用：单篇小规模研究、动物实验、细胞实验与专家个人观点，只能用于说明机制或提出假设。"], callout: { type: "science", text: "任何内容不得把动物实验直接表述为人体结论，也不得把单篇研究描述为科学共识。" } },
  { id: "data", heading: "营养数据口径", bullets: ["食物营养数据必须标注来源、单位、生熟状态、干湿状态、可食部分与计量口径。", "不同数据库的数据不直接混合；若必须并列，需逐条说明来源。", "食谱营养值标注为“计算估算”，不伪装成实验室检测。", "引用指南摄入量时说明适用人群、地区标准与版本年份。"] },
  { id: "claims", heading: "表述红线", bullets: ["不承诺治愈或预防特定疾病。", "不鼓励极端节食、断食或不合理的食物限制。", "不随意推荐膳食补充剂，不暗示补充剂可替代正常饮食或药物。", "不建议使用未经证实的“排毒”“增强免疫到最强”等营销表述。", "对孕妇、儿童、老年人、慢性病患者提供谨慎提示。"] },
  { id: "structure", heading: "文章结构标准", steps: ["先给结论，再解释为什么重要。", "说明科学原理与关键知识点。", "给出真实生活场景与具体操作步骤。", "列出常见误区与替代方案。", "提供可执行行动清单和参考资料。"] },
  { id: "review", heading: "修订与纠错", paragraphs: ["每篇内容标注更新日期。发现事实错误时，我们会修正正文并记录日期；重大修订会在参考资料区说明。", "如发现可疑内容，请通过联系我们页面反馈，并附上来源链接或文献信息。"] },
];

export default function EditorialPolicyPage() {
  return (
    <>
      <PageHeader eyebrow="Editorial Policy" title="内容编辑与科学审核原则" description="我们如何选题、如何引用证据、如何处理数据，以及哪些话绝对不说。" />
      <div className="container-page"><Breadcrumbs items={[{ label: "编辑与审核原则" }]} /><div className="max-w-prose py-10"><ContentSections sections={sections} /></div></div>
    </>
  );
}
