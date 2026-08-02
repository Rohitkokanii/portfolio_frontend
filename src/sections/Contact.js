import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear field-specific error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validation Logic
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    return newErrors;
  };

  // Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Access Environment Variables for Create React App
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Safety check to verify environment variables exist
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        loading: false,
        success: false,
        error:
          "Email service environment variables are missing or undefined. Check your .env file.",
      });
      return;
    }

    setStatus({ loading: true, success: false, error: "" });

    const templateParams = {
      from_name: formData.fullName,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(() => {
        setStatus({ loading: false, success: true, error: "" });
        setFormData({ fullName: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus({
          loading: false,
          success: false,
          error: "Failed to send message. Please try again later.",
        });
      });
  };

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

            {/* Email Info */}
            <div className="contact-info mt-4">
              <div className="info-item">
                <span className="icon">📧</span>
                <div>
                  <p className="label mb-0">Email</p>
                  <p className="value mb-0">rohitkokaniofficail@gmail.com</p>
                </div>
              </div>

              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <p className="label mb-0">Location</p>
                  <p className="value mb-0">India</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="col-lg-6">
            <div className="contact-card p-4">
              {status.success && (
                <div className="alert alert-success border-0 mb-4" role="alert">
                  🎉 Thank you! Your message has been sent successfully.
                </div>
              )}

              {status.error && (
                <div className="alert alert-danger border-0 mb-4" role="alert">
                  ⚠️ {status.error}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Full Name Field */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`form-control custom-input ${
                      errors.fullName ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.fullName && (
                    <div className="invalid-feedback">{errors.fullName}</div>
                  )}
                </div>

                {/* Email Field */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-control custom-input ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Message Field */}
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`form-control custom-input ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    placeholder="Your message..."
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status.loading}
                  className="btn contact-btn w-100 py-2"
                >
                  {status.loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
