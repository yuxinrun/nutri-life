import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ExternalLink } from "lucide-react";
import { PageHeader, Breadcrumbs } from "@/components/layout/page-header";
import { Card, CardBody } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "联系我们", description: "内容纠错、合作与问题反馈的联系方式。", path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <PageHeader eyebrow="Contact" title="联系我们" description="发现事实错误、失效链接，或有内容合作建议？欢迎告诉我们。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "联系我们" }]} />
        <div className="grid gap-6 py-10 sm:grid-cols-2">
          <Card><CardBody>
            <Mail className="h-6 w-6 text-forest" />
            <h2 className="mt-4 text-xl">内容纠错与反馈</h2>
            <p className="mt-2 text-sm leading-7 text-ink/75">请说明页面地址、具体内容与建议修改，并附上可核对的来源链接或文献信息。医学相关内容请提供权威指南或系统综述。</p>
            <a href="mailto:editor@nutri-life.example.com" className="mt-4 inline-flex items-center gap-2 text-sm text-forest hover:underline">editor@nutri-life.example.com <ExternalLink className="h-3.5 w-3.5" /></a>
          </CardBody></Card>
          <Card><CardBody>
            <h2 className="font-serif text-xl text-forest">合作与转载</h2>
            <p className="mt-2 text-sm leading-7 text-ink/75">本站内容可用于非商业性学习与分享，请注明来源与原文链接。商业合作、内容授权与专业审校邀请请通过邮件联系。</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm text-forest">
              <Link href="/editorial-policy" className="hover:underline">编辑原则</Link>
              <Link href="/sources" className="hover:underline">参考资料</Link>
              <Link href="/about" className="hover:underline">关于我们</Link>
            </div>
          </CardBody></Card>
        </div>
        <p className="text-xs text-muted">注：以上邮箱为演示地址。若网站部署在真实域名，请替换为实际可接收邮件的地址。</p>
      </div>
    </>
  );
}
