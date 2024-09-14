import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

const About = () => {
  return (
    <section
      id="about"
      className="h-fit w-full bg-gradient-to-r from-[#FDF7E3] via-[#F2F8F6] to-[#F9F8F9] pt-[88px] font-poppinsReg"
    >
      <h2 className="text-center font-poppinsSemibold text-4xl">About Me</h2>
      <div className="flex h-fit w-full justify-between px-10 pt-10">
        <div className="w-[60%]">
          <div className="mb-20">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `mr-20 rounded-lg bg-transparent px-3 py-2 font-bold shadow-xl ${
                  isActive ? "border-b-2 border-red-600 text-[#FF014F]" : ""
                }`
              }
            >
              About Me
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `mr-20 rounded-lg bg-transparent px-3 py-2 font-bold shadow-xl ${
                  isActive ? "border-b-2 border-red-600 text-[#FF014F]" : ""
                }`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/education"
              className={({ isActive }) =>
                `mr-20 rounded-lg bg-transparent px-3 py-2 font-bold shadow-xl ${
                  isActive ? "border-b-2 border-red-600 text-[#FF014F]" : ""
                }`
              }
            >
              Education
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) =>
                `mr-20 rounded-lg bg-transparent px-3 py-2 font-bold shadow-xl ${
                  isActive ? "border-b-2 border-red-600 text-[#FF014F]" : ""
                }`
              }
            >
              Experience
            </NavLink>
          </div>

          <div>
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
            </Routes>
          </div>
        </div>
        <div className="w-[30%]">
          <img
            className="backdrop-blur-2xl"
            src="/public/images/Hamim copy.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
};

export default App;
