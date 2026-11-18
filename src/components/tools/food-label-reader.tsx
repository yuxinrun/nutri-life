"use client";

import { useMemo, useState } from "react";
import { Calculator, Download } from "lucide-react";
import { sodiumToSalt, energyFromMacro } from "@/lib/nutrition";
import { useLocalStorage } from "@/lib/storage";
import { downloadFile } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Field, Input } from "@/components/ui/input";
import { ToolFrame } from "./tool-frame";
import { LabelComparisonChart } from "@/components/charts/charts";

type LabelValues = {
  name: string;
  energyKj: string;
  proteinG: string;
  fatG: string;
  carbsG: string;
  sugarG: string;
  sodiumMg: string;
  servingG: string;
};

const defaults: LabelValues = { name: "示例饼干", energyKj: "2000", proteinG: "8", fatG: "20", carbsG: "65", sugarG: "25", sodiumMg: "400", servingG: "30" };

export function FoodLabelReader() {
  const { value, setValue } = useLocalStorage<LabelValues>("nl:label", defaults);
  const [submitted, setSubmitted] = useState<LabelValues>(defaults);

  const result = useMemo(() => {
    const num = (v: string) => Number(v) || 0;
    const kcal = Math.round(num(submitted.energyKj) / 4.184);
    const salt = sodiumToSalt(num(submitted.sodiumMg));
    const factor = num(submitted.servingG) / 100;
    return {
      kcal,
      salt,
      kcalFromMacro: energyFromMacro(num(submitted.proteinG), num(submitted.carbsG), num(submitted.fatG)),
      perServing: {
        kcal: Math.round(kcal * factor),
        sugar: +(num(submitted.sugarG) * factor).toFixed(1),
        sodium: Math.round(num(submitted.sodiumMg) * factor),
        salt: +(salt * factor).toFixed(2),
      },
      sodiumNRV: Math.round((num(submitted.sodiumMg) / 2000) * 100),
      sugarNRV: num(submitted.sugarG),
    };
  }, [submitted]);

  const update = (key: keyof LabelValues, v: string) => setValue({ ...value, [key]: v });

  return (
    <ToolFrame
      title="食品标签解读器"
      description="输入营养成分表上的数值，自动换算能量单位、钠与食盐，并按每份重量计算实际摄入。所有计算均在浏览器本地完成。"
      notice="标签允许合理误差，NRV% 基于成人参考值。结果仅用于理解标签，不替代个体化营养建议。"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Card>
          <CardBody>
            <h2 className="mb-5 text-xl">第一步：照着包装填写</h2>
            <form
              className="grid gap-4 sm:grid-cols-2"
              onSubmit={(e) => { e.preventDefault(); setSubmitted(value); }}
            >
              <div className="sm:col-span-2"><Field label="产品名称"><Input value={value.name} onChange={(e) => update("name", e.target.value)} /></Field></div>
              <Field label="能量（kJ / 100 g）"><Input type="number" value={value.energyKj} onChange={(e) => update("energyKj", e.target.value)} /></Field>
              <Field label="蛋白质（g / 100 g）"><Input type="number" step="0.1" value={value.proteinG} onChange={(e) => update("proteinG", e.target.value)} /></Field>
              <Field label="脂肪（g / 100 g）"><Input type="number" step="0.1" value={value.fatG} onChange={(e) => update("fatG", e.target.value)} /></Field>
              <Field label="碳水化合物（g / 100 g）"><Input type="number" step="0.1" value={value.carbsG} onChange={(e) => update("carbsG", e.target.value)} /></Field>
              <Field label="糖（g / 100 g）"><Input type="number" step="0.1" value={value.sugarG} onChange={(e) => update("sugarG", e.target.value)} /></Field>
              <Field label="钠（mg / 100 g）"><Input type="number" value={value.sodiumMg} onChange={(e) => update("sodiumMg", e.target.value)} /></Field>
              <Field label="每份重量（g）" hint="注意标签上写的是每份还是每 100 g"><Input type="number" value={value.servingG} onChange={(e) => update("servingG", e.target.value)} /></Field>
              <div className="flex flex-wrap gap-3 sm:col-span-2">
                <Button type="submit"><Calculator className="h-4 w-4" />开始解读</Button>
                <Button type="button" variant="outline" onClick={() => downloadFile(`标签解读-${value.name}.csv`, [
                  ["项目", "每100g", `每份${value.servingG}g`],
                  ["能量kcal", result.kcal, result.perServing.kcal],
                  ["糖g", value.sugarG, result.perServing.sugar],
                  ["钠mg", value.sodiumMg, result.perServing.sodium],
                  ["食盐g", result.salt.toFixed(2), result.perServing.salt],
                ].map((row) => row.map(String).join(",")).join("\n"))}><Download className="h-4 w-4" />导出 CSV</Button>
              </div>
            </form>
          </CardBody>
        </Card>

        <div className="space-y-5">
          <Card>
            <CardBody>
              <p className="eyebrow mb-4">解读结果 · {submitted.name}</p>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["能量", `${result.kcal} kcal`, "kJ ÷ 4.184"],
                  ["食盐", `${result.salt} g`, "钠 × 2.5"],
                  ["钠 NRV", `${result.sodiumNRV}%`, "成人参考值"],
                  ["宏量核算", `${result.kcalFromMacro} kcal`, "4/4/9 估算"],
                ].map(([label, value, hint]) => (
                  <div key={label} className="rounded-xl bg-cream p-3">
                    <p className="text-[10px] text-muted">{label}</p>
                    <p className="font-serif text-lg text-forest">{value}</p>
                    <p className="text-[10px] text-muted">{hint}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-line p-4">
                <p className="text-sm font-medium text-forest">如果只吃一份（{submitted.servingG} g）</p>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
                  <span>能量 <strong className="text-forest">{result.perServing.kcal} kcal</strong></span>
                  <span>糖 <strong className="text-forest">{result.perServing.sugar} g</strong></span>
                  <span>钠 <strong className="text-forest">{result.perServing.sodium} mg</strong></span>
                  <span>食盐 <strong className="text-forest">{result.perServing.salt} g</strong></span>
                </div>
              </div>
              <p className="mt-4 text-xs leading-6 text-ink/70">
                {result.sodiumNRV >= 20 ? "提示：每 100 g 钠 NRV% 超过 20%，属于较高水平，建议留意食用量与频次。" : "提示：每 100 g 钠 NRV% 低于 20%，仍应结合每份重量与整包食用量判断。"}
              </p>
            </CardBody>
          </Card>
          <Card className="p-4"><LabelComparisonChart per100={Number(submitted.sodiumMg) || 0} servingGrams={Number(submitted.servingG) || 100} label={submitted.name} /></Card>
        </div>
      </div>
    </ToolFrame>
  );
}
