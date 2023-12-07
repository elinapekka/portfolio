import "../style/MessageStyle.css";
import star from "../images/star.png"

const Message = () => {
    return (
        <div className="message">
            <h3>
                <img src={star} alt="star"/>
                welcome to elina's portfolio 
                <img src={star} alt="star"/> 
                happy to have you here 
                <img src={star} alt="star"/>
            </h3>
        </div>
    );
}

export default Message;