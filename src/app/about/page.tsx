import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader, Breadcrumbs, SectionHeading } from "@/components/layout/page-header";
import { Illustration } from "@/components/illustrations";
import { Card, CardBody } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "关于 Nutri Life", description: "了解营养生活的定位、编辑原则与内容范围。", path: "/about" });

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About Us" title="关于 Nutri Life" description="一个集营养科学、食物数据、健康饮食、实用食谱、研究解读与交互工具于一体的中文营养知识平台。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "关于我们" }]} />
        <section className="grid gap-8 py-10 lg:grid-cols-[1fr_380px]">
          <div className="prose-nutri">
            <h2>我们为什么做这件事</h2>
            <p>营养信息到处都是，但可靠、系统、读得下去的内容并不常见。社交平台把复杂问题压缩成一句口号，商业广告把某一种食物包装成解决方案。我们想提供一个不同的选择：既能回答具体问题，又能说明证据边界的中文知识库。</p>
            <p>Nutri Life 不卖补充剂，不提供疾病治疗方案，也不制造饮食焦虑。我们相信健康饮食不是寻找一种完美食物，而是建立长期稳定的饮食结构。</p>
            <h2>我们做什么</h2>
            <ul>
              <li>把营养科学拆解为可理解的知识路径，从消化吸收到能量代谢。</li>
              <li>建立标注来源、单位与食物状态的食物营养数据。</li>
              <li>用完整食材用量和估算依据呈现食谱，而不是只给一张好看的成品图。</li>
              <li>解读研究时说明设计、对象、局限与证据等级，不把相关性写成因果。</li>
              <li>提供把知识变成行动的工具，并把数据留在用户自己的浏览器里。</li>
            </ul>
            <h2>我们的边界</h2>
            <p>本站内容面向一般成年人的营养科普。它不能替代医生、临床营养师或药物治疗。孕妇、儿童、老年人、慢性病患者以及正在服药的人，应在使用任何饮食或补充剂方案前咨询专业人士。</p>
          </div>
          <Illustration name="map" className="h-fit w-full rounded-card bg-white" />
        </section>
        <SectionHeading eyebrow="Principles" title="内容原则" />
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ["可追溯", "数据、论文与指南均标注来源，重要文章附参考资料。"],
            ["讲边界", "区分相关与因果，明确估算性质与适用人群。"],
            ["可执行", "每篇文章都给出具体操作步骤与替代方案。"],
          ].map(([title, desc]) => <Card key={title}><CardBody><h3 className="text-lg">{title}</h3><p className="mt-2 text-sm leading-7 text-ink/70">{desc}</p></CardBody></Card>)}
        </div>
        <div className="mt-10 rounded-card border border-line bg-sand/50 p-6 text-sm leading-7 text-ink/75">
          <p>想了解我们如何审核内容？阅读 <Link href="/editorial-policy" className="text-forest underline underline-offset-2">编辑与科学审核原则</Link>。想核对我们使用的数据？查看 <Link href="/sources" className="text-forest underline underline-offset-2">参考资料总览</Link>。</p>
        </div>
      </div>
    </>
  );
}
