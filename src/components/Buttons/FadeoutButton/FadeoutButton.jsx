import "./FadeoutButton.css";
import { BiSolidRightArrowAlt } from "react-icons/bi";

const FadeoutButton = ({ text }) => {
  return (
    <div className="fadeinbtn_container">
      <button className="btn_out">
        <span className="btn_text">{text}</span>
        <div className="arrow_btn">
          <BiSolidRightArrowAlt size={33} />
        </div>
      </button>
    </div>
  );
};

export default FadeoutButton;
