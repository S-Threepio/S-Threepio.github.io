import React from "react";
import Certification from "./Certification";

const Certifications = () => {
  const certs = [
    {
      title:
        "Technologist of the Quarter Award for Outstanding Performance by HSBC",
      date: "Jan-April 2020",
    },
    {
      title: "Google Certified Associate Android Developer",
      date: "Sep2020-Sep 2023",
    },
    {
      title: "AWS Certified Solutions Architect - Associate (SAA)",
      date: "Feb 2020-Feb 2023",
    },
    {
      title: "Machine Learning Certified by Coursera",
      date: "Jul 2019",
    },
  ];

  return (
    <div className="overflow-scroll">
      <div className="text-center text-4xl md:text-5xl font-bold p-4 md:mt-6">
        Certifications
      </div>
      <div className="flex flex-col gap-10 items-center p-10">
        {certs.map((cert, index) => (
          <Certification cert={cert} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
