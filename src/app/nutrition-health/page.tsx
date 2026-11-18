import type { Metadata } from "next";
import { PageHeader, SectionHeading, Breadcrumbs } from "@/components/layout/page-header";
import { TopicCard } from "@/components/content/cards";
import { topics } from "@/content/topics";
import { Illustration } from "@/components/illustrations";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "营养与健康专题", description: "心血管、血糖、肠道、骨骼、大脑、免疫、运动、睡眠与健康老龄化九个专题，区分相关性与因果。", path: "/nutrition-health" });

export default function NutritionHealthPage() {
  return (
    <>
      <PageHeader eyebrow="Nutrition & Health" title="营养与健康" description="围绕具体健康议题整理营养证据。我们明确区分相关性与因果关系，不把营养建议包装成疾病治疗方案。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "营养与健康" }]} />
        <div className="mb-10 grid gap-6 lg:grid-cols-[1fr_300px]">
          <div className="rounded-card border border-apricot/40 bg-apricot/10 p-5 text-sm leading-7 text-[#8A5424]">
            <p className="font-medium">阅读前请先知道</p>
            <p className="mt-2">营养可以支持健康与疾病管理，但不能替代诊断、药物或正规治疗。已确诊疾病或正在用药，请先与医生或临床营养师讨论饮食调整。</p>
          </div>
          <Illustration name="map" className="w-full rounded-card bg-white" />
        </div>
        <SectionHeading eyebrow="9 个专题" title="按健康议题浏览" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{topics.map((t) => <TopicCard key={t.slug} topic={t} />)}</div>
      </div>
    </>
  );
}
