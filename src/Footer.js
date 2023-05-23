import React from "react";
import "./Footer.css";
import linkedin from "./linkedin.png";
import medium from "./medium.png";
import github from "./github.png";

const Footer = () => {
  return (
    <footer>
      <div className="copyright">© 2023 by Swanand Kavitkar</div>
      <div className="contact">
        <div className="card">
          Call
          <a href="tel:+{16232838579}">+1 (623) 283-8579</a>
        </div>
        <div className="card">
          Email
          <a href="mailto:skavitka@asu.edu">skavitka@asu.edu</a>
        </div>
        <div className="card">
          Social
          <div className="social">
            <a href="https://www.linkedin.com/in/s-threepio/">
              <img className="icon" src={linkedin} alt="Icon" />
            </a>
            <a href="https://github.com/S-Threepio">
              <img className="icon" src={github} alt="Icon" />
            </a>
            <a href="https://s-threepio.medium.com/">
              <img className="icon" src={medium} alt="Icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
