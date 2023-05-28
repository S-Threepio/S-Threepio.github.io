import React from "react";
import Desc from "./Desc";
import BasicButtons from "./BasicButtons";

const Bio = () => {
  return (
    <div className="hidden md:flex md:flex-col  md:w-[450px] lg:w-[500px] p-4 px-12">
      <div className="py-4 font-bold text-7xl ">Hello</div>
      <div className="text-2xl">I am Swanand and I code.</div>
      <BasicButtons />
      <Desc />
    </div>
  );
};

export default Bio;
