import React from "react";
import { useInView } from "react-intersection-observer";
import { FeatureData } from "./FeatureData";
export default function FeatureShowcase() {
  const { ref: itemRef, inView: itemInvisible } = useInView();
  let renderFeatureItem = () => {
    return FeatureData.map((item, index) => {
      return (
        <div
          ref={itemRef}
          key={index}
          className={` ${
            itemInvisible ? "skew-forward-on-hover" : ""
          } feature__item mt-4 relative mx-auto`}>
          <a href={item.url} target='_blank'>
            <div className='feature__item__bg w-full h-full shadow-2xl rounded-2xl '>
              <img
                src={item.image}
                className='feature__item__img object-cover w-full'
              />
            </div>
            <div className='feature__item__para absolute bottom-5 -right-5 flex flex-col justify-end items-end'>
              <p className='text-red-500 tracking-wider font-bold sm:text-md md:text-2xl mb-3'>
                {item.tenPj}
              </p>
              <p className='sm:text-md md:text-xl hover:text-blue-500 transition text-gray-500 '>
                {item.desc}
              </p>
            </div>
          </a>
        </div>
      );
    });
  };

  return (
    <div className='feature__showcase sm:grid-cols-1 w-full grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-10 '>
      {renderFeatureItem()}
    </div>
  );
}
