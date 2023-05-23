import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import "./App.css";

const App = () => {
  return (
    <div className="main">
      <Header />
      <div className="content">{/* The rest of your app's content */}</div>
      <Footer />
    </div>
  );
};

export default App;
