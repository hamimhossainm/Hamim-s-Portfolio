import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobephotoshop } from "react-icons/si";

const Skills = () => {
  return (
    <div className="pt-10 transition-all duration-700 ease-in-out">
      <div className="grid grid-cols-4 gap-x-2 gap-y-10 font-poppinsSemibold">
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <FaHtml5 className="bg-white text-[#DD4B25]" /> HTML5
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <FaCss3Alt className="text-[#254BDD]" /> CSS3
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <FaBootstrap className="text-[#8A11F4]" /> BOOTSTRAP5
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <RiTailwindCssFill className="text-[#36B7F0]" /> TAILWIND CSS
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <FaGithub /> GITHUB
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <SiJavascript className="bg-black text-[#EFD81D]" /> JAVASCRIPT
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <FaReact className="text-[#49cdf1]" /> REACT
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <SiRedux className="text-[#7248B6]" /> REDUX TOOLKIT
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <IoLogoFigma className="text-[#EA4C1D]" /> FIGMA
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <SiAdobephotoshop className="bg-[#2FA3F7] text-[#001D34]" /> PHOTOSHOP
        </button>
      </div>
    </div>
  );
};

export default Skills;
