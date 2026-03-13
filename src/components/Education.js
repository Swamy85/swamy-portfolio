import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [
  { degree: "B.Tech in Computer Science and Engineering", college: "Vardhaman College of Engineering · JNTUH", duration: "2022 — 2026", grade: "CGPA: 8.03" },
  { degree: "Intermediate · MPC", college: "TSWREIS Gowlidoddy Junior College, Hyderabad", duration: "2020 — 2022", grade: "CGPA: 8.79" },
  { degree: "Secondary School Certificate · SSC", college: "TSWREIS Jaipur High School, Mancherial", duration: "2020", grade: "CGPA: 10.0" },
];

function Education() {
  return (
    <motion.section id="education" className="section education-section"
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }} viewport={{ once: true }}>
      <div className="section-heading"><p className="eyebrow">THE FOUNDATION</p><h2>Education</h2><p className="section-lede">A strong base in computer science, built step by step.</p></div>
      <div className="education-timeline">
        {education.map((item, index) => (
          <motion.article key={item.degree} className="education-card"
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }} viewport={{ once: true }}>
            <div className="education-icon"><FaGraduationCap /></div>
            <div className="education-content"><div className="education-topline"><p className="education-duration">{item.duration}</p><p className="education-grade">{item.grade}</p></div><h3>{item.degree}</h3><h4>{item.college}</h4></div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

export default Education;
