"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Leaf, Menu, Search, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { SearchDialog } from "@/components/common/search-dialog";

const navGroups = [
  {
    label: "营养知识",
    items: [
      { label: "营养科学", href: "/nutrition-science" },
      { label: "营养素", href: "/nutrients" },
      { label: "营养研究", href: "/nutrition-research" },
      { label: "营养与健康", href: "/nutrition-health" },
    ],
  },
  {
    label: "食物与饮食",
    items: [
      { label: "食物百科", href: "/foods" },
      { label: "健康饮食", href: "/healthy-eating" },
      { label: "实用食谱", href: "/recipes" },
      { label: "食品标签", href: "/food-labels" },
    ],
  },
  {
    label: "探索更多",
    items: [
      { label: "书籍推荐", href: "/books" },
      { label: "专业资源", href: "/resources" },
      { label: "工具中心", href: "/tools" },
      { label: "深度文章", href: "/articles" },
    ],
  },
];

const flatNav = navGroups.flatMap((group) => group.items);

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line/80 bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/85">
        <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-18">
          <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Nutri Life 首页">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <span className="block font-serif text-[17px] font-semibold tracking-tight text-forest">Nutri Life</span>
              <span className="block text-[10px] tracking-[0.2em] text-muted">营养生活</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.label)}
                onMouseLeave={() => setOpenGroup(null)}
              >
                <button
                  className={cn(
                    "flex items-center gap-1 rounded-pill px-3 py-2 text-sm text-ink/80 hover:bg-forest/5 hover:text-forest",
                    group.items.some((item) => isActive(item.href)) && "text-forest",
                  )}
                  onClick={() => setOpenGroup(openGroup === group.label ? null : group.label)}
                  aria-expanded={openGroup === group.label}
                >
                  {group.label}
                  <ChevronDown className="h-3.5 w-3.5 opacity-60" />
                </button>
                {openGroup === group.label ? (
                  <div className="absolute left-0 top-full w-56 rounded-card border border-line bg-white p-2 shadow-lift">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block rounded-lg px-3 py-2 text-sm text-ink/80 hover:bg-sand/70 hover:text-forest",
                          isActive(item.href) && "bg-sand/70 text-forest",
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-10 items-center gap-2 rounded-pill border border-line bg-white px-3 text-sm text-muted hover:border-forest/30 hover:text-forest"
              aria-label="打开全站搜索"
            >
              <Search className="h-4 w-4" />
              <span className="hidden xl:inline">搜索知识、食物、食谱…</span>
            </button>
            <Button asChild size="sm" className="hidden sm:inline-flex">
              <Link href="/tools">打开工具箱</Link>
            </Button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-pill border border-line bg-white lg:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-line bg-cream lg:hidden">
            <div className="container-page grid gap-4 py-5 sm:grid-cols-2">
              {navGroups.map((group) => (
                <div key={group.label}>
                  <p className="eyebrow mb-2">{group.label}</p>
                  <div className="grid gap-1">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className={cn("rounded-lg px-3 py-2 text-sm", isActive(item.href) ? "bg-forest text-cream" : "text-ink/80 hover:bg-sand")}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="sm:col-span-2">
                <Link href="/tools" onClick={() => setMenuOpen(false)} className="block rounded-xl bg-forest px-4 py-3 text-center text-sm font-medium text-cream">
                  打开工具箱
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </header>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      <span className="sr-only">{flatNav.length} 个栏目入口</span>
    </>
  );
}
