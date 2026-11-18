"use client";

import { useEffect, useRef } from "react";
import type { EChartsOption } from "echarts";
import { foods } from "@/data/foods";
import { macroPercentages, PLATE_GUIDE } from "@/lib/nutrition";
import { cn } from "@/lib/utils";

const palette = ["#244C3A", "#A6B59A", "#D99452", "#6B7A70", "#C7D3BE"];

export function EChart({ option, className, height = 300 }: { option: EChartsOption; className?: string; height?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let chart: { setOption: (o: EChartsOption) => void; dispose: () => void; resize: () => void } | null = null;
    const init = async () => {
      const echarts = await import("echarts");
      if (disposed || !ref.current) return;
      const instance = echarts.init(ref.current);
      chart = instance;
      instance.setOption(option);
    };
    init();
    const onResize = () => chart?.resize();
    window.addEventListener("resize", onResize);
    return () => {
      disposed = true;
      window.removeEventListener("resize", onResize);
      chart?.dispose();
    };
  }, [option]);

  return <div ref={ref} className={cn("w-full", className)} style={{ height }} role="img" aria-label="数据图表" />;
}

function baseOption(title: string, subtitle: string): EChartsOption {
  return {
    backgroundColor: "transparent",
    title: { text: title, subtext: subtitle, left: 0, textStyle: { fontSize: 16, color: "#26332B" }, subtextStyle: { fontSize: 11, color: "#6B7A70", lineHeight: 16 } },
    tooltip: { trigger: "axis", backgroundColor: "#fff", borderColor: "#E4E0D4", textStyle: { color: "#26332B", fontSize: 12 } },
    legend: { bottom: 0, textStyle: { color: "#6B7A70", fontSize: 11 }, icon: "roundRect", itemWidth: 10, itemHeight: 10 },
    grid: { left: 8, right: 16, top: 78, bottom: 48, containLabel: true },
    textStyle: { fontFamily: "Inter, Noto Sans SC, sans-serif" },
  };
}

export function MacroPieChart({ values, title = "宏量营养素供能构成" }: { values: { proteinG?: number; carbsG?: number; fatG?: number }; title?: string }) {
  const percentage = macroPercentages(values as { proteinG: number; carbsG: number; fatG: number });
  const option: EChartsOption = {
    ...baseOption(title, "按 4/4/9 kcal per g 计算；仅统计三大宏量营养素"),
    tooltip: { trigger: "item", formatter: "{b}: {c}%" },
    legend: { bottom: 0, textStyle: { color: "#6B7A70", fontSize: 11 } },
    series: [
      {
        type: "pie",
        radius: ["42%", "68%"],
        center: ["50%", "54%"],
        label: { formatter: "{b}\n{c}%", color: "#26332B", fontSize: 11 },
        data: [
          { value: percentage.protein, name: "蛋白质" },
          { value: percentage.carbs, name: "碳水化合物" },
          { value: percentage.fat, name: "脂肪" },
        ],
        color: palette.slice(0, 3),
      },
    ],
  };
  return <EChart option={option} />;
}

export function ProteinCompareChart({ slugs }: { slugs?: string[] }) {
  const selected = slugs?.length
    ? foods.filter((f) => slugs.includes(f.slug))
    : ["egg", "chicken-breast", "beef-lean", "salmon", "tofu", "soybeans"].map((slug) => foods.find((f) => f.slug === slug)!).filter(Boolean);
  const data = selected.filter((f) => f.nutritionPer100g.proteinG).map((f) => ({ name: f.title, value: f.nutritionPer100g.proteinG!, state: f.state }));
  const option: EChartsOption = {
    ...baseOption("不同食物蛋白质含量对比", "单位：g / 100 g 可食部；生熟状态不同，数值口径已逐条标注"),
    xAxis: { type: "value", name: "g/100g", axisLabel: { color: "#6B7A70" }, splitLine: { lineStyle: { color: "#EDE9DF" } } },
    yAxis: { type: "category", data: data.map((d) => d.name), axisLabel: { color: "#26332B", fontSize: 11 } },
    series: [{ type: "bar", data: data.map((d) => d.value), itemStyle: { color: "#244C3A", borderRadius: [0, 6, 6, 0] }, barMaxWidth: 18, tooltip: { formatter: (p: { name: string; value: number }) => `${p.name}：${p.value} g/100g` } }],
  };
  return <EChart option={option} height={360} />;
}

