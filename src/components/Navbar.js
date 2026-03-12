import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState("home");

useEffect(() => {

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if(entry.isIntersecting){
setActiveSection(entry.target.id);
}
});
},
{ threshold:0.6 }
);

sections.forEach((section)=>observer.observe(section));

return () => observer.disconnect();

}, []);

return (

<nav className="navbar">

<h1>
<a href="#home" className="logo-circle">KS</a>
</h1>

<div className="menu-icon" onClick={()=>setMenuOpen(!menuOpen)}>
{menuOpen ? <FaTimes/> : <FaBars/>}
</div>

<ul className={menuOpen ? "nav-links active" : "nav-links"}>

<li>
<a 
href="#home"
className={activeSection==="home" ? "active" : ""}
onClick={()=>setMenuOpen(false)}
>
Home
</a>
</li>

<li>
<a 
href="#about"
className={activeSection==="about" ? "active" : ""}
onClick={()=>setMenuOpen(false)}
>
About
</a>
</li>

<li>
<a 
href="#skills"
className={activeSection==="skills" ? "active" : ""}
onClick={()=>setMenuOpen(false)}
>
Skills
</a>
</li>

<li>
<a 
href="#projects"
className={activeSection==="projects" ? "active" : ""}
onClick={()=>setMenuOpen(false)}
>
Projects
</a>
</li>

<li>
<a 
href="#education"
className={activeSection==="education" ? "active" : ""}
onClick={()=>setMenuOpen(false)}
>
Education
</a>
</li>

<li>
<a 
href="#certifications"
className={activeSection==="certifications" ? "active" : ""}
onClick={()=>setMenuOpen(false)}
>
Certifications
</a>
</li>

<li>
<a 
href="#achievements"
className={activeSection==="achievements" ? "active" : ""}
onClick={()=>setMenuOpen(false)}
>
Achievements
</a>
</li>

<li>
<a 
href="#contact"
className={activeSection==="contact" ? "active" : ""}
onClick={()=>setMenuOpen(false)}
>
Contact
</a>
</li>

</ul>

<div
className={menuOpen ? "menu-overlay active" : "menu-overlay"}
onClick={()=>setMenuOpen(false)}
></div>

</nav>

);

}

export default Navbar;
