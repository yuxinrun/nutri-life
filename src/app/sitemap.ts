import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { articles } from "@/content/articles";
import { nutrients } from "@/data/nutrients";
import { foods } from "@/data/foods";
import { recipes } from "@/data/recipes";
import { books } from "@/data/books";
import { researchItems } from "@/data/research";
import { topics } from "@/content/topics";
import { allGuides } from "@/data/guides";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "", "/nutrition-science", "/nutrients", "/foods", "/healthy-eating", "/recipes", "/food-labels",
    "/nutrition-health", "/nutrition-research", "/books", "/resources", "/tools", "/articles",
    "/about", "/editorial-policy", "/sources", "/privacy", "/contact", "/search", "/illustrations",
    "/tools/nutrition-calculator", "/tools/food-diary", "/tools/meal-planner", "/tools/food-label-reader",
    "/tools/food-lookup", "/tools/plate-builder", "/tools/water-tracker", "/tools/shopping-list", "/tools/habit-review",
  ];
  return [
    ...staticPaths.map((path) => ({ url: absoluteUrl(path || "/"), lastModified: new Date("2026-11-18"), changeFrequency: "weekly" as const, priority: path === "" ? 1 : 0.8 })),
    ...articles.map((a) => ({ url: absoluteUrl(`/articles/${a.slug}`), lastModified: new Date(a.updatedAt), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...nutrients.map((n) => ({ url: absoluteUrl(`/nutrients/${n.slug}`), lastModified: new Date(n.updatedAt), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...foods.map((f) => ({ url: absoluteUrl(`/foods/${f.slug}`), lastModified: new Date(f.updatedAt), changeFrequency: "monthly" as const, priority: 0.6 })),
    ...recipes.map((r) => ({ url: absoluteUrl(`/recipes/${r.slug}`), lastModified: new Date(r.updatedAt), changeFrequency: "monthly" as const, priority: 0.6 })),
    ...books.map((b) => ({ url: absoluteUrl(`/books/${b.slug}`), lastModified: new Date(b.updatedAt), changeFrequency: "monthly" as const, priority: 0.5 })),
    ...researchItems.map((r) => ({ url: absoluteUrl(`/nutrition-research/${r.slug}`), lastModified: new Date(r.updatedAt), changeFrequency: "monthly" as const, priority: 0.6 })),
    ...topics.map((t) => ({ url: absoluteUrl(`/nutrition-health/${t.slug}`), lastModified: new Date(t.updatedAt), changeFrequency: "monthly" as const, priority: 0.7 })),
    ...allGuides.map((g) => ({ url: absoluteUrl(`/guides/${g.slug}`), lastModified: new Date(g.updatedAt), changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
