import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaCode } from "react-icons/fa";
import codingProfiles from "../data/codingProfiles";

const achievements = [{
  title: "State-Level Kho-Kho Player",
  desc: "Represented my state in Kho-Kho, building teamwork, discipline, leadership, and the ability to make decisions under pressure.",
  icon: <FaTrophy />,
}, {
  title: `${codingProfiles.overall.problemsSolved} DSA Problems Solved`,
  desc: "A platform-independent problem-solving milestone. Platform counts are tracked separately and are not added together.",
  icon: <FaCode />,
}];

function Achievements(){

return(

<motion.section
id="achievements"
className="section achievements-section"

initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}

transition={{duration:0.7}}

viewport={{once:true}}
>

<div className="section-heading"><p className="eyebrow">BEYOND THE SCREEN</p><h2>Discipline, on and off the field.</h2><p className="section-lede">The experiences that shape how I work with a team.</p></div>

<div className="achievements-grid">

{achievements.map((item,index)=>(

<motion.div
key={index}
className="achievement-card"

initial={{opacity:0,scale:0.9}}
whileInView={{opacity:1,scale:1}}

transition={{delay:index*0.15}}

whileHover={{scale:1.05}}
>

<div className="achievement-icon">{item.icon}</div>
<div className="achievement-copy">
  <h3>{item.title}</h3>
  <p>{item.desc}</p>
</div>

</motion.div>

))}

</div>

</motion.section>

)

}

export default Achievements
