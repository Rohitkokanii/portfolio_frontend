import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h2>Projects</h2>

      <div className="row">
        {projects.map((p, i) => (
          <div className="col-md-4" key={i}>
            <div className="card p-3">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
