// src/components/Heading.jsx
import React from 'react';

const Heading = ({ title, subtitle, align = "center" }) => {
  const alignment = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

  return (
    <div className={`my-6 px-4 ${alignment}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800"data-aos="fade-right">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base sm:text-lg md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
