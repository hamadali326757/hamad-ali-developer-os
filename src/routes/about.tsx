import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/site/About";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Hamad Ali" },
      {
        name: "description",
        content:
          "Full-stack developer and AI engineer. Skills: React, Node.js, AI, n8n, MongoDB. Building scalable SaaS and automation systems.",
      },
      { property: "og:title", content: "About — Hamad Ali" },
      { property: "og:description", content: "The engineer behind the systems — skills, stack, and approach." },
    ],
  }),
});

function AboutPage() {
  return (
    <PageShell>
      <About />
    </PageShell>
  );
}
