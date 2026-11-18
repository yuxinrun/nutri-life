import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { topics, getTopic } from "@/content/topics";
import { pageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/page-header";
import { ContentSections } from "@/components/content/sections";
import { ReadingProgress, TableOfContents, RelatedLinks } from "@/components/content/article-extras";
import { Badge, Card } from "@/components/ui/card";
import { Illustration } from "@/components/illustrations";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const topic = getTopic(params.slug);
  if (!topic) return {};
  return pageMetadata({ title: `${topic.title}｜营养与健康`, description: topic.summary, path: `/nutrition-health/${topic.slug}` });
}

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = getTopic(params.slug);
  if (!topic) notFound();
  return (
    <>
      <ReadingProgress />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "营养与健康", href: "/nutrition-health" }, { label: topic.title }]} />
        <header className="grid gap-8 border-b border-line pb-10 pt-4 lg:grid-cols-[1fr_300px]">
          <div>
            <div className="mb-4 flex flex-wrap gap-2">{topic.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
            <h1 className="text-3xl sm:text-4xl">{topic.title}</h1>
            <p className="mt-3 text-lg leading-8 text-ink/75">{topic.subtitle}</p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/70">{topic.summary}</p>
          </div>
          <Illustration name={(topic.illustration as "plate") ?? "sixNutrients"} className="w-full rounded-card bg-white" />
        </header>
        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="max-w-prose"><ContentSections sections={topic.sections} /></article>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents sections={topic.sections} />
            <Card className="border-apricot/40 bg-apricot/10 p-5 text-xs leading-6 text-[#8A5424]"><p className="font-medium">证据边界</p><p className="mt-2">{topic.evidenceNote}</p></Card>
            <RelatedLinks links={topic.related} />
          </aside>
        </div>
      </div>
    </>
  );
}
