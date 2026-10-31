import { BlogCard } from "./components/BlogCard";
import { MetricsGrid } from "./components/MetricsGrid";
import { Profile } from "./components/Profile";
import { ProjectCard } from "./components/ProjectCard";
import { SectionHeader } from "./components/SectionHeader";
import { TimelineSection } from "./components/TimelineSection";
import {
  career,
  posts,
  projects,
  site,
} from "./data/content";

export default function App() {
  return (
    <div className="page">
      <div className="layout">
        <Profile />

        <div className="main-column">
          <section className="projects-section" aria-label="Projects">
            <SectionHeader
              title="Projects"
              href="https://github.com/nhancio/"
              linkLabel="View GitHub →"
              headingId="projects-heading"
            />
            <div className="projects-grid">
              {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="content-sections">
        <TimelineSection
          id="career"
          title="Career & Achievements"
          items={career}
          linkHref="https://linkedin.com/in/didigamnithin"
          linkLabel="View LinkedIn →"
        />

        <MetricsGrid />

        <section className="posts-section" aria-label="Recent posts">
          <SectionHeader title="Recent Posts" href="https://x.com/soul4tech" />
          {posts.map((post) => (
            <BlogCard key={post.title} post={post} />
          ))}
        </section>
      </div>

      <footer className="site-footer">
        <p>{site.copyright}</p>
      </footer>
    </div>
  );
}
