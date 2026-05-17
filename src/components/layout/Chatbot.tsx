import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, MessageSquare, Send, Sparkles, X } from "lucide-react";

type Msg = { id: string; role: "user" | "bot"; text: string };

const QUICK = [
  "What services do you provide?",
  "How can I contact you?",
  "Pricing information",
  "Automation services",
  "Web development services",
  "AI integrations",
  "Portfolio showcase",
];

function reply(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("service"))
    return "We build AI growth systems for gyms: lead capture, automated SMS follow-ups, retention engines, custom dashboards, and full SaaS platforms.";
  if (q.includes("contact") || q.includes("reach") || q.includes("email"))
    return "Easiest way: book a free 30-minute audit on the Contact page. Or email hello@gymos.agency — we reply within 24 hours.";
  if (q.includes("pric") || q.includes("cost") || q.includes("how much"))
    return "Projects start at $4,500 for a single automation and scale to $25k+ for full SaaS builds. The free audit gives you an exact quote.";
  if (q.includes("automat"))
    return "Lead qualification, 2-way SMS, churn alerts, booking flows, reporting — wired into your existing CRM and calendar. Typical setup is 14 days.";
  if (q.includes("web") || q.includes("develop") || q.includes("site"))
    return "We design and ship fast, on-brand sites and dashboards in React + TypeScript + Tailwind. Lighthouse 95+ across the board.";
  if (q.includes("ai") || q.includes("integration") || q.includes("openai"))
    return "We integrate OpenAI, Anthropic, and custom LLM workflows — from lead scoring to generative audit reports. Always with guardrails.";
  if (q.includes("portfolio") || q.includes("work") || q.includes("case"))
    return "Check the Portfolio page for selected work — Iron Forge, Studio L, Combat Athletic and more. Real numbers, no vanity metrics.";
  if (q.includes("hello") || q.includes("hi") || q.includes("hey"))
    return "Hey 👋 I'm the GymOS assistant. Ask me anything about our services, pricing, or process.";
  return "Great question — for anything specific, book a free audit on the Contact page and we'll dig in. Meanwhile, try one of the quick prompts below.";
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "init",
      role: "bot",
      text: "Hi! I'm the GymOS assistant. How can I help you today?",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing, open]);

  const send = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const userMsg: Msg = { id: crypto.randomUUID(), role: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: crypto.randomUUID(), role: "bot", text: reply(trimmed) },
      ]);
      setTyping(false);
    }, 750 + Math.random() * 500);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[var(--accent)] text-[var(--accent-dark)] shadow-[0_8px_32px_rgba(182,255,77,0.35)] hover:shadow-[0_8px_40px_rgba(182,255,77,0.55)] transition-shadow"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="x"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-5 w-5" strokeWidth={2.5} />
            </motion.span>
          ) : (
            <motion.span
              key="msg"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <MessageSquare className="h-5 w-5" strokeWidth={2.5} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-5 z-[60] w-[calc(100vw-2.5rem)] sm:w-[380px] h-[560px] max-h-[calc(100vh-7rem)] rounded-2xl overflow-hidden border border-[var(--border)] bg-[rgba(15,15,20,0.95)] backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col"
          >
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border)] bg-[rgba(11,11,15,0.6)]">
              <span className="relative grid h-9 w-9 place-items-center rounded-full bg-[var(--accent-glow)] text-[var(--accent)]">
                <Bot className="h-4 w-4" />
                <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[var(--accent)] ring-2 ring-[var(--bg-primary)]" />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-[var(--text-primary)]">
                  GymOS Assistant
                </div>
                <div className="text-[11px] text-[var(--text-muted)] flex items-center gap-1">
                  <Sparkles className="h-3 w-3" /> AI · usually replies instantly
                </div>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scroll-smooth"
            >
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-relaxed ${
                      m.role === "user"
                        ? "bg-[var(--accent)] text-[var(--accent-dark)] rounded-br-sm"
                        : "bg-[var(--bg-card)] border border-[var(--border)] text-[var(--text-primary)] rounded-bl-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}
              {typing && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-[var(--text-muted)]"
                        animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {QUICK.slice(0, 4).map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-2.5 py-1 text-[11.5px] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
              className="flex items-center gap-2 border-t border-[var(--border)] bg-[rgba(11,11,15,0.6)] px-3 py-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything…"
                className="flex-1 bg-transparent text-[13.5px] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] outline-none px-2 py-1.5"
                maxLength={300}
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Send"
                className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--accent)] text-[var(--accent-dark)] disabled:opacity-40 disabled:cursor-not-allowed hover:scale-[1.05] transition-transform"
              >
                <Send className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
