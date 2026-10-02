import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

/** WALOOP wordmark: "WA" in brand green, "LOOP" in brand blue — mirrors the Infinity Connect lockup. */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("font-heading text-xl font-bold tracking-tight", className)}>
      <span className="bg-gradient-to-br from-[#6fe23a] to-[#0fa956] bg-clip-text text-transparent">WA</span>
      <span className="bg-gradient-to-br from-[#0b7bff] to-[#0a2c7a] bg-clip-text text-transparent dark:from-[#4fb8ff] dark:to-[#4d8dff]">
        LOOP
      </span>
    </span>
  );
}

export function Logo({ className, iconClassName }: { className?: string; iconClassName?: string }) {
  return (
    <Link href="/" aria-label="WALOOP home" className={cn("group flex shrink-0 items-center gap-2.5", className)}>
      <Image
        src="/brand/waloop-icon-sm.png"
        alt=""
        width={160}
        height={71}
        priority
        className={cn("h-7 w-auto shrink-0 transition-transform duration-300 group-hover:scale-105", iconClassName)}
      />
      <Wordmark />
    </Link>
  );
}

/** Full WALOOP lockup (Infinity icon above the wordmark), swapped for the dark-mode artwork. */
export function BrandLockup({ className }: { className?: string }) {
  return (
    <span className={cn("relative inline-block", className)}>
      <Image
        src="/brand/waloop-logo-light.png"
        alt="WALOOP"
        width={720}
        height={447}
        className="h-full w-auto dark:hidden"
      />
      <Image
        src="/brand/waloop-logo-dark.png"
        alt="WALOOP"
        width={720}
        height={447}
        className="hidden h-full w-auto dark:block"
      />
    </span>
  );
}
