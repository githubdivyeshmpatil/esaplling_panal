import React, { useEffect } from "react";
import productBg from "../assets/images/signage.jpg";
import HeroSection1 from "../components/HeroSection1";
import AllProducts_data from "./AllProducts_data";

const DigitalSignage = () => {
    useEffect(() => {
    window.scrollTo(0, 0); // Page top pe le jaata hai jab component mount hota hai
  }, []);
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <div className="mt-32">
        <HeroSection1 bgImage={productBg} />
      </div>

      {/* Product Overview with image right side */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text Content */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-semibold mb-6 text-blue-800">
              Transform Your Space with Smart Digital Signage
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our cutting-edge digital signage solutions are designed to captivate, inform,
              and engage your audience. Perfect for retail, hospitality, corporate, and public
              environments, these displays offer vivid visuals, reliable performance, and seamless
              content management.
            </p>
            <h3 className="text-2xl font-semibold mb-3">Key Features</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Ultra-bright, high-resolution displays</li>
              <li>24/7 commercial-grade reliability</li>
              <li>Remote content control & scheduling</li>
              <li>Portrait or landscape orientation</li>
              <li>Interactive touchscreen options</li>
              <li>Multiple screen sizes: 32” to 98”</li>
            </ul>
          </div>

          {/* Right: Image or Product Display */}
          <div className="md:w-1/2">
            <AllProducts_data />
          </div>
        </div>
      </section>

      {/* Applications + Technical Specifications Side by Side */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Applications Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Applications</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Retail Stores and Showrooms</li>
              <li>Corporate Lobbies & Meeting Rooms</li>
              <li>Restaurants and QSRs (Digital Menu Boards)</li>
              <li>Hospitals and Clinics</li>
              <li>Educational Institutions</li>
              <li>Events, Exhibitions, and Trade Shows</li>
            </ul>
          </div>

          {/* Technical Specifications Column */}
          <div>
            <h3 className="text-2xl font-semibold mb-3">Technical Specifications</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Screen Sizes:</strong> 32”, 43”, 55”, 65”, 75”, 85”, 98”</li>
              <li><strong>Resolution:</strong> Full HD / 4K UHD</li>
              <li><strong>Brightness:</strong> Up to 4000 nits (Outdoor)</li>
              <li><strong>Panel Type:</strong> LED / IPS Panel</li>
              <li><strong>Connectivity:</strong> HDMI, USB, LAN, Wi-Fi, Bluetooth</li>
              <li><strong>Operating System:</strong> Android / Tizen / WebOS</li>
              <li><strong>Mounting:</strong> Wall / Stand / Ceiling options</li>
              <li><strong>Power Supply:</strong> AC 100-240V, 50/60Hz</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
    
    </div>
  );
};

export default DigitalSignage;
