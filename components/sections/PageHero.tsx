import Link from "next/link";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { DynamicIcon } from "@/components/ui/DynamicIcon";
import { ctas } from "@/lib/content";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  icon?: string;
  title: React.ReactNode;
  description: string;
  breadcrumb?: { label: string; href: string };
  visual?: React.ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
  children?: React.ReactNode;
};

/** Shared hero for hub and detail pages — text left, explanatory visual right. */
export function PageHero({
  eyebrow,
  icon,
  title,
  description,
  breadcrumb,
  visual,
  primary = ctas.getStarted,
  secondary = ctas.bookDemo,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-50 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-hero-glow" />
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:px-8",
          visual ? "lg:grid-cols-2" : "max-w-4xl text-center",
        )}
      >
        <Reveal>
          {breadcrumb && (
            <nav aria-label="Breadcrumb" className={cn("mb-5 flex items-center gap-1.5 text-xs font-semibold text-text-soft", !visual && "justify-center")}>
              <Link href={breadcrumb.href} className="hover:text-text">
                {breadcrumb.label}
              </Link>
              <span>/</span>
              <span className="text-text">{eyebrow}</span>
            </nav>
          )}
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 font-heading text-[11px] font-bold uppercase tracking-widest text-brand-green-deep shadow-card">
            {icon && <DynamicIcon name={icon} className="h-3.5 w-3.5" />} {eyebrow}
          </span>
          <h1 className="text-balance font-heading text-4xl font-bold leading-[1.08] tracking-tight text-text sm:text-5xl">{title}</h1>
          <p className={cn("mt-5 text-pretty text-base leading-relaxed text-text-muted sm:text-lg", visual ? "max-w-xl" : "mx-auto max-w-2xl")}>
            {description}
          </p>
          {children}
          <div className={cn("mt-8 flex flex-wrap gap-3", !visual && "justify-center")}>
            <Button as="a" href={primary.href} variant="brand" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
              {primary.label}
            </Button>
            {secondary && (
              <Button as="a" href={secondary.href} variant="secondary" size="lg">
                <CalendarCheck className="h-4 w-4" /> {secondary.label}
              </Button>
            )}
          </div>
        </Reveal>
        {visual && (
          <Reveal delay={0.1} className="mx-auto w-full max-w-xl">
            {visual}
          </Reveal>
        )}
      </div>
    </section>
  );
}
