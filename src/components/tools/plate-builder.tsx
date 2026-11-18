"use client";

import { useMemo } from "react";
import { foods } from "@/data/foods";
import { useLocalStorage } from "@/lib/storage";
import { Card, CardBody } from "@/components/ui/card";
import { Field, Select } from "@/components/ui/input";
import { PlateGuideChart, MacroPieChart } from "@/components/charts/charts";
import { ToolFrame } from "./tool-frame";

type PlateState = { grain: string; protein: string; vegetable: string; fruit: string };

const defaults: PlateState = { grain: "rice-brown", protein: "egg", vegetable: "broccoli", fruit: "apple" };
const groups = [
  { key: "grain" as const, label: "谷物薯类（约 1/4 餐盘）", options: ["rice-brown", "oats", "sweet-potato", "whole-wheat-bread"] },
  { key: "protein" as const, label: "蛋白质食物（约 1/4 餐盘）", options: ["egg", "tofu", "chicken-breast", "salmon", "beef-lean"] },
  { key: "vegetable" as const, label: "蔬菜（约 1/2 餐盘的一部分）", options: ["broccoli", "spinach", "tomato", "carrot"] },
  { key: "fruit" as const, label: "水果（约 1/2 餐盘的一部分）", options: ["apple", "banana", "blueberry"] },
];

export function PlateBuilder() {
  const { value: state, setValue } = useLocalStorage<PlateState>("nl:plate", defaults);
  const estimate = useMemo(() => {
    const grams = { grain: 120, protein: 100, vegetable: 200, fruit: 100 };
    const total = { energyKcal: 0, proteinG: 0, fatG: 0, carbsG: 0, fiberG: 0 };
    (Object.keys(state) as (keyof PlateState)[]).forEach((key) => {
      const food = foods.find((f) => f.slug === state[key]);
      if (!food) return;
      const factor = grams[key] / 100;
      total.energyKcal += (food.nutritionPer100g.energyKcal ?? 0) * factor;
      total.proteinG += (food.nutritionPer100g.proteinG ?? 0) * factor;
      total.fatG += (food.nutritionPer100g.fatG ?? 0) * factor;
      total.carbsG += (food.nutritionPer100g.carbsG ?? 0) * factor;
      total.fiberG += (food.nutritionPer100g.fiberG ?? 0) * factor;
    });
    return {
      energyKcal: Math.round(total.energyKcal),
      proteinG: Math.round(total.proteinG),
      fatG: Math.round(total.fatG),
      carbsG: Math.round(total.carbsG),
      fiberG: Math.round(total.fiberG),
    };
  }, [state]);

  return (
    <ToolFrame
      title="均衡膳食搭配工具"
      description="按餐盘结构选择食物，观察一份搭配的能量与营养构成。比例参考膳食指南通识，份量仅为演示估算。"
      notice="份量（主食 120 g、蛋白质 100 g、蔬菜 200 g、水果 100 g）是演示基准，不代表所有人的实际需要。"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Card>
          <CardBody>
            <h2 className="mb-5 text-xl">构建你的一餐</h2>
            <div className="space-y-4">
              {groups.map((group) => (
                <Field key={group.key} label={group.label}>
                  <Select value={state[group.key]} onChange={(e) => setValue({ ...state, [group.key]: e.target.value })}>
                    {group.options.map((slug) => {
                      const f = foods.find((x) => x.slug === slug);
                      return f ? <option key={slug} value={slug}>{f.title}</option> : null;
                    })}
                  </Select>
                </Field>
              ))}
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                ["能量", `${estimate.energyKcal} kcal`], ["蛋白质", `${estimate.proteinG} g`],
                ["脂肪", `${estimate.fatG} g`], ["碳水", `${estimate.carbsG} g`], ["膳食纤维", `${estimate.fiberG} g`],
              ].map(([label, value]) => <div key={label} className="rounded-xl bg-cream p-3 text-center"><p className="text-[10px] text-muted">{label}</p><p className="font-semibold text-forest">{value}</p></div>)}
            </div>
          </CardBody>
        </Card>
        <div className="space-y-5">
          <Card className="p-4"><PlateGuideChart /></Card>
          <Card className="p-4"><MacroPieChart values={estimate} title="这份搭配的宏量营养素供能比" /></Card>
        </div>
      </div>
    </ToolFrame>
  );
}
