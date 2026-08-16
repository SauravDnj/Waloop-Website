import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconGrid } from "@/components/product/IconGrid";
import { ContactPageForm } from "@/components/contact/ContactPageForm";
import { hero, contactDetails } from "@/lib/products/contact";

export const metadata: Metadata = {
  title: "Contact Us — WALOOP",
  description:
    "Reach the WALOOP team for product demos, enterprise pricing, or technical support. We typically respond within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow"
        />
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={hero.badge} title={hero.title} description={hero.description} />
        </div>
      </section>

      <IconGrid
        eyebrow={contactDetails.eyebrow}
        heading={contactDetails.heading}
        items={contactDetails.items}
        columns={4}
      />

      <ContactPageForm />
    </>
  );
}
