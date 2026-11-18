import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, SectionHeading, Breadcrumbs } from "@/components/layout/page-header";
import { GuideCard, ArticleCard } from "@/components/content/cards";
import { Illustration } from "@/components/illustrations";
import { nutritionScienceGuides } from "@/data/guides";
import { articles } from "@/content/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "营养科学", description: "系统介绍营养学基础：消化吸收、能量代谢、宏量与微量营养素、膳食纤维、水与肠道微生态。", path: "/nutrition-science" });

export default function NutritionSciencePage() {
  const related = articles.filter((a) => a.category === "营养科学").slice(0, 6);
  return (
    <>
      <PageHeader eyebrow="Nutrition Science" title="营养科学" description="从食物到细胞，建立对营养与代谢的系统理解。这里的每一篇内容都解释“为什么”，而不只是给出“吃什么”。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "营养科学" }]} />
        <section className="mb-16 grid items-center gap-8 rounded-card border border-line bg-white/60 p-6 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow mb-2">知识地图</p>
            <h2 className="text-2xl">营养学不是记忆食物名单</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">它研究人体如何获得和利用能量与营养素，如何用科学方法判断饮食与健康之间的关系。先理解框架，再进入细节，学习效率会高得多。</p>
            <Link href="/articles/digestion-absorption" className="mt-5 inline-flex items-center gap-1 text-sm text-forest hover:underline">从消化吸收开始读 <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <Illustration name="digestion" className="w-full rounded-card bg-cream" />
        </section>
        <section className="mb-16">
          <SectionHeading eyebrow="12 个基础主题" title="营养科学知识体系" description="从基础概念到个体差异，逐步建立完整框架。" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{nutritionScienceGuides.map((g) => <GuideCard key={g.slug} guide={g} />)}</div>
        </section>
        <section className="mb-16">
          <SectionHeading eyebrow="Deep Dive" title="相关深度文章" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{related.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
        </section>
        <section className="grid gap-6 rounded-card border border-line bg-sand/50 p-6 sm:grid-cols-3">
          <Illustration name="sixNutrients" className="w-full rounded-card bg-white" />
          <Illustration name="fiber" className="w-full rounded-card bg-white" />
          <Illustration name="map" className="w-full rounded-card bg-white" />
        </section>
      </div>
    </>
  );
}
