import navLinks from "./data/urls.json";
import logo from "./imgs/education.png";
import menu from "./imgs/menu.png";
import React, { useEffect, useState } from "react";
const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <header className="font-semibold scale-y-105 border-b border-gray-100">
      <nav className="flex flex-row items-center p-2 px-2 bg-white md:flex-col md:items-center xl:flex-row">
        <div className="flex items-center flex-1">
          <span className="hidden px-2 text-xs md:flex">&#x25A0;</span>
          <span className="text-lg font-bold">Swanand Kavitkar</span>
          <img className="hidden h-8 ml-2 mr-1 md:flex" src={logo} alt="Logo" />
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
            src={menu}
            alt="Logo"
          />
        </div>
        <div>
          <ul
            className={`flex-col md:flex md:flex-row md:text-base ${
              isMenuOpen ? `flex` : `hidden`
            }`}
          >
            {navLinks.map((link, index) => (
              <li
                key={index}
                className="px-4 py-2 transition duration-100 ease-out hover:bg-[#F4ECE6] hover:scale-105 cursor-pointer "
              >
                <a href={link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
