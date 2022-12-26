import React from 'react'
import Enterprice from '../../components/Pricing/Enterprice/Enterprice'
import Hero from '../../components/Pricing/Hero/Hero'
import Questions from '../../components/Pricing/Questions/Questions'
import './Pricing.scss'
function Pricing() {
  return (
    <div className='container'>
        <Hero/>
        <Enterprice/>
        <Questions/>
    </div>
  )
}

export default Pricing