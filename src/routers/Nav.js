//https://codesandbox.io/s/react-scroll-example-8mcr3?file=/src/About.js:0-427

import "../style/NavStyle.css"
import logo from "../images/For_Ellu/Elina-Pekkanen-02.png";
import logo2 from "../images/For_Ellu/Elina-Pekkanen-01.png";
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  return (
    <div className="content">
      <div id="navbar" >
        <img id="logo" src={logo} alt="website logo"></img>
        <img id="logo-mobile" src={logo2} alt="website logo"></img>
        <div id="links">
        <HashLink className="navItem" smooth to="/#about">
          About me
        </HashLink>
        <HashLink className="navItem" smooth to="/#projects">
          Projects
        </HashLink>
        <HashLink className="navItem" smooth to="/#contact">
          Contact
        </HashLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
