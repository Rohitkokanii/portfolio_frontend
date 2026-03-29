import ThemeToggle from "./ThemeToggler";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light px-4 sticky-top">
      <a className="navbar-brand fw-bold" href="#home">
        Rohit Kokani
      </a>

      <div className="ms-auto d-flex align-items-center gap-3">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#skills" className="nav-link">
          Skills
        </a>
        <a href="#projects" className="nav-link">
          Projects
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>

        <ThemeToggle />
      </div>
    </nav>
  );
}
