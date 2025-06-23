// components/ContactSection.jsx
import React from 'react';
import tvImage from '../assets/images/Contact_tv.png'; // use your actual path

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Contact Form */}
        <div className="bg-white  p-8">
          <form className="space-y-6">
            <div>
              <label className="block mb-1 text-gray-700">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border-b border-gray-300 focus:outline-none py-2"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border-b border-gray-300 focus:outline-none py-2"
              />
            </div>
            <div>
              <label className="block mb-1 text-gray-700">Contact Details & Query</label>
              <textarea
                rows="4"
                placeholder="Type your message"
                className="w-full border-b border-gray-300 focus:outline-none py-2 resize-none"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-[#ff1744] hover:bg-[#d50000] text-white font-semibold px-6 py-2 rounded shadow"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img src={tvImage} alt="TV Family" className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
