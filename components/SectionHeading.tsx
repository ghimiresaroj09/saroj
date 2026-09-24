interface Props {
  eyebrow: string;
  title: string;
  accent: string;
  subtitle?: string;
  align?: "center" | "left";
}

export default function SectionHeading({ eyebrow, title, accent, subtitle, align = "center" }: Props) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="section-title">
        {title} <span>{accent}</span>
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
