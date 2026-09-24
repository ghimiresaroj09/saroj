import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/data";
import { projectDescription } from "@/lib/seo";
import { typeLabel } from "@/lib/projects";

export default function ProjectCard({ project, heading = "h3" }: { project: Project; heading?: "h2" | "h3" }) {
  const Heading = heading;
  return (
    <article className={`project-card${project.type === "app" ? " project-card--app" : ""}`}>
      <Link href={`/projects/${project.slug}`} className="project-card-media" aria-hidden="true" tabIndex={-1}>
        <Image
          src={project.image}
          alt=""
          width={project.type === "app" ? 390 : 800}
          height={project.type === "app" ? 844 : 500}
          sizes="(max-width: 768px) 90vw, 33vw"
        />
      </Link>
      <div className="project-card-body">
        <span className="project-category">{typeLabel[project.type]}</span>
        <Heading>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </Heading>
        <p>{projectDescription(project)}</p>
        <ul className="project-stack" aria-label="Technologies used">
          {project.stack.slice(0, 4).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
