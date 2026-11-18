import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Clock3, Users, AlertTriangle } from "lucide-react";
import { recipes, getRecipe } from "@/data/recipes";
import { getFood } from "@/data/foods";
import { pageMetadata, recipeJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/page-header";
import { ContentSections } from "@/components/content/sections";
import { TableOfContents, ReadingProgress, RelatedLinks } from "@/components/content/article-extras";
import { Badge, Card } from "@/components/ui/card";
import { MacroPieChart } from "@/components/charts/charts";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const recipe = getRecipe(params.slug);
  if (!recipe) return {};
  return pageMetadata({ title: `${recipe.title}｜实用食谱`, description: recipe.summary, path: `/recipes/${recipe.slug}` });
}

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipe = getRecipe(params.slug);
  if (!recipe) notFound();
  const macros: Partial<NonNullable<typeof recipe.nutritionEstimate>> = recipe.nutritionEstimate ?? {};
  return (
    <>
      <ReadingProgress />
      <Script id="recipe-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(recipeJsonLd({ name: recipe.title, description: recipe.summary, path: `/recipes/${recipe.slug}`, minutes: recipe.prepMinutes + recipe.cookMinutes, servings: recipe.servings, ingredients: recipe.ingredients.map((i) => `${i.name} ${i.amount}`) })) }} />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "实用食谱", href: "/recipes" }, { label: recipe.categoryName, href: `/recipes?category=${recipe.categorySlug}` }, { label: recipe.title }]} />
        <header className="grid gap-8 border-b border-line pb-10 pt-4 lg:grid-cols-[1fr_320px]">
          <div>
            <div className="mb-4 flex flex-wrap gap-2"><Badge tone="forest">{recipe.categoryName}</Badge>{recipe.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
            <h1 className="text-3xl sm:text-4xl">{recipe.title}</h1>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-ink/75">{recipe.subtitle}</p>
            <div className="mt-6 flex flex-wrap gap-5 text-xs text-muted">
              <span className="flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-forest" />准备 {recipe.prepMinutes} 分钟 / 烹饪 {recipe.cookMinutes} 分钟</span>
              <span className="flex items-center gap-1.5"><Users className="h-4 w-4 text-forest" />{recipe.servings} 人份</span>
            </div>
          </div>
          <Card className="p-5">
            <p className="eyebrow mb-3">每份营养估算</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                ["能量", macros.energyKcal, "kcal"], ["蛋白质", macros.proteinG, "g"],
                ["脂肪", macros.fatG, "g"], ["碳水", macros.carbsG, "g"],
                ["膳食纤维", macros.fiberG, "g"], ["钠", macros.sodiumMg, "mg"],
              ].map(([label, value, unit]) => (
                <div key={label as string} className="rounded-xl bg-cream p-3">
                  <p className="text-[10px] text-muted">{label as string}</p>
                  <p className="font-serif text-lg text-forest">{value ?? "—"} <span className="text-[10px] text-muted">{unit as string}</span></p>
                </div>
              ))}
            </div>
            {macros.proteinG && macros.carbsG && macros.fatG ? <MacroPieChart values={{ proteinG: macros.proteinG, carbsG: macros.carbsG, fatG: macros.fatG }} title="宏量营养素供能构成" /> : null}
            <p className="mt-2 text-[11px] leading-5 text-muted">计算依据：{recipe.nutritionEstimate?.basis ?? "未逐项计算"}。非实验室检测值。</p>
          </Card>
        </header>

        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="max-w-prose">
            <section id="ingredients" className="scroll-mt-24">
              <h2 className="mb-4 text-2xl">食材清单</h2>
              <div className="overflow-x-auto rounded-card border border-line">
                <table className="w-full text-sm">
                  <thead className="bg-sand/60 text-forest"><tr><th className="px-4 py-3 text-left">食材</th><th className="px-4 py-3 text-left">用量</th><th className="px-4 py-3 text-left">备注</th></tr></thead>
                  <tbody>
                    {recipe.ingredients.map((i) => (
                      <tr key={i.name} className="border-t border-line/80">
                        <td className="px-4 py-3">
                          {i.foodSlug && getFood(i.foodSlug) ? <Link href={`/foods/${i.foodSlug}`} className="text-forest hover:underline">{i.name}</Link> : i.name}
                        </td>
                        <td className="px-4 py-3">{i.amount}</td>
                        <td className="px-4 py-3 text-muted">{i.optional ? "可选" : "常规"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
            <div className="mt-10"><ContentSections sections={recipe.sections.filter((s) => s.id !== "ingredients" && s.id !== "nutrition")} /></div>
            <aside className="mt-8 flex gap-3 rounded-card border border-apricot/40 bg-apricot/10 p-4 text-sm leading-7 text-[#8A5424]">
              <AlertTriangle className="mt-1 h-4 w-4 shrink-0" />
              <div><strong>过敏原与营养说明</strong><br />过敏原：{recipe.allergens.join("、")}。<br />{recipe.nutritionNote}</div>
            </aside>
          </article>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents sections={recipe.sections} />
            <RelatedLinks links={recipe.related} />
          </aside>
        </div>
      </div>
    </>
  );
}
