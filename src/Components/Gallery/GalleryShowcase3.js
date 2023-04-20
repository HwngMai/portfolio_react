import React from "react";
import { Carousel } from "antd";
import { useInView } from "react-intersection-observer";
import { GalleryData3 } from "./GalleryData3";
const GalleryShowcase3 = () => {
  const { ref: carouRef, inView: carouVisible } = useInView();
  const carourClassName = `${
    carouVisible ? "slide-top-delay-3" : ""
  } carouselShowcase col-span-1 row-span-2 sm:mt-0 md:w-full sm:w-full sm:h-full rounded-2xl `;
  let renderImage = () => {
    return GalleryData3.map((item, index) => {
      return (
        <div
          key={index}
          className='carouselShowcase__portraitItem relative w-full overflow: visible overflow-visible '>
          <div className=' z-10 carouselShowcase__item__para absolute flex flex-col items-end justify-end bottom-5 right-5 overflow-visible'>
            <h2 className='font-bold tracking-wider uppercase sm:text-md md:text-2xl text-red-500'>
              {item.imgName}
            </h2>
            <p className='sm:text-md md:text-xl text-white'>{item.desc}</p>
          </div>
          <img
            className='carouselShowcase__portraitItem__img object-cover rounded-2xl '
            src={item.url}
            alt={item.imgName}
          />
        </div>
      );
    });
  };
  return (
    <div ref={carouRef} className={`${carourClassName}`}>
      <Carousel effect='fade' className='carouselShowcase__slide w-full '>
        {renderImage()}
      </Carousel>
    </div>
  );
};
export default GalleryShowcase3;
