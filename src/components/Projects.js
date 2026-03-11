import React from "react";
import { motion } from "framer-motion";

import smartcare from "../assets/smartcare.png";
import blogger from "../assets/blogger.png";
import soccer from "../assets/soccer.png";

const projects = [
  {
    title: "SmartCare",
    description:
      "Developed an ML-based healthcare web application that predicts diseases from patient symptoms and manages hospital records through an integrated database system.",
    image: smartcare,
    tech: ["Python", "HTML", "CSS", "SQLite", "Django"],
    github: "https://github.com/Swamy85/SmartCare",
    demo: "#"
  },

  {
    title: "Blogger UI",
    description:
      "Developed a responsive blogging platform with interactive blog cards, user profile pages, and dynamic UI components for an engaging user experience.",
    image: blogger,
    tech: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/Swamy85/Blogger-UI",
    demo: "#"
  },

  {
    title: "Soccer AI Analysis",
    description:
      "Developed an AI-based system that analyzes soccer player performance using machine learning models and visualizes insights through data analytics dashboards.",
    image: soccer,
    tech: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/Swamy85/Soccer-Ai",
    demo: "#"
  }
];

function Projects() {
  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Featured Projects</h2>

      <div className="projects-container">

        {projects.map((project, index) => (

          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.04 }}
          >

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">

              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}

            </div>

            <div className="project-buttons">

              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>

              

            </div>

          </motion.div>

        ))}

      </div>

    </motion.section>
  );
}

export default Projects;
