import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaJava, FaPython, FaReact, FaDatabase, FaCode, FaCloud, FaBrain, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiNodedotjs, SiMysql, SiHtml5, SiCss } from "react-icons/si";

const groups = [
  { title: "Programming", note: "Programming foundations", skills: [["Java", <FaJava />], ["JavaScript", <SiJavascript />], ["Python", <FaPython />], ["C", <FaCode />]] },
  { title: "Frontend", note: "Interfaces and responsive experiences", skills: [["React.js", <FaReact />], ["HTML5", <SiHtml5 />], ["CSS3", <SiCss />], ["Responsive Web Design", <FaCode />]] },
  { title: "Backend", note: "Services and application logic", skills: [["Node.js", <SiNodedotjs />], ["Express.js", <SiExpress />], ["REST APIs", <FaCode />]] },
  { title: "Databases", note: "Data storage and querying", skills: [["MongoDB", <SiMongodb />], ["SQL", <SiMysql />]] },
  { title: "AI & Generative AI", note: "Applied AI concepts", skills: [["Generative AI", <FaBrain />], ["LLMs", <FaBrain />], ["Prompt Engineering", <FaBrain />], ["Artificial Intelligence", <FaBrain />]] },
  { title: "Developer Tools", note: "Tools I use to build", skills: [["Git", <FaGitAlt />], ["GitHub", <FaGitAlt />], ["VS Code", <FaCode />]] },
  { title: "Core Computer Science", note: "Foundational knowledge", skills: [["Data Structures & Algorithms", <FaCode />], ["OOP", <FaCode />], ["DBMS", <FaDatabase />], ["Operating Systems", <FaCode />], ["Cloud Computing", <FaCloud />]] },
];

function Skills() {
  const [active, setActive] = useState("All");
  const categories = ["All", ...groups.map(({ title }) => title)];
  const visible = active === "All" ? groups : groups.filter(({ title }) => title === active);
  return <motion.section id="skills" className="section skills-section" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
    <div className="section-heading"><p className="eyebrow">MY TOOLKIT</p><h2>Skills & expertise</h2><p className="section-lede">A practical toolkit for building, shipping, and improving software. No inflated proficiency scores.</p></div>
    <div className="skill-filters" role="group" aria-label="Filter skill categories">{categories.map((category) => <button type="button" key={category} onClick={() => setActive(category)} className={active === category ? "selected" : ""}>{category}</button>)}</div>
    <div className="skill-groups"><AnimatePresence mode="popLayout">{visible.map((group, index) => <motion.article key={group.title} className="skill-group" layout initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>
      <div className="skill-group-heading"><span>{String(groups.indexOf(group) + 1).padStart(2, "0")}</span><div><h3>{group.title}</h3><p>{group.note}</p></div></div>
      <div className="skill-tags">{group.skills.map(([name, icon]) => <span className="skill-tag" key={name} title={name} aria-label={name}><i aria-hidden="true">{icon}</i><span>{name}</span></span>)}</div>
    </motion.article>)}</AnimatePresence></div>
  </motion.section>;
}

export default Skills;
