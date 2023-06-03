import React from "react";

const Certification = (props) => {
  const { cert } = props;

  return (
    <div className="flex flex-col text-xl w-4/5 border border-gray-200 p-5 shadow-xl font-bold items-center">
      <div>{cert.title}</div>
      <div className="font-medium text-lg">{cert.date}</div>
    </div>
  );
};

export default Certification;
