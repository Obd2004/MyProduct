import React from 'react'
import './PriceTable.scss'
function PriceTable() {
  return (
  <>
    <section className='PriceTable'>
      <div className="PriceTable__title">
        <h1>Price Table</h1>
        <p>We offer competitive price</p>
      </div>
      <div className="PriceTable__cards">
        <ul className="PriceTable__cards__list">
          <li className="PriceTable__cards__list-1">
            <h5>Free</h5>
            <p>Brief price description</p>
            <ul className='PriceTable__cards__list-1-price'>
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
          <li className="PriceTable__cards__list-1">
            <h5>Standard</h5>
            <p>Brief price description</p>
            <ul className='PriceTable__cards__list-1-price'>
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
          <li className="PriceTable__cards__list-1">
            <h5>Premium</h5>
            <p>Brief price description</p>
            <ul className='PriceTable__cards__list-1-price'>
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

export default PriceTable