
import './App.scss';
import './styles/Header.scss'
import React from 'react';
import { useEffect } from 'react';
import image2 from './images/image2.png'
import AOS from 'aos';
import 'aos/dist/aos.css';



import Welcome from './components/Welcome';
import About from './components/About';
import Projects from './components/Projects';
import Contacts from './components/Contact';


import AnchorLink from "react-anchor-link-smooth-scroll";


 
function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="App">
        <div className="header">
        <img className="logo" src={image2} alt="" />
        <div className="menu">
          <AnchorLink className="link" href='#welcome'><p>Home</p></AnchorLink> 
          <AnchorLink className="link" href='#about'><p >About</p></AnchorLink> 
            <AnchorLink  className="link" href='#projects'><p>Projects</p></AnchorLink>
        </div>
        </div>
        <div className="body">
        
        
<Welcome/>
<About />
<Projects />
<Contacts />
</div>
    </div>
  );
}

export default App;
