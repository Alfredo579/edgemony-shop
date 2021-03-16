
import ModalCartProduct from "../components/ModalCartProduct";
import PropTypes from "prop-types";

import "./Cart.css"

export default function Cart({
  setCartProducts,
  cartProducts,
  removeFromCart,
  footerContent
}) {

    function setProductQuantity(productId, quantity) {
        setCartProducts(
          cartProducts.map((product) =>
            product.id === productId ? { ...product, quantity } : product
          )
        );
      }
     
     


  return (
    <div className="Cart">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

          {cartProducts.length > 0 ? cartProducts.map((pr, id) => (
            <ModalCartProduct
              key={pr.id}
              product={pr}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
          )): <h3 className="cart-empty"> No have products to show!</h3>}

          <footer className="footer-cart">{footerContent}</footer>

    </div>
  );
}

Cart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired
}
