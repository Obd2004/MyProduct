import React from 'react'
import './Clients.scss'
import star from './images/star.png'
import person1 from './images/person1.png'
import person2 from './images/person2.png'
import person3 from './images/person3.png'
import product from './images/product.png'
function Clients() {
  return (
    <>
      <section className='clients'>
        <div className="clients__title">
          <h1>What Clients Say</h1>
          <p>Problems trying to resolve the conflict between  <br />the two major realms of Classical physics: Newtonian mechanics </p>

        </div>
        <div className="clients__cards">
          <div className="clients__cards-1">
            <img src={star} alt="" />
            <p>Product helps you see how many <br />more days you need to work to <br />reach your financial goal.</p>
            <ul>
              <li>
                <img src={person1} alt="" />
              </li>
              <li>
                <p>Wahid Ari <br /> <span>Designer</span></p>
              </li>
            </ul>
          </div>
          <div className="clients__cards-2">
            <img src={star} alt="" />
            <p>Product helps you see how many <br />more days you need to work to <br />reach your financial goal.</p>
            <ul>
              <li>
                <img src={person2} alt="" />
              </li>
              <li>
                <p>Wahid Ari <br /> <span>Designer</span></p>
              </li>
            </ul>
           </div>
          <div className="clients__cards-3  ">
          <img src={star} alt="" />
            <p>Product helps you see how many <br />more days you need to work to <br />reach your financial goal.</p>
            <ul>
              <li>
                <img src={person3} alt="" />
              </li>
              <li>
                <p>Wahid Ari <br /> <span>Designer</span></p>
              </li>
            </ul>
          </div>
        </div>
        <div className="clients__product">
          <div className="clients__product__left">
            <h1>Join 100 Compannies who <br /> boost their business with <br /> Product</h1>
            <button>Get This</button>
          </div>
          <div className="clients__product__right">
            <img src={product} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Clients