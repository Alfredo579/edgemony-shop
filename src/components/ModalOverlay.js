import "./ModalOverlay.css";
export default function ModalOverlay({ close, children, totalPrice }) {
    return (
      <div className="ModalOverlay">
        <div className="modal-overlay" onClick={close}></div>
        {children}
    
      </div>
    );
  }
  