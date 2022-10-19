import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Feature from "../../Components/Feature/Feature";
import Gallery from "../../Components/Gallery/Gallery";
import Testimonial from "../../Components/Testimonial/Testimonial";

export default function HomePage() {
  return (
    <div className='homePage w-full h-full overflow-hidden'>
      <Carousel />
      <Feature />
      <Gallery />
      <Testimonial />
    </div>
  );
}