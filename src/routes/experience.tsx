import { createFileRoute } from "@tanstack/react-router";
import { Timeline } from "@/components/site/Timeline";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/experience")({
  component: ExperiencePage,
  head: () => ({
    meta: [
      { title: "Experience — Hamad Ali" },
      {
        name: "description",
        content:
          "Growth roadmap from freelance developer to SaaS, AI automation, and 3D web systems engineer.",
      },
      { property: "og:title", content: "Experience — Hamad Ali" },
      { property: "og:description", content: "From freelancer to systems engineer — a year-by-year journey." },
    ],
  }),
});

function ExperiencePage() {
  return (
    <PageShell>
      <Timeline />
    </PageShell>
  );
}
