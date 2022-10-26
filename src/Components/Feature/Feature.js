import React from "react";
import FeatureShowcase from "./FeatureShowcase";
export default function Feature() {
  return (
    <div className='feature container mx-auto lg:h-5/6 md:h-auto pb-10 my-10'>
      <div className='feature__para flex flex-col md:mx-20 sm:mx-5 justify-start items-start'>
        <h1 className='feature__para__header text-red-500 tracking-widest lg:text-xl md:text-sm font-bold '>
          {" "}
          PROJECTS{" "}
        </h1>
        <p className='feature__para__para text-xl text-left'>
          Explore some of mine latest website projects
        </p>
        <p className='feature__para__para text-xl text-left'>
          My skills: HTML5 CSS3 | GIT, API | JAVASCRIPT ES6 | REACTJS | TAILWIND BS |
          
        </p>
        <FeatureShowcase />
      </div>
    </div>
  );
}
