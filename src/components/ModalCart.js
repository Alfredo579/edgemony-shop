import "./ModalCart.css";
import ModalCartProduct from './ModalCartProduct'

export default function ModalCart({cartProduct, totalPrice, setModalCartIsOpen, modalCartIsOpen, setCartProduct}) {

    return ( 
         <div className="ModalCart">
            <div className="modal-overlay" onClick={() => setModalCartIsOpen(false)}></div>
            <div className="modal-body">
                <header className="modal-head">
                    <button type="button" onClick={() => setModalCartIsOpen(false)} className="btn-modal-close">X</button>
                    <h2 className="modal-title">Cart</h2>
                </header>

                <div className="cart-product-container">
                 {cartProduct.map((pr, id) => <ModalCartProduct setCartProduct={setCartProduct} cartProduct={cartProduct} product={pr} id={id}/>  ) }

                </div>


                
          
                <footer className="modal-footer">Total: {totalPrice} €</footer>
            </div>
        </div>
    )
}