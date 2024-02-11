import { CartItem } from "../CartItem/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./ShoppingCart.css";
import { clearCart } from "../../store/features/ShoppingCart/ShoppingCartSlice";

const ShoppingCart = ({ CheckOutPage }) => {
  const { cart, totalPrice } = useSelector((state) => state.ShoppingCart);

  const dispatch = useDispatch();
  const placeOrder = async () => {
    const order = {
      products: cart.map((item) => ({
        productId: item.product._id,
        quantity: item.quantity,
      })),
    };

    const response = await fetch(
      "https://js2-ecommerce-api.vercel.app/api/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();
    console.log(data);
    alert("Order placed successfully!, Thank you for shopping with us!");
    dispatch(clearCart());
  };

  return (
    <>
      <div className="shopping-cart-container">
        <div className="cart-items">
          {cart.length === 0 && (
            <div className="empty-cart">
              <p>Your cart is empty!</p>
            </div>
          )}
          {cart.map((item) => (
            <CartItem key={item.product._id} item={item} />
          ))}
        </div>
        <hr />
        <div className="check-out">
          <div>
            <p>Total Price: {totalPrice}:-</p>
          </div>
          <div>
            {CheckOutPage ? (
              <button
                onClick={() => dispatch(clearCart())}
                className="clear-cart"
              >
                Clear Cart
              </button>
            ) : (
              <Link
                to="checkout"
                className="check-out-link"
                onClick={(e) => {
                  if (cart.length === 0) {
                    e.preventDefault();
                  }
                }}
              >
                Check Out
              </Link>
            )}
          </div>
          {CheckOutPage && (
            <button onClick={placeOrder} className="place-order">
              Place Order
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default ShoppingCart;
