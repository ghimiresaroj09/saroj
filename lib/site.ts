/**
 * Single source of truth for the canonical site origin.
 *
 * Set NEXT_PUBLIC_SITE_URL in production (no trailing slash).
 * Defaults to the custom domain in production and localhost in development.
 */

const raw =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production"
    ? "https://www.ghimiresaroj09.com.np"
    : "http://localhost:3000");

export const SITE_URL = raw.replace(/\/+$/, "");

export const SITE_NAME = "Saroj Ghimire";

export const DEFAULT_TITLE =
  "Saroj Ghimire | QA Engineer & Test Automation Specialist in Nepal";

export const DEFAULT_DESCRIPTION =
  "Professional QA Engineer with 1.5+ years of experience in software testing, test automation, API testing, and performance testing. Skilled in Selenium WebDriver, Python, Pytest, Postman, JMeter, and CI/CD. Based in Kathmandu, Nepal.";

export const DEFAULT_OG_IMAGE = "/assets/logo-sg.png?v=2";

export const TWITTER_HANDLE = "@SG_CFC02CL";

export const KEYWORDS = [
  "QA Engineer Nepal",
  "QA Engineer Kathmandu",
  "Software QA Engineer Nepal",
  "Test Automation Engineer Nepal",
  "Selenium WebDriver",
  "Selenium Python",
  "Python Test Automation",
  "Pytest Framework",
  "API Testing",
  "Postman API Testing",
  "Performance Testing",
  "JMeter Performance Testing",
  "Manual Testing",
  "Automated Testing",
  "CI/CD Testing",
  "Quality Assurance Engineer",
  "Software Testing Nepal",
  "Test Automation Nepal",
  "Saroj Ghimire",
];

/**
 * Build an absolute URL from a site-relative path.
 */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}