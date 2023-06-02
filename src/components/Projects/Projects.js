import React from "react";
import Project from "./Project";
import first from "../../imgs/projects/attendance_tracker.jpg";
import second from "../../imgs/projects/meeting.png";
import third from "../../imgs/projects/custody.jpg";
import fourth from "../../imgs/projects/blockchain.jpg";
import fifth from "../../imgs/projects/TYT.png";
import sixth from "../../imgs/projects/utility.webp";

const Projects = () => {
  const projData = [
    {
      img: first,
      title: "Automated Attendance Tracker",
      link: "https://github.com/S-Threepio/Classroom-Attendance-Tracker",
      year: "January 2023",
      points: [
        "Developed a classroom assistant project leveraging private cloud\
        (Openstack) and public cloud (AWS) to streamline attendance tracking\
        for educators, reducing manual processing time by 40%.",
        "Implemented a hybrid cloud infrastructure, integrating AWS Lambda, S3 buckets, and DynamoDB, resulting in a 25% increase in accuracy and efficiency of student identification and real-time attendance reporting.",
        "Implemented a hybrid cloud infrastructure, integrating AWS Lambda, S3 buckets, and DynamoDB, resulting in a 25% increase in accuracy and efficiency of student identification and real-time attendance reporting.",
      ],
    },

    {
      img: second,
      title: "Meeting Assistant Web App",
      link: "https://github.com/S-Threepio/voyager-react",
      year: "November 2020",
      points: [
        "Created meeting assistant web app with speech-to-text transcription and meeting recording analysis, reducing\
        prep time by 30% and increasing productivity by 55%.",
        "Utilized ReactJS for responsive frontend, integrated AWS services for 87% performance improvement, and\
        implemented AWS Cognito user pool reducing unauthorized access risk by 40%",
        "Incorporated strong security protocols using AWS Cognito user pools.",
      ],
    },
    {
      img: third,
      title: "Computer Forensics: Chain of Custody",
      link: "https://github.com/S-Threepio/CSE469-project/tree/main",
      year: "October 2022",
      points: [
        "Created a digital equivalent to a chain of custody to record the history of the evidence from the time it is found until the case is closed.",
        "Utilized SHA-256 functions to maintain the validity of the custody chain and maintain the zero trust policy.",
      ],
    },
    {
      img: fourth,
      title: "Web Application for Crypto-Currency",
      link: "https://github.com/s-threepio/cryptochain",
      year: "March 2019",
      points: [
        "Created a web application for a cryptocurrency network backed by a blockchain including private wallets for users and miners.",
        "Dockerized the whole application using WSL2 and Docker to create separate containers for users,miners and redis server to establish separation of concerns",
      ],
    },
    {
      img: fifth,
      title: "Thank You Tree Android App",
      link: "https://github.com/S-Threepio/thank_you_tree_app",
      year: "January 2020",
      points: [
        "Created a thank you tree android app for users to thank their colleagues online as a part of Great place to work initiative.",
        "Designed the CRUD features on thank you notes and a dashboard for a reward based system at HSBC as well as share receipt functionality.",
        "Made with Jetpack components and a robust MVVM Architecture with robust AWS backend.",
      ],
    },
    {
      img: sixth,
      title: "Utility Application Android",
      link: "https://github.com/S-Threepio/UtilityApplication",
      year: "June 2020",
      points: [
        "Combined the most commonly used elements in android development into a single application to study them comparitively.",
        "I have also implemented architecture patterns to familiarize students with separation of concerns",
      ],
    },
  ];

  return (
    <div className="flex flex-col flex-1 overflow-scroll">
      <div className="flex justify-center w-full bg-white sm:p-6">
        <div className="flex flex-col items-center py-4 sm:px-8 lg:items-start sm:m-2">
          <div className="m-8 text-5xl font-bold">Projects</div>
          <div className="grid gap-2 px-4 overflow-scroll sm:p-5 lg:grid-cols-2 xl:grid-cols-3">
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
