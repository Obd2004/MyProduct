import React from 'react'
import './ContactUs.scss'
import insta from './images/insta.png'
import face from './images/facebook.png'
import twit from './images/twitter.png'
import map from './images/map.png'
function ContactUs() {
  return (
    <>
      <section className='contactUs'>
        <div className="contactUs__title">
          <h1>Contact Us</h1>
          <p>Need more detailed information? <br /> Get in touch with us.</p>
          <div className="contactUs__title__imgs">
            <img src={insta} alt="" />
            <img src={face} alt="" />
            <img src={twit} alt="" />
          </div>
        </div>
        <div className="contactUs__map">
          <img src={map} alt="" />
        </div>
        <div className="contactUs__form">
          <h1>Send a message</h1>
          <form action="#">
            <input type="text"  placeholder='Your name'/>
            <input type="email"  placeholder='Your Email' required/>
            <textarea placeholder='Your Message'></textarea>
            <button>Your Message</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactUs