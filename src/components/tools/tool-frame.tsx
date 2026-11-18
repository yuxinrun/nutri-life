import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowLeft, Info } from "lucide-react";
import { Card } from "@/components/ui/card";

export function ToolFrame({
  title,
  description,
  notice,
  children,
}: {
  title: string;
  description: string;
  notice?: string;
  children: ReactNode;
}) {
  return (
    <div className="container-page">
      <Link href="/tools" className="mb-6 inline-flex items-center gap-1.5 text-xs text-muted hover:text-forest"><ArrowLeft className="h-3.5 w-3.5" />返回工具中心</Link>
      <header className="mb-8">
        <p className="eyebrow mb-2">Nutrition Tool</p>
        <h1 className="text-3xl sm:text-4xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-ink/75">{description}</p>
      </header>
      <Card className="mb-6 flex gap-3 border-sage/40 bg-sage/10 p-4 text-xs leading-6 text-forest">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        <p>{notice ?? "本工具给出的结果为计算估算，不是实验室检测值，也不构成医学诊断或个体化治疗方案。数据保存在你的浏览器本地，不会上传。"}</p>
      </Card>
      {children}
    </div>
  );
}
