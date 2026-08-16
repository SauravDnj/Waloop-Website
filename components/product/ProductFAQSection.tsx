import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProductFAQSectionProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  items: { question: string; answer: string }[];
};

export function ProductFAQSection({ eyebrow = "FAQ", heading, description, items }: ProductFAQSectionProps) {
  return (
    <section id="faq" className="relative bg-surface-alt/50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={heading} description={description} />
        <div className="mt-12">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}
