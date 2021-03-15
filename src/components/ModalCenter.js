import "./ModalCenter.css";

function ModalCenter({
  isOpenModal,
  closeModal,
  children
}) {

  return (
    <article
      className={`ModalCenter ${isOpenModal ? `ModalCenter` : `is-hidden`}`}
    >
     
        <div className="modal-product-body">
          <button
            className="btn-close-modal"
            type="button"
            onClick={closeModal}
          >
            X
          </button>
          {children}

        </div>
     
    </article>
  );
}

export default ModalCenter;
