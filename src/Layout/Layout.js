import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import LeftNav from "../Components/Nav/LeftNav";
import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setScroll } from "../Redux/Action/LocationAction";

export default function Layout({ Component }) {
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
    <div className='layout relative'>
      <Header />
      <Scroll />
      <LeftNav />
      <div className='-z-10 w-full'>
        <Component />
      </div>
      <div ref={myRef} className='w-full'>
        <Footer />
      </div>
    </div>
  );
}
