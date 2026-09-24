import Image from "next/image";
import { skills } from "@/lib/data";
import { assetPath } from "@/lib/assetPath";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <div className="skills-section" id="skills" aria-label="Skills">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I"
        accent="Work With"
        subtitle="Tools I use for manual testing, automation, API and performance testing."
      />
      <div className="skills-marquee">
        <ul className="skills-strip">
          {[0, 1].map((copy) =>
            skills.map((s) => (
              <li className="skill-chip" key={`${copy}-${s.name}`} aria-hidden={copy === 1 ? "true" : undefined}>
                <Image src={assetPath(s.image)} alt="" width={56} height={56} aria-hidden="true" />
                <span>{s.name}</span>
              </li>
            )),
          )}
        </ul>
      </div>
      <p className="visually-hidden">
        Skills include Python, Selenium, Postman, JMeter, Git, GitHub, Jenkins, Jira, MS SQL, Django, and PyTest.
      </p>
    </div>
  );
}
