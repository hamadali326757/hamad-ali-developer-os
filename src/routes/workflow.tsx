import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { FadeInUp, Stagger, StaggerItem } from "@/components/motion/FadeInUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WorkflowDiagram } from "@/components/sections/WorkflowDiagram";
import { FinalCTA } from "@/components/sections/FinalCTA";
import {
  PhoneCall,
  Compass,
  Palette,
  Bot,
  FlaskConical,
  Rocket,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Discovery Call",
    desc: "We sit down for 30 minutes and map your current funnel, team and goals. Zero pitch — just clarity on where revenue is leaking.",
  },
  {
    icon: Compass,
    title: "Strategy Planning",
    desc: "A written growth plan: which systems to build first, expected ROI, timelines, and the exact KPIs we'll move.",
  },
  {
    icon: Palette,
    title: "Design & Development",
    desc: "We design and ship the dashboards, landing pages and member experiences your gym needs — on-brand, fast, and responsive.",
  },
  {
    icon: Bot,
    title: "AI Automation Setup",
    desc: "Lead capture, qualification, SMS follow-ups, churn alerts and reporting — wired into your existing CRM and calendar.",
  },
  {
    icon: FlaskConical,
    title: "Testing & Optimization",
    desc: "We A/B test copy, offers and flows for 2–3 weeks. Every improvement is measured and locked in before launch.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    desc: "Go-live with full handover, training and a dedicated Slack channel. We stay on for 60 days of active optimization.",
  },
];

export const Route = createFileRoute("/workflow")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Our Workflow — GymOS" },
      {
        name: "description",
        content:
          "From discovery call to launch — the 6-step GymOS process for installing AI growth systems in independent gyms.",
      },
      { property: "og:title", content: "Our Workflow — GymOS" },
      { property: "og:description", content: "The 6-step GymOS delivery process." },
      { property: "og:url", content: "/workflow" },
    ],
    links: [{ rel: "canonical", href: "/workflow" }],
  }),
});

function Page() {
  return (
    <PageShell>
      <section className="section-pad pb-12">
        <div className="container-wide">
          <FadeInUp>
            <span className="label-eyebrow">Our process</span>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <h1 className="text-h1 mt-3 max-w-[760px] text-balance">
              A calm, repeatable workflow — built to ship without chaos.
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-body-lg mt-5 max-w-[640px]">
              Six clearly-defined steps. No surprise invoices, no vanity decks —
              just a system installed inside your gym in 30–60 days.
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide">
          <Stagger className="relative grid gap-5" step={0.08}>
            <div
              aria-hidden
              className="absolute left-[27px] top-2 bottom-2 w-px bg-[var(--border)] hidden md:block"
            />
            {steps.map((s, i) => (
              <StaggerItem key={s.title}>
                <div className="card-base card-accent-hover group relative flex flex-col md:flex-row md:items-center gap-5 rounded-xl p-6 md:p-7">
                  <div className="flex items-center gap-4 md:w-[220px] shrink-0">
                    <span className="relative grid h-14 w-14 place-items-center rounded-xl bg-[var(--accent-glow)] text-[var(--accent)] ring-1 ring-[var(--border)] group-hover:scale-[1.05] transition-transform">
                      <s.icon className="h-5 w-5" strokeWidth={2} />
                      <span className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-[var(--bg-primary)] border border-[var(--border)] text-[11px] font-semibold text-[var(--text-muted)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </span>
                    <h3 className="font-[var(--font-display)] font-bold text-[18px] md:text-[20px] text-[var(--text-primary)]">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[var(--text-secondary)] md:flex-1">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <WorkflowDiagram />
      <FinalCTA />
    </PageShell>
  );
}
