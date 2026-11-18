import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allGuides, getGuide } from "@/data/guides";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/page-header";
import { ContentSections } from "@/components/content/sections";
import { RelatedLinks, ReadingProgress, TableOfContents } from "@/components/content/article-extras";
import { Badge } from "@/components/ui/card";

export function generateStaticParams() {
  return allGuides.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const guide = getGuide(params.slug);
  if (!guide) return {};
  return pageMetadata({ title: `${guide.title}｜${guide.category}`, description: guide.summary, path: `/guides/${guide.slug}` });
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const guide = getGuide(params.slug);
  if (!guide) notFound();
  const categoryHref = guide.category === "营养科学" ? "/nutrition-science" : guide.category === "健康饮食" ? "/healthy-eating" : "/food-labels";
  return (
    <>
      <ReadingProgress />
      <div className="container-page">
        <Breadcrumbs items={[{ label: guide.category, href: categoryHref }, { label: guide.title }]} />
        <header className="border-b border-line pb-8 pt-4">
          <div className="mb-4 flex flex-wrap gap-2"><Badge tone="forest">{guide.category}</Badge>{guide.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
          <h1 className="text-3xl sm:text-4xl">{guide.title}</h1>
          <p className="mt-3 max-w-2xl text-lg leading-8 text-ink/75">{guide.summary}</p>
        </header>
        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="max-w-prose"><ContentSections sections={guide.sections} /></article>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents sections={guide.sections} />
            <RelatedLinks links={guide.related} />
          </aside>
        </div>
      </div>
    </>
  );
}
