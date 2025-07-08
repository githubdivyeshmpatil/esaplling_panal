import React from 'react'
import HeroSection1 from './HeroSection1'
import LedVideoWallOutdoorSection from './LedVideoWallIndoorSection'
import ProductImage from './ProductImage'
import ContactSection from './ContactSection'
import productBg from '../assets/images/footerB.png'
import Footer from './Footer'

function Led_outdoor() {
  return (
     <div className="mt-32">
  <HeroSection1 bgImage={productBg}/>
<LedVideoWallOutdoorSection/>
        <section className="bg-gradient-to-b from-gray-300 via-gray-100 to-white py-12 px-6">
          <ProductImage />
        </section>
        <ContactSection/>
      
      </div>
  )
}

export default Led_outdoor