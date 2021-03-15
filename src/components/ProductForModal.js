import "./ProductForModal.css";

function ProductForModal({
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

    <div className="ProductForModal">
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
 
  );
}

export default ProductForModal;
