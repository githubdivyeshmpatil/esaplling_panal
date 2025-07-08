import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo-re.png";
import pro from "../assets/images/digital_segnage.png";
import pro1 from "../assets/images/standee1.png";
import pro2 from "../assets/images/slim.png";
import pro3 from "../assets/images/empression_series.png";
import side from "../assets/images/side.jpg";
import disp1 from "../assets/images/video_w.png";
import disp2 from "../assets/images/video_w1.png";
import disp3 from "../assets/images/video_w2.png";
import disp4 from "../assets/images/video_w3.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Products", link: "/productspage", dropdown: { type: "product" } },
    { name: "Solutions", dropdown: { type: "solutions" } },
    { name: "Software & Services", link: "/software" },
    { name: "Resources", dropdown: { type: "resources" } },
  ];

  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-24">
        {/* Logo */}
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-24 md:h-32 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-6 text-sm font-medium font-robo">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                {item.dropdown ? (
                  <>
                    <Link
                      to={item.link || "#"}
                      onClick={(e) => {
                        e.preventDefault();
                        if (activeDropdown === index) {
                          setActiveDropdown(null);
                        } else {
                          setActiveDropdown(index);
                          if (item.link) navigate(item.link);
                        }
                      }}
                      className="hover:text-gray-500 py-2 flex items-center gap-1 focus:outline-none"
                    >
                      {item.name}
                      {activeDropdown === index ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </Link>

                    {/* Desktop Dropdown */}
                    {activeDropdown === index && (
                      <div
                        onMouseLeave={handleMouseLeave}
                        className="fixed left-0 w-full bg-[#f8f8f8] shadow-lg border-t border-gray-200 mt-8 z-40 transition-all duration-300"
                      >
                        <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-h-[600px] overflow-y-auto">
                          {/* Product Dropdown */}
                          {item.dropdown.type === "product" && (
                            <>
                              {/* Series */}
                              <div className="space-y-5">
                                <h4 className="text-base font-semibold mb-2">SERIES</h4>
                                <Link to="/products/digital_signage" className="block hover:underline space-y-1">
                                  <div className="w-14">
                                    <img src={pro} alt="Digital Signage" className="w-full h-auto rounded" />
                                  </div>
                                  <p className="font-bold text-sm">Digital Signage</p>
                                  <p className="text-xs text-gray-600">Pro AV performance for extra-large rooms</p>
                                </Link>
                                <Link to="/products/digitalstandi" className="block hover:underline space-y-1">
                                  <div className="w-14">
                                    <img src={pro1} alt="Digital Standee" className="w-full h-auto rounded" />
                                  </div>
                                  <p className="font-bold text-sm">Digital Standee</p>
                                  <p className="text-xs text-gray-600">Pro AV performance for large rooms</p>
                                </Link>
                              </div>

                              {/* Series Continued */}
                              <div className="space-y-5">
                                <h4 className="text-base font-semibold mb-2">SERIES</h4>
                                <Link to="/products/slimboard" className="block hover:underline space-y-1">
                                  <div className="w-36">
                                    <img src={pro2} alt="Slim Board" className="w-full h-auto rounded" />
                                  </div>
                                  <p className="font-bold text-sm">Slim Board</p>
                                  <p className="text-xs text-gray-600">Audio for large rooms</p>
                                </Link>
                                <Link to="/products/impression_series" className="block hover:underline space-y-1">
                                  <div className="w-24">
                                    <img src={pro3} alt="Impression Series" className="w-full h-auto rounded" />
                                  </div>
                                  <p className="font-bold text-sm">Impression Series</p>
                                  <p className="text-xs text-gray-600">Audio for medium-sized rooms</p>
                                </Link>
                              </div>

                              {/* Display */}
                              <div className="space-y-5">
                                <h4 className="text-base font-semibold mb-2">DISPLAY</h4>
                                <Link to="/products/lcd_video_wall" className="block space-y-1 hover:underline">
                                  <img src={disp1} alt="" className="w-20 h-auto rounded" />
                                  <p className="font-bold text-sm">LCD Video Wall</p>
                                </Link>
                                <Link to="/products/lcd_video_wall_indoor" className="block space-y-1 hover:underline">
                                  <img src={disp2} alt="" className="w-20 h-auto rounded" />
                                  <p className="font-bold text-sm">LED Video Wall Indoor</p>
                                </Link>
                                <Link to="/products/led_video_wall_outdoor" className="block space-y-1 hover:underline">
                                  <img src={disp3} alt="" className="w-20 h-auto rounded" />
                                  <p className="font-bold text-sm">LED Video Wall Outdoor</p>
                                </Link>
                                <Link to="/products/led_commercial_display" className="block space-y-1 hover:underline">
                                  <img src={disp4} alt="" className="w-20 h-auto rounded" />
                                  <p className="font-bold text-sm">LED Commercial Display</p>
                                </Link>
                              </div>

                              {/* Technology */}
                              <div className="space-y-5">
                                <h4 className="text-base font-semibold mb-2">TECHNOLOGY</h4>
                                <Link to="/products/intractive_panal" className="block space-y-1 hover:underline">
                                  <p className="font-bold text-sm">Interactive Panel</p>
                                  <p className="text-xs text-gray-600">High-quality imagery & intuitive experience</p>
                                </Link>
                                <Link to="/products/conferencing_solution" className="block space-y-1 hover:underline">
                                  <p className="font-bold text-sm">Conferencing Solutions</p>
                                  <p className="text-xs text-gray-600">Flexible solutions for meetings</p>
                                </Link>
                                <Link to="/products/digital_volume" className="block space-y-1 hover:underline">
                                  <p className="font-bold text-sm">Digital Volume</p>
                                  <p className="text-xs text-gray-600">Immersive digital experiences</p>
                                </Link>
                                <Link to="/products/active_led" className="block space-y-1 hover:underline">
                                  <p className="font-bold text-sm">Active LED</p>
                                  <p className="text-xs text-gray-600">Great display made simple</p>
                                </Link>
                              </div>
                            </>
                          )}

                          {/* Solutions */}
                          {item.dropdown.type === "solutions" && (
                            <div>
                              <h4 className="text-sm font-semibold mb-4">Solutions</h4>
                              <Link to="/solutions/education" className="block hover:underline mb-2">
                                <p className="font-bold text-sm">Education</p>
                                <p className="text-xs text-gray-600">Classroom & hybrid learning</p>
                              </Link>
                              <Link to="/solutions/corporate" className="block hover:underline">
                                <p className="font-bold text-sm">Corporate</p>
                                <p className="text-xs text-gray-600">Collaboration spaces</p>
                              </Link>
                            </div>
                          )}

                          {/* Resources */}
                          {item.dropdown.type === "resources" && (
                            <div>
                              <h4 className="text-sm font-semibold mb-4">Resources</h4>
                              <Link to="/resources/blogs" className="block hover:underline mb-2">
                                <p className="font-bold text-sm">Blogs</p>
                                <p className="text-xs text-gray-600">Latest industry insights</p>
                              </Link>
                              <Link to="/resources/case-studies" className="block hover:underline">
                                <p className="font-bold text-sm">Case Studies</p>
                                <p className="text-xs text-gray-600">Success stories</p>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link to={item.link} className="hover:text-gray-500 py-2 block">
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: CTA & Mobile Menu Toggle */}
        <div className="flex items-center space-x-3">
          <Link
            to="/book-demo"
            className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition"
          >
            Book a Demo
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="text-black focus:outline-none md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* ✅ Mobile Menu with Product → Series, Display, Technology (Text Only) */}
      {isOpen && (
        <div className="md:hidden bg-[#f8f8f8] shadow-md px-6 py-4 space-y-3">
          {navItems.map((item, index) => (
            <div key={index}>
              {item.dropdown ? (
                <>
                  <button
                    className="w-full flex justify-between items-center font-medium text-left"
                    onClick={() =>
                      setMobileDropdown(mobileDropdown === index ? null : index)
                    }
                  >
                    {item.name}
                    {mobileDropdown === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                  {mobileDropdown === index && (
                    <div className="ml-4 mt-2 space-y-3 text-sm text-gray-700 pb-2">
                      {item.dropdown.type === "product" && (
                        <>
                          <p className="font-semibold text-gray-900">Series</p>
                          <Link to="/products/digital_signage" className="block">Digital Signage</Link>
                          <Link to="/products/digitalstandi" className="block">Digital Standee</Link>
                          <Link to="/products/slimboard" className="block">Slim Board</Link>
                          <Link to="/products/impression_series" className="block">Impression Series</Link>

                          <p className="mt-3 font-semibold text-gray-900">Display</p>
                          <Link to="/products/lcd_video_wall" className="block">LCD Video Wall</Link>
                          <Link to="/products/lcd_video_wall_indoor" className="block">LED Video Wall Indoor</Link>
                          <Link to="/products/led_video_wall_outdoor" className="block">LED Video Wall Outdoor</Link>
                          <Link to="/products/led_commercial_display" className="block">LED Commercial Display</Link>

                          <p className="mt-3 font-semibold text-gray-900">Technology</p>
                          <Link to="/products/interactive-panel" className="block">Interactive Panel</Link>
                          <Link to="/products/conferencing-solutions" className="block">Conferencing Solutions</Link>
                          <Link to="/products/digital-volume" className="block">Digital Volume</Link>
                          <Link to="/products/active-led" className="block">Active LED</Link>
                        </>
                      )}

                      {item.dropdown.type === "solutions" && (
                        <>
                          <Link to="/solutions/education" className="block">Education</Link>
                          <Link to="/solutions/corporate" className="block">Corporate</Link>
                        </>
                      )}

                      {item.dropdown.type === "resources" && (
                        <>
                          <Link to="/resources/blogs" className="block">Blogs</Link>
                          <Link to="/resources/case-studies" className="block">Case Studies</Link>
                        </>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.link} className="block font-medium">
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
