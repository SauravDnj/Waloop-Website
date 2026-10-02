import { Section } from "@/components/sections/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlatformCards } from "@/components/sections/PlatformCards";
import { Ecosystem3D } from "@/components/three/Scenes";
import { Reveal } from "@/components/ui/Reveal";
import { corePillars } from "@/lib/platform";
import { platformOverview } from "@/lib/content";

const ecosystemNodes = ["Channels", "CRM", "Chatbots", "Automations", "Mini-Apps", "Payments", "Dynamic Experiences", "AI", "Analytics"];

/** §7 Platform overview (8 pillars) + §8 platform ecosystem graphic. */
export function EcosystemSection() {
  return (
    <Section id="platform">
      <SectionHeading eyebrow="The WALOOP solution" title={platformOverview.heading} description={platformOverview.intro} />

      <div className="mt-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="order-2 lg:order-1">
          <Ecosystem3D nodes={ecosystemNodes} className="mx-auto max-w-[560px]" />
        </Reveal>
        <Reveal className="order-1 lg:order-2" delay={0.1}>
          <h3 className="font-heading text-2xl font-bold text-text">An ecosystem — not a collection of disconnected products</h3>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Channels bring conversations in. Chatbots and the CRM work around WALOOP at the center. Automations connect
            everything to Mini-Apps, payments and dynamic experiences — with AI and analytics across the whole journey.
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
            {[
              "Channels → conversations in one place",
              "CRM ↔ Chatbots share customer data",
              "Automations run the next step",
              "Mini-Apps, Payments, Dynamic Experiences",
              "AI answers from your content",
              "Analytics across every stage",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2 text-text-muted">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-brand-gradient" /> {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <PlatformCards slugs={corePillars} className="mt-16" />
    </Section>
  );
}
