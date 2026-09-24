import { FaPhone, FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { person } from "@/lib/data";
import SocialLinks from "./SocialLinks";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <SectionHeading eyebrow="Contact" title="Get In" accent="Touch" />
      <div className="contact-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>
            <FaPhone aria-hidden="true" />
            <a href={`tel:${person.phoneHref}`}>{person.phone}</a>
          </p>
          <p>
            <FaEnvelope aria-hidden="true" />
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </p>
          <p>
            <FaLocationDot aria-hidden="true" />
            {person.location}
          </p>
          <SocialLinks className="contact-social-media" />
        </div>
        <ContactForm />
      </div>

      <div className="copyright-text">
        <p>&copy; {new Date().getFullYear()} Saroj Ghimire. All rights reserved.</p>
      </div>
    </section>
  );
}
