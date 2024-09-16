import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";

const About = () => {
  const aboutItems = [
    { id: 1, path: "/", name: "Biography" },
    { id: 2, path: "/skills", name: "Skills" },
    { id: 3, path: "/education", name: "Education" },
    { id: 4, path: "/experience", name: "Experience" },
  ];
  const location = useLocation();

  return (
    <section
      id="about"
      className="h-fit w-full bg-gradient-to-r from-[#FDF7E3] via-[#F2F8F6] to-[#F9F8F9] pt-[88px] font-poppinsReg"
    >
      <h2 className="text-center font-poppinsSemibold text-4xl">About Me</h2>
      <div className="flex h-fit w-full justify-between px-10 pt-10 esm:block lg:flex lg:justify-between">
        <div className="esm:mb-10 esm:flex esm:w-full esm:justify-center lg:hidden">
          <img
            className="esm:bg-red border-orange-500 esm:w-56 esm:bg-[#f3eaed] md:w-64"
            src="/public/images/Hamim copy - Copy.png"
            alt=""
          />
        </div>
        <div className="w-[60%] esm:w-full md:w-full lg:w-[60%]">
          <div className="esm:full mb-20 esm:flex esm:justify-center lg:justify-start">
            {aboutItems.map((item) => (
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `mr-20 rounded-lg bg-transparent px-3 py-2 font-bold shadow-xl esm:ml-4 esm:mr-8 esm:px-2 esm:py-1 esm:text-[10px] md:text-[16px] lg:text-[18px] xl:text-[20px] ${
                    isActive ? "border-b-2 border-red-600 text-[#FF014F]" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          <div>
            <TransitionGroup>
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <div>
                  <Routes location={location}>
                    <Route path="/" element={<AboutMe />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/experience" element={<Experience />} />
                  </Routes>
                </div>
              </CSSTransition>
            </TransitionGroup>
          </div>
        </div>
        <div className="w-[30%] esm:hidden lg:block lg:w-[30%]">
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

export default About;
