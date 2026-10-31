type SectionHeaderProps = {
  title: string;
  href?: string;
  linkLabel?: string;
  headingId?: string;
};

export function SectionHeader({
  title,
  href,
  linkLabel = "View all →",
  headingId,
}: SectionHeaderProps) {
  return (
    <div className="section-header">
      <h2 id={headingId}>{title}</h2>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {linkLabel}
        </a>
      ) : null}
    </div>
  );
}
