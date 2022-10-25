import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
      <div className='scrollNav w-28 h-28 container rotate-90 fixed bottom-10 md:right-0 sm:-right-10 flex justify-between items-center gap-1'>
        <div className='scrollLine w-2 bg-gray-800'></div>
        <p className='text-gray-800'>Up!</p>
      </div>
    );
  } else {
    return (
      <div className='scrollNav w-28 h-28 container rotate-90 fixed bottom-10 md:right-0 sm:-right-10 flex justify-between items-center gap-1'>
        <div className='scrollLine w-2 bg-gray-800'></div>
        <p className='text-gray-800'>Scroll</p>
      </div>
    );
  }
}
