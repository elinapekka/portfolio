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
              Some coding languages I've learned include Java, Python, JavaScript, 
              TypeScript, HTML and CSS. I'm also very capable of working with React (for 
              reference, this website was made using React). I'm very willing and excited
              to learn new coding languages and tools as well, I'm especially interested in
              learning Angular and Vue.js. 
              <br />
              <br />
              Here you can find some of the projects I've worked on over the years. Some other 
              projects I've been involved in are through project courses which utilized different
              agile frameworks, such as Scrum. I'm also familiar with Git version control.
            </p>
          </div>
        </div>

        <div id="project-container">
          <div className="project-item">
          <Link to="/fitness-scheduler">
            <img className="project-item-img" src={projectFitness} alt="fitness project"/>
          </Link>
            <h2>Fitness scheduler</h2>
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
            <h2>Recipe backend app</h2>
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
