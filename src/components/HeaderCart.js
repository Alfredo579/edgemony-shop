import { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";

import "./HeaderCart.css";
import ModalCart from "./ModalCart";

export default function HeaderCart({ cartProduct, setCartProduct }) {

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
   
   setTotalPrice(cartProduct.reduce((acc, pr) => acc + pr.price, 0)) 
  
  }, [cartProduct])

  const [ModalCartIsOpen, setModalCartIsOpen] = useState(false);

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
      {!!cartProduct.length && <h3>{totalPrice.toFixed(2)} €</h3>}
      <div className="cart-icon">
        <h3 onClick={() => setModalCartIsOpen(!ModalCartIsOpen)}>
          <FaCartPlus />
        </h3>
        {!!cartProduct.length && (
          <h3 className="cart-count">{cartProduct.length}</h3>
        )}
      </div>
      {ModalCartIsOpen ? (
        <ModalCart
          setModalCartIsOpen={setModalCartIsOpen}
          ModalCartIsOpen={ModalCartIsOpen}
          cartProduct={cartProduct}
          totalPrice={totalPrice}
          setCartProduct={setCartProduct}
        />
      ) : null}
    </div>
  );
}
