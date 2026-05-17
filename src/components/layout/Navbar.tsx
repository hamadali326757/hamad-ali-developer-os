import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/ui/CTAButton";
import { cn } from "@/lib/utils";
import veloraLogo from "@/assets/velora-logo.png";

const links = [
  { to: "/services", label: "Services" },
  { to: "/ai-systems", label: "AI Systems" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-[rgba(11,11,15,0.85)] backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-wide flex h-[68px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-[8px] bg-[var(--accent)] text-[var(--accent-dark)] font-[var(--font-display)] font-bold text-sm">
            G
          </span>
          <span className="font-[var(--font-display)] font-bold text-[15px] tracking-tight">
            GymOS
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="rounded-md px-3 py-2 text-[14px] font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] data-[status=active]:text-[var(--text-primary)]"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <CTAButton to="/contact" size="md">Book free audit</CTAButton>
          </div>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-md border border-[var(--border)] text-[var(--text-primary)]"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-[var(--border)]"
          >
            <ul className="container-wide py-4 flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block rounded-md px-3 py-3 text-[14px] font-medium text-[var(--text-secondary)] data-[status=active]:text-[var(--text-primary)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <CTAButton to="/contact" fullWidth>Book free audit</CTAButton>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
