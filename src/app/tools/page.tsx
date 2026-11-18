import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calculator, BookOpen, CalendarDays, Tags, Droplets, ShoppingBasket, ClipboardCheck, Utensils, LayoutDashboard } from "lucide-react";
import { PageHeader, Breadcrumbs, SectionHeading } from "@/components/layout/page-header";
import { Card } from "@/components/ui/card";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "工具中心", description: "营养摄入估算、饮食记录、每周规划、标签解读、饮水记录、购物清单与习惯复盘工具。", path: "/tools" });

const tools = [
  { href: "/tools/nutrition-calculator", title: "营养摄入估算器", desc: "估算静息代谢、总消耗与宏量营养素参考量。", icon: Calculator },
  { href: "/tools/food-diary", title: "每日饮食记录", desc: "记录三餐，自动汇总营养并生成趋势。", icon: BookOpen },
  { href: "/tools/meal-planner", title: "每周饮食规划", desc: "用食谱安排七天餐次并导出 JSON。", icon: CalendarDays },
  { href: "/tools/food-label-reader", title: "食品标签解读器", desc: "换算能量、糖、钠与每份实际摄入。", icon: Tags },
  { href: "/tools/food-lookup", title: "食物营养查询", desc: "搜索食物并对比蛋白质含量。", icon: Utensils },
  { href: "/tools/plate-builder", title: "均衡膳食搭配", desc: "按餐盘结构搭配一餐并查看构成。", icon: LayoutDashboard },
  { href: "/tools/water-tracker", title: "饮水记录", desc: "记录每日饮水并查看每周趋势。", icon: Droplets },
  { href: "/tools/shopping-list", title: "健康购物清单", desc: "按食物组生成清单并导出。", icon: ShoppingBasket },
  { href: "/tools/habit-review", title: "饮食习惯复盘", desc: "六问复盘并记录 7 天行为趋势。", icon: ClipboardCheck },
];

export default function ToolsPage() {
  return (
    <>
      <PageHeader eyebrow="Tools" title="工具中心" description="把知识变成行动。所有工具均可直接使用，记录保存在你的浏览器本地；估算值明确标注，不作为医学诊断。" />
      <div className="container-page">
        <Breadcrumbs items={[{ label: "工具中心" }]} />
        <SectionHeading eyebrow="9 个工具" title="选择你需要的工具" description="无需注册，不上传数据。可导出 CSV 或 JSON 备份你的记录。" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <Link key={tool.href} href={tool.href} className="group">
                <Card className="h-full p-6 hover:-translate-y-0.5 hover:border-forest/30 hover:shadow-lift">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/20 text-forest"><Icon className="h-5 w-5" /></span>
                  <h2 className="mt-4 flex items-center gap-1 font-serif text-xl group-hover:text-forest">{tool.title}<ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" /></h2>
                  <p className="mt-2 text-sm leading-6 text-ink/70">{tool.desc}</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
