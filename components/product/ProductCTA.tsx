import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

type CtaLink = { label: string; href: string };

type ProductCTAProps = {
  heading: string;
  highlight?: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta?: CtaLink;
};

export function ProductCTA({ heading, highlight, description, primaryCta, secondaryCta }: ProductCTAProps) {
  return (
    <section id="demo" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="section-dark relative overflow-hidden rounded-card p-10 text-center sm:p-16">
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow opacity-60" />
            <h2 className="text-display text-gradient-heading mx-auto max-w-2xl text-balance text-3xl sm:text-5xl">
              {heading} {highlight && <span className="text-gradient-brand">{highlight}</span>}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-base text-text-muted">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button as="a" href={primaryCta.href} size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                {primaryCta.label}
              </Button>
              {secondaryCta && (
                <Button as="a" href={secondaryCta.href} variant="ghost-dark" size="lg">
                  {secondaryCta.label} <ArrowRight className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
