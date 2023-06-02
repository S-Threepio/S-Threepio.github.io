import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import About from "./components/Landing/About.js";
import Resume from "./components/Resume/Resume.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Blogs from "./components/Blogs.js";
import Certifications from "./components/Certifications.js";
import Hobbies from "./components/Hobbies.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const skills = [
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
  ];

  return (
    <div className="flex flex-col h-screen m-0">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills skills={skills} />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
