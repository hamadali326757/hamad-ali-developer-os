import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const items = [
  {
    year: "2024",
    title: "Freelance Developer · Start",
    desc: "Started freelancing and building real-world web applications for clients. Focused on full-stack fundamentals.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    year: "2025",
    title: "SaaS Development",
    desc: "Began building complete SaaS platforms — dashboards, authentication, and scalable backend architecture.",
    stack: ["Next.js", "Supabase", "Stripe", "Postgres"],
  },
  {
    year: "2026",
    title: "AI + Automation Systems",
    desc: "Integrated AI into products and shipped automation workflows using n8n, APIs, and AI agents.",
    stack: ["OpenAI", "n8n", "Node.js", "Pipelines"],
  },
  {
    year: "2027",
    title: "3D Web & Advanced Systems",
    desc: "Building interactive 3D web experiences combined with SaaS and AI systems.",
    stack: ["Three.js", "R3F", "WebGL", "GSAP"],
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="relative py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="04 / JOURNEY"
          title={<>From freelancer to <span className="text-aurora">systems engineer</span>.</>}
          subtitle="A growth roadmap — every year, a new system, a deeper craft."
        />

        <div className="relative mt-16">
          {/* Spine */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-blue/0 via-brand-violet to-brand-cyan/0 md:left-1/2 md:-translate-x-px" />

          <ol className="space-y-14">
            {items.map((it, i) => {
              const left = i % 2 === 0;
              return (
                <motion.li
                  key={it.year}
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid grid-cols-1 items-center gap-6 md:grid-cols-2 ${left ? "" : "md:[&>div:first-child]:order-2"}`}
                >
                  {/* Node */}
                  <span className="absolute left-4 z-10 grid h-4 w-4 -translate-x-1/2 place-items-center md:left-1/2">
                    <span className="absolute h-4 w-4 animate-ping rounded-full bg-brand-cyan opacity-50" />
                    <span className="relative h-3 w-3 rounded-full bg-aurora" style={{ boxShadow: "0 0 16px rgba(6,182,212,0.7)" }} />
                  </span>

                  {/* Card side */}
                  <div className={`pl-12 md:pl-0 ${left ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="rounded-3xl glass p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.04]">
                      <div className={`flex items-center gap-2 ${left ? "md:justify-end" : ""}`}>
                        <span className="font-mono text-[11px] uppercase tracking-wider text-brand-cyan">
                          / {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-2 font-display text-xl font-bold">{it.title}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">{it.desc}</p>
                      <div className={`mt-4 flex flex-wrap gap-1.5 ${left ? "md:justify-end" : ""}`}>
                        {it.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded-md bg-white/[0.04] px-2 py-0.5 font-mono text-[10.5px] text-text-secondary"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Year side */}
                  <div className={`pl-12 md:pl-0 ${left ? "md:pl-16" : "md:pr-16 md:text-right"}`}>
                    <div className={`font-display text-5xl font-extrabold text-aurora md:text-6xl`}>
                      {it.year}
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
