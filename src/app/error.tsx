"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="container-page py-24 text-center">
      <p className="eyebrow">Something went wrong</p>
      <h1 className="mt-3 text-3xl">页面暂时无法显示</h1>
      <p className="mt-4 text-sm text-muted">请稍后重试。如果问题持续，欢迎通过联系我们页面反馈。</p>
      <div className="mt-6 flex justify-center gap-3">
        <Button onClick={reset}>重试</Button>
        <Button variant="outline" onClick={() => (window.location.href = "/")}>回到首页</Button>
      </div>
    </div>
  );
}
