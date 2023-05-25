import navLinks from "./data/urls.json";
import logo from "./imgs/education.png";

const Header = () => {
  return (
    <header className="font-semibold scale-y-105 border-b border-gray-100">
      <nav className="flex-col items-center p-2 px-2 bg-white md:flex lg:flex-row">
        <div className="flex items-center flex-1">
          <span className="px-2 text-xs">&#x25A0;</span>
          <span className="text-lg font-bold">Swanand Kavitkar</span>
          <img className="h-8 ml-2 mr-1" src={logo} alt="Logo" />
          <div className="flex flex-row items-center gap-1 ml-2 text-base">
            <span>MSCS</span>
            <span>@</span>
            <span>Arizona State University</span>
          </div>
        </div>
        <div>
          <ul className="flex text-base">
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
