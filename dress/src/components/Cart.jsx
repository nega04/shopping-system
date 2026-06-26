import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../App";

function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="page-shell empty-state">
        <div>
          <h2>Your bag is feeling empty.</h2>
          <p>Pick a few favorites from the Ilamai collection.</p>
          <Link to="/" className="btn btn-accent mt-3">
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <div className="cart-layout">
        <div>
          <div className="section-heading">
            <p className="eyebrow">Your bag</p>
            <h2>Selected pieces</h2>
          </div>

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-body">
                <h4>{item.name}</h4>
                <p>{item.category}</p>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
              <div className="cart-item-actions">
                <strong>₹{item.price * item.quantity}</strong>
                <button className="text-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="summary-card">
          <h3>Order summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹{subtotal}</span>
          </div>
          <button className="btn btn-accent w-100" onClick={() => navigate("/checkout")}>Checkout</button>
          <button className="btn btn-outline w-100 mt-2" onClick={clearCart}>Clear bag</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;