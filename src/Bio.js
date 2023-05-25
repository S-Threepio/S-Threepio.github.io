import React from "react";

const Bio = () => {
  return (
    <div className="justify-center w-2/5 h-max">
      <div className="flex flex-col p-4 px-12">
        <div className="py-4 font-bold text-7xl ">Hello</div>
        <div className="text-2xl">I am Swanand and I code.</div>
        <div className="flex flex-row gap-2 my-6 font-semibold">
          <button className="px-12  py-0.5 text-md bg-white transition duration-100 ease-out hover:scale-105 hover:bg-[#F4ECE6] text-gray-800 border border-gray-400 rounded-full shadow">
            Resume
          </button>
          <button className=" px-12  py-0.5 text-md bg-white hover:bg-[#F4ECE6] transition duration-100 text-gray-800 border hover:scale-105 border-gray-400 rounded-full shadow">
            Projects
          </button>
        </div>
        <div className="py-2 text-base font-thin ">
          <p>
            I am an MSCS Student at the esteemed Arizona State University. I
            have a work experience of 2 years in Mobile Development at HSBC and
            I am skilled in{" "}
            <span className="font-semibold">
              Android, AWS Cloud, React.Js and Spring Boot.
            </span>
          </p>

          <p>
            <br />I am currently searching for{" "}
            <span className="font-semibold">Summer 2023 internships</span> in
            USA. So if you're looking to hire or just want to get in touch, feel
            free to contact me on the phone number/email mentioned below.
            <br />
            <br />
            <span className="font-semibold">Have a great day!!!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
