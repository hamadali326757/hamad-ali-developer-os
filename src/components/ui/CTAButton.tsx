import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface BaseProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--accent)] text-[var(--accent-dark)] hover:shadow-[0_0_24px_var(--accent-glow)]",
  secondary:
    "bg-transparent text-[var(--text-primary)] border border-[var(--border)] hover:border-[var(--border-hover)] hover:bg-white/[0.02]",
  ghost:
    "bg-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[14px]",
  lg: "px-7 py-3.5 text-[15px]",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium font-[var(--font-ui)] tracking-tight transition-all duration-200 will-change-transform";

export function CTAButton({
  children,
  variant = "primary",
  size = "md",
  arrow = true,
  fullWidth = false,
  className,
  to,
  href,
  onClick,
  type,
}: BaseProps & {
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      )}
    </>
  );

  const cls = cn(
    "group",
    base,
    styles[variant],
    sizes[size],
    fullWidth && "w-full",
    className
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className={fullWidth ? "w-full" : "inline-block"}>
        <Link to={to} className={cls}>
          {inner}
        </Link>
      </motion.div>
    );
  }
  if (href) {
    return (
      <motion.a {...motionProps} href={href} className={cls}>
        {inner}
      </motion.a>
    );
  }
  return (
    <motion.button {...motionProps} type={type ?? "button"} onClick={onClick} className={cls}>
      {inner}
    </motion.button>
  );
}
