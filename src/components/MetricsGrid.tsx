import { metrics } from "../data/content";
import { SectionHeader } from "./SectionHeader";

export function MetricsGrid() {
  return (
    <section className="metrics-section" id="metrics" aria-labelledby="metrics-heading">
      <SectionHeader title="Metrics" headingId="metrics-heading" />
      <dl className="metrics-grid">
        {metrics.map((item) => (
          <div key={item.label} className="metric">
            <dt className="metric-value">{item.value}</dt>
            <dd className="metric-label">{item.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
