import React from "react";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaReact } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Python", icon: <FaPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <FaReact /> },
  { name: "SQL", icon: <SiMysql /> },

];

function Skills() {
  return (
    <motion.section
      id="skills"
      className="section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h2>Skills & Expertise</h2>

      <p className="skills-intro">
        I have strong foundations in programming, problem solving,
        and software development. My expertise includes backend
        programming, frontend technologies, databases and
        machine learning tools.
      </p>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.08 }}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <div className="skill-name">
              {skill.name}
            </div>

          </motion.div>

        ))}

      </div>

    </motion.section>
  );
}

export default Skills;