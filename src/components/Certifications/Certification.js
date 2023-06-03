import React from "react";
import medal from "../../imgs/medal.png";
const Certification = (props) => {
  const { cert } = props;

  return (
    <div className="flex justify-center items-center p-10 border border-gray-200 shadow-xl sm:w-5/6 md:w-4/5 lg:w-1/2">
      <img src={medal} className="w-14 h-14" />
      <div className="flex flex-col text-xl flex-1 font-bold items-center">
        <div className="text-center px-5">{cert.title}</div>
        <div className="font-medium text-lg">{cert.date}</div>
      </div>
    </div>
  );
};

export default Certification;
