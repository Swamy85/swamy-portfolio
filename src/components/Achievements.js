import React from "react";
import { motion } from "framer-motion";
import { FaTrophy, FaUsers, FaMedal } from "react-icons/fa";

const achievements = [

{
title: "State-Level Kho-Kho Player",
desc: "Represented the state in Kho-Kho competitions demonstrating teamwork, leadership, discipline and strategic decision making.",
icon: <FaTrophy/>
},

{
title: "Teamwork & Leadership",
desc: "Actively participated in cultural activities and team competitions, improving collaboration and leadership skills.",
icon: <FaUsers/>
},

{
title: "Technical Learning & Certifications",
desc: "Earned certifications in Cloud Computing, Web Development, Java Programming, and Data Analytics.",
icon: <FaMedal/>
},


];

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

<h2>Achievements & Extracurricular Activities</h2>

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

<div className="achievement-icon">

{item.icon}

</div>

<h3>{item.title}</h3>

<p>{item.desc}</p>

</motion.div>

))}

</div>

</motion.section>

)

}

export default Achievements
