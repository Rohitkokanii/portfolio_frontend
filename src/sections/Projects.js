import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">

        {/* Heading */}
        <h2 className="projects-title mb-5">Selected Projects</h2>

        <div className="row g-4">
          {projects.map((p, i) => (
            <div className="col-md-6 col-lg-4" key={i}>

              <div className="project-card h-100">

                {/* Image */}
                <div className="project-img">
                  <img
                    src={p.image || "https://via.placeholder.com/400"}
                    alt={p.title}
                  />
                </div>

                {/* Content */}
                <div className="p-3">

                  <h5 className="project-title">{p.title}</h5>

                  <p className="project-desc">
                    {p.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    {p.tech.map((t, idx) => (
                      <span key={idx} className="project-tech">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="d-flex gap-3">
                    <a href={p.github} target="_blank" className="project-link">
                      GitHub
                    </a>

                    <a href={p.live} target="_blank" className="project-link">
                      Live Demo
                    </a>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}