import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { nutrients, getNutrient } from "@/data/nutrients";
import { articles } from "@/content/articles";
import { foods } from "@/data/foods";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/page-header";
import { ContentSections } from "@/components/content/sections";
import { ReadingProgress, RelatedLinks, TableOfContents } from "@/components/content/article-extras";
import { ArticleCard, FoodCard } from "@/components/content/cards";
import { formatDate } from "@/lib/utils";
import { Illustration } from "@/components/illustrations";
import { Badge } from "@/components/ui/card";

export function generateStaticParams() {
  return nutrients.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const nutrient = getNutrient(params.slug);
  if (!nutrient) return {};
  return pageMetadata({ title: `${nutrient.title}｜营养素知识库`, description: nutrient.summary, path: `/nutrients/${nutrient.slug}` });
}

export default function NutrientPage({ params }: { params: { slug: string } }) {
  const nutrient = getNutrient(params.slug);
  if (!nutrient) notFound();
  const relatedArticles = articles.filter((a) => a.tags.some((t) => nutrient.tags.includes(t))).slice(0, 3);
  const relatedFoods = foods.filter((f) => f.tags.some((t) => nutrient.tags.includes(t))).slice(0, 3);
  return (
    <>
      <ReadingProgress />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "营养素", href: "/nutrients" }, { label: nutrient.title }]} />
        <header className="grid gap-8 border-b border-line pb-10 pt-4 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-4 flex flex-wrap gap-2"><Badge tone="forest">{nutrient.group}</Badge>{nutrient.aliases.map((a) => <Badge key={a}>{a}</Badge>)}</div>
            <h1 className="text-3xl sm:text-4xl">{nutrient.title}</h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">{nutrient.subtitle}</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/70">{nutrient.summary}</p>
            <p className="mt-5 text-xs text-muted">更新于 {formatDate(nutrient.updatedAt)} · 约 {nutrient.readingMinutes} 分钟</p>
          </div>
          <Illustration name={(nutrient.illustration as "carbs") ?? "sixNutrients"} className="w-full rounded-card bg-white" />
        </header>
        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="max-w-prose">
            <ContentSections sections={nutrient.sections} />
            {relatedFoods.length ? (
              <section className="mt-12">
                <h2 className="mb-5 text-2xl">相关食物</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{relatedFoods.map((f) => <FoodCard key={f.slug} food={f} />)}</div>
              </section>
            ) : null}
            {relatedArticles.length ? (
              <section className="mt-12">
                <h2 className="mb-5 text-2xl">延伸阅读</h2>
                <div className="grid gap-4 sm:grid-cols-2">{relatedArticles.map((a) => <ArticleCard key={a.slug} article={a} compact />)}</div>
              </section>
            ) : null}
          </article>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents sections={nutrient.sections} />
            <div className="rounded-card border border-line bg-sand/50 p-5">
              <h2 className="mb-3 text-sm">核心要点</h2>
              <ul className="space-y-2 text-xs leading-6 text-ink/75">{nutrient.keyPoints.map((p) => <li key={p}>· {p}</li>)}</ul>
            </div>
            <RelatedLinks links={nutrient.related} />
          </aside>
        </div>
      </div>
    </>
  );
}
