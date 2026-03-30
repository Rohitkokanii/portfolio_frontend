export default function About() {
  return (
    <section id="about" className="about-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 className="section-title mb-4">
              <span className="line"></span> Who I am
            </h2>

            <p className="about-text">
              Passionate Java Developer with a strong interest in backend
              architecture and system optimization. I specialize in building
              scalable applications using modern technologies.
            </p>

            <p className="about-text">
              My goal is to design and develop efficient systems that solve
              real-world problems with clean and maintainable code.
            </p>
          </div>

          {/* RIGHT SIDE (TIMELINE) */}
          <div className="col-lg-6">

            <h5 className="timeline-title mb-4">Timeline</h5>

            <div className="timeline">

              {/* Item 1 */}
              <div className="timeline-item">
                <span className="timeline-date">2023 - Present</span>
                <h6 className="timeline-heading">
                  Backend Developer Internship
                </h6>
                <p className="timeline-text">
                  Working with Spring Boot and Microservices architecture.
                </p>
              </div>

              {/* Item 2 */}
              <div className="timeline-item">
                <span className="timeline-date">2019 - 2023</span>
                <h6 className="timeline-heading">
                  B.Tech in Computer Science
                </h6>
                <p className="timeline-text">
                  Focused on Data Structures, Algorithms, and Core Java.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}