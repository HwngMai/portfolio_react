import React from "react";
import { FeatureData } from "./FeatureData";
// import bg_animate10 from "../../Assets/bg_animate10.json";
// import Lottie from "lottie-react";
export default function FeatureShowcase() {
  let renderFeatureItem = () => {
    return FeatureData.map((item, index) => {
      return (
        <div key={index} className='feature__item mt-10 relative mx-auto skew-forward-on-hover '>
          <a href={item.url} target='_blank'>
            <div className='feature__item__bg w-full h-full shadow-2xl rounded-2xl '>
              <img
                src={item.image}
                className='feature__item__img object-cover w-full'
              />
              {/* <Lottie
                className=' absolute top-0 -left-20'
                animationData={bg_animate10}></Lottie> */}
            </div>
            <div className='feature__item__para absolute bottom-5 -right-5 flex flex-col justify-end items-end'>
              <p className='text-red-500 tracking-wider font-bold sm:text-md md:text-2xl mb-3'>
                {item.tenPj}
              </p>
              <p className='sm:text-md md:text-xl'>{item.desc}</p>
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
