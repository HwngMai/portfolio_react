import React from "react";
import { Carousel } from "antd";
import { GalleryData } from "./GalleryData";

const GalleryShowcase = () => {
  let renderImage = () => {
    return GalleryData.map((item, index) => {
      return (
        <div
          key={index}
          className='carouselShowcase__item relative w-full overflow: visible overflow-visible '>
          <div className=' z-10 carouselShowcase__item__para absolute flex flex-col items-end justify-end bottom-5 right-5 overflow-visible'>
            <h2 className='font-bold tracking-wider uppercase sm:text-md md:text-2xl text-red-500'>
              {item.imgName}
            </h2>
            <p className='sm:text-md md:text-xl text-white'>{item.desc}</p>
          </div>
          <img
            className='carouselShowcase__item__img object-cover rounded-2xl '
            src={item.url}
            // width={2048}
            // height={1365}
            alt={item.imgName}
          />
        </div>
      );
    });
  };
  return (
    <div className='carouselShowcase md:mt-5 sm:mt-0 md:w-full sm:w-full sm:h-full rounded-2xl '>
      <Carousel effect='fade' className='carouselShowcase__slide w-full '>
        {renderImage()}
      </Carousel>
    </div>
  );
};
export default GalleryShowcase;
