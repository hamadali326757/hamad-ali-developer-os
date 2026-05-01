import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Hero } from "@/components/site/Hero";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Hamad Ali — Full Stack Developer & AI Automation Engineer" },
      {
        name: "description",
        content:
          "Full-stack developer & AI automation engineer building SaaS systems, intelligent agents, and 3D web experiences for global teams.",
      },
      { property: "og:title", content: "Hamad Ali — Engineering the future of SaaS" },
      {
        property: "og:description",
        content: "SaaS systems, AI automation, and 3D web experiences engineered for ambitious teams.",
      },
    ],
  }),
});

function Index() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
    </motion.div>
  );
}
