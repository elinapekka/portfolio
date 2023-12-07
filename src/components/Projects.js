import '../style/ProjectStyle.css';
import personalTrainerAppImg from '../images/project/personaltrainerapp.png';

export default function Projects(){
    return (
        <div id="project-container">
          <div className="project-item"
                
          >
            <img src={personalTrainerAppImg} 
            alt='Personal trainer app project'
            className='project-image' />
            <h2>Personal trainer app</h2>
            <p>Front-end, React</p>
          </div>
          <div className="project-item">
            <h2>project 2</h2>
          </div>
          <div className="project-item">
            <h2>project 3</h2>
          </div>
          <div className="project-item">
            <h2>project 4</h2>
          </div>
        </div>
      );
}
