import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export type Step = { step: string; title: string; description: string };

type HowItWorksProps = {
  eyebrow: string;
  heading: string;
  description: string;
  steps: Step[];
  tinted?: boolean;
};

export function HowItWorks({ eyebrow, heading, description, steps, tinted }: HowItWorksProps) {
  const cols =
    steps.length >= 5
      ? "sm:grid-cols-2 lg:grid-cols-5"
      : steps.length === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-3";

  return (
    <section className={tinted ? "relative bg-section-tint py-20 sm:py-28" : "relative py-20 sm:py-28"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={heading} description={description} />

        <RevealGroup className={cn("mt-16 grid grid-cols-1 gap-6", cols)}>
          {steps.map((step) => (
            <RevealItem
              key={step.step}
              direction="up"
              className="soft-panel p-6 transition-shadow duration-300 hover:shadow-soft"
            >
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-green-deep dark:text-brand-green">
                {"//"}
                {step.step}
              </span>
              <h3 className="mt-3 font-sans text-base font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
