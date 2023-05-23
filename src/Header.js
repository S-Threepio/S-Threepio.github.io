import "./Header.css";
import navLinks from "./data/urls.json";
import logo from "./education.png";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="left-section">
          Swanand Kavitkar
          <img className="logo" src={logo} alt="Logo" />
          <div className="university">MSCS@ASU</div>
        </div>
        <div className="right-section">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
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
