import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { JourneyRail } from "@/components/diagrams/JourneyRail";
import { howItWorks, whyWaloop } from "@/lib/content";

/** §39–40 How WALOOP works — horizontal timeline on desktop, vertical on mobile. */
export function HowItWorksSection() {
  return (
    <Section tone="tint" id="how-it-works">
      <SectionHeading
        eyebrow="How WALOOP works"
        title="Eight Steps From Connection to Measurement"
        description="Connect, organize, build, engage, automate, convert, support and measure — all in one platform."
      />
      <JourneyRail steps={howItWorks} className="mt-14" />
    </Section>
  );
}

/** §38 Why WALOOP. */
export function WhyWaloopSection() {
  return (
    <Section id="why-waloop">
      <SectionHeading eyebrow="Why WALOOP" title={whyWaloop.heading} />
      <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyWaloop.items.map((item) => (
          <RevealItem key={item.title} className="soft-panel flex gap-4 p-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <DynamicIcon name={item.icon} className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-heading text-base font-bold text-text">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.description}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
