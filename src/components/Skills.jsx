import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";

const Skills = () => {
  return (
    <div className="py-auto">
      <div className="my-auto mx-6">
        <h1 className="text-4xl font-bold mb-4 primary-color">My Tech Stack</h1>
      </div>

      <div
        className=" bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto 
        grid grid-cols-5 place-items-center md:flex md:justify-between md:items-center"
      >
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={tailwind} alt="tailwind logo" />
          <p className="mt-2">Tailwind</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={html} alt="tailwind logo" />
          <p className="mt-2">HTML</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={css} alt="tailwind logo" />
          <p className="mt-2">CSS</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={javascript} alt="tailwind logo" />
          <p className="mt-2">JavaScript</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={react} alt="tailwind logo" />
          <p className="mt-2">React</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
