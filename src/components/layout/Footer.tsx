import { Link } from "@tanstack/react-router";
import { CTAButton } from "@/components/ui/CTAButton";

const product = [
  { to: "/services", label: "Services" },
  { to: "/ai-systems", label: "AI Systems" },
  { to: "/case-studies", label: "Case Studies" },
] as const;

const company = [
  { to: "/about", label: "About" },
  { to: "/insights", label: "Insights" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="container-wide py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-[8px] bg-[var(--accent)] text-[var(--accent-dark)] font-[var(--font-display)] font-bold text-sm">
              G
            </span>
            <span className="font-[var(--font-display)] font-bold text-[15px]">GymOS</span>
          </Link>
          <p className="text-[14px] text-[var(--text-secondary)] max-w-[280px] leading-relaxed">
            Growth infrastructure for independent gym owners. We build systems that grow gyms.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="label-eyebrow !text-[var(--text-muted)] mb-4">Product</div>
            <ul className="flex flex-col gap-3">
              {product.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="label-eyebrow !text-[var(--text-muted)] mb-4">Company</div>
            <ul className="flex flex-col gap-3">
              {company.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-[14px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="label-eyebrow !text-[var(--text-muted)]">Ready when you are</div>
          <h3 className="text-h3 max-w-[280px] md:text-right">Book your free growth audit.</h3>
          <CTAButton to="/contact">Book free audit</CTAButton>
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="container-wide py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[13px] text-[var(--text-muted)]">
            © {new Date().getFullYear()} GymOS Agency. Built for gyms.
          </p>
          <p className="text-[13px] text-[var(--text-muted)]">
            Independent gym owners · USA only
          </p>
        </div>
      </div>
    </footer>
  );
}
