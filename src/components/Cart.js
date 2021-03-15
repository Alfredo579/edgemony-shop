import "./ModalCart.css";
import ModalCartProduct from "./ModalCartProduct";

export default function Cart({
  cartProducts,
  totalPrice,
  removeFromCart,
  setProductQuantity,
  close
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
