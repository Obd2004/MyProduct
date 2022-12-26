import React from 'react'
import './Footer.scss'
import logo2 from './images/logo2.png'
function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footer__list">
            <div className="footer__list__text1">
              <img src={logo2} alt="" />
            </div>
            <div className="footer__list__text2">
              <h3>Resource</h3>
                <a href="/">About Us  <br /> <br />  Blog <br /> <br /> Contact <br /> <br /> FAQ</a>
              </div>
              <div className="footer__list__text3">
              <h3>Legal Stuff</h3>
                <a href="/">Disclaimer<br /> <br /> Financing <br /> <br />   Privacy Policy <br /> <br />  Terms of Service </a>
              </div>
              <div className="footer__list__text4">
              <h3>knowing you're always on <br /> the best energy deal. </h3>
              <input type="text" /> 
              <br />
              <button>Sign up Now</button>
              </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer