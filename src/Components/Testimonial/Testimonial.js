import React from "react";

export default function Testimonial() {
  return (
    <div className='h-2/4 z-20 testi flex justify-center items-center mt-5 bg-gradient-to-r from-gray-500 to-black py-3 '>
      <div className='testi__para container z-20 w-2/3 mx-auto flex flex-col items-center justify-center gap-3'>
        <p className=' text-red-500 md:text-sm tracking-widest lg:text-xl font-bold'>
          My favorite quotes:
        </p>
        <p className='text-white text-center sm:text-xl sm:font-bold md:text-2xl lg:text-3xl'>
          " EVERYTHING YOU WANT IS ON THE OTHER SIDE OF FEAR "
        </p>
        <p className='text-red-500 sm:text-base md:text-xl'>- George Addair,</p>
        <p className=' text-white sm:text-sm md:text-base lg:text-2xl'>
          “I must not fear. Fear is the mind-killer. Fear is the little-death
          that brings total obliteration. I will face my fear. I will permit it
          to pass over me and through me. And when it has gone past I will turn
          the inner eye to see its path. Where the fear has gone there will be
          nothing. Only I will remain.”
        </p>
        <p className='text-red-500 sm:text-base md:text-xl'>
          ― Frank Herbert, Dune
        </p>
      </div>
    </div>
  );
}
