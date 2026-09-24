import { projects, type Project } from "./data";

export { projects };

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Related projects: same type first, then the rest, excluding the current one. */
export function getRelatedProjects(project: Project, limit = 3): Project[] {
  const others = projects.filter((p) => p.slug !== project.slug);
  const same = others.filter((p) => p.type === project.type);
  const rest = others.filter((p) => p.type !== project.type);
  return [...same, ...rest].slice(0, limit);
}

export const typeLabel: Record<Project["type"], string> = {
  web: "Web application",
  app: "Mobile application",
  automation: "Automation framework",
};
