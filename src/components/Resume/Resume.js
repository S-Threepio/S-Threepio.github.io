import React from "react";
import Education from "./Education";
import Work from "./Work";

const Resume = () => {
  const ed1 = {
    year: "2022-2024",
    university: "Arizona State University",
    gpa: "4.0",
    info: " I am currently enrolled at the Master of Science program in Computer Science at the Arizona State University. My coursework includes Cloud Computing, Distributed Database Systems, Machine Learning Fairness and Security.",
  };

  const ed2 = {
    year: "2015-2019",
    university: "Vishwakarma Institute of Technology",
    gpa: "3.98",
    info: "I acquired my Bachelor of Technology degree in Computer Engineering from the Vishwakarma Institute of Technology. The\
    relevant coursework included Data Structures, Design and Analysis\
    of Algorithms, Web Technologies etc.",
  };

  const wx1 = {
    year: "August 2022 - Current",
    organisation: "Arizona State University",
    role: "Graduate Service Assistant",
    detail: [
      "I am currently working as a graduate service assistant for the CSE 434 : Computer networks.",
      "My responsibilities include grading the assignments, labs and projects submitted by the students as well as resolving their queries related to grading",
    ],
  };

  const wx2 = {
    year: "July 2019 - May 2021",
    organisation: "HSBC Software Development India",
    role: "Software Engineer",
    detail: [
      "Built the HSBC Oman mobile banking app with 7 separate journeys involving payments and QR code features to deliver the regulatory requirements for Oman HSBC customers",
      "Designed the architecture for Oman features to make them entity wise scalable using JSON objects as input configuration",
      "Integrated features of Oman, Qatar and India into the HSBC’s global application spanning 60 countries with more than 20 modules to standardize all the developed functionalities",
      "Refactored the Cheque deposit journeys of UK entity to align it with the MVP architecture with potential 60% code reduction in view fragments",
      "Maintained the UI and Unit test coverage of 90% for all the features developed, to confirm that the different features within the HSBC global application are performing as expected",
    ],
  };

  return (
    <div className="flex flex-col flex-1 overflow-scroll">
      <div className="bg-[#F4ECE6] w-full flex p-6 justify-center">
        <div className="flex flex-col gap-10 items-center lg:items-start px-8 py-4 mb-2 w-[900px] sm:m-2">
          <div className="text-5xl font-bold w-max">Summary</div>
          <div className="text-lg text-justify">
            Throughout my career, I have contributed to positive business
            results through effective organization, prioritization and
            follow-through of key organizational projects.
            <br />
            As a Software developer I have always exercised a calculated and
            methodical approach to problem-solving. While I am independently
            motivated, I appreciate collective efforts and collaborate
            productively within group settings. To illustrate the scope of my
            career history and professional competencies, please take a moment
            to review my enclosed resume.
          </div>
          <div
            href="/resume"
            className="w-max px-12 py-1  bg-[#0050FF] text-white font-semibold transition duration-100 ease-out hover:scale-105 hover:bg-[#F4ECE6] hover:cursor-pointer hover:text-gray-950 border border-gray-400 rounded-full shadow"
          >
            Download Resume
          </div>
        </div>
      </div>

      <div className="bg-[#ECEBEB] w-full justify-center text-center lg:text-justify flex p-6 my-2 sm:my-2">
        <div className="flex flex-col gap-10 px-8 py-4 items-center lg:items-start mb-2 w-[900px] ">
          <div className="text-5xl font-bold text-left w-max">Education</div>
          <div className="flex flex-col items-center gap-10 text-justify justify-left">
            <Education data={ed1} />
            <Education data={ed2} />
          </div>
        </div>
      </div>

      <div className="bg-[#ECEBEB] w-full justify-center flex p-6 my-2 sm:my-2">
        <div className="flex flex-col gap-10 px-8 py-4 items-center lg:items-start mb-2 w-[900px] ">
          <div className="text-5xl font-bold text-left w-max">Work</div>
          <div className="flex flex-col items-center justify-center gap-10">
            <Work data={wx1} />
            <Work data={wx2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
