import { motion } from "framer-motion";
import { Bot, Boxes, Code2, Cpu, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const services = [
  {
    icon: Bot,
    title: "AI Automation Systems",
    desc: "Automate repetitive business workflows using AI and no-code tools.",
    features: ["n8n workflow automation", "AI agents (OpenAI / GPT)", "Lead automation", "CRM + email automation"],
    cta: "Start Automation",
    accent: "violet",
  },
  {
    icon: Boxes,
    title: "SaaS Development",
    desc: "Build complete SaaS platforms from idea to production.",
    features: ["Full-stack architecture", "Authentication systems", "Dashboards & admin panels", "Scalable backend"],
    cta: "Build SaaS",
    accent: "blue",
  },
  {
    icon: Code2,
    title: "Backend API Development",
    desc: "Design powerful and scalable backend systems.",
    features: ["Node.js / Express APIs", "Database architecture", "REST & integrations", "Secure auth"],
    cta: "Create Backend",
    accent: "cyan",
  },
  {
    icon: Cpu,
    title: "AI Tools & Integrations",
    desc: "Integrate AI into products to automate tasks and improve UX.",
    features: ["OpenAI integrations", "Chatbots & assistants", "AI content systems", "Smart workflows"],
    cta: "Integrate AI",
    accent: "violet",
  },
  {
    icon: Sparkles,
    title: "3D Web Experiences",
    desc: "Create interactive 3D websites that stand out and convert users.",
    features: ["React Three Fiber", "3D animations", "Interactive UI", "Immersive landings"],
    cta: "Build 3D Experience",
    accent: "cyan",
  },
];

const accentStyles: Record<string, { glow: string; ring: string; text: string }> = {
  blue: { glow: "rgba(37,99,235,0.4)", ring: "border-brand-blue/40", text: "text-brand-blue" },
  violet: { glow: "rgba(124,58,237,0.4)", ring: "border-brand-violet/40", text: "text-brand-violet" },
  cyan: { glow: "rgba(6,182,212,0.4)", ring: "border-brand-cyan/40", text: "text-brand-cyan" },
};

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="03 / WHAT I BUILD"
          title={<>Productized services for <span className="text-aurora">real businesses</span>.</>}
          subtitle="Full-stack systems, AI automation, and SaaS platforms designed to solve real business problems."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            const a = accentStyles[s.accent];
            return (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-3xl glass p-7 transition-all hover:-translate-y-2"
              >
                <div
                  className="absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    background: `radial-gradient(circle, ${a.glow}, transparent 70%)`,
                    filter: "blur(40px)",
                  }}
                />
                <div className="relative">
                  <div
                    className={`relative inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${a.ring} bg-white/[0.03] transition-transform group-hover:scale-110`}
                    style={{ boxShadow: `0 0 0 0 ${a.glow}` }}
                  >
                    <Icon className={`h-5 w-5 ${a.text}`} />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-text-secondary">{s.desc}</p>

                  <ul className="mt-5 space-y-2">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-[13px] text-text-secondary">
                        <span className={`h-1 w-1 rounded-full ${a.text.replace("text", "bg")}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#contact"
                    className={`mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold ${a.text} transition-all group-hover:gap-2.5`}
                  >
                    {s.cta} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
