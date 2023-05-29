import React from "react";
import Education from "./Education";

const Resume = () => {
  const data1 = {
    year: "2022-2024",
    university: "Arizona State university",
    gpa: "4.0",
    info: " I am currently enrolled at the Master of Science program in Computer Science at the Arizona State University. My coursework includes Cloud Computing, Distributed Database Systems, Machine Learning Fairness and Security.",
  };

  const data2 = {
    year: "2015-2019",
    university: "Vishwakarma Institute of Technology",
    gpa: "3.98",
    info: "I acquired my Bachelor of Technology degree in Computer Engineering from the Vishwakarma Institute of Technology. The\
    relevant coursework included Data Structures, Design and Analysis\
    of Algorithms, Web Technologies etc.",
  };

  return (
    <div className="overflow-scroll">
      <div className="flex flex-col items-center flex-1 gap-4 px-8 py-4 mb-2 sm:m-4 bg-[#F4ECE6]">
        <div className="text-4xl font-bold text-center">Resume</div>
        <div className="text-lg text-justify md:w-[600px]">
          Throughout my career, I have contributed to positive business results
          through effective organization, prioritization and follow-through of
          key organizational projects.
          <br />
          As a Software developer I have always exercised a calculated and
          methodical approach to problem-solving. While I am independently
          motivated, I appreciate collective efforts and collaborate
          productively within group settings. To illustrate the scope of my
          career history and professional competencies, please take a moment to
          review my enclosed resume.
        </div>
        <div
          href="/resume"
          className="w-max px-12 py-1  bg-[#0050FF] text-white font-thin transition duration-100 ease-out hover:scale-105 hover:bg-[#F4ECE6] hover:cursor-pointer hover:text-gray-950 border border-gray-400 rounded-full shadow"
        >
          Download Resume
        </div>
      </div>

      <div className="flex flex-col items-center text-center flex-1 gap-4 px-8 py-4 mb-2 sm:m-4 bg-[#ECEBEB]">
        <div className="text-4xl font-bold text-center">Education</div>
        <div className="flex flex-col items-center justify-center gap-10">
          <Education data={data1} />
          <Education data={data2} />
        </div>
      </div>

      <div className="flex flex-col items-center text-center flex-1 gap-4 px-8 py-4 mb-2 sm:m-4 bg-[#ECEBEB]">
        <div className="text-4xl font-bold text-center">
          Work <br /> Experience
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <Education data={data1} />
          <Education data={data2} />
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Resume;
