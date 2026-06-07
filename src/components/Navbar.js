import { useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("home");
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  // 🔥 Detect active section on scroll
  useEffect(() => {
    const sections = ["Home", "About", "Skills", "Projects", "Contact"];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const height = section.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetTop + height) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setExpanded(false);
  };

  return (
    <nav className="custom-navbar fixed-top">
      <div className="container-fluid nav-container">
        <span className="brand-logo" onClick={() => scrollToSection("home")}>
          Rohit Kokani
        </span>

        <div className="nav-menu d-none d-md-flex">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <span
              key={item}
              className={`nav-item ${active === item ? "active" : ""}`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="d-flex align-items-center gap-3">
          <button
            className={`theme-switch ${darkMode ? "dark" : "light"}`}
            onClick={() => setDarkMode(!darkMode)}
          >
            <div className="switch-thumb">
              {darkMode ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
            </div>

            <span className="icon sun">
              <MdOutlineLightMode />
            </span>
            <span className="icon moon">
              <MdOutlineDarkMode />
            </span>
          </button>

          <button
            className="menu-btn d-md-none"
            onClick={() => setExpanded(!expanded)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {expanded && (
        <div className="mobile-menu d-md-none">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <span
              key={item}
              className={active === item ? "active" : ""}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </nav>
  );
}
