import React from "react";
import { HiOutlineMailOpen } from "react-icons/hi";
import { LiaSmsSolid } from "react-icons/lia";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <section
      id="contact"
      className="h-fit w-full bg-gradient-to-r from-[#FDF7E3] via-[#F2F8F6] to-[#F9F8F9] pt-[88px] font-poppinsReg"
    >
      <h2 className="text-center font-poppinsSemibold text-[36px]">
        Get In Touch
      </h2>
      <div className="w-full">
        <div className="flex w-full pb-10 pt-20 esm:flex-col esm:pb-5 esm:pt-5 lg:flex-row lg:pb-10 lg:pt-20">
          <div className="w-[35%] px-20 esm:w-full esm:px-5 lg:w-[35%] lg:px-20">
            <h1 className="mb-4 text-[25px] font-bold esm:mb-2 esm:text-center esm:text-[20px] lg:mb-4 lg:text-left lg:text-[25px]">
              Quick Contact
            </h1>
            <p className="text-[18px] font-bold text-slate-600 esm:text-center esm:text-[14px] lg:text-left lg:text-[18px]">
              Don't like forms? Send me an{" "}
              <a
                className="text-orange-500"
                href="mailto:hamim641h@gmail.com?subject=Need%20to%20disscuss%20with%20Hamim%20Hossain&body=Hello,%20I%20need%20to%20talk"
              >
                Email
              </a>
            </p>
            <div className="mt-20 esm:mt-5 lg:mt-20">
              <div className="mb-10 flex items-center gap-x-4 esm:mb-4 lg:mb-10">
                <div className="text-3xl esm:text-xl lg:text-3xl">
                  <HiOutlineMailOpen />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#FF014F] esm:text-[15px] lg:text-xl">
                    Email
                  </h2>
                  <p className="text-[18px] font-bold text-slate-700 esm:text-[13px] lg:text-[18px]">
                    hamimhossain.inbox@outlook.com
                  </p>
                </div>
              </div>

              <div className="mb-10 flex items-center gap-x-4 esm:mb-4 lg:mb-10">
                <div className="text-3xl esm:text-xl lg:text-3xl">
                  <LiaSmsSolid />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[#FF014F] esm:text-[15px] lg:text-xl">
                    Social Media
                  </h2>
                  <div className="flex gap-x-3">
                    <a
                      className="text-2xl text-[#395693] esm:text-[18px] lg:text-2xl"
                      href="https://www.facebook.com/hamim641h"
                      target="_blank"
                    >
                      <FaFacebookSquare />
                    </a>

                    <a
                      className="text-2xl text-[#006294] esm:text-[18px] lg:text-2xl"
                      href="https://www.linkedin.com/in/hamim-hossain2308/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>

                    <a
                      className="text-2xl text-[#1C96E8] esm:text-[18px] lg:text-2xl"
                      href="https://x.com/"
                      target="_blank"
                    >
                      <FaTwitterSquare />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mb-10 flex items-center gap-x-4">
                <div className="text-3xl esm:text-xl lg:text-3xl">
                  <FaMapLocationDot />
                </div>
                <div>
                  <h2 className="text-xl font-bold esm:text-[15px] lg:text-xl">
                    Location
                  </h2>
                  <p className="text-[16px] esm:text-[13px] lg:text-[16px]">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[60%] px-20 esm:w-full esm:px-5 lg:w-[60%] lg:px-20">
            <div className="mb-6 flex w-full justify-between esm:mb-3 esm:flex-col lg:mb-6 lg:flex-row">
              <div className="w-[48%] esm:w-full lg:w-[48%]">
                <label
                  className="text-xl font-semibold esm:text-[16px] lg:text-xl"
                  htmlFor="name"
                >
                  Name
                </label>

                <br />
                <input
                  className="mt-4 w-full rounded-md border-b-2 border-orange-400 px-4 py-4 text-xl text-orange-700 shadow-xl outline-none esm:mt-1 esm:py-1 esm:text-[16px] lg:mt-4 lg:py-4 lg:text-xl"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>

              <div className="w-[48%] esm:mt-3 esm:w-full lg:mt-0 lg:w-[48%]">
                <label
                  className="text-xl font-semibold esm:text-[16px] lg:text-xl"
                  htmlFor="name"
                >
                  Email
                </label>

                <br />
                <input
                  className="mt-4 w-full rounded-md border-b-2 border-orange-400 px-4 py-4 text-xl text-orange-700 shadow-xl outline-none esm:mt-1 esm:py-1 esm:text-[16px] lg:mt-4 lg:py-4 lg:text-xl"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="mb-6 w-full esm:mb-3 lg:mb-6">
              <label
                className="text-xl font-semibold esm:text-[16px] lg:text-xl"
                htmlFor="subject"
              >
                Subject
              </label>

              <br />
              <input
                className="mt-4 w-full rounded-md border-b-2 border-orange-400 px-4 py-4 text-xl text-orange-700 shadow-xl outline-none esm:mt-2 esm:py-1 esm:text-[16px] lg:mt-4 lg:py-4 lg:text-xl"
                type="text"
                name="subject"
                placeholder="Enter subject"
              />
            </div>

            <div className="mb-6 w-full">
              <label
                className="text-xl font-semibold esm:text-[16px] lg:text-xl"
                htmlFor="message"
              >
                Message
              </label>

              <br />
              <textarea
                rows={6}
                className="mt-4 w-full resize-none rounded-md border-b-2 border-orange-400 px-4 py-4 text-xl text-orange-700 shadow-xl outline-none esm:mt-2 esm:text-[16px] lg:mt-4 lg:text-xl"
                type="text"
                placeholder="Enter your message"
              />
            </div>
            <button className="flex items-center gap-x-2 rounded-md bg-slate-800 px-5 py-3 text-xl font-medium text-white esm:px-3 esm:py-2 esm:text-[16px] lg:px-5 lg:py-3 lg:text-xl">
              <IoIosSend /> Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
