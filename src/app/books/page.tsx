import type { Metadata } from "next";
import { PageHeader, Breadcrumbs } from "@/components/layout/page-header";
import { BookBrowser } from "@/components/filters/content-browser";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "好书推荐", description: "20 本营养与健康饮食书籍：作者、出版社、版本核实，含内容评价、适合读者与争议提示。", path: "/books" });

export default function BooksPage() {
  return (
    <>
      <PageHeader eyebrow="Books" title="好书推荐" description="从专业教材到饮食文化，从循证科普到争议讨论。作者、出版信息逐一核对，争议书籍明确标注评价边界。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "好书推荐" }]} />
        <BookBrowser />
      </div>
    </>
  );
}
