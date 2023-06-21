import React, { useContext } from "react";
import Education from "./Education";
import Work from "./Work";
import { GlobalDataContext } from "../../provider/GlobalDataProvider";

const Resume = () => {
  const resume = useContext(GlobalDataContext).resume;
  const handleView = () => {
    // Create a temporary <a> element to trigger the download
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/file.pdf";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.type = "application/pdf";
    link.click();
  };

  const handleDownload = () => {
    // Create a temporary <a> element to trigger the download
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/file.pdf";
    link.download = "Swanand_Kavitkar_Resume.pdf"; // Specify the file name you want the user to download as
    link.target = "_blank"; // Open the file in a new tab

    document.body.appendChild(link);
    link.click();

    // Clean up the temporary <a> element
    document.body.removeChild(link);
  };

  return (
    <div className="flex bg-secondary flex-col flex-1 sm:overflow-y-scroll scrollbar-hide">
      <div className=" w-full flex p-6 justify-start self-center lg:w-[1000px] xl:w-[1200px]">
        <div className="flex flex-col gap-10 items-center lg:items-start py-4 mb-2 sm:m-2">
          <div className="text-5xl text-left font-bold w-max">Summary</div>
          <div className="text-lg text-justify">{resume.summary}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center">
            <div
              href="/resume"
              className="px-12  py-0.5 font-semibold bg-primary hover:cursor-pointer transition duration-100 ease-out hover:scale-105 hover:bg-white text-gray-800 border border-gray-400 rounded-full shadow"
              onClick={handleDownload}
            >
              Download Resume
            </div>
            <div
              href="/resume"
              className="px-12  py-0.5 font-semibold hover:cursor-pointer bg-primary transition duration-100 ease-out hover:scale-105 hover:bg-white text-gray-800 border border-gray-400 rounded-full shadow"
              onClick={handleView}
            >
              View Resume
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white flex justify-center">
        <div className=" w-full justify-start self-center lg:w-[1000px] xl:w-[1200px] text-center lg:text-justify flex p-6">
          <div className="flex flex-col gap-10 py-4 items-center lg:items-start mb-2 ">
            <div className="text-5xl font-bold text-left w-max">Education</div>
            <div className="flex flex-col items-center gap-10 text-justify justify-left">
              {resume.education.map((ed, index) => (
                <Education key={index} data={ed} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white flex justify-center my-1">
        <div className="bg-white w-full justify-start self-center lg:w-[1000px] xl:w-[1200px] flex p-6">
          <div className="flex flex-col gap-10 py-4 items-center lg:items-start mb-2  ">
            <div className="text-5xl font-bold text-left w-max">Work</div>
            <div className="flex flex-col items-center justify-center gap-12">
              {resume.work.map((wk, index) => (
                <Work key={index} data={wk} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
