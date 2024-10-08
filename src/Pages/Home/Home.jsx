import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";
import { CgShapeHexagon } from "react-icons/cg";

const Home = () => {
  return (
    <section
      id="home"
      className="flex h-fit w-full items-center justify-center bg-transparent pt-[88px] font-poppinsSemibold"
    >
      <div className="py-[60px] esm:px-5 esm:py-10">
        <h1 className="mb-4 flex justify-center gap-x-4 text-[59.2px] esm:text-[30px] md:text-[45px] xl:text-[59px]">
          I'm <span className="text-[#FF014F]"> Hamim Hossain</span>
        </h1>
        <div className="mb-4 flex justify-center esm:text-[27px] md:text-[45px] xl:text-[59px]">
          <TypeAnimation
            sequence={["Frontend Developer", 3000, "React Developer", 3000]}
            wrapper="span"
            speed={5}
            style={{ fontSize: "", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div className="mb-14 flex justify-center gap-x-4">
          <a href="https://www.facebook.com/hamim641h" target="_blank">
            <FaFacebookSquare className="text-3xl text-[#1297EF] shadow-xl hover:text-[#2E4474]" />
          </a>
          <a
            href="https://www.linkedin.com/in/hamim-hossain2308/"
            target="_blank"
          >
            <FaLinkedin className="text-3xl text-[#0A66C2] shadow-xl hover:text-[#2E4474]" />
          </a>
          <a href="https://github.com/hamimhossainm" target="_blank">
            <FaGithub className="text-3xl text-gray-900 shadow-xl hover:text-black" />
          </a>
          <a
            href="https://stackoverflow.com/users/26340791/hamim"
            target="_blank"
          >
            <FaStackOverflow className="text-3xl text-orange-500 shadow-xl hover:text-orange-700" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-x-10">
          <a
            className="rounded-lg border-2 border-slate-900 bg-slate-900 px-6 py-3 text-white shadow-2xl esm:px-2 esm:py-1 esm:text-[14px] xl:px-6 xl:py-3 xl:text-[18px]"
            href="#work"
          >
            View Projects
          </a>
          <a
            className="rounded-lg border-2 border-slate-900 bg-transparent px-6 py-[12px] text-slate-900 shadow-xl transition-all duration-300 ease-in-out hover:bg-slate-900 hover:text-white esm:px-2 esm:py-1 esm:text-[14px] xl:px-6 xl:py-3 xl:text-[18px]"
            href="#about"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
