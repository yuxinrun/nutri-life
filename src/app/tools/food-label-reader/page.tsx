import type { Metadata } from "next";
import { FoodLabelReader } from "@/components/tools/food-label-reader";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "食品标签解读器", description: "换算能量单位、钠与食盐，并按每份重量计算实际摄入。", path: "/tools/food-label-reader" });
export default function Page() { return <FoodLabelReader />; }
