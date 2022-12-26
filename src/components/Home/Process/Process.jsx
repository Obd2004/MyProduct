import React from 'react'
import './Process.scss'
import avatar1 from './Images/Avator1.png'
import avatar2 from './Images/Avator2.png'
import avatar3 from './Images/Avator3.png'
import avatar4 from './Images/Avator4.png'

function Process() {
  return (
    <>
      <section className='process'>
        <div className="process__title">
          <h1>Quick & Easy Process</h1>
          <p>Do you require some help for your project: Conception workshop, <br /> prototyping, marketing strategy, landing page, Ux/UI?</p>
        </div>
        <div className="process__comments">
          <div className="process__comments_left">
            <ul className="process__comments_left-1">
              <img src={avatar1} alt="" />
              <p>I can take care of your pitch</p>
            </ul>
            <ul className="process__comments_left-2">
            <p>I can design you website</p>
            <img src={avatar2} alt="" />
            </ul>
          </div>
          <div className="process__comments_right">
              <ul className="process__comments_right-1">
                  <p>I can prototype your app</p>
                  <img src={avatar3} alt="" />
              </ul>
              <ul className="process__comments_right-2">
              <img src={avatar4} alt="" />
              <p>I can help marketing strategy</p>
              </ul>
            </div>
        </div>
        <div className="process__btn">
          <button>Contact our expert</button>
        </div>
      </section>
    </>
  )
}

export default Process