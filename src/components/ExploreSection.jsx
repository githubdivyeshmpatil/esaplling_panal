import React from "react";
import product1 from "../assets/images/livecon.jpg";
import product2 from "../assets/images/three.jpg";
import product3 from "../assets/images/studio.jpg";

const products = [
  {
    name: "Live - Conference",
    desc: "Touch-enabled collaboration",
    image: product1,
  },
  {
    name: "Live - 360 ",
    desc: "Streamlined entertainment",
    image: product2,
  },
  {
    name: "Live - Studio",
    desc: "Large format visual displays",
    image: product3,
  },
];

export default function ExploreSection() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32">
     

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-white shadow-lg transform transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Text Content */}
            <div className="p-5 text-center">
              <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-2">
                {item.name}
              </h4>
              <p1 className="text-sm sm:text-base md:text-lg text-justify text-gray-600">{item.desc}</p1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
