import React from 'react'
import DigitalSignage from './DigitalSignage'
import FooterBanner from '../components/FooterBanner'
import Footer from '../components/Footer'

function Signage() {
  return (
    <>
  <DigitalSignage/>
 <div className="mt-20">
        <FooterBanner />
      </div>
      <Footer/>
  </>
  )
}

export default Signage