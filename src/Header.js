import { Link, useLocation } from "react-router-dom";
import navLinks from "./data/urls.json";
import React, { useEffect, useState } from "react";
import images from "./provider/ImageProvider";
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    if (window.innerWidth < 768) {
      setMenuOpen(!isMenuOpen);
      console.log(isMenuOpen);
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const setCustomActiveIndex = (index) => {
    setActiveIndex(index);
    handleMenuToggle();
  };

  return (
    <header className="font-semibold scale-y-105 border-b border-gray-300 md:border-gray-100">
      <nav className="flex flex-row items-center p-4 px-2 bg-white h-max md:flex-col md:items-center xl:flex-row">
        <div className="flex items-center justify-center flex-1 md:justify-normal">
          <span className="hidden px-2 text-xs md:flex">&#x25A0;</span>
          <span className="text-lg font-bold">Swanand Kavitkar</span>
          <img
            className="hidden h-8 ml-2 mr-1 md:flex"
            src={images.header.logo}
            alt="Logo"
          />
          <div className="flex flex-row items-center gap-1 ml-2 text-base">
            <span>MSCS</span>
            <span>@</span>
            <span className="hidden md:flex">Arizona State University</span>
            <span>ASU</span>
          </div>
        </div>
        <div>
          <img
            className={`w-5 ${!isMenuOpen ? `flex` : `hidden`} md:hidden`}
            onClick={handleMenuToggle}
            src={images.header.menu}
            alt="Logo"
          />
        </div>

        {isMenuOpen && (
          <div
            className="absolute inset-0 w-screen h-screen backdrop-filter backdrop-blur-sm md:hidden"
            onClick={() => handleMenuToggle()}
          />
        )}

        <div>
          <ul
            className={`pt-5 md:pt-0 w-1/2 h-screen flex transition-transform duration-300 transform md:transform-none md:transition-none flex-col absolute top-0 right-0  bg-white text-center border border-gray-200  md:border-none md:static md:h-auto md:w-auto md:flex md:flex-row md:text-base
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            {navLinks.map((link, index) => (
              <Link
                to={link.url}
                key={index}
                className={`md:text-center px-4 py-4 sm:py-2 transition duration-100 ease-out hover:bg-[#F4ECE6] md:hover:scale-105 cursor-pointer 
                ${
                  window.location.pathname == link.url
                    ? "bg-[#F4ECE6]"
                    : "bg-white"
                }`}
                onClick={() => setCustomActiveIndex(index)}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
