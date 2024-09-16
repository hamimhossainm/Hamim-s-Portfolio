import React from "react";
import { FaDownload } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div className="lg:pb-10">
      <p className="mb-5 font-poppinsSemibold text-[26px] text-[#0b0b20] lg:text-[26px]">
        Hello, This is Hamim{" "}
      </p>
      <p className="mb-14 text-justify leading-loose text-slate-700 esm:mb-10 esm:text-[14px] esm:leading-relaxed lg:text-lg lg:leading-loose">
        Frontend Developer with expertise in responsive web applications,
        performance optimization, and intuitive UI design. Skilled in{" "}
        <span className="font-poppinsSemibold text-[#DD4B25]">HTML5</span>,{" "}
        <span className="font-poppinsSemibold text-[#254BDD]">CSS3</span>,{" "}
        <span className="font-poppinsSemibold text-[#cebb2f]">JavaScript</span>,
        and modern frameworks like{" "}
        <span className="font-poppinsSemibold text-[#3bc2e7]">React</span>,{" "}
        <span className="font-poppinsSemibold text-[#7010EF]">BOOTSTRAP5</span>{" "}
        &{" "}
        <span className="font-poppinsSemibold text-[#36B7F0]">
          Tailwind CSS
        </span>{" "}
        . Strong problem-solving and communication skills, dedicated to
        delivering high-quality code and enhancing user experience to drive
        innovation.
      </p>

      <a
        className="flex w-[28%] items-center justify-center gap-x-3 rounded-md bg-slate-800 px-2 py-2 font-poppinsSemibold text-white shadow-lg transition-all duration-300 ease-in-out hover:translate-y-4 esm:hidden lg:flex lg:items-center lg:justify-center lg:gap-x-2"
        href="/public/Hamim Hossain Resume.pdf"
        target="_blank"
      >
        <FaDownload className="" /> Download CV
      </a>
      <a
        className="hidden px-2 esm:flex esm:w-[160px] esm:items-center esm:justify-center esm:gap-x-2 esm:rounded-sm esm:bg-slate-800 esm:py-1 esm:font-poppinsSemibold esm:text-[12px] esm:text-white lg:hidden"
        href="/public/Hamim Hossain Resume.pdf"
        target="_blank"
      >
        <FaDownload className="esm:animate-bounce" /> Download CV
      </a>
    </div>
  );
};

export default AboutMe;
