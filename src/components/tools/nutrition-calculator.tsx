"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { ACTIVITY_FACTORS, DRI_NOTICE, energyFromMacro, estimateBMR, estimateTDEE } from "@/lib/nutrition";
import { useLocalStorage } from "@/lib/storage";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Field, Input, Select } from "@/components/ui/input";
import { ToolFrame } from "./tool-frame";
import { MacroPieChart } from "@/components/charts/charts";

const schema = z.object({
  sex: z.enum(["male", "female"]),
  age: z.coerce.number().min(15).max(100),
  heightCm: z.coerce.number().min(130).max(220),
  weightKg: z.coerce.number().min(35).max(200),
  activity: z.enum(["sedentary", "light", "moderate", "active"]),
});

type FormValues = z.infer<typeof schema>;

const defaults: FormValues = { sex: "female", age: 30, heightCm: 165, weightKg: 60, activity: "light" };

export function NutritionCalculator() {
  const { value: saved, setValue: setSaved } = useLocalStorage<FormValues>("nl:profile", defaults);
  const [result, setResult] = useState<ReturnType<typeof calculate> | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: saved });

  function calculate(v: FormValues) {
    const bmr = estimateBMR({ sex: v.sex, weightKg: v.weightKg, heightCm: v.heightCm, age: v.age });
    const tdee = estimateTDEE(bmr, v.activity);
    const proteinG = Math.round(v.weightKg * (v.activity === "active" ? 1.4 : 1.1));
    const fatG = Math.round((tdee * 0.25) / 9);
    const carbsG = Math.round((tdee - proteinG * 4 - fatG * 9) / 4);
    return { bmr, tdee, proteinG, fatG, carbsG, energy: energyFromMacro(proteinG, carbsG, fatG) };
  }

  return (
    <ToolFrame
      title="营养摄入估算器"
      description="用 Mifflin-St Jeor 公式估算静息代谢，结合活动水平估算每日总能量消耗，并给出三大宏量营养素参考范围。"
      notice="估算结果适用于一般健康成年人的科普参考。运动员、孕期、儿童、老年人及慢性病患者请使用相应人群标准或咨询专业人士。"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card>
          <CardBody>
            <h2 className="mb-5 text-xl">填写身体数据</h2>
            <form
              className="grid gap-4 sm:grid-cols-2"
              onSubmit={handleSubmit((values) => {
                setSaved(values);
                setResult(calculate(values));
              })}
            >
              <Field label="生理性别" hint="公式中性别项按出生时生理性别处理">
                <Select {...register("sex")}> <option value="female">女性</option><option value="male">男性</option></Select>
              </Field>
              <Field label="年龄（岁）">
                <Input type="number" {...register("age")} />
                {errors.age ? <span className="text-[11px] text-red-600">请输入 15–100 岁</span> : null}
              </Field>
              <Field label="身高（cm）">
                <Input type="number" {...register("heightCm")} />
                {errors.heightCm ? <span className="text-[11px] text-red-600">请输入 130–220 cm</span> : null}
              </Field>
              <Field label="体重（kg）">
                <Input type="number" step="0.1" {...register("weightKg")} />
                {errors.weightKg ? <span className="text-[11px] text-red-600">请输入 35–200 kg</span> : null}
              </Field>
              <div className="sm:col-span-2">
                <Field label="日常活动水平" hint="选择最接近你大多数日子的状态">
                  <Select {...register("activity")}>
                    <option value="sedentary">久坐（几乎不运动）</option>
                    <option value="light">轻度活动（每周 1–3 次）</option>
                    <option value="moderate">中度活动（每周 3–5 次）</option>
                    <option value="active">高强度活动（每周 6–7 次）</option>
                  </Select>
                </Field>
              </div>
              <div className="flex gap-3 sm:col-span-2">
                <Button type="submit">估算我的需要</Button>
                <Button type="button" variant="outline" onClick={() => setResult(null)}>清空结果</Button>
              </div>
            </form>
          </CardBody>
        </Card>

        <div className="space-y-5">
          {result ? (
            <>
              <Card>
                <CardBody>
                  <p className="eyebrow mb-4">估算结果</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl bg-cream p-4"><p className="text-xs text-muted">静息代谢 BMR</p><p className="font-serif text-2xl text-forest">{result.bmr} <span className="text-xs">kcal/日</span></p></div>
                    <div className="rounded-xl bg-cream p-4"><p className="text-xs text-muted">总消耗 TDEE</p><p className="font-serif text-2xl text-forest">{result.tdee} <span className="text-xs">kcal/日</span></p></div>
                  </div>
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    <div><p className="font-semibold text-forest">{result.proteinG} g</p><p className="text-[11px] text-muted">蛋白质/日</p></div>
                    <div><p className="font-semibold text-forest">{result.fatG} g</p><p className="text-[11px] text-muted">脂肪/日</p></div>
                    <div><p className="font-semibold text-forest">{result.carbsG} g</p><p className="text-[11px] text-muted">碳水/日</p></div>
                  </div>
                  <p className="mt-4 text-[11px] leading-5 text-muted">活动系数：{ACTIVITY_FACTORS[(saved.activity as keyof typeof ACTIVITY_FACTORS) ?? "light"]}。蛋白质按体重 1.1–1.4 g/kg，脂肪按 25% 能量估算；仅作起点参考。</p>
                </CardBody>
              </Card>
              <Card className="p-4"><MacroPieChart values={{ proteinG: result.proteinG, carbsG: result.carbsG, fatG: result.fatG }} title="估算的宏量营养素供能比" /></Card>
            </>
          ) : (
            <Card className="flex min-h-[320px] items-center justify-center p-8 text-center">
              <div><p className="font-serif text-xl text-forest">先填写左侧数据</p><p className="mt-2 text-sm text-muted">结果会显示在这里，并保存在本地方便下次使用。</p></div>
            </Card>
          )}
          <Card className="p-5 text-xs leading-6 text-ink/75">
            <p className="font-medium text-forest">关于参考值</p>
            <p className="mt-2">{DRI_NOTICE}</p>
            <Link href="/articles/dri-explained" className="mt-2 inline-block text-forest hover:underline">了解 EAR / RNI / UL 的含义 →</Link>
          </Card>
        </div>
      </div>
    </ToolFrame>
  );
}
