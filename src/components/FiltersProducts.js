import { useEffect, useState } from "react";

export default function FilterProduct({
  products,
  setSearchProduct,
  searchProduct
}) {
  const [categoriesProducts, setCategoriesProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesProducts(data);
      });
  }, []);

  function filterProducts(category) {
    // setFilteredProduct(products.filter((pr) => pr.category === category));

    setSearchProduct(products.filter((pr) => pr.category === category));
  }

  return (
    <div>
      {categoriesProducts.map((category, id) => {
        return (
          <button
            type="button"
            key={id + 1}
            onClick={() => 
              filterProducts(category)
            }
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
