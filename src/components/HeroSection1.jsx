import React from 'react'

function HeroSection1({ bgImage, title, subtitle, buttonText, onButtonClick }) {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src={bgImage}
        alt="Background"
        className="w-full h-auto object-contain object-top z-0 relative"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>

      {/* Content Section */}
      <div className="absolute inset-0 z-20 flex items-center justify-start px-4 sm:px-8 lg:px-20 py-10 sm:py-20">
        <div className="max-w-xl text-white">
          {title && (
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {title.split('\n').map((line, index) => (
                <span key={index} className="block">{line}</span>
              ))}
            </h1>
          )}
          {subtitle && (
            <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              {subtitle}
            </p>
          )}
          {buttonText && (
            <button
              onClick={onButtonClick}
              className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-[#09c] text-white font-semibold rounded-md shadow hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection1