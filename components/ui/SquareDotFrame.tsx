import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Renders Agenio's signature corner "square-dot" pips — small solid squares
 * offset just outside each corner of a bordered panel (header logo cell,
 * footer logo band, banner containers, etc).
 */
export function SquareDotFrame({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("relative", className)}>
      <span aria-hidden className="absolute -left-[3px] -top-[3px] h-[6px] w-[6px] bg-text" />
      <span aria-hidden className="absolute -bottom-[3px] -left-[3px] h-[6px] w-[6px] bg-text" />
      <span aria-hidden className="absolute -right-[3px] -top-[3px] h-[6px] w-[6px] bg-text" />
      <span aria-hidden className="absolute -bottom-[3px] -right-[3px] h-[6px] w-[6px] bg-text" />
      {children}
    </div>
  );
}
