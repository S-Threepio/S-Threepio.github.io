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
      linkedin: require("../imgs/landing/linkedin.png"),
      medium: require("../imgs/landing/medium.png"),
      github: require("../imgs/landing/github.png"),
      copyright: "© 2023 by Swanand Kavitkar",
    },
    cardsection: {
      linkedin: require("../imgs/landing/linkedin-blue.png"),
      medium: require("../imgs/landing/medium.png"),
      github: require("../imgs/landing/github.png"),
      leetcode: require("../imgs/landing/leetcode.png"),
      pfp: require("../imgs/landing/pfp.jpg"),
    },
  },
  resume: {
    url: "/resume",
    label: "Resume",
  },
  skills: {
    url: "/skills",
    label: "Skills",
    images: {
      teamWork: require("../imgs/skills/soft/teamWork.png"),
      adaptability: require("../imgs/skills/soft/adaptability.jpeg"),
      communication: require("../imgs/skills/soft/Communication.webp"),
      problemsolving: require("../imgs/skills/soft/problemSolving.webp"),
      creativity: require("../imgs/skills/soft/creativity.jpg"),
      time: require("../imgs/skills/soft/time.png"),
    },
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
