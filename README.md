# Nutri Life 营养生活

> 吃得明白，才能活得健康。Eat Well. Live Well.

一个中文营养与健康饮食知识平台：营养科学、食物百科、健康饮食、实用食谱、食品标签、营养与健康专题、研究解读、书籍、权威资源与交互工具。

## 技术栈

- Next.js 14（App Router）+ TypeScript
- Tailwind CSS + shadcn 风格 UI 基础组件 + Lucide Icons
- Apache ECharts（按需客户端加载）
- React Hook Form + Zod（营养估算器表单）
- Zod 类型校验、结构化内容数据、本地 SVG 插画
- localStorage 本地记录，支持 CSV / JSON 导出

## 本地运行

```bash
npm install
npm run dev          # 开发服务器 http://localhost:3000
npm run build        # 静态导出到 out/
npm start            # 本地预览 out/（先执行 build）
npm run build:pages  # 带 /nutri-life basePath 的 GitHub Pages 构建
npm run lint         # ESLint
npm run typecheck    # TypeScript 检查
```

## GitHub Pages 部署

线上地址：<https://www.yuxin.run/nutri-life/>

- 站点使用 `output: "export"` 静态导出，构建产物在 `out/`。
- GitHub Actions 工作流：`.github/workflows/deploy-pages.yml`，推送 `main` 或手动触发时自动构建并部署。
- 项目站点使用 `/nutri-life` basePath；`next.config.mjs` 从 `NEXT_PUBLIC_BASE_PATH` 读取，`build:pages` 脚本已设置。
- 首次部署需在仓库 **Settings → Pages → Build and deployment** 中将 Source 设为 **GitHub Actions**。
- 已绑定自定义域名 `www.yuxin.run`，站点仍是项目路径 `/nutri-life`，因此保留 basePath。
- 若改为域名根路径部署，需要去除 `NEXT_PUBLIC_BASE_PATH`，并同步修改 `src/lib/seo.ts` 中的 `origin` 与 `url`。

## 内容规模

| 类型 | 数量 | 位置 |
| --- | --- | --- |
| 深度文章 | 30 | `src/content/articles-a.ts`、`articles-b.ts` |
| 营养素 | 6 | `src/data/nutrients.ts` |
| 食物百科 | 30 | `src/data/foods.ts` |
| 食谱 | 16 | `src/data/recipes.ts` |
| 健康专题 | 9 | `src/content/topics.ts` |
| 研究解读 | 8 | `src/data/research.ts` |
| 书籍 | 20 | `src/data/books.ts` |
| 权威资源 | 30 | `src/data/resources.ts` |
| 栏目指南 | 38 | `src/data/guides.ts` |
| 原创 SVG 插画 | 18 | `src/components/illustrations/` |
| 交互工具 | 9 | `src/components/tools/` |
| ECharts 图表 | 10+ | `src/components/charts/charts.tsx` |

## 目录结构

```text
src/
  app/                 # App Router 页面、动态详情、sitemap、robots、RSS
  components/
    layout/            # 导航、页脚、页面头
    content/           # 内容渲染、卡片、目录、阅读进度
    charts/            # ECharts 图表
    illustrations/     # 原创 SVG
    filters/           # 搜索与筛选
    tools/             # 交互工具
    ui/                # 基础 UI
  content/             # 文章与专题
  data/                # 营养素、食物、食谱、书籍、资源、研究、指南
  lib/                 # 搜索、SEO、营养计算、本地存储、工具函数
  types/               # 统一内容类型
```

## 内容原则

- 引用权威机构指南、官方数据库与系统综述；每篇文章附参考资料。
- 食物营养数据标注来源、单位、生熟状态、可食部与计量口径。
- 食谱营养值明确标注为计算估算，不伪装成检测值。
- 区分相关性与因果；不把动物实验当作人体结论；不承诺疾病治疗效果。
- 对孕妇、儿童、老年人、慢性病患者提供谨慎提示。
- 争议性书籍与饮食模式给出明确评价边界。

## SEO

- 各页面独立 title/description/canonical/Open Graph/Twitter Card
- `sitemap.xml`、`robots.txt`、`rss.xml`
- WebSite、Article、Recipe、Book JSON-LD
- 面包屑、目录、内部链接推荐

## 说明

站点中的联系邮箱与订阅表单为演示实现，不会上传数据。部署到真实域名时，请将 `src/lib/seo.ts` 中的 `siteConfig.url` 与联系邮箱替换为真实信息。
