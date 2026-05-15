import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/layout/PageShell";
import { WorkflowDiagram } from "@/components/sections/WorkflowDiagram";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FadeInUp } from "@/components/motion/FadeInUp";
import { SectionHeader } from "@/components/ui/SectionHeader";

export const Route = createFileRoute("/ai-systems")({
  component: Page,
  head: () => ({
    meta: [
      { title: "AI systems — GymOS" },
      { name: "description", content: "How our AI infrastructure handles lead response, qualification, follow-up, and retention — 24/7, on autopilot." },
      { property: "og:title", content: "AI systems — GymOS" },
      { property: "og:description", content: "AI infrastructure for gym lead response, qualification, follow-up, and retention." },
      { property: "og:url", content: "/ai-systems" },
    ],
    links: [{ rel: "canonical", href: "/ai-systems" }],
  }),
});

function Page() {
  return (
    <PageShell>
      <section className="section-pad pb-12">
        <div className="container-wide">
          <FadeInUp>
            <span className="label-eyebrow">AI systems</span>
            <h1 className="text-h1 mt-3 max-w-[760px] text-balance">
              Calm AI infrastructure that runs your gym's growth in the background.
            </h1>
            <p className="text-body-lg mt-5 max-w-[600px]">
              Trained on how gym members actually behave. Not a chatbot. Not a SaaS dashboard.
              A system your front desk forgets is even there — until they see the results.
            </p>
          </FadeInUp>
        </div>
      </section>
      <WorkflowDiagram />
      <ProcessSteps />
      <section className="section-pad">
        <div className="container-wide">
          <SectionHeader
            eyebrow="Before vs After"
            title="What changes the day the system goes live."
          />
          <div className="mt-12 max-w-[960px] mx-auto">
            <BeforeAfterSlider />
          </div>
        </div>
      </section>
      <FinalCTA />
    </PageShell>
  );
}
