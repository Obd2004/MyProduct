import React from 'react'
import Clients from '../../components/Home/Clients/Clients'
import Content from '../../components/Home/Content/Content'
import Hero from '../../components/Home/Hero/Hero'
import PriceTable from '../../components/Home/PriceTable/PriceTable'
import Process from '../../components/Home/Process/Process'
import Product from '../../components/Home/Product/Product'
import Services from '../../components/Home/Services/Services'
import './Home.scss'
function Home() {
  return (
    <div className='container'>
        <Hero/>
        <Product/>
        <Services/>
        <Process/>
        <Content/>
        <PriceTable/>
        <Clients/>
    </div>
  )
}

export default Home