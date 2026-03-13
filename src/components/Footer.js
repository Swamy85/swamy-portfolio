import React, { useEffect, useState } from "react";
import { FaArrowUp, FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef, SiHackerrank } from "react-icons/si";
import codingProfiles from "../data/codingProfiles";

const socials = [
  ["GitHub", "https://github.com/Swamy85", <FaGithub />],
  ["LinkedIn", "https://www.linkedin.com/in/kotariswamy85/", <FaLinkedin />],
  ["Email", "mailto:kotariswamy1@gmail.com", <span aria-hidden="true">@</span>],
  ["LeetCode", "https://leetcode.com/u/swamyk_85/", <SiLeetcode />],
  ["GeeksforGeeks", "https://www.geeksforgeeks.org/profile/swamyk_85", <SiGeeksforgeeks />],
  ["CodeChef", "https://www.codechef.com/users/swamyk_85", <SiCodechef />],
  ["HackerRank", "https://www.hackerrank.com/profile/22881A0585", <SiHackerrank />],
];

const explore = [["home", "Home"], ["about", "About"], ["skills", "Technical Skills"], ["projects", "Projects"], ["coding", "Coding Profiles"], ["education", "Education"], ["certifications", "Certifications"]];
const projects = [["CricketClash", "https://cricket-clash-alpha.vercel.app/"], ["SkillMap", "#projects"], ["SmartCare", "#projects"]];

function Footer() {
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <footer className="footer">
    <section className="footer-cta" aria-labelledby="footer-cta-title">
      <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
      <h2 id="footer-cta-title">LET’S BUILD SOMETHING <span>MEANINGFUL.</span></h2>
      <div className="footer-cta-bottom"><div><p>I’m Kotari Swamy, a Full-Stack Developer passionate about creating modern web applications and AI-powered solutions.</p><p>Have an interesting project, opportunity, or idea? Let’s connect and make it happen.</p></div><div className="footer-cta-actions"><a className="btn" href="#contact">Get in touch <FaArrowUpRightFromSquare /></a><a className="btn outline" href="/resume.pdf" download>Download resume <FaArrowUpRightFromSquare /></a></div></div>
    </section>
    <div className="footer-content">
      <section className="footer-column footer-brand"><p className="footer-column-label">PERSONAL BRAND</p><h3>SWAMY<span>.</span></h3><strong>Full-Stack Developer | Software Developer</strong><p>Building practical digital experiences through software engineering and modern technologies. {codingProfiles.overall.problemsSolved} DSA problems solved through consistent practice.</p></section>
      <nav className="footer-column" aria-label="Explore"><p className="footer-column-label">EXPLORE</p>{explore.map(([id, label]) => <a href={`#${id}`} key={id}>{label}</a>)}</nav>
      <nav className="footer-column" aria-label="Featured projects"><p className="footer-column-label">FEATURED PROJECTS</p>{projects.map(([name, url]) => <a href={url} target={url.startsWith("http") ? "_blank" : undefined} rel={url.startsWith("http") ? "noreferrer" : undefined} key={name}>{name}{name === "CricketClash" && <FaArrowUpRightFromSquare />}</a>)}</nav>
      <section className="footer-column"><p className="footer-column-label">CONNECT</p><a href="mailto:kotariswamy1@gmail.com">kotariswamy1@gmail.com</a><a href="https://github.com/Swamy85" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/kotariswamy85/" target="_blank" rel="noreferrer">LinkedIn ↗</a></section>
    </div>
    <div className="footer-socials" aria-label="Social profiles">{socials.map(([label, url, icon]) => <a href={url} key={label} aria-label={label} title={label} target={url.startsWith("http") ? "_blank" : undefined} rel={url.startsWith("http") ? "noreferrer" : undefined}>{icon}</a>)}</div>
    <div className="footer-bottom"><p>© {new Date().getFullYear()} Kotari Swamy <span>·</span> Based in India</p><a href="#home" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>BACK TO TOP ↑</a></div>
    <div className="footer-wordmark" aria-hidden="true">SWAMY<span>.</span></div>
    {showTop && <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><FaArrowUp /></button>}
  </footer>;
}

export default Footer;
