import React, { useState, useEffect } from "react";
import {
FaArrowUp,
FaWhatsapp,
FaTelegram,
FaFacebook,
FaInstagram,
FaTwitter
} from "react-icons/fa";



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

<div className="footer-container">

{/* LEFT SIDE */}

<div className="footer-left">

<h3>Kotari Swamy</h3>

<p>Aspiring Software Engineer | Java Developer | Web Developer</p>

<p className="footer-copy">
© {new Date().getFullYear()} Kotari Swamy. All Rights Reserved.
</p>

</div>


{/* RIGHT SIDE */}

<div className="footer-right">

<h4>Connect With Me</h4>

<div className="footer-social">





<a href="https://wa.me/918341929472" target="_blank" rel="noreferrer">
<FaWhatsapp/>
</a>

<a href="https://t.me/swamyk_85" target="_blank" rel="noreferrer">
<FaTelegram/>
</a>

<a href="https://www.instagram.com/kotariswamyorg/" target="_blank" rel="noreferrer">
<FaInstagram/>
</a>

<a href="https://www.facebook.com/swamy.kotari.50/" target="_blank" rel="noreferrer">
<FaFacebook/>
</a>

<a href="https://x.com/kotariswamyorg" target="_blank" rel="noreferrer">
<FaTwitter/>
</a>

</div>

</div>

</div>


{showTop && (

<button className="back-to-top" onClick={scrollToTop}>

<FaArrowUp/>

</button>

)}

</footer>

)

}

export default Footer;
