import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCopy } from "react-icons/fa";

function Contact(){

const form = useRef();

const [buttonText,setButtonText] = useState("Send Message");
const [buttonState,setButtonState] = useState("default");

const [copied,setCopied] = useState("");

/* SEND EMAIL */

const sendEmail = (e) => {

e.preventDefault();

setButtonText("Sending...");
setButtonState("loading");

emailjs.sendForm(
"service_pfqk047",
"template_3yyfdzw",
form.current,
"Rk7q-Ko18dDJkk9mO"
)

.then(()=>{

setButtonText("Sent Successfully ✔");
setButtonState("success");

setTimeout(()=>{
setButtonText("Send Message");
setButtonState("default");
},2000);

})

.catch(()=>{

setButtonText("Failed");
setButtonState("error");

setTimeout(()=>{
setButtonText("Send Message");
setButtonState("default");
},2000);

});

e.target.reset();

};

/* COPY TEXT */

const copyText = (text,type)=>{

navigator.clipboard.writeText(text);

setCopied(type);

setTimeout(()=>{
setCopied("");
},1500);

};

return(

<motion.section
id="contact"
className="section contact-section"
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.7}}
viewport={{once:true}}
>

<h2>Contact Me</h2>

<div className="contact-container">

{/* CONTACT INFO */}

<div className="contact-info">

<div className="contact-card">

<FaEnvelope className="contact-icon"/>

<div>

<h3>Email</h3>

<p className="copy-row">

kotariswamy1@gmail.com

<FaCopy
className="copy-icon"
onClick={()=>copyText("kotariswamy1@gmail.com","email")}
/>

{copied==="email" && (
<span className="copied-msg">Copied!</span>
)}

</p>

</div>

</div>


<div className="contact-card">

<FaPhone className="contact-icon"/>

<div>

<h3>Phone</h3>

<p className="copy-row">

+91 8341929472

<FaCopy
className="copy-icon"
onClick={()=>copyText("+918341929472","phone")}
/>

{copied==="phone" && (
<span className="copied-msg">Copied!</span>
)}

</p>

</div>

</div>


<div className="contact-card">

<FaMapMarkerAlt className="contact-icon"/>

<div>

<h3>Location</h3>

<p>Hyderabad, Telangana</p>

</div>

</div>

</div>


{/* CONTACT FORM */}

<form ref={form} onSubmit={sendEmail} className="contact-form">

<input
type="text"
name="user_name"
placeholder="Your Name"
required
/>

<input
type="email"
name="user_email"
placeholder="Your Email"
required
/>

<textarea
name="message"
placeholder="Your Message"
required
/>

<button
type="submit"
className={`send-btn ${buttonState}`}
>

{buttonText}

</button>

</form>

</div>

</motion.section>

)

}

export default Contact