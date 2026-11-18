import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { foods, getFood } from "@/data/foods";
import { recipes } from "@/data/recipes";
import { getArticle } from "@/content/articles";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/page-header";
import { ContentSections } from "@/components/content/sections";
import { RelatedLinks, ReadingProgress, TableOfContents } from "@/components/content/article-extras";
import { Badge, Card } from "@/components/ui/card";
import { ProteinCompareChart, NutrientDensityChart } from "@/components/charts/charts";
import { RecipeCard } from "@/components/content/cards";

export function generateStaticParams() {
  return foods.map((f) => ({ slug: f.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const food = getFood(params.slug);
  if (!food) return {};
  return pageMetadata({ title: `${food.title}｜食物百科`, description: food.summary, path: `/foods/${food.slug}` });
}

const nutrientRows: { key: string; label: string; unit: string }[] = [
  { key: "energyKcal", label: "能量", unit: "kcal" },
  { key: "proteinG", label: "蛋白质", unit: "g" },
  { key: "fatG", label: "脂肪", unit: "g" },
  { key: "carbsG", label: "碳水化合物", unit: "g" },
  { key: "fiberG", label: "膳食纤维", unit: "g" },
  { key: "sugarG", label: "糖", unit: "g" },
  { key: "sodiumMg", label: "钠", unit: "mg" },
  { key: "calciumMg", label: "钙", unit: "mg" },
  { key: "ironMg", label: "铁", unit: "mg" },
  { key: "potassiumMg", label: "钾", unit: "mg" },
  { key: "magnesiumMg", label: "镁", unit: "mg" },
  { key: "vitaminCMg", label: "维生素 C", unit: "mg" },
  { key: "vitaminAUG", label: "维生素 A", unit: "µg RAE" },
  { key: "vitaminDUG", label: "维生素 D", unit: "µg" },
  { key: "vitaminB12UG", label: "维生素 B12", unit: "µg" },
  { key: "folateUG", label: "叶酸", unit: "µg" },
  { key: "zincMg", label: "锌", unit: "mg" },
];

export default function FoodPage({ params }: { params: { slug: string } }) {
  const food = getFood(params.slug);
  if (!food) notFound();
  const relatedRecipes = recipes.filter((r) => r.ingredients.some((i) => i.foodSlug === food.slug)).slice(0, 3);
  const relatedArticles = food.related.map((r) => r.href.startsWith("/articles/") ? getArticle(r.href.split("/").pop()!) : null).filter(Boolean).slice(0, 2);
  const nutrition = food.nutritionPer100g as Record<string, number | undefined>;

  return (
    <>
      <ReadingProgress />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "食物百科", href: "/foods" }, { label: food.categoryName, href: `/foods?category=${food.categorySlug}` }, { label: food.title }]} />
        <header className="grid gap-8 border-b border-line pb-10 pt-4 lg:grid-cols-[1fr_340px]">
          <div>
            <div className="mb-4 flex flex-wrap gap-2"><Badge tone="forest">{food.categoryName}</Badge>{food.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
            <h1 className="text-3xl sm:text-4xl">{food.title}</h1>
            <p className="mt-3 text-lg leading-8 text-ink/75">{food.subtitle}</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/70">{food.summary}</p>
            <div className="mt-5 grid gap-2 text-xs text-muted sm:grid-cols-3">
              <span>状态：{food.state}</span><span>可食部：{food.ediblePortion}</span><span>计量：{food.measurement}</span>
            </div>
          </div>
          <Card className="p-5">
            <p className="eyebrow mb-3">每 100 g 可食部</p>
            <div className="mb-4 grid grid-cols-3 gap-2 text-center">
              <div className="rounded-xl bg-cream p-3"><p className="font-serif text-xl text-forest">{nutrition.energyKcal ?? "—"}</p><p className="text-[10px] text-muted">kcal</p></div>
              <div className="rounded-xl bg-cream p-3"><p className="font-serif text-xl text-forest">{nutrition.proteinG ?? "—"}</p><p className="text-[10px] text-muted">蛋白质 g</p></div>
              <div className="rounded-xl bg-cream p-3"><p className="font-serif text-xl text-forest">{nutrition.fiberG ?? "—"}</p><p className="text-[10px] text-muted">纤维 g</p></div>
            </div>
            <div className="max-h-[280px] overflow-y-auto scrollbar-thin">
              <table className="w-full text-xs">
                <tbody>
                  {nutrientRows.filter((row) => nutrition[row.key] !== undefined).map((row) => (
                    <tr key={row.key} className="border-b border-line/80">
                      <td className="py-2 text-ink/75">{row.label}</td>
                      <td className="py-2 text-right font-medium text-forest">{nutrition[row.key]} {row.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-lg bg-sand/70 p-3 text-[11px] leading-5 text-ink/70">
              <p className="flex items-center gap-1 font-medium text-forest"><Info className="h-3 w-3" /> 数据来源</p>
              <p className="mt-1">{food.nutritionSource.title}（{food.nutritionSource.publisher}）</p>
              <p className="mt-1">{food.nutritionSource.note}</p>
              <a href={food.nutritionSource.url} target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-1 text-forest hover:underline">访问来源 <ArrowUpRight className="h-3 w-3" /></a>
            </div>
          </Card>
        </header>

        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="max-w-prose">
            <ContentSections sections={food.sections} />
            <section className="mt-12">
              <h2 className="mb-4 text-2xl">营养数据可视化</h2>
              <Card className="p-4 sm:p-5"><ProteinCompareChart slugs={[food.slug, "egg", "chicken-breast", "tofu"]} /></Card>
              <Card className="mt-5 p-4 sm:p-5"><NutrientDensityChart /></Card>
              <p className="mt-3 text-[11px] leading-5 text-muted">图表数值取自本站食物数据库的公开近似值；不同食物生熟状态不同，比较时请结合页面标注，不代表个体摄入建议。</p>
            </section>
            {relatedRecipes.length ? (
              <section className="mt-12">
                <h2 className="mb-5 text-2xl">相关食谱</h2>
                <div className="grid gap-4 sm:grid-cols-2">{relatedRecipes.map((r) => <RecipeCard key={r.slug} recipe={r} />)}</div>
              </section>
            ) : null}
            {relatedArticles.length ? (
              <section className="mt-12">
                <h2 className="mb-5 text-2xl">相关阅读</h2>
                <div className="space-y-2">
                  {food.related.map((r) => <Link key={r.href} href={r.href} className="flex items-center justify-between rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink/80 hover:text-forest"><span>{r.label}</span><ArrowUpRight className="h-3.5 w-3.5 text-muted" /></Link>)}
                </div>
              </section>
            ) : null}
          </article>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents sections={food.sections} />
            <RelatedLinks links={food.related} />
            <Card className="p-5">
              <p className="text-sm font-medium text-forest">使用提示</p>
              <p className="mt-2 text-xs leading-6 text-ink/70">营养数据按每 100 g 可食部呈现。实际摄入请用厨房秤称量，并按生熟、干湿状态换算。</p>
            </Card>
          </aside>
        </div>
      </div>
    </>
  );
}
