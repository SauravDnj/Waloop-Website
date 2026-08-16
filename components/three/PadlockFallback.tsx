export function PadlockFallback() {
  return (
    <div className="flex aspect-square w-full items-center justify-center" style={{ perspective: "900px" }}>
      <div
        className="relative h-40 w-40 animate-[spin_14s_linear_infinite] motion-reduce:animate-none"
        style={{ transformStyle: "preserve-3d", transform: "rotateX(18deg) rotateY(24deg)" }}
      >
        <div
          className="absolute left-1/2 top-0 h-20 w-20 -translate-x-1/2 rounded-t-full border-[10px] border-brand-green"
          style={{ borderBottom: "none" }}
        />
        <div
          className="absolute bottom-0 left-1/2 h-24 w-32 -translate-x-1/2 rounded-2xl shadow-glow"
          style={{ background: "linear-gradient(135deg, #0a0a0a, #1a1a1a)" }}
        >
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green shadow-[0_0_16px_4px_rgba(152,255,3,0.6)]" />
        </div>
      </div>
    </div>
  );
}
