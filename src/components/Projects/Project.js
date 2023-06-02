import React, { useEffect } from "react";

const Project = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);

  const { data } = props;
  const tech = [
    "AWS",
    "React",
    "Vue",
    "Android",
    "MVVM",
    "MVP",
    "Redis",
    "Docker",
    "WSL2",
  ];
  return (
    <div className="flex flex-col items-start m-1 md:scale-[95%] bg-white border border-gray-300 shadow-lg">
      <img
        src={data.img}
        className="self-center object-fill h-56 p-2 px-6 w-120 "
      />
      <div className="px-6 pt-4 text-xl font-semibold">
        {data.title}{" "}
        <a href={data.link} className="font-bold underline text-blue-950 ">
          [Github]
        </a>
      </div>
      <div className="px-6 font-semibold">{data.year}</div>
      <div className="px-6 pt-4 font-serif text-base">{tech.join(" - ")}</div>
      <ul className="px-6 py-4">
        {data.points.map((point, index) => (
          <li key={index} className="p-1 list-disc">
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
