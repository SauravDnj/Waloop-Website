import * as Icons from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export type IconGridItem = { icon?: string; title: string; description: string };

type IconGridProps = {
  eyebrow: string;
  heading: string;
  description?: string;
  items: IconGridItem[];
  columns?: 2 | 3 | 4;
  tinted?: boolean;
};

const GRID_BY_COLUMNS: Record<2 | 3 | 4, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
};

export function IconGrid({ eyebrow, heading, description, items, columns = 3, tinted }: IconGridProps) {
  return (
    <section className={tinted ? "relative bg-section-tint py-20 sm:py-28" : "relative py-20 sm:py-28"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={heading} description={description} align="left" />

        <div className={cn("mt-14 grid grid-cols-1 gap-4", GRID_BY_COLUMNS[columns])}>
          {items.map((item, i) => {
            const Icon = item.icon ? ((Icons[item.icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon) : null;
            return (
              <Reveal key={item.title} direction="up" y={12} delay={i * 0.04}>
                <div className="h-full rounded-xl border border-border bg-surface p-5 transition-colors duration-200 hover:border-brand-green/40">
                  {Icon && (
                    <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-[8px] bg-brand-green/10">
                      <Icon className="h-[18px] w-[18px] text-brand-green-deep dark:text-brand-green" />
                    </span>
                  )}
                  <h3 className="font-sans text-sm font-semibold text-text">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
