import React from 'react'
import './Product.scss'
import icon1 from './Images/icon1.png'
import icon2 from './Images/icon2.png'
import icon3 from './Images/icon3.png'
import icon4 from './Images/icon4.png'
function Product() {
  return (
    <>
      <section className='product'>
        <div className="product__title">
          <h1>Product  was Built Specifically <br /> for You</h1>
        </div>
        <ul className="product__cards">
          <li>
            <img src={icon1} alt="" />
            <h4>First click tests</h4>
            <p>While most people enjoy <br /> casino gambling,</p>
          </li>
          <li>
            <img src={icon2} alt="" />
            <h4>Design surveys</h4>
            <p>Sports betting, lottery and <br /> bingo playing for the fun</p>
          </li>
          <li>
            <img src={icon3} alt="" />
            <h4>Preference tests</h4>
            <p>The Myspace page defines <br /> the individual.</p>
          </li>
          <li>
            <img src={icon4} alt="" />
            <h4>Five second tests</h4>
            <p>Personal choices and the <br /> overall personality of the <br /> person. </p>
          </li>
        </ul>
        <div className="product__btns">
          <button>SIGN UP NOW</button>
        </div>
      </section>
    </>
  )
}

export default Product