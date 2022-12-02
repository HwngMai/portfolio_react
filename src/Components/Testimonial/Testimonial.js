import React from "react";
import { useInView } from "react-intersection-observer";
export default function Testimonial() {
  const { ref: headerRef, inView: headerVisible } = useInView();
  const headerClassName = ` ${
    headerVisible ? "slide-top" : ""
  } text-red-500 md:text-sm tracking-widest lg:text-xl font-bold'`;
  const { ref: paraRef, inView: paraVisible } = useInView();
  const paraClassName = ` ${
    paraVisible ? "text-focus-in" : ""
  } text-white text-center sm:text-xl md:text-2xl lg:text-3xl`;
  const { ref: para2Ref, inView: para2Visible } = useInView();
  const para2ClassName = `${
    para2Visible ? "slide-top-delay-3" : ""
  } text-red-500 sm:text-base md:text-xl`;
  return (
    <div className='h-2/4 z-20 testi flex justify-center items-center mt-5 bg-gradient-to-r from-gray-500 to-black py-3 '>
      <div className='testi__para container z-20 w-2/3 mx-auto flex flex-col items-center justify-center gap-3'>
        <p ref={headerRef} className={`${headerClassName}`}>
          My favorite quotes:
        </p>
        <p ref={paraRef} className={`${paraClassName}`}>
          " EVERYTHING YOU WANT IS ON THE OTHER SIDE OF FEAR "
        </p>
        <p ref={para2Ref} className={`${para2ClassName}`}>
          - George Addair,
        </p>
        <p className={`${paraClassName}`}>
          “I must not fear. Fear is the mind-killer. Fear is the little-death
          that brings total obliteration. I will face my fear. I will permit it
          to pass over me and through me. And when it has gone past I will turn
          the inner eye to see its path. Where the fear has gone there will be
          nothing. Only I will remain.”
        </p>
        <p className={`${para2ClassName}`}>― Frank Herbert, Dune</p>
      </div>
    </div>
  );
}
