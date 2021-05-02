import { projects } from "./Projects";

export const BusinessUnits = Array.from(
  new Set(projects.map((p) => p.business_unit))
).sort();
