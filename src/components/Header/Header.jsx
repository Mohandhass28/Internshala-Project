import "./Header.css";
import profile from "../../assets/images/image.png";
import { BsArrowRightShort } from "react-icons/bs";
import FadeinButton from "../../components/Buttons/FadeinButton/FadeinButton"

const Header = () => {
  return (
    <>
      <div className="home">
        <div className="back_ground-img">
          <img src={profile} alt="profile" height={690} width={690} />
          <div className="user_images">
            <div className="dropimg_text">
              <div className="img_container">
                <img src="src/assets/images/Ellipse 3.png" alt="" />
                <img src="src/assets/images/Ellipse 4.png" alt="" />
                <img src="src/assets/images/Ellipse 5.png" alt="" />
                <img src="src/assets/images/Ellipse 6.png" alt="" />
              </div>
              <span className="client_text">Clients Satisfaction</span>
            </div>
          </div>
        </div>
        <div className="text_content">
          <div className="hearer">
            <p className="text_icon">
              <BsArrowRightShort size={35} className="header_icon-arrow"/> WELCOME TO JYTHU
            </p>
          </div>
          <div className="">
            <h1 className="header_text">
              A Marketing <span className="agency_text">Agency</span> To Grow Your
              Business
            </h1>
          </div>
          <div className="paragraph_container">
            <p className="paragraph">
              We are 100+ professional software engineers with more than 10 year
              of experience in delivering superior products Believe it because you
              have seen it. Here are real numbers
            </p>
          </div>
          <div className="header_btns">
            <FadeinButton text={'GET STARTED'}/>
            <div className="play_icon">
              <a href="#" className="link_play">
                <div className="outer_img">
                  <img src="src/assets/images/Test/Ellipse 2.png" alt="" />
                  <div className="inner_img"><img src="src/assets/images/Test/Vector.png" alt="" /></div>
                </div>
                <span className="header_text-watch">WATCH VIDEO</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="social_media"></div>
    </>
  );
};

export default Header;
