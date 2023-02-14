import React from "react";
import GalleryShowcase from "./GalleryShowcase";
import { useInView } from "react-intersection-observer";

export default function Gallery() {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: paraRef, inView: paraVisible } = useInView();
  const { ref: para2Ref, inView: para2Visible } = useInView();

  const headerClassName = `${
    headerVisible ? "slide-top" : ""
  } gallery text-red-500 tracking-widest lg:text-xl md:text-sm font-bold `;
  const paraClassName = `${
    paraVisible ? "slide-top-delay-1" : ""
  } gallery__para__para sm:text-base md:text-xl text-center`;
  const para2ClassName = `${
    paraVisible ? "slide-top-delay-2" : ""
  } gallery__para__para sm:text-base md:text-xl text-center`;

  return (
    <div className=' container mx-auto lg:h-5/6 md:h-auto my-10'>
      <div className='gallery__para flex flex-col md:mx-20 sm:mx-5 md:justify-center md:items-center lg:justify-start lg:items-center'>
        <h1 ref={headerRef} className={`${headerClassName}`}>
          {" "}
          GALLERY{" "}
        </h1>
        <p ref={paraRef} className={`${paraClassName}`}>
          My gears: Sony a6400 | Sigma 16 f1.4 | Sony FE 85 f1.8 | Sony FE
          24-105 F4 G | Zhiyun crane 2
        </p>
        <p ref={para2Ref} className={`${para2ClassName}`}>
          My skills:
          <span className='hover:text-red-500 transition cursor-default'>
            {" "}
            Adobe Photoshop
          </span>{" "}
          |
          <span className='hover:text-red-500 transition cursor-default'>
            {" "}
            Adobe Lightroom{" "}
          </span>
          |{" "}
          <span className='hover:text-red-500 transition cursor-default'>
            {" "}
            Adobe Premiere{" "}
          </span>
          |{" "}
          <span className='hover:text-red-500 transition cursor-default'>
            {" "}
            Final Cut Pro{" "}
          </span>
          | |{" "}
        </p>
        <p ref={para2Ref} className={`${para2ClassName}`}>
          Want to see more?
          <a href='https:/www.flickr.com/photos/147070878@N06' target='_blank'>
            <span className='sm:text-base md:text-xl underline text-center'>
              My Flickr
            </span>
          </a>{" "}
        </p>

        <GalleryShowcase />
      </div>
    </div>
  );
}
