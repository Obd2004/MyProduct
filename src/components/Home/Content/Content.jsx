import React from 'react'
import './Content.scss'
import img1 from './images/image1.png'
import img2 from './images/image2.png'
import img3 from './images/image3.png'
function Content() {
  return (
    <>
        <section className='content'>
            <div className="content__title">
                <h1>Contents Strategies</h1>
                <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
            </div>
            <div className="content__cards">
                <ul className='content__cards__list'>
                    <li>
                        <img src={img1} alt="" />
                        <p>By <span>Wahid Ari |</span>  03 March 2019</p>
                        <h3>Increasing Prosperity With Positive Thinking</h3>
                    </li>
                    <li>
                        <img src={img2} alt="" />
                        <p>By <span>Wahid Ari |</span>  03 March 2019</p>
                        <h3>Motivation Is The First Step To Success</h3>
                    </li>
                    <li>
                        <img src={img3} alt="" />
                        <p>By <span>Wahid Ari |</span>  03 March 2019</p>
                        <h3>Success Steps For Your Personal Or Business</h3>
                    </li>
                </ul>
            </div>
        </section>
    </>
  )
}

export default Content