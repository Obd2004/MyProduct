import React from 'react'
import ContactUs from '../../components/Resources/ContactUs/ContactUs'
import Hero from '../../components/Resources/Hero/Hero'
import LatestStories from '../../components/Resources/LatestStories/LatestStories'
import './Resources.scss'
function Resources() {
  return (
    <div className='container'>
        <Hero/>
        <LatestStories/>
        <ContactUs/>
    </div>
  )
}

export default Resources