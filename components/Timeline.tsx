"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { timeline, type TimelineCategory } from "@/lib/data";
import { assetPath } from "@/lib/assetPath";
import SectionHeading from "./SectionHeading";

type Filter = "all" | TimelineCategory;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "work", label: "Work Experience" },
  { value: "academics", label: "Academics" },
];

export default function Timeline() {
  const [filter, setFilter] = useState<Filter>("all");
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [isClient, setIsClient] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const items = timeline.filter((t) => filter === "all" || t.category === filter);

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    // Reset visible items when filter changes
    setVisibleItems(new Set());

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
            setVisibleItems((prev) => new Set(prev).add(index));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    // Immediate check for items already in viewport
    if (trackRef.current) {
      const timelineItems = trackRef.current.querySelectorAll(".timeline-item");
      timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
          setVisibleItems((prev) => new Set(prev).add(index));
        }
        
        observer.observe(item);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [items.length, filter, isClient]);

  return (
    <section className="timeline-section" id="timeline">
      <SectionHeading
        eyebrow="Timeline"
        title="My Career"
        accent="Journey"
        subtitle="A visual journey of growth, learning, and hands-on QA experience."
      />

      <div className="timeline-controls" role="group" aria-label="Filter timeline">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            className={`timeline-filter${filter === f.value ? " active" : ""}`}
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="timeline-track" ref={trackRef}>
        {items.map((item, i) => (
          <article
            key={`${item.title}-${filter}`}
            data-index={i}
            data-animate={isClient ? "true" : "false"}
            className={`timeline-item ${i % 2 === 0 ? "right" : "left"}${
              visibleItems.has(i) ? " timeline-item-visible" : ""
            }`}
            style={{
              transitionDelay: visibleItems.has(i) ? `${i * 0.15}s` : "0s",
            }}
          >
            <div className="timeline-card">
              <div className="timeline-media">
                <Image src={assetPath(item.image)} alt={item.alt} width={66} height={66} />
              </div>
              <time className="timeline-date" dateTime={item.dateTime}>
                {item.date}
              </time>
              <h3>{item.title}</h3>
              <h4>{item.subtitle}</h4>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
