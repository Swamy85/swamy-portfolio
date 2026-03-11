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
            Hello! I am Kotari Swamy, a Computer Science Engineering student at Vardhaman College of Engineering (JNTUH). I am interested in software development, machine learning, and cloud technologies and enjoy building web and data-driven applications using Java, Python, JavaScript, and SQL.
          </p>

          

          <p>
            I have developed projects such as SmartCare, Blogger UI, and Soccer AI Player Performance Analysis. I am also AWS Cloud Foundations certified and always eager to learn new technologies.
          </p>
          
          <p>
            Apart from academics, I am a state-level Kho-Kho player, which has helped me develop teamwork, discipline, and leadership skills.
          </p>
          

          

        </motion.div>

      </div>

    </motion.section>

  );
}

export default About;
