import { useState } from "react";
import { CTAButton } from "@/components/ui/CTAButton";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { Check } from "lucide-react";

export function AuditForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="card-base rounded-2xl p-8 md:p-10">
      {submitted ? (
        <FadeInUp className="flex flex-col items-center text-center gap-4 py-8">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-[var(--accent-glow)] text-[var(--accent)]">
            <Check className="h-6 w-6" strokeWidth={2.5} />
          </span>
          <h3 className="text-h3">Request received.</h3>
          <p className="text-[15px] text-[var(--text-secondary)] max-w-[420px]">
            We'll review your gym and reach out within one business day to schedule your free
            30-minute growth audit.
          </p>
        </FadeInUp>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="flex flex-col gap-5"
        >
          <FadeInUp>
            <div className="flex flex-col gap-1.5">
              <span className="label-eyebrow !text-[var(--text-muted)]">Step 1 of 1</span>
              <h2 className="text-h2">Tell us about your gym.</h2>
              <p className="text-[15px] text-[var(--text-secondary)] mt-1">
                Two minutes. We'll come back with what we'd build, what it'd cost, and a
                projected return — before any call.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.05} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Your name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Gym name" name="gym" required />
            <Field label="City, State" name="city" required />
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <Select
              label="Gym type"
              name="type"
              options={["CrossFit", "MMA / Boxing", "Boutique fitness", "Pilates / Yoga", "Performance training", "Other"]}
            />
          </FadeInUp>

          <FadeInUp delay={0.15}>
            <Select
              label="Active members"
              name="members"
              options={["< 100", "100–250", "250–500", "500–1000", "1000+"]}
            />
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <label className="flex flex-col gap-2">
              <span className="text-[13px] font-medium text-[var(--text-primary)]">
                What's the biggest growth bottleneck right now?
              </span>
              <textarea
                rows={4}
                className="rounded-md bg-[var(--bg-primary)] border border-[var(--border)] px-3.5 py-3 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                placeholder="Leads going cold, members quitting silently, no time for follow-up…"
              />
            </label>
          </FadeInUp>

          <FadeInUp delay={0.25} className="pt-2">
            <CTAButton type="submit" size="lg" fullWidth>
              Request free audit
            </CTAButton>
            <p className="text-[12px] text-[var(--text-muted)] text-center mt-3">
              No obligation. We respond in under 24 hours.
            </p>
          </FadeInUp>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[13px] font-medium text-[var(--text-primary)]">{label}</span>
      <input
        type={type}
        name={name}
        required={required}
        className="rounded-md bg-[var(--bg-primary)] border border-[var(--border)] px-3.5 py-3 text-[14px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[13px] font-medium text-[var(--text-primary)]">{label}</span>
      <select
        name={name}
        defaultValue=""
        className="rounded-md bg-[var(--bg-primary)] border border-[var(--border)] px-3.5 py-3 text-[14px] text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] transition-colors"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
