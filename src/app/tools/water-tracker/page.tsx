import type { Metadata } from "next";
import { WaterTracker } from "@/components/tools/water-tracker";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "饮水记录", description: "记录每日饮水量并查看每周趋势。", path: "/tools/water-tracker" });
export default function Page() { return <WaterTracker />; }
