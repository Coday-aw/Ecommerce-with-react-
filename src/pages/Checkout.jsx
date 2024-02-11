import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import "../components/Checkout.css";

const Checkout = () => {
  return (
    <>
      <h1>Check out</h1>
      <div className="check-out-container">
        <ShoppingCart CheckOutPage />
      </div>
    </>
  );
};

export default Checkout;
