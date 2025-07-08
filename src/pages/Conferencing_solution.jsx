import React, { useEffect } from 'react'
import intractive from '../assets/images/come.png'
import HeroSection1 from '../components/HeroSection1'
import productBg from '../assets/images/lcdbg.jpg'


function Conferencing_solution() {
    useEffect(() => {
    window.scrollTo(0, 0); // Page top pe le jaata hai jab component mount hota hai
  }, []);
  return (
      <div className="mt-32">
  <HeroSection1 bgImage={productBg}/>
    <div className="bg-black text-white px-4 py-10">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 items-center">
        <img src={intractive} alt="LCD Video Wall" className="w-full max-w-md rounded shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-2">
          Conferencing Solution <br />
            <span className="text-blue-400">46” & 55” Modules (3.5mm / 1.7mm)</span>
          </h2>
          <p className="text-gray-300 mb-4">
            Explore high-definition LCD video wall modules, perfect for control rooms and commercial environments. Seamless, high-impact visuals in glossy, matte or custom colors!
          </p>
          <ul className="list-disc ml-6 text-sm text-gray-300 space-y-1">
            <li>Seamless Ultra Narrow Bezel</li>
            <li>High Brightness Display</li>
            <li>Modular Expandability</li>
            <li>Smart Calibration Support</li>
          </ul>
          <button className="mt-5 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white">
            Learn More
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Commercial Features */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Commercial Display Features</h3>
          <ul className="list-disc ml-5 space-y-1 text-sm text-gray-300">
            <li>24/7 working, 450nits</li>
            <li>Ultra thin visual gap</li>
            <li>Multiple signal interface: DVI, VGA, Video etc.</li>
            <li>Supports 4K and 1080P</li>
            <li>Smart cooling fan, body heat dissipation</li>
          </ul>
        </div>

        {/* Technical Specification */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Technical Specification</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><strong>Diagonal Size:</strong> 46” / 55”</li>
            <li><strong>Panel:</strong> IPS LED Backlight</li>
            <li><strong>Resolution:</strong> 1920x1080</li>
            <li><strong>Brightness:</strong> 500 nits</li>
            <li><strong>Contrast:</strong> 1400:1</li>
            <li><strong>Response Time:</strong> 8ms</li>
            <li><strong>View Angle:</strong> 178°</li>
          </ul>
        </div>

        {/* Input/Output + Function */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Input / Output</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><strong>Video Inputs:</strong> VGA, HDMI, DVI</li>
            <li><strong>Output:</strong> RS232, IR</li>
            <li><strong>Power:</strong> AC 100~240V, 50/60Hz</li>
            <li><strong>Standby:</strong> ≤2W</li>
            <li><strong>Dimensions:</strong> 1023mm × 578mm × 122mm</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Conferencing_solution