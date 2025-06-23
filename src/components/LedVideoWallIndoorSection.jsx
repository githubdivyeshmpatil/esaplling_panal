// components/LedVideoWallOutdoorSection.jsx
import React from "react";
import ledOutdoorImage from "../assets/images/led_van.jpg"; // Replace with actual image path

const LedVideoWallOutdoorSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={ledOutdoorImage}
            alt="LED Video Wall Outdoor"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            LED Video Wall <br />
            <span className="text-blue-600">Outdoor Series</span> (Modules P2.5, P4)
          </h2>

          <p className="mb-6">
            An LED video wall for outdoor use is a large, high-brightness display made up of 
            multiple LED panels or modules that are seamlessly tiled together to create 
            one large screen. These video walls are designed to be highly visible in bright sunlight 
            and are typically used for advertising, events, concerts, sports stadiums, and other 
            outdoor applications.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li>• Weatherproof and Durable</li>
              <li>• High-Resolution Output</li>
              <li>• High Brightness</li>
              <li>• Modular Design</li>
              <li>• Pixel Pitch</li>
              <li>• Wide Viewing Angle</li>
            </ul>
            <ul className="space-y-2">
              <li>• High Contrast Ratio</li>
              <li>• Energy Efficiency</li>
              <li>• Seamless Display</li>
              <li>• Long Lifespan</li>
              <li>• Flexible Mounting Options</li>
              <li>• Vivid Color Reproduction</li>
            </ul>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LedVideoWallOutdoorSection;
