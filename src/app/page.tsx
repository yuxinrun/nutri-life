import Link from "next/link";
import { ArrowRight, ArrowUpRight, BookOpen, Sparkles, UtensilsCrossed, Apple, FlaskConical, Globe2, Wrench, ShieldCheck, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/card";
import { SectionHeading } from "@/components/layout/page-header";
import { HeroArt, Illustration } from "@/components/illustrations";
import { ArticleCard, BookCard, FoodCard, RecipeCard, ResearchCard, ResourceCard, TopicCard } from "@/components/content/cards";
import { Newsletter } from "@/components/home/newsletter";
import { articles } from "@/content/articles";
import { topics } from "@/content/topics";
import { nutrients } from "@/data/nutrients";
import { foods, foodCategories } from "@/data/foods";
import { recipes } from "@/data/recipes";
import { books } from "@/data/books";
import { resources } from "@/data/resources";
import { researchItems } from "@/data/research";
import { healthyEatingGuides } from "@/data/guides";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Nutri Life 营养生活｜吃得明白，才能活得健康",
  description: "从营养科学到一日三餐，系统了解食物、营养与身体的关系。营养知识、食物百科、健康食谱、研究解读与实用工具。",
  path: "/",
});

const toolLinks = [
  { label: "营养摄入估算", href: "/tools/nutrition-calculator", desc: "按身体数据与活动水平估算能量需要" },
  { label: "每日饮食记录", href: "/tools/food-diary", desc: "记录三餐并自动汇总营养构成" },
  { label: "每周饮食规划", href: "/tools/meal-planner", desc: "安排七天的餐次与食物类别" },
  { label: "食品标签解读", href: "/tools/food-label-reader", desc: "换算能量、糖与钠，识别每份陷阱" },
  { label: "饮水记录", href: "/tools/water-tracker", desc: "追踪每日饮水量与周趋势" },
  { label: "健康购物清单", href: "/tools/shopping-list", desc: "按食物组生成结构化采购清单" },
];

