import React from "react";
import GalleryShowcase from "./ShowreelShowcase";
import { useInView } from "react-intersection-observer";

export default function Showreel() {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: paraRef, inView: paraVisible } = useInView();
  const headerClassName = `${
    headerVisible ? "slide-top" : ""
  } showreel__para__header text-red-500 tracking-widest lg:text-xl md:text-sm font-bold `;
  const paraClassName = `${
    paraVisible ? "slide-top-delay-1" : ""
  } showreel__para__para sm:text-base md:text-xl text-center`;
  return (
    <div className='showreel container mx-auto lg:h-5/6 md:h-auto mt-10'>
      <div className='showreel__para flex flex-col md:mx-20 sm:mx-5 md:justify-center md:items-center lg:justify-start lg:items-center'>
        <h1 ref={headerRef} className={`${headerClassName}`}>
          {" "}
          SHOWREEL{" "}
        </h1>
        <p ref={paraRef} className={`${paraClassName}`}>
          Footage taken and edited by me.
          <p>
            Want to watch more?{" "}
            <a
              href='https://www.youtube.com/channel/UCDcODZCSLeWELJ4wP8mWJtw'
              target='_blank'>
              <span className='sm:text-base md:text-xl underline text-center'>
                My Youtube
              </span>
            </a>
          </p>
        </p>
        <GalleryShowcase />
      </div>
    </div>
  );
}
