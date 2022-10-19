import React from "react";
import { FeatureData } from "./FeatureData";
import bg_animate10 from "../../Assets/bg_animate10.json";
import Lottie from "lottie-react";
export default function FeatureShowcase() {
  let renderFeatureItem = () => {
    return FeatureData.map((item, index) => {
      return (
        <div key={index} className='feature__item mt-10 relative mx-auto '>
          <a href={item.url} target='_blank'>
            <div className='feature__item__bg w-full h-full skew-forward-on-hover border rounded-xl'>
              <Lottie animationData={bg_animate10}></Lottie>
            </div>
            <div className='feature__item__para absolute bottom-5 -right-5 flex flex-col justify-end items-end'>
              <p className='text-red-500 tracking-widest font-bold text-xl mb-3'>
                {item.tenPj}
              </p>
              <p className='text-xl'>{item.desc}</p>
            </div>
          </a>
        </div>
      );
    });
  };

  return (
    <div className='feature__showcase w-full grid grid-cols-2 gap-10 '>
      {renderFeatureItem()}
    </div>
  );
}
// import React from "react";
// import { Link } from "react-scroll";
// export default function BackToTop() {
//   return (
//     <Link to='carousel' smooth='true' offset={-150}>
//       <div className='w-56 h-full duration-100 ease-out hover:ease-in transition cursor-pointer hover:animate-bounce flex flex-col justify-center items-center'>
//         <Lottie animationData={bg_animate10}></Lottie>
//       </div>
//     </Link>
//   );
// }
