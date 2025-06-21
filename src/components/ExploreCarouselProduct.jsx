import React, { useRef, useEffect } from "react";
import product1 from "../assets/images/start.png";
import product2 from "../assets/images/start1.png";
import product3 from "../assets/images/start3.png";
import product4 from "../assets/images/start.png";
import product5 from "../assets/images/start1.png";

// Product data
const originalProducts = [
  { name: "Board Room", desc: "Touch-enabled collaboration", image: product1 },
  { name: "Virtual Conference", desc: "Streamlined monitoring", image: product2 },
  { name: "Meeting Room", desc: "Large format visual displays and News Room", image: product3 },
  { name: "Multi Split", desc: "High brightness displays", image: product4 },
  { name: "Live - Broadcast", desc: "Efficient visualization", image: product5 },
];

// Clone for infinite scroll
const clonedStart = originalProducts.slice(-2);
const clonedEnd = originalProducts.slice(0, 2);
const products = [...clonedStart, ...originalProducts, ...clonedEnd];

export default function ExploreCarouselProduct() {
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
    if (width < 640) return width;
    if (width < 1024) return width / 2;
    if (width < 1280) return width / 3;
    return width / 4;
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
    <div className="py-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 max-w-screen-2xl mx-auto">
      {/* Carousel container */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto scroll-smooth no-scrollbar py-4"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 flex-shrink-0 px-2"
          >
            <div className="group rounded-xl overflow-hidden bg-white transform transition duration-300 h-full shadow hover:shadow-lg">
              {/* Image section */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain relative z-10"
                />

              {/* Text content */}
              
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
