import type { Metadata } from "next";
import { HabitReview } from "@/components/tools/habit-review";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "饮食习惯复盘", description: "用六个问题复盘每日饮食行为并记录 7 天趋势。", path: "/tools/habit-review" });
export default function Page() { return <HabitReview />; }
