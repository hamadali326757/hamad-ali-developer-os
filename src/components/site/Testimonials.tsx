import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const data = [
  {
    name: "Sarah Khan",
    role: "E-commerce Brand Owner",
    initials: "SK",
    feedback:
      "Hamad built our AI automation system in record time. What used to take hours is now fully automated — this changed our workflow completely.",
  },
  {
    name: "James Carter",
    role: "Startup Founder",
    initials: "JC",
    feedback:
      "Hamad developed our SaaS backend and dashboard with clean architecture and fast performance. The system scales perfectly.",
  },
  {
    name: "Ali Raza",
    role: "Digital Agency Owner",
    initials: "AR",
    feedback:
      "The n8n workflows Hamad built saved us countless hours. Lead handling and follow-ups are now fully automated.",
  },
  {
    name: "Emily Watson",
    role: "Content Creator",
    initials: "EW",
    feedback:
      "The AI tools Hamad built helped us generate content at scale. It feels like having a full team automated.",
  },
  {
    name: "David Lee",
    role: "Tech Consultant",
    initials: "DL",
    feedback:
      "From backend APIs to full SaaS systems, Hamad delivers clean, scalable, and production-ready solutions.",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % data.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = data[i];

  return (
    <section id="testimonials" className="relative py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="05 / CLIENT RESULTS"
          title={<>Trusted by <span className="text-aurora">global teams</span>.</>}
          subtitle="Real feedback from clients who shipped scalable systems, SaaS products, and automation with me."
        />

        <div className="relative mt-16">
          <div
            className="absolute inset-x-0 top-1/2 -z-10 h-64 -translate-y-1/2 opacity-50"
            style={{ background: "var(--gradient-nebula)", filter: "blur(60px)" }}
          />

          <div className="relative mx-auto max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl glass-strong glow-border p-10 text-center"
              >
                <Quote className="mx-auto h-7 w-7 text-brand-cyan opacity-70" />
                <div className="mt-4 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                <blockquote className="mt-6 font-display text-xl leading-relaxed text-text-primary sm:text-2xl">
                  “{t.feedback}”
                </blockquote>
                <figcaption className="mt-8 flex items-center justify-center gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-aurora font-display text-sm font-bold text-white">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <div className="font-display text-base font-bold">{t.name}</div>
                    <div className="font-mono text-[11px] text-text-secondary">{t.role}</div>
                  </div>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setI((p) => (p - 1 + data.length) % data.length)}
              className="grid h-10 w-10 place-items-center rounded-full glass transition hover:bg-white/10"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-1.5">
              {data.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-aurora" : "w-1.5 bg-white/20"}`}
                  aria-label={`Slide ${k + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setI((p) => (p + 1) % data.length)}
              className="grid h-10 w-10 place-items-center rounded-full glass transition hover:bg-white/10"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
