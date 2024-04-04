import "./FadeinButton.css";
import { BsArrowRightShort } from "react-icons/bs";

const FadeinButton = ({ text }) => {
  return (
    <div className="fadein_btn-container">
      <button className="fadein_btn">
        {text}
        <div className="icon_container"><BsArrowRightShort size={40} color="#fff" className="rotate_icon"/></div>
      </button>
    </div>
  );
};

export default FadeinButton;
