// components/LedVideoWallIndoorSection.jsx
import React from "react";
import ledIndoorImage from "../assets/images/ne.jpg"; // Replace with actual image path

const LedVideoWallIndoorSection = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <img
            src={ledIndoorImage}
            alt="LED Video Wall Indoor"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="text-black">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            LED Video Wall <br />
            <span className="text-blue-600">Indoor Series</span> (Modules P2.5, P4)
          </h2>

          <p className="mb-6">
            Indoor LED video walls are widely used in various environments such as
            corporate offices, retail spaces, entertainment venues, control rooms,
            and more. These displays offer stunning clarity, flexibility in design,
            and advanced control capabilities for immersive indoor experiences.
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              <li>• Pixel Pitch and Resolution</li>
              <li>• High-Resolution Output</li>
              <li>• Brightness and Color Uniformity</li>
              <li>• Advanced Processing Capabilities</li>
              <li>• Control and Management</li>
            </ul>
            <ul className="space-y-2">
              <li>• Flexibility and Customization</li>
              <li>• Power Efficiency and Cooling</li>
              <li>• Integration with External Systems</li>
              <li>• Modular and Flexible Design</li>
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

export default LedVideoWallIndoorSection;
