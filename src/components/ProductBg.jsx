import React from 'react'
import bgp from '../assets/images/productbg.jpg'

function ProductBg() {
  return (
    <>
    <div className="relative w-full">
  {/* Background Image */}
  <img
    src={bgp}
    alt="Background"
    className="w-full h-auto object-contain object-top z-0 relative"
  />

  {/* Overlay (Positioned absolutely on top of image) */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>

  {/* Content Section */}
  <div className="absolute inset-0 z-20 flex items-center justify-start px-4 sm:px-8 lg:px-20 py-10 sm:py-20">
    <div className="max-w-xl text-white">
      {/* <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        <span className="block">Future of Collaboration</span>
        <span className="block">and Conferencing Solution</span>
      </h1> */}

      {/* <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
        Easy display for every room type
      </p> */}

      {/* <button
        className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-[#09c] text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Know More
      </button> */}
    </div>
  </div>
</div>
    </>
  )
}

export default ProductBg