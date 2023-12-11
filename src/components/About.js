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
            <p>
              My name is Elina and I am a third-year Business Information Technology 
              student from Haaga-Helia University of Applied Sciences. My specialization is Software Development 
              and I've also enjoyed taking the Digital Design -courses. Through my studies I've discovered a 
              passion for coding and therefore would like to pursue it as a career. 
              I'm currently actively looking for an internship and thesis opportunities within the field! 
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