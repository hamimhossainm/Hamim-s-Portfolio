import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { IoLogoSass } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { FaLaravel } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";

const Skills = () => {
  return (
    <div className="pt-10 transition-all duration-700 ease-in-out esm:pt-1">
      <div className="grid grid-cols-4 gap-x-2 gap-y-10 font-poppinsSemibold esm:grid-cols-2 md:grid-cols-3">
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
          <IoLogoSass className="text-xl text-[#C66394]" /> SASS
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <FaGithub /> GITHUB
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <SiJavascript className="bg-black text-[#EFD81D]" /> JAVASCRIPT
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <SiPhp className="bg-transparent text-xl text-[#7377AD]" /> PHP
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <FaReact className="text-[#49cdf1]" /> REACT
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <FaLaravel className="text-[#F72C1F]" /> LARAVEL
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <SiRedux className="text-[#7248B6]" /> REDUX TOOLKIT
        </button>
        <button className="flex w-40 items-center justify-center gap-x-2 border-2 bg-transparent shadow-xl">
          <IoLogoFirebase className="text-[#EA4C1D]" /> FIREBASE
        </button>
      </div>
    </div>
  );
};

export default Skills;
