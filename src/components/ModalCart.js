import "./ModalCart.css";
import ModalCartProduct from "./ModalCartProduct";

export default function ModalCart({
  cartProducts,
  footerContent,
  close,
  removeFromCart,
  setProductQuantity,
}) {


  return (
    <div className="ModalCart">
      <div className="modal-overlay" onClick={close}></div>
      <div className="modal-body">
        <header className="modal-head">
          <button type="button" onClick={close} className="btn-modal-close">
            X
          </button>
          <h2 className="modal-title">Cart</h2>
        </header>

        <div className="cart-product-container">
          {cartProducts.length > 0 ? cartProducts.map((pr, id) => (
            <ModalCartProduct
              key={pr.id}
              product={pr}
              removeFromCart={removeFromCart}
              setProductQuantity={setProductQuantity}
            />
          )): <h3 className="cart-empty"> No have products to show!</h3>}
        </div>

        <footer className="modal-footer">Total: {footerContent} €</footer>
      </div>
    </div>
  );
}
