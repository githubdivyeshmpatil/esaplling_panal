import React, { useState } from "react";
import img1 from "../assets/images/d1.jpg";
import img2 from "../assets/images/d2.jpg";
import img3 from "../assets/images/d3.jpg";
import img4 from "../assets/images/d4.jpg";

function AllProducts_data() {
  const images = [img1, img2, img3, img4];
  const [mainImage, setMainImage] = useState(img1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-10">
      {/* Big Image */}
      <div className="w-full lg:w-3/4">
        <img
          src={mainImage}
          alt="Main"
          className="w-full max-h-[600px] object-contain rounded-xl shadow-lg transition-all duration-300"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex lg:flex-col flex-row gap-4 items-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            onClick={() => setMainImage(img)}
            className={`w-24 h-24 object-cover rounded-lg cursor-pointer border-2 ${
              mainImage === img ? "border-blue-500" : "border-transparent"
            } hover:scale-105 transition`}
          />
        ))}
      </div>
    </div>
  );
}

export default AllProducts_data;
