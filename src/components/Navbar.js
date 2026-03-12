import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

return (

<nav className="navbar">

{/* Logo */}

<h1>
<a href="#home" className="logo-circle">KS</a>
</h1>

{/* Hamburger Icon */}

<div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
{menuOpen ? <FaTimes/> : <FaBars/>}
</div>

{/* Navigation Links */}

<ul className={menuOpen ? "nav-links active" : "nav-links"}>

<li><a href="#home" onClick={()=>setMenuOpen(false)}>Home</a></li>

<li><a href="#about" onClick={()=>setMenuOpen(false)}>About</a></li>

<li><a href="#skills" onClick={()=>setMenuOpen(false)}>Skills</a></li>

<li><a href="#projects" onClick={()=>setMenuOpen(false)}>Projects</a></li>

<li><a href="#education" onClick={()=>setMenuOpen(false)}>Education</a></li>

<li><a href="#certifications" onClick={()=>setMenuOpen(false)}>Certifications</a></li>

<li><a href="#achievements" onClick={()=>setMenuOpen(false)}>Achievements</a></li>

<li><a href="#contact" onClick={()=>setMenuOpen(false)}>Contact</a></li>

</ul>

{/* Dark Overlay */}

<div
className={menuOpen ? "menu-overlay active" : "menu-overlay"}
onClick={()=>setMenuOpen(false)}
></div>

</nav>

);

}

export default Navbar;
