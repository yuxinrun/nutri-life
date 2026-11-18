import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-card border border-line/80 bg-white/70 shadow-soft transition-all duration-300",
        className,
      )}
      {...props}
    />
  );
}

export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-5 sm:p-6", className)} {...props} />;
}

export function Badge({
  className,
  tone = "sage",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "sage" | "forest" | "apricot" | "neutral";
}) {
  const tones = {
    sage: "bg-sage/20 text-forest",
    forest: "bg-forest text-cream",
    apricot: "bg-apricot/15 text-[#9A5B25]",
    neutral: "bg-sand text-ink/70",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill px-2.5 py-1 text-[11px] font-medium tracking-wide",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
