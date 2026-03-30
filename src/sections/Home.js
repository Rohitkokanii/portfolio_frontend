export default function Home() {
  return (
    <section className="home-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-lg-6 text-center text-lg-start">
            <p className="small-text">Hello, World</p>

            <h1 className="main-heading">Rohit Kokani</h1>

            <h2 className="sub-heading">Java Developer</h2>

            <p className="description">
              Building scalable backend systems and modern web apps with clean
              code and performance.
            </p>

            <div className="mt-4 d-flex gap-3 justify-content-center justify-content-lg-start">
              <a href="#projects" className="btn btn-primary px-4 py-2">
                View Projects
              </a>

              <a href="#contact" className="btn btn-outline-light px-4 py-2">
                Contact Me
              </a>
            </div>
          </div>

          {/* RIGHT SIDE (IMAGE) */}
          <div className="col-lg-6 text-center mt-5 mt-lg-0">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.-so6U1efiXqGkHDYPYmczAHaHa?w=2000&h=2000&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="profile"
              className="img-fluid rounded-4 shadow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
