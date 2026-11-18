"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { recipes, recipeCategories } from "@/data/recipes";
import { RecipeCard } from "@/components/content/cards";
import { Input, Select } from "@/components/ui/input";

export function RecipeBrowser() {
  const params = useSearchParams();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(params.get("category") ?? "all");
  const [time, setTime] = useState("all");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recipes.filter((r) => {
      const categoryMatch = category === "all" || r.categorySlug === category;
      const timeMatch = time === "all" || (time === "quick" ? r.prepMinutes + r.cookMinutes <= 15 : true);
      const queryMatch = !q || `${r.title} ${r.summary} ${r.ingredients.map((i) => i.name).join(" ")} ${r.tags.join(" ")}`.toLowerCase().includes(q);
      return categoryMatch && timeMatch && queryMatch;
    });
  }, [query, category, time]);

  return (
    <div>
      <div className="mb-6 grid gap-3 sm:grid-cols-[1fr_180px_180px]">
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜索食谱名称或食材…" aria-label="搜索食谱" />
        <Select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="按分类筛选">
          <option value="all">全部分类</option>
          {recipeCategories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </Select>
        <Select value={time} onChange={(e) => setTime(e.target.value)} aria-label="按时间筛选">
          <option value="all">全部时长</option>
          <option value="quick">15 分钟内</option>
        </Select>
      </div>
      <p className="mb-5 text-sm text-muted">找到 <strong className="text-forest">{filtered.length}</strong> 份食谱</p>
      {filtered.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((r) => <RecipeCard key={r.slug} recipe={r} />)}</div>
      ) : (
        <div className="rounded-card border border-dashed border-line py-16 text-center text-sm text-muted">没有匹配的食谱，换个食材或分类试试。</div>
      )}
    </div>
  );
}
