import React from "react";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        {/* Section Heading */}
        <div className="text-center mb-5">
          <h2 className="projects-title">Selected Projects</h2>
          <p className="projects-subtitle">
            A showcase of recent work and applications
          </p>
        </div>

        {/* Projects Stack */}
        <div className="d-flex flex-column gap-5">
          {projects.map((p, i) => {
            const isEven = i % 2 === 0;

            return (
              <div
                key={p.id || i}
                className={`row align-items-center g-4 project-row ${
                  !isEven ? "flex-row-reverse" : ""
                }`}
              >
                {/* Project Image Container */}
                <div className="col-lg-7">
                  <div className="project-img-wrapper">
                    <img
                      src={
                        p.image ||
                        "https://placehold.co/600x350/0b2a5a/ffffff?text=Project+Preview"
                      }
                      alt={p.title}
                      className="img-fluid project-img"
                    />
                  </div>
                </div>

                {/* Project Content Container (No Box Container) */}
                <div className="col-lg-5">
                  <div className="project-details px-2">
                    <h3 className="project-title mb-3">{p.title}</h3>

                    <p className="project-desc mb-4">{p.desc}</p>

                    {/* Tech Stack Badges */}
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {p.tech &&
                        p.tech.map((t, idx) => (
                          <span key={idx} className="project-tech-badge">
                            {t}
                          </span>
                        ))}
                    </div>

                    {/* Action Links */}
                    <div className="d-flex gap-3 align-items-center">
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <i className="bi bi-github me-1"></i> GitHub
                        </a>
                      )}
                      {p.live && (
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link primary-link"
                        >
                          <i className="bi bi-box-arrow-up-right me-1"></i> Live
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
