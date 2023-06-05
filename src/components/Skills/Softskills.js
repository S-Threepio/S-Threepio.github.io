import React from "react";
const Softskills = (props) => {
  const { data } = props;

  return (
    <div className="flex flex-col items-center m-2 text-center border border-gray-[150] w-[400px] sm:w-[600px] md:w-[350px] lg:w-[400px] shadow-lg scale-90">
      <img src={data.img} alt="logo" className="object-contain w-40 h-40 p-4" />
      <div className="text-2xl font-semibold text-center ">{data.type}</div>
      <div className="p-6 text-lg font-medium text-justify">{data.info}</div>
    </div>
  );
};

export default Softskills;
