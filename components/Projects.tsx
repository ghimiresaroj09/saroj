"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaGithub,
  FaArrowUpRightFromSquare,
  FaShieldHalved,
  FaCode,
  FaRobot,
  FaMobileScreenButton,
  FaGooglePlay,
  FaLock,
  FaFileLines,
} from "react-icons/fa6";
import { projects, type Project, type ProjectType } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const categoryIcons: Record<string, React.ComponentType> = {
  "Quality Assurance": FaShieldHalved,
  "Full-Stack Development": FaCode,
  "Test Automation": FaRobot,
  "Mobile Testing": FaMobileScreenButton,
};

type Filter = "all" | ProjectType;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "app", label: "App" },
  { id: "automation", label: "Automation" },
];

const SLIDE_INTERVAL_MS = 5000;

export function LaptopMockup({ project }: { project: Project }) {
  const slides = project.images && project.images.length > 1 ? project.images : [project.image];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (slides.length < 2 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let id: number | undefined;
    const start = () => {
      stop();
      id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), SLIDE_INTERVAL_MS);
    };
    const stop = () => {
      if (id !== undefined) window.clearInterval(id);
      id = undefined;
    };
    const onVisibility = () => (document.hidden ? stop() : start());

    start();
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [slides.length, paused]);

  return (
    <div
      className="laptop"
      aria-hidden="true"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="laptop-lid">
        <span className="laptop-camera" />
        <div className="laptop-screen">
          {slides.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              width={800}
              height={500}
              sizes="(max-width: 992px) 90vw, 45vw"
              className={`laptop-slide${i === index ? " is-active" : ""}`}
              priority={false}
            />
          ))}
        </div>
        {slides.length > 1 && (
          <div className="laptop-dots">
            {slides.map((src, i) => (
              <span key={src} className={i === index ? "is-active" : undefined} />
            ))}
          </div>
        )}
      </div>
      <div className="laptop-base">
        <span className="laptop-notch" />
      </div>
    </div>
  );
}

export function PhoneMockup({ project }: { project: Project }) {
  const screens = project.images?.slice(0, 2) ?? [project.image, project.image];
  return (
    <div className="phones" aria-hidden="true">
      {screens.map((src, i) => (
        <div className={`phone phone--${i === 0 ? "back" : "front"}`} key={src + i}>
          <span className="phone-island" />
          <div className="phone-screen">
            <Image src={src} alt="" width={390} height={844} sizes="(max-width: 992px) 45vw, 20vw" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ProjectVisual({ project: p }: { project: Project }) {
  return (
    <div className="project-visual">
      {p.type === "app" ? (
        <PhoneMockup project={p} />
      ) : p.phoneImage ? (
        <div className="device-combo">
          <LaptopMockup project={p} />
          <div className="phone phone--side" aria-hidden="true">
            <span className="phone-island" />
            <div className="phone-screen">
              <Image src={p.phoneImage} alt="" width={390} height={844} sizes="12vw" />
            </div>
          </div>
        </div>
      ) : (
        <LaptopMockup project={p} />
      )}
      <span className="visually-hidden">{p.alt}</span>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Filter>("all");
  const visible = active === "all" ? projects : projects.filter((p) => p.type === active);

  return (
    <section className="portfolio" id="portfolio">
      <SectionHeading
        eyebrow="Projects"
        title="Work I Have"
        accent="Tested"
        subtitle="Selected projects where I build, test, and automate."
      />

      <div className="portfolio-filter" role="tablist" aria-label="Filter projects by type">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={active === f.id}
            className={`filter-btn${active === f.id ? " is-active" : ""}`}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="portfolio-list">
        {visible.map((p, i) => {
          const Icon = categoryIcons[p.category] ?? FaCode;
          return (
            <article
              className={`project-row${i % 2 === 1 ? " project-row--flip" : ""}${p.type === "app" ? " project-row--app" : ""}`}
              key={p.slug}
              id={`project-${p.slug}`}
            >
              <div className="project-info">
                <span className="project-category">
                  <Icon aria-hidden="true" />
                  {p.category}
                </span>
                <h3>
                  <Link href={`/projects/${p.slug}`} className="project-title-link" title={`${p.title}: QA case study`}>
                    {p.title}
                  </Link>
                </h3>
                <p className="project-byline">
                  {p.type === "automation" ? "Built by" : "QA testing by"} Saroj Ghimire
                </p>
                <p>{p.description}</p>
                {p.roles && (
                  <ul className="project-roles">
                    {p.roles.map((r) => {
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
                <p className="project-stack-label">{p.stackLabel ?? "QA focus"}</p>
                <ul className="project-stack" aria-label="Technologies used">
                  {p.stack.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <Link href={`/projects/${p.slug}`} className="btn btn--outline">
                    <FaFileLines aria-hidden="true" /> Case study
                  </Link>
                  {p.isPrivate && !p.liveUrl && !p.href && (
                    <span className="project-private">
                      <FaLock aria-hidden="true" /> Private client project, no public link
                    </span>
                  )}
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                      title={p.liveUrl.includes("play.google.com") ? `Get ${p.title} on Google Play` : `Open the live ${p.title} site`}
                    >
                      {p.liveUrl.includes("play.google.com") ? (
                        <>
                          <FaGooglePlay aria-hidden="true" /> Get on Google Play
                        </>
                      ) : (
                        <>
                          <FaArrowUpRightFromSquare aria-hidden="true" /> View Project
                        </>
                      )}
                    </a>
                  )}
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline"
                      title={`View the ${p.title} source code on GitHub`}
                    >
                      <FaGithub aria-hidden="true" /> GitHub
                    </a>
                  )}
                </div>
              </div>

              <ProjectVisual project={p} />
            </article>
          );
        })}
      </div>
    </section>
  );
}
