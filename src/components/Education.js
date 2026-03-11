import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const education = [

  {
    degree: "B.Tech in Computer Science and Engineering",
    college: "Vardhaman College of Engineering",
    duration: "2022 – 2026",
    grade: "CGPA: 7.98"
  },

  {
    degree: "Intermediate (MPC)",
    college: "TSWREIS Gowlidoddy Junior College",
    duration: "2020 – 2022",
    grade: "CGPA: 8.79"
  },

  {
    degree: "SSC",
    college: "TSWREIS Jaipur High School",
    duration: "2020",
    grade: "CGPA: 10"
  }

];

function Education() {

  return (

    <motion.section
      id="education"
      className="section education-section"

      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.7 }}

      viewport={{ once: true }}
    >

      <h2>Education</h2>

      <div className="education-timeline">

        {education.map((item, index) => (

          <motion.div
            key={index}
            className="education-card"

            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}

            transition={{ delay: index * 0.2 }}
          >

            <div className="education-icon">
              <FaGraduationCap />
            </div>

            <div className="education-content">

              <h3>{item.degree}</h3>

              <h4>{item.college}</h4>

              <p className="education-duration">{item.duration}</p>

              <p className="education-grade">{item.grade}</p>

            </div>

          </motion.div>

        ))}

      </div>

    </motion.section>

  );

}

export default Education;