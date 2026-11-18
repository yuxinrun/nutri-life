import type { Metadata } from "next";
import { PlateBuilder } from "@/components/tools/plate-builder";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "均衡膳食搭配工具", description: "按餐盘结构搭配一餐并查看宏量营养素构成。", path: "/tools/plate-builder" });
export default function Page() { return <PlateBuilder />; }
