import "./ModalCart.css";
import ModalCartProduct from "./ModalCartProduct";
import PropTypes from "prop-types";

export default function Cart({
  cartProducts,
  removeFromCart,
  setProductQuantity,
}) {


  return (
    <div className="Cart">
      
        
    
        
          {cartProducts.length > 0 ? cartProducts.map((pr, id) => (
            <ModalCartProduct
              key={pr.id}
              product={pr}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
          )): <h3 className="cart-empty"> No have products to show!</h3>}
        

      
    </div>
  );
}

Cart.propTypes = {
  cartProducts: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  setProductQuantity: PropTypes.func.isRequired
}
