import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
export default function BackButton() {
  return (
    <NavLink to='/' smooth={true}>
      <div className='scrollNav z-30 w-28 h-28 container rotate-90 fixed bottom-10 md:right-0 sm:-right-5 flex justify-end items-center gap-4'>

        <div className='scrollLineBack w-2 bg-white'></div>
        <div className='carousel__up border hover:border-red-500 transition rounded-full hover:text-red-500 w-12 h-12 flex justify-center items-center'>
          <p className='text-white text-center'>Back</p>
        </div>
      </div>
    </NavLink>
  );
}
