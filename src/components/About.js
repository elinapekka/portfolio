import "../style/AboutStyle.css";
import illustrationElina from "../images/For_Ellu/Illustrations/Elina.png";

const About = () => {
  //const classes = useStyles();
  return (
    <section className="content">
      <div id="about">
        <div id="about-content">
          <div className="about-content-item">
            <h1>Hello there!</h1>
            <img className="elina-illustration-mobile" src={illustrationElina} alt="illustration of me"></img>
            <p>
            I'm Elina, currently in my third year studying Business Information Technology at 
            Haaga-Helia University of Applied Sciences, with a focus on Software Development. 
            I've had the pleasure of exploring Digital Design courses along the way. Coding has 
            become more than just a subject for me—it's a passion I'm eager to turn into a career. 
            As I'm entering my last year of studies, I'm actively seeking opportunities for 
            internships and thesis projects in the field for the Spring of 2024!
            </p>

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