export function NutrientDensityChart() {
  const picks = ["spinach", "broccoli", "salmon", "egg", "almonds", "rice-brown"].map((slug) => foods.find((f) => f.slug === slug)!).filter(Boolean);
  const option: EChartsOption = {
    ...baseOption("食物营养密度比较（示例营养素）", "单位：mg / 100 g；不同食物优势不同，不代表整体优劣"),
    xAxis: { type: "category", data: picks.map((f) => f.title), axisLabel: { color: "#6B7A70", fontSize: 10, interval: 0, rotate: 20 } },
    yAxis: { type: "value", name: "mg/100g", axisLabel: { color: "#6B7A70" }, splitLine: { lineStyle: { color: "#EDE9DF" } } },
    series: [
      { name: "钙", type: "bar", data: picks.map((f) => f.nutritionPer100g.calciumMg ?? 0), itemStyle: { color: "#6F9465" } },
      { name: "钾", type: "bar", data: picks.map((f) => f.nutritionPer100g.potassiumMg ?? 0), itemStyle: { color: "#D99452" } },
      { name: "镁", type: "bar", data: picks.map((f) => f.nutritionPer100g.magnesiumMg ?? 0), itemStyle: { color: "#244C3A" } },
    ],
  };
  return <EChart option={option} height={360} />;
}

export function PlateGuideChart() {
  const option: EChartsOption = {
    ...baseOption("健康餐盘参考比例", "示意性的膳食结构比例，非个体化测算；来源：膳食指南通识"),
    tooltip: { trigger: "item", formatter: "{b}: 约 {c}%" },
    legend: { bottom: 0, textStyle: { color: "#6B7A70", fontSize: 11 } },
    series: [
      {
        type: "pie",
        radius: "65%",
        center: ["50%", "52%"],
        label: { formatter: "{b}\n约{c}%", fontSize: 11, color: "#26332B" },
        data: PLATE_GUIDE.map((item) => ({ name: item.label, value: Math.round(item.ratio * 100), itemStyle: { color: item.color } })),
      },
    ],
  };
  return <EChart option={option} />;
}

export function FoodGroupsChart({ counts }: { counts: { name: string; count: number }[] }) {
  const option: EChartsOption = {
    ...baseOption("食物百科分类覆盖", `单位：条目数；数据来源：本站食物百科（共 ${foods.length} 种）`),
    xAxis: { type: "category", data: counts.map((c) => c.name), axisLabel: { rotate: 30, fontSize: 10, color: "#6B7A70", interval: 0 } },
    yAxis: { type: "value", axisLabel: { color: "#6B7A70" }, splitLine: { lineStyle: { color: "#EDE9DF" } } },
    series: [{ type: "bar", data: counts.map((c) => c.count), itemStyle: { color: "#A6B59A", borderRadius: [6, 6, 0, 0] }, barMaxWidth: 28 }],
  };
  return <EChart option={option} height={340} />;
}

export function LabelComparisonChart({ per100, servingGrams, label = "某产品" }: { per100: number; servingGrams: number; label?: string }) {
  const perServing = Math.round((per100 * servingGrams) / 100);
  const option: EChartsOption = {
    ...baseOption("每 100 g 与每份对比", `示例：${label}；按每份 ${servingGrams} g 计算，数值由标签换算`),
    xAxis: { type: "category", data: ["每 100 g", `每份 ${servingGrams} g`], axisLabel: { color: "#26332B" } },
    yAxis: { type: "value", name: "mg", splitLine: { lineStyle: { color: "#EDE9DF" } }, axisLabel: { color: "#6B7A70" } },
    series: [{ type: "bar", data: [per100, perServing], barWidth: 46, itemStyle: { color: (p: { dataIndex: number }) => (p.dataIndex ? "#D99452" : "#244C3A"), borderRadius: [6, 6, 0, 0] } }],
  };
  return <EChart option={option} />;
}

