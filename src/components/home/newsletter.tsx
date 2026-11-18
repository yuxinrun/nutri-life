"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="rounded-[24px] bg-forest px-6 py-10 text-cream sm:px-12 sm:py-14">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Nutri Life Weekly</p>
          <h2 className="mt-3 text-2xl text-cream sm:text-3xl">每周一封，把复杂的营养讲清楚。</h2>
          <p className="mt-3 max-w-xl text-sm leading-7 text-cream/75">
            一篇深度解读、三份实用建议、一项可立即执行的行动。我们只发送真正有价值的内容，不推销补充剂，不制造焦虑。
          </p>
        </div>
        <div>
          {submitted ? (
            <div className="flex items-center gap-3 rounded-card bg-white/10 p-5 text-sm">
              <Check className="h-5 w-5 text-sage" />
              <span>已记录你的邮箱：{email}（演示模式，未发送到服务器）</span>
            </div>
          ) : (
            <form
              className="flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.includes("@")) setSubmitted(true);
              }}
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="你的邮箱地址"
                aria-label="邮箱地址"
                className="border-transparent bg-white/95"
              />
              <Button type="submit" variant="apricot" className="shrink-0">
                订阅 <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          )}
          <p className="mt-3 text-[11px] text-cream/60">演示表单仅在浏览器内反馈，不会收集或上传邮箱。</p>
        </div>
      </div>
    </section>
  );
}
