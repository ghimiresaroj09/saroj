/**
 * Single source of truth for the canonical site origin.
 * Set NEXT_PUBLIC_SITE_URL in production (no trailing slash).
 * Defaults to custom domain.
 */
const raw = process.env.NEXT_PUBLIC_SITE_URL ?? 
  (process.env.NODE_ENV === "production" 
    ? "https://www.ghimiresaroj09.com.np"
    : "http://localhost:3000");
export const SITE_URL = raw.replace(/\/+$/, "");

export const SITE_NAME = "Saroj Ghimire";
export const DEFAULT_TITLE = "Saroj Ghimire | QA Engineer & Test Automation Specialist in Nepal";
export const DEFAULT_DESCRIPTION =
  "Professional QA Engineer with 2+ years experience in software testing, test automation, API testing, and performance testing. Expert in Selenium WebDriver, Python, Pytest, Postman, JMeter, and CI/CD. Based in Kathmandu, Nepal.";
export const DEFAULT_OG_IMAGE = "/og-image.png";
export const TWITTER_HANDLE = "@SG_CFC02CL";
export const KEYWORDS = [
  "QA Engineer Nepal",
  "Test Automation Engineer",
  "Selenium WebDriver Expert",
  "Python Test Automation",
  "API Testing Specialist",
  "Performance Testing JMeter",
  "Software Testing Nepal",
  "Manual Testing",
  "Automated Testing",
  "Pytest Framework",
  "Postman API Testing",
  "CI/CD Testing",
  "Quality Assurance Engineer",
  "Saroj Ghimire",
  "QA Engineer Kathmandu",
];

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
