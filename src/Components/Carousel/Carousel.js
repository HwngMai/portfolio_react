import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";
const Carousel = () => {
  return (
    <div className='carousel z-20 h-screen bg-gradient-to-l from-gray-500 to-black flex flex-row justify-center items-center'>
      <div className='carousel__header z-20 md:px-5 sm:justify-center sm:items-center md:self-center mt-20 flex flex-col lg:pl-20 md:justify-start md:items-start'>
        <p className='text-red-500 sm:text-base sm:tracking-wider md:tracking-widest font-bold text-xl mb-3'>
          HI, I'M HWNGMVI, I'M A
        </p>
        <h1 className='text-white sm:text-xl sm:font-bold md:text-5xl'>
          {" "}
          PHOTOGRAPHER.
        </h1>
        <h1 className='text-white sm:text-xl sm:font-bold md:text-5xl'>
          {" "}
          VIDEOGRAPHER.
        </h1>
        <h1 className='text-white lg:text-left sm:text-xl sm:font-bold md:text-5xl'>
          {" "}
          AND A WEB DEVELOPER.
        </h1>
        <p className='text-red-500 sm:text-base md:text-xl'>
          with endless passion for creativity{" "}
        </p>
        <NavLink to='/info' className='cursor-pointer'>
          <div className='carousel__button mt-10 h-14 relative flex flex-row justify-center items-center gap-6'>
            <div className='circle cursor-pointer w-14 h-14 rounded-full bg-red-500 opacity-80 absolute top-0 -left-1.5 transition duration-200 z-10'></div>
            <p className=' z-20 text-white text-2xl'>GET TO KNOW ME </p>{" "}
            <AiOutlinePlus size={30} color='white' className='z-20' />
          </div>
        </NavLink>
      </div>
      <div className='bgCarousel rotate-90'>
        <p className='bgCarousel__para w-fit hidden lg:text-5xl lg:block'>HM</p>
      </div>
    </div>
  );
};

export default Carousel;
