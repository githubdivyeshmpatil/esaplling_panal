import React from "react";

const ConfidenceSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-3 md:grid-rows-2">
        {/* Large left block */}
        <div className="md:row-span-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Buy with confidence
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-justify">
            No high-pressure tactics. No barrage of emails or calls. We let the quality of our products do the talking. Discover how we’ll help you find the right solutions for your spaces.
          </p>
        </div>

        {/* Right grid items */}
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Live online demo</h3>
          <p className="text-sm sm:text-base md:text-lg text-justify">
            Hear the performance that’s wowed AV/IT pros and get your questions answered in 15 minutes.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Audio test-drive</h3>
          <p className="text-sm sm:text-base md:text-lg text-justify">
            Get an on-site evaluation in your spaces — setup takes just a few minutes. Find out if you qualify.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Audio tech advice</h3>
          <p className="text-sm sm:text-base md:text-lg text-justify">
            Jump on a call for free audio tech advice. No selling — just expert advice and options.
          </p>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">Contact us</h3>
          <p className="text-sm sm:text-base md:text-lg text-justify">
            Talk with us about models, availability and pricing. We’ll get you the information you need.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConfidenceSection;
