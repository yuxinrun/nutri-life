import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader, Breadcrumbs } from "@/components/layout/page-header";
import { FoodBrowser } from "@/components/filters/food-browser";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "食物百科", description: "可搜索的食物营养数据库：每 100 g 结构化数据、生熟干湿状态、可食部、数据来源与选购保存烹饪建议。", path: "/foods" });

export default function FoodsPage() {
  return (
    <>
      <PageHeader eyebrow="Food Database" title="食物百科" description="每一条数据都标注计量口径、食物状态与来源；不同数据库的数值不混用。用搜索与分类找到你需要的信息。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "食物百科" }]} />
        <Suspense fallback={<div className="rounded-card border border-line bg-white/60 p-10 text-center text-sm text-muted">正在加载食物数据…</div>}>
          <FoodBrowser />
        </Suspense>
      </div>
    </>
  );
}
