import type { TimelineEntry } from "../data/content";
import { SectionHeader } from "./SectionHeader";

type TimelineSectionProps = {
  id: string;
  title: string;
  items: TimelineEntry[];
  linkHref?: string;
  linkLabel?: string;
};

function statusClass(date: string): string {
  const normalized = date.toLowerCase();
  if (normalized === "current") return "timeline-badge--current";
  if (normalized === "always") return "timeline-badge--indie";
  if (normalized === "education") return "timeline-badge--education";
  return "timeline-badge--past";
}

export function TimelineSection({
  id,
  title,
  items,
  linkHref,
  linkLabel,
}: TimelineSectionProps) {
  return (
    <section className="timeline-section" id={id} aria-labelledby={`${id}-heading`}>
      <SectionHeader
        title={title}
        href={linkHref}
        linkLabel={linkLabel}
        headingId={`${id}-heading`}
      />
      <ul className="timeline-cards">
        {items.map((item) => (
          <li key={`${item.title}-${item.date}`}>
            <article className="timeline-card">
              <div className="timeline-card-header">
                <div className="timeline-card-heading">
                  <h3 className="timeline-card-title">{item.title}</h3>
                  {item.label ? (
                    <p className="timeline-card-role">{item.label}</p>
                  ) : null}
                </div>
                <span className={`timeline-badge ${statusClass(item.date)}`}>
                  {item.date}
                </span>
              </div>
              <p className="timeline-card-body">{item.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
