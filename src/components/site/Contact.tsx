import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MessageCircle, Send, Calendar, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // Backend-ready hook point
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-32">
      <div
        className="absolute inset-x-0 top-20 -z-10 h-[400px] opacity-50"
        style={{ background: "var(--gradient-nebula)", filter: "blur(80px)" }}
      />
      <div className="mx-auto max-w-[1200px] px-6">
        <SectionHeader
          eyebrow="06 / LET'S BUILD"
          title={<>Have an idea? <span className="text-aurora">Let's ship it.</span></>}
          subtitle="Have a project idea or need automation? Let's turn it into a real system."
        />

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-[1fr_1.4fr]">
          {/* Contact options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <a
              href="https://wa.me/0000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl glass p-5 transition hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-success/15 text-success transition group-hover:scale-110">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-bold">WhatsApp</div>
                <div className="font-mono text-[11px] text-text-secondary">Quickest reply · ~2h</div>
              </div>
            </a>
            <a
              href="mailto:hello@hamadali.dev"
              className="group flex items-center gap-4 rounded-2xl glass p-5 transition hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/15 text-brand-blue transition group-hover:scale-110">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-bold">Email</div>
                <div className="font-mono text-[11px] text-text-secondary">hello@hamadali.dev</div>
              </div>
            </a>
            <a
              href="#"
              className="group flex items-center gap-4 rounded-2xl glass p-5 transition hover:-translate-y-1"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-violet/15 text-brand-violet transition group-hover:scale-110">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-sm font-bold">Book a call</div>
                <div className="font-mono text-[11px] text-text-secondary">30-min discovery</div>
              </div>
            </a>

            <div className="rounded-2xl glass-strong p-5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                <span className="font-mono text-[11px] uppercase tracking-wider text-text-secondary">
                  Response time
                </span>
              </div>
              <p className="mt-2 text-[13px] text-text-primary">
                I usually reply within 24 hours, often much sooner.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl glass-strong glow-border p-8"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                label="Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                placeholder="Your full name"
              />
              <Field
                label="Email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                placeholder="you@company.com"
                type="email"
              />
            </div>
            <div className="mt-5">
              <label className="font-mono text-[10.5px] uppercase tracking-wider text-text-secondary">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, timeline, and goals…"
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-bg-void/60 p-4 text-[14px] text-text-primary outline-none transition placeholder:text-text-muted focus:border-brand-cyan/50"
                style={{ boxShadow: "inset 0 0 0 0 transparent" }}
              />
            </div>

            <button
              type="submit"
              disabled={sent}
              className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-aurora px-5 py-3.5 text-sm font-semibold text-white transition-all hover:scale-[1.01] disabled:opacity-80"
              style={{ boxShadow: "0 0 30px rgba(37,99,235,0.45)" }}
            >
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  Start your project
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>
            <p className="mt-3 text-center font-mono text-[11px] text-text-muted">
              I usually reply within 24 hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="font-mono text-[10.5px] uppercase tracking-wider text-text-secondary">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-white/10 bg-bg-void/60 px-4 py-3 text-[14px] text-text-primary outline-none transition placeholder:text-text-muted focus:border-brand-cyan/50"
      />
    </div>
  );
}
