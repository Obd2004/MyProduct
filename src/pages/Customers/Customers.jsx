import React from 'react'
import Business from '../../components/Customers/Business/Business'
import Hero from '../../components/Customers/Hero/Hero'
import Product from '../../components/Customers/Product/Product'
import Works from '../../components/Customers/Works/Works'
import './Customers.scss'
function Customers() {
  return (
    <div className='container'>
        <Hero/>
        <Product/>
        <Works/>
        <Business/>
    </div>
  )
}

export default Customers