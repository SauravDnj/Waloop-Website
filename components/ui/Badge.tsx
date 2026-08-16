import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-surface-alt py-1 pl-2 pr-3 text-xs font-heading font-semibold uppercase tracking-wide text-text",
        className,
      )}
      {...props}
    >
      <span className="dot-lime" aria-hidden />
      {children}
    </span>
  );
}
