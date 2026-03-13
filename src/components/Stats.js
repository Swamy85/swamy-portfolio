import React from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import codingProfiles from "../data/codingProfiles";

const stats = [
  { value: Number(codingProfiles.overall.problemsSolved.replace(/\D/g, "")), display: codingProfiles.overall.problemsSolved, label: "DSA problems solved", suffix: "+" },
  { value: 10, display: "10", label: "Featured projects" },
  { value: 7, display: "07", label: "Certifications" },
  { value: 8.03, display: "8.03", label: "B.Tech CGPA", decimals: 2 },
  { value: 2026, display: "2026", label: "Graduation year" },
];

function Stat({ stat, index }) {
  const reduceMotion = useReducedMotion();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    if (reduceMotion) { setValue(stat.value); return undefined; }
    const start = performance.now();
    const duration = 1000;
    let frame;
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setValue(stat.value * (1 - Math.pow(1 - progress, 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduceMotion, stat.value]);
  const rendered = `${stat.decimals ? value.toFixed(stat.decimals) : String(Math.round(value)).padStart(2, "0")}${stat.suffix || ""}`;
  return <motion.div className="stat-item" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08, duration: reduceMotion ? 0 : 0.45 }}>
    <div ref={ref}><strong>{inView ? rendered : stat.display.replace(/[0-9]/g, "0")}</strong><span>{stat.label}</span></div>
  </motion.div>;
}

export default function Stats() {
  return <section className="stats-strip" aria-label="Verified portfolio highlights">{stats.map((stat, index) => <Stat key={stat.label} stat={stat} index={index} />)}</section>;
}
