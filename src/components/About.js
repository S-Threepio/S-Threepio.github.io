import React from "react";
import CardSection from "./Landing/CardSection";
import Bio from "./Landing/Bio";
const About = () => {
  return (
    <div className="flex-col flex-1 w-screen overflow-scroll md:flex-row md:flex">
      <div className="hidden md:flex flex-[2] lg:bg-[#F4ECE6] "></div>
      <div className="hidden md:flex flex-[3] bg-white "></div>
      <div className="flex flex-[4] flex-col items-center py-4 md:py-0 md:flex-row justify-center pad:left-[10%] pad:absolute top-[20%] lg:left-[19%] tablet:left-[20%]  xl:left-[30%] md:scale-105">
        <CardSection />
        <Bio />
      </div>
    </div>
  );
};

export default About;
