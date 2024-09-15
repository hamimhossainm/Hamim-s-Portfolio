import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";
import ExpItems from "./ExpItems";
import Slider from "react-slick";

const ExpSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false,
  };
  return (
    <div>
      <Slider {...settings}>
        {ExpItems.map((item) => (
          <div
            key={item.id}
            className="pt-10 transition-all duration-700 ease-in-out"
          >
            <div className="relative">
              <h1 className="absolute left-10 top-[-1px] font-poppinsSemibold text-2xl esm:text-base md:text-lg lg:text-2xl">
                {item.office}{" "}
                <span className="text-[#FF014F]">{item.desig}</span>
              </h1>
              <div className="absolute text-3xl text-[#FF014F]">
                <IoBriefcaseOutline />
              </div>
              <div className="absolute left-3 top-7 h-52 w-[2px] bg-[#f3749a]"></div>
            </div>
            <div className="ml-10 mt-12">
              <h4 className="mb-5 w-[285px] rounded-md bg-[#FF014F] px-3 font-poppinsSemibold text-white esm:w-[240px] esm:text-sm">
                {item.time}
              </h4>
              <p className="text-justify font-poppinsReg leading-relaxed text-slate-700 esm:text-[10px] md:text-[14px]">
                {item.des}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ExpSlider;
