import React from "react";

const Hobby = (props) => {
  const { hobby, isEven } = props;
  return (
    <div
      className={`flex flex-col xl:flex-row justify-center items-center border border-gray-200 shadow-2xl ${
        isEven ? "xl:flex-row-reverse" : ""
      } `}
    >
      <img
        src={hobby.img}
        alt={hobby.hobbyname}
        className="p-4 object-cover w-[400px] md:w-[600px]"
      />
      <div className="w-[400px] md:w-[600px]">
        <div className="text-3xl text-center font-semibold">
          {hobby.hobbyname}
        </div>
        <div className="text-xl font-thin p-10">{hobby.description}</div>
      </div>
    </div>
  );
};

export default Hobby;
