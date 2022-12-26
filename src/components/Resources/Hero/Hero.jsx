import React from 'react'
import './Hero.scss'
import logo from './images/logo.png'
import heroRight from './images/heroRight.png'
function Hero() {
  return (
    <section className='hero'>
      <div className="hero__intro">
        <div className="hero__intro__left">
          <h1>Great Business <br /> made with Product.</h1>
          <p>Build better customer relationships easily messaging <br /> that provides a more personal experience for you and <br /> your customers.</p>
          <input type="text" placeholder='Enter your email adress'/>
          <br />
          <img src={logo} alt="" />
        </div>
        <div className="hero__intro__right">
          <img src={heroRight} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero