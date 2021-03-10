import "./ModalCartProduct.css";

export default function ModalCartProduct({
  product,
  removeFromCart,
  setProductQuantity,
}) {
  const { image, title, price, quantity, id } = product;
  const increment = () => setProductQuantity(id, quantity + 1);
  const decrement = () => setProductQuantity(id, quantity - 1);
  const remove = () => removeFromCart(id);

  console.log(product);

  return (
    <main key={id} className="ModalCartProduct">
      <img className="product-img" src={image} alt="" />
      <h4 className="product-title">{title}</h4>
      <div className="qty-price-container">
        <div className="qty-container">
          <span onClick={increment} className="btn-qty">
             + 
          </span>
          <span className="product-qty"> {product.quantity} </span>
          <span
            onClick={product.quantity > 1 ? decrement : null}
            className="product-img"
          >
             - 
          </span>
        </div>
        <button type="button" className="btn-remove" onClick={remove}>Remove</button>
        <span className="product-price">{price} €</span>
      </div>
    </main>
  );
}
