import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/content";

export function FAQ() {
  return (
    <section id="faq" className="relative bg-surface-alt/50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently asked queries"
          description="Find answers to standard compliance, integration, and service questions about the WALOOP platform."
        />

        <div className="mt-12">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
