import React, { useRef, useEffect } from "react";
import product1 from "../assets/images/services1.jpg";
import product2 from "../assets/images/services2.jpg";
import product3 from "../assets/images/services3.jpg";
import product4 from "../assets/images/multi.jpg";
import product5 from "../assets/images/services5.jpg";

// Product data
const originalProducts = [
  { name: "Board Room", desc: "Touch-enabled collaboration", image: product1 },
  { name: "Virtual Conference", desc: "Streamlined entertainment", image: product2 },
  { name: "Meeting Room", desc: "Large format visual displays", image: product3 },
  { name: "Multi Split", desc: "High brightness displays", image: product4 },
  { name: "Live - Broadcast", desc: "Efficient visualization", image: product5 },
];

// Clone for infinite scroll
const clonedStart = originalProducts.slice(-2);
const clonedEnd = originalProducts.slice(0, 2);
const products = [...clonedStart, ...originalProducts, ...clonedEnd];

export default function ExploreCarousel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const cardWidth = getCardWidth(container);
      container.scrollLeft = cardWidth * 2;
    }
  }, []);

  const getCardWidth = (container) => {
    const width = container.offsetWidth;
    if (width < 640) return width; // full width on mobile
    if (width < 1024) return width / 2; // half width on tablet
    return width / 3; // one-third width on desktop
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    const cardWidth = getCardWidth(container);
    const totalScroll = cardWidth * (originalProducts.length + 2);
    const scrollLeft = container.scrollLeft;

    if (scrollLeft >= totalScroll - cardWidth) {
      container.scrollLeft = cardWidth * 2;
    } else if (scrollLeft <= 0) {
      container.scrollLeft = cardWidth * originalProducts.length;
    }
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const cardWidth = getCardWidth(container);
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className=" py-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
      {/* Carousel container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scroll-smooth no-scrollbar py-4"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2"
          >
            <div className="group rounded-xl overflow-hidden   bg-white transform transition duration-300  h-full">
              
              {/* Image section with sliding overlay */}
              <div className="relative h-[300px] sm:h-[400px] lg:h-[480px] w-full flex items-center justify-center bg-[#F5F5F5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain relative z-10"
                />
                {/* Blue overlay sliding from bottom to top */}
                <div className="absolute inset-0 bg-[#A2FF00] opacity-60 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
              </div>

              {/* Text content */}
              <div className="p-4 text-center">
<h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-1">
  {item.name}
</h3>
                <p className="text-base sm:text-lg md:text-xl text-gray-600">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-end mt-6 gap-4">
        <button
          onClick={() => scroll("left")}
          className="p-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          &#8592;
        </button>
        <button
          onClick={() => scroll("right")}
          className="p-2 px-4 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
}
