import React from "react";
import pfp from "../../imgs/landing/pfp.jpg";
import linkedin from "../../imgs/landing/linkedin-blue.png";
import medium from "../../imgs/landing/medium.png";
import github from "../../imgs/landing/github.png";
import leetcode from "../../imgs/landing/leetcode.png";
import Desc from "./Desc";
import BasicButtons from "./BasicButtons";

const CardSection = () => {
  return (
    <div className="flex flex-col justify-center w-full border-gray-300 md:inline-block md:w-auto md:border md:shadow-lg h-max md:min-w-max">
      <div className="order-1 items-center flex flex-col md:py-4 px-10 md:bg-[#F4ECE6]">
        <img
          className="object-cover w-56 h-56 rounded-full lg:overflow-hidden"
          src={pfp}
          alt="pfp"
        />
        <div className="flex flex-col items-center pt-6 font-sans text-2xl font-bold">
          <span>Swanand</span>
          <span>Kavitkar</span>
          <div className=" w-16 border-b-2 border-[#0050FF] pt-5" />
          <div className="flex flex-col items-center pt-5 text-lg font-semibold w-max">
            <span>MSCS @ ASU</span>
            <span>Graduating May 2024</span>
          </div>
          <span className="block md:hidden">
            <BasicButtons />
          </span>
        </div>
      </div>
      <div className="flex flex-col order-3 py-4 md:hidden">
        <Desc />
      </div>
      <div className="flex order-2 w-full gap-2 py-2 bg-white justify-evenly">
        <a href="https://www.linkedin.com/in/s-threepio/">
          <img className="w-8 hover:scale-125" src={linkedin} alt="Icon" />
        </a>
        <a href="https://leetcode.com/Masked_Yurnero/">
          <img className="w-8 hover:scale-125" src={leetcode} alt="Icon" />
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

export default CardSection;
