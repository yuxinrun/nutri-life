import type { Metadata } from "next";
import { PageHeader, Breadcrumbs } from "@/components/layout/page-header";
import { ResearchBrowser } from "@/components/filters/content-browser";
import { Illustration } from "@/components/illustrations";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "营养研究解读", description: "研究问题、设计、对象、结果、局限、证据等级与原始论文链接，帮助读者读懂营养研究。", path: "/nutrition-research" });

export default function NutritionResearchPage() {
  return (
    <>
      <PageHeader eyebrow="Nutrition Research" title="营养研究" description="读懂研究，比记住结论更重要。每篇解读都包含研究设计、主要结果、局限与可追溯的原始资料。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "营养研究" }]} />
        <div className="mb-10 flex justify-center"><Illustration name="evidence" className="w-full max-w-2xl rounded-card bg-white" /></div>
        <ResearchBrowser />
      </div>
    </>
  );
}
