import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/experience", label: "Experience" },
  { to: "/testimonials", label: "Clients" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
          scrolled || open ? "glass-strong shadow-[0_8px_40px_rgba(0,0,0,0.5)]" : "bg-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-aurora">
            <Code2 className="h-4 w-4 text-white" strokeWidth={2.5} />
            <span className="absolute inset-0 rounded-xl bg-aurora blur-md opacity-60 group-hover:opacity-100 transition" />
          </span>
          <div className="leading-tight">
            <div className="font-display text-[15px] font-bold tracking-tight">Hamad Ali</div>
            <div className="font-mono text-[10px] text-text-secondary">~/dev.system</div>
          </div>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: true }}
                className="rounded-lg px-3 py-2 text-[13px] font-medium text-text-secondary transition-all hover:text-text-primary hover:bg-white/[0.03] data-[status=active]:text-text-primary data-[status=active]:bg-white/5"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden md:inline-flex group relative items-center gap-2 rounded-xl bg-aurora px-4 py-2.5 text-[13px] font-semibold text-white transition-all hover:scale-[1.02]"
            style={{ boxShadow: "0 0 24px rgba(37,99,235,0.4)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            Hire Me
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-xl glass text-text-primary"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <div className="absolute inset-x-0 top-full mt-2 md:hidden">
            <ul className="mx-4 rounded-2xl glass-strong p-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    activeOptions={{ exact: true }}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-text-secondary data-[status=active]:text-text-primary data-[status=active]:bg-white/5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="mt-1 block rounded-lg bg-aurora px-3 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </motion.header>
  );
}
