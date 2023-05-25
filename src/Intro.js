import React from "react";
import pfp from "./imgs/unnamed.jpg";
import linkedin from "./imgs/linkedin-blue.png";
import medium from "./imgs/medium.png";
import github from "./imgs/github.png";
import leetcode from "./imgs/leetcode.png";

const Intro = () => {
  return (
    <div className="justify-center border border-gray-300 shadow-lg h-max min-w-max">
      <div className="items-center flex flex-col py-4 px-10 bg-[#F4ECE6]">
        <img
          className="w-56 h-56 object-cover rounded-full overflow-hidden"
          src={pfp}
          alt="pfp"
        />
        <div className="items-center text-2xl pt-6 font-sans font-bold flex flex-col">
          <span>Swanand</span>
          <span>Kavitkar</span>
          <div className=" w-16 border-b-2 border-[#0050FF] pt-5" />
          <div className="text-lg font-semibold pt-5 items-center flex flex-col w-max">
            <span>MSCS @ ASU</span>
            <span>Graduating May 2024</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-evenly py-4 bg-white w-full ">
        <a href="https://www.linkedin.com/in/s-threepio/">
          <img className="w-8 hover:scale-125" src={linkedin} alt="Icon" />
        </a>
        <a href="https://leetcode.com/Masked_Yurnero/">
          <img className="w-8  hover:scale-125" src={leetcode} alt="Icon" />
        </a>
        <a href="https://github.com/S-Threepio">
          <img className="w-8 hover:scale-125" src={github} alt="Icon" />
        </a>
        <a href="https://s-threepio.medium.com/">
          <img className="w-8 hover:scale-125" src={medium} alt="Icon" />
        </a>
      </div>
    </div>
  );
};

export default Intro;
