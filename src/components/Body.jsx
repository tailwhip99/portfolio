import React , {useEffect} from 'react'
import '../styles/Body.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

import Welcome from './Welcome.jsx'
import About from './About.jsx'
import Projects from './Projects.jsx'
import Contacts from './Contact.jsx'
const Body = () => {

  useEffect(() => {
    AOS.init();
  }, [])

return (
    <div className="body">
        <Welcome id="welcome" />
<About id="about" />

<Projects />
 
  

 
<Contacts />
</div>
)
}

export default Body