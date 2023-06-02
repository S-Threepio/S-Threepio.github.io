import React from "react";
import linkedin from "./imgs/landing/linkedin.png";
import medium from "./imgs/landing/medium.png";
import github from "./imgs/landing/github.png";

const Footer = () => {
  return (
    <footer className="bg-[#F4ECE6] px-4 flex flex-col-reverse py-2 md:py-0 md:flex-row font-semibold items-center">
      <div className="flex-1 py-2 md:py-0">© 2023 by Swanand Kavitkar</div>
      <div className="flex flex-col px-10 m-2 md:p-2 md:flex-row">
        <div className="flex flex-col px-2 py-2 text-center md:py-0">
          Call
          <a className="underline md:pt-1" href="tel:+{16232838579}">
            +1 (623) 283-8579
          </a>
        </div>
        <div className="flex flex-col px-2 py-2 text-center md:py-0">
          Email
          <a className="underline md:pt-1" href="mailto:skavitka@asu.edu">
            skavitka@asu.edu
          </a>
        </div>
        <div className="flex-col justify-center hidden px-4 py-2 text-center md:flex md:py-0">
          Social
          <div className="flex justify-center gap-2 py-1 md:py-0">
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
