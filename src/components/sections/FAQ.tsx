import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FadeInUp } from "@/components/motion/FadeInUp";

const items = [
  {
    q: "Do you only work with gyms?",
    a: "Yes — exclusively independent gym owners in the USA. CrossFit, MMA, boxing, boutique, pilates, and performance facilities. We say no to everyone else, including chains.",
  },
  {
    q: "How fast do I see results?",
    a: "Lead response and booking automation goes live within 14 days. Most clients see their first measurable revenue lift in 30–45 days. Average full ROI in 67 days.",
  },
  {
    q: "Will this replace my front desk?",
    a: "No — it amplifies them. Your team stops chasing cold leads and spends time on the members who walk through the door. Conversions go up, hours go down.",
  },
  {
    q: "Do I own the system after the engagement?",
    a: "Yes. Every workflow, every account, every conversation history is yours. We don't lock you in — that's why we don't have a single client churn over 18 months.",
  },
  {
    q: "What if I already use a CRM or gym software?",
    a: "We integrate with whatever you use — Mindbody, Wodify, ABC, GymMaster, Zen Planner, or any standard CRM. The system layers on top, never replaces.",
  },
  {
    q: "How is pricing structured?",
    a: "Monthly retainer with no long-term contract. The growth audit is free and tells you exactly what we'd build, what it'd cost, and the projected return — no obligation.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="section-pad bg-[var(--bg-secondary)]">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Common questions"
          title="Straight answers."
          description="No fine print, no over-promising. Here's exactly how we operate."
        />
        <FadeInUp delay={0.1} className="mt-14 max-w-[760px] mx-auto flex flex-col gap-3">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={item.q}
                className="card-base rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 p-5 md:p-6 text-left"
                >
                  <span className="font-[var(--font-display)] font-bold text-[16px] md:text-[18px] text-[var(--text-primary)]">
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-[var(--border)] text-[var(--text-secondary)]"
                  >
                    <ChevronDown className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-6 text-[15px] text-[var(--text-secondary)] leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </FadeInUp>
      </div>
    </section>
  );
}
