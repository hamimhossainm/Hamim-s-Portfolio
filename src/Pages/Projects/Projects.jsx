import React from "react";
import { NavLink, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import AllProjects from "./AllProjects";
import Portfolio from "./Portfolio";
import ECommerce from "./ECommerce";
import Corporate from "./Corporate";
import Blog from "./Blog";

const Projects = () => {
  const navLinks = [
    { id: 1, path: "/", name: "All" },
    { id: 2, path: "/portfolio", name: "Portfolio" },
    { id: 3, path: "/e-commerce", name: "E-commerce" },
    { id: 4, path: "/corporate-web", name: "Corporate" },
    { id: 5, path: "/blog", name: "Blog" },
  ];
  const location = useLocation();

  const redirectToWhatsApp = () => {
    const phoneNumber = "+8801904486467";
    const message = "Hamim Hossain ! Need Your Help";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section
      id="work"
      className="h-fit w-full bg-gradient-to-r from-[#FDF7E3] via-[#F2F8F6] to-[#F9F8F9] py-[88px] font-poppinsReg"
    >
      <h2 className="mb-5 text-center font-poppinsSemibold text-[36px]">
        Recent Works
      </h2>
      <div className="flex w-full justify-center">
        <div className="flex gap-x-4 esm:gap-x-2 md:gap-x-4 lg:gap-x-6">
          {navLinks.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `rounded-lg border-b-2 esm:text-[10px] md:text-[16px] lg:text-[18px] ${isActive ? "border-[#FF014F] bg-[#F9F8F9]" : "border-transparent"} px-2 py-1 font-poppinsSemibold shadow-md`
              }
              end
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="flex w-full justify-center">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <div>
              <Routes location={location}>
                <Route path="/" element={<AllProjects />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/e-commerce" element={<ECommerce />} />
                <Route path="/corporate-web" element={<Corporate />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <div className="mt-10 flex w-full justify-center esm:hidden md:block lg:flex lg:w-full lg:justify-center xl:flex xl:w-full xl:justify-center">
        <div className="rounded-lg border-x-4 border-orange-500 bg-transparent px-40 py-10 shadow-2xl lg:w-[80%] xl:w-[80%]">
          <h2 className="mb-5 font-poppinsSemibold text-2xl uppercase md:flex md:justify-center md:text-xl lg:flex lg:justify-center lg:text-2xl">
            I am available for freelance projects
          </h2>
          <button
            onClick={redirectToWhatsApp}
            className="mx-auto block animate-bounce rounded-md bg-[#30D14E] px-2 py-1 font-semibold text-white"
          >
            Hire Me !
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
