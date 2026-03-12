import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);



  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
{menuOpen ? <FaTimes/> : <FaBars/>}
</div>

      <h1>
<a href="#home" className="logo-circle">KS</a>
</h1>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li><a href="#home">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#skills">Skills</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#education">Education</a></li>

        <li><a href="#certifications">Certifications</a></li>

        <li><a href="#achievements">Achievements</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

    </nav>
  );
}

export default Navbar;
