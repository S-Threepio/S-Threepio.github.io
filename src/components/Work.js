import React from "react";

const Work = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-1 flex-col items-center justify-center lg:flex-row lg:gap-4 md:w-[600px] lg:w-[700px]">
      <div className="flex flex-col gap-2 m-2 items-center justify-center text-center w-[400px]">
        <div className="text-lg font-normal">{data.year}</div>
        <div className="text-lg font-bold">{data.university}</div>
        <div className="text-lg font-semibold">
          GPA <span>{data.gpa}</span>
        </div>
      </div>
      <div className="font-semibold">{data.info}</div>
    </div>
  );
};

export default Work;
