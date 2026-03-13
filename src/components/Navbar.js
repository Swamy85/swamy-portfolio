import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  ["home", "Home"], ["about", "About"], ["skills", "Skills"], ["projects", "Projects"],
  ["coding", "Coding"], ["education", "Education"], ["certifications", "Certifications"], ["contact", "Contact"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    let frame = null;
    const update = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        const marker = window.innerHeight * 0.36;
        let current = sections[0]?.id ?? "home";
        sections.forEach((section) => { if (section.getBoundingClientRect().top <= marker) current = section.id; });
        setActiveSection(current);
        frame = null;
      });
    };
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-menu-open", menuOpen);
    return () => document.body.classList.remove("nav-menu-open");
  }, [menuOpen]);

  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return <nav className={scrolled ? "navbar scrolled" : "navbar"} aria-label="Primary navigation">
    <a href="#home" className="logo-circle" aria-label="Kotari Swamy, home">SWAMY<span>.</span></a>
    <button className="menu-icon" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="primary-links" onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? <FaTimes /> : <FaBars />}</button>
    <ul id="primary-links" className={menuOpen ? "nav-links active" : "nav-links"}>
      {links.map(([id, label]) => <li key={id}><a href={`#${id}`} className={activeSection === id ? "active" : ""} aria-current={activeSection === id ? "location" : undefined} onClick={closeMenu}>{label}</a></li>)}
    </ul>
    <a className="nav-resume" href="/resume.pdf" download><span>RESUME</span><i aria-hidden="true">↗</i></a>
    {menuOpen && <button className="mobile-menu-backdrop" type="button" aria-label="Close navigation" onClick={closeMenu} />}
  </nav>;
}

export default Navbar;
