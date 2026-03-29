import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="container py-5">
      <h2>Skills</h2>

      {Object.entries(skills).map(([key, value]) => (
        <div key={key}>
          <h4>{key}</h4>
          <ul>
            {value.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
