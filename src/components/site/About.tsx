import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeader } from "./SectionHeader";
import hamadImg from "@/assets/hamad.png";

const skills = [
  { label: "Frontend Development", value: 92 },
  { label: "Backend Development", value: 87 },
  { label: "AI Integration", value: 84 },
  { label: "3D Web (Three.js / R3F)", value: 74 },
  { label: "SaaS Architecture", value: 88 },
];

const stack = [
  { group: "Frontend", items: ["React", "Next.js", "TanStack"] },
  { group: "Backend", items: ["Node.js", "Express", "Hono"] },
  { group: "Database", items: ["MongoDB", "Postgres", "Supabase"] },
  { group: "AI & Automation", items: ["OpenAI", "n8n", "LangChain"] },
  { group: "3D Web", items: ["Three.js", "R3F", "WebGL"] },
];

const stats = [
  { v: "25+", l: "Projects" },
  { v: "10+", l: "Clients" },
  { v: "5+", l: "SaaS Systems" },
  { v: "∞", l: "Curiosity" },
];

function SkillBar({ label, value, delay }: { label: string; value: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-text-primary">{label}</span>
        <span className="font-mono text-xs text-brand-cyan">{value}%</span>
      </div>
      <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.2, delay, ease: [0.4, 0, 0.2, 1] }}
          className="h-full rounded-full bg-aurora relative"
        >
          <span
            className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-brand-cyan"
            style={{ boxShadow: "0 0 12px rgba(6,182,212,0.9)" }}
          />
        </motion.div>
      </div>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32">
      <div
        className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 opacity-40 -z-10"
        style={{ background: "var(--gradient-nebula)", filter: "blur(80px)" }}
      />
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="01 / IDENTITY"
          title={<>The engineer behind the <span className="text-aurora">systems</span>.</>}
          subtitle="A developer obsessed with shipping. Building products that solve real business problems with AI, automation, and clean architecture."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Identity card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative rounded-3xl glass-strong glow-border p-8"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-aurora p-[2px]">
                <img src={hamadImg} alt="Hamad" className="h-full w-full rounded-2xl object-cover object-top" />
              </div>
              <div>
                <div className="font-display text-xl font-bold">Hamad Ali</div>
                <div className="mt-0.5 flex items-center gap-2 font-mono text-[11px] text-text-secondary">
                  <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                  ONLINE · ACCEPTING WORK
                </div>
              </div>
            </div>

            <p className="mt-6 text-[15px] leading-relaxed text-text-secondary">
              Full-stack developer & AI automation engineer. I build scalable SaaS systems,
              intelligent agents, and interactive 3D web experiences for startups and
              international clients.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Freelance Developer", "SaaS Builder", "AI Engineer", "3D Web"].map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-text-primary transition hover:translate-x-0.5 hover:border-brand-cyan/40 hover:text-brand-cyan"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Mini terminal */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-bg-void/80 p-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-error/80" />
                <span className="h-2 w-2 rounded-full bg-warning/80" />
                <span className="h-2 w-2 rounded-full bg-success/80" />
                <span className="ml-2 font-mono text-[10px] text-text-muted">~/hamad —  bash</span>
              </div>
              <pre className="mt-3 font-mono text-[12px] leading-relaxed text-text-secondary">
<span className="text-brand-cyan">$</span> whoami
<span className="text-text-primary">  hamad — building systems that ship.</span>
<span className="text-brand-cyan">$</span> stack --primary
<span className="text-text-primary">  react · node · ai · three.js</span>
              </pre>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl glass p-8"
            >
              <h3 className="font-display text-lg font-bold">Tech stack</h3>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {stack.map((s, i) => (
                  <motion.div
                    key={s.group}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-wider text-brand-cyan">
                      {s.group}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {s.items.map((it) => (
                        <span
                          key={it}
                          className="rounded-md bg-white/5 px-2 py-0.5 text-[12px] text-text-primary"
                        >
                          {it}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl glass p-8"
            >
              <h3 className="font-display text-lg font-bold">Core competencies</h3>
              <div className="mt-6 space-y-5">
                {skills.map((s, i) => (
                  <SkillBar key={s.label} {...s} delay={i * 0.1} />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl glass p-6 text-center transition-all hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="font-display text-3xl font-bold text-aurora">{s.v}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                {s.l}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
