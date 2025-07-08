import React from 'react'
import HeroSection1 from './HeroSection1'
import productBg from "../assets/images/come.png";
import ProductImage from './ProductImage'
import ContactSection from './ContactSection'
import Footer from './Footer'
import LedCommercialDisplaySection from './LedCommercialDisplaySection'

function Led_Commercial() {
  return (
    <div className="mt-32">
  <HeroSection1 bgImage={productBg}/>
<LedCommercialDisplaySection/>
        <section className="bg-gradient-to-b from-gray-300 via-gray-100 to-white py-12 px-6">
          <ProductImage />
        </section>
        <ContactSection/>
    
      </div>
  )
}

export default Led_Commercial