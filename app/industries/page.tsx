import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { Section } from "@/components/sections/Section";
import { CTASection } from "@/components/sections/CTASection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { Ecosystem3D } from "@/components/three/Scenes";
import { industries } from "@/lib/industries";
import { ctaLibrary } from "@/lib/content";

export const metadata: Metadata = {
  title: "WALOOP Industries | Retail, Education, Healthcare, Real Estate, Finance, Travel & Automotive",
  description:
    "WALOOP is built for businesses that communicate with customers — retail & e-commerce, education, healthcare, real estate, financial services, travel & hospitality and automotive.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        icon="Building2"
        title="Built for Businesses That Communicate With Customers"
        description="WALOOP sits at the center of the industry wheel. Each industry connects to the platform capabilities it needs — channels, CRM, chatbots, automation, Mini-Apps and payments."
        visual={<Ecosystem3D nodes={industries.map((i) => i.name)} className="mx-auto max-w-[520px]" />}
      />

      <Section>
        <SectionHeading eyebrow="Seven industries" title="Find Your Industry" />
        <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind) => (
            <RevealItem key={ind.slug} className="h-full">
              <Link href={`/industries/${ind.slug}`} className="group soft-panel flex h-full flex-col p-6 transition-shadow hover:shadow-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white">
                  <DynamicIcon name={ind.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-5 font-heading text-lg font-bold text-text">{ind.name}</h2>
                <ul className="mt-3 flex-1 space-y-1.5">
                  {ind.useCases.map((u) => (
                    <li key={u} className="flex items-center gap-2 text-sm text-text-muted">
                      <Check className="h-3.5 w-3.5 text-brand-green" /> {u}
                    </li>
                  ))}
                </ul>
                {ind.note && <p className="mt-4 text-xs text-text-soft">{ind.note}</p>}
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-green-deep">
                  Explore {ind.name}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Section>

      <CTASection heading={ctaLibrary.messaging.heading} description={ctaLibrary.messaging.description} primary={ctaLibrary.messaging.cta} />
    </>
  );
}
