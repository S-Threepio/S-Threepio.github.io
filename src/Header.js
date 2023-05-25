import navLinks from "./data/urls.json";
import logo from "./imgs/education.png";

const Header = () => {
  return (
    <header className="font-semibold border-b border-gray-100 scale-y-105">
      <nav className="bg-white md:flex flex-col items-center p-2 lg:flex-row">
        <div className="flex flex-1 items-center">
          <span className="text-xs px-2">&#x25A0;</span>
          <span className="font-bold text-lg">Swanand Kavitkar</span>
          <img className="h-8 ml-2" src={logo} alt="Logo" />
          <div className="text-base ml-2">MSCS@ASU</div>
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
