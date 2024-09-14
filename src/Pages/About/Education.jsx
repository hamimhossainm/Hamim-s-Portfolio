import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
<FaGraduationCap />;

const Education = () => {
  return (
    <div className="pt-10 transition-all duration-700 ease-in-out">
      <div className="relative">
        <h1 className="absolute left-10 top-[-1px] font-poppinsSemibold text-2xl">
          BACHELOR OF SCIENCE <span className="text-[#FF014F]">(CSE)</span>
        </h1>
        <div className="absolute text-3xl text-[#FF014F]">
          <FaGraduationCap />
        </div>
        <div className="absolute left-3 top-7 h-44 w-[2px] bg-[#f3749a]"></div>
      </div>
      <div className="ml-10 mt-12">
        <h4 className="mb-5 w-[285px] rounded-md bg-[#FF014F] px-3 font-poppinsSemibold text-white">
          January 2020 - December 2024
        </h4>
        <p className="text-justify font-poppinsReg leading-relaxed text-slate-700">
          Focus areas include: Structured Programming Languages, Data
          Structures, Digital Logic Design, Numerical Methods, Data
          Communication, Microprocessor Systems, Assembly Language, C++, Java,
          .NET Framework, Compiler Construction, Software Engineering,
          Artificial Intelligence, Software Design and Development.
        </p>
      </div>
    </div>
  );
};

export default Education;
