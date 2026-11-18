import type { SearchItem } from "@/types";
import { articles } from "@/content/articles";
import { nutrients } from "@/data/nutrients";
import { foods } from "@/data/foods";
import { recipes } from "@/data/recipes";
import { books } from "@/data/books";
import { resources } from "@/data/resources";
import { researchItems } from "@/data/research";
import { topics } from "@/content/topics";
import { allGuides } from "@/data/guides";

export const searchIndex: SearchItem[] = [
  ...articles.map((a) => ({ title: a.title, description: a.summary, href: `/articles/${a.slug}`, category: a.category, kind: a.kind, keywords: a.tags.join(" ") })),
  ...nutrients.map((n) => ({ title: n.title, description: n.summary, href: `/nutrients/${n.slug}`, category: n.category, kind: n.kind, keywords: n.aliases.join(" ") + " " + n.tags.join(" ") })),
  ...foods.map((f) => ({ title: f.title, description: f.summary, href: `/foods/${f.slug}`, category: f.categoryName, kind: f.kind, keywords: f.tags.join(" ") })),
  ...recipes.map((r) => ({ title: r.title, description: r.summary, href: `/recipes/${r.slug}`, category: r.categoryName, kind: r.kind, keywords: r.tags.join(" ") })),
  ...books.map((b) => ({ title: b.title, description: b.summary, href: `/books/${b.slug}`, category: b.category, kind: b.kind, keywords: `${b.originalTitle} ${b.author} ${b.tags.join(" ")}` })),
  ...resources.map((r) => ({ title: r.title, description: r.summary, href: `/resources#${r.slug}`, category: r.category, kind: r.kind, keywords: `${r.organization} ${r.tags.join(" ")}` })),
  ...researchItems.map((r) => ({ title: r.title, description: r.summary, href: `/nutrition-research/${r.slug}`, category: r.category, kind: r.kind, keywords: r.tags.join(" ") })),
  ...topics.map((t) => ({ title: t.title, description: t.summary, href: `/nutrition-health/${t.slug}`, category: t.category, kind: t.kind, keywords: t.tags.join(" ") })),
  ...allGuides.map((g) => ({ title: g.title, description: g.summary, href: `/guides/${g.slug}`, category: g.category, kind: g.kind, keywords: g.tags.join(" ") })),
];

export function searchContent(query: string, limit = 20): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);
  return searchIndex
    .map((item) => {
      const haystack = `${item.title} ${item.description} ${item.category} ${item.keywords}`.toLowerCase();
      let score = 0;
      for (const term of terms) {
        if (item.title.toLowerCase().includes(term)) score += 6;
        if (item.keywords.toLowerCase().includes(term)) score += 3;
        if (item.description.toLowerCase().includes(term)) score += 2;
        if (item.category.toLowerCase().includes(term)) score += 1;
      }
      return { item, score };
    })
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ item }) => item);
}

export const kindLabels: Record<string, string> = {
  article: "文章",
  nutrient: "营养素",
  food: "食物",
  recipe: "食谱",
  book: "书籍",
  resource: "资源",
  research: "研究",
  guide: "指南",
  topic: "专题",
};
