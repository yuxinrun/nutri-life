import type { Metadata } from "next";

export const siteConfig = {
  name: "Nutri Life 营养生活",
  shortName: "Nutri Life",
  origin: "https://www.yuxin.run",
  url: "https://www.yuxin.run/nutri-life",
  description:
    "从营养科学到一日三餐，系统了解食物、营养与身体的关系，让每一次饮食选择都更有依据。",
  slogan: "吃得明白，才能活得健康。",
};

export function absoluteUrl(path = "/") {
  const normalized = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  return `${siteConfig.url}${normalized}`;
}

export function pageMetadata({
  title,
  description,
  path = "/",
  type = "website",
  image = `${siteConfig.url}/illustrations/hero.svg`,
}: {
  title: string;
  description: string;
  path?: string;
  type?: "website" | "article";
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "zh_CN",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    alternateName: "营养生活",
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "zh-CN",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function articleJsonLd(input: {
  title: string;
  description: string;
  path: string;
  date: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: absoluteUrl(input.path),
    datePublished: input.date,
    dateModified: input.date,
    author: { "@type": "Person", name: input.author },
    publisher: { "@type": "Organization", name: siteConfig.name },
    inLanguage: "zh-CN",
  };
}

export function recipeJsonLd(input: {
  name: string;
  description: string;
  path: string;
  minutes: number;
  servings: number;
  ingredients: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Recipe",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    recipeIngredient: input.ingredients,
    recipeInstructions: [],
    totalTime: `PT${input.minutes}M`,
    recipeYield: `${input.servings}份`,
    inLanguage: "zh-CN",
  };
}

export function bookJsonLd(input: {
  title: string;
  author: string;
  publisher: string;
  isbn?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Book",
    name: input.title,
    author: { "@type": "Person", name: input.author },
    publisher: { "@type": "Organization", name: input.publisher },
    ...(input.isbn ? { isbn: input.isbn } : {}),
    inLanguage: "zh-CN",
  };
}
