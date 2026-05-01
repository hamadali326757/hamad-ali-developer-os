import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#timeline", label: "Journey" },
  { href: "#testimonials", label: "Clients" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const y = window.scrollY + 140;
      for (const l of links) {
        const el = document.querySelector(l.href);
        if (el instanceof HTMLElement) {
          if (el.offsetTop <= y && el.offsetTop + el.offsetHeight > y) {
            setActive(l.href);
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-[1200px] items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-[0_8px_40px_rgba(0,0,0,0.5)]" : "bg-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-aurora">
            <Code2 className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-xl bg-aurora blur-md opacity-60 group-hover:opacity-100 transition" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-bold tracking-tight">Hamad Ali</div>
            <div className="font-mono text-[10px] text-text-secondary">~/dev.system</div>
          </div>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-lg px-3 py-2 text-[13px] font-medium transition-all ${
                  active === l.href
                    ? "text-text-primary bg-white/5"
                    : "text-text-secondary hover:text-text-primary hover:bg-white/[0.03]"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group relative inline-flex items-center gap-2 rounded-xl bg-aurora px-4 py-2.5 text-[13px] font-semibold text-white transition-all hover:scale-[1.02]"
          style={{ boxShadow: "0 0 24px rgba(37,99,235,0.4)" }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
          Hire Me
        </a>
      </nav>
    </motion.header>
  );
}
