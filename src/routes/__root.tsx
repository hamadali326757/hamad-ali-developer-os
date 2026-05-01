import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-aurora">404</h1>
        <h2 className="mt-4 font-display text-xl font-semibold">Page not found</h2>
        <p className="mt-2 text-sm text-text-secondary">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-aurora px-5 py-2.5 text-sm font-semibold text-white transition hover:scale-[1.02]"
          >
            Go home
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
      { title: "Hamad Ali — Full Stack Developer & AI Automation Engineer" },
      {
        name: "description",
        content:
          "Hamad Ali — Full Stack Developer, AI Automation Engineer, and SaaS Builder. Engineering SaaS systems, AI agents, and 3D web experiences for global teams.",
      },
      { name: "author", content: "Hamad Ali" },
      { property: "og:title", content: "Hamad Ali — Engineering the future of SaaS" },
      {
        property: "og:description",
        content: "SaaS systems, AI automation, and 3D web experiences engineered for ambitious teams.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
    <div className="relative">
      <CursorGlow />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <div key={pathname}>
          <Outlet />
        </div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
