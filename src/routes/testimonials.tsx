import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "@/components/site/Testimonials";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Testimonials — Hamad Ali" },
      {
        name: "description",
        content: "Real feedback from clients who shipped SaaS, AI, and automation systems with Hamad.",
      },
      { property: "og:title", content: "Testimonials — Hamad Ali" },
      { property: "og:description", content: "Trusted by global teams." },
    ],
  }),
});

function TestimonialsPage() {
  return (
    <PageShell>
      <Testimonials />
    </PageShell>
  );
}
