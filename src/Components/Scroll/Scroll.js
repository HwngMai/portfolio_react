import React from "react";

export default function Scroll() {
  return (
    <div className='scrollNav w-28 h-28 container rotate-90 fixed bottom-10 right-0 flex justify-between items-center gap-1'>
      <div className='scrollLine w-8 bg-white'></div>
      <p className='text-white '>Scroll</p>
    </div>
  );
}
