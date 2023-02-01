import React from "react";
import image1 from "../images/image1.jpeg";
import '../styles/Body.scss'


import "../styles/About.scss"
const About = () => {
    return (
        <div  id="about" className="about">
        <div className="first-line" data-aos="fade-in" duration="10">
           <div className="about-title">
           <img className="about-image" src={image1} alt=""  />

           </div>
           <div className="paragraph"  >
           <p> Hi, I'm Oliver a 20 year old self-taught web dev.</p>
          <p>My journey started off in the summer of 2022 , when i was looking for a new hobby to learn..</p>
          <p>Since then i have become more and more interested in web development and made several projects to practice my web skills.  </p>
         
         
           </div>
         
           </div>
           
           <div data-aos="fade-in" duration="1000" className="technologies">
         <h1>Some technologies I use for my projects:</h1>
         <div className="images">

         <a 
         href="https://en.wikipedia.org/wiki/HTML" 
         rel="noreferrer"  
         target="_blank">
        <img src="https://icon-library.com/images/html5-icon/html5-icon-13.jpg" alt=" "/>
        </a>

         <a
          href="https://en.wikipedia.org/wiki/CSS"
           rel="noreferrer"
          target="_blank">
          <img src="https://img-resize-cdn.joshmartin.ch/768x0%2Cc3537b9f46b5f6055fbc8b4cd03b6b2cc63fc2eefd3d8cd9f0c9f99a5933e496/https://joshmartin.ch/app/uploads/2017/10/css3.svg" alt=" "/>
          </a>

          <a
          href="https://en.wikipedia.org/wiki/JavaScript"
           rel="noreferrer"
          target="_blank">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt=" "/>
         </a>

         <a
          href="https://reactjs.org/"
           rel="noreferrer"
          target="_blank">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt=" "/>
         </a>

         <a
          href="https://git-scm.com/"
           rel="noreferrer"
          target="_blank">
         <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" />
         </a>

           <a
          href="https://www.npmjs.com/"
           rel="noreferrer"
          target="_blank">
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="" />
         </a>

         <a
          href="https://firebase.google.com/"
           rel="noreferrer"
          target="_blank">
         <img src="https://cdn.cdnlogo.com/logos/f/48/firebase.svg" alt="" />
           </a>
           
           </div>
         </div>
           
          </div>
    )
}

export default About