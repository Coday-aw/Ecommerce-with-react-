import "./DropDown.css";
import { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { useSelector } from "react-redux";

const DropDown = () => {
  const { totalQuantity } = useSelector((state) => state.ShoppingCart);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="cart">
        <button onClick={toggleOpen} className="cart-icon">
          <BsCart3 />
          <span className="cart-count">{totalQuantity}</span>
        </button>
        <div>
          {isOpen && (
            <div className="cart-dropdown">
              <ShoppingCart />
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default DropDown;
