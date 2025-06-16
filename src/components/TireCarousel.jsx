// TireCarousel.jsx
import React from "react";
import "./TireCarousel.css"; // For animation
import zoom from '../assets/images/zoom.png';
import Webex from '../assets/images/Webex.png';
import google from '../assets/images/google.png';
import micro from '../assets/images/micro.png';
import goto from '../assets/images/goto.png';
import skype from '../assets/images/skype.png';
import avaya from '../assets/images/avaya.png';
import high from '../assets/images/high.png';

const images = [
  { src: zoom, title: "Zoom.us" },
  { src: Webex, title: "Webex" },
  { src: google, title: "Google Meet" },
  { src: micro, title: "Microsoft Teams" },
  { src: goto, title: "Go To Meeting" },
  { src: skype, title: "Skype" },
  { src: avaya, title: "Avaya Spaces" },
  { src: high, title: "Highfive" },
];

const TireCarousel = () => {
  return (
    <div className="overflow-hidden w-full py-4">
      <div className="flex gap-8 animate-marquee w-max">
        {[...images, ...images].map((item, index) => (
          <div key={index} className="flex flex-col items-center min-w-[160px]">
            <img
              src={item.src}
              alt={item.title}
              className="w-32 h-32 object-contain p-2   "
            />
            <p className="mt-2 text-center text-sm sm:text-base md:text-lg text-gray-700">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TireCarousel;
