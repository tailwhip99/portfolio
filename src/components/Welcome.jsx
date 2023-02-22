import React from 'react'
import '../styles/Body.scss'
import '../styles/Welcome.scss'
const Welcome = () => {
    return (
        <div  id="welcome" className="welcome">
            <div className="welcome-text-container">
   <h1   className="welcome-text">Hey! I'm <i>Melczer Olivér</i>, a rookie web developer.</h1>
  </div>
   <p className="scroll-down">(scroll down)</p>
   </div>
    )
}

export default Welcome