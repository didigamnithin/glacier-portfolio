const contactEmail = "nithin.didigam@gmail.com";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/didigamnithin" },
  { label: "GitHub", href: "https://github.com/nhancio/" },
  { label: "X", href: "https://x.com/soul4tech" },
];

const journey = [
  {
    label: "AI Consultant",
    title: "Independent",
    date: "Current",
    body: "Building agents that work while I sleep. Running experiments on the internet. Turning code into cashflows.",
  },
  {
    label: "AI/ML Engineering",
    title: "Tanla Platforms",
    date: "Past",
    body: "Automation and analytics at scale. Processing massive data volumes efficiently. Reduced costs massively through architectural optimizations.",
  },
  {
    label: "Product & Integrations",
    title: "Sprinklr",
    date: "Past",
    body: "Enterprise SaaS systems. Built resilient products with global engineering teams, driving core integrations and scale.",
  },
  {
    label: "Data & Scale",
    title: "Myntra",
    date: "Past",
    body: "Data engineering at one of India's largest e-commerce platforms. Handled high-throughput data pipelines and infrastructure.",
  },
  {
    label: "Foundation",
    title: "IIT Kanpur",
    date: "Education",
    body: "Learned how to think. Built the mathematical foundation for everything after. Honed problem-solving under extreme constraints.",
  },
];

const achievements = [
  {
    title: "Winner, Global AI Summit Hackathon 2024",
    date: "2024",
    body: "Built Flatmates, an AI-driven app to match users with perfect roommates using complex preference analysis. Awarded ₹5 lakh first prize.",
  },
  {
    title: "Founder, Nhancio AI Agency",
    date: "2023",
    body: "Founded and lead an AI agency specializing in data science, intelligent agents, and automated marketing workflows.",
  },
];

const projects = [
  {
    title: "AgentlyBot",
    status: "Scaling",
    body: "Marketplace for AI agents.",
    link: "#",
  },
  {
    title: "Thryft",
    status: "Active",
    body: "Second-hand luxury, Gen Z focused.",
    link: "#",
  },
  {
    title: "Nhancio",
    status: "Live",
    body: "AI education and automation for businesses.",
    link: "https://nhancio.com",
  },
];

const metrics = [
  { value: "12-55x", label: "Cost reduction in AI" },
  { value: "100+", label: "Campaigns automated" },
  { value: "500M+", label: "Data points analyzed" },
  { value: "1st", label: "Global hackathon finish" },
];

export default function App() {
  return (
    <div className="container">
      <header style={{ marginBottom: '4rem' }}>
        <h1 style={{ marginBottom: '1rem' }}>Nithin Didigam</h1>
        <div className="intro" style={{ marginBottom: '1.5rem' }}>
          <p>
            I build AI products, experiment fast, and turn code into cashflows. Currently building agents and running experiments on the internet.
          </p>
        </div>
        <div className="social-links" style={{ fontSize: '0.85rem' }}>
          <a href={`mailto:${contactEmail}`}>Email</a>
          <span style={{ color: 'hsl(var(--border))' }}>|</span>
          {socialLinks.map((link, index) => (
            <span key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
              {index < socialLinks.length - 1 && (
                <span style={{ color: 'hsl(var(--border))', marginLeft: '1rem' }}>|</span>
              )}
            </span>
          ))}
        </div>
      </header>

      <main>
        <section id="career">
          <h2>Career <a href="https://linkedin.com/in/didigamnithin" style={{ fontSize: '0.7rem', textTransform: 'none' }}>View LinkedIn</a></h2>
          {journey.map((item, index) => (
            <div key={index} className="section-item">
              <div className="item-header">
                <div>
                  <span className="item-title">{item.title}</span>
                  <span className="item-subtitle"> — {item.label}</span>
                </div>
                <span className="item-date">{item.date}</span>
              </div>
              <p className="item-description">{item.body}</p>
            </div>
          ))}
        </section>

        <section id="achievements">
          <h2>Achievements</h2>
          {achievements.map((item, index) => (
            <div key={index} className="section-item">
              <div className="item-header">
                <span className="item-title">{item.title}</span>
                <span className="item-date">{item.date}</span>
              </div>
              <p className="item-description">{item.body}</p>
            </div>
          ))}
        </section>

        <section id="projects">
          <h2>Projects <a href="https://github.com/nhancio/" style={{ fontSize: '0.7rem', textTransform: 'none' }}>View GitHub</a></h2>
          {projects.map((project, index) => (
            <div key={index} className="section-item">
              <div className="item-header">
                <span className="item-title">
                  {project.link !== "#" ? (
                    <a href={project.link} target="_blank" rel="noreferrer">{project.title}</a>
                  ) : (
                    project.title
                  )}
                </span>
                <span className="item-date">{project.status}</span>
              </div>
              <p className="item-description">{project.body}</p>
            </div>
          ))}
        </section>

        <section id="metrics">
          <h2>Metrics</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1.5rem' }}>
            {metrics.map((item, index) => (
              <div key={index}>
                <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'hsl(var(--foreground))' }}>{item.value}</div>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05rem', color: 'hsl(var(--muted-foreground))' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Nithin Didigam. Built with simplicity in mind.</p>
        <p style={{ marginTop: '0.5rem' }}>
          Inspired by <a href="https://debarghyadas.com/" target="_blank" rel="noreferrer">Deedy</a>.
        </p>
      </footer>
    </div>
  );
}
