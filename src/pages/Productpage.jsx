import React, { useEffect } from 'react'
import ProductBg from '../components/ProductBg'
import ProductImage from '../components/ProductImage'
import PropsHeading from '../components/PropsHeading'
import ExploreCarouselProduct from '../components/ExploreCarouselProduct'
import ConfidenceSection from '../components/ConfidenceSection'
import FooterBanner from '../components/FooterBanner'

function Productpage() {
    useEffect(() => {
    window.scrollTo(0, 0); // Page top pe le jaata hai jab component mount hota hai
  }, []);
  return (
    <>
      {/* Hero Section */}
      <div className="mt-32">
        <ProductBg />
        <section className="bg-gradient-to-b from-gray-300 via-gray-100 to-white py-12 px-6">
          <ProductImage />
        </section>
      </div>

      {/* Props Heading */}
      <div className="mt-16">
        <PropsHeading title="Start where you work" />
      </div>

      {/* Carousel Section */}
      <div className="mt-12">
        <ExploreCarouselProduct />
      </div>

      {/* Confidence Section */}
      <div className="mt-16">
        <ConfidenceSection />
      </div>

      {/* Footer Banner */}
      <div className="mt-20">
        <FooterBanner />
      </div>

      {/* Footer */}
    
    </>
  );
}

export default Productpage;
