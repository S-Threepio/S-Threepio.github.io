import React from "react";

const Bio = () => {
  return (
    <div className="flex flex-col md:w-[450px] lg:w-[500px] p-4 px-12">
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
          I am a <b className="font-semibold">Master of Science</b> Student at
          the esteemed <b className="font-semibold">Arizona State University</b>{" "}
          majoring in <b className="font-semibold">Computer Science</b>. I have
          a work experience of 2 years in Mobile Development at HSBC and I am
          skilled in
          <b className="font-semibold">
            {" "}
            Android, AWS Cloud, React.Js and Spring Boot.
          </b>
        </p>

        <p>
          <br />I am currently searching for{" "}
          <b className="font-semibold">Summer 2023 internships</b> in USA. So if
          you're looking to hire or just want to get in touch, feel free to
          contact me on the phone number/email mentioned below.
          <br />
          <br />
          <b className="font-semibold">Have a great day!!!</b>
        </p>
      </div>
    </div>
  );
};

export default Bio;
