import React from "react";
import serviceItems from "./ServiceItems";

const Services = () => {
  return (
    <section
      id="service"
      className="flex h-fit w-full items-center justify-center bg-gradient-to-r from-[#FCF0C0] via-[#E3F0E6] to-[#F4FFFF] pt-[88px] font-poppinsSemibold"
    >
      <div className="w-full">
        <h2 className="mb-5 text-center text-[36px]">What I Do</h2>

        <div className="grid w-full grid-cols-3 place-items-center px-10 pb-10 esm:grid-cols-1 esm:pb-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((item) => (
            <div className="mb-5 h-[265px] w-[340px] cursor-pointer rounded-md border-orange-500 bg-white px-5 py-8 text-center shadow-lg transition-all duration-75 ease-in-out hover:border-x-2 hover:shadow-2xl lg:h-[280px] lg:w-[300px] xl:h-[265px] xl:w-[340px]">
              <p className="flex w-full justify-center text-4xl text-[#FF014F] hover:animate-pulse">
                {item.icon}
              </p>
              <h1 className="mb-2 mt-4 text-[22px]">{item.name}</h1>
              <p className="font-poppinsReg text-[14px] text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <h3 className="lg-[17px] pb-4 text-center uppercase esm:text-[14px] md:text-[16px]">
          If you want to hire me,{" "}
          <a className="text-[#FF014F]" href="#contact">
            Click Here
          </a>{" "}
          to contact me !
        </h3>
      </div>
    </section>
  );
};

export default Services;
