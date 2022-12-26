import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from './images/logo.png'
import Logo2 from './images/logo2.png'
function Header() {
  return (
    <div className='header'>
        <div className="container">
          <div className="header__wrapper">
            <div className="header__wrapper_logo">
              <img src={Logo} alt="" />
            </div>
            <ul className='header__wrapper__list'>
              <li>
                <Link to='/'>Product</Link>
              </li>
              <li>
                <Link to='/pricing'>Pricing</Link>
              </li>
              <li>
                <Link to='/customers'>Customers</Link>
              </li>
              <li>
                <Link to='/resources'>Resources</Link>
              </li>
            </ul>
            <div className="header__wrapper__btns">
              <button className='header__wrapper__btns-btn1'>Sign In</button>
              <button className='header__wrapper__btns-btn2'>Sign Up</button>
              <img src={Logo2} alt="" />
              <i class="hamburger_icon bi bi-list"></i>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Header