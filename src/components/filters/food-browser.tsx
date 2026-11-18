"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { foods, foodCategories } from "@/data/foods";
import { FoodCard } from "@/components/content/cards";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/card";

export function FoodBrowser() {
  const params = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(params.get("category") ?? "all");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return foods.filter((f) => {
      const categoryMatch = category === "all" || f.categorySlug === category;
      const queryMatch = !q || `${f.title} ${f.summary} ${f.tags.join(" ")}`.toLowerCase().includes(q);
      return categoryMatch && queryMatch;
    });
  }, [query, category]);

  return (
    <div>
      <div className="mb-6 flex flex-col gap-4">
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜索食物名称、营养特点或标签…" aria-label="搜索食物" />
        <div className="flex flex-wrap gap-2">
          <button onClick={() => setCategory("all")} className={`rounded-pill px-3 py-1.5 text-xs ${category === "all" ? "bg-forest text-cream" : "border border-line bg-white text-ink/75 hover:border-forest/40"}`}>全部 ({foods.length})</button>
          {foodCategories.map((c) => (
            <button key={c.slug} onClick={() => setCategory(c.slug)} className={`rounded-pill px-3 py-1.5 text-xs ${category === c.slug ? "bg-forest text-cream" : "border border-line bg-white text-ink/75 hover:border-forest/40"}`}>{c.name}</button>
          ))}
        </div>
      </div>
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-muted">找到 <strong className="text-forest">{filtered.length}</strong> 种食物</p>
        <Badge>每 100 g 可食部</Badge>
      </div>
      {filtered.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((f) => <FoodCard key={f.slug} food={f} />)}</div>
      ) : (
        <div className="rounded-card border border-dashed border-line py-16 text-center text-sm text-muted">没有匹配的食物，换个关键词试试。</div>
      )}
    </div>
  );
}
