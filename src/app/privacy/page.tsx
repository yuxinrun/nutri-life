import type { Metadata } from "next";
import { PageHeader, Breadcrumbs } from "@/components/layout/page-header";
import { ContentSections } from "@/components/content/sections";
import { pageMetadata } from "@/lib/seo";
import type { ContentSection } from "@/types";

export const metadata = pageMetadata({ title: "隐私说明", description: "Nutri Life 工具的数据存储方式与隐私原则。", path: "/privacy" });

const sections: ContentSection[] = [
  { id: "local", heading: "数据保存在哪里", paragraphs: ["本站的交互工具（饮食记录、饮水记录、购物清单、习惯复盘等）使用浏览器 localStorage 保存数据。这些数据只存在于你当前使用的设备和浏览器中，不会上传到我们的服务器。"] },
  { id: "no-account", heading: "账号与追踪", bullets: ["本站不要求注册账号。", "订阅表单为演示实现，仅在当前页面显示反馈，不收集或发送邮箱。", "本站不使用第三方广告追踪脚本。"] },
  { id: "clear", heading: "如何清除数据", steps: ["在每个工具页面点击“清空”按钮（如提供）。", "或在浏览器设置中清除本站的本地存储数据。", "清除后无法恢复，建议先使用工具内的导出功能备份。"] },
  { id: "third-party", heading: "外部链接", paragraphs: ["本站链接到 WHO、NIH、中国营养学会等外部网站。这些网站有自己的隐私政策，本站不对其数据处理方式负责。"] },
  { id: "contact", heading: "问题反馈", paragraphs: ["如对隐私有疑问，可通过联系我们页面发送邮件。"] },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Privacy" title="隐私说明" description="工具的数据属于你自己。我们尽量少收集，并把数据留在本机。" />
      <div className="container-page"><Breadcrumbs items={[{ label: "隐私说明" }]} /><div className="max-w-prose py-10"><ContentSections sections={sections} /></div></div>
    </>
  );
}
