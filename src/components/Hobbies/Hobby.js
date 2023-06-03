import React from "react";

const Hobby = (props) => {
  const { hobby, isEven } = props;
  return (
    <div
      className={`flex flex-col xl:flex-row justify-center items-center shadow-2xl ${
        isEven ? "xl:flex-row-reverse" : ""
      } `}
    >
      <img
        src={hobby.img}
        className="p-4 object-cover w-[400px] md:w-[600px]"
      />
      <div className="w-[400px] md:w-[600px]">
        <div className="text-xl font-thin p-10">{hobby.description}</div>
      </div>
    </div>
  );
};

export default Hobby;
