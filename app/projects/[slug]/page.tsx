import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaArrowUpRightFromSquare, FaGooglePlay, FaLock } from "react-icons/fa6";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProjectCard from "@/components/ProjectCard";
import SubpageShell from "@/components/SubpageShell";
import { ProjectJsonLd } from "@/components/JsonLd";
import { ProjectVisual } from "@/components/Projects";
import { getAllSlugs, getProject, getRelatedProjects, typeLabel } from "@/lib/projects";
import { getProjectMetadata } from "@/lib/seo";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found", robots: { index: false, follow: false } };
  return getProjectMetadata(project);
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);
  const isPlay = project.liveUrl?.includes("play.google.com");

  return (
    <SubpageShell>
      <ProjectJsonLd project={project} />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Projects", href: "/projects" }, { name: project.title }]} />

      <article className="case-study">
        <header className="subpage-header">
          <span className="project-category">{typeLabel[project.type]}</span>
          <h1>{project.title}</h1>
          <p className="project-byline">
            {project.type === "automation" ? "Built by" : "QA testing by"} Saroj Ghimire
          </p>
        </header>

        <ProjectVisual project={project} />

        <div className="case-study-body">
          <section aria-labelledby="overview">
            <h2 id="overview">Overview</h2>
            <p>{project.description}</p>
          </section>

          <section aria-labelledby="role">
            <h2 id="role">Saroj Ghimire&apos;s role</h2>
            <p>{project.role}</p>
            {project.roles && (
              <ul className="project-roles">
                {project.roles.map((r) => {
                  const [label, ...rest] = r.split(":");
                  return (
                    <li key={r}>
                      <strong>{label}:</strong>
                      {rest.join(":")}
                    </li>
                  );
                })}
              </ul>
            )}
          </section>

          <section aria-labelledby="stack">
            <h2 id="stack">{project.stackLabel ?? "QA focus"}</h2>
            <ul className="project-stack" aria-label="Technologies and testing areas">
              {project.stack.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="links">
            <h2 id="links">Links</h2>
            <div className="project-links">
              {project.isPrivate && !project.liveUrl && !project.href && (
                <span className="project-private">
                  <FaLock aria-hidden="true" /> Private client project, no public link
                </span>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn">
                  {isPlay ? (
                    <>
                      <FaGooglePlay aria-hidden="true" /> Get on Google Play
                    </>
                  ) : (
                    <>
                      <FaArrowUpRightFromSquare aria-hidden="true" /> Visit {project.title}
                    </>
                  )}
                </a>
              )}
              {project.href && (
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="btn btn--outline">
                  <FaGithub aria-hidden="true" /> Source on GitHub
                </a>
              )}
              <Link href="/projects" className="btn btn--outline">
                All projects
              </Link>
            </div>
          </section>
        </div>
      </article>

      {related.length > 0 && (
        <section className="related" aria-labelledby="related-heading">
          <h2 id="related-heading">Related projects</h2>
          <div className="project-grid">
            {related.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      )}
    </SubpageShell>
  );
}
