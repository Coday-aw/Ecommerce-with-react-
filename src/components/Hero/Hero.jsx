import "./Hero.css";
import Heropic from "../../Assets/hero-pic.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="contanier">
      <div className="hero">
        <div className="hero-left">
          <p>Welcome to LOGO shop</p>
          <h1>Buy the lastest electranics</h1>
          <Link to="product" className="hero-btn">
            Buy Now
          </Link>
        </div>

        <div className="hero-right">
          <img src={Heropic} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
