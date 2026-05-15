import { Counter } from "@/components/motion/Counter";
import { FadeInUp, Stagger, StaggerItem } from "@/components/motion/FadeInUp";

const metrics = [
  { value: 47, suffix: "", label: "Gyms automated", sub: "Across the USA" },
  { value: 3.2, suffix: "M", prefix: "$", label: "Added member revenue", sub: "Last 12 months", decimals: 1 },
  { value: 312, suffix: "%", label: "Avg. lead-to-tour lift", sub: "Within first 60 days" },
  { value: 67, suffix: "", label: "Days to ROI", sub: "Average across all clients" },
];

export function MetricsRow() {
  return (
    <section className="section-pad border-y border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="container-wide">
        <FadeInUp>
          <div className="text-center mb-12">
            <span className="label-eyebrow">Quiet results</span>
            <h2 className="text-h2 mt-3 max-w-[720px] mx-auto text-balance">
              The numbers our gym owners stopped explaining to their accountant.
            </h2>
          </div>
        </FadeInUp>
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border)] rounded-xl overflow-hidden border border-[var(--border)]" step={0.08}>
          {metrics.map((m) => (
            <StaggerItem key={m.label} className="bg-[var(--bg-card)] p-6 md:p-8 flex flex-col gap-2">
              <Counter
                to={m.value}
                prefix={m.prefix ?? ""}
                suffix={m.suffix ?? ""}
                decimals={m.decimals ?? 0}
                className="font-[var(--font-display)] font-bold text-[40px] md:text-[56px] leading-none text-[var(--accent)] tracking-tight"
              />
              <div className="font-[var(--font-display)] font-bold text-[15px] text-[var(--text-primary)] mt-2">
                {m.label}
              </div>
              <div className="text-[13px] text-[var(--text-muted)]">{m.sub}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
