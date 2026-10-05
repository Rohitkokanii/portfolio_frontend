import experienceData from "../data/experienceData";

export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="section-title mb-4">Who I am</h2>

            <p className="about-text">
              I’m a <strong>Software Developer</strong> passionate about
              building
              <strong> modern web and mobile applications</strong>. I specialize
              in creating <strong>scalable, user-friendly solutions</strong>{" "}
              from frontend interfaces to backend APIs and databases.
            </p>

            <p className="about-text">
              I work with{" "}
              <strong>
                Java, Spring Boot, React, React Native, JavaScript, Node.js,
                REST APIs
              </strong>
              , and <strong>SQL/NoSQL databases</strong>. I enjoy turning ideas
              into <strong>reliable, real-world products </strong>
              with clean code and great user experiences.
            </p>
          </div>

          {/* RIGHT SIDE (TIMELINE) */}
          <div className="col-lg-6">
            <h5 className="timeline-title mb-4">Timeline</h5>

            <div className="timeline">
              {/* Item 1 */}
              {/* {[1, 2].map((itex, item) => {
                return (
                  <div className="timeline-item">
                    <div className="timeline-line"></div>
                    <div>
                      <span className="timeline-date">2023 - Present</span>
                      <h6 className="timeline-heading">
                        Backend Developer Internship
                      </h6>
                      <p className="timeline-text">
                        Working with Spring Boot and Microservices architecture.
                      </p>
                    </div>
                  </div>
                );
              })} */}
              {experienceData.map((item) => {
                return (
                  <div className="timeline-item" key={item.id}>
                    <div className="timeline-line"></div>

                    <div>
                      <span className="timeline-date">{item.date}</span>

                      <h6 className="timeline-heading">{item.role}</h6>

                      <p className="timeline-company">{item.company}</p>

                      <p className="timeline-text">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
