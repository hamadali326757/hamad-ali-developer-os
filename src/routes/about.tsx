import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { FadeInUp, Stagger, StaggerItem } from "@/components/motion/FadeInUp";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Compass, Heart, ShieldCheck, Wrench } from "lucide-react";

const principles = [
  { icon: Compass, title: "Specialization over scale", desc: "We work with independent US gyms. Only. Saying no to every other industry is how we got this good at this one." },
  { icon: Heart, title: "Owner-first, never agency-first", desc: "Every system we build is owned by your gym. Every account, every contact, every workflow — yours forever." },
  { icon: ShieldCheck, title: "Calm over hyped", desc: "We don't run growth-hack experiments on your members. We build infrastructure your team trusts and forgets is there." },
  { icon: Wrench, title: "Build, then step back", desc: "We engineer the system, hand over the keys, and review monthly. No ongoing dependency, no inflated retainers." },
];

export const Route = createFileRoute("/about")({
  component: Page,
  head: () => ({
    meta: [
      { title: "About — GymOS" },
      { name: "description", content: "Founder-led growth infrastructure for independent US gym owners. Calm operators. Quiet results." },
      { property: "og:title", content: "About — GymOS" },
      { property: "og:description", content: "Founder-led growth infrastructure for independent US gym owners." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function Page() {
  return (
    <PageShell>
      <section className="section-pad pb-16">
        <div className="container-wide grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
          <div>
            <FadeInUp>
              <span className="label-eyebrow">About</span>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <h1 className="text-h1 mt-3 text-balance">
                We started GymOS because gym owners deserve infrastructure, not another marketing agency.
              </h1>
            </FadeInUp>
          </div>
          <div className="flex flex-col gap-5">
            <FadeInUp delay={0.1}>
              <p className="text-body-lg">
                Most independent gyms aren't losing because of bad marketing. They're losing
                because the system between a lead's first DM and their fourth class doesn't exist.
                Front desk drowns. Owner burns out. Members quit silently.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.15}>
              <p className="text-body-lg">
                We build that missing system. Then we step back. And the gym owner gets to spend
                their week coaching, not chasing.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      <section className="section-pad bg-[var(--bg-secondary)]">
        <div className="container-wide">
          <SectionHeader eyebrow="What we believe" title="Four principles. Zero exceptions." />
          <Stagger className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4" step={0.1}>
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="card-base card-accent-hover p-7 rounded-xl flex flex-col gap-4 h-full">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-[var(--accent-glow)] text-[var(--accent)]">
                    <p.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <h3 className="text-[18px] font-[var(--font-display)] font-bold">{p.title}</h3>
                  <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FinalCTA />
    </PageShell>
  );
}
