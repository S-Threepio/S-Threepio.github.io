import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Intro from "./Intro.js";
import Bio from "./Bio.js";

const App = () => {
  return (
    <div className="flex flex-col h-screen m-0 align-top">
      <Header />
      <div className="relative flex flex-row flex-1 w-screen overflow-hidden">
        <div className="flex flex-[2] bg-[#F4ECE6]"></div>
        <div className="flex flex-[3] bg-white "></div>
        <div className="flex flex-[4] flex-row items-center absolute top-[20%] left-[30%] scale-105">
          <Intro />
          <Bio />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
