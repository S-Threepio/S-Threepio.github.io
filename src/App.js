import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import Intro from "./Intro.js";
import Bio from "./Bio.js";

const App = () => {
  return (
    <div className="flex flex-col h-screen align-top m-0">
      <Header />
      <div className="flex flex-1 flex-row overflow-hidden w-screen relative">
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
