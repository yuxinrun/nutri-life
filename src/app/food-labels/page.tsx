import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, SectionHeading, Breadcrumbs } from "@/components/layout/page-header";
import { GuideCard, ArticleCard } from "@/components/content/cards";
import { Illustration } from "@/components/illustrations";
import { foodLabelGuides } from "@/data/guides";
import { articles } from "@/content/articles";
import { Button } from "@/components/ui/button";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "食品标签与食品安全", description: "营养成分表、能量换算、每份与每100克、糖与钠、配料排序、添加剂、保质期与储存安全。", path: "/food-labels" });

export default function FoodLabelsPage() {
  const deep = articles.filter((a) => a.category === "食品标签" || a.category === "食品安全");
  return (
    <>
      <PageHeader eyebrow="Food Labels & Safety" title="食品标签与食品安全" description="看懂食品标签，比记住一百条饮食禁忌更实用。把包装信息变成可执行的选择。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "食品标签与食品安全" }]} />
        <section className="mb-16 grid items-center gap-8 rounded-card border border-line bg-white/60 p-6 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-2">Interactive Tool</p>
            <h2 className="text-2xl">带上一个包装，试着自己解读</h2>
            <p className="mt-3 text-sm leading-7 text-ink/75">输入标签上的能量、糖、钠和每份重量，工具会完成 kJ/kcal 与钠盐换算，并提示常见陷阱。所有计算在浏览器本地完成。</p>
            <Button asChild className="mt-5"><Link href="/tools/food-label-reader">打开食品标签解读器 <ArrowUpRight className="h-4 w-4" /></Link></Button>
          </div>
          <Illustration name="label" className="w-full rounded-card bg-cream" />
        </section>
        <section className="mb-16">
          <SectionHeading eyebrow="12 个主题" title="标签与安全知识体系" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{foodLabelGuides.map((g) => <GuideCard key={g.slug} guide={g} />)}</div>
        </section>
        <section className="mb-16">
          <SectionHeading eyebrow="Deep Dive" title="相关深度文章" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{deep.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
        </section>
        <Illustration name="safety" className="w-full rounded-card bg-white" />
      </div>
    </>
  );
}
