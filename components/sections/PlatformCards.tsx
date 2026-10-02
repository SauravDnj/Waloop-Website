import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { platformAreas, platformHref, type PlatformSlug } from "@/lib/platform";
import { cn } from "@/lib/utils";

/** Grid of platform area cards, each linking to its page. */
export function PlatformCards({ slugs, className, numbered = true }: { slugs: PlatformSlug[]; className?: string; numbered?: boolean }) {
  const areas = slugs.map((s) => platformAreas.find((a) => a.slug === s)!);
  return (
    <RevealGroup className={cn("grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {areas.map((area, i) => (
        <RevealItem key={area.slug} className="h-full">
          <Link
            href={platformHref(area.slug)}
            className="group soft-panel flex h-full flex-col p-6 transition-shadow duration-300 hover:shadow-soft"
          >
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-brand-glow">
                <DynamicIcon name={area.icon} className="h-5 w-5" />
              </span>
              {numbered && <span className="font-heading text-xs font-bold text-text-soft">{String(i + 1).padStart(2, "0")}</span>}
            </div>
            <h3 className="mt-5 font-heading text-lg font-bold text-text">{area.name}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{area.short}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-green-deep">
              Explore {area.name}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
