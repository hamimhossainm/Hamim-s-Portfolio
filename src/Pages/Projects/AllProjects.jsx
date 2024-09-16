import React, { useState } from "react";
import allProjects from "./AllProjectsItem";
import { BsGithub } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";

const AllProjects = () => {
  const [next, setnext] = useState(3);
  const [hoveredId, sethoveredId] = useState(null);

  const viewMore = () => {
    setnext(next + 3);
  };

  const filteredProjects = allProjects.filter((item) =>
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].includes(item.id),
  );

  return (
    <div className="mt-20 esm:mt-5 md:mt-10 lg:mt-14 xl:mt-20">
      <div className="grid grid-cols-3 place-items-center gap-x-10 esm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.slice(0, next).map((item) => (
          <div
            onMouseEnter={() => sethoveredId(item.id)}
            onMouseLeave={() => sethoveredId(null)}
            key={item.id}
            className="relative mb-10 h-[420px] w-[380px] cursor-pointer rounded-lg border-b-2 border-orange-500 bg-white px-2 py-2 shadow-xl"
          >
            <img
              className={`mx-auto block w-[340px] shadow-md transition-all duration-1000 ease-in-out ${
                hoveredId === item.id ? "opacity-80" : ""
              }`}
              src={item.image}
              alt={item.name}
            />
            <h2 className="mt-5 text-center font-poppinsSemibold text-xl">
              {item.name}
            </h2>
            <p className="mt-2 px-4 text-justify text-[14px] text-slate-700">
              {item.description}
            </p>
            <div className="absolute bottom-2 ml-8 flex gap-x-10">
              <a
                className="flex items-center justify-center gap-x-2 rounded-md bg-slate-900 px-2 py-1 text-[14px] font-bold text-white"
                href="#"
                target="_blank"
              >
                <BsGithub /> Source Code
              </a>
              <a
                className="flex items-center justify-center gap-x-1 text-[14px] font-bold"
                href="#"
                target="_blank"
              >
                <TbWorld /> View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        {next < filteredProjects.length && (
          <button
            onClick={viewMore}
            className="rounded-sm bg-slate-800 px-2 py-1 text-[14px] font-semibold text-white shadow-lg"
          >
            View More
          </button>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
