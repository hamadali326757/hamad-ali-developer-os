import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { FadeInUp, Stagger, StaggerItem } from "@/components/motion/FadeInUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { MetricsRow } from "@/components/sections/MetricsRow";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    tag: "GROWTH",
    name: "Iron Forge CrossFit",
    city: "Austin, TX",
    headline: "+38 members in 6 weeks. Zero new ad spend.",
    metric: "+$4,826 MRR",
    sub: "Lead-to-tour 34% → 71%",
  },
  {
    tag: "RETENTION",
    name: "Studio L Pilates",
    city: "Charlotte, NC",
    headline: "Cut monthly churn by 71%. Saved one full coach salary.",
    metric: "−71% churn",
    sub: "Quiet quitters caught early",
  },
  {
    tag: "OPERATIONS",
    name: "Combat Athletic",
    city: "San Diego, CA",
    headline: "Replaced a marketing hire and three spreadsheets in 30 days.",
    metric: "$72k saved",
    sub: "Front desk 11 hrs/wk back",
  },
  {
    tag: "GROWTH",
    name: "Northside Boxing",
    city: "Chicago, IL",
    headline: "Filled four new fundamentals classes from existing pipeline.",
    metric: "+62 members",
    sub: "All from cold leads",
  },
];

export const Route = createFileRoute("/case-studies")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Case studies — GymOS" },
      { name: "description", content: "Independent US gyms — real results. Member growth, retention, and operational efficiency." },
      { property: "og:title", content: "Case studies — GymOS" },
      { property: "og:description", content: "Real results from independent US gyms." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
});

function Page() {
  return (
    <PageShell>
      <section className="section-pad pb-12">
        <div className="container-wide">
          <FadeInUp>
            <span className="label-eyebrow">Case studies</span>
            <h1 className="text-h1 mt-3 max-w-[760px] text-balance">
              47 independent gyms. One playbook. Quietly compounding.
            </h1>
          </FadeInUp>
        </div>
      </section>
      <MetricsRow />
      <section className="section-pad">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Selected work"
            title="Built for owners, not for portfolios."
          />
          <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5" step={0.1}>
            {cases.map((c) => (
              <StaggerItem key={c.name}>
                <div className="card-base card-accent-hover h-full p-7 rounded-xl flex flex-col gap-5 group">
                  <div className="flex items-center justify-between">
                    <Tag variant="accent">{c.tag}</Tag>
                    <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                  </div>
                  <div>
                    <div className="text-[12px] text-[var(--text-muted)]">{c.city}</div>
                    <h3 className="text-[20px] font-[var(--font-display)] font-bold mt-1">{c.name}</h3>
                  </div>
                  <p className="text-[16px] text-[var(--text-primary)] leading-snug">{c.headline}</p>
                  <div className="pt-4 mt-auto border-t border-[var(--border)] flex items-baseline justify-between">
                    <span className="font-[var(--font-display)] font-bold text-[24px] text-[var(--accent)]">{c.metric}</span>
                    <span className="text-[12px] text-[var(--text-muted)]">{c.sub}</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <section className="section-pad bg-[var(--bg-secondary)]">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Before vs After"
            title="What 60 days with GymOS actually looks like."
          />
          <div className="mt-12 max-w-[960px] mx-auto">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>
      <FinalCTA />
    </PageShell>
  );
}
