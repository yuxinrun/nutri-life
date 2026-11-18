import Link from "next/link";
import { Leaf, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/seo";

const columns = [
  {
    title: "营养知识",
    links: [
      ["/nutrition-science", "营养科学"],
      ["/nutrients", "营养素"],
      ["/nutrition-research", "营养研究"],
      ["/nutrition-health", "营养与健康"],
      ["/articles", "深度文章"],
    ],
  },
  {
    title: "食物与饮食",
    links: [
      ["/foods", "食物百科"],
      ["/healthy-eating", "健康饮食"],
      ["/recipes", "实用食谱"],
      ["/food-labels", "食品标签"],
      ["/books", "书籍推荐"],
    ],
  },
  {
    title: "工具与资源",
    links: [
      ["/tools", "工具中心"],
      ["/tools/nutrition-calculator", "营养摄入估算"],
      ["/tools/food-diary", "饮食记录"],
      ["/tools/meal-planner", "每周饮食规划"],
      ["/resources", "专业资源"],
    ],
  },
  {
    title: "关于",
    links: [
      ["/about", "关于我们"],
      ["/editorial-policy", "编辑与审核原则"],
      ["/sources", "参考资料"],
      ["/privacy", "隐私说明"],
      ["/contact", "联系我们"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-line bg-sand/40">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.3fr_2fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream">
              <Leaf className="h-5 w-5" />
            </span>
            <span>
              <span className="block font-serif text-lg font-semibold text-forest">Nutri Life</span>
              <span className="block text-[10px] tracking-[0.2em] text-muted">营养生活</span>
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-ink/75">
            吃得科学，活得健康。我们把营养科学、食物数据、实用工具与可靠资源整理在一起，帮助每一次饮食选择更有依据。
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-3 text-sm font-semibold text-forest">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map(([href, label]) => (
                  <li key={href}>
                    <Link href={href} className="text-xs text-ink/70 hover:text-forest">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-line/80">
        <div className="container-page flex flex-col gap-2 py-5 text-[11px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {siteConfig.name}. 内容仅供科普，不构成医疗建议。</p>
          <p className="flex items-center gap-1">
            科学来源可追溯 <ExternalLink className="h-3 w-3" />
            <Link href="/sources" className="ml-1 underline underline-offset-2 hover:text-forest">查看参考资料</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
