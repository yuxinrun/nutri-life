import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, Breadcrumbs, SectionHeading } from "@/components/layout/page-header";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/card";
import { resources } from "@/data/resources";
import { researchItems } from "@/data/research";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "参考资料总览", description: "本站使用的权威机构指南、数据库、原始论文与专业资源。", path: "/sources" });

export default function SourcesPage() {
  return (
    <>
      <PageHeader eyebrow="Sources" title="参考资料总览" description="内容来源可追溯，是 Nutri Life 的基本要求。这里汇总了常用的权威机构、数据库与原始研究资料。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "参考资料" }]} />
        <section className="py-10">
          <SectionHeading eyebrow="Guidelines & Databases" title="指南与数据库" description="用于核对推荐摄入量、食物成分与公共卫生建议。" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {resources.filter((r) => ["国际组织", "政府机构", "数据库", "国内权威", "政府数据库", "大学与研究机构"].includes(r.category)).slice(0, 12).map((r) => (
              <Card key={r.slug}><CardBody>
                <Badge>{r.region}</Badge>
                <h3 className="mt-3 text-base">{r.title}</h3>
                <p className="mt-2 line-clamp-2 text-xs leading-6 text-ink/70">{r.summary}</p>
                <a href={r.officialUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1 text-xs text-forest hover:underline">官方网站 <ArrowUpRight className="h-3 w-3" /></a>
              </CardBody></Card>
            ))}
          </div>
        </section>
        <section className="pb-10">
          <SectionHeading eyebrow="Original Papers" title="研究解读的原始资料" description="每篇研究解读均提供可检索的原始论文或报告来源。" />
          <div className="space-y-3">
            {researchItems.map((item) => (
              <Card key={item.slug}><CardBody className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div><p className="font-medium text-forest">{item.title}</p><p className="mt-1 text-xs text-muted">{item.paper.title} · {item.paper.publisher}</p></div>
                <div className="flex shrink-0 gap-3 text-xs">
                  <Link href={`/nutrition-research/${item.slug}`} className="text-forest hover:underline">解读</Link>
                  <a href={item.paper.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-forest hover:underline">原始来源 <ArrowUpRight className="h-3 w-3" /></a>
                </div>
              </CardBody></Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
