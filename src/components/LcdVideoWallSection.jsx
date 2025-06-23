// components/LcdVideoWallSection.jsx
import React from "react";
import lcdImage from "../assets/images/video_w.png"; // replace with actual image path
import CommercialDisplayInfo from "./CommercialDisplayInfo";

const LcdVideoWallSection = () => {
  return (
    <>
    <section className="bg-[#1B1B1B] py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={lcdImage}
            alt="LCD Video Wall"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-white"> {/* 👈 all child text becomes white */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            LCD Video Wall <br />
            <span className="text-blue-400">46” & 55” Modules</span> (3.5mm / 1.7mm)
          </h2>

          <p className="mb-6">
            Explore Delta’s advanced LCD video wall modules, perfect for control
            rooms and commercial applications where flexibility and high-impact
            visuals are a priority. Create custom-sized screens by stacking modules
            to suit your space, all while enjoying Full HD resolution and exceptional
            image quality.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li>• Seamless Display</li>
              <li>• High-Resolution Output</li>
              <li>• Brightness & Color Uniformity</li>
              <li>• Advanced Processing</li>
            </ul>
            <ul className="space-y-2">
              <li>• Power Efficient Cooling</li>
              <li>• Control & Integration</li>
              <li>• Flexible Customization</li>
              <li>• External System Support</li>
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
        <CommercialDisplayInfo/>
    </section>
  
    </>
  );
};

export default LcdVideoWallSection;
