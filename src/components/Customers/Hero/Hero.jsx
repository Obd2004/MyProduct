import React from 'react'
import './Hero.scss'
import logos from './images/Logos.png'
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__title">
          <h1>Our Clients</h1>
          <img src={logos} alt="" />
        </div>
      </div>
    </>
  )
}

export default Hero