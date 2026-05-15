import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { AuditForm } from "@/components/sections/AuditForm";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { Check } from "lucide-react";

const promises = [
  "We map your full lead-to-member flow",
  "We identify your three biggest revenue leaks",
  "We show you what the fix looks like — to the dollar",
  "Zero pitch. No follow-up sequence. Just clarity.",
];

export const Route = createFileRoute("/contact")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Book your free growth audit — GymOS" },
      { name: "description", content: "30-minute audit for independent US gym owners. We map your lead flow, identify revenue leaks, and show you the fix." },
      { property: "og:title", content: "Book your free growth audit — GymOS" },
      { property: "og:description", content: "30-minute audit for independent US gym owners." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function Page() {
  return (
    <PageShell>
      <section className="section-pad">
        <div className="container-wide grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div className="flex flex-col gap-8">
            <div>
              <FadeInUp>
                <span className="label-eyebrow inline-flex items-center gap-2">
                  <span className="accent-dot" /> 30 minutes · no commitment
                </span>
              </FadeInUp>
              <FadeInUp delay={0.05}>
                <h1 className="text-h1 mt-4 text-balance">
                  Book your free growth audit.
                </h1>
              </FadeInUp>
              <FadeInUp delay={0.1}>
                <p className="text-body-lg mt-5">
                  One call. One owner. One honest map of where your gym is leaking revenue —
                  and the system that would close it.
                </p>
              </FadeInUp>
            </div>
            <FadeInUp delay={0.15}>
              <ul className="flex flex-col gap-3.5">
                {promises.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[14px] text-[var(--text-secondary)]">
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[var(--accent-glow)] text-[var(--accent)] mt-0.5">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </FadeInUp>
            <FadeInUp delay={0.2}>
              <div className="card-base p-5 rounded-xl text-[13px] text-[var(--text-muted)]">
                We only work with independent US gym owners. If that's not you, we'll tell you on the call — and point you to someone who can help.
              </div>
            </FadeInUp>
          </div>
          <AuditForm />
        </div>
      </section>
    </PageShell>
  );
}
