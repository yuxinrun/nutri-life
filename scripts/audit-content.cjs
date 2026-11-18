const fs = require("fs");
const path = require("path");

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      if (!["node_modules", ".next", ".git"].includes(name)) walk(full, out);
    } else if (/\.(ts|tsx)$/.test(name)) out.push(full);
  }
  return out;
}

const files = walk("src");
const allSource = files.map((f) => fs.readFileSync(f, "utf8")).join("\n");

const staticPaths = new Set([
  "/", "/nutrition-science", "/nutrients", "/foods", "/healthy-eating", "/recipes", "/food-labels",
  "/nutrition-health", "/nutrition-research", "/books", "/resources", "/tools", "/articles",
  "/about", "/editorial-policy", "/sources", "/privacy", "/contact", "/search", "/illustrations",
  "/tools/nutrition-calculator", "/tools/food-diary", "/tools/meal-planner", "/tools/food-label-reader",
  "/tools/food-lookup", "/tools/plate-builder", "/tools/water-tracker", "/tools/shopping-list", "/tools/habit-review",
]);

const slugs = (file, prefix) => {
  const text = fs.readFileSync(file, "utf8");
  return [...text.matchAll(/slug:\s*["']([^"']+)["']/g)].map((m) => `${prefix}/${m[1]}`);
};

[
  ["src/content/articles-a.ts", "/articles"], ["src/content/articles-b.ts", "/articles"],
  ["src/data/nutrients.ts", "/nutrients"], ["src/data/foods.ts", "/foods"],
  ["src/data/recipes.ts", "/recipes"], ["src/data/books.ts", "/books"],
  ["src/data/research.ts", "/nutrition-research"], ["src/content/topics.ts", "/nutrition-health"],
  ["src/data/guides.ts", "/guides"], ["src/data/resources.ts", "/resources"],
].forEach(([file, prefix]) => slugs(file, prefix).forEach((p) => staticPaths.add(p)));

const hrefs = [...allSource.matchAll(/href=["'](\/[^"'#?]*)/g)].map((m) => m[1]);
const dynamicHrefs = [...allSource.matchAll(/href:\s*[`"]\/([a-z-]+)\/\$\{[^}]+\}/g)].map((m) => m[1]);
const broken = [...new Set(hrefs.filter((h) => !staticPaths.has(h) && !h.startsWith("/illustrations")))];

console.log("内部静态链接检查：", broken.length ? broken.join("\n") : "全部有效");
console.log("动态链接前缀：", [...new Set(dynamicHrefs)].join(", "));
console.log("占位文本检查：", /lorem ipsum|TODO|占位符/i.test(allSource) ? "发现占位文本" : "无占位文本");
console.log("内容条目数：", {
  articles: (allSource.match(/slug: "[^"]+", title:/g) || []).length,
  sections: (allSource.match(/id: "[a-z-]+", heading:/g) || []).length,
  references: (allSource.match(/url: "https?:\/\//g) || []).length,
});
