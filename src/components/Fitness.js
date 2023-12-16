import "../style/ProjectPages.css";
import projectPic from "../images/For_Ellu/Scheduling-example-photo.png";
import arrow from "../images/For_Ellu/arrow.png";
import { HashLink } from 'react-router-hash-link';

const Fitness = () => {
  return (
    <div className="content">
      <div id="project-page">

        <HashLink className="back-button" to="/#projects" preventScrollReset={true}>
          <img src={arrow} alt="arrow here"></img>
          Go back
        </HashLink>
        <h1>Personal Trainer App</h1>
          <div className="project-container">
            <div className="first-half">

              <div id="project-tags">
                <div className="project-tag" id="tag-1"><p>React</p></div>
                <div className="project-tag" id="tag-2"><p>MUI</p></div>
                <div className="project-tag" id="tag-3"><p>JavaScript</p></div>
                <div className="project-tag" id="tag-4"><p>HTML</p></div>
                <div className="project-tag" id="tag-1"><p>APIs</p></div>
              </div>
            
              <p>
                This project was part of the <span style={{fontStyle: "italic"}}>Front-End Developer </span> 
                -course in the Spring of 2023. 
                In the project, we created an application for Personal Trainers where they can keep track of their 
                customers and trainings. Some other features are also provided, like a calendar which provides a 
                visual presentation of the training schedule. The backend was accessed through APIs that were 
                provided to us.
                <br/>
                <br/>
                The application was made using React.js and Material UI (MUI) component library. 
                Through this project, I was able to familiarize myself with the creation of single-page applications.
                Since the project was purely to learn front-end development, the backend was accessed through APIs 
                that were provided to us.
                <br/>
                <br/>
                Since this course ended, I've been able to utilize my learned skills in other projects such as a project 
                course where we created a full-stack website for Sibelius Academy (2023 Fall, still ongoing), and of course, 
                for this project.
              </p>
              
              
              <a href="https://elinapekka.github.io/personaltrainerapp/" target="_blank" rel="noreferrer">
                <div className="link-to-page" >
                  <p>Visit the page!</p>
                </div>
              </a>
            </div>
            <img className="project-pic" src={projectPic} alt="project"/>
          </div>
      </div>
    </div>
  );
};
  
export default Fitness;
  