//https://codesandbox.io/s/react-scroll-example-8mcr3?file=/src/About.js:0-427

import { Link } from "react-scroll";
import "../style/NavStyle.css"
import logo from "../images/For_Ellu/Elina-Pekkanen-02.png";
import logo2 from "../images/For_Ellu/Elina-Pekkanen-01.png";

const NavBar = () => {
  return (
    <div className="content">
      <div id="navbar" >
        <img id="logo" src={logo} alt="website logo"></img>
        <img id="logo-mobile" src={logo2} alt="website logo"></img>
        <div id="links">
        <Link className="navItem" to="about" spy={true} smooth={true} offset={50} duration={500}>
          About me
        </Link>
        <Link className="navItem" to="projects" spy={true} smooth={true} offset={50} duration={500}>
          Projects
        </Link>
        <Link className="navItem" to="contact" spy={true} smooth={true} offset={50} duration={500}>
          Contact
        </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
