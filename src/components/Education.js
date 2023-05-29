import React from "react";

const Education = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-4">
      <div className="flex flex-col items-center justify-center w-2/5 gap-2 m-2 text-center lg:items-start">
        <div className="text-lg font-normal">{data.year}</div>
        <div className="text-lg font-bold">{data.university}</div>
        <div className="text-lg font-semibold">GPA {data.gpa}</div>
      </div>
      <div className="flex-1 font-semibold">{data.info}</div>
    </div>
  );
};

export default Education;
