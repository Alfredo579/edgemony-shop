import { fetchProduct } from "../services/api";
import { useEffect, useState } from "react";
import "./ProductDetails.css";

import {
  useParams,
} from "react-router-dom";

function ProductDetails({setCartProducts, cartProducts, removeFromCart}) {
  let { productId } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    fetchProduct(productId).then((product) => {
      setProduct(product);
    });
  }, []);

  
  function isInCart(product) {
    return (
      product != null && cartProducts.find((p) => p.id === product.id) != null
    );
  }
  function addToCart(product) {
    setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
  }
 


  const toggleCart = () => {
    if (isInCart(product)) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };


  return (
    <>
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <hr />
      <h1>Product</h1>
      {product ? (
        <div className="ProductDetails">
          <div className="imgModalContainer">
            <img src={product.image} alt={product.title} />
          </div>
          <h2 className="modal-product-price">{product.price} €</h2>
          <h2 className="modal-product-title">{product.title}</h2>
          <h3 className="modal-product-description">{product.description}</h3>
          <button
            className={`btn-addCart`}
            onClick={toggleCart}
          >
            {isInCart(product) ? "Remove to Cart -" : "Add to Cart +"}
          </button>
        </div>
      ) : null}
    </>
  );
}

export default ProductDetails;
