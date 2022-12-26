import React from 'react'
import './Services.scss'
import right from './images/amico.png'
import left from './images/amico2.png'
import colobrativeRight from './images/amico3.png'
import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
function Services() {
  return (
    <>
      <section className="services">
        <div className="services__managment">
          <div className="services__managment__left">
            <h4>Effortless Validation for <br /> <span>Management</span></h4>

            <h5 className='serH5'>Accessory makers</h5>
            <p>While most people enjoy casino gambling, sports betting, <br /> lottery and bingo playing for the fun</p>
            <h5 className='serH5-2'>Alterationists</h5>
            <p>If you are looking for a new way to promote your business <br /> that won’t cost you more money, </p>
          </div>
          <div className="services__managment__right">
            <img src={right} alt="" />
          </div>
        </div>
        <div className="services__customer">
          <div className="services__customer-left">
            <img src={left} alt="" />
          </div>
          <div className="services__customer-right">
            <div className="services__customer-right_text">
              <h5>Easier decision making for <br /> <span>Customer Support</span></h5>
              <p>The Myspace page defines the individual, his or her <br /> characteristics, traits, personal choices and the overall <br /> personality of the person. </p>
            </div>
            <ul className="services__customer-right_list">
              <li>
                <img src={icon1} alt="" />
                <p>Never worry about overpaying for your <br /> energy again. </p>
              </li>
              <li>
                <img src={icon2} alt="" />
                <p>We will only switch you to energy companies <br /> that we trust and will treat you right</p>
              </li>
              <li>
                <img src={icon3} alt="" />
                <p>We track the markets daily and know where the <br /> savings are.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="services__collaborative">
          <div className="services__collaborative_left">
            <h5>Optimisation for <br /> <span>Collaborative</span></h5> 
            <p className='collP'>Few would argue that, despite the advancements of <br /> feminism over the past three decades, women still face a <br /> double standard when it comes to their behavior. </p>
            <h4 className='collH4'>Accessory makers</h4>
            <p>While most people enjoy casino gambling, sports betting, <br /> lottery and bingo playing for the fun</p>
            <h4>Alterationists</h4>
            <p>If you are looking for a new way to promote your business <br /> that won’t cost you more money, </p>
          </div>
          <div className="services__collaborative_right">
            <img src={colobrativeRight} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Services