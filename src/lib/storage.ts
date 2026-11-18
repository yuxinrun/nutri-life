"use client";

import { useCallback, useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(key);
      if (raw) setValue(JSON.parse(raw) as T);
    } catch {
      // 本地数据损坏时回退到初始值，不阻断页面使用
    }
    setReady(true);
  }, [key]);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // 隐私模式或配额不足时静默失败
    }
  }, [key, value, ready]);

  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  return { value, setValue, reset, ready } as const;
}

export function todayKey() {
  return new Date().toISOString().slice(0, 10);
}
