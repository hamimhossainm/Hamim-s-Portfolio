import React, { useState } from "react";
import Slider from "react-slick";
import reviewItem from "./ReviewItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const [next, setnext] = useState(2);
  const viewMore = () => {
    setnext(next + 2);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="testimonial"
      className="flex h-fit w-full flex-col items-center justify-center bg-gradient-to-r from-[#FCF0C0] via-[#E3F0E6] to-[#F4FFFF] pt-[88px] font-poppinsSemibold"
    >
      <h2 className="mb-5 text-[36px] esm:mb-2 lg:mb-5">Testimonial</h2>
      <h1 className="font-Trebuchet text-3xl font-extrabold tracking-widest text-orange-600 esm:mb-4 esm:text-[22px] lg:text-3xl">
        Peoples saying about me
      </h1>
      <div className="w-full max-w-6xl px-4 py-10 esm:hidden lg:block">
        <Slider {...settings}>
          {reviewItem.map((item, index) => (
            <div key={index} className="ml-20 px-4 py-10">
              <div className="h-[410px] w-[380px] cursor-pointer rounded-md bg-white px-5 py-5 text-center shadow-2xl">
                <img
                  className="mx-auto mb-5 block w-[40%] rounded-full"
                  src={item.img}
                  alt="img"
                />
                <h2 className="text-2xl">{item.name}</h2>
                <p className="mb-2 font-poppinsReg text-[14px]">{item.desig}</p>
                <p className="mb-5 flex justify-center gap-x-1 text-yellow-400">
                  {item.icon}
                </p>
                <p className="font-poppinsReg text-slate-600">{item.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="grid-cols-1 esm:grid lg:hidden">
        {reviewItem.slice(0, next).map((item, index) => (
          <div key={index} className="">
            <div className="mb-10 h-[410px] w-[380px] cursor-pointer rounded-md bg-white px-5 py-5 text-center shadow-2xl">
              <img
                className="mx-auto mb-5 block w-[40%] rounded-full"
                src={item.img}
                alt="img"
              />
              <h2 className="text-2xl">{item.name}</h2>
              <p className="mb-2 font-poppinsReg text-[14px]">{item.desig}</p>
              <p className="mb-5 flex justify-center text-yellow-400">
                {item.icon}
              </p>
              <p className="font-poppinsReg text-slate-600">{item.review}</p>
            </div>
          </div>
        ))}
        <div className="mb-5 mt-5 text-center">
          {next < reviewItem.length && (
            <button
              onClick={viewMore}
              className="rounded-sm bg-slate-800 px-2 py-1 text-[14px] font-semibold text-white shadow-lg"
            >
              View More
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
