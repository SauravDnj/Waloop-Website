"use client";

import * as React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

const NODE_COUNT = 6;
const ORBIT_RADIUS = 1.55;

const NODE_POSITIONS = Array.from({ length: NODE_COUNT }, (_, i) => {
  const angle = (i / NODE_COUNT) * Math.PI * 2;
  const tilt = Math.sin(i * 1.7) * 0.35;
  return new THREE.Vector3(Math.cos(angle) * ORBIT_RADIUS, tilt, Math.sin(angle) * ORBIT_RADIUS);
});

export function ProductsHub3D({ reduceMotion = false }: { reduceMotion?: boolean }) {
  const group = React.useRef<THREE.Group>(null);
  const core = React.useRef<THREE.Mesh>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (!group.current) return;
    if (!reduceMotion) {
      group.current.rotation.y += delta * 0.22;
    }
    const targetX = reduceMotion ? 0 : pointer.y * 0.2;
    const targetZ = reduceMotion ? 0 : -pointer.x * 0.2;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.05);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, targetZ, 0.05);
    if (core.current && !reduceMotion) {
      core.current.rotation.y += delta * 0.6;
      core.current.rotation.x += delta * 0.3;
    }
  });

  return (
    <group ref={group}>
      <Icosahedron ref={core} args={[0.62, 1]}>
        <meshStandardMaterial color="#98ff03" emissive="#98ff03" emissiveIntensity={0.35} metalness={0.5} roughness={0.2} wireframe />
      </Icosahedron>
      <Sphere args={[0.4, 32, 32]}>
        <meshStandardMaterial color="#b2ff43" emissive="#b2ff43" emissiveIntensity={0.6} metalness={0.3} roughness={0.15} transparent opacity={0.85} />
      </Sphere>

      {NODE_POSITIONS.map((pos, i) => (
        <group key={i}>
          <Line points={[[0, 0, 0], [pos.x, pos.y, pos.z]]} color="#b2ff43" transparent opacity={0.35} lineWidth={1} />
          <mesh position={pos}>
            <sphereGeometry args={[0.12, 24, 24]} />
            <meshStandardMaterial color="#98ff03" emissive="#98ff03" emissiveIntensity={0.5} metalness={0.4} roughness={0.3} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
