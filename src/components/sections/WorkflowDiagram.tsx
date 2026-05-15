import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Inbox, Brain, MessageCircle, CalendarCheck } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  { icon: Inbox, label: "Capture", sub: "All channels" },
  { icon: Brain, label: "Qualify", sub: "AI scoring" },
  { icon: MessageCircle, label: "Engage", sub: "2-way SMS" },
  { icon: CalendarCheck, label: "Book", sub: "Auto calendar" },
];

export function WorkflowDiagram() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.from(".wf-node", {
        opacity: 0,
        y: 24,
        duration: 0.5,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 70%", once: true },
      });
      gsap.fromTo(
        ".wf-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 0.9,
          ease: "power3.inOut",
          stagger: 0.12,
          transformOrigin: "left center",
          scrollTrigger: { trigger: el, start: "top 65%", once: true },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-pad bg-[var(--bg-primary)]">
      <div className="container-wide">
        <SectionHeader
          eyebrow="The flow"
          title="How a lead becomes a member."
          description="Every interaction logged, scored, and routed automatically — from first DM to first class."
        />
        <div ref={ref} className="mt-16 card-base rounded-2xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-2">
            {nodes.map((n, i) => (
              <div key={n.label} className="flex flex-col lg:flex-row items-center gap-4 lg:gap-2 flex-1">
                <div className="wf-node card-base rounded-xl p-5 w-full flex items-center gap-3 lg:flex-col lg:items-start">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-[var(--accent-glow)] text-[var(--accent)] shrink-0">
                    <n.icon className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <div className="lg:mt-2">
                    <div className="font-[var(--font-display)] font-bold text-[15px] text-[var(--text-primary)]">
                      {n.label}
                    </div>
                    <div className="text-[12px] text-[var(--text-muted)]">{n.sub}</div>
                  </div>
                </div>
                {i < nodes.length - 1 && (
                  <div className="wf-line hidden lg:flex items-center px-1 text-[var(--text-muted)] origin-left">
                    <span className="h-px w-10 bg-[var(--border-hover)]" />
                    <ArrowRight className="h-3.5 w-3.5 -ml-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
