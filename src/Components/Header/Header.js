import React from "react";
import { useState } from "react";
import { BiAlignRight } from "react-icons/bi";
import { Link } from "react-scroll";
import { useSelector } from "react-redux";
import Drawer from "../Drawer/Drawer";
const Header = () => {
  const [trigger, setTrigger] = useState(false);
  console.log("trigger: ", trigger);
  const [openDrawer, setOpenDrawer] = useState(false);
  console.log("openDrawer: ", openDrawer);
  const handleOpenDrawer = () => {
    setTrigger((trigger) => !trigger);
    if (!openDrawer) {
      setTimeout(() => {
        setOpenDrawer(true);
      }, 1000);
    } else
      setTimeout(() => {
        setOpenDrawer(false);
      }, 0);
  };
  const [animationStatus, setAnimationStatus] = useState(false);
  // lấy thông tin từ store về state bằng useSelector
  let header = useSelector((state) => {
    return state.LocationReducer.header;
  });
  return (
    <div
      className={`${
        header ? "justify-between" : "justify-end"
      } text-white z-40 w-full h-10 sm:px-10 md:px-20 header mx-auto fixed mt-10 top-0 flex  items-center`}>
      <div className={`${header ? "" : "hidden "}  header__logo`}>
        <p
          className={`${
            animationStatus ? "text-blur-out " : ""
          } text-xl tracking-wider`}>
          HWNGMVI
        </p>
      </div>
      <div className='header__nav flex relative justify-center items-center gap-5'>
        <Link to='feature' offset={-10} smooth={true}>
          <button
            onClick={() => {
              setAnimationStatus(true);
              setTimeout(() => {
                setAnimationStatus(false);
              }, 1200);
            }}
            className={`${animationStatus ? "text-blur-out " : ""} ${
              header ? "" : "hidden "
            } header__nav__text text-xl pr-10 underline`}>
            Let's start!{" "}
          </button>
        </Link>
        <div
          className={`header__nav__button ${
            trigger ? "bubble-full" : "bubble-full-re"
          } absolute right-0 cursor-pointer h-10 w-10 flex items-center z-40 justify-center rounded-full bg-red-500`}>
          <button className='z-40' onClick={handleOpenDrawer}>
            <BiAlignRight size={25} />
          </button>
          <div
            className={`h-screen w-screen ${
              openDrawer ? "" : "hidden"
            }  -top-10 -right-16 bg-red-500 z-40 absolute`}>
            <Drawer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
