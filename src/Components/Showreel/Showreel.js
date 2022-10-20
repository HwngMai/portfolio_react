import React from "react";
import GalleryShowcase from "./ShowreelShowcase";

export default function Showreel() {
  return (
    <div className='showreel container mx-auto h-screen mt-20'>
      <div className='showreel__para flex flex-col mx-20 justify-start items-start'>
        <h1 className='showreel__para__header text-red-500 tracking-widest text-xl font-bold '>
          {" "}
          SHOWREEL{" "}
        </h1>
        <p className='showreel__para__para text-xl'>
          Explore some of mine footages that i take
        </p>
        <GalleryShowcase />
      </div>
    </div>
  );
}
