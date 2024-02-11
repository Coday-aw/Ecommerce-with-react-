import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import DropDown from "../DropDown/DropDown";
import Logo from "../../Assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar page-container ">
      <div className="container">
        <div className="nav-logo">
          <img src={Logo} alt="logo" />
          <h1>Mega store</h1>
        </div>
        <ul className="nav-links">
          <li className="nav-link">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/product">Products</NavLink>
          </li>
          <li className="nav-link">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="cart">
          <div className="cart">
            <div className="cart-icon">
              {/* <BsCart3 /> */}
              <DropDown />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
