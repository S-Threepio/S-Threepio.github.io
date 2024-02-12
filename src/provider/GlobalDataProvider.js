import React, { createContext } from "react";

const GlobalData = {
  //
  // -------------------------------------About Page Data-----------------------------------------
  about: {
    url: "/",
    label: "About",

    // Header data common to all pages
    header: {
      logo: require("../imgs/landing/education.png"),
      menu: require("../imgs/landing/menu.png"),
      name: "Swanand Kavitkar",
      degreeShort: "MSCS",
      universityShort: "ASU",
      university: "Arizona State University",
    },

    // footer data common to all pages
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

    // This is the left part of the landing page with profile picture (Looks like an ID Card)
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

    // This is the right part of the landing page with a general welcome statement and summary
    bio: {
      bigGreet: "Hello",
      intro: "I am Swanand and I code.",
      description: (
        <>
          <p>
            I am currently pursuing a Master's degree in{" "}
            <b className="font-semibold">
              {" "}
              Computer Science at Arizona State University.
            </b>{" "}
            Previously, I worked as a{" "}
            <b className="font-semibold">Software Engineer at HSBC,</b> where I
            played a crucial role in developing{" "}
            <b className="font-semibold">
              feature-rich mobile banking applications
            </b>{" "}
            to enhance customer experience and{" "}
            <b className="font-semibold">optimize transactions.</b> With a solid
            background in{" "}
            <b className="font-semibold">Web and Android development</b>, I
            possess expertise in{" "}
            <b className="font-semibold">AWS Cloud services.</b>
            <br />
            <br />
            <b className="font-semibold">
              I am actively pursuing full-time software engineer opportunities
            </b>{" "}
            to utilize my exceptional academic achievements and hands-on
            experience, aiming to create significant contributions within the
            technology industry.
            <br />
            <br /> If you are seeking someone to{" "}
            <b className="font-semibold">
              build scalable and high-quality software products,
            </b>{" "}
            feel free to reach out to me on phone/email mentioned below.
          </p>
          <br />
          <b className="font-semibold">Have a great day!!</b>
        </>
      ),
    },
  },

  // -------------------------------------Resume Page Data-----------------------------------------
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
        info: `I acquired my Bachelor of Technology degree in Computer Engineering from the Vishwakarma Institute of Technology. The
    relevant coursework included Data Structures, Design and Analysis
    of Algorithms, Web Technologies etc.`,
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

  // -------------------------------------Skills Page Data-----------------------------------------
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

  // -------------------------------------Projects Page Data-----------------------------------------
  projects: {
    url: "/projects",
    label: "Projects",
    projData: [
      {
        img: require("../imgs/projects/attendance_tracker.jpg"),
        title: "Automated Attendance Tracker",
        type: ["aws", "backend"],
        link: "https://github.com/S-Threepio/Classroom-Attendance-Tracker",
        year: "May 2023",
        points: [
          ` Engineered a classroom assistant tool by creating a private cloud infrastructure using Openstack, enabling educators
          to effortlessly manage student progress and assignments, resulting in a 40% reduction in administrative workload.
          `,
          `Incorporated AWS Lambda, S3, and DynamoDB to enhance accuracy and efficiency by 25% in real-time student
          identification while handling 100 concurrent requests within 60 seconds.`,
        ],
        tech: [
          "Openstack",
          "AWS Lambda",
          "AWS S3",
          "AWS DynamoDB",
          "AWS SQS",
          "AWS ECR",
          "Docker",
        ],
      },
      {
        img: require("../imgs/projects/port.png"),
        title: "Morpholio : The Portfolio Builder",
        link: "https://github.com/S-Threepio/S-Threepio.github.io",
        year: "January 2023",
        type: ["frontend"],
        points: [
          `Designed an innovative personal website builder using ReactJS and Tailwind CSS, resulting in a 50% reduction in
          development time and a 60% increase in user satisfaction.`,
          `Optimized website performance by implementing React Hooks and Context API, enabling seamless data sharing across
          components and enhancing user experience`,
        ],
        tech: ["React", "Javascript", "React Hooks", "Tailwind CSS"],
      },
      {
        img: require("../imgs/projects/digit.png"),
        title: " Handwritten Digits Classifier Flask Application",
        link: "https://github.com/S-Threepio/Handwritten-Digits-Classifier-Flask-Application",
        year: "November 2022",
        type: ["aws", "backend"],
        points: [
          `Developed an ML application for handwritten digits classification, using Flask server and Docker for seamless deployment.`,
          `Utilized Kubernetes clusters on AWS EKS and GCP GKE for streamlined deployment.`,
          `Integrated Prometheus monitoring using Helm-charts for performance monitoring`,
        ],
        tech: [
          "Kubernetes",
          "Docker",
          "AWS EKS",
          "AWS EC2",
          "GCP GKE",
          "Prometheus",
          "Helm",
        ],
      },
      {
        img: require("../imgs/projects/meeting.png"),
        title: "Meeting Assistant Web App",
        link: "https://github.com/S-Threepio/voyager-react",
        year: "November 2020",
        type: ["aws", "frontend"],
        points: [
          `Created meeting assistant web app with speech-to-text transcription, meeting recording analysis and MoM generation
          increasing productivity by 55%.`,
          `Leveraged ReactJS and Material UI for a seamless user experience, a 20% increase in user retention`,
          `Integrated AWS services for transcription,analysis, storage and security achieving 87% performance improvement.`,
        ],
        tech: [
          "React",
          "Material UI",
          "AWS Cognito",
          "AWS Transcribe",
          "AWS Comprehend",
          "AWS Lambda",
          "AWS S3",
          "AWS Lambda",
          "AWS DynamoDB",
          "AWS API Gateway",
        ],
      },
      {
        img: require("../imgs/projects/custody.jpg"),
        title: "Computer Forensics: Chain of Custody",
        type: ["blockchain"],
        link: "https://github.com/S-Threepio/CSE469-project/tree/main",
        year: "October 2022",
        points: [
          "Created a digital equivalent to a chain of custody to record the history of the evidence from the time it is found until the case is closed.",
          "Utilized SHA-256 functions to maintain the validity of the custody chain and maintain the zero trust policy.",
        ],
        tech: [
          "Python",
          "C++",
          "Bash Scripting",
          "Blockchain",
          "MultiThreading",
          "SHA256 Encryption",
        ],
      },
      {
        img: require("../imgs/projects/blockchain.jpg"),
        title: "Web Application for Crypto-Currency",
        link: "https://github.com/s-threepio/cryptochain",
        year: "March 2019",
        type: ["blockchain", "frontend", "backend"],
        points: [
          "Created a web application for a cryptocurrency network backed by a blockchain including private wallets for users and miners.",
          "Dockerized the whole application using WSL2 and Docker to create separate containers for users,miners and redis server to establish separation of concerns",
        ],
        tech: [
          "Javascript",
          "Redis",
          "ExpressJS",
          "Node.JS",
          "Docker",
          "WSL2",
          "React",
          "Material UI",
          "SHA256 Encryption",
        ],
      },
      {
        img: require("../imgs/projects/ai.png"),
        title: "Guardian Angel Mobile Application",
        link: "https://github.com/S-Threepio/Guardian-Angel-Mobile-Application",
        year: "October 2023",
        type: ["mobile", "backend"],
        points: [
          "Created a Guardian Angel application which can Send an Email, Schedule a Task, Play music based on your mood and Summarize Texts.",
          "Utilizes OpenAI GPT to analyze and interpret the nature or category of the user's request.",
        ],
        tech: [
          "Android",
          "OpenAI GPT ",
          "Flask",
          "MVVM",
          "View Binding",
          "Kotlin Coroutines",
          "Spotify API",
        ],
      },
      {
        img: require("../imgs/projects/TYT.png"),
        title: "Thank You Tree Android App",
        link: "https://github.com/S-Threepio/thank_you_tree_app",
        year: "January 2020",
        type: ["mobile", "aws"],
        points: [
          "Created a thank you tree android app for users to thank their colleagues online as a part of Great place to work initiative.",
          "Designed the CRUD features on thank you notes and a dashboard for a reward based system at HSBC as well as share receipt functionality.",
          "Made with Jetpack components and a robust MVVM Architecture with robust AWS backend.",
        ],
        tech: [
          "Android",
          "RxJava",
          "MVVM",
          "Jetpack Compose",
          "LiveData",
          "View Binding",
          "Kotlin Coroutines",
          "AWS S3",
          "AWS Dynamo DB",
          "AWS API Gateway",
        ],
      },
      {
        img: require("../imgs/projects/health.png"),
        title: "Health Monitoring Application",
        link: "https://github.com/S-Threepio/Health-Monitoring-Application",
        year: "December 2023",
        type: ["mobile"],
        points: [
          "Delivered a Health Monitoring Application achieving 95% accuracy in heart rate calculation through red intensity pixel analysis.",
          "Utilized accelerometer algorithms for respiratory rate determination with 98% precision.",
          "Leveraged Room DB for efficient data storage, reducing application response time by 20%.",
        ],
        tech: [
          "Android",
          "MVVM",
          "Jetpack Compose",
          "Service",
          "View Binding",
          "Kotlin Coroutines",
        ],
      },

      {
        img: require("../imgs/projects/utility.webp"),
        title: "Utility Application Android",
        link: "https://github.com/S-Threepio/UtilityApplication",
        year: "June 2020",
        type: ["mobile"],
        points: [
          "Combined the most commonly used elements in android development into a single application to study them comparitively.",
          "I have also implemented architecture patterns to familiarize students with separation of concerns",
        ],
        tech: [
          "Android",
          "MVVM",
          "Asynchronous Task",
          "API call handling",
          "Broadcast",
          "Shared Preferences",
          "Room Database Implementation",
        ],
      },
    ],
  },

  // -------------------------------------Blogs Page Data-----------------------------------------
  blogs: {
    url: "/blogs",
    label: "Blogs",
    cover: require("../imgs/blog/cover.jfif"),
    summary: `My habit of sharing learnings developed in HSBC where I gave a lot of
    knowledge transfer sessions. This very habit nurtured my interest in
    writing technical blogs. Below are the technical blogs that I
    published with the same intention.`,
    blogData: [
      {
        img: require("../imgs/blog/android.png"),
        title: "01 Associate Android Developer Certification By Google",
        link: "https://s-threepio.medium.com/associate-android-developer-certification-by-google-114ab755c187",
        label: "[Medium]",
        info: "I explained the process of cracking the Google's android certification exam, interview and the approach for it's preparation. I also created resources for the same purpose",
      },
      {
        img: require("../imgs/blog/docker.png"),
        title: "02 Docker Overview with React Application",
        link: "https://s-threepio.medium.com/docker-overview-41a3bbfa19f3",
        label: "[Medium]",
        info: "I touched upon the basics of docker and it's advantages. As an add on, I have also explained the process to dockerize a basic react application.",
      },
      {
        img: require("../imgs/blog/crypto.jpg"),
        title: "03 Crypto Currency Block Chain Application",
        link: "https://s-threepio.medium.com/creating-a-cryptocurrency-blockchain-app-46d057d9a712",
        label: "[Medium]",
        info: "I wrote about the workings of the blockchain technology. I also explained how your own cryptocurrency can be created by using a redis publish subscribe model for peers.",
      },
    ],
  },

  // -------------------------------------Certification Page Data-----------------------------------------
  certifications: {
    url: "/certifications",
    label: "Certifications",
    certs: [
      {
        title: "Hackerrank - Problem Solving Intermediate",
        date: "June 2023",
        image: require("../imgs/certs/hackerrank.png"),
      },
      {
        title:
          "Technologist of the Quarter Award for Outstanding Performance by HSBC",
        date: "Jan-April 2020",
        image: require("../imgs/certs/HSBC.png"),
      },
      {
        title: "Google Certified Associate Android Developer",
        date: "Sep2020-Sep 2023",
        image: require("../imgs/certs/google.png"),
      },
      {
        title: "AWS Certified Solutions Architect - Associate (SAA)",
        date: "Feb 2020-Feb 2023",
        image: require("../imgs/certs/aws.png"),
      },
      {
        title: "Machine Learning Certified by Coursera",
        date: "Jul 2019",
        image: require("../imgs/certs/cour.png"),
      },
    ],
  },

  // -------------------------------------Hobbies Page Data-----------------------------------------
  hobbies: {
    url: "/hobbies",
    label: "Hobbies",
    hobbyData: [
      {
        hobbyname: "Book Reading",
        img: require("../imgs/hobby/book.webp"),
        description:
          "I am an avid reader of fantasy fiction and any book which has an amazing story to tell. In my opinion stories hold a lot power. Layered characters in a wonderful imagination and the decisions they make in a particular situation can tell us a lot about the way of life. My personal opinion : Every book is a self help book because reading is therapy.",
      },
      {
        hobbyname: "Piano",
        img: require("../imgs/hobby/piano.webp"),
        description:
          'Apart from listening to music, I also love to create my own with the beautiful 88 key beast. I compose when I am lucky and I play when I am not busy. I try to incorporate what Beethoven said about music."To play a wrong note is insignificant, but to play without passion is inexcusable."',
      },
    ],
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
