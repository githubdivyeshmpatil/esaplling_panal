import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';



function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
  <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
            
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
