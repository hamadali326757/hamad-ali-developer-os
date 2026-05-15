import { FadeInUp, Stagger, StaggerItem } from "@/components/motion/FadeInUp";
import { CTAButton } from "@/components/ui/CTAButton";
import { DashboardCard } from "@/components/sections/DashboardCard";
import { motion } from "framer-motion";

const pains = [
  "Not enough leads",
  "Members keep leaving",
  "No follow-up system",
  "Slow lead response",
  "Marketing is a guess",
  "Front desk is overloaded",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-faint opacity-60 [mask-image:radial-gradient(ellipse_at_top,#000_30%,transparent_75%)]" />
      <div
        className="absolute -top-[20%] left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full opacity-[0.07] blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 60%)" }}
      />
      <div className="relative container-wide pt-[120px] pb-24 md:pt-[160px] md:pb-32">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-20 items-center">
          <div className="flex flex-col gap-8">
            <FadeInUp>
              <span className="label-eyebrow inline-flex items-center gap-2">
                <span className="accent-dot" />
                Independent gyms · USA
              </span>
            </FadeInUp>
            <FadeInUp delay={0.05}>
              <h1 className="text-display text-[var(--text-primary)] text-balance">
                We build systems that{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-[var(--accent)]">grow gyms.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 bottom-1 h-[3px] w-full bg-[var(--accent)] origin-left"
                  />
                </span>
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.12}>
              <p className="text-body-lg max-w-[540px]">
                AI-powered growth infrastructure for independent gym owners. More
                memberships, automated lead conversion, and quiet member retention —
                without adding staff.
              </p>
            </FadeInUp>
            <FadeInUp delay={0.18}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <CTAButton to="/contact" size="lg">Book free growth audit</CTAButton>
                <CTAButton to="/case-studies" variant="secondary" size="lg" arrow={false}>
                  See client results
                </CTAButton>
              </div>
            </FadeInUp>
            <FadeInUp delay={0.24}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-4 text-[13px] text-[var(--text-muted)]">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                  47 gyms automated
                </span>
                <span>$3.2M added member revenue</span>
                <span>Avg. 67-day ROI</span>
              </div>
            </FadeInUp>
          </div>

          <FadeInUp delay={0.2} y={32}>
            <DashboardCard />
          </FadeInUp>
        </div>

        <Stagger delay={0.3} step={0.06} className="mt-20 flex flex-wrap gap-2.5">
          <StaggerItem>
            <span className="label-eyebrow !text-[var(--text-muted)] mr-2 self-center">
              Sound familiar?
            </span>
          </StaggerItem>
          {pains.map((p) => (
            <StaggerItem key={p}>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-card)] border border-[var(--border)] px-3.5 py-1.5 text-[13px] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-colors cursor-default">
                {p}
              </span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
