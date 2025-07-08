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
import SlimBoard from "./pages/SlimBoard";
import DigitalStandi from "./pages/DigitalStandi";
import Footer from "./components/Footer";
import Impewssionseries from "./pages/Impewssionseries";
import Intractive_Panal from "./pages/Intractive_Panal";
import Conferencing_solution from "./pages/Conferencing_solution";
import Didital_volume from "./pages/Didital_volume";
import Active_led from "./pages/Active_led";

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
          <Route
          path="/products/slimboard"
          element={<SlimBoard />}
        />
        <Route
          path="/products/digitalstandi"
          element={<DigitalStandi />}
        />
         <Route
          path="/products/impression_series"
          element={<Impewssionseries />}
        />
         <Route
          path="/products/intractive_panal"
          element={<Intractive_Panal />}
        />
         <Route
          path="/products/conferencing_solution"
          element={<Conferencing_solution />}
        />
          <Route
          path="/products/digital_volume"
          element={<Didital_volume/>}
        />
         <Route
          path="/products/active_led"
          element={<Active_led/>}
        />
      </Routes>
        <Footer />
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
