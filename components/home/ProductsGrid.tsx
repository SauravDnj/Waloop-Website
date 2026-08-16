"use client";

import * as React from "react";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card3D } from "@/components/ui/Card3D";
import { cn } from "@/lib/utils";
import { products } from "@/lib/content";

const REAL_PAGE_HREF: Record<string, string> = {
  "AI Voice Bot": "/products/ai-voice-agent",
  "WhatsApp Business API": "/products/whatsapp-business-api",
  "RCS Business Messaging": "/products/rcs-messaging",
  "Bulk SMS Gateway": "/products/bulk-sms-gateway",
  "Cloud IVR System": "/products/smart-voice-ivr",
  "Missed Call Service": "/products/missed-call-service",
  "Webhook Engine": "/products/webhook-engine",
};

type Product = (typeof products)[number];

const panelVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
  exit: {},
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
};

const iconVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 18 } },
  exit: { opacity: 0, scale: 0.6, transition: { duration: 0.15 } },
};

function ProductPreview({ product }: { product: Product }) {
  const Icon = (Icons[product.icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;
  const href = REAL_PAGE_HREF[product.title] ?? "#contact";

  return (
    <Card3D className="h-full" intensity={5}>
      <motion.div
        key={product.title}
        variants={panelVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex h-full flex-col justify-center p-8 sm:p-10"
      >
        <motion.div
          variants={iconVariants}
          className="flex h-14 w-14 items-center justify-center rounded-[12px] bg-[image:var(--gradient-icon-lime)] text-[#1F1F25] shadow-brand-glow"
        >
          <Icon className="h-7 w-7" />
        </motion.div>
        <motion.p variants={childVariants} className="mt-6 text-[10px] font-semibold uppercase tracking-widest text-text-soft">
          {product.eyebrow}
        </motion.p>
        <motion.h3 variants={childVariants} className="mt-2 font-sans text-2xl font-semibold text-text sm:text-3xl">
          {product.title}
        </motion.h3>
        <motion.p variants={childVariants} className="mt-4 max-w-xl text-base leading-relaxed text-text-muted">
          {product.description}
        </motion.p>
        <motion.p variants={childVariants} className="mt-5 text-sm text-text-soft">
          {product.tags.join(" · ")}
        </motion.p>
        <motion.div variants={childVariants}>
          <a href={href} className="mt-8 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-green">
            {REAL_PAGE_HREF[product.title] ? "Explore Details" : "Talk to Sales"}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>
      </motion.div>
    </Card3D>
  );
}

export function ProductsGrid() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const active = products[activeIndex];

  return (
    <section id="products" className="relative bg-section-tint py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="All Products"
          title="One unified platform for every channel"
          description="From messaging to voice, bots to analytics — every tool your enterprise needs, all connected and intelligent."
        />

        {/* Desktop: interactive spotlight list + 3D preview panel */}
        <div className="mt-16 hidden items-start gap-4 lg:grid lg:grid-cols-[320px_1fr] lg:gap-8">
          <div className="flex flex-col gap-1">
            {products.map((product, i) => {
              const Icon = (Icons[product.icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;
              const isActive = i === activeIndex;
              return (
                <button
                  key={product.title}
                  type="button"
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  className={cn(
                    "relative flex items-center gap-3 overflow-hidden rounded-card py-3 pl-5 pr-4 text-left transition-colors duration-300",
                    isActive ? "soft-panel" : "hover:bg-surface-alt",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="products-active-bar"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-brand-green"
                    />
                  )}
                  <span
                    className={cn(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-[8px] transition-colors duration-300",
                      isActive ? "bg-[image:var(--gradient-icon-lime)] text-[#1F1F25]" : "bg-surface-alt text-text-soft",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className={cn("text-sm font-semibold transition-colors", isActive ? "text-text" : "text-text-muted")}>
                    {product.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative min-h-[380px]">
            <AnimatePresence mode="wait">
              <ProductPreview key={active.title} product={active} />
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile / tablet: simple stacked list, no hover-driven panel */}
        <RevealGroup className="mt-14 flex flex-col divide-y divide-border lg:hidden">
          {products.map((product) => {
            const Icon = (Icons[product.icon as keyof typeof Icons] ?? Icons.Sparkles) as Icons.LucideIcon;
            const href = REAL_PAGE_HREF[product.title] ?? "#contact";
            return (
              <RevealItem key={product.title} className="flex items-start gap-4 py-6 first:pt-0">
                <Icon className="mt-0.5 h-6 w-6 shrink-0 text-brand-green" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-widest text-text-soft">{product.eyebrow}</p>
                  <h3 className="mt-1 font-sans text-lg font-semibold text-text">{product.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{product.description}</p>
                  <a href={href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-green">
                    {REAL_PAGE_HREF[product.title] ? "Explore Details" : "Talk to Sales"} <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
