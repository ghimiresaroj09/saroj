import { person, socials, skills, timeline } from "@/lib/data";
import type { Project } from "@/lib/data";
import { projectDescription, projectImage, projectPath } from "@/lib/seo";
import { absoluteUrl, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, DEFAULT_TITLE, SITE_NAME, SITE_URL } from "@/lib/site";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** Real professional profiles only. */
const professionalProfiles = socials
  .filter((s) => s.key === "github" || s.key === "linkedin" || s.key === "x")
  .map((s) => s.href);

function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: person.name,
    givenName: person.firstName,
    familyName: person.lastName,
    url: `${SITE_URL}/`,
    image: absoluteUrl("/assets/Profile/about.jpg"),
    jobTitle: person.jobTitle,
    description: DEFAULT_DESCRIPTION,
    worksFor: { "@type": "Organization", name: "Dome Infosys" },
    alumniOf: timeline
      .filter((t) => t.category === "academics")
      .map((t) => ({ "@type": "EducationalOrganization", name: t.title })),
    knowsAbout: [
      "Software Testing",
      "Test Automation",
      "Manual Testing",
      "API Testing",
      "Performance Testing",
      ...skills.map((s) => s.name),
    ],
    sameAs: professionalProfiles,
    email: `mailto:${person.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Kathmandu", addressCountry: "NP" },
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: `${SITE_URL}/`,
    name: `${SITE_NAME} Portfolio`,
    inLanguage: "en",
    publisher: { "@id": PERSON_ID },
  };
}

function script(data: unknown) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function HomeJsonLd({ projects }: { projects: Project[] }) {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      websiteNode(),
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: DEFAULT_TITLE,
        description: DEFAULT_DESCRIPTION,
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": PERSON_ID },
        mainEntity: { "@id": PERSON_ID },
        primaryImageOfPage: absoluteUrl(DEFAULT_OG_IMAGE),
        hasPart: projects.map((p) => ({
          "@type": "CreativeWork",
          name: p.title,
          url: absoluteUrl(projectPath(p)),
        })),
      },
      personNode(),
    ],
  };
  return script(data);
}

export function ProjectsIndexJsonLd({ projects }: { projects: Project[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/projects#webpage`,
    url: absoluteUrl("/projects"),
    name: `Projects | ${SITE_NAME}`,
    description: `Software testing and test automation projects documented by ${SITE_NAME}.`,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: p.title,
        url: absoluteUrl(projectPath(p)),
      })),
    },
    breadcrumb: breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Projects", path: "/projects" },
    ]),
  };
  return script(data);
}

function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function ProjectJsonLd({ project }: { project: Project }) {
  const url = absoluteUrl(projectPath(project));
  const description = projectDescription(project);
  const image = projectImage(project);

  // The page itself is a case study (CreativeWork). Only the personal framework is
  // actual source code authored by Saroj, so it gets SoftwareSourceCode.
  const work =
    project.type === "automation"
      ? {
          "@type": "SoftwareSourceCode",
          "@id": `${url}#work`,
          name: project.title,
          description: project.description,
          url,
          image,
          author: { "@id": PERSON_ID },
          programmingLanguage: "Python",
          runtimePlatform: "Selenium WebDriver, Pytest",
          ...(project.href ? { codeRepository: project.href } : {}),
        }
      : {
          "@type": "CreativeWork",
          "@id": `${url}#work`,
          name: `${project.title}: QA case study`,
          headline: project.title,
          description,
          url,
          image,
          author: { "@id": PERSON_ID },
          about: {
            "@type": project.type === "app" ? "MobileApplication" : "WebSite",
            name: project.title,
            ...(project.liveUrl ? { url: project.liveUrl } : {}),
            ...(project.type === "app" ? { operatingSystem: "Android" } : {}),
          },
          keywords: project.stack.join(", "),
        };

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: project.title,
        description,
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
        primaryImageOfPage: image,
        mainEntity: { "@id": `${url}#work` },
        breadcrumb: breadcrumbNode([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
          { name: project.title, path: projectPath(project) },
        ]),
      },
      work,
      personNode(),
    ],
  };
  return script(data);
}
