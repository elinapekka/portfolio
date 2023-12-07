import "../style/ProjectStyle.css"
import illustration from "../images/For_Ellu/Illustrations/Projects.png";
import projectJarpec from "../images/For_Ellu/Projects/1_Jarpec-project-IMG.jpg";
import projectRecipe from "../images/For_Ellu/Projects/1_Recipes-project-IMG.jpg";
import projectFitness from "../images/For_Ellu/Projects/1_Scheduling-project-IMG.jpg";

const Projects = () => {
  return (
    <section className="content">
      <div id="projects">

        <div id="project-intro">
          <img className="project-img" src={illustration} alt="project illustration"/>
          <div className="project-description">
            <h1>Projects</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        <div id="project-container">
          <div className="project-item">
            <img className="project-item-img" src={projectFitness} alt="fitness project"/>
            <h2>Fitness scheduler</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. 
            </p>
            <p>Read more</p>
          </div>
          <div className="project-item">
            <img className="project-item-img" src={projectRecipe} alt="recipe project"/>
            <h2>Recipe backend app</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. 
            </p>
            <p>Read more</p>
          </div>
          <div className="project-item">
            <img className="project-item-img" src={projectJarpec} alt="jarpec project"/>
            <h2>Jarpec website design</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. 
            </p>
            <p>Read more</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
