import { useState, useEffect } from "react";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  // Apply theme
  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    setExpanded(false); // close mobile menu
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top custom-navbar px-4">
      <div className="container-fluid">
        {/* Logo */}
        <span
          className="navbar-brand brand-text"
          onClick={() => scrollToSection("home")}
          style={{ cursor: "pointer" }}
        >
          Rohit Kokani
        </span>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto gap-lg-4 text-center">
            <li className="nav-item">
              <span
                className="nav-link nav-custom"
                onClick={() => scrollToSection("home")}
              >
                Home
              </span>
            </li>

            <li className="nav-item">
              <span
                className="nav-link nav-custom"
                onClick={() => scrollToSection("about")}
              >
                About
              </span>
            </li>

            <li className="nav-item">
              <span
                className="nav-link nav-custom"
                onClick={() => scrollToSection("skills")}
              >
                Skills
              </span>
            </li>

            <li className="nav-item">
              <span
                className="nav-link nav-custom"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </span>
            </li>

            <li className="nav-item">
              <span
                className="nav-link nav-custom"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </span>
            </li>
          </ul>

          {/* Theme Toggle */}
          <div className="d-flex justify-content-center mt-3 mt-lg-0">
            <button
              className="theme-icon"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
