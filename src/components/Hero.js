import React from "react";
import { ReactTyped } from "react-typed";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <img
          src={profile}
          alt="Kotari Swamy"
          className="profile-img"
        />

        <h1>Hi, I'm Kotari Swamy</h1>

        <ReactTyped
strings={[
"Aspiring Software Engineer",
"Java Developer",
"Full Stack Developer",
"React Developer",
"Web Developer",
"Machine Learning Enthusiast",
"DSA Enthusiast",
"Problem Solver"
]}
typeSpeed={60}
backSpeed={40}
loop
/>

        

        {/* Social Icons */}

        <div className="social-icons">

          <a
            href="https://www.linkedin.com/in/kotariswamy85/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Swamy85"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://leetcode.com/u/swamyk_85/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>

        </div>

        <div className="hero-buttons">

          <a href="#contact" className="btn">
            Get In Touch
          </a>

          <a href="/resume.pdf" download className="btn outline">
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;
