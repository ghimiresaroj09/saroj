import Image from "next/image";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import { person } from "@/lib/data";
import { assetPath } from "@/lib/assetPath";
import SocialLinks from "./SocialLinks";

export default function Hero() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <p className="home-eyebrow">
          <span className="home-eyebrow-dot" aria-hidden="true" />
          QA Engineer
        </p>
        <h1>
          <span className="line">I find the bugs</span>
          <span className="line">before your users</span>
          <span className="line accent">ever do.</span>
        </h1>
        <p className="intro">
          Manual and automated testing for web and mobile apps, using Selenium, Python, PyTest, Postman, and
          JMeter.
        </p>
        <div className="home-actions">
          <a href="#portfolio" className="btn" title="Go to the projects section">
            View My Projects <FaArrowRight aria-hidden="true" />
          </a>
          <a
            href={person.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
            title="Download Saroj Ghimire's resume as PDF"
          >
            Download CV <FaDownload aria-hidden="true" />
          </a>
        </div>
        <SocialLinks className="social-media" />
      </div>

      <div className="home-img">
        <Image
          src={assetPath("/assets/Profile/hero.png")}
          alt="Saroj Ghimire"
          width={966}
          height={939}
          priority
          sizes="(max-width: 768px) 90vw, 45vw"
          className="home-portrait"
        />
        <div className="home-note" aria-hidden="true">
          <span className="home-note-text">
            No more
            <br />
            “Faaaahhh!” moments.
          </span>
          <svg className="home-note-arrow" viewBox="0 0 90 70" fill="none">
            <path
              d="M82 4C70 26 52 44 14 54"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M27 60L13 54L18 41"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
