import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";
import "./CartItem.css";
import { useDispatch } from "react-redux";
import {
  removeOne,
  removeItem,
  addToCart,
} from "../../store/features/ShoppingCart/ShoppingCartSlice";

export const CartItem = ({ item }) => {
  const dispach = useDispatch();

  const handleRemove = () => {
    dispach(removeOne(item.product._id));
  };

  const addItem = () => {
    dispach(addToCart(item.product));
  };

  const deteleItem = () => {
    dispach(removeItem(item.product._id));
  };

  return (
    <div className="check-out-item">
      <div className="item-details">
        <img src={item.product.images[0]} alt="" />
        <div>
          <p className="item-name">{item.product.name}</p>
          <p className="item-quantity">
            {item.quantity} x {item.product.price}:-
          </p>
        </div>
      </div>
      <div className="check-out-right">
        <div>
          <button onClick={handleRemove} className="minus-btn">
            <FaMinus />
          </button>
          <button onClick={addItem} className="plus-btn">
            <FaPlus />
          </button>
        </div>
        <button onClick={deteleItem} className="remove-item">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
export default CartItem;
