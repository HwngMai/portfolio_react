import React from "react";
import { BiAlignRight } from "react-icons/bi";

const Header = () => {
  return (
    <div className='text-white header inset-x-0 mx-auto fixed mt-5 container top-0 flex justify-between items-center'>
      <div className='header__logo'>
        <p className='text-xl'>HWNGMVI</p>
      </div>
      <div className='header__nav flex relative justify-center items-center gap-5'>
        <p className='header__nav__text text-xl mr-10 underline'> Let's start! </p>
        <div className='header__nav__button absolute right-0 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full bg-red-500' >
          <BiAlignRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
