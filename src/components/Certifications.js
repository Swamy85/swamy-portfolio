import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaCertificate } from "react-icons/fa6";

const certifications = [
  { title: "AWS Academy Cloud Foundations", org: "AWS Academy", year: "2025", file: "/certificates/aws-cloud-foundations.pdf" },
  { title: "Salesforce Developer Program · Agentblazer Champion", org: "Salesforce", year: "2025", file: "/certificates/salesforce-agentblazer.pdf" },
  { title: "Data Analytics Job Simulation", org: "Deloitte · Forage", year: "2026", file: "/certificates/deloitte-data-analytics.pdf" },
  { title: "Claude Code in Action · AI-assisted coding", org: "Anthropic", year: "2026", file: "/certificates/anthropic_certificate.pdf" },
  { title: "Employability Skills - JobReady", org: "Wadhwani Foundation", year: "2025", file: "/certificates/jobready-wadhwani.pdf" },
  { title: "Object-Oriented Programming, Java & SQL", org: "", file: "/certificates/oop-java-sql.pdf" },
  { title: "Web Design", org: "", file: "/certificates/web-design-nsdc.pdf" },
];

function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <motion.section id="certifications" className="section certifications-section"
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55 }} viewport={{ once: true }}>
      <div className="section-heading"><p className="eyebrow">ALWAYS LEARNING</p><h2>Certifications</h2><p className="section-lede">A few milestones from my ongoing learning journey.</p></div>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.article key={cert.title} className="cert-card"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }} viewport={{ once: true }}>
            <div className="cert-card-top"><div className="cert-icon"><FaCertificate /></div>{cert.year && <span className="cert-year">{cert.year}</span>}</div>
            <h3>{cert.title}</h3>{cert.org && <p className="cert-org">{cert.org}</p>}
            {cert.file ? <button className="cert-btn" onClick={() => setSelectedCert(cert.file)}>View certificate <FaArrowUpRightFromSquare /></button> : <span className="cert-note">Credential listed on resume</span>}
          </motion.article>
        ))}
      </div>
      {selectedCert && <div className="cert-modal" role="dialog" aria-modal="true" aria-label="Certificate preview" onClick={() => setSelectedCert(null)}>
        <div className="cert-modal-content" onClick={(event) => event.stopPropagation()}>
          <button className="close-btn" aria-label="Close certificate preview" onClick={() => setSelectedCert(null)}>x</button>
          <iframe src={selectedCert} title="Certificate preview" className="cert-preview" />
        </div>
      </div>}
    </motion.section>
  );
}

export default Certifications;
