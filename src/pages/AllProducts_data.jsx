import React, { useState } from "react";
import img1 from "../assets/images/d1.jpg";
import img2 from "../assets/images/d2.jpg";
import img3 from "../assets/images/d3.jpg";
import img4 from "../assets/images/d4.jpg";

function AllProducts_data() {
  const images = [img1, img2, img3, img4];
  const [mainImage, setMainImage] = useState(img1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-start gap-6">
      
      {/* Big Image */}
      <div className="w-full lg:w-3/4">
        <img
          src={mainImage}
          alt="Main"
          className="w-full max-h-[500px] object-contain rounded-xl shadow-lg transition-all duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="w-full lg:w-1/4 flex lg:flex-col flex-row lg:items-start justify-center lg:justify-start gap-3 overflow-x-auto">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setMainImage(img)}
            className={`min-w-[70px] min-h-[70px] w-[70px] h-[70px] object-cover rounded-md cursor-pointer border-2 ${
              mainImage === img ? "border-blue-500" : "border-gray-300"
            } hover:scale-105 transition duration-300`}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProducts_data;
