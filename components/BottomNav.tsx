"use client";

import { useEffect, useRef, useState } from "react";
import { FaHouse, FaUser, FaFolder, FaEnvelope } from "react-icons/fa6";
import { bottomNavLinks, navLinks } from "@/lib/data";
import { useActiveSection } from "./useActiveSection";

const icons = { home: FaHouse, about: FaUser, portfolio: FaFolder, contact: FaEnvelope } as const;
const sectionIds = navLinks.map((l) => l.id);

export default function BottomNav() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    lastY.current = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;
      if (y <= 80) setHidden(false);
      else if (delta > 6) setHidden(true);
      else if (delta < -6) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`bottom-nav${hidden ? " bottom-nav--hidden" : ""}`} aria-label="Mobile quick navigation">
      {bottomNavLinks.map(({ id, label }) => {
        const Icon = icons[id as keyof typeof icons];
        return (
          <a key={id} href={`/#${id}`} className={`bottom-nav-link${active === id ? " active" : ""}`}>
            <Icon />
            <span>{label}</span>
          </a>
        );
      })}
    </nav>
  );
}
