"use client";

import { useState } from "react";
import { Plus, Download, Check } from "lucide-react";
import { useLocalStorage } from "@/lib/storage";
import { downloadFile } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardBody } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ToolFrame } from "./tool-frame";

type Item = { id: string; name: string; group: string; checked: boolean };
const groups = ["蔬菜水果", "谷物豆类", "蛋白质食物", "奶类与坚果", "调味与其他"];
const presets: Omit<Item, "id" | "checked">[] = [
  { name: "深色叶菜", group: "蔬菜水果" }, { name: "当季水果", group: "蔬菜水果" },
  { name: "燕麦 / 糙米", group: "谷物豆类" }, { name: "豆腐 / 杂豆", group: "谷物豆类" },
  { name: "鸡蛋", group: "蛋白质食物" }, { name: "鱼类或瘦肉", group: "蛋白质食物" },
  { name: "牛奶 / 酸奶", group: "奶类与坚果" }, { name: "原味坚果", group: "奶类与坚果" },
  { name: "橄榄油 / 菜籽油", group: "调味与其他" },
];

export function ShoppingList() {
  const { value: items, setValue: setItems } = useLocalStorage<Item[]>("nl:shopping", []);
  const [custom, setCustom] = useState("");

  const addPreset = (preset: Omit<Item, "id" | "checked">) => {
    if (items.some((i) => i.name === preset.name)) return;
    setItems([...items, { ...preset, id: `${Date.now()}`, checked: false }]);
  };

  return (
    <ToolFrame
      title="健康购物清单"
      description="按食物组生成清单，勾选已完成项目。支持添加自定义条目并导出文本，减少遗漏与冲动购买。"
      notice="清单模板是通用建议，不代表你必须购买所有条目。请结合已有食材和家庭成员需要调整。"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Card>
          <CardBody>
            <h2 className="mb-4 text-xl">常用清单模板</h2>
            <div className="space-y-2">
              {presets.map((p) => (
                <button key={p.name} onClick={() => addPreset(p)} className="flex w-full items-center justify-between rounded-xl border border-line px-4 py-3 text-left text-sm hover:border-forest/40 hover:bg-sand/40">
                  <span>{p.name}<span className="ml-2 text-[11px] text-muted">{p.group}</span></span>
                  <Plus className="h-4 w-4 text-forest" />
                </button>
              ))}
            </div>
            <div className="mt-5 flex gap-2">
              <Input value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="添加自定义条目…" onKeyDown={(e) => {
                if (e.key === "Enter" && custom.trim()) {
                  setItems([...items, { id: `${Date.now()}`, name: custom.trim(), group: "调味与其他", checked: false }]);
                  setCustom("");
                }
              }} />
              <Button onClick={() => {
                if (!custom.trim()) return;
                setItems([...items, { id: `${Date.now()}`, name: custom.trim(), group: "调味与其他", checked: false }]);
                setCustom("");
              }}>添加</Button>
            </div>
          </CardBody>
        </Card>

        <Card>
          <CardBody>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-xl">我的清单（{items.filter((i) => !i.checked).length} 项待购）</h2>
              <Button variant="outline" size="sm" onClick={() => downloadFile("健康购物清单.txt", groups.map((g) => {
                const list = items.filter((i) => i.group === g);
                return list.length ? `${g}\n${list.map((i) => `${i.checked ? "[x]" : "[ ]"} ${i.name}`).join("\n")}` : "";
              }).filter(Boolean).join("\n\n"))}><Download className="h-3.5 w-3.5" />导出清单</Button>
            </div>
            {items.length === 0 ? <p className="py-12 text-center text-sm text-muted">从左侧添加条目，开始生成本次购物清单。</p> : (
              <div className="space-y-6">
                {groups.map((group) => {
                  const groupItems = items.filter((i) => i.group === group);
                  if (!groupItems.length) return null;
                  return (
                    <div key={group}>
                      <p className="eyebrow mb-2">{group}</p>
                      <div className="space-y-1.5">
                        {groupItems.map((item) => (
                          <div key={item.id} className="flex items-center gap-3 rounded-xl bg-cream px-3 py-2.5">
                            <button onClick={() => setItems(items.map((i) => i.id === item.id ? { ...i, checked: !i.checked } : i))} className={`flex h-5 w-5 items-center justify-center rounded border ${item.checked ? "border-forest bg-forest text-cream" : "border-line bg-white"}`} aria-label="切换完成状态">
                              {item.checked ? <Check className="h-3 w-3" /> : null}
                            </button>
                            <span className={`flex-1 text-sm ${item.checked ? "text-muted line-through" : "text-ink"}`}>{item.name}</span>
                            <button onClick={() => setItems(items.filter((i) => i.id !== item.id))} className="text-[11px] text-muted hover:text-red-700">删除</button>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </ToolFrame>
  );
}
