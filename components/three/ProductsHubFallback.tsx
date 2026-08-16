export function ProductsHubFallback() {
  const nodeCount = 6;
  const radius = 42;

  return (
    <div className="flex aspect-square w-full items-center justify-center" style={{ perspective: "900px" }}>
      <div
        className="relative h-40 w-40 animate-[spin_18s_linear_infinite] motion-reduce:animate-none"
        style={{ transformStyle: "preserve-3d", transform: "rotateX(20deg) rotateY(24deg)" }}
      >
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-lime shadow-glow" />
        {Array.from({ length: nodeCount }, (_, i) => {
          const angle = (i / nodeCount) * 360;
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 h-3 w-3 rounded-full bg-brand-green shadow-[0_0_10px_2px_rgba(152,255,3,0.5)]"
              style={{
                transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${radius}px)`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
