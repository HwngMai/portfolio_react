import React from "react";
import FeatureShowcase from "./FeatureShowcase";

export default function Feature() {
  return (
    <div className='feature container mx-auto mt-10'>
      <div className='feature__para flex flex-col mx-20 justify-start items-start'>
        <h1 className='feature__para__header text-red-500 tracking-widest text-xl font-bold '> FEATURE </h1>
        <p className='feature__para__para text-xl'>
          Explore some of mine latest website projects
        </p>
        <FeatureShowcase />
      </div>
    </div>
  );
}
