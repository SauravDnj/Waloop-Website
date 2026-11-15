import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { platformAreas, platformHref, type PlatformSlug } from "@/lib/platform";
import { cn } from "@/lib/utils";

/** Grid of platform area cards, each linking to its page. Compact rows on phones, cards from `sm` up. */
export function PlatformCards({ slugs, className, numbered = true }: { slugs: PlatformSlug[]; className?: string; numbered?: boolean }) {
  const areas = slugs.map((s) => platformAreas.find((a) => a.slug === s)!);
  return (
    <RevealGroup className={cn("grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4", className)}>
      {areas.map((area, i) => (
        <RevealItem key={area.slug} className="h-full">
          <Link
            href={platformHref(area.slug)}
            className="group soft-panel flex h-full items-center gap-4 p-4 transition-shadow duration-300 hover:shadow-soft sm:flex-col sm:items-stretch sm:gap-0 sm:p-6"
          >
            <div className="flex shrink-0 items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-brand-glow">
                <DynamicIcon name={area.icon} className="h-5 w-5" />
              </span>
              {numbered && (
                <span className="hidden font-heading text-xs font-bold text-text-soft sm:inline">{String(i + 1).padStart(2, "0")}</span>
              )}
            </div>
            <div className="min-w-0 flex-1 sm:flex sm:flex-col">
              <h3 className="font-heading text-base font-bold text-text sm:mt-5 sm:text-lg">{area.name}</h3>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-text-muted sm:mt-2 sm:line-clamp-none sm:flex-1">{area.short}</p>
              <span className="mt-5 hidden items-center gap-1 text-sm font-semibold text-brand-green-deep sm:inline-flex">
                Explore {area.name}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </span>
            </div>
            <ArrowUpRight aria-hidden className="h-4 w-4 shrink-0 text-text-soft sm:hidden" />
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
