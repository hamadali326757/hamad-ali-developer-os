import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { Counter } from "@/components/motion/Counter";

const chartPoints = [22, 28, 24, 35, 32, 44, 41, 52, 48, 60, 58, 72, 70, 82];

export function DashboardCard() {
  const max = Math.max(...chartPoints);
  const w = 320;
  const h = 80;
  const path = chartPoints
    .map((v, i) => {
      const x = (i / (chartPoints.length - 1)) * w;
      const y = h - (v / max) * h;
      return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
    })
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;

  return (
    <div className="relative">
      <div
        className="absolute -inset-6 rounded-3xl opacity-40 blur-2xl pointer-events-none"
        style={{ background: "radial-gradient(circle at 30% 20%, var(--accent-glow), transparent 70%)" }}
      />
      <div className="relative card-base p-6 md:p-7 rounded-2xl">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-[var(--accent)] text-[var(--accent-dark)] font-bold text-[12px]">G</span>
            <div>
              <div className="text-[13px] font-medium text-[var(--text-primary)]">Growth OS</div>
              <div className="text-[11px] text-[var(--text-muted)]">Live · last 30 days</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-glow)] px-2.5 py-1 text-[11px] font-medium text-[var(--accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            Online
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: "Leads", value: 142, suffix: "", delta: "+34%" },
            { label: "Members", value: 312, suffix: "", delta: "+8%" },
            { label: "Retention", value: 91, suffix: "%", delta: "+4%" },
          ].map((m) => (
            <div key={m.label} className="rounded-lg border border-[var(--border)] bg-[var(--bg-primary)]/40 p-3">
              <div className="text-[10px] uppercase tracking-[0.08em] text-[var(--text-muted)] font-medium">
                {m.label}
              </div>
              <div className="mt-1 flex items-baseline gap-1">
                <Counter
                  to={m.value}
                  suffix={m.suffix}
                  className="text-[22px] font-[var(--font-display)] font-bold text-[var(--text-primary)]"
                />
              </div>
              <div className="mt-1 inline-flex items-center gap-1 text-[11px] text-[var(--accent)]">
                <TrendingUp className="h-3 w-3" /> {m.delta}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-[var(--border)] bg-[var(--bg-primary)]/40 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[12px] text-[var(--text-secondary)]">Member growth</span>
            <span className="text-[11px] text-[var(--text-muted)]">30d</span>
          </div>
          <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20">
            <defs>
              <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d={area}
              fill="url(#g1)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            <motion.path
              d={path}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-[12px] text-[var(--text-muted)]">Auto-routed by AI</div>
          <a className="inline-flex items-center gap-1 text-[12px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
            View report <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
