import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, SectionHeading, Breadcrumbs } from "@/components/layout/page-header";
import { GuideCard, ArticleCard } from "@/components/content/cards";
import { Illustration } from "@/components/illustrations";
import { healthyEatingGuides } from "@/data/guides";
import { articles } from "@/content/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "健康饮食", description: "均衡饮食、一日三餐搭配、蔬菜与纤维、主食与蛋白质选择、外食购物与体重管理的可执行指南。", path: "/healthy-eating" });

export default function HealthyEatingPage() {
  const deep = articles.filter((a) => ["balanced-diet", "energy-balance", "energy-density", "whole-fruit-vs-juice", "glycemic-index"].includes(a.slug));
  return (
    <>
      <PageHeader eyebrow="Healthy Eating" title="健康饮食" description="落到食材、份量、搭配和替代方案。不追求某一天的完美，而是建立你愿意长期坚持的饮食方式。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "健康饮食" }]} />
        <section className="mb-16 grid items-center gap-8 rounded-card border border-line bg-white/60 p-6 lg:grid-cols-2">
          <Illustration name="plate" className="w-full rounded-card bg-cream" />
          <div>
            <p className="eyebrow mb-2">餐盘法</p>
            <h2 className="text-2xl">一顿饭的结构，比某个食材更重要</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">把餐盘分成四份：一半给蔬菜与水果，四分之一给谷物薯类，四分之一给蛋白质食物。再配合足量饮水与清淡烹调，就是大多数人都能开始的基础框架。</p>
            <Link href="/guides/balance-meal" className="mt-5 inline-flex items-center gap-1 text-sm text-forest hover:underline">阅读均衡饮食指南 <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </section>
        <section className="mb-16">
          <SectionHeading eyebrow="Practical Guides" title="14 个实际场景指南" description="从早餐到外食，从购物清单到习惯养成。" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{healthyEatingGuides.map((g) => <GuideCard key={g.slug} guide={g} />)}</div>
        </section>
        <section>
          <SectionHeading eyebrow="Deep Dive" title="相关深度文章" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{deep.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
        </section>
      </div>
    </>
  );
}
