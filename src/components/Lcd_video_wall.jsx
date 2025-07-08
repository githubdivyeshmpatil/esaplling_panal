import React from 'react'
import ProductImage from './ProductImage'
import HeroSection1 from './HeroSection1'
import productBg from '../assets/images/lcdbg.jpg'
import LcdVideoWallSection from './LcdVideoWallSection'
import ContactSection from './ContactSection'
import Footer from './Footer'

function Lcd_video_wall() {
  return (
    <div className="mt-32">
  <HeroSection1 bgImage={productBg}/>
  <LcdVideoWallSection/>
        <section className="bg-gradient-to-b from-gray-300 via-gray-100 to-white py-12 px-6">
          <ProductImage />
        </section>
        <ContactSection/>
       
      </div>
  )
}

export default Lcd_video_wall