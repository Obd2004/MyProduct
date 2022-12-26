import React from 'react'
import './Business.scss'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import product from './images/screen.png'
function Business() {
  return (
    <>
      <section className='business'>
        <div className="business__title">
          <h1>Join thousand of other who have <br /> already received offers</h1>
        </div>
        <div className="business__cards">
          <div className="business__cards__left">
            <img src={img1} alt="" />
            <h4>Business</h4>
            <h5>Cash Flow <br /> Asset Backed <br /> Receivables Finance</h5>
            <h3>Find the best business product</h3>
          </div>
          <div className="business__cards__right">
          <img src={img2} alt="" />
            <h4>Enterprise</h4>
            <h5>Site Acquisition <br /> Bridge  <br /> Development Financing</h5>
            <h3>Find the best business product</h3>
          </div>
        </div>
        <div className="business__product">
          <div className="business__product__left">
            <h1>Join 100 Compannies who <br /> boost their business with <br /> Product</h1>
            <button>Get This</button>
          </div>
          <div className="business__product__right">
            <img src={product} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Business