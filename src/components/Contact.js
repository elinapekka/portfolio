import "../style/ContactStyle.css"
import illustration from "../images/For_Ellu/Illustrations/Contact.png";
import linkedInLogo from "../images/linkedin.png";

const Contact = () => {
  return (
    <section className="content">
      <div id="contact" style={{height: "50vh"}}>
        <div id="contact-content">
          <div className="contact-info">
            <h1>Contact info</h1>
            <p>On LinkedIn you can find more indepth information about my educational background and skills. Don't hesitate to contact me!</p>
            <a href="https://www.linkedin.com/in/elina-pekkanen-457a26264/" target="_blank" rel="noreferrer"><img src={linkedInLogo} alt="linkedin logo"/></a>
          </div>
          <img src={illustration} alt="contact illustration"/>
        </div>
      </div>
      <div id="footer">
        <div>2023 Elina Pekkanen</div>
        <div>Illustrations: <a href="https://www.linkedin.com/in/jenna-p-218b54273/" target="_blank" rel="noreferrer">Jenna</a></div>
      </div>
    </section>
  );
};

export default Contact;
