import "./Offers.css";
import offerPic from "../../Assets/Offers-img.png";
import { Link } from "react-router-dom";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <img src={offerPic} alt="offers" />
      </div>
      <div className="offers-right">
        <h1>Exclusive Offers</h1>
        <p>Up to sell</p>
        <h1>50% off</h1>
        <h2> Get the best selling products on sell</h2>
        <Link className="offers-link" to="product">
          Check Now
        </Link>
      </div>
    </div>
  );
};
export default Offers;
