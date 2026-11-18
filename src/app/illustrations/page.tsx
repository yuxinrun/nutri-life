import type { Metadata } from "next";
import { PageHeader, Breadcrumbs, SectionHeading } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { Illustration, illustrationMap, type IllustrationKey } from "@/components/illustrations";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "原创科普插画", description: "统一风格的原创 SVG 营养科普插画库。", path: "/illustrations" });

const labels: Record<IllustrationKey, string> = {
  hero: "健康餐盘与新鲜食材",
  sixNutrients: "六大营养素结构图",
  carbs: "碳水化合物分类图",
  protein: "蛋白质与氨基酸结构示意",
  fattyAcids: "脂肪酸分类图",
  vitamins: "维生素分类图",
  minerals: "常见矿物质及其作用",
  digestion: "人体消化与吸收流程图",
  fiber: "膳食纤维与肠道示意图",
  plate: "健康餐盘示意图",
  meals: "一日三餐搭配图",
  label: "食品标签解读图",
  storage: "食物储存流程图",
  safety: "食物安全示意图",
  proteinSources: "不同蛋白质食物来源图",
  evidence: "营养证据等级示意图",
  map: "食物营养知识关系图",
};

export default function IllustrationsPage() {
  return (
    <>
      <PageHeader eyebrow="Illustrations" title="原创科普插画" description="统一色彩与线条风格的 SVG 图解。可复用、可缩放，使复杂营养概念更容易理解。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "科普插画" }]} />
        <SectionHeading eyebrow={`${Object.keys(illustrationMap).length} 幅插画`} title="图解营养知识" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(Object.keys(illustrationMap) as IllustrationKey[]).map((key) => (
            <Card key={key} className="overflow-hidden p-4">
              <Illustration name={key} className="w-full rounded-lg bg-cream" />
              <p className="mt-3 text-sm font-medium text-forest">{labels[key]}</p>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
