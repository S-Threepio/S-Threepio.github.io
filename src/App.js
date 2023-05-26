import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import CardSection from "./CardSection.js";
import Bio from "./Bio.js";

const App = () => {
  return (
    <div className="flex flex-col h-screen m-0">
      <Header />
      <div className="flex flex-row flex-1 w-screen overflow-hidden">
        <div className="flex flex-[2] lg:bg-[#F4ECE6]"></div>
        <div className="flex flex-[3] bg-white "></div>
        <div className="flex flex-[4] flex-col sm:flex-row justify-center md:left-[10%] items-center md:absolute top-[20%] lg:left-[19%] tablet:left-[20%]  xl:left-[30%] scale-105">
          <CardSection />
          <Bio />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
