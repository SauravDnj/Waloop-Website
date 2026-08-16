import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export type ProductLinkItem = {
  icon: string;
  eyebrow?: string;
  title: string;
  description: string;
  tags?: string[];
  href: string;
  ctaLabel?: string;
};

type ProductLinkGridProps = {
  eyebrow: string;
  heading: string;
  description?: string;
  items: ProductLinkItem[];
  columns?: 2 | 3;
  tinted?: boolean;
};

export function ProductLinkGrid({ eyebrow, heading, description, items, columns = 3, tinted }: ProductLinkGridProps) {
  return (
    <section className={tinted ? "relative bg-section-tint py-20 sm:py-28" : "relative py-20 sm:py-28"}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={eyebrow} title={heading} description={description} align="left" />

        <RevealGroup className={cn("mt-14 grid grid-cols-1 gap-4", columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3")}>
          {items.map((item, i) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;
            return (
              <RevealItem key={item.title} direction={i % 2 === 0 ? "left" : "right"} y={20} className="h-full">
                <Link
                  href={item.href}
                  className="group flex h-full items-start gap-4 rounded-xl border border-border bg-surface p-5 transition-colors duration-200 hover:border-brand-green/40"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-brand-green/10">
                    <Icon className="h-5 w-5 text-brand-green-deep dark:text-brand-green" />
                  </span>
                  <div className="min-w-0 flex-1">
                    {item.eyebrow && (
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-text-soft">{item.eyebrow}</p>
                    )}
                    <h3 className={cn("font-sans text-base font-semibold text-text", item.eyebrow ? "mt-1" : "")}>{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{item.description}</p>
                    {item.tags && item.tags.length > 0 && (
                      <p className="mt-3 text-xs text-text-soft">{item.tags.join(" · ")}</p>
                    )}
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-green-deep dark:text-brand-green">
                      {item.ctaLabel ?? "Explore Details"}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
