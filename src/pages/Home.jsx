import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import bg2 from "../assets/images/banne.jpg";
import bg3 from "../assets/images/new_banner.png";
import bg4 from "../assets/images/banner3.png";
import Heading from "../components/Heading";
import ExploreSection from "../components/ExploreSection";
import ExploreCarousel from "../components/ExploreCarousel";
import KeyFeaturesSection from "../components/KeyFeaturesSection";
import TireCarousel from "../components/TireCarousel";
import Sound from "../assets/images/sound.png";
import Soundname from "../components/Soundname";
import TextImageSection from "../components/TextImageSection";
import bgImagesound from '../assets/images/sound1.png'
import side from '../assets/images/side.jpg'

function Home() {
    useEffect(() => {
    window.scrollTo(0, 0); // Page top pe le jaata hai jab component mount hota hai
  }, []);
  return (
    <>
      {" "}
      <div className="font-sans ">
        <HeroSection />
        <TireCarousel />
        <section className="bg-gradient-to-b from-gray-300 via-gray-100 to-white py-12 px-6">

       <TextImageSection/>
       </section>
        <KeyFeaturesSection />
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
            <div className="w-full md:w-2/3 flex items-center justify-center sm:p-6">
              <div className="text-left w-full px-2 sm:px-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                  <span className="block">Space that transforms </span>
                  <span className="block"> your brand value</span>
                </h1>

                <button
                  className="px-5 py-2 sm:px-6 sm:py-3 mt-4 bg-[#09c] text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  data-aos="fade-right"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
        <Heading title="Products that transforms your approach for future of Conferencing Solutions " />
        <ExploreCarousel />
        {/* Responsive Section */}

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
            <div className="w-full md:w-2/3 flex items-center justify-center sm:p-6">
              <div className="text-left w-full px-2 sm:px-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-white">
                  <span className="block">
                    Transformation and adoptability for next move:
                  </span>
                  <span className="block">Brand Transformation</span>
                </h1>
                <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  Beling change is the only constraint
                </p>
                <button
                  className="px-5 py-2 sm:px-6 sm:py-3 mt-4 bg-[#09c] text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  data-aos="fade-right"
                >
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
        <Heading title="Explore our product" />
        <ExploreSection />
        <div className="relative w-full">
          {/* Background Image */}
          <img
            src={Sound}
            alt="Background"
            className="w-full h-auto object-contain object-top z-0 relative"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>

          {/* Content Section */}
          <div className="absolute inset-0 z-20 flex items-center justify-start px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-20">
            <div className="text-white max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl text-left sm:text-left">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-center sm:text-left">
                Virtual Conference Series
              </h1>

              <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed text-center sm:text-left">
               Easy display for every room Sound type
Bring live meeting to the next level{" "}
              </p>

              <div className="mt-6 flex justify-center sm:justify-start">
                <button className="px-6 py-3 text-sm sm:text-base bg-[#09c] text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Know More
                </button>
              </div>
            </div>
          </div>
        </div>
{/* ----------------------------------sound------------------------------------------ */}
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
    </>
  );
}

export default Home;
