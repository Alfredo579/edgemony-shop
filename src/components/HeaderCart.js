import { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";

import "./HeaderCart.css";
// import ModalCart from "./ModalCart";

export default function HeaderCart({
  cartProducts,
  ModalCartIsOpen,
  setModalCartIsOpen,
  totalPrice,
}) {

  useEffect(() => {
    if (ModalCartIsOpen) {
      document.body.style.height = `100vh`;
      document.body.style.overflow = `hidden`;
    } else {
      document.body.style.height = ``;
      document.body.style.overflow = ``;
    }
  }, [ModalCartIsOpen]);

  return (
    <div className="HeaderCart">
      {!!cartProducts.length && <h3>{totalPrice.toFixed(2)} €</h3>}
      <div className="cart-icon">
        <h3  onClick={cartProducts.length > 0 ? () => setModalCartIsOpen(!ModalCartIsOpen): null}>
          <FaCartPlus />
        </h3>
        {!!cartProducts.length && (
          <h3 className="cart-count">{cartProducts.length}</h3>
        )}
      </div>
     
    </div>
  );
}
