import React from "react";

const CommercialDisplayInfo = () => {
  return (
    <div className=" text-white p-6 md:p-10 max-w-7xl mx-auto">
      {/* Header Section */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-4">Commercial Display Features</h2>
        <ul className="list-disc list-inside text-base leading-relaxed">
          <li>24x7 working, 60,000hrs life</li>
          <li>178° wide viewing angle (Up/Down/Left/Right)</li>
          <li>Free Video wall control software</li>
          <li>Multiple display signal input: HDMI, DVI, VGA, Video etc.</li>
          <li>50% Power Saving with LED ECO Backlit</li>
          <li>Multiple viewing modes</li>
          <li>Total EMC metal body, Full body heat dissipation</li>
        </ul>
      </section>

      {/* Technical Specification Section */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-white mb-4">Technical Specification</h3>

        <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base">
          <div>
            <h4 className="font-bold text-lg text-white mb-2">LCD Panel</h4>
            <p><b>Diagonal Size:</b> 55”</p>
            <p><b>Aspect Ratio:</b> 16:9</p>
            <p><b>Pixel Pitch:</b> 0.63(H) × 0.63(W)</p>
            <p><b>Response Time:</b> 5ms</p>
            <p><b>Resolution:</b> 1920x1080, 3840x2160</p>
            <p><b>Contrast Ratio:</b> 1500:1</p>
            <p><b>Brightness:</b> 500 cd/m²</p>
            <p><b>Display Area:</b> 1209.6(H) x 680.4(V)</p>
            <p><b>Color:</b> 16.7 Million color</p>
            <p><b>View Angle:</b> H/V 178°/178°</p>
          </div>

          <div>
            <h4 className="font-bold text-lg text-white mb-2">Input / Output</h4>
            <p><b>Video Input:</b> VGA*1, HDMI*1, DVI*1, Video(BNC)*1</p>
            <p><b>RS232 Input:</b> RS232*1</p>
            <p><b>Other Input:</b> IR sensor*1, USB Debug*1</p>
            <p><b>Output Port:</b> None</p>
            <p><b>RS232 Output:</b> RS232*2</p>
            <p><b>Other Output:</b> None</p>
          </div>
        </div>
      </section>

      {/* Tech Features */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-white mb-4">Tech Features</h3>
        <p><b>Language:</b> English</p>
        <p><b>Video Format:</b> PAL, NTSC</p>
        <p><b>Frequency:</b> Horizontal: 20~82KHz, Vertical: 55~75Hz</p>
      </section>

      {/* Function Features */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-white mb-4">Function Features</h3>
        <ul className="list-disc list-inside text-base leading-relaxed">
          <li>Support 1×2 ~ 20×20 video wall</li>
          <li>Freeze the display at any signal display</li>
          <li>Video wall control software can control matrix too</li>
          <li>Smart temperature and auto on/off time control</li>
          <li>Full metal body, auto noise adjust</li>
          <li>3D noise reduction, dynamic mode, auto signal search</li>
          <li>Sunlight readable, wide view angle</li>
        </ul>
      </section>

      {/* Physical Features */}
      <section className="mb-10">
        <h3 className="text-2xl font-semibold text-white mb-4">Physical Features</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base">
          <div>
            <p><b>Material:</b> Total Metal Body</p>
            <p><b>Color:</b> Black</p>
            <p><b>Temperature:</b> Work: 0°C ~ 50°C / Storage: -20°C ~ 60°C</p>
            <p><b>Humidity:</b> Working: 10% to 90%, Storage: 0 to 95%</p>
            <p><b>Noise:</b> Working ≤50dBA</p>
            <p><b>Product Dimension:</b> 1213.7*684.5*112mm</p>
            <p><b>Frame Bezel:</b> Up: 2.4mm, Down: 1.1mm, Left: 2.4mm, Right: 1.1mm</p>
          </div>

          <div>
            <p><b>Power Input:</b> AC 100–240V / 2~5A/ 50~60Hz</p>
            <p><b>Power Consumption:</b> Max: ≤220W, Normal: ≤200W, Standby: ≤2W</p>
            <p><b>Weight:</b> N.W: 13.5kg / G.W: 27kg ± 0.5kg</p>
            <p><b>Package Dimensions:</b> 1330mm(W) x 820mm(H) x 455mm(D)</p>
          </div>
        </div>
      </section>

      {/* Accessories & Certification */}
      <section>
        <h3 className="text-2xl font-semibold text-white mb-4">Accessories & Certifications</h3>
        <p><b>Accessories:</b> Quick start guide, Warranty card, Remote controller, Power Cord</p>
        <p><b>Optional:</b> HDMI cable, VGA cable, DVI cable, BNC cable, Floor stand set</p>
        <p><b>Certifications:</b> BIS, RoHS, BIS, CE, FCC, ISO9001, ISO14001</p>
      </section>
    </div>
  );
};

export default CommercialDisplayInfo;
