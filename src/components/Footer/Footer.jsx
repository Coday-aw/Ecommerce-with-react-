import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "./Footer.css";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-contanier">
      <div className="footer">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
          <h1>Mega Store</h1>
        </div>
        <ul className="footer-links">
          <li>Company</li>
          <li>Contact</li>
          <li>About</li>
          <li>Products</li>
        </ul>
        <div className="footer-socials">
          <div className="socials-container">
            <FaInstagram className="socials-icon" />
          </div>
          <div className="socials-container">
            <FaFacebook className="socials-icon" />
          </div>
          <div className="socials-container">
            <FaTwitter className="socials-icon" />
          </div>
        </div>
        <div className="footer-rights">
          <hr />
          <h1>© 2024 - All rights reserved</h1>
        </div>
      </div>
    </div>
  );
};
export default Footer;
