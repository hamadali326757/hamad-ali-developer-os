import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Github, Sparkles, Zap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

type Project = {
  title: string;
  tags: string[];
  category: "SaaS" | "AI" | "Automation" | "Web";
  problem: string;
  solution: string;
  stack: string[];
  metrics?: { v: string; l: string }[];
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "SnapCut AI",
    tags: ["AI", "SaaS", "Automation"],
    category: "AI",
    problem:
      "Background-removal tools are slow, expensive, and require technical skills — blocking creators from fast content production.",
    solution:
      "One-click AI pipeline that removes backgrounds instantly at scale with workflow automation and cloud processing.",
    stack: ["React", "Node.js", "Express", "MongoDB", "AI APIs", "n8n", "Cloudinary"],
    metrics: [
      { v: "0.8s", l: "avg processing" },
      { v: "99%", l: "accuracy" },
      { v: "500/h", l: "throughput" },
    ],
    featured: true,
  },
  {
    title: "FlowDesk CRM",
    tags: ["SaaS", "Web"],
    category: "SaaS",
    problem: "Sales teams juggle 4–5 tools and lose context between calls and deals.",
    solution: "Unified CRM with pipelines, AI summaries, and Stripe-billed seats.",
    stack: ["Next.js", "Postgres", "Stripe", "TRPC"],
    metrics: [{ v: "3x", l: "deal velocity" }, { v: "12k", l: "MAU" }],
  },
  {
    title: "ContentForge AI",
    tags: ["AI", "SaaS"],
    category: "AI",
    problem: "Content teams spend hours rewriting briefs into multi-channel copy.",
    solution: "Brief-to-asset engine generating blog, ad and social copy from one input.",
    stack: ["React", "OpenAI", "Hono", "Supabase"],
    metrics: [{ v: "10x", l: "output speed" }],
  },
  {
    title: "DocuQuery",
    tags: ["AI", "Web"],
    category: "AI",
    problem: "Reading 200-page contracts to find one clause is brutal.",
    solution: "Vector-search powered Q&A over private document libraries.",
    stack: ["React", "Pinecone", "OpenAI", "Node.js"],
  },
  {
    title: "LeadPilot",
    tags: ["Automation", "AI"],
    category: "Automation",
    problem: "Inbound leads sit cold for 24+ hours killing conversion.",
    solution: "n8n-driven enrichment + AI follow-ups within 60 seconds.",
    stack: ["n8n", "OpenAI", "Node.js", "MongoDB"],
    metrics: [{ v: "<60s", l: "first reply" }, { v: "4.2x", l: "conversion" }],
  },
  {
    title: "DevBoard",
    tags: ["Web", "SaaS"],
    category: "Web",
    problem: "Dev teams need a unified view across GitHub, Vercel, and Linear.",
    solution: "Real-time engineering dashboard with custom widgets and alerts.",
    stack: ["React", "WebSockets", "Postgres"],
  },
];

const filters = ["All", "SaaS", "AI", "Automation", "Web"] as const;

const stats = [
  { v: "12+", l: "Projects built" },
  { v: "5", l: "SaaS products" },
  { v: "3", l: "AI tools" },
  { v: "100%", l: "Client satisfaction" },
];

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const filtered = projects.filter((p) =>
    filter === "All"
      ? true
      : filter === "SaaS"
      ? p.category === "SaaS" || p.tags.includes("SaaS")
      : filter === "AI"
      ? p.category === "AI" || p.tags.includes("AI")
      : filter === "Automation"
      ? p.category === "Automation" || p.tags.includes("Automation")
      : p.category === "Web" || p.tags.includes("Web")
  );

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="02 / SELECTED WORK"
          title={<>Products that <span className="text-aurora">ship & scale</span>.</>}
          subtitle="Engineered systems with AI-driven solutions and real-world impact — not just code."
        />

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl glass px-5 py-4">
              <div className="font-display text-2xl font-bold text-aurora">{s.v}</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-xl px-4 py-2 text-[13px] font-medium transition-all ${
                filter === f
                  ? "bg-aurora text-white"
                  : "glass text-text-secondary hover:text-text-primary"
              }`}
              style={filter === f ? { boxShadow: "0 0 20px rgba(37,99,235,0.4)" } : undefined}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className={`group relative overflow-hidden rounded-3xl glass p-7 transition-all hover:-translate-y-2 hover:bg-bg-card-hover ${
                  p.featured ? "lg:col-span-4 lg:row-span-2" : "lg:col-span-2"
                }`}
              >
                {p.featured && (
                  <>
                    <div
                      className="absolute -top-32 -right-32 h-64 w-64 rounded-full opacity-50"
                      style={{
                        background:
                          "radial-gradient(circle, rgba(124,58,237,0.5), transparent 60%)",
                        filter: "blur(40px)",
                      }}
                    />
                    <div className="absolute inset-0 rounded-3xl glow-border opacity-100" />
                  </>
                )}

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-wrap items-center gap-2">
                      {p.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-aurora px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-white">
                          <Sparkles className="h-3 w-3" /> Featured
                        </span>
                      )}
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-text-muted transition-all group-hover:rotate-12 group-hover:text-brand-cyan" />
                  </div>

                  <h3 className={`mt-5 font-display font-bold tracking-tight ${p.featured ? "text-3xl" : "text-xl"}`}>
                    {p.title}
                  </h3>

                  <div className="mt-5 space-y-3">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-error">
                        Problem
                      </div>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-text-secondary">
                        {p.problem}
                      </p>
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-wider text-success">
                        Solution
                      </div>
                      <p className="mt-1 text-[13.5px] leading-relaxed text-text-secondary">
                        {p.solution}
                      </p>
                    </div>
                  </div>

                  {p.metrics && (
                    <div className="mt-5 grid grid-cols-3 gap-2">
                      {p.metrics.map((m) => (
                        <div
                          key={m.l}
                          className="rounded-xl border border-white/[0.06] bg-bg-void/40 p-3 text-center"
                        >
                          <div className="font-display text-base font-bold text-brand-cyan">{m.v}</div>
                          <div className="mt-0.5 font-mono text-[9px] uppercase text-text-muted">
                            {m.l}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md bg-white/[0.04] px-2 py-1 font-mono text-[10.5px] text-text-secondary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-[12px] font-semibold text-text-primary transition hover:bg-white/10 hover:text-brand-cyan"
                    >
                      <Zap className="h-3.5 w-3.5" /> Live demo
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-3 py-2 text-[12px] font-semibold text-text-primary transition hover:bg-white/10"
                    >
                      <Github className="h-3.5 w-3.5" /> GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
