import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function About() {
  return (

    <motion.section
      id="about"
      className="section about-section"

      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.7 }}

      viewport={{ once: true }}
    >

      <h2>About Me</h2>

      <div className="about-container">

        <motion.div
          className="about-image"

          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 0.6 }}
        >

          <img src={profile} alt="Kotari Swamy" />

        </motion.div>

        <motion.div
          className="about-content"

          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}

          transition={{ duration: 0.6 }}
        >

          <p>
            I am a Computer Science Engineering student passionate about
            building scalable applications and solving real-world problems
            using modern technologies.
          </p>

          <p>
            My core interests include software development, web technologies,
            data structures, and machine learning. I enjoy creating projects
            that combine creativity with technical problem solving.
          </p>

          <p>
            Apart from coding, I am a state-level Kho-Kho player which has
            helped me develop teamwork, discipline and leadership skills.
          </p>

          <div className="about-highlights">

            <div className="highlight-card">
              <h3>7.98</h3>
              <p>CGPA</p>
            </div>

            <div className="highlight-card">
              <h3>7+</h3>
              <p>Certifications</p>
            </div>

            <div className="highlight-card">
              <h3>3+</h3>
              <p>Projects</p>
            </div>

          </div>

        </motion.div>

      </div>

    </motion.section>

  );
}

export default About;