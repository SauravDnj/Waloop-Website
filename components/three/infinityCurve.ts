import * as THREE from "three";

/**
 * Lemniscate of Bernoulli — the shape of the WALOOP Infinity Connect mark.
 * A small z offset lifts one strand over the other at the crossing so the tube never intersects itself.
 */
export class InfinityCurve extends THREE.Curve<THREE.Vector3> {
  constructor(
    private readonly size = 1.7,
    private readonly depth = 0.32,
  ) {
    super();
  }

  getPoint(t: number, target = new THREE.Vector3()) {
    const a = t * Math.PI * 2;
    const s = Math.sin(a);
    const c = Math.cos(a);
    const d = 1 + s * s;
    return target.set((this.size * c) / d, (this.size * s * c) / d, this.depth * s);
  }
}

// Logo palette: blue on the left lobe → cyan at the crossing → green/lime on the right lobe.
const STOPS: [number, THREE.Color][] = [
  [0, new THREE.Color("#0a3fe0")],
  [0.3, new THREE.Color("#0b6cff")],
  [0.5, new THREE.Color("#07c8f0")],
  [0.72, new THREE.Color("#16c95f")],
  [1, new THREE.Color("#7ae82a")],
];

export function brandColorAt(u: number, target = new THREE.Color()) {
  const x = THREE.MathUtils.clamp(u, 0, 1);
  for (let i = 1; i < STOPS.length; i++) {
    const [p1, c1] = STOPS[i];
    const [p0, c0] = STOPS[i - 1];
    if (x <= p1) return target.copy(c0).lerp(c1, (x - p0) / (p1 - p0));
  }
  return target.copy(STOPS[STOPS.length - 1][1]);
}

/** Tube geometry along the infinity curve with the logo gradient baked into vertex colours. */
export function createInfinityTube(size = 1.7, radius = 0.16) {
  const curve = new InfinityCurve(size);
  const geometry = new THREE.TubeGeometry(curve, 420, radius, 28, true);
  const pos = geometry.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const color = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    brandColorAt((pos.getX(i) / size + 1) / 2, color);
    colors.set([color.r, color.g, color.b], i * 3);
  }
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  return { curve, geometry };
}
