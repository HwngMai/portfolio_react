import React from "react";
import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import FeatureShowcase from "./FeatureShowcase";
import { setScroll } from "../../Redux/Action/LocationAction";

export default function Feature() {
  // tạo ref để lưu giá trị thay đổi của vị trí
  const myRef = useRef();
  const [isVisible, setIsVisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(myRef.current);
  });
  // tạo dispatch để sử dụng redux
  let dispatch = useDispatch();
  if (isVisible) {
    dispatch(setScroll(true));
  } else dispatch(setScroll(false));
  return (
    <div
      // gán ref cho div
      ref={myRef}
      className='feature container mx-auto lg:h-5/6 md:h-auto pb-10 my-10'>
      <div className='feature__para flex flex-col md:mx-20 sm:mx-5 justify-start items-start'>
        <h1 className='feature__para__header text-red-500 tracking-widest lg:text-xl md:text-sm font-bold '>
          {" "}
          PROJECTS{" "}
        </h1>
        <p className='feature__para__para text-xl text-left'>
          Explore some of mine latest website projects
        </p>
        <FeatureShowcase />
      </div>
    </div>
  );
}
