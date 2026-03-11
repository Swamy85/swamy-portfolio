import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaArrowUp } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer(){

const [showTop,setShowTop] = useState(false);

useEffect(()=>{

const handleScroll = () => {

if(window.scrollY > 400){
setShowTop(true);
}else{
setShowTop(false);
}

};

window.addEventListener("scroll",handleScroll);

return ()=> window.removeEventListener("scroll",handleScroll);

},[]);

const scrollToTop = () => {

window.scrollTo({
top:0,
behavior:"smooth"
});

};

return(

<footer className="footer">

<div className="footer-content">

<h3>Kotari Swamy</h3>

<p>Aspiring Software Engineer | Java Developer | Web Developer</p>

<div className="footer-social">

<a href="https://www.linkedin.com/in/kotariswamy85/" target="_blank" rel="noreferrer">
<FaLinkedin/>
</a>

<a href="https://github.com/Swamy85" target="_blank" rel="noreferrer">
<FaGithub/>
</a>

<a href="https://leetcode.com/u/swamyk_85/" target="_blank" rel="noreferrer">
<SiLeetcode/>
</a>

</div>

<p className="footer-copy">
© {new Date().getFullYear()} Kotari Swamy. All Rights Reserved.
</p>

</div>

{showTop && (

<button className="back-to-top" onClick={scrollToTop}>

<FaArrowUp/>

</button>

)}

</footer>

)

}

export default Footer