import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/layout/Chatbot";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg-primary)] px-4">
      <div className="max-w-md text-center">
        <span className="label-eyebrow">404</span>
        <h1 className="text-h1 mt-3">Page not found.</h1>
        <p className="mt-3 text-[15px] text-[var(--text-secondary)]">
          This page doesn't exist — but your free growth audit still does.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-5 py-2.5 text-[14px] font-medium text-[var(--accent-dark)] transition hover:scale-[1.02]"
          >
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "GymOS — We build systems that grow gyms." },
      {
        name: "description",
        content:
          "AI-powered growth infrastructure for independent US gym owners. More memberships, automated lead conversion, and quiet member retention.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "GymOS Agency" },
      { name: "theme-color", content: "#0B0B0F" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <div key={pathname} className="flex-1">
          <Outlet />
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
