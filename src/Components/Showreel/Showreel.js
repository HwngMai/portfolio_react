import React from "react";
import GalleryShowcase from "./ShowreelShowcase";

export default function Showreel() {
  return (
    <div className='showreel container mx-auto lg:h-5/6 md:h-auto mt-10'>
      <div className='showreel__para flex flex-col md:mx-20 sm:mx-5 md:justify-center md:items-center lg:justify-start lg:items-start'>
        <h1 className='showreel__para__header text-red-500 md:text-sm lg:tracking-widest lg:text-xl font-bold '>
          {" "}
          SHOWREEL{" "}
        </h1>
        <p className='showreel__para__para text-center sm:text-base md:text-xl'>
          Footage taken and edited by me. Want to watch more?{" "}
          <a
            target='_blank'
            href='https://www.youtube.com/channel/UCDcODZCSLeWELJ4wP8mWJtw'>
            <span className='sm:text-base md:text-xl underline text-center'>
              My Youtube
            </span>
          </a>
        </p>
        <GalleryShowcase />
      </div>
    </div>
  );
}
