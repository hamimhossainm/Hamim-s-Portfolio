import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <main className="h-screen w-full bg-gradient-to-r from-[#FCF0C0] via-[#E3F0E6] to-[#F4FFFF]">
      <Navbar />
      <Home />
    </main>
  );
};

export default App;
