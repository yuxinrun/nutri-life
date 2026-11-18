import { articles } from "@/content/articles";
import { siteConfig, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

function escapeXml(value: string) {
  return value.replace(/[<>&"']/g, (char) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[char] ?? char);
}

export function GET() {
  const items = articles
    .slice()
    .sort((a, b) => b.updatedAt.localeCompare(a.updatedAt))
    .slice(0, 20)
    .map((article) => `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${absoluteUrl(`/articles/${article.slug}`)}</link>
      <guid isPermaLink="true">${absoluteUrl(`/articles/${article.slug}`)}</guid>
      <description>${escapeXml(article.summary)}</description>
      <pubDate>${new Date(article.updatedAt).toUTCString()}</pubDate>
      <category>${escapeXml(article.category)}</category>
    </item>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${siteConfig.name}</title>
    <link>${siteConfig.url}</link>
    <description>${escapeXml(siteConfig.description)}</description>
    <language>zh-CN</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
