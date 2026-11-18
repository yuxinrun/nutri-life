import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchPageClient } from "@/components/common/search-page";
import { Breadcrumbs, PageHeader } from "@/components/layout/page-header";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "全站搜索", description: "搜索文章、食物、食谱、营养素、书籍、资源与研究解读。", path: "/search" });

export default function SearchPage() {
  return (
    <>
      <PageHeader eyebrow="Search" title="全站搜索" description="一个入口，找到所有内容。" />
      <div className="container-page"><Breadcrumbs items={[{ label: "搜索" }]} /></div>
      <Suspense fallback={<div className="container-page py-10 text-sm text-muted">正在准备搜索…</div>}>
        <SearchPageClient />
      </Suspense>
    </>
  );
}
