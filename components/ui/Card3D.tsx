"use client";

import * as React from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Card3DProps = Omit<React.ComponentPropsWithoutRef<typeof motion.div>, "children"> & {
  children?: React.ReactNode;
  glare?: boolean;
  intensity?: number;
  /** Renders the dark charcoal soft-UI panel skin instead of the light soft-panel. */
  dark?: boolean;
};

export function Card3D({ children, className, glare = true, intensity = 10, dark = false, ...props }: Card3DProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 300, damping: 25 });
  const springY = useSpring(rotateY, { stiffness: 300, damping: 25 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareBg = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.18), transparent 60%)`;

  function handleMove(e: React.PointerEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateY.set((px - 0.5) * intensity * 2);
    rotateX.set(-(py - 0.5) * intensity * 2);
    glareX.set(px * 100);
    glareY.set(py * 100);
  }

  function handleLeave() {
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformStyle: "preserve-3d",
        transformPerspective: 900,
      }}
      className={cn(
        "group relative transition-shadow duration-300 hover:shadow-soft motion-reduce:transform-none",
        dark ? "panel-dark" : "soft-panel",
        className,
      )}
      {...props}
    >
      {glare && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-card opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBg }}
        />
      )}
      <div style={{ transform: "translateZ(28px)", transformStyle: "preserve-3d" }}>{children}</div>
    </motion.div>
  );
}
