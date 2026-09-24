import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import SubpageShell from "@/components/SubpageShell";
import { ProjectsIndexJsonLd } from "@/components/JsonLd";
import { projects } from "@/lib/projects";
import { getPageMetadata } from "@/lib/seo";

const title = "QA & Test Automation Projects | Saroj Ghimire";
const description =
  "Software testing and test automation projects documented by Saroj Ghimire: web and mobile QA case studies plus a Selenium Python automation framework.";

export const metadata: Metadata = getPageMetadata({ title, description, path: "/projects" });

export default function ProjectsIndexPage() {
  return (
    <SubpageShell>
      <ProjectsIndexJsonLd projects={projects} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Projects" }]} />
      <header className="subpage-header">
        <h1>QA and Test Automation Projects</h1>
        <p>
          Each page below documents what the product is, who built it, and what Saroj Ghimire tested or built on it.
          Nothing here is a metric or claim beyond the work actually done.
        </p>
      </header>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} heading="h2" />
        ))}
      </div>
    </SubpageShell>
  );
}
