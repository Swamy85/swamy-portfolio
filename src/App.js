import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import CodingProfiles from "./components/CodingProfiles";
import { useEffect, useState } from "react";

function InterfaceEffects() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const update = () => {
      const range = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(range > 0 ? (window.scrollY / range) * 100 : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);
  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

function App() {
  return (
    <div className="App">

      <InterfaceEffects />

      <Navbar />

      <main>
      <Hero />

      <Stats />

      <About />

      <Skills />

      <Projects />

      <CodingProfiles />

      <Education />

      <Certifications />

      <Achievements />

      <Contact />
      </main>

      <Footer />

    </div>
  );
}

export default App;
