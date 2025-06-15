import React from 'react'
import HeroSection from '../components/HeroSection'
import bg2 from '../assets/images/bg2.png'
import bg3 from '../assets/images/new_banner.png'
import bg4 from '../assets/images/banner3.png'
import Heading from '../components/Heading'
import ExploreSection from '../components/ExploreSection'
import ExploreCarousel from '../components/ExploreCarousel'
import KeyFeaturesSection from '../components/KeyFeaturesSection'
import Footer from '../components/Footer'
import StatsCounter from '../components/StatsCounter'

function Home() {
  return (
    <>  <div className="font-sans ">
      <HeroSection />
<StatsCounter/>      {/* Responsive Section */}

     <div className="flex flex-row-reverse  w-full h-auto md:h-[80vh]">
  {/* Right Image Section (More Width on desktop) */}
  <div className="relative w-1/2 md:w-2/3 h-60 md:h-full">
    <img
      src={bg2}
      alt="Background"
      className="w-full h-full object-cover"
    />
    {/* Overlay Color */}
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
  </div>

  {/* Left Content Section */}
  <div className="w-1/2 md:w-1/3 flex items-center justify-center bg-[#2a2a2a]  sm:p-6">
    <div className="text-left w-full px-2 sm:px-4">
 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white" >
        <span className="block ">Spaces change.</span>
        <span className="block">We adapt.</span>
      </h1>
     <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-white" >
        Easy display for every room type
      </p>
     <button
  className="px-5 py-2 sm:px-6 sm:py-3 mt-1 bg-[#09c] text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  data-aos="fade-right"
>
  Find your fit
</button>

    </div>
  </div>
</div>
    
 

 <Heading title="Explore our Products and services"/>
       <ExploreCarousel/>
         {/* Responsive Section */}
     <div className="relative w-full h-[80vh] overflow-hidden">
  {/* Background Image */}
  <img
    src={bg3}
    alt="Display Background"
    className="w-full h-full object-cover object-center"
  />

  {/* Overlay for darkening image (optional) */}
  <div className="absolute " />

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16 text-left">
    <div className="text-white">
 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" >
        <span className="block">Spaces change.</span>
        <span className="block">We adapt.</span>
      </h1>
      <p className="mt-4 text-lg md:text-2xl">
        Easy display for every room type
      </p>
     <button
  className="px-5 py-2 sm:px-6 sm:py-3 mt-1 bg-[#09c] text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
  data-aos="fade-right"
>
  Find your fit
</button>
    </div>
    
  </div>
</div>

        <Heading title="Key Features"/>
       <KeyFeaturesSection/>
            {/* Responsive Section */}
     <div className="relative w-full h-[80vh] overflow-hidden">
  {/* Background Image */}
  <img
    src={bg4}
    alt="Display Background"
    className="w-full h-full object-cover object-center"
  />

  {/* Overlay for darkening image (optional) */}
  <div className="absolute " />

  {/* Text Content */}
  <div className="absolute inset-0 flex items-center justify-start px-6 md:px-16 text-left">
    <div className="text-white">
      <h1 className="text-4xl md:text-6xl font-bold leading-snug">
        <span className="block">Spaces change.</span>
        <span className="block">We adapt.</span>
      </h1>
      <p className="mt-4 text-lg md:text-2xl">
        Easy display for every room type
      </p>
      <p className="mt-2 text-base md:text-xl font-medium">
        Find your fit
      </p>
    </div>
  </div>
</div>

         <Heading title="Explore our product"/>
      <ExploreSection/>
      
      
       <Footer/>
       </div>
    </>
  )
}

export default Home
