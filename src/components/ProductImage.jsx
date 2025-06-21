import React from 'react';
import prosi from '../assets/images/prosi.png';

function ProductImage() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-12 py-8">
      {/* Left Column: Text */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-bold mb-4">
        THINK BIGGER,
WORK SMARTER,
THE FUTURE IS AT YOUR FINGERTIPS

        </h2>
        <button
          className="px-5 py-2 sm:px-6 sm:py-3 mt-4 bg-[#09c] text-white font-semibold rounded-md shadow hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          data-aos="fade-right"
        >
          Know More
        </button>
      </div>

      {/* Right Column: Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={prosi}
          alt="Example"
          className="w-full max-w-[300px] h-auto" // 👈 Controls image size
        />
      </div>
    </section>
  );
}

export default ProductImage;
