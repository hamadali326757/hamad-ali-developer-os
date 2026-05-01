import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Services } from "@/components/site/Services";
import { Timeline } from "@/components/site/Timeline";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hamad Ali — Full Stack Developer & AI Automation Engineer" },
      {
        name: "description",
        content:
          "Hamad Ali — Full Stack Developer, AI Automation Engineer, and SaaS Builder. I engineer SaaS systems, AI agents, and 3D web experiences for global teams.",
      },
      { property: "og:title", content: "Hamad Ali — Engineering the future of SaaS" },
      {
        property: "og:description",
        content: "SaaS systems, AI automation, and 3D web experiences engineered for ambitious teams.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="relative">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Timeline />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
