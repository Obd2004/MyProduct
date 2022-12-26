import React from 'react'
import './LatestStories.scss'
import img1 from './images/img1.png'
import img2 from './images/img2.png'
import img3 from './images/img3.png'
import img4 from './images/img4.png'
import img5 from './images/img5.png'
import img6 from './images/img6.png'
function LatestStories() {
  return (
    <>
      <section className='LatestStories'>
        <div className="LatestStories__title">
          <h1>Latest Stories</h1>
          <p>We focus on ergonomics and meeting you where you work. It's only a keystroke away. </p>
        </div>
        <div className="LatestStories__cards">
                <ul className='LatestStories__cards__list-1'>
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
                <ul className='LatestStories__cards__list-2'>
                    <li>
                        <img src={img4} alt="" />
                        <p>By <span>Wahid Ari |</span>  03 March 2019</p>
                        <h3>Increasing Prosperity With Positive Thinking</h3>
                    </li>
                    <li>
                        <img src={img5} alt="" />
                        <p>By <span>Wahid Ari |</span>  03 March 2019</p>
                        <h3>Motivation Is The First Step To Success</h3>
                    </li>
                    <li>
                        <img src={img6} alt="" />
                        <p>By <span>Wahid Ari |</span>  03 March 2019</p>
                        <h3>Success Steps For Your Personal Or Business</h3>
                    </li>
                </ul>
            </div>
      </section>
    </>
  )
}

export default LatestStories