import React from "react";
import FeatureItem from "./FeatureItem";

export default function Feature() {
  return (
    <div className='feature container mx-auto mt-10'>
      <div className='feature__para flex flex-col mx-20 justify-start items-start'>
        <h1 className='feature__para__header'> Feature</h1>
        <p className='feature__para__para'>
          Explore some of mine latest website projects
        </p>
        <FeatureItem />
      </div>
    </div>
  );
}
