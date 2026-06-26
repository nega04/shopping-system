import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="page-shell empty-state">
      <div>
        <p className="eyebrow">Order confirmed</p>
        <h2>Thank you for shopping at Ilamai.</h2>
        <p>Your dreamy dress collection is on the way.</p>
        <Link to="/" className="btn btn-accent mt-3">
          Continue exploring
        </Link>
      </div>
    </div>
  );
}

export default Success;