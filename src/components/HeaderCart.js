import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

import "./HeaderCart.css";

export default function HeaderCart({
  cartProducts,
  totalPrice,
}) {
  return (
    <div className="HeaderCart">
      {!!cartProducts.length && <h3>{totalPrice}</h3>}
      <div className="cart-icon">
        <Link to="/Cart">
          <h3>
            <FaCartPlus />
          </h3>
        </Link>

        {!!cartProducts.length && (
          <h3 className="cart-count">{cartProducts.length}</h3>
        )}
      </div>
    </div>
  );
}
