import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col">
          <div className="my-auto mx-6">
            <h1 className="text-4xl font-bold mb-4 primary-color">About Me</h1>
            <p className="text-base lg:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              architecto at unde in fuga reiciendis magni laudantium vel libero
              nulla quod laborum, temporibus eveniet corporis soluta eius
              officiis quos vitae.
            </p>
          </div>
        </div>
        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={aboutImg}
          alt="about"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default About;
