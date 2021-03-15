import "./ModalSidebar.css";

export default function ModalSidebar({ close, children, totalPrice }) {
  return (
    <div className="ModalSidebar">
      <div className="ModalSidebar modal-body">
        <header className="modal-head">
          <button type="button" onClick={close} className="btn-modal-close">
            X
          </button>
          <h2 className="modal-title">ModalSidebar</h2>
        </header>
        <div className="cart-product-container">
          {children}
        </div>

        <footer className="modal-footer">Total: {totalPrice} €</footer>
      </div>
     </div>
  );
}
