import { skills } from "../data/skills";
import SkillsGrid from "./components/SkillsGrid";

export default function Skills() {
  return (
    <section id="skills" className="skills-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="skills-title">Technical Arsenal</h2>
          <div className="title-line"></div>
          <p className="skills-subtitle">
            Technologies and tools I use to build modern applications
          </p>
        </div>

        <SkillsGrid skills={skills} />
      </div>
    </section>
  );
}
