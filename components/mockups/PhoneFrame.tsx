import Image from "next/image";
import { BadgeCheck, ChevronLeft, MoreVertical, Phone, Video } from "lucide-react";
import { cn } from "@/lib/utils";

/** A WhatsApp-style phone shell used by every conversation mockup on the site. */
export function PhoneFrame({
  children,
  className,
  footer,
  title = "WALOOP",
  subtitle = "Business account",
}: {
  children: React.ReactNode;
  className?: string;
  footer?: React.ReactNode;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[330px] rounded-[2.6rem] border border-[#1b2a4a] bg-[#0a1430] p-2.5 shadow-[0_30px_60px_-20px_rgba(7,19,48,0.45)]",
        className,
      )}
    >
      <div aria-hidden className="absolute left-1/2 top-3.5 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
      <div className="flex h-[560px] flex-col overflow-hidden rounded-[2.1rem] bg-[#efeae2] dark:bg-[#0b141a]">
        {/* WhatsApp header */}
        <div className="flex items-center gap-2 bg-[#008069] px-3 pb-2.5 pt-9 text-white dark:bg-[#202c33]">
          <ChevronLeft className="h-5 w-5 shrink-0 opacity-90" aria-hidden />
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
            <Image src="/brand/waloop-icon-sm.png" alt="" width={160} height={71} className="h-3.5 w-auto" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="flex items-center gap-1 text-sm font-semibold leading-tight">
              {title}
              <BadgeCheck className="h-3.5 w-3.5 fill-[#1d9bf0] text-white" aria-label="Verified" />
            </p>
            <p className="text-[10px] leading-tight opacity-80">{subtitle}</p>
          </div>
          <Video className="h-4 w-4 opacity-90" aria-hidden />
          <Phone className="h-4 w-4 opacity-90" aria-hidden />
          <MoreVertical className="h-4 w-4 opacity-90" aria-hidden />
        </div>
        <div className="relative flex-1 overflow-hidden">{children}</div>
        {footer}
      </div>
    </div>
  );
}

export function Bubble({
  from,
  children,
  time = "10:24",
  className,
}: {
  from: "customer" | "business";
  children: React.ReactNode;
  time?: string;
  className?: string;
}) {
  const mine = from === "customer";
  return (
    <div className={cn("flex", mine ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[85%] rounded-lg px-2.5 pb-1 pt-1.5 text-[13px] leading-snug shadow-sm",
          mine
            ? "rounded-tr-none bg-[#d9fdd3] text-[#111b21] dark:bg-[#005c4b] dark:text-[#e9edef]"
            : "rounded-tl-none bg-white text-[#111b21] dark:bg-[#202c33] dark:text-[#e9edef]",
          className,
        )}
      >
        {children}
        <span className="mt-0.5 block text-right text-[9px] text-[#667781] dark:text-[#8696a0]">
          {time}
          {mine && <span className="ml-1 text-[#53bdeb]">✓✓</span>}
        </span>
      </div>
    </div>
  );
}

/** WhatsApp-style quick-reply / interactive button. */
export function ReplyButton({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span
      className={cn(
        "block rounded-lg bg-white py-1.5 text-center text-[12.5px] font-medium text-[#008069] shadow-sm dark:bg-[#202c33] dark:text-[#21c063]",
        active && "ring-2 ring-[#25D366]",
      )}
    >
      {children}
    </span>
  );
}
