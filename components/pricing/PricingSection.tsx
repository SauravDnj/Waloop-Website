import Link from "next/link";
import { ArrowRight, Info } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { plans } from "@/lib/pricing";

type PricingSectionProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  /** Compact homepage preview links to the full pricing page. */
  preview?: boolean;
  tinted?: boolean;
};

/** §36–37 Three pricing cards. */
export function PricingSection({ eyebrow = "Pricing", heading, description, preview, tinted }: PricingSectionProps) {
  return (
    <section id="pricing" className={cn("relative scroll-mt-20 py-20 sm:py-28", tinted && "bg-section-tint")}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={heading} description={description} />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <RevealItem key={plan.name} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-[var(--radius-panel)] p-8",
                  plan.highlighted ? "section-dark shadow-glow md:-translate-y-2" : "soft-panel",
                )}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-8 rounded-full bg-brand-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    Most connected
                  </span>
                )}
                <p className="font-heading text-sm font-bold uppercase tracking-widest text-text-soft">{plan.name}</p>
                <p className="mt-4 font-heading text-4xl font-bold text-text">
                  {plan.price}
                  {plan.priceSuffix && <span className="ml-1 text-base font-semibold text-text-soft">{plan.priceSuffix}</span>}
                </p>
                <p className="mt-5 font-heading text-lg font-bold leading-snug text-text">{plan.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{plan.positioning}</p>
                {!preview && <p className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">{plan.description}</p>}
                {preview && <span className="flex-1" />}
                <Button
                  as="a"
                  href={plan.cta.href}
                  variant={plan.highlighted ? "brand" : "primary"}
                  className="mt-8 w-full"
                >
                  {plan.cta.label}
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-8 flex items-start justify-center gap-2 text-center text-sm text-text-muted">
          <Info className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            Prices are for the WALOOP platform subscription. Usage, provider, WhatsApp/Meta and payment gateway charges are billed
            separately where applicable.
            {preview && (
              <>
                {" "}
                <Link href="/pricing" className="inline-flex items-center gap-0.5 font-semibold text-brand-green-deep hover:underline">
                  See full pricing details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </>
            )}
          </span>
        </p>
      </div>
    </section>
  );
}
