import React from "react";
import GalleryShowcase from "./GalleryShowcase";

export default function Gallery() {
  return (
    <div className='gallery container mx-auto h-screen mt-20'>
      <div className='gallery__para flex flex-col mx-20 justify-start items-start'>
        <h1 className='gallery__para__header text-red-500 tracking-widest text-xl font-bold '>
          {" "}
          GALLERY{" "}
        </h1>
        <p className='gallery__para__para text-xl'>
          Explore some of mine pictures that i take
        </p>
        <GalleryShowcase />
      </div>
    </div>
  );
}
