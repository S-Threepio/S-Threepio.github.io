import React, { useContext } from "react";
import Project from "./Project";
import images from "../../provider/ImageProvider";
import { GlobalDataContext } from "../../provider/GlobalDataProvider";
const Projects = () => {
  const projData = useContext(GlobalDataContext).projects.projData;

  return (
    <div className="flex flex-col flex-1 sm:overflow-y-scroll scrollbar-hide pb-4 md:pb-0">
      <div className="flex justify-center w-full bg-primary">
        <div className="flex flex-col items-center lg:items-start sm:m-2">
          <div className="my-8 text-5xl font-bold text-center w-screen">
            Projects
          </div>
          <div className="grid gap-2 px-2 overflow-scroll scrollbar-hide w-[90%] sm:w-auto sm:px-20 lg:grid-cols-2 xl:grid-cols-3">
            {projData.map((project, index) => (
              <Project key={index} data={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
