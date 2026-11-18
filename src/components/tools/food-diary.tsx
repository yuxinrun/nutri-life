"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Plus, Trash2, Download } from "lucide-react";
import { foods } from "@/data/foods";
import { useLocalStorage, todayKey } from "@/lib/storage";
import { downloadFile, toCSV } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Field, Input, Select } from "@/components/ui/input";
import { MacroPieChart, TrendChart, EmptyChartState } from "@/components/charts/charts";
import { ToolFrame } from "./tool-frame";

type Entry = { id: string; date: string; meal: string; foodSlug: string; grams: number };

export function FoodDiary() {
  const { value: entries, setValue: setEntries, ready } = useLocalStorage<Entry[]>("nl:diary", []);
  const [date, setDate] = useState(todayKey());
  const [meal, setMeal] = useState("早餐");
  const [foodSlug, setFoodSlug] = useState("egg");
  const [grams, setGrams] = useState(100);

  const add = () => {
    setEntries([...entries, { id: `${Date.now()}`, date, meal, foodSlug, grams }]);
  };

  const todays = entries.filter((e) => e.date === date);
  const totals = useMemo(() => {
    return todays.reduce(
      (acc, e) => {
        const food = foods.find((f) => f.slug === e.foodSlug);
        if (!food) return acc;
        const factor = e.grams / 100;
        const n = food.nutritionPer100g;
        acc.energyKcal += (n.energyKcal ?? 0) * factor;
        acc.proteinG += (n.proteinG ?? 0) * factor;
        acc.fatG += (n.fatG ?? 0) * factor;
        acc.carbsG += (n.carbsG ?? 0) * factor;
        acc.fiberG += (n.fiberG ?? 0) * factor;
        return acc;
      },
      { energyKcal: 0, proteinG: 0, fatG: 0, carbsG: 0, fiberG: 0 },
    );
  }, [todays]);

  const trend = useMemo(() => {
    const byDate = new Map<string, number>();
    entries.forEach((e) => {
      const food = foods.find((f) => f.slug === e.foodSlug);
      if (food) byDate.set(e.date, (byDate.get(e.date) ?? 0) + ((food.nutritionPer100g.energyKcal ?? 0) * e.grams) / 100);
    });
    return Array.from(byDate.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [entries]);

  return (
    <ToolFrame
      title="每日饮食记录"
      description="选择食物与份量，记录三餐。工具会自动汇总能量、三大宏量营养素和膳食纤维，并生成趋势图。"
      notice="营养值按食物百科每 100 g 数据计算，为估算值；烹调方式、称重误差与数据库差异都会影响结果。"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Card>
          <CardBody>
            <h2 className="mb-5 text-xl">添加一条记录</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="日期"><Input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></Field>
              <Field label="餐次"><Select value={meal} onChange={(e) => setMeal(e.target.value)}><option>早餐</option><option>午餐</option><option>晚餐</option><option>加餐</option></Select></Field>
              <div className="sm:col-span-2"><Field label="食物"><Select value={foodSlug} onChange={(e) => setFoodSlug(e.target.value)}>{foods.map((f) => <option key={f.slug} value={f.slug}>{f.title}（{f.state}）</option>)}</Select></Field></div>
              <Field label="食用量（g）" hint="按可食部生重或熟重记录，并与食物页标注的状态一致"><Input type="number" min="1" value={grams} onChange={(e) => setGrams(Number(e.target.value))} /></Field>
              <div className="flex items-end"><Button onClick={add} className="w-full"><Plus className="h-4 w-4" />添加记录</Button></div>
            </div>
            {foodSlug ? <p className="mt-3 text-[11px] text-muted">可查看 <Link href={`/foods/${foodSlug}`} className="text-forest hover:underline">该食物的营养数据与计量口径 →</Link></p> : null}
          </CardBody>
        </Card>

        <div className="space-y-5">
          <Card>
            <CardBody>
              <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                <h2 className="text-xl">{date} 的汇总</h2>
                <Button variant="outline" size="sm" onClick={() => downloadFile("饮食记录.csv", toCSV([
                  ["日期", "餐次", "食物", "克数", "能量kcal"],
                  ...entries.map((e) => {
                    const f = foods.find((x) => x.slug === e.foodSlug);
                    return [e.date, e.meal, f?.title ?? e.foodSlug, e.grams, Math.round(((f?.nutritionPer100g.energyKcal ?? 0) * e.grams) / 100)];
                  }),
                ]))}><Download className="h-3.5 w-3.5" />导出 CSV</Button>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
                {[
                  ["能量", `${Math.round(totals.energyKcal)} kcal`],
                  ["蛋白质", `${Math.round(totals.proteinG)} g`],
                  ["脂肪", `${Math.round(totals.fatG)} g`],
                  ["碳水", `${Math.round(totals.carbsG)} g`],
                  ["纤维", `${Math.round(totals.fiberG)} g`],
                ].map(([label, value]) => <div key={label} className="rounded-xl bg-cream p-3 text-center"><p className="text-[10px] text-muted">{label}</p><p className="font-semibold text-forest">{value}</p></div>)}
              </div>
              {totals.proteinG || totals.fatG || totals.carbsG ? <div className="mt-4"><MacroPieChart values={totals} title="当日宏量营养素供能构成" /></div> : null}
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <h2 className="mb-4 text-xl">记录明细</h2>
              {!ready ? <p className="text-sm text-muted">正在读取本地记录…</p> : todays.length === 0 ? (
                <p className="text-sm text-muted">当天还没有记录。先从一顿早餐开始吧。</p>
              ) : (
                <div className="divide-y divide-line">
                  {todays.map((e) => {
                    const f = foods.find((x) => x.slug === e.foodSlug);
                    return (
                      <div key={e.id} className="flex items-center justify-between gap-3 py-3">
                        <div className="min-w-0"><p className="text-sm font-medium text-ink">{f?.title}</p><p className="text-[11px] text-muted">{e.meal} · {e.grams} g</p></div>
                        <button onClick={() => setEntries(entries.filter((x) => x.id !== e.id))} className="rounded-pill p-2 text-muted hover:bg-sand hover:text-red-700" aria-label="删除记录"><Trash2 className="h-4 w-4" /></button>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardBody>
          </Card>
          <Card className="p-4">
            {trend.length > 1 ? <TrendChart title="每日能量估算趋势" subtitle="按记录日期汇总，单位 kcal；数据来自本地记录" labels={trend.map(([d]) => d.slice(5))} values={trend.map(([, v]) => Math.round(v))} unit="kcal" /> : <EmptyChartState message="记录两天以上后，这里会显示能量趋势。" />}
          </Card>
        </div>
      </div>
    </ToolFrame>
  );
}
