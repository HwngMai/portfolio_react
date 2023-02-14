import React from "react";
import { useInView } from "react-intersection-observer";
import FeatureShowcase from "./FeatureShowcase";
export default function Feature() {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: paraRef, inView: paraVisible } = useInView();
  const { ref: para2Ref, inView: para2Visible } = useInView();
  const headerClassName = `${
    headerVisible ? "slide-top" : ""
  } feature__para__header text-red-500 tracking-widest lg:text-xl md:text-sm font-bold `;
  const paraClassName = `${
    paraVisible ? "slide-top-delay-1" : ""
  } feature__para__para sm:text-base md:text-xl text-center`;
  const para2ClassName = `${
    paraVisible ? "slide-top-delay-2" : ""
  } feature__para__para sm:text-base md:text-xl text-center`;
  return (
    <div className='feature container mx-auto lg:h-5/6 md:h-auto pb-10 my-10'>
      <div className='feature__para flex flex-col md:mx-20 sm:mx-5 md:justify-center md:items-center lg:justify-start lg:items-center'>
        <h1 ref={headerRef} className={`${headerClassName}`}>
          {" "}
          PROJECTS{" "}
        </h1>
        <p ref={paraRef} className={`${paraClassName}`}>
          Explore some of mine latest website projects
        </p>
        <p ref={para2Ref} className={`${para2ClassName}`}>
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
        <p ref={para2Ref} className={`${para2ClassName}`}>
          Want to read more?
          <a
            target='_blank'
            className='inline-block ml-1'
            href='https:/www.github.com/hwngmai'>
            <span className='sm:text-base md:text-xl underline text-center'>
              My Github
            </span>
          </a>{" "}
        </p>
        <FeatureShowcase />
      </div>
    </div>
  );
}
