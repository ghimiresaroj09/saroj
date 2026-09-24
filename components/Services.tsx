import { FaBug, FaRobot, FaCloud, FaGaugeHigh, FaMobileScreenButton } from "react-icons/fa6";
import { services, type ServiceIcon } from "@/lib/data";
import SectionHeading from "./SectionHeading";

const icons: Record<ServiceIcon, React.ComponentType> = {
  bug: FaBug,
  robot: FaRobot,
  cloud: FaCloud,
  gauge: FaGaugeHigh,
  mobile: FaMobileScreenButton,
};

export default function Services() {
  return (
    <section className="services" id="services">
      <SectionHeading eyebrow="Services" title="What I" accent="Offer" />
      <div className="services-container">
        {services.map((s) => {
          const Icon = icons[s.icon];
          return (
            <div className="service-box" key={s.title}>
              <div className="service-icon" aria-hidden="true">
                <Icon />
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
