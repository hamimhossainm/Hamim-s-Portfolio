import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "./Pages/Service/Services";
import Projects from "./Pages/Projects/Projects";
import { BrowserRouter } from "react-router-dom";
import Testimonial from "./Pages/Review/Testimonial";

const App = () => {
  return (
    <main className="h-screen w-full bg-gradient-to-r from-[#FCF0C0] via-[#E3F0E6] to-[#F4FFFF]">
      <Navbar />
      <Home />
      <BrowserRouter>
        <About />
      </BrowserRouter>
      <Services />
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
      <Testimonial />
    </main>
  );
};

export default App;
