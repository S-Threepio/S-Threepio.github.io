import React, { createContext } from "react";

const GlobalData = {
  about: {
    url: "/",
    label: "About",
    header: {
      logo: require("../imgs/landing/education.png"),
      menu: require("../imgs/landing/menu.png"),
      name: "Swanand Kavitkar",
      degreeShort: "MSCS",
      universityShort: "ASU",
      university: "Arizona State University",
    },
    footer: {
      socialMediaURLs: [
        {
          url: "https://www.linkedin.com/in/s-threepio/",
          icon: require("../imgs/landing/linkedin.png"),
        },
        {
          url: "https://github.com/S-Threepio",
          icon: require("../imgs/landing/github.png"),
        },
        {
          url: "https://s-threepio.medium.com/",
          icon: require("../imgs/landing/medium.png"),
        },
      ],
      copyright: "© 2023 by Swanand Kavitkar",
      call: "+1 (623) 283-8579",
      email: "skavitka@asu.edu",
    },
    cardsection: {
      socialMediaURLs: [
        {
          url: "https://www.linkedin.com/in/s-threepio/",
          icon: require("../imgs/landing/linkedin-blue.png"),
        },
        {
          url: "https://leetcode.com/Masked_Yurnero/",
          icon: require("../imgs/landing/leetcode.png"),
        },
        {
          url: "https://s-threepio.medium.com/",
          icon: require("../imgs/landing/medium.png"),
        },
        {
          url: "https://github.com/S-Threepio",
          icon: require("../imgs/landing/github.png"),
        },
      ],
      pfp: require("../imgs/landing/pfp.jpg"),
      firstName: "Swanand",
      lastName: "Kavitkar",
      degreeShort: "MSCS @ ASU",
      date: "Graduating May 2024",
    },
  },
  resume: {
    url: "/resume",
    label: "Resume",
    summary: (
      <>
        Throughout my career, I have contributed to positive business results
        through effective organization, prioritization and follow-through of key
        organizational projects.
        <br />
        As a Software developer I have always exercised a calculated and
        methodical approach to problem-solving. While I am independently
        motivated, I appreciate collective efforts and collaborate productively
        within group settings. To illustrate the scope of my career history and
        professional competencies, please take a moment to review my enclosed
        resume.
      </>
    ),
    education: [
      {
        year: "2022-2024",
        university: "Arizona State University",
        gpa: "4.0",
        info: " I am currently enrolled at the Master of Science program in Computer Science at the Arizona State University. My coursework includes Cloud Computing, Distributed Database Systems, Machine Learning Fairness and Security.",
      },
      {
        year: "2015-2019",
        university: "Vishwakarma Institute of Technology",
        gpa: "3.98",
        info: "I acquired my Bachelor of Technology degree in Computer Engineering from the Vishwakarma Institute of Technology. The\
    relevant coursework included Data Structures, Design and Analysis\
    of Algorithms, Web Technologies etc.",
      },
    ],
    work: [
      {
        year: "August 2022 - Current",
        organisation: "Arizona State University",
        role: "Graduate Service Assistant",
        detail: [
          "I am currently working as a graduate service assistant for the CSE 434 : Computer networks.",
          "My responsibilities include grading the assignments, labs and projects submitted by the students as well as resolving their queries related to grading",
        ],
      },
      {
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
      },
    ],
  },
  skills: {
    url: "/skills",
    label: "Skills",
    tech: [
      {
        type: "Programming Languages",
        info: "Python, Java, Kotlin, C++, C, Javascript",
      },
      {
        type: "Android Development",
        info: "MVVM, Jetpack components, LiveData, RxJava, Retrofit, Kotlin Coroutines, View and Data Binding",
      },
      {
        type: "Web Technology",
        info: "ReactJS, CSS, Tailwind CSS, Bootstrap, Jquery",
      },
      {
        type: "Backend",
        info: "Spring, SpringBoot, Hibernate, ExpressJS, NodeJS",
      },
      {
        type: "AWS Cloud",
        info: "S3, Dynamo-DB, API-Gateway, Lambda, Transcribe, Comprehend, Cognito",
      },
      {
        type: "Containerization",
        info: "Docker, Vagrant, WSL2",
      },
      {
        type: "Software Development Practices",
        info: "Agile, Scrum, JIRA, Confluence, Github",
      },
    ],
    soft: [
      {
        img: require("../imgs/skills/soft/teamWork.png"),
        type: "Team Work",
        info: "Worked on the HSBC Oman and Qatar app with a team consisting of freshers and completed all the requirements with highest level of collaboration. I have repeatedly partenered with senior developers outside my team to resolve global level build issues",
      },
      {
        img: require("../imgs/skills/soft/adaptability.jpeg"),
        type: "Adaptibility",
        info: "I was trained in full stack however the project assigned in HSBC was of Android. I adapted to it within a week and started contributing by the first month.I was the first in the department to complete the Google's Android certification requested by HSBC.",
      },
      {
        img: require("../imgs/skills/soft/Communication.webp"),
        type: "Communication",
        info: "Communicated with the stakeholders from Oman and Qatar whilst giving demo for the sprint work every alternate week. I also took alot of knowledge tranfer sessions to educate others about the codebase and various technologies.",
      },
      {
        img: require("../imgs/skills/soft/problemSolving.webp"),
        type: "Problem Solving",
        info: "I worked on making a QR Code module configurable while it was live in production for two other entites. I also helped a different team to merge their codebase into our exisiting live modules, resolved issues during the integration and provided robust alternatives.",
      },
      {
        img: require("../imgs/skills/soft/creativity.jpg"),
        type: "Creativity",
        info: "During Covid 19 period the Thank you tree weekly activity was closed off due to work from home compulsion. Created an application to resume the activity and increase employee morale. I also took creative design decisions to make the applications entity wise configurable.",
      },
      {
        img: require("../imgs/skills/soft/time.png"),
        type: "Time Management",
        info: "I worked on the project which had regulatory requirement and had a strict timeline for completion. My team was downsized by one during Covid-19 outbreak but I still delivered all the requirements in time.",
      },
    ],
  },
  projects: {
    url: "/projects",
    label: "Projects",
    images: {
      first: require("../imgs/projects/attendance_tracker.jpg"),
      second: require("../imgs/projects/meeting.png"),
      third: require("../imgs/projects/custody.jpg"),
      fourth: require("../imgs/projects/blockchain.jpg"),
      fifth: require("../imgs/projects/TYT.png"),
      sixth: require("../imgs/projects/utility.webp"),
    },
  },
  blogs: {
    url: "/blogs",
    label: "Blogs",
    images: {
      b1: require("../imgs/blog/android.png"),
      b2: require("../imgs/blog/docker.png"),
      b3: require("../imgs/blog/crypto.jpg"),
      cover: require("../imgs/blog/cover.jfif"),
    },
  },
  certifications: {
    url: "/certifications",
    label: "Certifications",
    images: {
      medal: require("../imgs/medal.png"),
    },
  },
  hobbies: {
    url: "/hobbies",
    label: "Hobbies",
    images: {
      piano: require("../imgs/hobby/piano.webp"),
      book: require("../imgs/hobby/book.webp"),
    },
  },
};

const GlobalDataContext = createContext();

const GlobalDataProvider = ({ children }) => {
  return (
    <GlobalDataContext.Provider value={GlobalData}>
      {children}
    </GlobalDataContext.Provider>
  );
};

export { GlobalDataContext, GlobalDataProvider };
