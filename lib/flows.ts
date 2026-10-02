// Shared shape for every journey / flow diagram on the site.
// A flow is a vertical chain of steps; a step can split into labelled branches
// (e.g. "Yes" / "No", or "Sales" / "Support" / "Pricing"). Steps listed after a
// branch object continue below it as the merged path.

export type FlowBranch = { label: string; steps: string[] };
export type FlowStep = string | { branches: FlowBranch[] };

export type Flow = {
  /** Short heading shown above the diagram. */
  title: string;
  /** Plain-language explanation so the diagram is never the only source of information (§75). */
  caption: string;
  steps: FlowStep[];
  /** Marks examples that illustrate a possible use rather than a guaranteed feature (§65). */
  conceptual?: boolean;
};

/** Flattens a flow into readable text — used for screen readers and the text fallback. */
export function flowToText(flow: Flow): string {
  return flow.steps
    .map((step) =>
      typeof step === "string"
        ? step
        : step.branches.map((b) => `${b.label}: ${b.steps.join(" → ")}`).join(" | "),
    )
    .join(" → ");
}
