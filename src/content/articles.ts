import type { Article } from "@/types";
import { articlesA } from "./articles-a";
import { articlesB } from "./articles-b";

export const articles: Article[] = [...articlesA, ...articlesB];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: string) {
  return articles.filter((article) => article.category === category);
}

export const articleCategories = Array.from(
  articles.reduce((map, article) => {
    map.set(article.category, (map.get(article.category) ?? 0) + 1);
    return map;
  }, new Map<string, number>()),
).map(([name, count]) => ({ name, count }));
