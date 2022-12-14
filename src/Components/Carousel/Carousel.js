import React from "react";
import { useInView } from "react-intersection-observer";
import { AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setHeader } from "../../Redux/Action/LocationAction";
const Carousel = () => {
  const { ref: mainRef, inView: mainVisible } = useInView();
  let dispatch = useDispatch();
  if (mainVisible) {
    dispatch(setHeader(true));
  } else dispatch(setHeader(false));

  const { ref: headerRef, inView: headerVisible } = useInView();
  const { ref: leftRef, inView: leftVisible } = useInView();
  const { ref: paraRef, inView: paraVisible } = useInView();
  const { ref: para2Ref, inView: para2Visible } = useInView();
  const { ref: buttonRef, inView: buttonVisible } = useInView();
  const buttonClassname = `${
    buttonVisible ? "text-focus-in" : ""
  } carousel__button mt-10 h-14 relative flex flex-row justify-center items-center gap-6`;
  const para2ClassName = `${
    para2Visible ? "tracking-in-contract" : ""
  } text-red-500 sm:text-base md:text-xl`;
  const headerClassName = `${
    headerVisible ? "slide-top" : ""
  }  text-red-500 sm:text-base mb-5 sm:tracking-wider lg:text-left md:tracking-widest font-bold text-xl`;
  const paraClassName = `${
    paraVisible ? "slide-left" : ""
  } text-white lg:text-left sm:text-xl sm:font-bold md:text-5xl`;
  const leftParaClassName = `${
    leftVisible ? "slide-left-delay-1" : ""
  } bgCarousel__para hidden object-cover z-30 h-screen w-fit lg:text-5xl xl:block`;
  return (
    <div
      ref={mainRef}
      className='carousel overflow-visible z-10 relative h-screen bg-gradient-to-l from-gray-500 to-black flex flex-row justify-center items-center'>
      <div className='carousel__plus cursor-default z-40 absolute left-24 top-20 text-white flex gap-0 leading-none flex-col items-center justify-center'>
        <p>+</p>
        <p>
          +<span className='carousel__plus__center hover:text-gray-500'>+</span>
          +
        </p>
        <p>+</p>
      </div>
      <div className='carousel__plus cursor-default z-40 absolute left-64 bottom-20 text-white flex gap-0 leading-none flex-col items-center justify-center'>
        <p>+</p>
        <p>
          +<span className='carousel__plus__center hover:text-gray-500'>+</span>
          +
        </p>
        <p>+</p>
      </div>
      <div className='carousel__plus  z-40 absolute right-10 top-32 text-white flex gap-0 leading-none flex-col items-center justify-center'>
        <p>+</p>
        <p>
          +<span className='carousel__plus__center'>+</span>+
        </p>
        <p>+</p>
      </div>
      <div className='carousel__plus  z-40 absolute right-48 bottom-32 text-white flex gap-0 leading-none flex-col items-center justify-center'>
        <p>+</p>
        <p>
          +<span className='carousel__plus__center'>+</span>+
        </p>
        <p className=''>+</p>
      </div>
      <div className='carousel__plus  z-40 absolute sm:hidden lg:block right-64 bottom-64 text-white flex gap-0 leading-none flex-col items-center justify-center'>
        <p className='plusRed'>+</p>
        <p>
          +<span className='carousel__plus__center'>+</span>+
        </p>
        <p>+</p>
      </div>
      <div className='carousel___header z-10 md:px-5 sm:justify-center sm:items-center md:self-center mt-20 flex flex-col lg:pl-20 md:justify-start md:items-start'>
        {headerVisible ? (
          <p ref={headerRef} className={` slide-top ${headerClassName}`}>
            HI, I'M HWNGMVI, I'M A
          </p>
        ) : (
          <p ref={headerRef} className={`${headerClassName}`}>
            HI, I'M HWNGMVI, I'M A
          </p>
        )}
        <h1 ref={paraRef} className={`${paraClassName}`}>
          PHOTOGRAPHER.
        </h1>
        <h1 ref={paraRef} className={`${paraClassName}`}>
          VIDEOGRAPHER.
        </h1>
        <h1 ref={paraRef} className={`${paraClassName}`}>
          AND A WEB DEVELOPER.
        </h1>
        <p ref={para2Ref} className={`${para2ClassName}`}>
          with endless passion for creativity{" "}
        </p>
        <NavLink to='/info' className='cursor-pointer'>
          <div ref={buttonRef} className={`${buttonClassname}`}>
            <div className='circle cursor-pointer w-14 h-14 rounded-full bg-red-500 opacity-80 absolute top-0 -left-1.5 transition duration-200 z-10'></div>
            <p className=' z-20 text-white text-2xl'>GET TO KNOW ME </p>{" "}
            <AiOutlinePlus size={30} color='white' className='z-20' />
          </div>
        </NavLink>
      </div>
      <img
        src='../Assets/avatar.png'
        ref={leftRef}
        className={`${leftParaClassName}`}></img>
    </div>
  );
};

export default Carousel;
