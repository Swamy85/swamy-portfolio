import React, { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaCode } from "react-icons/fa6";
import codingProfiles from "../data/codingProfiles";

function AnimatedStat({ label, value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const raw = Number(String(value).replace(/,/g, ""));
  const [current, setCurrent] = useState(reduceMotion && inView && Number.isFinite(raw) ? raw : 0);
  React.useEffect(() => {
    if (!inView || !Number.isFinite(raw)) return undefined;
    if (reduceMotion) { setCurrent(raw); return undefined; }
    const started = performance.now();
    let frame;
    const update = (now) => {
      const progress = Math.min((now - started) / 850, 1);
      setCurrent(Math.round(raw * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [inView, raw, reduceMotion]);
  const formatted = inView && Number.isFinite(raw) ? current.toLocaleString("en-US") : "0";
  return <div className="coding-stat" ref={ref}><strong>{Number.isFinite(raw) ? formatted : value}</strong><span>{label}</span></div>;
}

function DifficultyBreakdown({ difficulty }) {
  if (!difficulty || !["easy", "medium", "hard"].every((key) => Number.isFinite(difficulty[key]))) return null;
  const total = difficulty.easy + difficulty.medium + difficulty.hard;
  if (!total) return null;
  return <div className="coding-difficulty"><div className="coding-difficulty-bar" aria-label={`Easy ${difficulty.easy}, medium ${difficulty.medium}, hard ${difficulty.hard}`}>
    {["easy", "medium", "hard"].map((key) => <span key={key} className={key} style={{ width: `${(difficulty[key] / total) * 100}%` }} />)}
  </div><div className="coding-difficulty-labels">{["easy", "medium", "hard"].map((key) => <span key={key}><i className={key} />{key} <b>{difficulty[key]}</b></span>)}</div></div>;
}

function OverallCount({ value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const target = Number(String(value).replace(/\D/g, ""));
  React.useEffect(() => {
    if (!inView) return undefined;
    if (reduceMotion) { setCount(target); return undefined; }
    const start = performance.now();
    let frame;
    const update = (now) => {
      const progress = Math.min((now - start) / 1100, 1);
      setCount(Math.floor(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, target]);
  return <strong ref={ref} className="coding-total">{inView ? `${count}+` : "0+"}</strong>;
}

function CodingProfiles() {
  return <motion.section id="coding" className="section coding-section" initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }}>
    <div className="section-heading"><p className="eyebrow">CODING PROFILES · CONTINUOUS PRACTICE</p><h2>BEYOND WRITING CODE — <span>SOLVING PROBLEMS.</span></h2><p className="section-lede">A snapshot of my problem-solving practice across coding platforms.</p></div>
    <div className="coding-overall">
      <div><span className="coding-kicker">OVERALL ACHIEVEMENT</span><OverallCount value={codingProfiles.overall.problemsSolved} /><span className="coding-total-label">DSA PROBLEMS SOLVED</span></div>
      <div className="coding-language"><FaCode /><div><span>PRIMARY LANGUAGE</span><strong>{codingProfiles.overall.language}</strong></div></div>
      <p className="coding-updated">Statistics manually updated <time dateTime={codingProfiles.lastUpdated}>{codingProfiles.lastUpdated}</time></p>
    </div>
    <div className="coding-platforms">
      {codingProfiles.platforms.map((platform, index) => {
        const PlatformIcon = platform.icon;
        return <motion.article className={`coding-platform coding-${platform.accent}`} key={platform.key} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -4 }} transition={{ delay: index * 0.07, duration: 0.35 }} viewport={{ once: true }}>
          <div className="coding-platform-head"><div className="coding-platform-brand"><span className="coding-logo"><PlatformIcon /></span><div><h3>{platform.name}</h3><p>{platform.username}</p></div></div><a href={platform.url} target="_blank" rel="noreferrer" aria-label={`Open ${platform.name} profile`}><FaArrowUpRightFromSquare /></a></div>
          {platform.stats.length ? <div className="coding-platform-stats">{platform.stats.map((stat) => <AnimatedStat key={stat.label} label={stat.label} value={stat.value} />)}</div> : <p className="coding-empty">Profile available. Detailed counts, difficulty statistics, contest rating, and streak have not been added.</p>}
          {platform.stats.length > 0 && <DifficultyBreakdown difficulty={platform.difficulty} />}
          <div className="coding-platform-links"><a href={platform.url} target="_blank" rel="noreferrer">View profile <FaArrowUpRightFromSquare /></a>{platform.detailUrl && <a href={platform.detailUrl} target="_blank" rel="noreferrer">Hackos details <FaArrowUpRightFromSquare /></a>}{platform.progressUrl && <a href={platform.progressUrl} target="_blank" rel="noreferrer">Progress <FaArrowUpRightFromSquare /></a>}</div>
        </motion.article>;
      })}
    </div>
    <div className="coding-closing"><p>{codingProfiles.overall.closingText}</p><a href="mailto:kotariswamy1@gmail.com">Let’s connect ↗</a></div>
  </motion.section>;
}

export default CodingProfiles;
