"use client";

import * as React from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

function parseStat(raw: string) {
  const match = raw.match(/^([^\d]*)(\d+\.?\d*)(.*)$/);
  if (!match) return null;
  const [, prefix, numStr, suffix] = match;
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return { prefix, target: parseFloat(numStr), suffix, decimals };
}

type AnimatedCounterProps = {
  value: string;
  className?: string;
  duration?: number;
};

export function AnimatedCounter({ value, className, duration = 1.6 }: AnimatedCounterProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduceMotion = useReducedMotion();
  const parsed = React.useMemo(() => parseStat(value), [value]);

  const [display, setDisplay] = React.useState(() => (parsed ? `${parsed.prefix}0${parsed.suffix}` : value));

  React.useEffect(() => {
    if (!parsed) {
      setDisplay(value);
      return;
    }
    if (!inView || reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(0, parsed.target, {
      duration,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(`${parsed.prefix}${v.toFixed(parsed.decimals)}${parsed.suffix}`);
      },
      onComplete() {
        setDisplay(value);
      },
    });
    return () => controls.stop();
  }, [inView, parsed, value, duration, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
