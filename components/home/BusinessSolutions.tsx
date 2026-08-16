import * as Icons from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card3D } from "@/components/ui/Card3D";
import { cn } from "@/lib/utils";
import { businessSolutions } from "@/lib/content";

export function BusinessSolutions() {
  return (
    <section className="relative bg-section-tint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Business Solutions"
          title="Discover how WALOOP transforms business communication"
          description="From first message to final payment — every customer touchpoint, automated and unified."
        />

        <RevealGroup className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:[grid-auto-flow:dense]">
          {businessSolutions.map((item, i) => {
            const Icon = (Icons[item.icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;
            const featured = i === 0 || i === 5;
            return (
              <RevealItem
                key={item.title}
                direction={i % 2 === 0 ? "up" : "scale"}
                className={cn(featured && "sm:col-span-2 lg:col-span-2 lg:row-span-2")}
              >
                <Card3D className={cn("flex h-full flex-col justify-center p-6", featured && "p-8")}>
                  <span
                    className={cn(
                      "flex items-center justify-center rounded-[10px] bg-[image:var(--gradient-icon-lime)] text-[#1F1F25] shadow-brand-glow",
                      featured ? "h-14 w-14" : "h-11 w-11",
                    )}
                  >
                    <Icon className={featured ? "h-7 w-7" : "h-5 w-5"} />
                  </span>
                  <h3 className={cn("mt-5 font-sans font-semibold text-text", featured ? "text-2xl" : "text-lg")}>{item.title}</h3>
                  <p className={cn("mt-2 leading-relaxed text-text-muted", featured ? "max-w-sm text-base" : "text-sm")}>
                    {item.description}
                  </p>
                </Card3D>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
