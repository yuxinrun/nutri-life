import type { Metadata } from "next";
import { NutritionCalculator } from "@/components/tools/nutrition-calculator";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "营养摄入估算器", description: "估算基础代谢、总能量消耗与三大宏量营养素参考量。", path: "/tools/nutrition-calculator" });
export default function Page() { return <NutritionCalculator />; }
