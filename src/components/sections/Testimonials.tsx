import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/motion/FadeInUp";

const items = [
  {
    quote:
      "We had leads. We just couldn't keep up. Within six weeks we'd added 38 new members and stopped losing the silent ones. The audit alone was worth it.",
    name: "Marcus Reid",
    role: "Owner · Iron Forge CrossFit, Austin",
    metric: "+38 members in 6 weeks",
  },
  {
    quote:
      "I stopped paying my front desk to chase Instagram DMs. The system did it. We picked up a full coach's salary in retained members the first quarter.",
    name: "Lana Powell",
    role: "Founder · Studio L Pilates, Charlotte",
    metric: "+$47k retained / quarter",
  },
  {
    quote:
      "I was about to hire a marketing manager. Glad I didn't. GymOS replaced that role and three of our spreadsheets in the same month.",
    name: "Diego Ortega",
    role: "Owner · Combat Athletic, San Diego",
    metric: "Saved hire · $72k/yr",
  },
];

export function Testimonials() {
  return (
    <section className="section-pad bg-[var(--bg-primary)]">
      <div className="container-wide">
        <SectionHeader
          eyebrow="What gym owners say"
          title="Calm operators. Quiet results."
        />
        <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" step={0.1}>
          {items.map((t) => (
            <StaggerItem key={t.name}>
              <div className="card-base card-accent-hover h-full p-7 rounded-xl flex flex-col gap-5">
                <Quote className="h-5 w-5 text-[var(--accent)]" />
                <p className="text-[15px] text-[var(--text-primary)] leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[13px] font-medium text-[var(--text-primary)]">{t.name}</div>
                    <div className="text-[12px] text-[var(--text-muted)]">{t.role}</div>
                  </div>
                  <span className="text-[11px] text-[var(--accent)] font-medium font-[var(--font-ui)]">
                    {t.metric}
                  </span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
