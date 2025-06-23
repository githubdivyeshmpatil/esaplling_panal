// components/LedCommercialDisplaySection.jsx
import React from "react";
import commercialDisplayImage2 from '../assets/images/tyu.png'

const LedCommercialDisplaySection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative  overflow-hidden ">
          <img
            src={commercialDisplayImage2}
            alt="LED Commercial Display"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            LED Commercial Display <br />
            <span className="text-blue-600">Sizes: 32” 43” 55” 65” 75” 85” 98”</span>
          </h2>

          <p className="mb-6">
            A commercial display is a type of screen designed for business or
            commercial use. These displays are optimized for durability, visibility,
            and performance across a wide range of business applications.
          </p>

          <h3 className="text-xl font-semibold mb-2">Common Applications:</h3>
          <ul className="mb-6 list-disc list-inside space-y-1 text-sm">
            <li>Digital Signage: Advertising and informational displays in public spaces</li>
            <li>Interactive Kiosks: Touchscreen displays for self-service kiosks</li>
            <li>Conference Rooms: Large screens for presentations and video conferencing</li>
            <li>Menu Boards: Digital menus in restaurants and cafes</li>
            <li>Transportation Hubs: Flight/timetable displays in airports or stations</li>
            <li>Retail Displays: Promotional screens in stores or window displays</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">Features:</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li>• High Brightness</li>
              <li>• Durability and Reliability</li>
              <li>• Advanced Connectivity</li>
            </ul>
            <ul className="space-y-2">
              <li>• CMS Integration</li>
              <li>• Energy Efficiency</li>
              <li>• 24/7 Operation</li>
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

export default LedCommercialDisplaySection;
