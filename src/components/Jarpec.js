//import ".../style/NavStyle.css";
//import NavBar from "../routers/Nav";
import {Link} from 'react-router-dom';
import "../style/ProjectPages.css";
import projectPic from "../images/For_Ellu/Projects/3_Jarpec-logo-JP_värillinen_CMYK.png";
import arrow from "../images/For_Ellu/arrow.png";
import star from "../images/star.png";

const Jarpec = () => {

  return (
    <div className="content">
      <div id="project-page">

        <Link className="back-button" to="/" preventScrollReset={true}><img src={arrow} alt="arrow here"></img>Go back</Link>
        <h1>Personal Trainer App</h1>
          <div className="project-container">
            <div className="first-half">

              <div id="project-tags">
                <div className="project-tag" id="tag-3"><p>HTML</p></div>
                <div className="project-tag" id="tag-4"><p>CSS</p></div>
              </div>
            
              <p>
                This project was done as a part of the <span style={{fontStyle: "italic"}}>Introduction to Digital Design</span> -course in the Fall of 2021, 
                where the aim was to familiarize ourselves with HTML and CSS. We got to do a project of our choice as
                the end project, and I decided to do a website for the company Jarpec, where I utilized different 
                design princples to create a user-friendly website. In the website, responsive design and 
                many different types of boxes/containers are utilized.
                <br/>
                <br/>
                I have since learned a lot and can see that there are many things to improve on, but at the time I was
                very happy with my work. I remember this time of my studies
                being very exiting since everything was still so new and it truly sparked my interest
                towards coding.
                <br/>
                <br/>
                Since this course ended, I've been able to utilize the skills I learned in nearly every project.
                I believe this project and the course in general left me with great tools in web development.
              </p>
              
              <div className='link-to-page'>
                <a href="https://demojarpec.github.io/" target="_blank" rel="noreferrer">
                  <div className='inside-link'>
                    <img src={star} alt="" />
                    <p>Visit the page!</p>
                    <img src={star} alt="" />
                  </div>
                </a>
              </div>
              
            </div>
            <img className="project-pic" src={projectPic} alt="project"/>
          </div>
      </div>
    </div>
  );
};
  
export default Jarpec;
  