import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ctas } from "@/lib/content";

type CtaLink = { label: string; href: string };

type CTASectionProps = {
  heading: string;
  description: string;
  primary?: CtaLink;
  secondary?: CtaLink;
};

/** Final call-to-action band (§58 CTA library). */
export function CTASection({ heading, description, primary = ctas.getStarted, secondary = ctas.bookDemo }: CTASectionProps) {
  return (
    <section id="cta" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="section-dark relative overflow-hidden rounded-[2rem] px-6 py-14 text-center sm:px-16 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-hero-glow opacity-90" />
            <Image
              src="/brand/waloop-icon.png"
              alt=""
              width={512}
              height={228}
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-10 w-72 opacity-15 sm:w-96"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-3xl text-balance font-heading text-3xl font-bold text-text sm:text-5xl">{heading}</h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-text-muted sm:text-lg">{description}</p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button as="a" href={primary.href} variant="brand" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  {primary.label}
                </Button>
                {secondary && (
                  <Button as="a" href={secondary.href} variant="ghost-dark" size="lg">
                    {secondary.label}
                  </Button>
                )}
              </div>
              <p className="mt-8 text-sm font-semibold">
                <span className="text-brand-cyan">Built on Trust.</span> <span className="text-brand-green">Driven by AI.</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
