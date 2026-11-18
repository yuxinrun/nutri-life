import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { books, getBook } from "@/data/books";
import { pageMetadata, bookJsonLd } from "@/lib/seo";
import { Breadcrumbs } from "@/components/layout/page-header";
import { ContentSections } from "@/components/content/sections";
import { Badge, Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const book = getBook(params.slug);
  if (!book) return {};
  return pageMetadata({ title: `${book.title}｜好书推荐`, description: book.summary, path: `/books/${book.slug}` });
}

export default function BookPage({ params }: { params: { slug: string } }) {
  const book = getBook(params.slug);
  if (!book) notFound();
  return (
    <div className="container-page">
      <Script id="book-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd({ title: book.title, author: book.author, publisher: book.publisher })) }} />
      <Breadcrumbs items={[{ label: "好书推荐", href: "/books" }, { label: book.title }]} />
      <header className="grid gap-8 border-b border-line pb-10 pt-4 sm:grid-cols-[160px_1fr]">
        <div className={cn("mx-auto flex h-[220px] w-[150px] flex-col justify-between rounded-lg p-5 text-cream shadow-lift sm:mx-0", book.coverStyle === "apricot" ? "bg-apricot" : book.coverStyle === "sage" ? "bg-sage" : book.coverStyle === "ink" ? "bg-ink" : "bg-forest")}>
          <p className="font-serif text-xl leading-tight">{book.originalTitle}</p>
          <div><p className="text-xs opacity-90">{book.author}</p><p className="mt-1 text-[10px] opacity-75">{book.publisher}</p></div>
        </div>
        <div>
          <div className="mb-4 flex flex-wrap gap-2"><Badge tone="forest">{book.category}</Badge><Badge>{book.language}</Badge>{book.tags.map((t) => <Badge key={t}>{t}</Badge>)}</div>
          <h1 className="text-3xl sm:text-4xl">{book.title}</h1>
          <p className="mt-2 text-sm text-muted">原书名：{book.originalTitle}</p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-ink/75">{book.summary}</p>
          <div className="mt-6 grid gap-2 text-xs text-muted sm:grid-cols-2">
            <span>作者：{book.author}</span><span>出版社：{book.publisher}</span>
            <span>出版信息：{book.year}</span><span>版本：{book.edition}</span>
          </div>
          {book.caution ? <div className="mt-5 rounded-card border border-apricot/40 bg-apricot/10 p-4 text-xs leading-6 text-[#8A5424]">{book.caution}</div> : null}
        </div>
      </header>
      <div className="grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_260px]">
        <article className="max-w-prose"><ContentSections sections={book.sections} /></article>
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <Card className="p-5">
            <p className="text-sm font-medium text-forest">书目信息核对</p>
            <p className="mt-3 text-xs leading-6 text-ink/75">书名、作者与出版社信息按公开书目整理；版本与再版年份可能变化，购买前请在出版社官网核对。</p>
            <div className="mt-4 space-y-2">
              {book.references.map((ref) => (
                <a key={ref.url} href={ref.url} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 rounded-lg bg-cream px-3 py-2 text-xs text-forest hover:bg-sand">
                  <span className="line-clamp-1">{ref.title}</span><ExternalLink className="h-3 w-3 shrink-0" />
                </a>
              ))}
            </div>
          </Card>
        </aside>
      </div>
    </div>
  );
}
