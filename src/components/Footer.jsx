import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";
import logo from "../assets/images/logo.png";

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <footer className="bg-[#1B1B1B] text-white px-6 md:px-12 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12"
          data-aos="fade-up"
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold leading-tight">
              Stay connected with <br className="hidden md:block" />
              ESAPLLING updates
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <input
              type="email"
              placeholder="Work email*"
              className="px-4 py-3 rounded-md text-white w-full sm:w-80 border border-white bg-transparent placeholder-white"
            />
            <button className="bg-[#f15305] hover:bg-[#0095cc] text-white px-6 py-3  font-semibold border border-white">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12 text-sm font-light"
          data-aos="fade-up"
        >
          {/* Explore */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3">EXPLORE</h3>
            <ul className="space-y-2 text-sm sm:text-base md:text-lg">
              <li>Why Esaplling Panal</li>
              <li>Products</li>
              <li>Technology</li>
              <li>Solutions</li>
              <li>Software & services</li>
            </ul>
          </div>

          {/* Company */}
          <div>
             <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3">COMPANY</h3>
            <ul className="space-y-2text-sm sm:text-base md:text-lg ">
              <li>About us</li>
              <li>Press releases</li>
              <li>News coverage</li>
              <li>Sustainability</li>
              <li>Awards</li>
              <li>Careers</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3">RESOURCES</h3>
            <ul className="space-y-2 text-sm sm:text-base md:text-lg">
              <li>Resource library</li>
              <li>Video library</li>
              <li>Learning center</li>
              <li>Product spotlight</li>
              <li>Customer stories</li>
              <li>Events</li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-3">CONNECT</h3>
            <ul className="space-y-2 text-sm sm:text-base md:text-lg">
              <li>Contact us</li>
              <li>Product demo</li>
              <li>Technical call</li>
              <li>On-site evaluation</li>
              <li>How to buy</li>
              <li>Find a distributor</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* Social & Bottom Links */}
        <div
          className="flex flex-col md:flex-row justify-between items-start md:items-center border-t border-gray-600 pt-6"
          data-aos="fade-up"
        >
          {/* Social icons */}
          <div className="flex space-x-4 text-lg mb-4 md:mb-0">
            <FaXTwitter />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaYoutube />
            <FaInstagram />
          </div>

          {/* Legal Links */}
          <div className=" space-x-4 text-gray-400 mb-4 md:mb-0 text-sm sm:text-base md:text-lg">
            <a href="#">Privacy Policy</a>
            <a href="#">Security</a>
            <a href="#">Legal</a>
            <a href="#">Trademarks</a>
            <span>Copyright © 2025 ESAPLLING pvt ltd. All rights reserved.</span>
          </div>

          {/* Logo */}
          <div className="flex justify-end w-full md:w-auto">
            <img
              src={logo}
              alt="Microphone Mist Logo"
              className="h-20 w-auto"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
