import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader, Breadcrumbs } from "@/components/layout/page-header";
import { RecipeBrowser } from "@/components/filters/recipe-browser";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "实用食谱库", description: "可搜索筛选的食谱库：完整食材用量、步骤、时间、过敏原、替代食材与营养估算说明。", path: "/recipes" });

export default function RecipesPage() {
  return (
    <>
      <PageHeader eyebrow="Recipes" title="实用食谱" description="每份食谱都有食材用量、制作步骤、时间与营养估算依据。估算值不等于检测值，请结合自身需要调整。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "实用食谱" }]} />
        <Suspense fallback={<div className="rounded-card border border-line bg-white/60 p-10 text-center text-sm text-muted">正在加载食谱…</div>}>
          <RecipeBrowser />
        </Suspense>
      </div>
    </>
  );
}
