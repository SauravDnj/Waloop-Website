"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  direction?: Direction;
};

function offsetFor(direction: Direction, y: number) {
  switch (direction) {
    case "up":
      return { x: 0, y, scale: 1 };
    case "down":
      return { x: 0, y: -y, scale: 1 };
    case "left":
      return { x: y, y: 0, scale: 1 };
    case "right":
      return { x: -y, y: 0, scale: 1 };
    case "scale":
      return { x: 0, y: 0, scale: 0.92 };
    case "none":
      return { x: 0, y: 0, scale: 1 };
  }
}

export function Reveal({ children, className, delay = 0, y = 24, once = true, direction = "up" }: RevealProps) {
  const offset = offsetFor(direction, y);
  const variants: Variants = {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2, margin: "0px 0px -80px 0px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

const groupVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export function RevealGroup({
  children,
  className,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.2, margin: "0px 0px -80px 0px" }}
      variants={groupVariants}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  direction = "up",
  y = 20,
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  y?: number;
}) {
  const offset = offsetFor(direction, y);
  const itemVariants: Variants = {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
