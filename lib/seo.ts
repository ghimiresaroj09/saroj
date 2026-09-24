import type { Metadata } from "next";
import type { Project } from "./data";
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME, TWITTER_HANDLE } from "./site";

export function projectPath(project: Pick<Project, "slug">): string {
  return `/projects/${project.slug}`;
}

export function projectTitle(project: Project): string {
  return project.seoTitle?.trim() || `${project.title} | ${SITE_NAME}`;
}

/** Unique, factual description generated from project data (max ~160 chars). */
export function projectDescription(project: Project): string {
  if (project.seoDescription?.trim()) return project.seoDescription.trim();
  const focus = project.stack.slice(0, 4).join(", ");
  const base =
    project.type === "automation"
      ? `${project.title} built by ${SITE_NAME}: ${focus}.`
      : `${project.title} project documented by ${SITE_NAME}, covering ${focus}, and quality assurance.`;
  return base.length > 160 ? `${base.slice(0, 157).replace(/[,\s]+\S*$/, "")}...` : base;
}

export function projectImage(project: Project): string {
  return absoluteUrl(project.image);
}

export function getProjectMetadata(project: Project): Metadata {
  const title = projectTitle(project);
  const description = projectDescription(project);
  const url = absoluteUrl(projectPath(project));
  const image = projectImage(project);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: `${SITE_NAME} Portfolio`,
      title,
      description,
      images: [{ url: image, alt: project.alt }],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title,
      description,
      images: [image],
    },
  };
}

export function getPageMetadata(opts: { title: string; description: string; path: string; image?: string }): Metadata {
  const url = absoluteUrl(opts.path);
  const image = absoluteUrl(opts.image ?? DEFAULT_OG_IMAGE);
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: `${SITE_NAME} Portfolio`,
      title: opts.title,
      description: opts.description,
      images: [{ url: image, width: 1200, height: 630, alt: `${SITE_NAME} portfolio` }],
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}
