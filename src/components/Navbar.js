import React from "react";

function Navbar() {
  return (
    <nav className="navbar">

      <h1><a
        href="#home"
        style={{
          fontSize: "22px",
          fontWeight: "700",
          color: "#2563eb",
          letterSpacing: "1px",
          textDecoration: "none",
          cursor: "pointer"
        }}
      >
        Kotari Swamy
      </a></h1>

      <ul>

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
