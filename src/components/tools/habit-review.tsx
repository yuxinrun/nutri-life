"use client";

import { useMemo } from "react";
import { useLocalStorage, todayKey } from "@/lib/storage";
import { Card, CardBody } from "@/components/ui/card";
import { ToolFrame } from "./tool-frame";
import { DiaryHeatmap, EmptyChartState } from "@/components/charts/charts";

const habits = [
  "今天吃了至少两份蔬菜",
  "喝了足量白水",
  "没有把含糖饮料当作日常饮品",
  "主食包含全谷物或杂豆",
  "每餐有明确的蛋白质食物",
  "餐后没有过度进食零食",
];

type HabitRecord = Record<string, string[]>;

function last7Days() {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    return d.toISOString().slice(0, 10);
  });
}

export function HabitReview() {
  const { value: records, setValue: setRecords } = useLocalStorage<HabitRecord>("nl:habits", {});
  const days = last7Days();
  const today = todayKey();
  const toggle = (habit: string) => {
    const current = records[today] ?? [];
    setRecords({ ...records, [today]: current.includes(habit) ? current.filter((h) => h !== habit) : [...current, habit] });
  };
  const totalChecks = useMemo(() => Object.values(records).reduce((sum, list) => sum + list.length, 0), [records]);

  return (
    <ToolFrame
      title="饮食习惯复盘"
      description="每天用六个问题回顾一次饮食行为。连续记录帮助你看到哪些习惯真正稳定，而不是凭印象评价自己。"
      notice="复盘不是打分或自责。它用于发现可执行的小改变；如果有进食障碍倾向，请停止记录并寻求专业支持。"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardBody>
            <p className="eyebrow mb-2">今日复盘 · {today}</p>
            <h2 className="mb-5 text-xl">你做到了哪些？</h2>
            <div className="space-y-2">
              {habits.map((habit) => {
                const checked = (records[today] ?? []).includes(habit);
                return (
                  <button key={habit} onClick={() => toggle(habit)} className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm ${checked ? "border-forest/40 bg-sage/10 text-forest" : "border-line bg-white text-ink/75 hover:border-forest/30"}`}>
                    <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border text-xs ${checked ? "border-forest bg-forest text-cream" : "border-line"}`}>{checked ? "✓" : ""}</span>
                    {habit}
                  </button>
                );
              })}
            </div>
          </CardBody>
        </Card>
        <div className="space-y-5">
          <Card>
            <CardBody>
              <p className="eyebrow mb-3">近 7 天</p>
              <div className="grid grid-cols-7 gap-2">
                {days.map((day) => {
                  const count = (records[day] ?? []).length;
                  return (
                    <div key={day} className="rounded-xl border border-line bg-cream p-2 text-center">
                      <p className="text-[10px] text-muted">{day.slice(5)}</p>
                      <p className="mt-1 font-serif text-lg text-forest">{count}</p>
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 text-xs text-muted">累计勾选 <strong className="text-forest">{totalChecks}</strong> 次。看到波动很正常，关注趋势而不是某一天。</p>
            </CardBody>
          </Card>
          <Card className="p-4">
            {Object.keys(records).length ? <DiaryHeatmap dates={Object.keys(records)} /> : <EmptyChartState message="完成一天复盘后，这里会显示记录日历。" />}
          </Card>
        </div>
      </div>
    </ToolFrame>
  );
}
