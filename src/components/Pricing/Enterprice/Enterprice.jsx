import React from 'react'
import './Enterprice.scss'
import amico from './images/amico.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
function Enterprice() {
  return (
    <>
      <section className='enterprice'>
        <div className="enterprice__title">
          <h4>ENTERPRISE</h4>
          <h2>Are you interested  in a custom-tailored plan?</h2>
          <p>Product is a set of advanced features for really large teams with projects.</p>
          <button>Get in touch with us</button>
        </div>
        <div className="enterprice__product">
          <div className="enterprice__product__title">
            <h1>Product is being used with great effects alongside:</h1>
          </div>
          <div className="enterprice__product__all">
            <div className="enterprice__product__all__left">
              <img src={amico} alt="" />
            </div>  
            <div className="enterprice__product__all__right">
              <ul>
                <li>
                  <h4><img src={icon4} alt="" /> Enterpreneur</h4>
                  <p>Product is a great way to help medium and samall enterprise <br /> owners achieve their goals</p>
                </li>
                <li>
                  <h4><img src={icon2} alt="" /> Accountants</h4>
                  <p>Whether you are working on contract with clients, or on other key <br /> accounting documents, Product is for you</p>
                </li>
                <li>
                  <h4><img src={icon3} alt="" /> Universities</h4>
                  <p>Organize university projects and have documents easily <br /> graded online with Product</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Enterprice