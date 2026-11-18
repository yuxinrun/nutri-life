"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, List } from "lucide-react";
import type { ContentSection } from "@/types";
import { cn } from "@/lib/utils";

export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? Math.min(100, (window.scrollY / height) * 100) : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <div className="fixed left-0 top-16 z-30 h-0.5 w-full bg-transparent sm:top-[72px]">
      <div className="h-full bg-apricot transition-all duration-150" style={{ width: `${progress}%` }} />
    </div>
  );
}

export function TableOfContents({ sections }: { sections: ContentSection[] }) {
  return (
    <aside className="rounded-card border border-line bg-white/70 p-5">
      <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-forest">
        <List className="h-3.5 w-3.5" /> 本页目录
      </p>
      <nav className="space-y-2">
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className={cn(
              "flex gap-2 text-sm leading-6 text-ink/70 hover:text-forest",
              index === 0 && "text-forest",
            )}
          >
            <span className="mt-0.5 text-[11px] text-muted">{String(index + 1).padStart(2, "0")}</span>
            {section.heading}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export function RelatedLinks({ links }: { links: { label: string; href: string }[] }) {
  if (!links.length) return null;
  return (
    <section className="rounded-card border border-line bg-sand/50 p-5 sm:p-6">
      <h2 className="mb-4 text-lg">延伸阅读</h2>
      <div className="grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="flex items-center justify-between gap-2 rounded-xl bg-white px-4 py-3 text-sm text-ink/80 hover:text-forest"
          >
            <span>{link.label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted" />
          </Link>
        ))}
      </div>
    </section>
  );
}
