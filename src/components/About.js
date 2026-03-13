import React from "react";
import { motion } from "framer-motion";
import codingProfiles from "../data/codingProfiles";

const journey = [
  ["2020", "SSC", "TSWREIS Jaipur High School · CGPA 10"],
  ["2020—22", "Intermediate · MPC", "TSWREIS Gowlidoddy Junior College · CGPA 8.79"],
  ["2022—26", "B.Tech · Computer Science", "Vardhaman College of Engineering, JNTUH · CGPA 8.03"],
  ["PROJECTS", "Build, learn, iterate", "CricketClash · SkillMap · SmartCare"],
  ["2025—26", "Selected certifications", "AWS Academy · Salesforce · Deloitte · Anthropic"],
];

function About() {
  return <motion.section id="about" className="section about-section" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
    <div className="section-heading about-heading"><p className="eyebrow">PROFILE · COMPUTER SCIENCE · 2026</p><h2>A developer with a <span>practical mindset.</span></h2><p className="section-lede">A little about how I think, what I build, and the path that brought me here.</p></div>
    <div className="about-editorial">
      <div className="about-narrative">
        <article><span className="about-label">01 / WHO I AM</span><p>I am a Computer Science graduate with an interest in full-stack development, software engineering, and AI-powered applications. I enjoy learning how systems fit together, from an interface through the data and logic behind it.</p></article>
        <article><span className="about-label">02 / WHAT I BUILD</span><p>Web applications, backend systems, interactive user interfaces, and AI-powered solutions. My projects explore fantasy sports, personalized skill development, and healthcare management.</p></article>
        <article><span className="about-label">03 / HOW I WORK</span><p>I focus on problem-solving, maintainable code, learning modern technologies, and building user-focused applications. I like taking a problem from a rough idea to a working product in clear steps.</p></article>
        <article className="about-problem-solving"><span className="about-label">A PRACTICE I KEEP</span><p><strong>{codingProfiles.overall.problemsSolved} DSA problems solved.</strong> Regular practice keeps me curious about multiple approaches and sharpens the way I reason through software problems.</p></article>
        <article><span className="about-label">04 / INTERESTS</span><div className="interest-tags">{["Full-stack applications", "Artificial intelligence", "Generative AI & LLMs", "Backend development", "Software engineering", "Data Structures & Algorithms"].map((item) => <span key={item}>{item}</span>)}</div></article>
      </div>
      <div className="journey"><div className="journey-heading"><span className="about-label">THE JOURNEY</span><span className="journey-mark">↘</span></div>
        {journey.map(([date, title, detail], index) => <motion.article className="journey-step" key={title} initial={{ opacity: 0, x: 14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}><span>{date}</span><div><h3>{title}</h3><p>{detail}</p></div></motion.article>)}
      </div>
    </div>
  </motion.section>;
}

export default About;
