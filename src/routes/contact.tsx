import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Hamad Ali" },
      {
        name: "description",
        content: "Have an idea? Let's ship it. Get in touch via WhatsApp, email, or the contact form.",
      },
      { property: "og:title", content: "Contact — Hamad Ali" },
      { property: "og:description", content: "Have an idea? Let's ship it." },
    ],
  }),
});

function ContactPage() {
  return (
    <PageShell>
      <Contact />
    </PageShell>
  );
}
