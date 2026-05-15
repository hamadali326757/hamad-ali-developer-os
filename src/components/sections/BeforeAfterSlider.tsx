import { useRef, useState } from "react";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { Tag } from "@/components/ui/Tag";

export function BeforeAfterSlider() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <FadeInUp>
      <div
        ref={ref}
        onMouseMove={(e) => e.buttons === 1 && move(e.clientX)}
        onTouchMove={(e) => move(e.touches[0].clientX)}
        className="relative card-base rounded-2xl overflow-hidden select-none"
      >
        <div className="grid grid-cols-2">
          {/* BEFORE */}
          <div className="p-8 md:p-10 bg-[var(--bg-card)]">
            <Tag variant="urgency">Before</Tag>
            <ul className="mt-5 flex flex-col gap-3 text-[14px] text-[var(--text-secondary)]">
              <li>72-hour avg lead response</li>
              <li>34% lead-to-tour rate</li>
              <li>11% monthly member churn</li>
              <li>Front desk drowning in DMs</li>
              <li>No retention signals tracked</li>
            </ul>
          </div>
          {/* AFTER overlay */}
          <div
            className="absolute inset-0 bg-[var(--bg-secondary)] p-8 md:p-10"
            style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          >
            <div className="ml-auto w-1/2 pl-6">
              <Tag variant="accent">After</Tag>
              <ul className="mt-5 flex flex-col gap-3 text-[14px] text-[var(--text-primary)]">
                <li>90-second AI response, 24/7</li>
                <li>71% lead-to-tour rate</li>
                <li>3.4% monthly member churn</li>
                <li>Front desk back to coaching</li>
                <li>Retention loop runs automatically</li>
              </ul>
            </div>
          </div>
          <div className="p-8 md:p-10 invisible">
            <ul className="flex flex-col gap-3 text-[14px]"><li>spacer</li><li>spacer</li><li>spacer</li><li>spacer</li><li>spacer</li></ul>
          </div>
        </div>

        {/* divider */}
        <div
          className="absolute top-0 bottom-0 w-px bg-[var(--accent)]"
          style={{ left: `${pos}%` }}
        >
          <button
            onMouseDown={(e) => move(e.clientX)}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-dark)] cursor-grab active:cursor-grabbing shadow-[0_0_20px_var(--accent-glow)]"
            aria-label="Drag to compare"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M8 6 2 12l6 6M16 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </FadeInUp>
  );
}
