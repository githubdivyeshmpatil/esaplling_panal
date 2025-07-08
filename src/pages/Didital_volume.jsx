import React, { useEffect } from 'react'
import intractive from '../assets/images/come.png'
import HeroSection1 from '../components/HeroSection1'
import Sound from "../assets/images/sound.png";
import Soundname from '../components/Soundname'
import bgImagesound from '../assets/images/sound1.png'



function Didital_volume() {
      useEffect(() => {
    window.scrollTo(0, 0); // Page top pe le jaata hai jab component mount hota hai
  }, []);
  return (
   <div className="mt-32">
  <HeroSection1 bgImage={Sound}/>
  <section className="bg-white py-12 px-6">
  
      <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-8   ">
            {/* Left Column: Text */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-900  leading-tight font-bold mb-4">Evolve – G-1 (Camera with Surround Bar) </h2>
             
            </div>
      
            {/* Right Column: Image */}
            <div className="w-full md:w-1/2">
              <img
                src={bgImagesound}
                alt="Example"
                className="w-full h-auto "
              />
            </div>
          </section>
  </section>
    <Soundname />
      
    </div>
  )
}

export default Didital_volume