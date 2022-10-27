import React from "react";
import FeatureShowcase from "./FeatureShowcase";
export default function Feature() {
  return (
    <div className='feature container mx-auto lg:h-5/6 md:h-auto pb-10 my-10'>
      <div className='feature__para flex flex-col md:mx-20 sm:mx-5 md:justify-center md:items-center lg:justify-start lg:items-start'>
        <h1 className='feature__para__header text-red-500 tracking-widest lg:text-xl md:text-sm font-bold '>
          {" "}
          PROJECTS{" "}
        </h1>
        <p className='feature__para__para sm:text-base md:text-xl text-center'>
          Explore some of mine latest website projects
        </p>
        <p className='feature__para__para sm:text-base md:text-xl text-center'>
          My skills:
          <span className='hover:text-red-500 transition cursor-default'>
            {" "}
            HTML5 CSS3
          </span>{" "}
          |
          <span className='hover:text-red-500 transition cursor-default'>
            {" "}
            GIT{" "}
          </span>
          |{" "}
          <span className='hover:text-red-500 transition cursor-default'>
            {" "}
            API{" "}
          </span>
          |{" "}
          <span className='hover:text-red-500 transition cursor-default'>
            {" "}
            JAVASCRIPT ES6{" "}
          </span>
          |{" "}
          <span className='hover:text-red-500 transition cursor-default'>
            {" "}
            REACTJS{" "}
          </span>
          |{" "}
          <span className='hover:text-red-500 transition cursor-default'>
            {" "}
            TAILWIND BS
          </span>{" "}
          |
        </p>

        <FeatureShowcase />
      </div>
    </div>
  );
}
