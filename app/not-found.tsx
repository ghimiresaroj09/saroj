import type { Metadata } from "next";
import Link from "next/link";
import SubpageShell from "@/components/SubpageShell";

export const metadata: Metadata = {
  title: { absolute: "Page not found | Saroj Ghimire" },
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <SubpageShell>
      <div className="subpage-header">
        <h1>Page not found</h1>
        <p>The page you requested does not exist or has moved.</p>
        <div className="project-links">
          <Link href="/" className="btn">
            Back to home
          </Link>
          <Link href="/projects" className="btn btn--outline">
            View projects
          </Link>
        </div>
      </div>
    </SubpageShell>
  );
}