export function TrendChart({
  title,
  subtitle,
  labels,
  values,
  unit,
  color = "#244C3A",
}: {
  title: string;
  subtitle: string;
  labels: string[];
  values: number[];
  unit: string;
  color?: string;
}) {
  const option: EChartsOption = {
    ...baseOption(title, subtitle),
    xAxis: { type: "category", data: labels, axisLabel: { color: "#6B7A70", fontSize: 10, rotate: labels.length > 10 ? 35 : 0 }, boundaryGap: false },
    yAxis: { type: "value", name: unit, axisLabel: { color: "#6B7A70" }, splitLine: { lineStyle: { color: "#EDE9DF" } } },
    series: [{ type: "line", data: values, smooth: true, symbolSize: 6, lineStyle: { color, width: 2 }, itemStyle: { color }, areaStyle: { color, opacity: 0.08 } }],
  };
  return <EChart option={option} />;
}

export function WaterChart({ records }: { records: { date: string; ml: number }[] }) {
  const last = records.slice(-7);
  const option: EChartsOption = {
    ...baseOption("每周饮水记录", "单位：ml；数据来自本地浏览器保存的记录"),
    xAxis: { type: "category", data: last.map((r) => r.date.slice(5)), axisLabel: { color: "#6B7A70", fontSize: 10 } },
    yAxis: { type: "value", name: "ml", splitLine: { lineStyle: { color: "#EDE9DF" } }, axisLabel: { color: "#6B7A70" } },
    series: [{ type: "bar", data: last.map((r) => r.ml), barMaxWidth: 32, itemStyle: { color: "#8FA7B8", borderRadius: [6, 6, 0, 0] }, markLine: { silent: true, data: [{ yAxis: 1700, name: "成年男性建议" }], lineStyle: { color: "#D99452", type: "dashed" }, label: { fontSize: 10, color: "#9A5B25" } } }],
  };
  return <EChart option={option} />;
}

export function DiaryHeatmap({ dates }: { dates: string[] }) {
  const option: EChartsOption = {
    backgroundColor: "transparent",
    title: { text: "饮食记录日历", subtext: "有记录的日期显示为绿色；数据来自本地浏览器", left: 0, textStyle: { fontSize: 16, color: "#26332B" }, subtextStyle: { fontSize: 11, color: "#6B7A70" } },
    tooltip: { formatter: (p: { value: [string, number] }) => `${p.value[0]}：${p.value[1] ? "有记录" : "未记录"}` },
    visualMap: { show: false, min: 0, max: 1, inRange: { color: ["#F0EBDD", "#244C3A"] } },
    calendar: { top: 80, left: 30, right: 20, cellSize: ["auto", 16], range: "2026", itemStyle: { color: "#F7F5EF", borderWidth: 2, borderColor: "#fff" }, yearLabel: { show: false }, monthLabel: { color: "#6B7A70", fontSize: 10 }, dayLabel: { color: "#6B7A70", fontSize: 9 } },
    series: [{ type: "heatmap", coordinateSystem: "calendar", data: dates.map((date) => [date, 1]) }],
  };
  return <EChart option={option} height={280} />;
}

export function EmptyChartState({ message }: { message: string }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center rounded-card border border-dashed border-line bg-white/50 p-6 text-center">
      <p className="text-sm text-muted">{message}</p>
      <p className="mt-2 text-xs text-muted/70">在下方记录数据后，图表会自动更新并保存在本机。</p>
    </div>
  );
}
