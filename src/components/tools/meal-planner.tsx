"use client";

import { Download } from "lucide-react";
import { recipes } from "@/data/recipes";
import { useLocalStorage } from "@/lib/storage";
import { downloadFile } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Select } from "@/components/ui/input";
import { ToolFrame } from "./tool-frame";

const days = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"];
const meals = ["早餐", "午餐", "晚餐", "加餐"];
type Plan = Record<string, string>;
const emptyPlan: Plan = {};

export function MealPlanner() {
  const { value: plan, setValue: setPlan } = useLocalStorage<Plan>("nl:mealplan", emptyPlan);
  const key = (day: string, meal: string) => `${day}-${meal}`;

  return (
    <ToolFrame
      title="每周饮食规划"
      description="为七天的四个餐次安排食谱。这个工具帮助你看到结构是否均衡，而不是给出“标准答案”。"
      notice="规划是沟通与采购的工具，不必严格执行到每一克。有特殊健康需求时请咨询专业人士。"
    >
      <div className="mb-6 flex flex-wrap gap-3">
        <Button variant="outline" onClick={() => downloadFile("每周饮食规划.json", JSON.stringify(plan, null, 2), "application/json")}><Download className="h-4 w-4" />导出 JSON</Button>
        <Button variant="ghost" onClick={() => setPlan({})}>清空计划</Button>
      </div>
      <div className="overflow-x-auto rounded-card border border-line bg-white">
        <table className="w-full min-w-[760px] text-sm">
          <thead className="bg-sand/60 text-forest"><tr><th className="p-3 text-left">餐次</th>{days.map((d) => <th key={d} className="p-3 text-left">{d}</th>)}</tr></thead>
          <tbody>
            {meals.map((meal) => (
              <tr key={meal} className="border-t border-line/80">
                <td className="p-3 font-medium text-forest">{meal}</td>
                {days.map((day) => (
                  <td key={day} className="p-2">
                    <Select value={plan[key(day, meal)] ?? ""} onChange={(e) => setPlan({ ...plan, [key(day, meal)]: e.target.value })} aria-label={`${day}${meal}选择食谱`}>
                      <option value="">未安排</option>
                      {recipes.map((r) => <option key={r.slug} value={r.slug}>{r.title}</option>)}
                    </Select>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <Card><CardBody><p className="font-medium text-forest">已安排餐次</p><p className="mt-2 font-serif text-2xl">{Object.values(plan).filter(Boolean).length} / 28</p></CardBody></Card>
        <Card><CardBody><p className="font-medium text-forest">结构提示</p><p className="mt-2 text-xs leading-6 text-ink/70">检查是否每天都有蔬菜、主食与蛋白质来源；不必每天完全重复。</p></CardBody></Card>
        <Card><CardBody><p className="font-medium text-forest">下一步</p><p className="mt-2 text-xs leading-6 text-ink/70">根据计划生成购物清单，减少冲动购买与食物浪费。</p><a href="/tools/shopping-list" className="mt-2 inline-block text-xs text-forest hover:underline">打开购物清单 →</a></CardBody></Card>
      </div>
    </ToolFrame>
  );
}
