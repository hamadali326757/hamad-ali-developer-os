import { FadeInUp } from "@/components/motion/FadeInUp";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-[760px] flex flex-col gap-4",
        align === "center" ? "mx-auto text-center items-center" : "items-start text-left",
        className
      )}
    >
      {eyebrow && (
        <FadeInUp>
          <span className="label-eyebrow inline-flex items-center gap-2">
            <span className="accent-dot" />
            {eyebrow}
          </span>
        </FadeInUp>
      )}
      <FadeInUp delay={0.05}>
        <h2 className="text-h2 text-[var(--text-primary)] text-balance">{title}</h2>
      </FadeInUp>
      {description && (
        <FadeInUp delay={0.1}>
          <p className="text-body-lg text-[var(--text-secondary)] max-w-[560px] text-pretty">
            {description}
          </p>
        </FadeInUp>
      )}
    </div>
  );
}
