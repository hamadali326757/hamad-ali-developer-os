import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeInUp, Stagger, StaggerItem } from "@/components/motion/FadeInUp";
import { Bot, MessageSquare, Calendar, Repeat } from "lucide-react";

const steps = [
  {
    icon: Bot,
    title: "AI lead intake",
    sub: "Machine learning qualification",
    desc: "Every lead — Instagram DM, Facebook ad, walk-in, web form — captured and qualified in under 90 seconds.",
  },
  {
    icon: MessageSquare,
    title: "2-way conversation",
    sub: "SMS, email, IG, voice",
    desc: "Your AI follows up across every channel they prefer. Calm, on-brand, never robotic. 24/7.",
  },
  {
    icon: Calendar,
    title: "Auto-booked tour",
    sub: "Direct to your calendar",
    desc: "Qualified leads land on your booking page and confirm a free intro session — no front-desk back-and-forth.",
  },
  {
    icon: Repeat,
    title: "Retention loop",
    sub: "Member churn signals",
    desc: "We watch class attendance, billing, and engagement. At-risk members get a personal touch before they cancel.",
  },
];

export function ProcessSteps() {
  return (
    <section className="section-pad bg-[var(--bg-secondary)]">
      <div className="container-wide">
        <SectionHeader
          eyebrow="The system"
          title="Four loops. Working quietly. 24/7."
          description="Every gym we work with runs the same proven infrastructure — built around how members actually behave."
        />
        <Stagger className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative" step={0.12}>
          {steps.map((s, i) => (
            <StaggerItem key={s.title}>
              <div className="card-base card-accent-hover h-full p-6 rounded-xl flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-[var(--accent-glow)] text-[var(--accent)]">
                    <s.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span className="font-[var(--font-ui)] text-[12px] text-[var(--text-muted)] tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-[17px] font-[var(--font-display)] font-bold text-[var(--text-primary)]">
                    {s.title}
                  </h3>
                  <div className="text-[12px] text-[var(--accent)] mt-1 font-medium">{s.sub}</div>
                </div>
                <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <FadeInUp delay={0.3} className="mt-10 text-center">
          <p className="text-[13px] text-[var(--text-muted)]">
            Built once. Runs forever. Owned by your gym, not us.
          </p>
        </FadeInUp>
      </div>
    </section>
  );
}
