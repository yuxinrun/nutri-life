import type { Metadata } from "next";
import { ShoppingList } from "@/components/tools/shopping-list";
import { pageMetadata } from "@/lib/seo";
export const metadata = pageMetadata({ title: "健康购物清单", description: "按食物组生成购物清单并导出。", path: "/tools/shopping-list" });
export default function Page() { return <ShoppingList />; }
