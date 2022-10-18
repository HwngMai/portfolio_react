import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
export default function Layout({ Component }) {
  return (
    <div className='layout'>
      <Header />
      <div className='-z-10 w-full'>
        <Component />
      </div>
      <div className='pt-10 -z-10 w-full'>
        <Footer />
      </div>
    </div>
  );
}
