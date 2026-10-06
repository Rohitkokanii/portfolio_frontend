import { useEffect, useState } from "react";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdMenu,
  MdClose,
} from "react-icons/md";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const [active, setActive] = useState("Home");

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

  /* =========================================
     THEME
  ========================================= */

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";

    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [darkMode]);

  /* =========================================
     ACTIVE SECTION
  ========================================= */

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      let currentSection = "Home";

      navItems.forEach((item) => {
        const section = document.getElementById(item);

        if (!section) return;

        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentSection = item;
        }
      });

      setActive(currentSection);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================
     SCROLL TO SECTION
  ========================================= */

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActive(id);

    // Close mobile menu
    setExpanded(false);
  };

  /* =========================================
     TOGGLE MOBILE MENU
  ========================================= */

  const toggleMenu = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <nav className="custom-navbar fixed-top">
      <div className="container-fluid nav-container">
        {/* =====================================
            BRAND
        ===================================== */}

        <button
          type="button"
          className="brand-logo"
          onClick={() => scrollToSection("Home")}
          aria-label="Go to home"
        >
          Rohit Kokani
        </button>

        {/* =====================================
            DESKTOP NAVIGATION
        ===================================== */}

        <div className="nav-menu d-none d-md-flex">
          {navItems.map((item) => (
            <button
              type="button"
              key={item}
              className={`nav-item ${active === item ? "active" : ""}`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>

        {/* =====================================
            ACTIONS
        ===================================== */}

        <div className="nav-actions">
          {/* THEME SWITCH */}

          <button
            type="button"
            className={`theme-switch ${darkMode ? "dark" : "light"}`}
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
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

          {/* MOBILE MENU BUTTON */}

          <button
            type="button"
            className={`menu-btn d-md-none ${expanded ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label={
              expanded ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={expanded}
            aria-controls="mobile-navigation"
          >
            {expanded ? <MdClose /> : <MdMenu />}
          </button>
        </div>
      </div>

      {/* =========================================
          MOBILE NAVIGATION
      ========================================= */}

      <div
        id="mobile-navigation"
        className={`mobile-menu d-md-none ${expanded ? "show" : ""}`}
      >
        <div className="mobile-menu-inner">
          {navItems.map((item) => (
            <button
              type="button"
              key={item}
              className={`mobile-nav-item ${active === item ? "active" : ""}`}
              onClick={() => scrollToSection(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
