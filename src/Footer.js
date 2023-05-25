import React from "react";
import linkedin from "./imgs/linkedin.png";
import medium from "./imgs/medium.png";
import github from "./imgs/github.png";

const Footer = () => {
  return (
    <footer className="bg-[#F4ECE6] px-4 flex flex-col md:flex-row font-semibold items-center">
      <div className="flex-1">© 2023 by Swanand Kavitkar</div>
      <div className="flex flex-col px-10 py-2 pb-6 md:flex-row">
        <div className="flex flex-col px-2 text-center">
          Call
          <a className="pt-1 underline" href="tel:+{16232838579}">
            +1 (623) 283-8579
          </a>
        </div>
        <div className="flex flex-col px-4 text-center">
          Email
          <a className="pt-1 underline" href="mailto:skavitka@asu.edu">
            skavitka@asu.edu
          </a>
        </div>
        <div className="flex flex-col justify-center px-4 text-center">
          Social
          <div className="flex justify-center gap-2">
            <a href="https://www.linkedin.com/in/s-threepio/">
              <img
                className="w-6 pt-1 hover:scale-125"
                src={linkedin}
                alt="Icon"
              />
            </a>
            <a href="https://github.com/S-Threepio">
              <img
                className="w-6 pt-1 hover:scale-125"
                src={github}
                alt="Icon"
              />
            </a>
            <a href="https://s-threepio.medium.com/">
              <img
                className="w-6 pt-1 hover:scale-125"
                src={medium}
                alt="Icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
