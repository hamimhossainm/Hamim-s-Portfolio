import React from "react";
import { FaDownload } from "react-icons/fa";

const AboutMe = () => {
  return (
    <div>
      <p className="mb-5 font-poppinsSemibold text-[26px] text-[#0b0b20]">
        Hello, This is Hamim{" "}
      </p>
      <p className="mb-14 text-justify leading-loose text-slate-700">
        Experienced Frontend Developer with a strong background in creating
        responsive and user-friendly web applications. Proven success in
        optimizing website performance, developing intuitive user interfaces,
        and collaborating with crossfunctional teams to drive project success.
        Skilled in{" "}
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
        . Excellent problem-solving and communication skills. Committed to
        delivering high-quality code and enhancing user experience to achieve
        organizational goals and foster innovation.
      </p>

      <a
        className="flex w-[28%] items-center justify-center gap-x-3 rounded-md bg-slate-800 px-2 py-2 font-poppinsSemibold text-white shadow-lg transition-all duration-300 ease-in-out hover:translate-y-4"
        href="/public/Hamim Hossain Resume.pdf"
        target="_blank"
      >
        <FaDownload className="" /> Download CV
      </a>
    </div>
  );
};

export default AboutMe;
