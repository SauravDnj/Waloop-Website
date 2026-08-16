export function IntegrationsLinkFallback() {
  return (
    <div className="flex aspect-square w-full items-center justify-center" style={{ perspective: "900px" }}>
      <div
        className="relative h-40 w-40 animate-[spin_16s_linear_infinite] motion-reduce:animate-none"
        style={{ transformStyle: "preserve-3d", transform: "rotateX(20deg) rotateY(24deg)" }}
      >
        <div
          className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-[68%] -translate-y-1/2 rounded-full border-[10px] border-brand-green"
          style={{ transform: "translate(-68%, -50%)" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-24 w-24 rounded-full border-[10px] border-brand-lime shadow-glow"
          style={{ transform: "translate(-32%, -50%)" }}
        />
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_4px_rgba(152,255,3,0.7)]" />
      </div>
    </div>
  );
}
