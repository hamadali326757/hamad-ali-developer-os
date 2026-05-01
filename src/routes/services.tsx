import { createFileRoute } from "@tanstack/react-router";
import { Services } from "@/components/site/Services";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — Hamad Ali" },
      {
        name: "description",
        content:
          "AI automation, SaaS development, backend APIs, AI agents (n8n + OpenAI), and 3D web experiences.",
      },
      { property: "og:title", content: "Services — Hamad Ali" },
      { property: "og:description", content: "Productized services for real businesses." },
    ],
  }),
});

function ServicesPage() {
  return (
    <PageShell>
      <Services />
    </PageShell>
  );
}
