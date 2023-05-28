import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import CardSection from "./CardSection.js";
import Bio from "./Bio.js";
import About from "./About.js";
import Resume from "./Resume.js";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Blogs from "./Blogs.js";
import Certifications from "./Certifications.js";
import Hobbies from "./Hobbies.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col h-screen m-0">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
