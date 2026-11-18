import type { Metadata } from "next";
import { FoodDiary } from "@/components/tools/food-diary";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "每日饮食记录", description: "记录三餐并自动汇总营养摄入，生成本地图表与 CSV 导出。", path: "/tools/food-diary" });
export default function Page() { return <FoodDiary />; }
