import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Productpage from "./pages/Productpage";
import Lcd_video_wall from "./components/Lcd_video_wall";
import Led_indoor from "./components/Led_indoor";
import Led_outdoor from "./components/Led_outdoor";
import Led_Commercial from "./components/Led_Commercial";
import Signage from "./pages/Signage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productspage" element={<Productpage />} />
        <Route path="/products/lcd_video_wall" element={<Lcd_video_wall />} />
        <Route
          path="/products/lcd_video_wall_indoor"
          element={<Led_indoor />}
        />
        <Route
          path="/products/led_video_wall_outdoor"
          element={<Led_outdoor />}
        />
        <Route
          path="/products/led_commercial_display"
          element={<Led_Commercial />}
        />
        <Route
          path="/products/digital_signage"
          element={<Signage />}
        />
      </Routes>
    </Router>
  );
}

export default App;

// h1	text-3xl sm:text-4xl md:text-5xl lg:text-6xl
// h2	text-2xl sm:text-3xl md:text-4xl lg:text-5xl
// h3 → text-lg sm:text-xl md:text-2xl lg:text-3xl
// h4 "text-base sm:text-lg md:text-xl lg:text-2xl font-medium

// p	text-base sm:text-lg md:text-xl
// p1 "text-sm sm:text-base md:text-lg text-justify
