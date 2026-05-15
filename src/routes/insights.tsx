import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { FadeInUp, Stagger, StaggerItem } from "@/components/motion/FadeInUp";
import { Tag } from "@/components/ui/Tag";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { tag: "GROWTH", title: "The 90-second rule: why fast lead response is the only marketing that matters for gyms.", read: "6 min", date: "Apr 2026" },
  { tag: "RETENTION", title: "Quiet quitters: the four signals that predict a member cancellation 21 days early.", read: "8 min", date: "Mar 2026" },
  { tag: "OPERATIONS", title: "Stop hiring marketing managers. Start building marketing systems.", read: "5 min", date: "Mar 2026" },
  { tag: "GROWTH", title: "What we learned from automating 47 gyms (and the one mistake we kept making).", read: "11 min", date: "Feb 2026" },
  { tag: "AI", title: "Why your front desk shouldn't be answering Instagram DMs in 2026.", read: "7 min", date: "Feb 2026" },
  { tag: "RETENTION", title: "The economics of one saved member. (Hint: it's $1,524 per year, on average.)", read: "4 min", date: "Jan 2026" },
];

export const Route = createFileRoute("/insights")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Insights — GymOS" },
      { name: "description", content: "Calm, specific writing on running a profitable independent gym. From the GymOS team." },
      { property: "og:title", content: "Insights — GymOS" },
      { property: "og:description", content: "Calm, specific writing on running a profitable independent gym." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
});

function Page() {
  return (
    <PageShell>
      <section className="section-pad pb-16">
        <div className="container-wide">
          <FadeInUp>
            <span className="label-eyebrow">Insights</span>
            <h1 className="text-h1 mt-3 max-w-[720px] text-balance">
              Field notes from inside 47 independent gyms.
            </h1>
            <p className="text-body-lg mt-5 max-w-[560px]">
              No SEO bait. No listicles. Just what we're seeing this month.
            </p>
          </FadeInUp>
        </div>
      </section>
      <section className="pb-32">
        <div className="container-wide">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" step={0.08}>
            {posts.map((p) => (
              <StaggerItem key={p.title}>
                <article className="card-base card-accent-hover h-full p-6 rounded-xl flex flex-col gap-4 group">
                  <div className="flex items-center justify-between">
                    <Tag variant="accent">{p.tag}</Tag>
                    <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" />
                  </div>
                  <h3 className="text-[18px] font-[var(--font-display)] font-bold leading-snug text-[var(--text-primary)] flex-1">
                    {p.title}
                  </h3>
                  <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between text-[12px] text-[var(--text-muted)]">
                    <span>{p.date}</span>
                    <span>{p.read} read</span>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
      <FinalCTA />
    </PageShell>
  );
}
