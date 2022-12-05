import React from "react";
import { useInView } from "react-intersection-observer";
function Drawer() {
  const { ref: menuRef, inView: menuVisible } = useInView();
  console.log("menuVisible: ", menuVisible);
  const menuClassName = `${
    menuVisible ? "tracking-in-contract " : "opacity-0"
  } -rotate-90 -mt-20 w-50 h-10 flex justify-start items-center sm:text-md md:text-xl lg:text-2xl gap-4`;
  const { ref: itemRef, inView: itemVisible } = useInView();
  const itemClassName = `${
    itemVisible ? "slide-left" : "opacity-0 "
  } flex flex-col justify-start items-start sm:text-4xl md:text-4xl lg:text-6xl gap-2`;
  return (
    <div className='z-50 gap-4 text-white mr-14 flex justify-start items-center drawer__nav fixed top-0 left-0 h-full w-2/3'>
      <div ref={menuRef} className={`${menuClassName}`}>
        <div className='w-20 h-0.5 bg-white'></div>
        <p>MENU</p>
      </div>
      <div ref={itemRef} className={`${itemClassName}`}>
        <a href=''>WORK </a>
        <a href=''>SERVICE </a>
        <a href=''>ABOUT </a>
        <a href=''>CONTACT </a>
      </div>
    </div>
  );
}

export default Drawer;
