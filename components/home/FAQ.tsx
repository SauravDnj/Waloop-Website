import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs as allFaqs, homeFaqs, type Faq } from "@/lib/content";

type FAQProps = {
  items?: Faq[];
  heading?: string;
  description?: string;
  /** Show a link to the full FAQ page. */
  showMore?: boolean;
};

/** §57 FAQ. */
export function FAQ({
  items = homeFaqs,
  heading = "Frequently Asked Questions",
  description = "Answers about WALOOP, its capabilities, plans and charges.",
  showMore = true,
}: FAQProps) {
  return (
    <section id="faq" className="relative scroll-mt-20 bg-surface-alt/50 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="FAQ" title={heading} description={description} />
        <div className="mt-12">
          <Accordion items={items} />
        </div>
        {showMore && items.length < allFaqs.length && (
          <p className="mt-8 text-center text-sm">
            <Link href="/faq" className="font-semibold text-brand-green-deep hover:underline">
              View all {allFaqs.length} questions →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
