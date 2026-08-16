import * as Icons from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { StatItem } from "@/components/product/StatStrip";
import { StatStrip } from "@/components/product/StatStrip";

export type OverviewPoint = { icon: string; title: string; description: string };

type OverviewSectionProps = {
  eyebrow: string;
  heading: string;
  description: string;
  points: OverviewPoint[];
  stats?: StatItem[];
};

export function OverviewSection({ eyebrow, heading, description, points, stats }: OverviewSectionProps) {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={heading} description={description} align="left" />

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
          {points.map((point, i) => {
            const Icon = (Icons[point.icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;
            return (
              <Reveal key={point.title} direction="left" y={16} delay={i * 0.05}>
                <div className="flex gap-4 border-l-2 border-brand-green/30 pl-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green/10">
                    <Icon className="h-5 w-5 text-brand-green-deep dark:text-brand-green" />
                  </span>
                  <div>
                    <h3 className="font-sans text-base font-semibold text-text">{point.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{point.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {stats && stats.length > 0 && <StatStrip stats={stats} className="mt-14" />}
      </div>
    </section>
  );
}
