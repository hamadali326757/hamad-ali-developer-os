import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FadeInUp } from "@/components/motion/FadeInUp";

export const Route = createFileRoute("/services")({
  component: Page,
  head: () => ({
    meta: [
      { title: "Services & pricing — GymOS" },
      { name: "description", content: "Three tiers built for independent gym owners. Foundation, Growth OS, Operator. No long-term contracts." },
      { property: "og:title", content: "Services & pricing — GymOS" },
      { property: "og:description", content: "Three tiers built for independent gym owners." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function Page() {
  return (
    <PageShell>
      <section className="section-pad pb-16">
        <div className="container-wide">
          <FadeInUp>
            <span className="label-eyebrow">Services</span>
            <h1 className="text-h1 mt-3 max-w-[760px] text-balance">
              Pick the layer of growth infrastructure your gym needs next.
            </h1>
            <p className="text-body-lg mt-5 max-w-[600px]">
              Every engagement starts with a free growth audit. We only propose what we'd build —
              never a generic package.
            </p>
          </FadeInUp>
        </div>
      </section>
      <PricingTiers />
      <FAQ />
      <FinalCTA />
    </PageShell>
  );
}
