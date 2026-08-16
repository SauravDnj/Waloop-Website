import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { deploySteps } from "@/lib/content";

export function DeploySteps() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get Started"
          title="Deploy your communication API in 30 minutes"
          description="Three steps to connect WALOOP and start handling smarter conversations at enterprise scale."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {deploySteps.map((step, i) => (
            <RevealItem
              key={step.step}
              direction={i % 2 === 0 ? "up" : "scale"}
              className="soft-panel group flex flex-col p-8 transition-shadow duration-300 hover:shadow-soft"
            >
              <span className="font-heading text-xs font-bold uppercase tracking-widest text-brand-green-deep dark:text-brand-green">
                {"//"}
                {step.step}
              </span>
              <h3 className="mt-4 font-sans text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{step.description}</p>
              <p className="mt-4 text-xs text-text-soft">{step.tags.join(" · ")}</p>
              <Link
                href="#contact"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-green-deep dark:text-brand-green"
              >
                Learn More
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
