"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, Search } from "lucide-react";
import { searchContent, kindLabels } from "@/lib/search";
import { Input } from "@/components/ui/input";
import { Badge, Card } from "@/components/ui/card";

export function SearchPageClient() {
  const params = useSearchParams();
  const [query, setQuery] = useState(params.get("q") ?? "");
  const results = useMemo(() => searchContent(query, 40), [query]);

  return (
    <div className="container-page">
      <div className="relative mx-auto max-w-2xl">
        <Search className="absolute left-4 top-4 h-5 w-5 text-muted" />
        <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜索文章、食物、食谱、营养素、书籍与资源…" className="h-14 pl-12 text-base" aria-label="全站搜索" />
      </div>
      <div className="mx-auto mt-8 max-w-3xl">
        {!query ? (
          <div className="rounded-card border border-dashed border-line bg-white/50 p-10 text-center">
            <p className="font-serif text-xl text-forest">输入一个关键词开始</p>
            <p className="mt-2 text-sm text-muted">例如：膳食纤维、鸡蛋、血糖、Omega-3、低钠盐</p>
          </div>
        ) : results.length === 0 ? (
          <div className="rounded-card border border-dashed border-line bg-white/50 p-10 text-center">
            <p className="font-serif text-xl text-forest">没有找到“{query}”</p>
            <p className="mt-2 text-sm text-muted">试试更短的关键词，或从栏目页面浏览。</p>
          </div>
        ) : (
          <>
            <p className="mb-4 text-sm text-muted">找到 <strong className="text-forest">{results.length}</strong> 条与“{query}”相关的内容</p>
            <div className="space-y-3">
              {results.map((item) => (
                <Link key={`${item.kind}-${item.href}`} href={item.href} className="block">
                  <Card className="flex items-start gap-4 p-5 hover:border-forest/30 hover:shadow-soft">
                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex items-center gap-2"><Badge tone="sage">{kindLabels[item.kind] ?? item.kind}</Badge><span className="text-[11px] text-muted">{item.category}</span></div>
                      <p className="font-serif text-lg text-forest">{item.title}</p>
                      <p className="mt-1 line-clamp-2 text-sm leading-6 text-ink/70">{item.description}</p>
                    </div>
                    <ArrowUpRight className="mt-2 h-4 w-4 shrink-0 text-muted" />
                  </Card>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
