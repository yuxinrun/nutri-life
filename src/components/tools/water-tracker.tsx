"use client";

import { useMemo, useState } from "react";
import { Droplets, Download } from "lucide-react";
import { useLocalStorage, todayKey } from "@/lib/storage";
import { downloadFile, toCSV } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { WaterChart, EmptyChartState } from "@/components/charts/charts";
import { ToolFrame } from "./tool-frame";

type RecordItem = { date: string; ml: number };

export function WaterTracker() {
  const { value: records, setValue: setRecords } = useLocalStorage<RecordItem[]>("nl:water", []);
  const today = todayKey();
  const todayMl = useMemo(() => records.filter((r) => r.date === today).reduce((s, r) => s + r.ml, 0), [records, today]);
  const goal = 1700;

  const add = (ml: number) => {
    const index = records.findIndex((r) => r.date === today);
    if (index >= 0) {
      const next = [...records];
      next[index] = { ...next[index], ml: next[index].ml + ml };
      setRecords(next);
    } else {
      setRecords([...records, { date: today, ml }].sort((a, b) => a.date.localeCompare(b.date)));
    }
  };

  return (
    <ToolFrame
      title="饮水记录"
      description="用一键按钮记录饮水量，查看本周趋势。温和气候、轻体力活动的成年女性建议 1500 ml/日，男性 1700 ml/日；这里以 1700 ml 作为默认参考线。"
      notice="总水摄入还包括汤、奶和果蔬。心肾功能不全等需要限水的人群请遵医嘱。"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <Card>
          <CardBody>
            <p className="eyebrow mb-3">今日饮水</p>
            <div className="flex items-center gap-4">
              <Droplets className="h-10 w-10 text-sage" />
              <div><p className="font-serif text-4xl text-forest">{todayMl}</p><p className="text-xs text-muted">ml · 参考目标 {goal} ml</p></div>
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-pill bg-sand"><div className="h-full rounded-pill bg-sage transition-all" style={{ width: `${Math.min(100, (todayMl / goal) * 100)}%` }} /></div>
            <div className="mt-6 grid grid-cols-4 gap-2">
              {[150, 250, 350, 500].map((ml) => <Button key={ml} variant="outline" onClick={() => add(ml)}>+{ml} ml</Button>)}
            </div>
            <div className="mt-4 flex gap-3">
              <Button variant="ghost" onClick={() => setRecords(records.filter((r) => r.date !== today))}>清空今日</Button>
              <Button variant="outline" onClick={() => downloadFile("饮水记录.csv", toCSV([["日期", "ml"], ...records.map((r) => [r.date, r.ml])]))}><Download className="h-4 w-4" />导出 CSV</Button>
            </div>
          </CardBody>
        </Card>
        <Card className="p-4">
          {records.length ? <WaterChart records={records} /> : <EmptyChartState message="点击左侧按钮记录第一杯水，这里会显示周趋势。" />}
        </Card>
      </div>
    </ToolFrame>
  );
}
