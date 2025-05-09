import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import WorkSlap from './Component/WorkSlap'
import OurService from './Component/OurService'
import SocialPost from './Component/SocialPost'
import FAQ from './Component/FAQ'
import Pricing from './Component/Pricing'

const App = () => {
  return (
    <div className=''>
        <Navbar/>
        <Hero/>
        <WorkSlap/>
        <OurService/>
        <SocialPost/>
        <Pricing/>
        <FAQ/>
    </div>
  )
}

export default App