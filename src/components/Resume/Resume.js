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
    <div className="flex flex-col flex-1 overflow-scroll scrollbar-hide">
      <div className="bg-secondary w-full flex p-6 justify-center">
        <div className="flex flex-col gap-10 items-center lg:items-start px-8 py-4 mb-2 w-[900px] sm:m-2">
          <div className="text-5xl font-bold w-max">Summary</div>
          <div className="text-lg text-justify">{resume.summary}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-center">
            <div
              href="/resume"
              className="px-12 py-1 bg-linkcolor text-white font-semibold transition duration-100 ease-out hover:scale-105 hover:bg-secondary hover:cursor-pointer hover:text-gray-950 border border-gray-400 rounded-full shadow"
              onClick={handleDownload}
            >
              Download Resume
            </div>
            <div
              href="/resume"
              className="px-12 py-1 bg-linkcolor text-white font-semibold transition duration-100 ease-out hover:scale-105 hover:bg-secondary hover:cursor-pointer hover:text-gray-950 border border-gray-400 rounded-full shadow"
              onClick={handleView}
            >
              View Resume
            </div>
          </div>
        </div>
      </div>

      <div className="bg-sober w-full justify-center text-center lg:text-justify flex p-6 my-2 sm:my-2">
        <div className="flex flex-col gap-10 px-8 py-4 items-center lg:items-start mb-2 w-[900px] ">
          <div className="text-5xl font-bold text-left w-max">Education</div>
          <div className="flex flex-col items-center gap-10 text-justify justify-left">
            {resume.education.map((ed, index) => (
              <Education key={index} data={ed} />
            ))}
          </div>
        </div>
      </div>

      <div className="bg-sober w-full justify-center flex p-6 my-2 sm:my-2">
        <div className="flex flex-col gap-10 px-8 py-4 items-center lg:items-start mb-2 w-[900px] ">
          <div className="text-5xl font-bold text-left w-max">Work</div>
          <div className="flex flex-col items-center justify-center gap-10">
            {resume.work.map((wk, index) => (
              <Work key={index} data={wk} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
