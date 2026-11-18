import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, Clock3, BookOpen, UtensilsCrossed, Apple, FlaskConical, Globe2, Leaf } from "lucide-react";
import type { Article, Book, Food, Guide, HealthTopic, Recipe, ResearchItem, WebResource } from "@/types";
import { Badge, Card } from "@/components/ui/card";
import { cn, formatDate } from "@/lib/utils";

function CardShell({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn("group block h-full", className)}>
      <Card className="h-full p-5 hover:-translate-y-0.5 hover:border-forest/30 hover:shadow-lift sm:p-6">{children}</Card>
    </Link>
  );
}

function CardTop({ icon, category, date }: { icon: ReactNode; category: string; date?: string }) {
  return (
    <div className="mb-3 flex items-center justify-between gap-2">
      <span className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-forest/70">
        {icon}
        {category}
      </span>
      {date ? <span className="text-[11px] text-muted">{formatDate(date)}</span> : null}
    </div>
  );
}

export function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  return (
    <CardShell href={`/articles/${article.slug}`}>
      <CardTop icon={<BookOpen className="h-3.5 w-3.5" />} category={article.category} date={article.updatedAt} />
      <h3 className={cn("font-serif leading-snug text-ink group-hover:text-forest", compact ? "text-lg" : "text-xl")}>{article.title}</h3>
      {!compact ? <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/70">{article.summary}</p> : null}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        {article.tags.slice(0, 3).map((tag) => <Badge key={tag}>{tag}</Badge>)}
        <span className="ml-auto flex items-center gap-1 text-[11px] text-muted"><Clock3 className="h-3 w-3" />{article.readingMinutes} 分钟</span>
      </div>
    </CardShell>
  );
}

export function FoodCard({ food }: { food: Food }) {
  const p = food.nutritionPer100g;
  return (
    <CardShell href={`/foods/${food.slug}`}>
      <CardTop icon={<Apple className="h-3.5 w-3.5" />} category={food.categoryName} />
      <h3 className="font-serif text-xl group-hover:text-forest">{food.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/70">{food.summary}</p>
      <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-cream p-3 text-center">
        <div><p className="text-sm font-semibold text-forest">{p.energyKcal ?? "—"}</p><p className="text-[10px] text-muted">kcal/100g</p></div>
        <div><p className="text-sm font-semibold text-forest">{p.proteinG ?? "—"}</p><p className="text-[10px] text-muted">蛋白质 g</p></div>
        <div><p className="text-sm font-semibold text-forest">{p.fiberG ?? "—"}</p><p className="text-[10px] text-muted">纤维 g</p></div>
      </div>
      <p className="mt-3 text-[11px] text-muted">数据口径：{food.state}</p>
    </CardShell>
  );
}

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <CardShell href={`/recipes/${recipe.slug}`}>
      <CardTop icon={<UtensilsCrossed className="h-3.5 w-3.5" />} category={recipe.categoryName} />
      <h3 className="font-serif text-xl group-hover:text-forest">{recipe.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/70">{recipe.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-muted">
        <span>准备 {recipe.prepMinutes} 分钟</span><span>·</span>
        <span>烹饪 {recipe.cookMinutes} 分钟</span><span>·</span>
        <span>{recipe.servings} 人份</span>
      </div>
    </CardShell>
  );
}

export function BookCard({ book }: { book: Book }) {
  return (
    <CardShell href={`/books/${book.slug}`}>
      <div className="flex gap-4">
        <div className={cn("flex h-24 w-16 shrink-0 flex-col justify-between rounded-lg p-2 text-[10px] leading-tight text-cream shadow-soft", book.coverStyle === "apricot" ? "bg-apricot" : book.coverStyle === "sage" ? "bg-sage" : book.coverStyle === "ink" ? "bg-ink" : "bg-forest")}>
          <span className="font-serif text-[11px] font-semibold">{book.originalTitle.split(":")[0].slice(0, 22)}</span>
          <span className="opacity-80">{book.author.split(",")[0].slice(0, 18)}</span>
        </div>
        <div className="min-w-0">
          <CardTop icon={<BookOpen className="h-3.5 w-3.5" />} category={book.category} />
          <h3 className="font-serif text-lg leading-snug group-hover:text-forest">{book.title}</h3>
          <p className="mt-1 text-xs text-muted">{book.author} · {book.publisher}</p>
          <p className="mt-2 line-clamp-2 text-xs leading-5 text-ink/70">{book.summary}</p>
        </div>
      </div>
    </CardShell>
  );
}

export function ResourceCard({ resource }: { resource: WebResource }) {
  return (
    <CardShell href={`/resources#${resource.slug}`}>
      <CardTop icon={<Globe2 className="h-3.5 w-3.5" />} category={`${resource.region} · ${resource.organizationType}`} />
      <h3 className="font-serif text-lg group-hover:text-forest">{resource.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/70">{resource.summary}</p>
      <div className="mt-4 flex items-center justify-between text-[11px] text-muted">
        <span>{resource.language}</span>
        <span className="flex items-center gap-1 text-forest">访问官网 <ArrowUpRight className="h-3 w-3" /></span>
      </div>
    </CardShell>
  );
}

export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <CardShell href={`/nutrition-research/${item.slug}`}>
      <CardTop icon={<FlaskConical className="h-3.5 w-3.5" />} category={item.category} date={item.updatedAt} />
      <h3 className="font-serif text-lg leading-snug group-hover:text-forest">{item.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/70">{item.summary}</p>
      <div className="mt-4 flex items-center justify-between">
        <Badge tone={item.evidenceLevel === "强" ? "forest" : "neutral"}>证据等级 {item.evidenceLevel}</Badge>
        <span className="text-[11px] text-muted">{item.readingMinutes} 分钟</span>
      </div>
    </CardShell>
  );
}

export function TopicCard({ topic }: { topic: HealthTopic }) {
  return (
    <CardShell href={`/nutrition-health/${topic.slug}`}>
      <CardTop icon={<Leaf className="h-3.5 w-3.5" />} category="营养与健康" />
      <h3 className="font-serif text-xl group-hover:text-forest">{topic.title}</h3>
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink/70">{topic.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">{topic.tags.slice(0, 3).map((tag) => <Badge key={tag}>{tag}</Badge>)}</div>
    </CardShell>
  );
}

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <CardShell href={`/guides/${guide.slug}`}>
      <CardTop icon={<Leaf className="h-3.5 w-3.5" />} category={guide.category} />
      <h3 className="font-serif text-lg group-hover:text-forest">{guide.title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink/70">{guide.summary}</p>
    </CardShell>
  );
}
