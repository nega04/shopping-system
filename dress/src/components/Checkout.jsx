import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../App";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleSubmit = (event) => {
    event.preventDefault();
    clearCart();
    navigate("/success");
  };

  if (cart.length === 0) {
    return (
      <div className="page-shell empty-state">
        <div>
          <h2>Your bag is empty.</h2>
          <Link to="/" className="btn btn-accent mt-3">
            Shop now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell checkout-layout">
      <div>
        <div className="section-heading">
          <p className="eyebrow">Secure checkout</p>
          <h2>Complete your order</h2>
        </div>

        <form className="form-grid" onSubmit={handleSubmit}>
          <input placeholder="Full name" required />
          <input placeholder="Phone number" required />
          <textarea rows="4" placeholder="Delivery address" required />
          <input placeholder="Card details" required />
          <button className="btn btn-accent" type="submit">
            Place order · ₹{total}
          </button>
        </form>
      </div>

      <div className="summary-card">
        <h3>Order preview</h3>
        {cart.map((item) => (
          <div className="summary-row" key={item.id}>
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}
        <div className="summary-row total">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>
    </div>
  );
}

export default Checkout;