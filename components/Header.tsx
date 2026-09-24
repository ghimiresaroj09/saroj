"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { useActiveSection } from "./useActiveSection";

const sectionIds = navLinks.map((l) => l.id);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      setScrolled(y > 50);
      if (y > 100 && delta > 6) setHidden(true);
      else if (delta < -6 || y <= 80) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}${hidden ? " header--hidden" : ""}`}>
      <Link href="/" className="logo-link" aria-label="Go to the home section">
        <Image
          className="logo"
          src="/assets/logo-sg.png"
          alt="Saroj Ghimire portfolio logo"
          width={130}
          height={130}
          priority
        />
      </Link>
      <nav className="navbar" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            className={active === link.id ? "active" : undefined}
            aria-current={active === link.id ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
