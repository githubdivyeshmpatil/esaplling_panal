import React from 'react'
import HeroSection1 from './HeroSection1'
import productBg from '../assets/images/lcdbg.jpg'
import Footer from './Footer'
import LedVideoWallOutdoorSection from './LedVideoWallIndoorSection'
import ProductImage from './ProductImage'
import ContactSection from './ContactSection'
import LedVideoWallIndoorSection from './LedVideoWallIndoorWSection'


function Led_indoor() {
  return (
       <div className="mt-32">
  <HeroSection1 bgImage={productBg}/>
<LedVideoWallIndoorSection/>
        <section className="bg-gradient-to-b from-gray-300 via-gray-100 to-white py-12 px-6">
          <ProductImage />
        </section>
        <ContactSection/>
        
      </div>
  )
}

export default Led_indoor