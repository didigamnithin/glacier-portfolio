import { FiExternalLink } from "react-icons/fi";

import type { Project } from "../data/content";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const isExternal = project.href !== "#";

  return (
    <a
      className="project-card"
      href={project.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      onClick={!isExternal ? (e) => e.preventDefault() : undefined}
    >
      <div className="project-card-inner">
        <div className="project-card-header">
          <div className="project-card-title-row">
            <span
              className="project-icon"
              style={{ backgroundColor: project.iconBg }}
              aria-hidden
            >
              {project.icon}
            </span>
            <span className="project-title">{project.title}</span>
          </div>
          <FiExternalLink className="project-external" aria-hidden />
        </div>
        <p className="project-description">{project.description}</p>
      </div>
    </a>
  );
}
