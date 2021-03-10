import { useState } from "react";

import "./FilterProducts.css";

export default function FilterProduct({
  products,
  setSearchProduct,
  searchProduct,
  categoriesProducts,
  setCategoriesProduct,
  fetchCategories
}) {
  // const [categoriesProducts, setCategoriesProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/categories")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCategoriesProducts(data);
  //     });
  // }, []);

  // setCategoriesProduct(fetchCategories)

  // this work but in two click

  const filterProducts = (category) => {

      setSelectedCategories([...selectedCategories, category]);
  
      setSearchProduct(
        products.filter((pr) => selectedCategories.includes(pr.category))
      );
      console.log("category", category);
      console.log("selectedCategories", selectedCategories);
      console.log("searchProduct", searchProduct);
 
  };

  return (
    <div>
      {categoriesProducts.map((category, id) => {
        return (
          <button
            className={`${
              selectedCategories.includes(category)
                ? `btn-category selected`
                : `btn-category`
            }`}
            type="button"
            key={id + 1}
            onClickCapture={() => filterProducts(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
