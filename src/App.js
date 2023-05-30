import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import About from "./components/Landing/About.js";
import Resume from "./components/Resume/Resume.js";
import Skills from "./components/Skills.js";
import Projects from "./components/Projects.js";
import Blogs from "./components/Blogs.js";
import Certifications from "./components/Certifications.js";
import Hobbies from "./components/Hobbies.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col h-screen m-0">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
