import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Scroll from "../Components/Scroll/Scroll";
import LeftNav from "../Components/Nav/LeftNav";
export default function Layout({ Component }) {
  return (
    <div className='layout'>
      <Header />
      <Scroll />
      <LeftNav />
      <div className='-z-10 w-full'>
        <Component />
      </div>
      <div className='pt-10 -z-10 w-full'>
        <Footer />
      </div>
    </div>
  );
}
