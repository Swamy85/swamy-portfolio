import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaBrain, FaHeartPulse, FaTrophy, FaXmark } from "react-icons/fa6";

const projects = [
  { number: "01", title: "CricketClash", subtitle: "Fantasy cricket, head to head.", category: "Full-stack", description: "A MERN-stack fantasy cricket platform where users compete head-to-head by backing one of two opposing teams.", tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript"], features: ["Head-to-head competitions", "Opposing team selection", "Admin-managed platform", "Automated features", "Multi-tier contests", "Different entry-fee levels"], visual: "cricket", icon: <FaTrophy />, live: "https://cricket-clash-alpha.vercel.app/", github: "https://github.com/Swamy85/CricketClash" },
  { number: "02", title: "SkillMap", subtitle: "A more personal path to job readiness.", category: "AI / ML", description: "An AI agent that analyzes resumes and job descriptions to identify skill matches and gaps, then guides users toward job readiness.", tech: ["HTML", "CSS", "JavaScript", "Claude API", "Generative AI"], features: ["Resume and job description analysis", "Skill matching and gap identification", "Adaptive skill assessments", "Personalized learning roadmaps", "Learning resources", "Hiring-readiness insights"], visual: "skillmap", icon: <FaBrain />, github: "https://github.com/Swamy85/ai-skill-agent" },
  { number: "03", title: "SmartCare", subtitle: "Healthcare insights, thoughtfully connected.", category: "AI / ML", description: "A healthcare web application using machine learning for symptom-based disease prediction, with patient, doctor, and administrator experiences.", tech: ["Python", "Django", "HTML", "CSS", "SQLite"], features: ["Symptom-based disease prediction", "Machine learning integration", "Patient authentication and dashboard", "Doctor authentication and dashboard", "Administrator functionality", "Patient records and diagnosis storage"], visual: "smartcare", icon: <FaHeartPulse />, github: "https://github.com/Swamy85/SmartCare" },
];

const unknown = "Not specified in the project information shared.";

function ProjectPreview({ project }) {
  return <div className={`project-preview project-preview-${project.visual}`} aria-hidden="true">
    <div className="preview-window-bar"><span /><span /><span /><b>{project.title}</b><small>CONCEPT UI</small></div>
    {project.visual === "cricket" && <div className="preview-app preview-cricket">
      <aside className="preview-sidebar"><i>CC</i><span className="active"/><span/><span/><span/></aside>
      <div className="preview-main"><div className="preview-app-heading"><div><small>FANTASY CRICKET</small><strong>Choose your side</strong></div><span className="preview-pill">HEAD TO HEAD</span></div>
        <div className="preview-match"><div className="preview-team"><i className="team-mark">A</i><span><b>Team A</b><small>Backing this side</small></span></div><span className="preview-versus">VS</span><div className="preview-team right"><i className="team-mark alt">B</i><span><b>Team B</b><small>Backing this side</small></span></div></div>
        <div className="preview-contest"><span><small>CONTEST FORMAT</small><b>Pick a contest to join</b></span><i>EXPLORE <b>↗</b></i></div>
      </div>
    </div>}
    {project.visual === "skillmap" && <div className="preview-app preview-skillmap">
      <aside className="preview-sidebar violet"><i>SM</i><span className="active"/><span/><span/><span/></aside>
      <div className="preview-main"><div className="preview-app-heading"><div><small>CAREER WORKSPACE</small><strong>Skill assessment</strong></div><span className="preview-avatar">KS</span></div>
        <div className="preview-resume"><i>↥</i><span><b>Resume & role description</b><small>Compare experience with role requirements</small></span><em>ADD FILES</em></div>
        <div className="preview-skill-columns"><div><small>YOUR SKILLS</small><b>Resume insights</b><span>Technical skills</span><span>Experience</span></div><div><small>ROLE REQUIREMENTS</small><b>Skills to explore</b><span>Core competencies</span><span>Role expectations</span></div></div>
      </div>
    </div>}
    {project.visual === "smartcare" && <div className="preview-app preview-smartcare">
      <aside className="preview-sidebar teal"><i>SC</i><span className="active"/><span/><span/><span/></aside>
      <div className="preview-main"><div className="preview-app-heading"><div><small>PATIENT PORTAL</small><strong>Health overview</strong></div><span className="preview-avatar teal-avatar">P</span></div>
        <div className="preview-care-card"><div><small>SYMPTOM CHECKER</small><b>How are you feeling?</b><span>Share symptoms to begin an assessment.</span></div><i>＋</i></div>
        <div className="preview-care-row"><div><i>⌕</i><span><small>ASSESSMENT TOOL</small><b>Describe symptoms</b></span></div><span className="preview-action">GET STARTED ↗</span></div>
      </div>
    </div>}
  </div>;
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const keydown = (event) => { if (event.key === "Escape") onClose(); };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [onClose]);
  return <div className="project-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
    <section className="project-modal-panel" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
      <button className="project-modal-close" onClick={onClose} aria-label="Close project details"><FaXmark /></button>
      <div className={`project-modal-art project-art-${project.visual}`}><span className="project-modal-kicker">PROJECT CASE STUDY / {project.number}</span><div className="browser-preview"><div className="browser-toolbar"><i/><i/><i/><span>{project.title.toLowerCase()}.app</span></div><div className="browser-content"><b>{project.title}</b><small>{project.subtitle}</small><span className="preview-line"/><span className="preview-line short"/><span className="preview-button">{project.visual === "cricket" ? "EXPLORE CONTESTS" : project.visual === "skillmap" ? "MAP YOUR SKILLS" : "OPEN DASHBOARD"} ↗</span></div></div><small className="preview-caption">Conceptual preview · not a product screenshot</small></div>
      <div className="project-modal-copy"><p className="eyebrow">{project.category} · {project.tech.slice(0, 3).join(" / ")}</p><h2 id="project-modal-title">{project.title}</h2><p>{project.description}</p>
        <div className="case-grid"><article><h3>Overview</h3><p>{project.description}</p></article><article><h3>Problem statement</h3><p>{unknown}</p></article><article><h3>Solution</h3><p>{project.description}</p></article><article><h3>Features</h3><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></article><article><h3>Technology stack</h3><div className="tech-stack">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div></article><article><h3>Development challenges</h3><p>{unknown}</p></article><article><h3>My implementation</h3><p>{unknown}</p></article><article><h3>Screenshots</h3><p>No product screenshot was provided. This is a conceptual preview.</p></article></div>
        <div className="project-modal-actions">{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="btn">Live project <FaArrowUpRightFromSquare /></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="btn">GitHub <FaArrowUpRightFromSquare /></a>}</div>
      </div>
    </section>
  </div>;
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const categories = ["All", "Full-stack", "AI / ML"];
  const filtered = projects.filter((project) => filter === "All" || project.category === filter);
  return <motion.section id="projects" className="section projects-section" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
    <div className="section-heading"><p className="eyebrow">SELECTED WORK · 2025—26</p><h2>Ideas made real.</h2><p className="section-lede">Three projects where full-stack engineering meets practical problems.</p></div>
    <div className="project-filter" role="group" aria-label="Filter projects">{categories.map((category) => <button type="button" key={category} className={filter === category ? "selected" : ""} onClick={() => setFilter(category)}>{category}</button>)}</div>
    <div className="projects-container">
      {filtered.map((project, index) => <motion.article key={project.title} className={`project-card project-${project.visual}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -5, rotateX: 1.2, rotateY: index % 2 ? -1 : 1 }} transition={{ duration: 0.35 }} viewport={{ once: true }}>
        <button className={`project-art project-art-${project.visual}`} onClick={() => setSelected(project)} aria-label={`View ${project.title} case study`}><ProjectPreview project={project} /><span className="project-number">{project.number} / 03 <b>↗</b></span></button>
        <div className="project-body"><p className="project-subtitle">{project.subtitle}</p><h3><button onClick={() => setSelected(project)}>{project.title}</button></h3><p className="project-description">{project.description}</p><div className="tech-stack">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-buttons"><button onClick={() => setSelected(project)}>View case study ↗</button>{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="project-live">Live project <FaArrowUpRightFromSquare /></a>}{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="project-live">GitHub <FaArrowUpRightFromSquare /></a>}</div></div>
      </motion.article>)}
    </div>
    {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
  </motion.section>;
}

export default Projects;
