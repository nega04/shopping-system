import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

function Navbar() {
  const { cart } = useContext(CartContext);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Ilamai
        </Link>
        <div className="d-flex align-items-center gap-3">
          <Link className="nav-link" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/cart">
            Cart {itemCount > 0 ? `(${itemCount})` : ""}
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;