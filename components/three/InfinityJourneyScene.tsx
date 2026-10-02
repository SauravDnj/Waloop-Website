"use client";

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { brandColorAt, createInfinityTube } from "@/components/three/infinityCurve";
import { useReducedMotion } from "@/components/three/useReducedMotion";

const SIZE = 1.7;
const PARTICLES = 18;

/** Journey stages placed along the loop, in travel order (§5 hero graphic). */
const STAGES: { label: string; t: number }[] = [
  { label: "Message", t: 0 },
  { label: "Channel", t: 0.055 },
  { label: "Conversation", t: 0.15 },
  { label: "CRM", t: 0.375 },
  { label: "Chatbot", t: 0.44 },
  { label: "Automation", t: 0.5 },
  { label: "Mini-App", t: 0.56 },
  { label: "Payment", t: 0.625 },
  { label: "Follow-up", t: 0.85 },
  { label: "Analytics", t: 0.925 },
];

const COMPACT_STAGES = new Set(["Message", "CRM", "Automation", "Payment", "Analytics"]);

function Loop({ reduceMotion, active }: { reduceMotion: boolean; active: number }) {
  const group = React.useRef<THREE.Group>(null);
  const particles = React.useRef<(THREE.Mesh | null)[]>([]);
  const { pointer } = useThree();
  // On narrow screens only the key stages are labelled so they don't crowd each other.
  const compact = useThree((state) => state.size.width < 520);
  const { curve, geometry } = React.useMemo(() => createInfinityTube(SIZE, 0.17), []);

  const labelPositions = React.useMemo(
    () =>
      STAGES.map(({ t }) => {
        const p = curve.getPointAt(t);
        const lobeCenter = new THREE.Vector3(Math.sign(p.x || 1) * SIZE * 0.62, 0, p.z);
        // Outward from the lobe centre, biased vertically so labels near the crossing don't collide.
        const d = p.clone().sub(lobeCenter).setZ(0);
        const dir = new THREE.Vector3(d.x * 0.6, d.y, 0).normalize();
        return p.clone().add(dir.multiplyScalar(0.5));
      }),
    [curve],
  );

  React.useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (group.current) {
      const sway = reduceMotion ? 0 : Math.sin(time * 0.35) * 0.12;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, sway + pointer.x * 0.25, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointer.y * 0.18, 0.05);
    }
    particles.current.forEach((mesh, i) => {
      if (!mesh) return;
      const u = (i / PARTICLES + (reduceMotion ? 0 : time * 0.045)) % 1;
      mesh.position.copy(curve.getPointAt(u));
      mesh.position.z += 0.19;
      const scale = 0.6 + 0.4 * Math.sin(time * 3 + i);
      mesh.scale.setScalar(reduceMotion ? 0.8 : scale);
    });
  });

  return (
    <group ref={group} scale={compact ? 0.84 : 1}>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial vertexColors roughness={0.22} metalness={0.15} clearcoat={1} clearcoatRoughness={0.15} />
      </mesh>

      {Array.from({ length: PARTICLES }, (_, i) => (
        <mesh key={i} ref={(m) => void (particles.current[i] = m)}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
      ))}

      {STAGES.map((stage, i) => {
        const pos = labelPositions[i];
        const color = `#${brandColorAt((pos.x / SIZE + 1) / 2).getHexString()}`;
        const isActive = i === active;
        if (compact && !COMPACT_STAGES.has(stage.label)) return null;
        return (
          <Html key={stage.label} position={pos} center zIndexRange={[10, 0]} style={{ pointerEvents: "none" }}>
            <div
              className="whitespace-nowrap rounded-full border bg-surface/90 px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-wider text-text shadow-card backdrop-blur transition-all duration-500 sm:text-[11px]"
              style={{ borderColor: isActive ? color : "var(--color-border)", transform: `scale(${isActive ? 1.12 : 1})` }}
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle" style={{ background: color }} />
              {stage.label}
            </div>
          </Html>
        );
      })}
    </group>
  );
}

export default function InfinityJourneyScene({ paused = false }: { paused?: boolean }) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (reduceMotion || paused) return;
    const id = setInterval(() => setActive((a) => (a + 1) % STAGES.length), 1400);
    return () => clearInterval(id);
  }, [reduceMotion, paused]);

  return (
    <Canvas style={{ overflow: "visible" }} frameloop={paused ? "never" : "always"} camera={{ position: [0, 0, 6], fov: 42 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.75]}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 4, 5]} intensity={2.2} />
      <pointLight position={[-4, 1, 3]} intensity={30} color="#4d8dff" />
      <pointLight position={[4, -1, 3]} intensity={30} color="#2ee57a" />
      <Loop reduceMotion={reduceMotion} active={active} />
    </Canvas>
  );
}
