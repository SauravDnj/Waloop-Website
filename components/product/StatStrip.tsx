import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { cn } from "@/lib/utils";

export type StatItem = { label: string; value: string };

export function StatStrip({ stats, className }: { stats: StatItem[]; className?: string }) {
  return (
    <RevealGroup className={cn("grid grid-cols-2 divide-x divide-border sm:grid-cols-4", className)}>
      {stats.map((stat) => (
        <RevealItem key={stat.label} direction="scale" className="px-4 text-center first:pl-0 last:pr-0">
          <AnimatedCounter value={stat.value} className="font-heading text-xl font-semibold text-gradient-heading sm:text-2xl" />
          <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-text-soft">{stat.label}</p>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
