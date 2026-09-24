import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import { socials, type SocialKey } from "@/lib/data";

const icons: Record<SocialKey, React.ComponentType> = {
  facebook: FaFacebook,
  instagram: FaInstagram,
  x: FaXTwitter,
  linkedin: FaLinkedin,
  github: FaGithub,
};

export default function SocialLinks({ className }: { className: string }) {
  return (
    <div className={className}>
      {socials.map(({ key, label, href }) => {
        const Icon = icons[key];
        return (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Saroj Ghimire on ${label}`}
            aria-label={`Visit Saroj Ghimire on ${label}`}
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
