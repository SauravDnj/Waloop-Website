import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Meta Verified badge artwork. The badge's "Verified" text is dark navy, so it always sits on a
 * white chip to stay legible in dark mode.
 */
export function MetaVerifiedBadge({ className, size = "md" }: { className?: string; size?: "sm" | "md" | "lg" }) {
  const height = { sm: "h-6", md: "h-9", lg: "h-14" }[size];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-xl border border-black/5 bg-white px-3 py-2 shadow-card",
        size === "sm" && "rounded-lg px-2 py-1",
        className,
      )}
    >
      <Image src="/brand/meta-verified.png" alt="Meta Verified" width={396} height={120} className={cn("w-auto", height)} />
    </span>
  );
}
