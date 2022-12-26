import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.scss'
import Icon from './images/WatchIcon.png'
import img1 from './images/amico.png'
function Hero() {
  return (
    <>
      <section className='homeHero'>
        <div className="homeHero__wrapper">
        <div className="homeHero__wrapper-left">
        <img src={img1} alt="" />
          <div className="homeHer__wrapper-left-text">
            <h1>Work  at the speed <br /> of thought</h1>
            <p>Tools, tutorials, design and innovation experts, all <br /> in one place! The most intuitive way to imagine <br /> your next user experience.</p>
          </div>
            <div className="homeHero__wrapper-left-btns">
              <button className='left_btn1'>Get started</button>
              <button className='left_btn2'><Link><img src={Icon} alt="" /> Watch the Video</Link></button>
            </div>
        </div>
        <div className="homeHero__wrapper-right">
          <img src={img1} alt="" />
        </div>
        </div>
      </section>
    </>
  )
}

export default Hero