import "./Navbar.css";
import Logo from "../../assets/images/Logo.png";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import FadeoutButton from "../Buttons/FadeoutButton/FadeoutButton";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="nav_container">
      <div className="nav_logo">
        <img className="image_logo" src={Logo} alt="Logo" />
      </div>
      <nav className="nav_item">
        <ul className="nav_list">
          <li className="nav_link">
            <a href="/" className="link">
              Home <MdOutlineKeyboardArrowDown size={24}/>
            </a>
          </li>
          <li className="nav_link">
            <a href="/about" className="link">
              About Us
            </a>
          </li>
          <li className="nav_link">
            <a href="/contact" className="link">
              Pages
              <MdOutlineKeyboardArrowDown size={24}/>
            </a>
          </li>
          <li className="nav_link">
            <a href="/contact" className="link">
              Service
              <MdOutlineKeyboardArrowDown size={24}/>
            </a>
          </li>
          <li className="nav_link">
            <a href="/Project" className="link">
              News & Event
              <MdOutlineKeyboardArrowDown size={24}/>
            </a>
          </li>
          <li className="nav_link">
            <a href="/Contact" className="link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div className="icon_warper">
        <div className="shop_bag">
          <MdOutlineShoppingBag size={27} />
        </div>
        <div className="search_icon">
          <IoSearch size={27} />
        </div>
        <div className="btn_container">
          <FadeoutButton text={"GET QUOTE"} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
