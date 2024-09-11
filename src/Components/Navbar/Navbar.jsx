import React, { useState, useEffect } from "react";

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
    <div className="font-poppinsReg fixed left-0 top-0 z-50 flex h-[88px] w-full items-center justify-center bg-transparent shadow-md backdrop-blur-md">
      <div className="flex h-full w-full items-center justify-between px-20">
        <div className="">
          <img className="w-[200px]" src="/public/images/logo.png" alt="" />
        </div>
        <div className="text-4 flex gap-x-12 font-semibold">
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
                className={`absolute bottom-[-3px] left-0 h-[2px] bg-[#FF014F] transition-all duration-700 ease-in-out ${
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
  );
};

export default Navbar;
