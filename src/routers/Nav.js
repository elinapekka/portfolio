//https://codesandbox.io/s/react-scroll-example-8mcr3?file=/src/About.js:0-427


import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div style={{backgroundColor: "blue", padding: "40px"}}>
      <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
        About
      </Link>
    </div>
  );
};

export default NavBar;
