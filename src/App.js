import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-[#F4ECE6]"></div>
      <Footer />
    </div>
  );
};

export default App;
