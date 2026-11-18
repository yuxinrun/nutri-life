import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Illustration } from "@/components/illustrations";

export default function NotFound() {
  return (
    <div className="container-page grid items-center gap-10 py-20 lg:grid-cols-2">
      <div>
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-4xl">这个页面还没有被写进知识库</h1>
        <p className="mt-4 text-sm leading-8 text-ink/75">链接可能已经调整，或者内容正在修订。你可以从搜索或栏目页继续浏览。</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild><Link href="/">回到首页</Link></Button>
          <Button asChild variant="outline"><Link href="/search">打开搜索</Link></Button>
        </div>
      </div>
      <Illustration name="map" className="w-full rounded-card bg-white" />
    </div>
  );
}
