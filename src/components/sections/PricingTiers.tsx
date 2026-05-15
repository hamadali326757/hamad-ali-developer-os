import { Check } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Stagger, StaggerItem } from "@/components/motion/FadeInUp";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Foundation",
    price: "$2,400",
    cadence: "/ month",
    sub: "For gyms doing $30k–$80k MRR",
    features: [
      "AI lead intake (SMS, email, IG)",
      "Auto-booking workflow",
      "Lead-to-tour reporting",
      "Monthly performance review",
    ],
    cta: "Start with Foundation",
    featured: false,
  },
  {
    name: "Growth OS",
    price: "$4,800",
    cadence: "/ month",
    sub: "Most gyms start here",
    features: [
      "Everything in Foundation",
      "Member retention loop",
      "Churn risk detection",
      "Automated win-back campaigns",
      "Bi-weekly strategy calls",
      "Priority support",
    ],
    cta: "Book audit for Growth OS",
    featured: true,
  },
  {
    name: "Operator",
    price: "Custom",
    cadence: "",
    sub: "Multi-location & franchises",
    features: [
      "Everything in Growth OS",
      "Multi-location dashboard",
      "Custom integrations",
      "Dedicated growth strategist",
      "Quarterly on-site reviews",
    ],
    cta: "Talk to founder",
    featured: false,
  },
];

export function PricingTiers() {
  return (
    <section className="section-pad bg-[var(--bg-primary)]">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Investment"
          title="Pricing built for owners. Not for agencies."
          description="Monthly retainer. No long-term contracts. Cancel anytime — though no client has in 18 months."
        />
        <Stagger className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5" step={0.1}>
          {tiers.map((t) => (
            <StaggerItem key={t.name}>
              <div
                className={cn(
                  "h-full p-8 rounded-xl flex flex-col gap-6 border transition-colors",
                  t.featured
                    ? "bg-[var(--bg-card)] border-[rgba(182,255,77,0.35)] shadow-[0_0_40px_var(--accent-glow)]"
                    : "bg-[var(--bg-card)] border-[var(--border)] hover:border-[var(--border-hover)]"
                )}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-[var(--font-display)] font-bold text-[20px]">{t.name}</h3>
                  {t.featured && (
                    <span className="rounded-full bg-[var(--accent)] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[var(--accent-dark)]">
                      Most picked
                    </span>
                  )}
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <span className="font-[var(--font-display)] font-bold text-[40px] tracking-tight">
                      {t.price}
                    </span>
                    <span className="text-[14px] text-[var(--text-muted)]">{t.cadence}</span>
                  </div>
                  <div className="text-[13px] text-[var(--text-secondary)] mt-1">{t.sub}</div>
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] text-[var(--text-secondary)]">
                      <Check className="h-4 w-4 text-[var(--accent)] shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[var(--border)]">
                  <CTAButton
                    to="/contact"
                    variant={t.featured ? "primary" : "secondary"}
                    fullWidth
                  >
                    {t.cta}
                  </CTAButton>
                  <p className="text-[12px] text-[var(--text-muted)] text-center mt-3">
                    No long-term contracts
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
