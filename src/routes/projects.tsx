import { createFileRoute } from "@tanstack/react-router";
import { Projects } from "@/components/site/Projects";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Projects — Hamad Ali" },
      {
        name: "description",
        content:
          "Selected SaaS, AI, and automation case studies — problem, solution, stack, and live results.",
      },
      { property: "og:title", content: "Projects — Hamad Ali" },
      { property: "og:description", content: "SaaS, AI, and automation case studies that ship and scale." },
    ],
  }),
});

function ProjectsPage() {
  return (
    <PageShell>
      <Projects />
    </PageShell>
  );
}
