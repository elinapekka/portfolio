//import ".../style/NavStyle.css";
//import NavBar from "../routers/Nav";
import {Link} from 'react-router-dom';
import "../style/ProjectPages.css";
import arrow from "../images/For_Ellu/arrow.png";

const Recipes = () => {

  return (
    <div className="content">
      <div id="project-page">

        <Link className="back-button" to="/" preventScrollReset={true}><img src={arrow} alt="arrow here"></img>Go back</Link>
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
                This project was done as a part of the <span style={{fontStyle: "italic"}}>Server Developer</span> -course in the Spring of 2023. 
                Everyone got to choose the topic of their project themselves, and I chose to create a website
                where I can keep track of my recipes. 
                <br/>
                <br/>
                The website was created using Java, Spring Framework/Boot, and I also created a database using SQL
                scripts.
                The website was made using the CRUD-principle (create, read, update delete), and there are  
                different views depending on role of the user.
                <br/>
                <br/>
                The project was at the time deployed into Haaga-Helia's servers which have since been taken down. 
                That being said, I still have this wonderful video to demonstrate the application! 
              </p>
            </div>
            <iframe title="Video to demostrate the app" src="https://www.youtube.com/embed/WA6WexPhqP4"></iframe>
            
          </div>
      </div>
    </div>
  );
};
  
export default Recipes;
  