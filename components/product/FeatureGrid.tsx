import * as Icons from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card3D } from "@/components/ui/Card3D";

export type FeatureCard = { icon: string; title: string; description: string; tags: string[] };

type FeatureGridProps = {
  eyebrow: string;
  heading: string;
  description: string;
  items: FeatureCard[];
  tinted?: boolean;
};

export function FeatureGrid({ eyebrow, heading, description, items, tinted }: FeatureGridProps) {
  return (
    <section className={tinted ? "relative bg-section-tint py-20 sm:py-28" : "relative py-20 sm:py-28"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={heading} description={description} align="left" />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;
            return (
              <RevealItem key={item.title} direction="scale" className="h-full">
                <Card3D className="flex h-full flex-col p-6">
                  <Icon className="h-6 w-6 text-brand-green-deep dark:text-brand-green" />
                  <h3 className="mt-4 font-sans text-lg font-semibold text-text">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{item.description}</p>
                  <p className="mt-4 text-xs text-text-soft">{item.tags.join(" · ")}</p>
                </Card3D>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
