import React from "react";
import { BiAlignRight } from "react-icons/bi";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
const Header = () => {
  // lấy thông tin từ store về state bằng useSelector
  let header = useSelector((state) => {
    return state.LocationReducer.header;
  });
  return (
    <div
      className={`${
        header ? "justify-between" : "justify-end"
      } text-white  z-30 w-full h-10 sm:px-10 md:px-20 header mx-auto fixed mt-10 top-0 flex  items-center`}>
      <div className={`${header ? "" : "hidden"} header__logo`}>
        <p className='text-xl tracking-wider'>HWNGMVI</p>
      </div>
      <div className='header__nav flex relative justify-center items-center gap-5'>
        <Link to='feature' offset={-10} smooth={true}>
          <p
            className={`${
              header ? "" : "hidden"
            } header__nav__text text-xl pr-10 underline`}>
            {" "}
            Let's start!{" "}
          </p>
        </Link>
        <div className='header__nav__button absolute right-0 cursor-pointer h-10 w-10 flex items-center justify-center rounded-full bg-red-500'>
          <BiAlignRight size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