export default function HomePage() {
  const featured = articles.filter((a) => a.featured).slice(0, 3);
  const latest = articles.filter((a) => !a.featured).slice(0, 6);
  const picks = ["egg", "salmon", "spinach", "oats"].map((slug) => foods.find((f) => f.slug === slug)!).filter(Boolean);
  const recipePicks = ["overnight-oats", "baked-salmon", "tofu-vegetable-soup"].map((slug) => recipes.find((r) => r.slug === slug)!).filter(Boolean);
  const bookPicks = books.slice(13, 17);
  const resourcePicks = ["who", "harvard-nutrition-source", "usda-fdc", "cnsoc"].map((slug) => resources.find((r) => r.slug === slug)!).filter(Boolean);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-sand/50">
        <div className="grain pointer-events-none absolute inset-0 opacity-70" />
        <div className="container-page relative grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-24">
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-pill border border-forest/15 bg-white/70 px-3 py-1.5 text-xs text-forest">
              <Sparkles className="h-3.5 w-3.5" /> 科学 · 系统 · 可读 · 实用
            </div>
            <h1 className="text-4xl leading-[1.18] sm:text-5xl lg:text-[58px]">吃得明白，<br />才能活得健康。</h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-ink/75 sm:text-lg">
              从营养科学到一日三餐，系统了解食物、营养与身体的关系，让每一次饮食选择都更有依据。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/nutrition-science">探索营养知识 <ArrowRight className="h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/healthy-eating">开始健康饮食</Link></Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-6 text-xs text-muted">
              <span><strong className="mr-1 font-serif text-lg text-forest">{articles.length}</strong> 篇深度文章</span>
              <span><strong className="mr-1 font-serif text-lg text-forest">{foods.length}</strong> 种食物数据</span>
              <span><strong className="mr-1 font-serif text-lg text-forest">{recipes.length}</strong> 份实用食谱</span>
              <span><strong className="mr-1 font-serif text-lg text-forest">{resources.length}</strong> 个权威资源</span>
            </div>
          </div>
          <div className="relative animate-fade-up [animation-delay:120ms]">
            <HeroArt className="w-full rounded-[24px] shadow-lift" />
            <div className="absolute -bottom-4 left-4 rounded-card border border-line bg-white/95 px-4 py-3 shadow-soft sm:left-8">
              <p className="text-[11px] text-muted">Eat Well. Live Well.</p>
              <p className="font-serif text-sm text-forest">吃得科学，活得健康。</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-page py-16 sm:py-20">
        {/* 今日营养知识 */}
        <section className="mb-20">
          <SectionHeading
            eyebrow="Today's Nutrition"
            title="今日营养知识"
            description="从今天最值得读懂的一个问题开始。"
            action={<Link href="/articles" className="flex items-center gap-1 text-sm text-forest hover:underline">查看全部文章 <ArrowUpRight className="h-4 w-4" /></Link>}
          />
          <div className="grid gap-5 md:grid-cols-3">
            {featured.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </section>

        {/* 六大营养素 */}
        <section className="mb-20 rounded-[24px] bg-forest px-6 py-10 text-cream sm:px-10 sm:py-12">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Nutrients</p>
              <h2 className="mt-2 text-2xl text-cream sm:text-[28px]">六大营养素知识入口</h2>
              <p className="mt-2 text-sm text-cream/70">每一类都有独立的定义、功能、来源、缺乏与过量风险及实践建议。</p>
            </div>
            <Link href="/nutrients" className="inline-flex items-center gap-1 text-sm text-sage hover:underline">营养素总览 <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nutrients.map((nutrient, index) => (
              <Link key={nutrient.slug} href={`/nutrients/${nutrient.slug}`} className="group flex gap-4 rounded-card bg-white/8 p-5 ring-1 ring-white/10 transition hover:bg-white/14">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/25 font-serif text-sm text-cream">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <span className="block font-serif text-lg text-cream group-hover:text-sage">{nutrient.title}</span>
                  <span className="mt-1 block text-xs leading-6 text-cream/65">{nutrient.subtitle}</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-center"><Illustration name="sixNutrients" className="max-h-[220px] w-full max-w-lg rounded-card bg-cream" /></div>
        </section>

        {/* 食物百科 */}
        <section className="mb-20">
          <SectionHeading eyebrow="Food Database" title="食物百科精选" description={`来自 ${foods.length} 种食物的结构化营养数据，均标注状态、单位与来源。`} action={<Link href="/foods" className="flex items-center gap-1 text-sm text-forest hover:underline">进入食物百科 <ArrowUpRight className="h-4 w-4" /></Link>} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{picks.map((food) => <FoodCard key={food.slug} food={food} />)}</div>
          <div className="mt-6 flex flex-wrap gap-2">
            {foodCategories.slice(0, 8).map((cat) => <Link key={cat.slug} href={`/foods?category=${cat.slug}`} className="rounded-pill border border-line bg-white px-3 py-1.5 text-xs text-ink/75 hover:border-forest/40 hover:text-forest">{cat.name}</Link>)}
          </div>
        </section>

        {/* 健康饮食 */}
        <section className="mb-20 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Healthy Eating" title="健康饮食指南" description="落到食材、份量与替代方案的真实场景。" />
            <Link href="/healthy-eating" className="group block overflow-hidden rounded-card border border-line bg-white shadow-soft">
              <Illustration name="plate" className="w-full" />
              <div className="p-5">
                <p className="font-serif text-lg text-forest">一张餐盘，理解均衡饮食</p>
                <p className="mt-1 text-xs text-muted">蔬菜水果 1/2 · 谷物薯类 1/4 · 蛋白质食物 1/4</p>
              </div>
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {healthyEatingGuides.slice(0, 8).map((guide) => (
              <Link key={guide.slug} href={`/guides/${guide.slug}`} className="rounded-card border border-line bg-white/70 p-4 hover:border-forest/30 hover:bg-white">
                <p className="font-serif text-base text-forest">{guide.title}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-6 text-ink/70">{guide.summary}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* 食谱 */}
        <section className="mb-20">
          <SectionHeading eyebrow="Recipes" title="实用食谱推荐" description="完整食材、用量、步骤与营养估算说明，可直接执行。" action={<Link href="/recipes" className="flex items-center gap-1 text-sm text-forest hover:underline">浏览食谱库 <ArrowUpRight className="h-4 w-4" /></Link>} />
          <div className="grid gap-5 md:grid-cols-3">{recipePicks.map((recipe) => <RecipeCard key={recipe.slug} recipe={recipe} />)}</div>
        </section>

        {/* 食品标签 */}
        <section className="mb-20 grid gap-8 rounded-[24px] border border-line bg-sand/50 p-6 sm:p-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="eyebrow">Food Labels</p>
            <h2 className="mt-2 text-2xl sm:text-[28px]">看懂食品标签，比记住一百条禁忌更实用</h2>
            <p className="mt-4 text-sm leading-7 text-ink/75">能量单位、每份与每 100 g、钠盐换算、配料排序和添加剂基础——把包装上的信息变成可执行的选择。</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild><Link href="/food-labels">学习标签解读</Link></Button>
              <Button asChild variant="outline"><Link href="/tools/food-label-reader">打开解读器 <ArrowRight className="h-4 w-4" /></Link></Button>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["钠与盐", "添加糖", "能量单位", "配料排序"].map((tag) => <Badge key={tag}>{tag}</Badge>)}
            </div>
          </div>
          <Illustration name="label" className="w-full rounded-card bg-white" />
        </section>

        {/* 营养与健康专题 */}
        <section className="mb-20">
          <SectionHeading eyebrow="Nutrition & Health" title="营养与健康专题" description="区分相关性与因果，不把营养建议包装成治疗方案。" action={<Link href="/nutrition-health" className="flex items-center gap-1 text-sm text-forest hover:underline">全部专题 <ArrowUpRight className="h-4 w-4" /></Link>} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{topics.slice(0, 6).map((topic) => <TopicCard key={topic.slug} topic={topic} />)}</div>
        </section>

        {/* 研究 */}
        <section className="mb-20">
          <SectionHeading eyebrow="Nutrition Research" title="最新营养研究解读" description="每篇包含研究设计、对象、结果、局限、证据等级与原始来源。" action={<Link href="/nutrition-research" className="flex items-center gap-1 text-sm text-forest hover:underline">研究栏目 <ArrowUpRight className="h-4 w-4" /></Link>} />
          <div className="grid gap-5 md:grid-cols-3">{researchItems.slice(0, 3).map((item) => <ResearchCard key={item.slug} item={item} />)}</div>
        </section>

        {/* 书籍 */}
        <section className="mb-20">
          <SectionHeading eyebrow="Books" title="值得阅读的营养书籍" description="作者、出版社与版本逐一核对；争议性书籍提供明确评价提示。" action={<Link href="/books" className="flex items-center gap-1 text-sm text-forest hover:underline">查看书单 <ArrowUpRight className="h-4 w-4" /></Link>} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{bookPicks.map((book) => <BookCard key={book.slug} book={book} />)}</div>
        </section>

        {/* 资源 */}
        <section className="mb-20">
          <SectionHeading eyebrow="Resources" title="全球权威营养资源" description="只收录机构真实、链接可追溯的官方网站。" action={<Link href="/resources" className="flex items-center gap-1 text-sm text-forest hover:underline">全部资源 <ArrowUpRight className="h-4 w-4" /></Link>} />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{resourcePicks.map((resource) => <ResourceCard key={resource.slug} resource={resource} />)}</div>
        </section>

        {/* 工具 */}
        <section className="mb-20">
          <SectionHeading eyebrow="Tools" title="实用营养工具" description="所有记录保存在你的浏览器本地；估算值均明确标注，不作为医学诊断。" action={<Link href="/tools" className="flex items-center gap-1 text-sm text-forest hover:underline">工具中心 <ArrowUpRight className="h-4 w-4" /></Link>} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {toolLinks.map((tool) => (
              <Link key={tool.href} href={tool.href} className="group flex gap-4 rounded-card border border-line bg-white p-5 hover:border-forest/30 hover:shadow-soft">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/20 text-forest"><Wrench className="h-4 w-4" /></span>
                <span><span className="block font-serif text-base text-forest group-hover:underline">{tool.label}</span><span className="mt-1 block text-xs leading-6 text-ink/70">{tool.desc}</span></span>
              </Link>
            ))}
          </div>
        </section>

        {/* 精选文章 */}
        <section className="mb-20">
          <SectionHeading eyebrow="Deep Dive" title="精选深度文章" description="从原理到行动，回答一个具体问题。" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{latest.map((article) => <ArticleCard key={article.slug} article={article} compact />)}</div>
        </section>

        <Newsletter />

        <section className="mt-16 grid gap-6 rounded-card border border-line bg-white/60 p-6 sm:grid-cols-3 sm:p-8">
          <div className="flex items-start gap-3"><ShieldCheck className="h-5 w-5 text-forest" /><div><p className="font-medium text-forest">科学可追溯</p><p className="mt-1 text-xs leading-6 text-ink/70">数据、论文与指南均标注来源。</p></div></div>
          <div className="flex items-start gap-3"><Leaf className="h-5 w-5 text-forest" /><div><p className="font-medium text-forest">不制造焦虑</p><p className="mt-1 text-xs leading-6 text-ink/70">不鼓励极端节食或夸大功效。</p></div></div>
          <div className="flex items-start gap-3"><Globe2 className="h-5 w-5 text-forest" /><div><p className="font-medium text-forest">持续更新</p><p className="mt-1 text-xs leading-6 text-ink/70">循证更新，修订内容标注日期。</p></div></div>
        </section>
      </div>
    </>
  );
}
