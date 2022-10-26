import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
export default function Scroll() {
  // lấy thông tin từ store về state bằng useSelector
  let scroll = useSelector((state) => {
    return state.LocationReducer.scroll;
  });
  // const [stateScroll, setStateScroll] = useState();
  // setStateScroll(scroll);
  // console.log("stateScroll: ", stateScroll);
  if (scroll) {
    return (
      <Link to='carousel' smooth={true}>
        <div className='scrollNav z-30 w-28 h-28 container rotate-90 fixed bottom-10 md:right-0 sm:-right-5 flex justify-end items-center gap-4'>
          <div className='scrollLineBack w-2 bg-white'></div>
          <div className='carousel__up border hover:border-red-500 transition rounded-full hover:text-red-500 w-12 h-12 flex justify-center items-center'>
            <p className='text-white text-center'>Up!</p>
          </div>
        </div>
      </Link>
    );
  } else {
    return (
      <div className='scrollNav z-30 w-28 h-28 container rotate-90 fixed bottom-10 md:right-0 sm:-right-5 flex justify-between items-center gap-1'>
        <div className='scrollLine w-2 bg-gray-600'></div>
        <p className='text-gray-600'>Scroll</p>
      </div>
    );
  }
}
