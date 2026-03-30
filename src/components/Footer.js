import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section py-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        {/* LEFT */}
        <div className="mb-4 mb-md-0 text-center text-md-start">
          <h5 className="footer-name">Rohit Kokani</h5>

          <p className="footer-text">
            © 2024 Rohit Kokani. Built with structural integrity.
          </p>
        </div>

        {/* RIGHT */}
        <div className="d-flex gap-4">
          <a href="#" className="footer-link">
            <FaGithub /> GitHub
          </a>

          <a href="#" className="footer-link">
            <FaLinkedin /> LinkedIns
          </a>
        </div>
      </div>
    </footer>
  );
}
