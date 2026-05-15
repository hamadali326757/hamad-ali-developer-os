import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function Tag({
  children,
  variant = "default",
  className,
}: {
  children: ReactNode;
  variant?: "default" | "accent" | "urgency";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-[4px] px-2 py-1 font-[var(--font-ui)] text-[11px] uppercase tracking-[0.08em] font-medium",
        variant === "default" && "bg-white/[0.04] text-[var(--text-secondary)] border border-[var(--border)]",
        variant === "accent" && "bg-[var(--accent-glow)] text-[var(--accent)] border border-[rgba(182,255,77,0.2)]",
        variant === "urgency" && "bg-[rgba(255,106,61,0.12)] text-[var(--urgency)] border border-[rgba(255,106,61,0.25)]",
        className
      )}
    >
      {children}
    </span>
  );
}

export function Pill({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] px-3.5 py-1.5 text-[13px] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-hover)] hover:text-[var(--text-primary)]",
        className
      )}
    >
      {children}
    </span>
  );
}
