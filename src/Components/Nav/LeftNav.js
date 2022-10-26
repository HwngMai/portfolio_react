import React from "react";
import { Link } from "react-scroll";

export default function LeftNav() {
  return (
    <div className='leftNav flex z-10 m-auto justify-start items-center fixed mt-10 sm:-left-36 md:-left-32 gap-5 left'>
      {" "}
      <Link to='feature' offset={-10} smooth={true}>
        <span className='text-base tracking-wider hover:text-red-500 text-gray-500 transition duration-300'>
          PROJECTS
        </span>
      </Link>
      <Link to='gallery' offset={-10} smooth={true}>
        <span className='text-base tracking-wider hover:text-red-500 text-gray-500 transition duration-300'>
          GALLERY
        </span>
      </Link>
      <Link to='showreel' offset={-10} smooth={true}>
        <span className='text-base tracking-wider hover:text-red-500 text-gray-500 transition duration-300'>
          SHOWREEL
        </span>
      </Link>
    </div>
  );
}
