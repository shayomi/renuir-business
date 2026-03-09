// components/contact/ContactSection.tsx
import { ContactForm } from "./ContactForm";
import { ContactSidebar } from "./ContactSidebar";
import { Typography } from "@/components/ui/typography";
import { Badge } from "@/components/ui/badge";
import AnimateIn from "@/components/ui/AnimateIn";

export function ContactSection() {
  return (
    <section className="py-8 md:py-28">
      <div className="app-container text-center">
        <AnimateIn>
          <Badge
            variant="default"
            className="mx-auto bg-primary/20 text-primary mb-6 rounded-full px-4 py-1"
          >
            Contact Us
          </Badge>

          <Typography
            variant="h1"
            className="mx-auto max-w-3xl text-black tracking-tightest"
          >
            Let’s start a conversation.
          </Typography>

          <Typography
            variant="mutedText"
            className="mx-auto mt-4 max-w-lg md:max-w-2xl text-black"
          >
            Whether you&apos;re an enterprise looking for a demo or a user
            needing support, we&apos;re ready to answer your questions.
          </Typography>
        </AnimateIn>
      </div>

      {/* Card */}
      <div className="app-container mt-20">
        <AnimateIn>
          <div className="grid overflow-hidden border border-gray-200 rounded-3xl bg-card shadow-lg lg:grid-cols-[380px_1fr]">
            <ContactSidebar />
            <ContactForm />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
