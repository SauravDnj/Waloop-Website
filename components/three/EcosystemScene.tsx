"use client";

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import * as THREE from "three";
import { brandColorAt, createInfinityTube } from "@/components/three/infinityCurve";
import { useReducedMotion } from "@/components/three/useReducedMotion";

const ORIGIN = new THREE.Vector3();

export type EcosystemSceneProps = {
  nodes: string[];
  centerLabel?: string;
  /** Node labels to emphasise (e.g. the current page and what it connects to). */
  highlight?: string[];
  radius?: number;
  paused?: boolean;
};

function Hub({ nodes, centerLabel = "WALOOP", highlight, radius = 2.0, reduceMotion }: EcosystemSceneProps & { reduceMotion: boolean }) {
  const orbit = React.useRef<THREE.Group>(null);
  const core = React.useRef<THREE.Group>(null);
  const pulses = React.useRef<(THREE.Mesh | null)[]>([]);
  const { pointer } = useThree();
  const { geometry } = React.useMemo(() => createInfinityTube(0.62, 0.07), []);
  React.useEffect(() => () => geometry.dispose(), [geometry]);

  const points = React.useMemo(
    () =>
      nodes.map((_, i) => {
        const a = (i / nodes.length) * Math.PI * 2;
        return new THREE.Vector3(Math.cos(a) * radius, Math.sin(i * 1.9) * 0.18, Math.sin(a) * radius);
      }),
    [nodes, radius],
  );
  const colors = React.useMemo(() => nodes.map((_, i) => `#${brandColorAt(i / Math.max(nodes.length - 1, 1)).getHexString()}`), [nodes]);
  const hasHighlight = !!highlight && highlight.length > 0;

  useFrame(({ clock }, delta) => {
    const time = clock.getElapsedTime();
    if (orbit.current) {
      if (!reduceMotion) orbit.current.rotation.y += delta * 0.12;
      orbit.current.rotation.x = THREE.MathUtils.lerp(orbit.current.rotation.x, 0.42 - pointer.y * 0.12, 0.05);
    }
    if (core.current && !reduceMotion) {
      core.current.rotation.y = Math.sin(time * 0.6) * 0.5;
    }
    pulses.current.forEach((mesh, i) => {
      if (!mesh) return;
      const u = reduceMotion ? 0.5 : (time * 0.35 + i / nodes.length) % 1;
      mesh.position.lerpVectors(ORIGIN, points[i], u);
    });
  });

  return (
    <>
      <group ref={core}>
        <mesh geometry={geometry}>
          <meshPhysicalMaterial vertexColors roughness={0.2} clearcoat={1} metalness={0.15} />
        </mesh>
        <Html position={[0, -0.62, 0]} center style={{ pointerEvents: "none" }}>
          <span className="whitespace-nowrap rounded-full bg-brand-gradient px-3 py-1 font-heading text-[11px] font-bold uppercase tracking-widest text-white shadow-brand-glow">
            {centerLabel}
          </span>
        </Html>
      </group>

      <group ref={orbit} rotation={[0.42, 0, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[radius, 0.006, 8, 160]} />
          <meshBasicMaterial color="#4d8dff" transparent opacity={0.35} />
        </mesh>

        {nodes.map((label, i) => {
          const on = !hasHighlight || highlight!.includes(label);
          return (
            <group key={label}>
              <Line points={[[0, 0, 0], points[i]]} color={colors[i]} transparent opacity={on ? 0.55 : 0.12} lineWidth={1.2} />
              <mesh ref={(m) => void (pulses.current[i] = m)}>
                <sphereGeometry args={[0.035, 12, 12]} />
                <meshBasicMaterial color={colors[i]} transparent opacity={on ? 1 : 0.2} />
              </mesh>
              <mesh position={points[i]}>
                <sphereGeometry args={[on ? 0.14 : 0.1, 32, 32]} />
                <meshPhysicalMaterial color={colors[i]} emissive={colors[i]} emissiveIntensity={on ? 0.45 : 0.1} roughness={0.25} clearcoat={1} />
              </mesh>
              <Html position={[points[i].x, points[i].y + 0.32, points[i].z]} center style={{ pointerEvents: "none" }}>
                <span
                  className="whitespace-nowrap rounded-full border bg-surface/90 px-2.5 py-1 font-heading text-[10px] font-bold uppercase tracking-wider shadow-card backdrop-blur transition-opacity sm:text-[11px]"
                  style={{ borderColor: on ? colors[i] : "var(--color-border)", color: "var(--color-text)", opacity: on ? 1 : 0.45 }}
                >
                  {label}
                </span>
              </Html>
            </group>
          );
        })}
      </group>
    </>
  );
}

export default function EcosystemScene(props: EcosystemSceneProps) {
  const reduceMotion = useReducedMotion();
  return (
    <Canvas style={{ overflow: "visible" }} frameloop={props.paused ? "never" : "always"} camera={{ position: [0, 0.5, 7.6], fov: 44 }} gl={{ antialias: true, alpha: true }} dpr={[1, 1.75]}>
      <ambientLight intensity={0.75} />
      <directionalLight position={[2, 4, 5]} intensity={2} />
      <pointLight position={[-4, 2, 3]} intensity={25} color="#4d8dff" />
      <pointLight position={[4, -2, 3]} intensity={25} color="#2ee57a" />
      <Hub {...props} reduceMotion={reduceMotion} />
    </Canvas>
  );
}
