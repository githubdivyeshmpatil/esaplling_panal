import React, { useEffect, useState } from "react";
import bgImage from "../assets/images/herobg.jpg";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  return (
    <div
      className="w-screen h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="w-full h-full bg-black/60 flex items-center justify-center px-4">
        <div className="text-center text-white max-w-2xl">
          <h1
            className={`text-4xl md:text-6xl font-Inter font-bold mb-4 transform transition-all duration-1000 ease-out ${
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
