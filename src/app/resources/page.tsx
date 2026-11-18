import type { Metadata } from "next";
import { PageHeader, Breadcrumbs } from "@/components/layout/page-header";
import { ResourceBrowser } from "@/components/filters/content-browser";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "全球专业资源", description: "WHO、FAO、Harvard Nutrition Source、USDA、NIH、中国营养学会等真实官方资源目录。", path: "/resources" });

export default function ResourcesPage() {
  return (
    <>
      <PageHeader eyebrow="Professional Resources" title="全球专业资源" description="只收录机构真实、链接可追溯的官方网站。每条资源说明机构性质、主要方向与推荐使用场景。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "专业资源" }]} />
        <ResourceBrowser />
      </div>
    </>
  );
}
