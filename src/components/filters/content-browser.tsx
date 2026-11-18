"use client";

import { useMemo, useState } from "react";
import { articles, articleCategories } from "@/content/articles";
import { books } from "@/data/books";
import { resources } from "@/data/resources";
import { researchItems } from "@/data/research";
import { ArticleCard, BookCard, ResearchCard, ResourceCard } from "@/components/content/cards";
import { Input } from "@/components/ui/input";

function FilterBar({
  query,
  onQuery,
  categories,
  category,
  onCategory,
  placeholder,
}: {
  query: string;
  onQuery: (v: string) => void;
  categories: { name: string; count?: number }[];
  category: string;
  onCategory: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div className="mb-6">
      <Input value={query} onChange={(e) => onQuery(e.target.value)} placeholder={placeholder} aria-label="搜索" />
      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={() => onCategory("all")} className={`rounded-pill px-3 py-1.5 text-xs ${category === "all" ? "bg-forest text-cream" : "border border-line bg-white text-ink/75 hover:border-forest/40"}`}>全部</button>
        {categories.map((c) => (
          <button key={c.name} onClick={() => onCategory(c.name)} className={`rounded-pill px-3 py-1.5 text-xs ${category === c.name ? "bg-forest text-cream" : "border border-line bg-white text-ink/75 hover:border-forest/40"}`}>{c.name}{c.count ? ` (${c.count})` : ""}</button>
        ))}
      </div>
    </div>
  );
}

export function ArticleBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => (category === "all" || a.category === category) && (!q || `${a.title} ${a.summary} ${a.tags.join(" ")}`.toLowerCase().includes(q)));
  }, [query, category]);
  return (
    <div>
      <FilterBar query={query} onQuery={setQuery} categories={articleCategories} category={category} onCategory={setCategory} placeholder="搜索文章标题、主题或标签…" />
      <p className="mb-5 text-sm text-muted">共 <strong className="text-forest">{filtered.length}</strong> 篇文章</p>
      {filtered.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((a) => <ArticleCard key={a.slug} article={a} />)}</div> : <Empty />}
    </div>
  );
}

export function BookBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const categories = Array.from(new Set(books.map((b) => b.category))).map((name) => ({ name }));
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return books.filter((b) => (category === "all" || b.category === category) && (!q || `${b.title} ${b.originalTitle} ${b.author} ${b.summary}`.toLowerCase().includes(q)));
  }, [query, category]);
  return (
    <div>
      <FilterBar query={query} onQuery={setQuery} categories={categories} category={category} onCategory={setCategory} placeholder="搜索书名或作者…" />
      {filtered.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((b) => <BookCard key={b.slug} book={b} />)}</div> : <Empty />}
    </div>
  );
}

export function ResourceBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const categories = Array.from(new Set(resources.map((r) => r.category))).map((name) => ({ name }));
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return resources.filter((r) => (category === "all" || r.category === category) && (!q || `${r.title} ${r.organization} ${r.summary}`.toLowerCase().includes(q)));
  }, [query, category]);
  return (
    <div>
      <FilterBar query={query} onQuery={setQuery} categories={categories} category={category} onCategory={setCategory} placeholder="搜索机构名称或地区…" />
      {filtered.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((r) => <ResourceCard key={r.slug} resource={r} />)}</div> : <Empty />}
    </div>
  );
}

export function ResearchBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const categories = Array.from(new Set(researchItems.map((r) => r.category))).map((name) => ({ name }));
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return researchItems.filter((r) => (category === "all" || r.category === category) && (!q || `${r.title} ${r.summary} ${r.tags.join(" ")}`.toLowerCase().includes(q)));
  }, [query, category]);
  return (
    <div>
      <FilterBar query={query} onQuery={setQuery} categories={categories} category={category} onCategory={setCategory} placeholder="搜索研究主题或方法…" />
      {filtered.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((r) => <ResearchCard key={r.slug} item={r} />)}</div> : <Empty />}
    </div>
  );
}

function Empty() {
  return <div className="rounded-card border border-dashed border-line py-16 text-center text-sm text-muted">没有匹配的内容，换个关键词试试。</div>;
}
