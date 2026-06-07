import { skills } from "../data/skills";
import SkillsGrid from "./components/SkillsGrid";

export default function Skills() {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="skills-title">Technical Arsenal</h2>
          <div className="title-line"></div>
        </div>

        {/* Skills Grid */}
        {/* <div className="row g-4">
          {Object.entries(skills).map(([key, value]) => (
            <div key={key} className="col-md-6 col-lg-3">
              <div className="skill-card h-100">
                <h6 className="skill-heading text-uppercase mb-4">{key}</h6>
                <div className="d-flex flex-wrap gap-2">
                  {value.map((item, i) => (
                    <span key={i} className="skill-badge">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <SkillsGrid skills={skills} />
      </div>
    </section>
  );
}
