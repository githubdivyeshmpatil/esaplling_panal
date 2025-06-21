import React from 'react'
import bgImage from "../assets/images/footerB.png"; // Your background image

function FooterBanner() {
  return (
    <div
      className="relative w-full h-[500px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto h-full flex flex-col justify-center px-6 sm:px-12">
        <div className="text-white max-w-md space-y-4">
          <p className="uppercase tracking-wide text-sm text-blue-300">Learning Center</p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            Level up your <br /> know-how
          </h2>
          <p className="text-gray-300">
            Gain new insights with how-to guides, product tips, news and more.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
           

            <a
              href="/brochure.pdf" // Update this path to your actual brochure file
              download
              className="bg-white text-blue-600 hover:bg-gray-200 transition px-6 py-3 rounded-lg font-medium text-center"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default FooterBanner;
