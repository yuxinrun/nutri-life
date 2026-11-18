import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { researchItems, getResearch } from "@/data/research";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/page-header";
import { ContentSections } from "@/components/content/sections";
import { ReadingProgress, TableOfContents, RelatedLinks } from "@/components/content/article-extras";
import { Badge, Card } from "@/components/ui/card";
import { formatDate } from "@/lib/utils";

export function generateStaticParams() {
  return researchItems.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getResearch(params.slug);
  if (!item) return {};
  return pageMetadata({ title: `${item.title}｜营养研究解读`, description: item.summary, path: `/nutrition-research/${item.slug}`, type: "article" });
}

export default function ResearchDetailPage({ params }: { params: { slug: string } }) {
  const item = getResearch(params.slug);
  if (!item) notFound();
  return (
    <>
      <ReadingProgress />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "营养研究", href: "/nutrition-research" }, { label: item.title }]} />
        <header className="border-b border-line pb-10 pt-4">
          <div className="mb-4 flex flex-wrap gap-2"><Badge tone="forest">{item.category}</Badge><Badge tone={item.evidenceLevel === "强" ? "apricot" : "neutral"}>证据等级 {item.evidenceLevel}</Badge></div>
          <h1 className="max-w-3xl text-3xl sm:text-4xl">{item.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">{item.subtitle}</p>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/70">{item.summary}</p>
          <p className="mt-5 text-xs text-muted">更新于 {formatDate(item.updatedAt)} · 约 {item.readingMinutes} 分钟</p>
        </header>
        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="max-w-prose">
            <ContentSections sections={item.sections} />
            <Card className="mt-10 border-forest/20 bg-sand/50 p-5">
              <p className="eyebrow mb-2">原始资料</p>
              <p className="font-medium text-forest">{item.paper.title}</p>
              <p className="mt-1 text-xs text-muted">{item.paper.publisher}</p>
              {item.paper.note ? <p className="mt-2 text-xs leading-6 text-ink/70">{item.paper.note}</p> : null}
              <a href={item.paper.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-pill bg-forest px-4 py-2 text-xs text-cream hover:bg-forest/90">
                前往原始来源 <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Card>
          </article>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents sections={item.sections} />
            <Card className="p-5">
              <p className="text-sm font-medium text-forest">研究速览</p>
              <dl className="mt-3 space-y-3 text-xs leading-6">
                <div><dt className="text-muted">研究问题</dt><dd className="text-ink/80">{item.question}</dd></div>
                <div><dt className="text-muted">设计</dt><dd className="text-ink/80">{item.design}</dd></div>
                <div><dt className="text-muted">对象</dt><dd className="text-ink/80">{item.population}</dd></div>
              </dl>
            </Card>
            <RelatedLinks links={item.related} />
          </aside>
        </div>
      </div>
    </>
  );
}
