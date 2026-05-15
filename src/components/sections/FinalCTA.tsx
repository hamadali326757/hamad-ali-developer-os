import { FadeInUp } from "@/components/motion/FadeInUp";
import { CTAButton } from "@/components/ui/CTAButton";

export function FinalCTA() {
  return (
    <section className="section-pad bg-[var(--bg-primary)] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, var(--accent) 0%, transparent 60%)" }}
      />
      <div className="relative container-content">
        <div className="card-base rounded-2xl p-10 md:p-16 text-center flex flex-col items-center gap-6">
          <FadeInUp>
            <span className="label-eyebrow inline-flex items-center gap-2">
              <span className="accent-dot" /> 30 minutes · no commitment
            </span>
          </FadeInUp>
          <FadeInUp delay={0.05}>
            <h2 className="text-h1 max-w-[680px] text-balance">
              Find out exactly what your gym is leaving on the table.
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-body-lg max-w-[560px]">
              On the audit call we'll map your lead flow, identify your three biggest revenue
              leaks, and show you exactly what the fix looks like. No pitch — just clarity.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.15}>
            <div className="pt-3">
              <CTAButton to="/contact" size="lg">Book your free audit</CTAButton>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <div className="text-[12px] text-[var(--text-muted)] pt-2">
              Independent gym owners only · USA · No long-term contracts
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
