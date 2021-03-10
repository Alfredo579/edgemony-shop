import { useEffect, useState } from "react";

import './SearchProduct.css'

export default function SearchProduct({
  setSearchProduct,
  products,
  setRetry,
  searchProduct,
}) {
  const [inputProduct, setInputProduct] = useState("");

  useEffect(() => {
    console.log(inputProduct);
    if (products) {
      const result = products.filter(function (product) {
        return (
          product.title.toLowerCase().includes(inputProduct) ||
          product.description.toLowerCase().includes(inputProduct)
        );
      });

      setSearchProduct(result);
    }
    if (searchProduct.length > 0) {
      const result = searchProduct.filter(function (product) {
        return (
          product.title.toLowerCase().includes(inputProduct) ||
          product.description.toLowerCase().includes(inputProduct)
        );
      });

      setSearchProduct(result);
    } else {
      setRetry(false);
    }
  }, [inputProduct, products]);

  return (
    <input
      className="SearchProduct"
      type="text"
      value={inputProduct}
      onChange={(evt) => setInputProduct(evt.target.value)}
      placeholder="Search here... "
    />
  );
}
