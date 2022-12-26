import React from 'react'
import './Questions.scss'
import plusImg from './images/plus.png'
import project from './images/project.png'
function Questions() {
  return (
    <>
      <section className='questions'>
        <div className="questions__title">
          <h1>Frequently asked question</h1>
          <p>Something is not clear? You need help? Check our FAQ section</p>
        </div>
        <ul className='questions__lines'>
          <li>
            <img src={plusImg} alt="" />
            <p>What are my payment option?</p>

          </li>
          <li>
            <img src={plusImg} alt="" />
            <p>How can I invite collaborator to platform?</p>
          </li>
          <li>
            <img src={plusImg} alt="" />
            <p>Can I upgrade my plan?</p>
          </li>
          <li>
            <img src={plusImg} alt="" />
            <p>Can I cancel my plan at anytime?</p>
          </li>
        </ul>
        <div className="questions__product">
          <div className="questions__product__left">
            <h1>Join 100 Compannies who <br /> boost their business with <br /> Product</h1>
            <button>Get This</button>
          </div>
          <div className="questions__product__right">
            <img src={project} alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Questions