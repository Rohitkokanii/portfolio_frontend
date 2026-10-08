import TiltImage from "./components/TiltImage";

export default function Home() {
  return (
    <section className="home-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-lg-6 text-center text-lg-start">
            <p className="small-text">
              <span className="terminal-symbol">&gt;</span>
              <span>Hello, World</span>
              <span className="cursor"></span>
            </p>

            <h1 className="main-heading">Rohit Kokani</h1>

            <h2 className="sub-heading">Software Developer</h2>

            <p className="description">
              Building Scalable Web & Mobile Experiences That Turn Ideas Into
              Reality.
            </p>

            {/* <div className="mt-4 d-flex gap-3 justify-content-center justify-content-lg-start">
             
              <a
                href="/Resume_Rohit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 py-2"
              >
                Resume
              </a>
            </div> */}
            {/* RESUME BUTTONS */}
            {/* <div className="mt-4 d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
              <a
                href="/Resume_Rohit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary px-4 py-2"
              >
                <i className="bi bi-eye me-2"></i>
                View Resume
              </a>

              <a
                href="/Resume_Rohit.pdf"
                download="Rohit_Kokani_Resume.pdf"
                className="btn btn-outline-primary px-4 py-2"
              >
                <i className="bi bi-download me-2"></i>
                Download Resume
              </a>
            </div> */}
            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap resume-buttons">
              {/* View Resume */}
              <a
                href="/Resume_Rohit.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn resume-btn-primary"
              >
                <i className="bi bi-eye"></i>
                <span>View Resume</span>
              </a>

              {/* Download Resume */}
              <a
                href="/Resume_Rohit.pdf"
                download="Rohit_Kokani_Resume.pdf"
                className="resume-btn resume-btn-secondary"
              >
                <i className="bi bi-download"></i>
                <span>Download Resume</span>
              </a>
            </div>
            {/* SOCIAL LINKS */}
            <div className="mt-4 d-flex gap-4 justify-content-center justify-content-lg-start social-links">
              {/* GitHub */}
              <a
                href="http://www.github.com/Rohitkokanii"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
                <span>GitHub</span>
              </a>

              {/* LinkedIn */}
              <a
                href="http://www.linkedin.com/in/rohitkokani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
                <span>LinkedIn</span>
              </a>

              {/* Email */}
              <a href="mailto:connect.rohitkokani@gmail.com" aria-label="Email">
                <i className="bi bi-envelope"></i>
                <span>Email</span>
              </a>
              {/* </div> */}
            </div>
          </div>

          {/* RIGHT SIDE (IMAGE) */}
          {/* <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.-so6U1efiXqGkHDYPYmczAHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="profile"
              className="img-fluid rounded-4 shadow"
            />
          </div> */}
          <TiltImage />
        </div>
      </div>
    </section>
  );
}
