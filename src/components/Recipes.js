//import ".../style/NavStyle.css";
//import NavBar from "../routers/Nav";
import { HashLink } from 'react-router-hash-link';
import "../style/ProjectPages.css";
import arrow from "../images/For_Ellu/arrow.png";

const Recipes = () => {

  return (
    <div className="content">
      <div id="project-page">

        <HashLink className="back-button" to="/#projects" preventScrollReset={true}>
          <img src={arrow} alt="arrow here"></img>
          Go back
        </HashLink>
        <h1>Recipe book</h1>
          <div className="project-container">
            <div className="first-half">

              <div id="project-tags">
                <div className="project-tag" id="tag-4"><p>Java</p></div>
                <div className="project-tag" id="tag-1"><p>Spring Framework</p></div>
                <div className="project-tag" id="tag-3"><p>Spring Boot</p></div>
                <div className="project-tag" id="tag-2"><p>SQL</p></div>
              </div>
            
              <p>
                This project was a part of the <span style={{fontStyle: "italic"}}>Server Developer</span> -course 
                in the Spring of 2023. 
                Everyone got to choose the topic of their project themselves, and I chose to create a website
                where I can keep track of my recipes. 
                <br/>
                <br/>
                The website was created using Java, and Spring Framework/Boot. I also created a database using SQL 
                scripts. The website was made using the CRUD principle (create, read, update delete), and there are 
                different views depending on the role of the user.
                <br/>
                <br/>
                The project was at the time deployed into Haaga-Helia's servers which have since been taken down. 
                That being said, I still have this wonderful video to demonstrate the application!
                <br/>
                <br/>
                Timestamps for the video:
                <br/>
                0:00 - Admin view
                <br/>
                0:09 - Edit recipe
                <br/>
                0:56 - Add new recipe
                <br/>
                2:30 - View & delete the newly added recipe
                <br/>
                2:39 - View, add, edit & delete units
                <br/>
                3:15 - User view
              </p>
            </div>
            <iframe title="Video to demostrate the app" src="https://www.youtube.com/embed/WA6WexPhqP4"></iframe>
            
          </div>
      </div>
    </div>
  );
};
  
export default Recipes;
  