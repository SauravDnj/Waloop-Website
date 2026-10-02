"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onTransitionEnd"
> & {
  variant?: "primary" | "brand" | "secondary" | "ghost" | "ghost-dark";
  size?: "sm" | "md" | "lg";
  as?: "button" | "a";
  href?: string;
  /** Leading icon rendered in a brand-gradient rounded chip. */
  icon?: React.ReactNode;
};

const base =
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-btn font-heading font-semibold tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/60 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "btn-soft-dark hover:brightness-110",
  brand: "bg-brand-gradient text-white shadow-brand-glow hover:brightness-110",
  secondary: "soft-panel text-text hover:brightness-95",
  ghost: "text-text hover:bg-surface-alt",
  "ghost-dark": "text-white border border-white/25 hover:bg-white/10",
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

const iconPadding: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "pl-11",
  md: "pl-14",
  lg: "pl-16",
};

const iconChipSize: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "left-1 h-8 w-8",
  md: "left-1.5 h-9 w-9",
  lg: "left-2 h-11 w-11",
};

function IconChip({ size, children }: { size: NonNullable<ButtonProps["size"]>; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "absolute top-1/2 -translate-y-1/2 flex items-center justify-center rounded-[8px] bg-[image:var(--gradient-icon-lime)] text-white shadow-[0_4px_10px_rgba(11,92,255,0.35)]",
        iconChipSize[size],
      )}
    >
      {children}
    </span>
  );
}

function useMagnetic(strength = 0.35) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 300, damping: 20, mass: 0.4 });

  function onPointerMove(e: React.PointerEvent<HTMLElement>) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  }

  function onPointerLeave() {
    x.set(0);
    y.set(0);
  }

  return { style: { x: springX, y: springY }, onPointerMove, onPointerLeave };
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  as = "button",
  href,
  icon,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], icon && iconPadding[size], className);
  const magnetic = useMagnetic();
  const content = (
    <>
      {icon && <IconChip size={size}>{icon}</IconChip>}
      {children}
    </>
  );

  if (as === "a" && href) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);

    if (isExternal) {
      return (
        <motion.a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={classes}
          style={magnetic.style}
          onPointerMove={magnetic.onPointerMove}
          onPointerLeave={magnetic.onPointerLeave}
          whileTap={{ scale: 0.97 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.div
        style={magnetic.style}
        onPointerMove={magnetic.onPointerMove}
        onPointerLeave={magnetic.onPointerLeave}
        whileTap={{ scale: 0.97 }}
        className="inline-block"
      >
        <Link href={href} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classes}
      style={magnetic.style}
      onPointerMove={magnetic.onPointerMove}
      onPointerLeave={magnetic.onPointerLeave}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {content}
    </motion.button>
  );
}
