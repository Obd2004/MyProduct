import React from 'react'
import './Hero.scss'
function Hero() {
  return (
    <>
      <section className='hero'>
        <div className="hero__title">
          <h4>PRICING</h4>
          <h2>Let’s get some real work done here.</h2>
          <p>Prodict is your perfect solution for working. Get started now for free</p>
        </div>
        <div className="hero__cards">
          <ul className="PriceTable__cards__list">
            <li className="hero__cards__list-1">
              <h5>Free</h5>
              <p>Brief price description</p>
              <ul className='hero__cards__list-1-price'>
                <li>
                  <h1>0</h1>
                </li>
                <li>
                  <p>$ <br /> <span>Per / month</span></p>
                </li>
              </ul>
              <h4>Only 2 Op erators <br /> <br /> Notifications <br /> <br /> Landing Pages</h4>
              <button>Order Now</button>
            </li>
            <li className="hero__cards__list-1">
              <h5>Standard</h5>
              <p>Brief price description</p>
              <ul className='hero__cards__list-1-price'>
              <li>
                  <h1>5</h1>
                </li>
                <li>
                  <p>$ <br /> <span>Per / month</span></p>
                </li>
              </ul>
              <h4>5+ Operators <br /> <br /> Notifications <br /> <br /> Landing Pages </h4>
              <button>Order Now</button>
            </li>
            <li className="hero__cards__list-1">
              <h5>Premium</h5>
              <p>Brief price description</p>
              <ul className='hero__cards__list-1-price'>
              <li>
                  <h1>10</h1>
                </li>
                <li>
                  <p>$ <br /> <span>Per / month</span></p>
                </li>
              </ul>
              <h4>10+ Operators <br /> <br /> Notifications <br /> <br /> Landing Pages</h4>
              <button>Order Now</button>

            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Hero