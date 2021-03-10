import "./ModalProduct.css";

function ModalProduct({
  isOpenModal,
  closeModal,
  product,
  cartProducts,
  inCart,
  addToCart,
  removeFromCart,
}) {

  const toggleCart = () => {
    if (inCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product.id);
    }
  };

  return (
    <article
      className={`ModalProduct ${isOpenModal ? `ModalProduct` : `is-hidden`}`}
    >
      <div className="modal-product-overlay">
        <div className="modal-click-close" onClick={closeModal}></div>
        <div className="modal-product-body">
          <button
            className="btn-close-modal"
            type="button"
            onClick={closeModal}
          >
            X
          </button>

          <div className="imgModalContainer">
            <img src={product.image} alt={product.title} />
          </div>
          <h2 className="modal-product-price">{product.price} €</h2>
          <h2 className="modal-product-title">{product.title}</h2>
          <h3 className="modal-product-description">{product.description}</h3>
          <button
            disabled={cartProducts.includes(product)}
            className={`btn-addCart ${
              cartProducts.includes(product) ? `is-grey` : ``
            }`}
            onClick={toggleCart}
          >
            {inCart ? "Remove to Cart -" : "Add to Cart +"}
          </button>
        </div>
      </div>
    </article>
  );
}

export default ModalProduct;
