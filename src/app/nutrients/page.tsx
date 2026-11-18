import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, SectionHeading, Breadcrumbs } from "@/components/layout/page-header";
import { nutrients } from "@/data/nutrients";
import { articles } from "@/content/articles";
import { ArticleCard } from "@/components/content/cards";
import { Illustration } from "@/components/illustrations";
import { Badge, Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "营养素总览", description: "六大营养素独立知识库：定义、功能、食物来源、缺乏与过量、摄入依据、吸收利用、常见误区与实践建议。", path: "/nutrients" });

export default function NutrientsPage() {
  const deep = articles.filter((a) => ["omega3-omega6", "essential-amino-acids", "fat-vs-water-soluble-vitamins", "iron-absorption", "electrolytes", "fiber-guide"].includes(a.slug));
  return (
    <>
      <PageHeader eyebrow="Nutrients" title="营养素总览" description="六大营养素，每个都有完整的知识路径：它是什么、做什么、从哪里来、吃多少、缺了或多了会怎样。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "营养素" }]} />
        <section className="grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-4 sm:grid-cols-2">
            {nutrients.map((n) => (
              <Link key={n.slug} href={`/nutrients/${n.slug}`} className="group">
                <Card className="h-full p-5 hover:border-forest/30 hover:shadow-lift">
                  <div className="mb-3 flex items-center justify-between"><Badge tone="forest">{n.group}</Badge><span className="text-[11px] text-muted">{n.readingMinutes} 分钟</span></div>
                  <h2 className="font-serif text-xl group-hover:text-forest">{n.title}</h2>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/70">{n.summary}</p>
                  <div className="mt-4 flex items-center gap-1 text-xs text-forest">查看完整知识页 <ArrowUpRight className="h-3.5 w-3.5" /></div>
                </Card>
              </Link>
            ))}
          </div>
          <Illustration name="sixNutrients" className="h-fit w-full rounded-card bg-white" />
        </section>
        <section className="mt-16">
          <SectionHeading eyebrow="Subtopics" title="进一步了解" description="必需氨基酸、不饱和脂肪酸、脂溶性与水溶性维生素、常见矿物质等细分主题。" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{deep.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
        </section>
      </div>
    </>
  );
}
