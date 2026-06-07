import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles/theme.css";
// import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
// import Resume from "./sections/Resume";

function App() {
  return (
    <>
      <Navbar />

      <div id="Home">
        <Home />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      {/* <div>
        <Resume />
      </div> */}
      <div id="Contact">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
