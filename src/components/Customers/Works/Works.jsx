import React from 'react'
import './Works.scss'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import mac1 from './images/mac1.png'
import mac2 from './images/mac2.png'
import mac3 from './images/mac3.png'
function Works() {
  return (
    <>
      <section className='works'>
        <div className="works__title">
          <h1>Why Choose Product?</h1>
        </div>
        <div className="works__cards">
          <ul className='works__cards__list'>
            <li>
              <img src={icon1} alt="" />
              <h4>Special Business</h4>
              <p>Product helps you see how many <br /> more days you need to work  <br /> to reach your financial goal  <br /> for the month and year.</p>
            </li>
            <li>
              <img src={icon2} alt="" />
              <h4>Instant Result</h4>
              <p>Product helps you see how many <br /> more days you need to work  <br /> to reach your financial goal  <br /> for the month and year.</p>

            </li>
            <li>
              <img src={icon3} alt="" />
              <h4>Fastest way to organize</h4>
              <p>Product helps you see how many <br /> more days you need to work  <br /> to reach your financial goal  <br /> for the month and year.</p>
            </li>
          </ul>
        </div>
        <div className="works__product">
          <div className="works__product__title">
            <h1>How Product Work?</h1>
          </div>
          <div className="works__product__apply-1">
            <div className="works__product__apply-1_left">
              <img src={mac1} alt="" />
            </div>
            <div className="works__product__apply-1_right">
              <h6>STEP 3</h6>
              <h4>Completion</h4>
              <p>Product will continue to liase between borrower and <br /> manager to procees and <br /> complete a quick and efficient settlement</p>
              </div>
          </div>
          <div className="works__product__apply-2">
            <div className="works__product__apply-2_left">
              <h6>STEP 2 </h6>
              <h4>Pay fully refundable</h4>
              <p>Product will contactting you instantly to receive <br /> payment of the Application Fee. if no offer of product is <br /> available, your fee will be fully refunded.</p>
            </div>
            <div className="works__product__apply-2_right">
                <img src={mac2} alt="" />
            </div>
          </div>
          <div className="works__product__apply-3">
            <div className="works__product__apply-3_left">
              <img src={mac3} alt="" />
            </div>
            <div className="works__product__apply-3_right">
              <h6>STEP 3</h6>
              <h4>Completion</h4>
              <p>Product will continue to liase between borrower and <br /> manager to procees and <br /> complete a quick and efficient settlement</p>
            </div>
          </div>
          <div className="works__product__btn">
            <button>Get in touch with us</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Works