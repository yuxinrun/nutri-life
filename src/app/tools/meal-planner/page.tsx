import type { Metadata } from "next";
import { MealPlanner } from "@/components/tools/meal-planner";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "每周饮食规划", description: "安排七天餐次、查看结构并导出 JSON。", path: "/tools/meal-planner" });
export default function Page() { return <MealPlanner />; }
