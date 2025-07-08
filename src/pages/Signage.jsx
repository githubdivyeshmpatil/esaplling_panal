import React, { useEffect } from 'react'
import DigitalSignage from './DigitalSignage'
import FooterBanner from '../components/FooterBanner'
import Footer from '../components/Footer'

function Signage() {
    useEffect(() => {
    window.scrollTo(0, 0); // Page top pe le jaata hai jab component mount hota hai
  }, []);
  return (
    <>
  <DigitalSignage/>
 <div className="mt-20">
        <FooterBanner />
      </div>
    
  </>
  )
}

export default Signage