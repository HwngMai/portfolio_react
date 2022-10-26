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
          My gears: Sony a6400 | Sigma 16 f1.4 | Sony FE 85 f1.8 | Sony FE
          24-105 F4 G | Zhiyun crane 2
        </p>
        <p className='text-xl text-left '>
          Want to see more?  
          <a
            target='_blank'
            className='inline-block ml-1'
            href='https:/www.flickr.com/photos/147070878@N06'>
            {" "}
            <p className='text-xl underline text-left'>  My Flickr</p>
          </a>{" "}
        </p>

        <GalleryShowcase />
      </div>
    </div>
  );
}
