import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/content/articles";
import { formatDate } from "@/lib/utils";
import { pageMetadata, articleJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/page-header";
import { ReadingProgress, RelatedLinks, TableOfContents } from "@/components/content/article-extras";
import { ContentSections } from "@/components/content/sections";
import { Badge } from "@/components/ui/card";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticle(params.slug);
  if (!article) return {};
  return pageMetadata({ title: article.title, description: article.summary, path: `/articles/${article.slug}`, type: "article" });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticle(params.slug);
  if (!article) notFound();
  return (
    <>
      <ReadingProgress />
      <Script id="article-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd({ title: article.title, description: article.summary, path: `/articles/${article.slug}`, date: article.updatedAt, author: article.author })) }} />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "深度文章", href: "/articles" }, { label: article.title }]} />
        <header className="border-b border-line pb-10 pt-4">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <Badge tone="forest">{article.category}</Badge>
            {article.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
          </div>
          <h1 className="max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-[44px]">{article.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">{article.subtitle ?? article.summary}</p>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
            <span>{article.author}</span><span>更新于 {formatDate(article.updatedAt)}</span><span>约 {article.readingMinutes} 分钟</span>
          </div>
        </header>
        <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="max-w-prose"><ContentSections sections={article.sections} /></article>
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <TableOfContents sections={article.sections} />
            <RelatedLinks links={article.related} />
          </aside>
        </div>
      </div>
    </>
  );
}
