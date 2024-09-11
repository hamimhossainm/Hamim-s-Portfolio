import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaStackOverflow } from "react-icons/fa";

const Home = () => {
  return (
    <section
      id="home"
      className="font-poppinsSemibold flex h-fit w-full items-center justify-center bg-transparent pt-[88px]"
    >
      <div className="py-[60px]">
        <h1 className="mb-4 flex justify-center gap-x-4 text-[59.2px]">
          I'm <span className="text-[#FF014F]"> Hamim Hossain</span>
        </h1>
        <div className="mb-4 flex justify-center">
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              3000,
              "HTML Developer",
              3000,
              "UI/UX Designer",
              3000,
            ]}
            wrapper="span"
            speed={5}
            style={{ fontSize: "3.7em", display: "inline-block" }}
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
        <div className="flex justify-center gap-x-10">
          <a
            className="rounded-lg border-2 border-slate-900 bg-slate-900 px-6 py-3 text-white shadow-2xl"
            href="#work"
          >
            View Projects
          </a>
          <a
            className="rounded-lg border-2 border-slate-900 bg-transparent px-6 py-[12px] text-slate-900 shadow-xl transition-all duration-300 ease-in-out hover:bg-slate-900 hover:text-white"
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
