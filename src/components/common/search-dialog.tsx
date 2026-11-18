"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Search, X, ArrowUpRight } from "lucide-react";
import { searchContent, kindLabels } from "@/lib/search";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/card";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchContent(query, 12), [query]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-[8vh] z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 rounded-card border border-line bg-cream p-5 shadow-lift focus:outline-none">
          <div className="mb-4 flex items-center justify-between">
            <Dialog.Title className="font-serif text-lg text-forest">搜索 Nutri Life</Dialog.Title>
            <Dialog.Close className="rounded-pill p-2 text-muted hover:bg-sand" aria-label="关闭搜索">
              <X className="h-4 w-4" />
            </Dialog.Close>
          </div>
          <div className="relative">
            <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-muted" />
            <Input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="试试：膳食纤维、鸡蛋、血糖、食谱…"
              className="pl-10"
              aria-label="搜索关键词"
            />
          </div>
          <div className="mt-4 max-h-[55vh] overflow-y-auto scrollbar-thin">
            {!query ? (
              <div className="grid gap-2 py-3 sm:grid-cols-2">
                {["膳食纤维", "蛋白质", "鸡蛋", "血糖", "Omega-3", "食品标签"].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="rounded-xl border border-line bg-white px-4 py-3 text-left text-sm text-ink/80 hover:border-forest/40 hover:text-forest"
                  >
                    {term}
                  </button>
                ))}
              </div>
            ) : results.length === 0 ? (
              <div className="py-10 text-center text-sm text-muted">没有找到相关结果，试试更短的关键词。</div>
            ) : (
              <div className="divide-y divide-line">
                {results.map((item) => (
                  <Link
                    key={`${item.kind}-${item.href}`}
                    href={item.href}
                    onClick={() => {
                      onOpenChange(false);
                      setQuery("");
                    }}
                    className="group flex items-start gap-3 py-3.5"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-2">
                        <Badge tone="sage">{kindLabels[item.kind] ?? item.kind}</Badge>
                        <span className="text-[11px] text-muted">{item.category}</span>
                      </div>
                      <p className="text-sm font-medium text-ink group-hover:text-forest">{item.title}</p>
                      <p className="mt-1 line-clamp-1 text-xs text-muted">{item.description}</p>
                    </div>
                    <ArrowUpRight className="mt-2 h-4 w-4 shrink-0 text-muted group-hover:text-forest" />
                  </Link>
                ))}
              </div>
            )}
          </div>
          <p className="mt-3 border-t border-line pt-3 text-[11px] text-muted">
            搜索覆盖文章、食物、食谱、营养素、书籍、资源、研究、专题与指南。
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
