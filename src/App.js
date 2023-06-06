import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import About from "./components/Landing/About.js";
import Resume from "./components/Resume/Resume.js";
import Skills from "./components/Skills/Skills.js";
import Projects from "./components/Projects/Projects.js";
import Blogs from "./components/Blogs/Blogs.js";
import Certifications from "./components/Certifications/Certifications.js";
import Hobbies from "./components/Hobbies/Hobbies.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalDataProvider } from "./provider/GlobalDataProvider.js";

const App = () => {
  return (
    <GlobalDataProvider>
      <Router>
        <div className="flex flex-col h-screen m-0 p-0">
          <Header />
          <div className="w-screen h-screen flex flex-col overflow-y-scroll sm:overflow-y-hidden scrollbar-hide p-0">
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/certifications" element={<Certifications />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </GlobalDataProvider>
  );
};

export default App;
