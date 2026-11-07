import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { FaCopy } from "react-icons/fa6";

function Contact() {
  const [feedback, setFeedback] = useState("");
  const [copied, setCopied] = useState(false);
  const [copiedMobile, setCopiedMobile] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  const sendEmailDraft = (event) => {
    event.preventDefault();
    const body = `${form.message}\n\nFrom: ${form.name} (${form.email})`;
    window.location.href = `mailto:kotariswamy1@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
    setFeedback("Your email app should open with this message ready to send.");
  };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText("kotariswamy1@gmail.com"); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { setFeedback("Copy is unavailable here. Email me at kotariswamy1@gmail.com."); }
  };
  const copyMobile = async () => {
    try { await navigator.clipboard.writeText("8341929472"); setCopiedMobile(true); window.setTimeout(() => setCopiedMobile(false), 1800); }
    catch { setFeedback("Copy is unavailable here. Call me at 8341929472."); }
  };

  return <motion.section id="contact" className="section contact-section" initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
    <div className="section-heading"><p className="eyebrow">CONTACT · OPEN TO OPPORTUNITIES</p><h2>Let’s create something <span>meaningful.</span></h2><p className="section-lede">Have an interesting project, opportunity, or idea? I’d love to connect.</p></div>
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-card"><FaEnvelope className="contact-icon" /><div><h3>Email</h3><p><a href="mailto:kotariswamy1@gmail.com">kotariswamy1@gmail.com</a><button type="button" className="copy-email" onClick={copyEmail} aria-label="Copy email address"><FaCopy /></button>{copied && <span className="copied-msg" role="status">Copied</span>}</p></div></div>
        <div className="contact-card"><FaPhone className="contact-icon" /><div><h3>Mobile</h3><p><a href="tel:+918341929472">8341929472</a><button type="button" className="copy-email" onClick={copyMobile} aria-label="Copy mobile number"><FaCopy /></button>{copiedMobile && <span className="copied-msg" role="status">Copied</span>}</p></div></div>
        <div className="contact-card"><FaGithub className="contact-icon" /><div><h3>GitHub</h3><p><a href="https://github.com/Swamy85" target="_blank" rel="noreferrer">github.com/Swamy85</a></p></div></div>
        <div className="contact-card"><FaLinkedin className="contact-icon" /><div><h3>LinkedIn</h3><p><a href="https://www.linkedin.com/in/kotariswamy85/" target="_blank" rel="noreferrer">linkedin.com/in/kotariswamy85</a></p></div></div>
      </div>
      <form onSubmit={sendEmailDraft} className="contact-form">
        <input name="name" type="text" placeholder="Your name" value={form.name} onChange={update} required aria-label="Your name" />
        <input name="email" type="email" placeholder="Your email" value={form.email} onChange={update} required aria-label="Your email" />
        <input name="subject" type="text" placeholder="Subject" value={form.subject} onChange={update} required aria-label="Subject" />
        <textarea name="message" placeholder="Tell me a little about it…" value={form.message} onChange={update} required aria-label="Message" />
        <button className="send-btn" type="submit">Prepare email ↗</button>
        {feedback && <p className="form-feedback" role="status">{feedback}</p>}
      </form>
    </div>
  </motion.section>;
}

export default Contact;
