import "../style/ProjectStyle.css"
import illustration from "../images/For_Ellu/Illustrations/Projects.png";
import projectJarpec from "../images/For_Ellu/Projects/1_Jarpec-project-IMG.jpg";
import projectRecipe from "../images/For_Ellu/Projects/1_Recipes-project-IMG.jpg";
import projectFitness from "../images/For_Ellu/Projects/1_Scheduling-project-IMG.jpg";
import {Link} from 'react-router-dom';

const Projects = () => {
  return (
    <section className="content">
      <div id="projects">

        <div id="project-intro">
          <img className="project-img" src={illustration} alt="project illustration"/>
          <div className="project-description">
            <h1>Projects</h1>
            <p>
              I've got a solid foundation in various coding languages, including 
              <span style={{fontWeight: "bold"}}> Java</span>, 
              <span style={{fontWeight: "bold"}}> Python</span>, 
              <span style={{fontWeight: "bold"}}> JavaScript</span>, 
              <span style={{fontWeight: "bold"}}> TypeScript</span>, 
              <span style={{fontWeight: "bold"}}> HTML</span>, and 
              <span style={{fontWeight: "bold"}}> CSS</span>. 
              I'm also familiar working with 
              <span style={{fontWeight: "bold"}}> React</span>, for instance, 
              it was used to create this portfolio! 
              I'm always up for a coding challenge and eager to expand my skill set. 
              Currently eyeing Angular and Vue.js for my next learning adventure.
              <br />
              <br />
              Here you can find some of the projects I've worked on over the years. Some other 
              projects I've been involved in are through project courses that utilized different
              agile frameworks, such as Scrum. I'm also familiar with Git version control.


            </p>
          </div>
        </div>

        <div id="project-container">
          <div className="project-item">
          <Link to="/fitness-scheduler">
            <img className="project-item-img" src={projectFitness} alt="fitness project"/>
          </Link>
            <h2>Personal trainer app</h2>
            <p>
              A fitness scheduler made for the Frontend course utilizing React and MUI
              component library. 
            </p>
            <Link className="project-more" to="/fitness-scheduler">Read more</Link>
          </div>
          <div className="project-item">
            <Link to="/recipes">
              <img className="project-item-img" src={projectRecipe} alt="recipe project"/>
            </Link>
            <h2>Recipe book app</h2>
            <p>
              Personal project for the backend course, documenting recipes to a database 
              utilizing Java, Spring Boot/Framework, and SQL.
            </p>
            <Link className="project-more" to="/recipes">Read more</Link>
          </div>
          <div className="project-item">
            <Link to="/jarpec">
              <img className="project-item-img" src={projectJarpec} alt="jarpec project"/>
            </Link>
            <h2>Jarpec website design</h2>
            <p>
              My first ever coding project! Made a basic website for a company using 
              basic HTML and CSS.
            </p>
            <Link className="project-more" to="/jarpec">Read more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
