import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="面包屑" className="flex flex-wrap items-center gap-1.5 py-5 text-xs text-muted">
      <Link href="/" className="flex items-center gap-1 hover:text-forest"><Home className="h-3.5 w-3.5" />首页</Link>
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-1.5">
          <ChevronRight className="h-3 w-3 opacity-60" />
          {item.href ? <Link href={item.href} className="hover:text-forest">{item.label}</Link> : <span className="text-ink/80">{item.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden border-b border-line bg-gradient-to-b from-sand/60 to-cream", className)}>
      <div className="grain pointer-events-none absolute inset-0 opacity-50" />
      <div className="container-page relative py-12 sm:py-16">
        {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
        <h1 className="max-w-3xl text-3xl leading-tight sm:text-4xl lg:text-[44px]">{title}</h1>
        {description ? <p className="mt-4 max-w-2xl text-base leading-8 text-ink/75">{description}</p> : null}
        {children ? <div className="mt-6">{children}</div> : null}
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? <p className="eyebrow mb-2">{eyebrow}</p> : null}
        <h2 className="text-2xl sm:text-[28px]">{title}</h2>
        {description ? <p className="mt-2 max-w-2xl text-sm leading-7 text-ink/70">{description}</p> : null}
      </div>
      {action}
    </div>
  );
}
