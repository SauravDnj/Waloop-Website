import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export type SectionTagline = { lead: string; emphasis: string };

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  tagline?: SectionTagline;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ eyebrow, title, description, tagline, align = "center", className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "mr-auto", className)}>
      {eyebrow && <Badge className="mb-4">{eyebrow}</Badge>}
      <h2 className="text-balance font-heading text-3xl font-bold tracking-tight text-text sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-pretty text-base text-text-muted sm:text-lg">{description}</p>}
      {tagline && (
        <p className="mt-3 text-sm font-semibold">
          <span className="text-text">{tagline.lead}</span> <span className="text-brand-green">{tagline.emphasis}</span>
        </p>
      )}
    </Reveal>
  );
}
