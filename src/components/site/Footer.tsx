import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 px-6 md:flex-row md:items-center">
        <div>
          <div className="font-display text-lg font-bold">Hamad Ali</div>
          <p className="mt-1 font-mono text-[11px] text-text-secondary">
            © {new Date().getFullYear()} · Engineered with intention.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {[
            { I: Github, href: "#" },
            { I: Linkedin, href: "#" },
            { I: Twitter, href: "#" },
            { I: Mail, href: "mailto:hello@hamadali.dev" },
          ].map(({ I, href }, k) => (
            <a
              key={k}
              href={href}
              className="grid h-10 w-10 place-items-center rounded-xl glass text-text-secondary transition hover:-translate-y-0.5 hover:text-brand-cyan"
            >
              <I className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
