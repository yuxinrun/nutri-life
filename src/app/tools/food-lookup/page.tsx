import type { Metadata } from "next";
import { FoodLookup } from "@/components/tools/food-lookup";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "食物营养查询", description: "搜索食物百科数据并对比蛋白质含量。", path: "/tools/food-lookup" });
export default function Page() { return <FoodLookup />; }
