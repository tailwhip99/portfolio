import React from "react";
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import 'aos/dist/aos.css';

import "../styles/Body.scss"
import "../styles/Projects.scss"
const Projects = () => {
    return (
        <div id="projects" className="projects">

        <div className="projects-title">
          <h1>Some of my latest projects...</h1>
          </div>
      
         <div className="project-images">
          <div className="project-left"  data-aos="zoom-in" data-aos-easing="ease-in-slide"   data-aos-duration="500">
      
          <div className="image">
            <h1 >Oliver's cocktail bar</h1>
         <img src={image3}  alt="" />
         
         <p>Made with React</p>
         
         </div>
      
         <div data-aos="fade-in" data-aos-easing="ease-in-slide"   data-aos-duration="2000" className="description">
         <h2>E-commerce site</h2>
         <p>Simple e-commerce site made with React. Hooks and routers were used for this project. Backend is under development atm.  </p>
       
         <div className="btns">
        <button  > <a className="link" href="https://github.com/tailwhip99/ecommerce" 
         rel="noreferrer"
          target="_blank"
          > Code</a></button>
          <button><a href="https://tailwhip99.github.io/ecommerce/" 
         rel="noreferrer"
          target="_blank"
          >Preview</a></button>
          </div>
         </div>
      
         </div>
      
         <div className="project-right" data-aos="zoom-in" data-aos-easing="ease-in-slide"  data-aos-duration="500">
      
          <div className="image">
          <h1 >Oliver's site</h1>
         <img src={image4} alt="" />
         <p>Made with React with Firebase & SASS</p>
         </div>
        <div className="description" data-aos="fade-in" data-aos-easing="ease-in-slide"  data-aos-duration="2000">
        <h2>Social media site (Beta)</h2>
         <p>Social media site made with React (frontend) and Firebase (backend).</p>
      
         <div className="btns">
         <button><a href="https://github.com/tailwhip99/social_media_site" 
         rel="noreferrer"
          target="_blank"
          >Code </a></button>
         
          <button><a href="https://tailwhip99.github.io/social_media_site/" 
         rel="noreferrer"
          target="_blank"
          >Preview</a></button>
          </div>
         </div>
         </div>
      
      
         <div className="project-left" data-aos="zoom-in" data-aos-easing="ease-in-slide"   data-aos-duration="500" >
         <div className="image" >
         <h1 >CV Creator</h1>
          <img src={image5} alt="" />
          <p>Made with React</p>
          </div>
          <div className="description" data-aos="fade-in" data-aos-easing="ease-in-slide"  data-aos-duration="2000">
            <h2>CV Creator</h2>
          <p>CV creator app made with React using class components & states!</p>
          <div className="btns">

         
          <button> <a  href="https://github.com/tailwhip99/CV_Project" 
         rel="noreferrer"
          target="_blank"
          > Code</a></button>
        
          <button>  <a  href="https://tailwhip99.github.io/CV_Project/" 
         rel="noreferrer"
          target="_blank"
          >Preview</a></button>
          
          </div>
          </div>
          </div>
      
          </div>
          </div>
    )
}

export default Projects