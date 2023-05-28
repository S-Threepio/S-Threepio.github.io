import React from "react";

const BasicButtons = () => {
  return (
    <div className="flex flex-row gap-4 my-6 text-base font-semibold md:gap-2 md:text-md">
      <button className="px-12  py-0.5  bg-white transition duration-100 ease-out hover:scale-105 hover:bg-[#F4ECE6] text-gray-800 border border-gray-400 rounded-full shadow">
        Resume
      </button>
      <button className=" px-12  py-0.5  bg-white hover:bg-[#F4ECE6] transition duration-100 text-gray-800 border hover:scale-105 border-gray-400 rounded-full shadow">
        Projects
      </button>
    </div>
  );
};

export default BasicButtons;
