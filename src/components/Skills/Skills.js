import React from "react";
import Softskills from "./Softskills";
import teamWork from "../../imgs/skills/soft/teamWork.png";
import adaptability from "../../imgs/skills/soft/adaptability.jpeg";
import communication from "../../imgs/skills/soft/Communication.webp";
import problemsolving from "../../imgs/skills/soft/problemSolving.webp";
import creativity from "../../imgs/skills/soft/creativity.jpg";
import time from "../../imgs/skills/soft/time.png";

const Skills = (props) => {
  const { skills } = props;

  const data = [
    {
      img: teamWork,
      type: "Team Work",
      info: "Worked on the HSBC Oman and Qatar app with a team consisting of freshers and completed all the requirements with highest level of collaboration. I have repeatedly partenered with senior developers outside my team to resolve global level build issues",
    },
    {
      img: adaptability,
      type: "Adaptibility",
      info: "I was trained in full stack however the project assigned in HSBC was of Android. I adapted to it within a week and started contributing by the first month.I was the first in the department to complete the Google's Android certification requested by HSBC.",
    },
    {
      img: communication,
      type: "Communication",
      info: "Communicated with the stakeholders from Oman and Qatar whilst giving demo for the sprint work every alternate week. I also took alot of knowledge tranfer sessions to educate others about the codebase and various technologies.",
    },
    {
      img: problemsolving,
      type: "Problem Solving",
      info: "I worked on making a QR Code module configurable while it was live in production for two other entites. I also helped a different team to merge their codebase into our exisiting live modules, resolved issues during the integration and provided robust alternatives.",
    },
    {
      img: creativity,
      type: "Creativity",
      info: "During Covid 19 period the Thank you tree weekly activity was closed off due to work from home compulsion. Created an application to resume the activity and increase employee morale. I also took creative design decisions to make the applications entity wise configurable.",
    },
    {
      img: time,
      type: "Time Management",
      info: "I worked on the project which had regulatory requirement and had a strict timeline for completion. My team was downsized by one during Covid-19 outbreak but I still delivered all the requirements in time.",
    },
  ];

  return (
    <div className="flex flex-col items-center w-screen overflow-scroll">
      <div className="flex flex-col items-center w-max">
        <div className="flex flex-col items-center w-screen p-10 bg-[#E8E6E6]">
          <div className="flex flex-col items-start lg:w-[1000px] xl:w-[1200px]">
            <div className="text-5xl font-bold text-left">Technical Skills</div>
            <div className="flex flex-col items-start">
              <ul className="flex flex-col items-start gap-3 m-10 text-xl md:gap-2">
                {skills.map((skill, index) => (
                  <li className="list-disc" key={index}>
                    <b className="font-bold">{skill.type} :</b>{" "}
                    <span className="sm:hidden">
                      <br />
                    </span>
                    <span> {skill.info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center w-screen p-10 overflow-hidden md:items-start lg:items-center">
          <div className="flex flex-col items-center md:items-start lg:w-[1000px] xl:w-[1200px]">
            <div className="w-screen px-10 text-5xl font-bold text-left md:px-0 md:w-auto">
              Soft Skills
            </div>
            <div className="grid grid-cols-1 mt-4 md:p-5 md:grid-cols-2 xl:grid-cols-3">
              {data.map((data, index) => (
                <Softskills key={index} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
