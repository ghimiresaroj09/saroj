import Link from "next/link";
import Image from "next/image";
import { navLinks, person, socials } from "@/lib/data";

/** Minimal header/footer for inner pages (no scroll-spy, real links back to home sections). */
export default function SubpageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="header header--static">
        <Link href="/" className="logo-link" aria-label="Saroj Ghimire, back to home">
          <Image className="logo" src="/assets/logo-sg.png" alt="Saroj Ghimire portfolio logo" width={130} height={130} priority />
        </Link>
        <nav className="navbar" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.id === "portfolio" ? "/projects" : link.href} className={link.id === "portfolio" ? "active" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <nav className="subpage-mobile-nav" aria-label="Quick navigation">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </header>
      <main id="main-content" className="subpage">
        {children}
      </main>
      <footer className="subpage-footer">
        <p>
          {person.name}, {person.jobTitle}, {person.location}.{" "}
          <Link href="/#contact">Contact</Link>
        </p>
        <ul aria-label="Profiles">
          {socials
            .filter((s) => s.key === "github" || s.key === "linkedin")
            .map((s) => (
              <li key={s.key}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
        </ul>
      </footer>
    </>
  );
}
