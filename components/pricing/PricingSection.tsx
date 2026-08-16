"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SegmentedToggle } from "@/components/ui/SegmentedToggle";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Card3D } from "@/components/ui/Card3D";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { PricingPlan } from "@/lib/pricing";

type PricingSectionProps = {
  eyebrow?: string;
  heading: string;
  description?: string;
  plans: PricingPlan[];
};

export function PricingSection({ eyebrow = "Plans", heading, description, plans }: PricingSectionProps) {
  const [cycle, setCycle] = React.useState<"monthly" | "yearly">("yearly");

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={heading} description={description} />

        <div className="mt-8 flex justify-center">
          <SegmentedToggle
            value={cycle}
            onChange={(v) => setCycle(v as "monthly" | "yearly")}
            options={[
              { label: "Monthly", value: "monthly" },
              { label: "Yearly", value: "yearly", badge: "Save 20%" },
            ]}
          />
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, i) => {
            const price = cycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
            return (
              <RevealItem key={plan.name} direction={i % 2 === 0 ? "up" : "scale"} className="h-full">
                <Card3D dark={plan.highlighted} className={cn("flex h-full flex-col p-8", plan.highlighted && "md:scale-[1.03]")}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-sans text-lg font-semibold text-text">{plan.name}</h3>
                    {plan.badge && (
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide",
                          plan.highlighted ? "bg-white/15 text-brand-green" : "bg-brand-green/15 text-brand-green-deep dark:text-brand-green",
                        )}
                      >
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm text-text-muted">{plan.description}</p>

                  <div className="mt-6 flex items-baseline gap-1">
                    {price === null ? (
                      <span className="font-heading text-3xl font-semibold text-text">Custom</span>
                    ) : (
                      <>
                        <span className="font-heading text-3xl font-semibold text-text">${price}</span>
                        <span className="text-sm text-text-soft">{plan.priceSuffix}</span>
                      </>
                    )}
                  </div>

                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    as="a"
                    href={plan.cta.href}
                    variant={plan.highlighted ? "secondary" : "primary"}
                    className="mt-8 w-full"
                  >
                    {plan.cta.label}
                  </Button>
                </Card3D>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
