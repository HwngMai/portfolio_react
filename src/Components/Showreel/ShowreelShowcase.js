import React from "react";
import { Carousel } from "antd";
import { ShowreelData } from "./ShowreelData";
import { useInView } from "react-intersection-observer";
const ShowreelShowcase = () => {
  const { ref: carouRef, inView: carouVisible } = useInView();
  const carourClassName = `${
    carouVisible ? "slide-top-delay-3" : ""
  } showreelShowcase md:mt-5 sm:mt-0 md:w-full sm:w-full sm:h-full rounded-2xl `;

  let renderShowreel = () => {
    return ShowreelData?.map((item, index) => {
      return (
        <div
          key={index}
          className='carouselShowcase__item relative w-full overflow: visible overflow-visible '>
          <div className=' z-10 carouselShowcase__item__para opacity-50 hover:opacity-100 transition duration-150 absolute flex flex-col items-end justify-end bottom-20 right-5 overflow-visible'>
            <h2 className='font-bold tracking-wider uppercase text-2xl text-red-500'>
              {item.vidName}
            </h2>
            <p className='text-xl text-white'>{item.desc}</p>
          </div>
          <div className='youtube-video-container'>
            <iframe
              className='object-cover rounded-2xl'
              src={item.url}
              alt={item.vidName}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <div ref={carouRef} className={`${carourClassName}`}>
      <Carousel effect='fade' className='showreelShowcase__slide w-full '>
        {renderShowreel()}
      </Carousel>
    </div>
  );
};
export default ShowreelShowcase;
