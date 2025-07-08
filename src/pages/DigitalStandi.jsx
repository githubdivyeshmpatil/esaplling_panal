import React, { useEffect } from 'react'
import AllProducts_data from './AllProducts_data'
import HeroSection1 from '../components/HeroSection1'
import productBg3 from '../assets/images/new_banner.png'
import FooterBanner from '../components/FooterBanner'

function DigitalStandi() {
    useEffect(() => {
    window.scrollTo(0, 0); // Page top pe le jaata hai jab component mount hota hai
  }, []);
  return (
 <div className="text-gray-800">
      {/* Hero Section */}
      <div className="mt-32">
        <HeroSection1 bgImage={productBg3} />
      </div>

      {/* Product Overview with image right side */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
             Digital standee
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Slim LED Boards are crafted for modern businesses that seek high visibility in a
              minimal form. These lightweight, ultra-thin displays provide eye-catching visuals with
              energy-efficient technology, perfect for both indoor and semi-outdoor environments.
            </p>
            <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Super slim profile for a sleek look</li>
              <li>High brightness for better visibility</li>
              <li>Lightweight & easy to install</li>
              <li>Custom size and shape options</li>
              <li>Seamless edge-to-edge design</li>
              <li>Durable aluminum housing</li>
            </ul>
          </div>

          {/* Right: Image or Product Display */}
          <div className="md:w-1/2">
            <AllProducts_data />
          </div>
        </div>
      </section>

      {/* Applications + Technical Specifications Side by Side */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Applications Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Applications</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Retail & Fashion Showrooms</li>
              <li>Airport and Metro Stations</li>
              <li>Hospital Reception Areas</li>
              <li>Corporate Offices</li>
              <li>Hotel Lobbies and Entrances</li>
              <li>Indoor Advertising Panels</li>
            </ul>
          </div>

          {/* Technical Specifications Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Technical Specifications</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Thickness:</strong> As slim as 1.5 cm</li>
              <li><strong>Brightness:</strong> 1000–2500 nits</li>
              <li><strong>Material:</strong> Aluminum Alloy Frame</li>
              <li><strong>Resolution:</strong> Full HD / 4K UHD</li>
              <li><strong>Display Type:</strong> LED / Edge-Lit LED</li>
              <li><strong>Mounting:</strong> Wall-mounted / Hanging</li>
              <li><strong>Power Supply:</strong> AC 100–240V, 50/60Hz</li>
              <li><strong>Custom Sizes:</strong> Available on request</li>
            </ul>
          </div>
        </div>
      </section>
 <div className="mt-20">
        <FooterBanner />
      </div>

      {/* CTA Section (Optional - Add if needed) */}
    </div>  )
}

export default DigitalStandi