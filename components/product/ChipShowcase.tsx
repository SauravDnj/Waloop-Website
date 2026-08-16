import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ChipShowcaseProps = {
  eyebrow: string;
  heading: string;
  description?: string;
  chips: string[];
};

export function ChipShowcase({ eyebrow, heading, description, chips }: ChipShowcaseProps) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={heading} description={description} />

        <Reveal delay={0.15} className="mt-10 flex flex-wrap justify-center gap-3">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text shadow-card transition-colors hover:border-brand-green/50 hover:text-brand-green-deep dark:hover:text-brand-green"
            >
              {chip}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
