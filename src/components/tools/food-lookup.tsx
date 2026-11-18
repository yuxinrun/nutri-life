"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { foods, foodCategories } from "@/data/foods";
import { Input, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { ProteinCompareChart } from "@/components/charts/charts";
import { ToolFrame } from "./tool-frame";

export function FoodLookup() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [compare, setCompare] = useState<string[]>(["egg", "tofu"]);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return foods.filter((f) => (category === "all" || f.categorySlug === category) && (!q || `${f.title} ${f.tags.join(" ")}`.toLowerCase().includes(q)));
  }, [query, category]);

  const toggleCompare = (slug: string) => setCompare((prev) => prev.includes(slug) ? prev.filter((s) => s !== slug) : prev.length < 5 ? [...prev, slug] : prev);

  return (
    <ToolFrame
      title="食物营养查询"
      description="搜索食物百科数据，勾选最多 5 种食物进行蛋白质含量对比。所有数值均按每 100 g 可食部呈现。"
      notice="不同食物的生熟状态不同；比较时请同时查看食物详情页标注的状态与计量口径。"
    >
      <div className="mb-6 grid gap-3 sm:grid-cols-[1fr_200px]">
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜索食物名称…" aria-label="搜索食物" />
        <Select value={category} onChange={(e) => setCategory(e.target.value)} aria-label="筛选分类">
          <option value="all">全部分类</option>
          {foodCategories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </Select>
      </div>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <Card className="max-h-[620px] overflow-y-auto scrollbar-thin">
          <CardBody>
            <div className="divide-y divide-line">
              {filtered.map((f) => (
                <div key={f.slug} className="flex items-center gap-3 py-3">
                  <input type="checkbox" checked={compare.includes(f.slug)} onChange={() => toggleCompare(f.slug)} className="h-4 w-4 accent-[#244C3A]" aria-label={`对比${f.title}`} />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-ink">{f.title} <span className="text-[11px] font-normal text-muted">{f.state}</span></p>
                    <p className="text-[11px] text-muted">{f.nutritionPer100g.energyKcal ?? "—"} kcal · 蛋白质 {f.nutritionPer100g.proteinG ?? "—"} g · 纤维 {f.nutritionPer100g.fiberG ?? "—"} g / 100g</p>
                  </div>
                  <Link href={`/foods/${f.slug}`} className="text-forest hover:underline" aria-label={`查看${f.title}详情`}><ArrowUpRight className="h-4 w-4" /></Link>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
        <div className="space-y-5">
          <Card className="p-4"><ProteinCompareChart slugs={compare} /></Card>
          <Card><CardBody>
            <p className="font-medium text-forest">已选 {compare.length} 种食物</p>
            <div className="mt-3 flex flex-wrap gap-2">{compare.map((slug) => {
              const f = foods.find((x) => x.slug === slug);
              return f ? <button key={slug} onClick={() => toggleCompare(slug)} className="rounded-pill bg-sand px-3 py-1.5 text-xs text-ink/75 hover:bg-sand/60">{f.title} ×</button> : null;
            })}</div>
            <Button variant="ghost" size="sm" className="mt-4" onClick={() => setCompare([])}>清空对比</Button>
          </CardBody></Card>
        </div>
      </div>
    </ToolFrame>
  );
}
