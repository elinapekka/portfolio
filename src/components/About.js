import "../style/AboutStyle.css";
import NavBar from "../routers/Nav";
import illustrationElina from "../images/For_Ellu/Illustrations/Elina.png";

const About = () => {
  //const classes = useStyles();
  return (
    <section className="content">
      <div id="about">
        <NavBar />
        <div id="about-content">
          <div className="about-content-item">
            <h1>About me</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.</p>

            <div id="taglines">
              <div className="tag" id="tag-1"><p>Always ready to learn new</p></div>
              <div className="tag" id="tag-2"><p>Passion for coding</p></div>
              <div className="tag" id="tag-3"><p>Proactive</p></div>
              <div className="tag" id="tag-4"><p>Gets along with everyone</p></div>
            </div>
          </div>
          <img className="elina-illustration" src={illustrationElina} alt="illustration of me"></img>
        </div>
      </div>
    </section>
  );
};

export default About;