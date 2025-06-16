import React, { useEffect, useState } from "react";
import bgImage from "../assets/images/herobg.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full h-full bg-black/60 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-3xl px-2 sm:px-4 md:px-6">
          <h1
            className={`whitespace-nowrap text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-1000 ease-out transform font-Inter ${
              isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
            }`}
          >
            Future of Display Solution
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
