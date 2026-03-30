export default function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT SIDE */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h2 className="contact-title mb-4">
              Let's <span className="highlight">Talk</span>
            </h2>

            <p className="contact-desc">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, feel free to contact me.
            </p>

            {/* Email */}
            <div className="contact-info mt-4">
              <div className="info-item">
                <span className="icon">📧</span>
                <div>
                  <p className="label">Email</p>
                  <p className="value">your@email.com</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <p className="label">Location</p>
                  <p className="value">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="col-lg-6">
            <div className="contact-card p-4">
              <form>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="4"
                    className="form-control custom-input"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button type="submit" className="btn contact-btn w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
