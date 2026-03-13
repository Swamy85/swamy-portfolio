import React, { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import { FaArrowDown, FaGithub, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { SiOpenjdk, SiReact, SiNodedotjs, SiMongodb, SiPython } from "react-icons/si";
import { FaBrain } from "react-icons/fa6";

const technologies = [
  { label: "Java", Icon: SiOpenjdk, className: "tech-java" },
  { label: "React", Icon: SiReact, className: "tech-react" },
  { label: "Node.js", Icon: SiNodedotjs, className: "tech-node" },
  { label: "MongoDB", Icon: SiMongodb, className: "tech-mongo" },
  { label: "Python", Icon: SiPython, className: "tech-python" },
  { label: "AI / ML", Icon: FaBrain, className: "tech-ai" },
];

function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 20]);
  const [localTime, setLocalTime] = useState(() => new Date());
  useEffect(() => {
    const timer = window.setInterval(() => setLocalTime(new Date()), 30000);
    return () => window.clearInterval(timer);
  }, []);
  const timeLabel = new Intl.DateTimeFormat("en-IN", { timeZone: "Asia/Kolkata", hour: "2-digit", minute: "2-digit", hour12: true }).format(localTime);

  return <section id="home" className="hero" ref={heroRef}>
    <div className="hero-content hero-layout">
      <div className="hero-copy">
        <p className="eyebrow"><span className="status-dot" /> COMPUTER SCIENCE GRADUATE · 2026</p>
        <h1>Kotari<br /><span>Swamy.</span></h1>
        <p className="hero-designation">FULL-STACK DEVELOPER <i>·</i> AI ENTHUSIAST</p>
        <p className="hero-intro">I’m Kotari Swamy — a full-stack developer building modern web applications and AI-powered solutions for practical problems.</p>
        <div className="hero-role-line"><span className="role-prefix">FOCUS //</span><span className="hero-typing"><ReactTyped strings={["MERN stack applications", "AI-powered products", "thoughtful software"]} typeSpeed={42} backSpeed={25} loop /></span></div>
        <div className="hero-live-data" aria-label="Local time in India"><span className="live-pulse" /><span className="live-label">AVAILABLE FOR OPPORTUNITIES</span><time>{timeLabel} IST</time><span className="live-city">INDIA</span></div>
        <div className="hero-buttons"><a href="#projects" className="btn">Explore my work <FaArrowDown /></a><a href="/resume.pdf" download className="btn outline">Download resume <FaArrowUpRightFromSquare /></a></div>
        <div className="hero-socials" aria-label="Professional profiles">
          <a href="https://github.com/Swamy85" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/kotariswamy85/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="mailto:kotariswamy1@gmail.com" aria-label="Email Kotari Swamy">@</a>
          <span className="social-note"><FaMapMarkerAlt /> Hyderabad, India</span>
        </div>
      </div>
      <motion.div className="hero-visual" aria-label="Portrait of Kotari Swamy" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }}>
        <motion.div className="hero-physics" aria-hidden="true" style={{ y: parallaxY }}>
          <motion.span className="physics-object physics-sphere" animate={reduceMotion ? {} : { y: [0, -17, 4, 0], rotateX: [0, 38, 0], rotateZ: [0, 26, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
          <motion.span className="physics-object physics-cube" animate={reduceMotion ? {} : { y: [0, 12, -7, 0], rotateX: [0, 135, 270], rotateY: [0, 180, 360] }} transition={{ duration: 17, repeat: Infinity, ease: "linear" }} />
          <motion.span className="physics-object physics-ring" animate={reduceMotion ? {} : { y: [0, -11, 8, 0], rotate: [0, 180, 360], rotateX: [62, 70, 62] }} transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }} />
          <motion.span className="physics-object physics-diamond" animate={reduceMotion ? {} : { y: [0, 14, -4, 0], rotateZ: [0, 90, 180] }} transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }} />
          <motion.span className="physics-speck speck-one" animate={reduceMotion ? {} : { x: [0, 6, -3, 0], y: [0, -8, 3, 0], opacity: [0.45, 0.85, 0.55, 0.45] }} transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }} />
          <motion.span className="physics-speck speck-two" animate={reduceMotion ? {} : { x: [0, -5, 4, 0], y: [0, 5, -7, 0], opacity: [0.35, 0.7, 0.4, 0.35] }} transition={{ duration: 9.1, repeat: Infinity, ease: "easeInOut", delay: -3.4 }} />
          <motion.span className="physics-speck speck-three" animate={reduceMotion ? {} : { x: [0, 4, -6, 0], y: [0, 7, -4, 0], opacity: [0.3, 0.6, 0.4, 0.3] }} transition={{ duration: 8.3, repeat: Infinity, ease: "easeInOut", delay: -5.1 }} />
        </motion.div>
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <motion.div className="hero-photo-frame portrait-frame" whileHover={reduceMotion ? undefined : { scale: 1.025 }} animate={reduceMotion ? {} : { y: [0, -7, 0] }} transition={{ y: { duration: 5, repeat: Infinity, ease: "easeInOut" }, scale: { duration: 0.3 } }}>
          <img src="/images/profile.jpg" alt="Kotari Swamy" className="hero-profile" />
          <span className="portrait-caption">KOTARI SWAMY <i>·</i> DEVELOPER</span>
        </motion.div>
        {technologies.map(({ label, Icon, className }, index) => <motion.div key={label} className={`tech-float ${className}`} title={label} aria-label={label} initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }} animate={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, index % 2 ? -7 : 6, 0] }} transition={{ opacity: { delay: 0.45 + index * 0.07 }, scale: { delay: 0.45 + index * 0.07 }, y: { duration: 4.5 + index * 0.6, repeat: Infinity, ease: "easeInOut", delay: index * -0.73 } }}><Icon aria-hidden="true" /><span>{label}</span></motion.div>)}
        <div className="hero-float-card focus-card"><span className="float-label">CURRENTLY FOCUSED ON</span><strong>Full-Stack Development<br />AI-Powered Applications<br />Modern Web Technologies</strong></div>
        <div className="hero-index">KS <span>/ 26</span></div>
      </motion.div>
    </div>
    <a className="scroll-cue" href="#about" aria-label="Scroll to about section"><span /> SCROLL TO EXPLORE</a>
  </section>;
}

export default Hero;
