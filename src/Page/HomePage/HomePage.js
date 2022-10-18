import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import Gallery from "../../Components/Gallery/Gallery";
import Testimonial from "../../Components/Testimonial/Testimonial";

export default function HomePage() {
  return (
    <div className='homePage'>
      <Carousel />
      <Gallery />
      <Testimonial />
    </div>
  );
}
