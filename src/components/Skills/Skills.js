import React, { useContext } from "react";
import Softskills from "./Softskills";
import images from "../../provider/ImageProvider";
import { GlobalDataContext } from "../../provider/GlobalDataProvider";

const Skills = () => {
  const skills = useContext(GlobalDataContext).skills;
  return (
    <div className="flex flex-col items-center w-screen sm:overflow-y-scroll scrollbar-hide">
      <div className="flex flex-col items-center w-max">
        <div className="flex flex-col items-center w-screen p-10 bg-[#E8E6E6]">
          <div className="flex flex-col items-start lg:w-[1000px] xl:w-[1200px]">
            <div className="text-5xl font-bold text-left">Technical Skills</div>
            <div className="flex flex-col items-start">
              <ul className="flex flex-col items-start gap-3 m-10 text-xl md:gap-2">
                {skills.tech.map((skill, index) => (
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
        <div className="flex flex-col items-center w-screen overflow-hidden md:items-start lg:items-center">
          <div className="flex flex-col items-center md:items-start lg:w-[1000px] xl:w-[1200px]">
            <div className="w-screen px-10 pt-5 text-5xl font-bold text-left md:px-0 md:w-auto">
              Soft Skills
            </div>
            <div className="grid grid-cols-1 justify-items-center items-center p-5 md:grid-cols-2 xl:grid-cols-3">
              {skills.soft.map((data, index) => (
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
