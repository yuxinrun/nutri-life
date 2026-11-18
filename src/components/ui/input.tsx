import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-xl border border-line bg-white px-3.5 text-sm text-ink placeholder:text-muted/70 focus:border-forest/50 focus:outline-none focus:ring-2 focus:ring-forest/10",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement>
>(({ className, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      "h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-ink focus:border-forest/50 focus:outline-none focus:ring-2 focus:ring-forest/10",
      className,
    )}
    {...props}
  />
));
Select.displayName = "Select";

export function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-xs font-semibold text-ink/80">{label}</span>
      {children}
      {hint ? <span className="block text-[11px] leading-relaxed text-muted">{hint}</span> : null}
    </label>
  );
}
