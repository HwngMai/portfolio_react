import React from "react";

export default function Scroll() {
  return (
    <div className='scrollNav w-28 h-28 container rotate-90 fixed bottom-10 right-0 flex justify-between items-center gap-1'>
      <div className='scrollLine w-2 bg-gray-800'></div>
      <p className='text-gray-800'>Scroll</p>
    </div>
  );
}
