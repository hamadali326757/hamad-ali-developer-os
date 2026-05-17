import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { FadeInUp, Stagger, StaggerItem } from "@/components/motion/FadeInUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Tag } from "@/components/ui/Tag";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tag: string;
  tech: string[];
  demo: string;
  github: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Iron Forge Member OS",
    description:
      "Custom membership dashboard with AI lead scoring and SMS follow-ups. Added 38 members in 6 weeks with zero new ad spend.",
    tag: "GROWTH",
    tech: ["React", "TypeScript", "Supabase", "OpenAI"],
    demo: "#",
    github: "#",
    gradient: "from-[#B6FF4D]/20 via-transparent to-transparent",
  },
  {
    title: "Studio L Retention Engine",
    description:
      "Quiet-quitter detection and automated win-back flows. Cut monthly churn by 71% and saved a full coach salary.",
    tag: "AI AUTOMATION",
    tech: ["Next.js", "Python", "Postgres", "Twilio"],
    demo: "#",
    github: "#",
    gradient: "from-[#7C5CFF]/20 via-transparent to-transparent",
  },
  {
    title: "Combat Athletic Ops Hub",
    description:
      "Replaced a marketing hire and three spreadsheets in 30 days. Unified booking, leads and reporting in one dashboard.",
    tag: "SAAS BUILD",
    tech: ["React", "tRPC", "Prisma", "Stripe"],
    demo: "#",
    github: "#",
    gradient: "from-[#4DD0FF]/20 via-transparent to-transparent",
  },
  {
    title: "Northside Class Filler",
    description:
      "Pipeline reactivation system that filled four new fundamentals classes from existing cold leads.",
    tag: "AI AUTOMATION",
    tech: ["TypeScript", "LangChain", "Resend"],
    demo: "#",
    github: "#",
    gradient: "from-[#FF8A5C]/20 via-transparent to-transparent",
  },
  {
    title: "GymOS Audit Reports",
    description:
      "Generative AI report builder that turns a 30-minute call into a 12-page custom growth audit.",
    tag: "AI TOOL",
    tech: ["Next.js", "OpenAI", "Vercel AI SDK"],
    demo: "#",
    github: "#",
    gradient: "from-[#B6FF4D]/20 via-transparent to-transparent",
  },
  {
    title: "Coach Command Center",
    description:
      "Mobile-first PWA for coaches to track attendance, send check-ins and trigger member milestones in one tap.",
    tag: "WEB APP",
    tech: ["React", "PWA", "Supabase"],
    demo: "#",
    github: "#",
    gradient: "from-[#7C5CFF]/20 via-transparent to-transparent",
  },
];

export const Route = createFileRoute("/portfolio")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Portfolio — GymOS" },
      {
        name: "description",
        content:
          "Selected work: dashboards, AI automations and SaaS systems built for independent US gyms.",
      },
      { property: "og:title", content: "Portfolio — GymOS" },
      { property: "og:description", content: "Selected dashboards, AI automations and SaaS systems." },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
});

function Page() {
  return (
    <PageShell>
      <section className="section-pad pb-12">
        <div className="container-wide">
          <FadeInUp>
            <span className="label-eyebrow">Portfolio</span>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <h1 className="text-h1 mt-3 max-w-[760px] text-balance">
              Real systems. Real owners. Quietly compounding revenue.
            </h1>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-body-lg mt-5 max-w-[640px]">
              A selection of recent builds — dashboards, member apps, AI
              automations, and full SaaS platforms shipped for independent gyms.
            </p>
          </FadeInUp>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-wide">
          <SectionHeader eyebrow="Selected work" title="Built for owners, not for portfolios." />
          <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" step={0.08}>
            {projects.map((p) => (
              <StaggerItem key={p.title}>
                <article className="card-base card-accent-hover group h-full rounded-xl overflow-hidden flex flex-col transition-transform duration-300 hover:-translate-y-2">
                  <div className={`relative h-44 bg-gradient-to-br ${p.gradient} border-b border-[var(--border)] overflow-hidden`}>
                    <div className="absolute inset-0 grid-faint opacity-40" />
                    <div className="absolute top-4 left-4">
                      <Tag variant="accent">{p.tag}</Tag>
                    </div>
                    <div className="absolute bottom-4 right-4 font-[var(--font-display)] font-bold text-[40px] text-[var(--text-primary)]/10 leading-none select-none">
                      {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-4 flex-1">
                    <h3 className="font-[var(--font-display)] font-bold text-[18px] text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-[var(--text-secondary)] flex-1">
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--bg-primary)] px-2 py-1 text-[11px] font-medium text-[var(--text-muted)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 pt-2 border-t border-[var(--border)]">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md bg-[var(--accent)] text-[var(--accent-dark)] px-3 py-2 text-[12px] font-semibold transition-transform hover:scale-[1.03]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Live demo
                      </a>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-[var(--border)] px-3 py-2 text-[12px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" /> GitHub
                      </a>
                    </div>
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
