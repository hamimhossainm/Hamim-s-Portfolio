import React, { useState, useEffect } from "react";
import { MdMenuOpen } from "react-icons/md";
import { DiAptana } from "react-icons/di";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
  const navItems = [
    { sl: 1, id: "#home", name: "Home" },
    { sl: 2, id: "#about", name: "About" },
    { sl: 3, id: "#service", name: "Services" },
    { sl: 4, id: "#work", name: "Projects" },
    { sl: 5, id: "#contact", name: "Contact" },
  ];

  const [hovered, setHovered] = useState(null);
  const [activeSection, setActiveSection] = useState(1);
  const [open, setopen] = useState(false);
  const [close, setclose] = useState(false);

  const menu = () => {
    if (open) {
      setopen(false);
    } else {
      setopen(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.querySelector(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(navItems[index].sl);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={`fixed left-0 top-0 z-50 flex h-[88px] w-full items-center justify-center bg-transparent font-poppinsReg backdrop-blur-md transition-all duration-1000 ease-in-out ${
          open ? "" : "shadow-md"
        }`}
      >
        <div className="flex h-full w-full items-center justify-between px-20 md:px-14 esm:px-10">
          <div className="">
            <img
              className="esm:h-22[88px] w-[200px] esm:w-[200px]"
              src="/public/images/logo.png"
              alt=""
            />
          </div>

          <div
            onClick={menu}
            className="hidden md:hidden esm:block esm:transition-all esm:duration-300 esm:ease-out"
          >
            {open ? (
              <FaRegWindowClose className="esm:text-3xl" />
            ) : (
              <MdMenuOpen className="esm:text-4xl" />
            )}
          </div>

          <div className="text-4 md: flex gap-x-12 font-semibold md:flex md:gap-x-8 md:text-[16px] esm:hidden">
            {navItems.map((item) => (
              <a
                key={item.sl}
                onMouseEnter={() => setHovered(item.sl)}
                onMouseLeave={() => setHovered(null)}
                href={item.id}
                className={`relative transition-all duration-200 ease-in-out hover:text-[#FF014F] ${
                  activeSection === item.sl ? "text-[#FF014F]" : ""
                }`}
              >
                {item.name}
                <div
                  className={`absolute bottom-[-3px] left-0 h-[2px] bg-[#FF014F] transition-all duration-700 ease-in-out md:block esm:hidden ${
                    hovered === item.sl || activeSection === item.sl
                      ? "w-2/4"
                      : "w-1 opacity-0"
                  }`}
                ></div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`absolute hidden w-full -translate-x-full bg-transparent pt-[88px] text-xl font-semibold shadow-md backdrop-blur-md transition-all duration-700 ease-in-out md:hidden esm:block ${
          open ? "translate-x-0" : ""
        } ${close ? "-translate-x-full" : ""}`}
      >
        <div className="grid-row-1 grid h-fit w-full place-items-center gap-y-8 bg-transparent py-4">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#service">Services</a>
          <a href="#work">Projects</a>
          <a href="#contact">Contact</a>
          <button>
            <DiAptana />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
