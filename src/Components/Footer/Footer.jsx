import React from "react";

const Footer = () => {
  return (
    <div className="flex h-24 w-full items-center justify-center bg-black text-white">
      <p className="text-xl font-normal esm:text-[16px] lg:text-xl">
        {" "}
        &copy; Developed By{" "}
        <a target="_blank" href="https://github.com/hamimhossainm">
          Hamim Hossain
        </a>
      </p>
    </div>
  );
};

export default Footer;
