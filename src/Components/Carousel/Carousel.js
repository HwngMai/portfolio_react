import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Carousel = () => {
  return (
    <div className='carousel h-screen bg-gray-800 flex mx-auto justify-between items-center gap-5'>
      <div className='carousel__left w-3/4 mx-auto flex flex-col justify-start items-start'>
        <p className='text-red-500 tracking-widest font-bold mb-3'>
          HI, I'M HWNGMVI, I'M A
        </p>
        <h1 className='text-white text-5xl'> PHOTOGRAPHER.</h1>
        <h1 className='text-white text-5xl'> VIDEOGRAPHER.</h1>
        <h1 className='text-white text-5xl'> AND A WEB DEVELOPER.</h1>
        <p className='text-red-500 text-xl'>
          with a endless passion for creativity{" "}
        </p>
        <div className='carousel__button mt-10 h-14 relative flex flex-row justify-center items-center gap-6'>
          <div className='circle w-14 h-14 rounded-full bg-white opacity-50 absolute top-0 -left-1.5 transition duration-200'></div>
          <p className=' text-white text-2xl'>GET TO KNOW ME </p>{" "}
          <AiOutlinePlus size={30} color='white' />
        </div>
      </div>
      <div className='carousel__right'></div>
    </div>
  );
};

export default Carousel;
