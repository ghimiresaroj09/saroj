import Image from "next/image";
import { FaPaperPlane, FaArrowRight } from "react-icons/fa6";
import { aboutStats, aboutRoles } from "@/lib/data";
import Typewriter from "./Typewriter";

export default function About() {
  return (
    <section className="about" id="about">
      <span className="about-bg about-bg--tl" aria-hidden="true" />
      <span className="about-bg about-bg--br" aria-hidden="true" />
      <div className="about-visual">
        <span className="about-dots" aria-hidden="true" />
        <span className="about-blob" aria-hidden="true" />
        <svg className="about-sparkle" viewBox="0 0 60 60" fill="none" aria-hidden="true">
          <path d="M8 6L18 24" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M30 2L32 22" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <path d="M52 12L38 28" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </svg>
        <div className="about-img">
          <Image
            src="/assets/Profile/about.jpg"
            alt="Saroj Ghimire portrait"
            width={480}
            height={480}
            sizes="(max-width: 768px) 70vw, 30vw"
          />
        </div>
      </div>

      <div className="about-content">
        <p className="section-eyebrow">About Me</p>
        <h2 className="section-title">
          Hi, I&apos;m <span>Saroj Ghimire</span>
        </h2>
        <p className="about-role">
          I&apos;m a <Typewriter words={aboutRoles} className="about-role-typed" typeSpeed={90} pause={1600} />
        </p>
        <p className="about-text">
          Quality Analyst and IT graduate based in Kathmandu. I test web and mobile applications through manual
          and automated testing, track defects, and work with development teams to ship reliable software. My
          toolkit includes Selenium with Python, PyTest, Postman, JMeter, and JIRA.
        </p>
        <dl className="about-stats">
          {aboutStats.map((s) => (
            <div className="about-stat" key={s.label}>
              <dd>{s.value}</dd>
              <dt>{s.label}</dt>
            </div>
          ))}
        </dl>
        <a href="#contact" className="btn" title="Go to the contact section">
          <FaPaperPlane aria-hidden="true" /> Get In Touch <FaArrowRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
