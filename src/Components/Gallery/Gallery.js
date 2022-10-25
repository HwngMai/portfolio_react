import React from "react";
import GalleryShowcase from "./GalleryShowcase";

export default function Gallery() {
  return (
    <div className='gallery container mx-auto lg:h-5/6 md:h-auto my-10'>
      <div className='gallery__para flex flex-col md:mx-20 sm:mx-5 justify-start items-start'>
        <h1 className='gallery__para__header text-red-500 md:text-sm tracking-widest lg:text-xl font-bold '>
          {" "}
          GALLERY{" "}
        </h1>
        <p className='gallery__para__para text-left text-xl'>
          Explore some of mine pictures that i take
        </p>
        <GalleryShowcase />
      </div>
    </div>
  );
}
