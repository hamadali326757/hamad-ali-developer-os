import { motion } from "framer-motion";
import { useEffect, useState, lazy, Suspense } from "react";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import hamadImg from "@/assets/hamad.png";

const HeroScene = lazy(() =>
  import("./HeroScene").then((m) => ({ default: m.HeroScene }))
);

const rotating = [
  "I build AI systems that automate real businesses.",
  "I turn ideas into shipped SaaS products.",
  "I engineer 3D web experiences that convert.",
];

export function Hero() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % rotating.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-32 pb-20">
      {/* Ambient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div
          className="absolute -top-40 left-1/4 h-[600px] w-[600px] rounded-full opacity-50 animate-orb"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.45), transparent 60%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute top-40 right-1/4 h-[500px] w-[500px] rounded-full opacity-40 animate-orb"
          style={{
            background: "radial-gradient(circle, rgba(124,58,237,0.5), transparent 60%)",
            filter: "blur(60px)",
            animationDelay: "-4s",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(3,4,10,0)_0%,#03040a_75%)]" />
      </div>

      {/* 3D scene layer */}
      <div className="absolute inset-0 -z-[5] opacity-90">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            <span className="font-mono text-[11px] tracking-wider text-text-secondary">
              AVAILABLE FOR Q2 PROJECTS
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-[76px]"
          >
            Hamad Ali.
            <br />
            <span className="text-aurora">Engineering the</span>
            <br />
            <span className="text-text-primary">future of SaaS.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg"
          >
            Full-stack developer & AI automation engineer. I build SaaS systems,
            intelligent agents, and interactive 3D web experiences for global teams.
          </motion.p>

          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-5 flex items-center gap-2 font-mono text-[13px] text-brand-cyan"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{rotating[idx]}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-aurora px-5 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03]"
              style={{ boxShadow: "0 0 30px rgba(37,99,235,0.45)" }}
            >
              Let's Build Something
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl glass px-5 py-3 text-sm font-semibold text-text-primary transition-all hover:bg-white/[0.06] glow-border"
            >
              <Play className="h-3.5 w-3.5 fill-brand-cyan text-brand-cyan" />
              Explore My Work
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-3"
          >
            {[
              { v: "25+", l: "Projects shipped" },
              { v: "10+", l: "Global clients" },
              { v: "5+", l: "SaaS systems" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 transition-all hover:-translate-y-1 hover:bg-white/[0.05]">
                <div className="font-display text-2xl font-bold text-aurora">{s.v}</div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-wider text-text-secondary">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-[440px]"
        >
          {/* Outer rings */}
          <div className="absolute inset-0 rounded-full border border-white/5" />
          <div className="absolute inset-6 rounded-full border border-white/10" />
          <div
            className="absolute inset-0 rounded-full animate-pulse-glow"
            style={{
              background:
                "conic-gradient(from 180deg, rgba(37,99,235,0.6), rgba(124,58,237,0.6), rgba(6,182,212,0.6), rgba(37,99,235,0.6))",
              filter: "blur(28px)",
              opacity: 0.6,
            }}
          />

          {/* Frame */}
          <div className="absolute inset-3 overflow-hidden rounded-full glass-strong glow-border animate-float">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 30% 20%, rgba(37,99,235,0.3), transparent 60%), radial-gradient(circle at 70% 80%, rgba(124,58,237,0.3), transparent 60%)",
              }}
            />
            <img
              src={hamadImg}
              alt="Hamad Ali — Full Stack Developer & AI Automation Engineer"
              className="relative h-full w-full object-cover object-top"
              loading="eager"
            />
            {/* Light reflection */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
            {/* Bottom HUD */}
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl glass-strong px-3 py-2">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
                <span className="font-mono text-[10px] tracking-wider text-text-primary">
                  ONLINE
                </span>
              </div>
              <span className="font-mono text-[10px] text-brand-cyan">v.2026</span>
            </div>
          </div>

          {/* Floating chips */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -left-2 top-12 rounded-xl glass-strong px-3 py-2 font-mono text-[11px] text-brand-cyan"
            style={{ boxShadow: "0 0 20px rgba(6,182,212,0.3)" }}
          >
            {"<AI/>"}
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -right-2 top-32 rounded-xl glass-strong px-3 py-2 font-mono text-[11px] text-brand-violet"
            style={{ boxShadow: "0 0 20px rgba(124,58,237,0.3)" }}
          >
            SaaS.build()
          </motion.div>
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute bottom-16 -left-4 rounded-xl glass-strong px-3 py-2 font-mono text-[11px] text-brand-blue"
            style={{ boxShadow: "0 0 20px rgba(37,99,235,0.3)" }}
          >
            three.js
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
