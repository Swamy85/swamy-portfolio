import React from "react";
import { ReactTyped } from "react-typed";
import { FaCode, FaProjectDiagram, FaCertificate } from "react-icons/fa";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from "react-icons/si";

import profile from "../assets/profile.jpg";

function Hero() {

return (

<section id="home" className="hero">

<div className="hero-content">

{/* Profile Photo */}

<img src={profile} alt="Kotari Swamy" className="profile-img" />

{/* Name */}

<h1>Hi I'm Kotari Swamy</h1>

{/* Typed Roles */}
<div className="hero-split">

<div className="hero-typing">
<ReactTyped
strings={[
"Aspiring Software Engineer",
"Java Developer",
"Full Stack Developer",
"React Developer",
"DSA Enthusiast",
"Problem Solver",
"Competitive Programmer",
"Software Developer"
]}
typeSpeed={60}
backSpeed={40}
loop
/>
</div>
<span className="hero-divider">|</span>

<div className="hero-buttons">

<a href="/resume.pdf" download className="btn resume-btn">
Download Resume
</a>

</div>
</div>

{/* Quick Highlights */}

<div className="hero-highlights">

<span>
<FaCode className="highlight-icon"/> 
<strong>Solved 730+ DSA Problems Across Platforms</strong>
</span>

<span>
<FaProjectDiagram className="highlight-icon"/> 
<strong>3+ Real Time Projects</strong>
</span>

<span>
<FaCertificate className="highlight-icon"/> 
<strong>5+ Certifications</strong>
</span>

</div>

{/* Buttons */}

<div className="social-profiles">

<a href="https://www.linkedin.com/in/kotariswamy85/" target="_blank" rel="noreferrer" className="social-btn linkedin">
<FaLinkedin/> LinkedIn
</a>

<a href="https://github.com/Swamy85" target="_blank" rel="noreferrer" className="social-btn github">
<FaGithub/> GitHub
</a>

</div>


{/* Coding Platforms */}
<div className="coding-profiles">

<a href="https://leetcode.com/u/swamyk_85/" target="_blank" rel="noreferrer" className="coding-btn leetcode">
<SiLeetcode/> LeetCode
</a>

<a href="https://www.geeksforgeeks.org/profile/swamyk_85" target="_blank" rel="noreferrer" className="coding-btn gfg">
<SiGeeksforgeeks/> GeeksforGeeks
</a>

<a href="https://www.codechef.com/users/swamyk_85" target="_blank" rel="noreferrer" className="coding-btn codechef">
<SiCodechef/> CodeChef
</a>

<a href="https://www.hackerrank.com/profile/22881A0585" target="_blank" rel="noreferrer" className="coding-btn hackerrank">
<SiHackerrank/> HackerRank
</a>

</div>



</div>

</section>

);

}

export default Hero;
