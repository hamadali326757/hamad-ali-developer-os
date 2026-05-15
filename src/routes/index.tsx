import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { MetricsRow } from "@/components/sections/MetricsRow";
import { WorkflowDiagram } from "@/components/sections/WorkflowDiagram";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "GymOS — We build systems that grow gyms." },
      {
        name: "description",
        content:
          "AI-powered growth infrastructure for independent US gym owners. More memberships, automated lead conversion, retention loops — without adding staff.",
      },
      { property: "og:title", content: "GymOS — We build systems that grow gyms." },
      { property: "og:description", content: "AI growth infrastructure for independent US gyms." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main>
      <Hero />
      <ProcessSteps />
      <MetricsRow />
      <WorkflowDiagram />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
