import type { Metadata } from "next";
import { PageHeader, Breadcrumbs } from "@/components/layout/page-header";
import { ArticleBrowser } from "@/components/filters/content-browser";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "深度文章", description: "营养科学、健康饮食、食品标签与研究方法的深度科普文章，含结论、原理、实操、误区与参考资料。", path: "/articles" });

export default function ArticlesPage() {
  return (
    <>
      <PageHeader eyebrow="Articles" title="深度文章" description="每篇文章都回答一个具体问题：先说结论，再解释原理，最后给出可以立即执行的行动。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "深度文章" }]} />
        <ArticleBrowser />
      </div>
    </>
  );
}
