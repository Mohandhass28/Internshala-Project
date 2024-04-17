import "./UserLogo.css";

const UserLogo = () => {
  return (
    <>
      <div className="user_images">
        <div className="dropimg_text">
          <div className="img_container">
            <img src="src/assets/images/Ellipse 3.png" alt="" />
            <img src="src/assets/images/Ellipse 4.png" alt="" />
            <img src="src/assets/images/Ellipse 5.png" alt="" />
            <img src="src/assets/images/Ellipse 6.png" alt="" />
          </div>
          <div className="client_text">
            <p className="client_text-para">Clients Satisfaction</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogo;
