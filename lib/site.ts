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
export const DEFAULT_TITLE = "Saroj Ghimire | QA Engineer & Test Automation Engineer";
export const DEFAULT_DESCRIPTION =
  "Saroj Ghimire is a QA Engineer specializing in software testing, test automation, API testing, and performance testing using Selenium, Python, Pytest, Postman, and JMeter.";
export const DEFAULT_OG_IMAGE = "/assets/SG.png";
export const TWITTER_HANDLE = "@SG_CFC02CL";

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
