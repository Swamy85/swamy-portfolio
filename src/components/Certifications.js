import React from "react";
import { motion } from "framer-motion";
import { FaCertificate } from "react-icons/fa";

const certifications = [

{
title: "AWS Academy Cloud Foundations",
org: "Amazon Web Services",
year: "2025"
},

{
title: "Salesforce Agentblazer Champion",
org: "Salesforce",
year: "2025"
},

{
title: "Deloitte Data Analytics Job Simulation",
org: "Forage",
year: "2026"
},

{
title: "Web Design and Development",
org: "Skill India / NSDC",
year: "2024"
},

{
title: "OOP in Java & SQL for Beginners",
org: "Scaler",
year: "2025"
},

{
title: "Employability Skills - JobReady",
org: "Wadhwani Foundation",
year: "2025"
},



];

function Certifications(){

return(

<motion.section
id="certifications"
className="section certifications-section"

initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}

transition={{duration:0.7}}

viewport={{once:true}}
>

<h2>Certifications</h2>

<div className="certifications-grid">

{certifications.map((cert,index)=>(

<motion.div
key={index}
className="cert-card"

initial={{opacity:0,scale:0.9}}
whileInView={{opacity:1,scale:1}}

transition={{delay:index*0.1}}
whileHover={{scale:1.05}}
>

<div className="cert-icon">
<FaCertificate/>
</div>

<h3>{cert.title}</h3>

<p className="cert-org">{cert.org}</p>

<span className="cert-year">{cert.year}</span>

</motion.div>

))}

</div>

</motion.section>

)

}

export default Certifications