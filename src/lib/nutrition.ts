import type { NutrientValues } from "@/types";

export const DRI_NOTICE =
  "以下参考值多用于一般健康成年人的科普说明，不替代个体化医嘱。孕妇、儿童、老年人及慢性病患者请参考所在地区最新膳食指南或临床营养师建议。";

export function macroPercentages(n: NutrientValues) {
  const proteinKcal = (n.proteinG ?? 0) * 4;
  const carbKcal = (n.carbsG ?? 0) * 4;
  const fatKcal = (n.fatG ?? 0) * 9;
  const total = proteinKcal + carbKcal + fatKcal;
  if (!total) return { protein: 0, carbs: 0, fat: 0, total: 0 };
  return {
    protein: Math.round((proteinKcal / total) * 100),
    carbs: Math.round((carbKcal / total) * 100),
    fat: Math.round((fatKcal / total) * 100),
    total: Math.round(total),
  };
}

export function energyFromMacro(proteinG: number, carbsG: number, fatG: number) {
  return Math.round(proteinG * 4 + carbsG * 4 + fatG * 9);
}

export function sodiumToSalt(sodiumMg: number) {
  return +(sodiumMg * 2.5 / 1000).toFixed(2);
}

export function saltToSodium(saltG: number) {
  return Math.round(saltG * 400);
}

export const ACTIVITY_FACTORS: Record<string, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
};

export function estimateBMR({
  sex,
  weightKg,
  heightCm,
  age,
}: {
  sex: "male" | "female";
  weightKg: number;
  heightCm: number;
  age: number;
}) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return Math.round(sex === "male" ? base + 5 : base - 161);
}

export function estimateTDEE(bmr: number, activity: keyof typeof ACTIVITY_FACTORS) {
  return Math.round(bmr * ACTIVITY_FACTORS[activity]);
}

export const PLATE_GUIDE = [
  { label: "蔬菜与水果", ratio: 0.5, color: "#A6B59A" },
  { label: "谷物与薯类", ratio: 0.25, color: "#D99452" },
  { label: "蛋白质食物", ratio: 0.25, color: "#244C3A" },
];

export function weeklySum(records: { date: string; value: number }[], days = 7) {
  return records.slice(-days).reduce((sum, item) => sum + item.value, 0);
}
